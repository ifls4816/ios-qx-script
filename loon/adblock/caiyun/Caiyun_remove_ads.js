// 彩云天气去广告（基于 kelee 脚本修改）
const url = $request.url;
let obj = JSON.parse($response.body);

if (/\/(?:wrapper\.cyapi\.cn|api\.caiyunapp\.com|cdn-w\.caiyunapp\.com)\/v1\/activity\?/.test(url)) {
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
} else if (/\/starplucker\.cyapi\.cn\/v3\/config(?:\?|$)/.test(url)) {
  // 首页、地图页卡片排序中的广告位（AD20/AD21/AD22、AD30/AD31/AD32 等），正常卡片 C01… 保持原顺序
  for (const k of ["pic_page_card_orders", "map_page_card_orders"]) {
    if (Array.isArray(obj?.[k])) obj[k] = obj[k].filter((i) => !/^AD\d*$/i.test(i?.name || ""));
  }
} else {
  obj = null;
}

$done(obj === null ? {} : { body: JSON.stringify(obj) });
