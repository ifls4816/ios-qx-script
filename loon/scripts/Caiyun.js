// 彩云天气去广告脚本
const url = $request.url;
let obj = null;
try { obj = JSON.parse($response.body); } catch (e) {}

function finish(o) {
  $done(o === null ? {} : { body: JSON.stringify(o) });
}

if (obj === null) {
  finish(null); // 非 JSON，原样放行
} else if (/^https:\/\/wrapper\.cyapi\.cn\/v2\.\d+\/[^/]+\/[\d.-]+,[\d.-]+\/weather\?/.test(url)) {
  // 天气接口：把当天/明天的尾号限行拼到首页提示语后面。
  // 登录令牌过期后首页左上角的限行图标不再显示，而限行接口 vehicle_limit 只用天气接口同一个公开 token，不需要登录
  appendVehicleLimit(obj);
} else if (/\/(?:wrapper\.cyapi\.cn|api\.caiyunapp\.com|cdn-w\.caiyunapp\.com)\/v1\/activity\?/.test(url)) {
  // 活动配置：App 会从 wrapper.cyapi.cn 和 api.caiyunapp.com 两路拉取同一套配置，两路处理必须一致。
  // 只处理确认是推广的类型，其余原样放行：A02 快捷图标（限行、空气质量、主题）、P01 地图策略、C01 降雨预报卡片，
  // 以及服务器本来就返回 {"status":"failed"} 的 P02/A06/A09/A14/F10/F11 等。不再统一替换成假的「成功+空条目」
  // A04 小助手 tab 图标、A05「彩云天气 API」横幅、A08 节日活动、W04 反馈弹窗
  const removeTypes = ["A04", "A05", "A08", "W04"];
  const typeId = (url.match(/[?&]type_id=(\w+)/) || [])[1];
  if (removeTypes.includes(typeId)) {
    // 只清空列表，保留 status/interval/id
    if (Array.isArray(obj?.activities)) obj.activities = [];
  } else if (typeId === "A03") {
    // 底栏小助手(tabbar aichat)、首页运营图(operational)、AI 语音：保留条目只把开关置 false。
    // 直接清空列表 App 会继续用本地缓存，小助手 tab 仍会显示
    if (obj?.interval) obj.interval = 2592000; // 30 天
    if (Array.isArray(obj?.activities)) {
      for (const item of obj.activities) {
        if (item && "feature" in item) item.feature = false;
      }
    }
  } else {
    obj = null; // 原样放行
  }
  finish(obj);
} else if (/\/starplucker\.cyapi\.cn\/v3\/config(?:\?|$)/.test(url)) {
  // 首页、地图页卡片排序中的广告位（AD20/AD21/AD22、AD30/AD31/AD32 等），正常卡片 C01… 保持原顺序
  for (const k of ["pic_page_card_orders", "map_page_card_orders"]) {
    if (Array.isArray(obj?.[k])) obj[k] = obj[k].filter((i) => !/^AD\d*$/i.test(i?.name || ""));
  }
  finish(obj);
} else {
  finish(null);
}

function appendVehicleLimit(weather) {
  const m = url.match(/\/v2\.\d+\/([^/]+)\/([\d.-]+),([\d.-]+)\/weather/);
  const r = weather?.result;
  if (!m || !r || typeof r.forecast_keypoint !== "string") return finish(null);
  const [, token, lng, lat] = m;
  // 同一位置一小时内复用结果：App 一次启动会请求好几次天气
  const cacheKey = "caiyun_vehicle_limit_v3"; // 改了文案格式就换个 key，免得手机上还显示一小时旧缓存
  const place = Number(lng).toFixed(2) + "," + Number(lat).toFixed(2);
  const today = dateInChina(0);
  let cache = null;
  try { cache = JSON.parse($persistentStore.read(cacheKey) || "null"); } catch (e) {}
  if (cache && cache.place === place && cache.day === today && Date.now() - cache.time < 3600e3) {
    return finish(applyText(weather, cache.text));
  }
  let closed = false;
  const done = (text) => {
    if (closed) return;
    closed = true;
    finish(applyText(weather, text));
  };
  setTimeout(() => done(""), 1500); // 限行接口慢就不等了，天气照常显示
  $httpClient.get({ url: `https://wrapper.cyapi.cn/v1/vehicle_limit?token=${token}&lng=${lng}&lat=${lat}` }, (err, resp, body) => {
    let text = "";
    try {
      if (!err && resp && resp.status === 200) {
        text = limitText(JSON.parse(body));
        $persistentStore.write(JSON.stringify({ place, day: today, time: Date.now(), text }), cacheKey);
      }
    } catch (e) {}
    done(text);
  });
}

// 例：限行：今日1 6，明日2 7；周末尾号字段是 "W"，按不限行处理；城市不限行时 result 为空，保留原提示语
function limitText(data) {
  const days = Array.isArray(data?.result) ? data.result : [];
  if (!days.length) return "";
  const pick = (date) => {
    const day = days.find((d) => d.date === date);
    if (!day) return null;
    const nums = (day.limits || []).map((l) => String(l.limitNumber || "")).join(",").match(/\d/g);
    return { nums: nums ? [...new Set(nums)].join(" ") : "" };
  };
  const t = pick(dateInChina(0));
  const n = pick(dateInChina(1));
  if (!t && !n) return "";
  const part = (label, d) => (!d ? "" : d.nums ? `${label}${d.nums}` : `${label}不限行`);
  const s = [part("今日", t), part("明日", n)].filter(Boolean).join("，");
  if (!/\d/.test(s)) return "今明两天不限行";
  return `限行：${s}`;
}

function applyText(weather, text) {
  if (!text) return weather;
  // 首页提示语只显示限行，原来的降雨提示不再放这里；minutely.description 是降水图页面用的，保持原样。
  // 拿不到限行（城市不限行、接口超时）时保留原提示语，避免这一栏空着
  weather.result.forecast_keypoint = text;
  return weather;
}

function dateInChina(offsetDays) {
  return new Date(Date.now() + 8 * 3600e3 + offsetDays * 86400e3).toISOString().slice(0, 10);
}
