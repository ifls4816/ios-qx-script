// 酷安去广告（基于 RuCu6 的 jq 规则改写成脚本，调试时能看到原始响应）
const url = $request.url;
let obj;
try { obj = JSON.parse($response.body); } catch (e) {}

const isAd = (i) => i && (i.entityTemplate === "sponsorCard");

if (obj && obj.data !== undefined) {
  const d = obj.data;
  // 话题页插屏弹窗（如「薅羊毛小分队」的淘宝开红包），图片和跳转在 interstitialAdCard.extraData 里
  if (d && typeof d === "object" && !Array.isArray(d)) delete d.interstitialAdCard;
  if (/\/v6\/feed\/detail\?/.test(url)) {
    if (Array.isArray(d.hotReplyRows)) d.hotReplyRows = d.hotReplyRows.filter((i) => i && i.id);
    if (Array.isArray(d.topReplyRows)) d.topReplyRows = d.topReplyRows.filter((i) => i && i.id);
    for (const k of ["detailSponsorCard", "include_goods", "include_goods_ids"]) d[k] = [];
  } else if (/\/v6\/feed\/replyList/.test(url)) {
    if (Array.isArray(d)) obj.data = d.filter((i) => i && i.id);
  } else if (/\/v6\/main\/dataList/.test(url)) {
    if (Array.isArray(d)) obj.data = d.filter((i) => !isAd(i) && i.title !== "精选配件");
  } else if (/\/v6\/page\/dataList/.test(url)) {
    if (Array.isArray(d)) obj.data = d.filter((i) => !isAd(i) && i.title !== "酷安热搜" && i.entityTemplate !== "imageScaleCard");
  } else if (/\/v6\/main\/indexV8/.test(url)) {
    if (Array.isArray(d)) obj.data = d.filter((i) => !isAd(i) && ![8639, 29349, 33006, 32557].includes(i.entityId) && !/值得买|红包/.test(i.title || ""));
  } else if (/\/v6\/main\/init/.test(url)) {
    if (Array.isArray(d)) {
      obj.data = d.filter((i) => ![944, 945, 6390].includes(i && i.entityId));
      for (const i of obj.data) {
        if (i.entityId === 20131 && Array.isArray(i.entities)) i.entities = i.entities.filter((e) => e.title !== "酷品");
        // 首页搜索框轮播推广词（「热门搜索/社区版」卡片），保留卡片只清空词条，避免 App 回退到本地缓存
        if (i.entityId === 24455 || /热门搜索/.test(i.title || "")) i.entities = [];
      }
    }
  }
  $done({ body: JSON.stringify(obj) });
} else {
  $done({});
}
