// 闲鱼去广告
// 基于 kelee / RuCu6 的 jq 规则改写为脚本，便于按实际返回结构精确处理
const url = $request.url;
if (!$response.body) $done({});
let obj = JSON.parse($response.body);

if (url.includes("/mtop.taobao.idlehome.home.nextfresh/")) {
  // 首页：顶部只保留金刚区，信息流去掉轮播广告、妈妈广告，只留商品卡片
  if (Array.isArray(obj?.data?.homeTopList)) {
    obj.data.homeTopList = obj.data.homeTopList.filter((i) => i?.sectionType === "kingkongDo");
  }
  if (Array.isArray(obj?.data?.sections)) {
    obj.data.sections = obj.data.sections.filter((i) => {
      const ct = i?.data?.clickParam?.args?.cardType;
      if (ct === "homeMultiBanner" || ct === "mamaAD") return false;
      const name = i?.template?.name;
      return typeof name === "string" && (name === "idlefish_home_new_commodity_card" || name.includes("fish_home_tags_item_card"));
    });
  }
} else if (url.includes("/mtop.taobao.idlehome.widget.refresh.get/")) {
  // 首页顶部组件刷新：只保留金刚区
  if (Array.isArray(obj?.data?.homeTopList)) {
    obj.data.homeTopList = obj.data.homeTopList.filter((i) => i?.sectionType === "kingkongDo");
  }
} else if (url.includes("/mtop.taobao.idlehome.home.circle.list/")) {
  // 首页顶部 tab：只保留「首页」，去掉集市、圈子、回收等；去掉 tab 角标和圈子氛围图
  // data.headList 是当前显示用的，data.next.headList 是下一次的；上游只改了 next，所以两份都要处理
  for (const holder of [obj?.data, obj?.data?.next]) {
    if (Array.isArray(holder?.headList)) {
      holder.headList = holder.headList.filter((i) => i?.bizCode === "main");
      for (const h of holder.headList) if (h?.showInfo) delete h.showInfo.rightTagImage;
    }
    if (Array.isArray(holder?.circleList)) {
      for (const c of holder.circleList) if (c?.showInfo) { delete c.showInfo.titleImage; delete c.showInfo.atmosphereImageUrl; }
    }
  }
} else if (url.includes("/mtop.taobao.idle.home.whale.modulet/")) {
  // 首页模块：只保留小程序入口
  if (Array.isArray(obj?.data?.container?.sections)) {
    obj.data.container.sections = obj.data.container.sections.filter((i) => i?.template?.name === "fish_home_miniapp");
  }
} else if (url.includes("/mtop.taobao.idlehome.magic.home.page.list/")) {
  if (obj?.data?.topList) delete obj.data.topList;
} else if (url.includes("/mtop.taobao.idlemtopsearch.item.search.activate/")) {
  // 点击搜索栏后的页面：去掉「猜你可能在找」整块（带 keywords 的卡片，接口标题为「大家都在搜」）和推广热词
  if (Array.isArray(obj?.data?.cardList)) {
    obj.data.cardList = obj.data.cardList.filter((c) => !Array.isArray(c?.cardData?.keywords));
    for (const c of obj.data.cardList) if (c?.cardData?.hotwords) delete c.cardData.hotwords;
  }
} else if (url.includes("/mtop.taobao.idlemtopsearch.search.activate.tablist/")) {
  // 搜索页榜单面板（闲鱼热搜 / 搜索发现 / 省钱神券…）整块不显示；各 tab 内容接口另在重写中拦截
  if (Array.isArray(obj?.data?.tabList)) obj.data.tabList = [];
} else if (url.includes("/mtop.idle.user.page.my.adapter/")) {
  // 我的页面：只保留头部、用户信息、交易、评价、工具
  const keep = /^my_fy\d+_(header|user_info|trade|appraise|tools)$/;
  if (Array.isArray(obj?.data?.container?.sections)) {
    obj.data.container.sections = obj.data.container.sections.filter((s) => keep.test(s?.template?.name || ""));
    // 用户信息区的「闲鱼会员 Xn」等级横幅。区域高度由模板固定：删除后留空白；
    // 置 valid=false 模板不认，会显示默认等级图。用户选择删除、接受空白
    for (const s of obj.data.container.sections) if (s?.item?.level) delete s.item.level;
  }
  if (obj?.data?.ability) delete obj.data.ability;
}

$done({ body: JSON.stringify(obj) });
