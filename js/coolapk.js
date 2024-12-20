/***********************************
 * 
> 应用名称：酷安优化

[rewrite_local]

# 去除薅羊毛页面广告
^https?:\/\/api.coolapk.com\/v6\/topic\/newTagDetail url script-response-body https://raw.githubusercontent.com/ifls4816/ios-qx-script/master/js/coolapk.js
# > 酷安_开屏广告@ddgksf2013
^https?:\/\/api.coolapk.com\/v6\/main\/init url script-response-body https://github.com/ddgksf2013/Scripts/raw/master/coolapk.js
# > 酷安_推广广告@ddgksf2013
^https?:\/\/api.coolapk.com\/v6\/dataList url script-response-body https://github.com/ddgksf2013/Scripts/raw/master/coolapk.js
# > 酷安_首页广告@ddgksf2013
^https?:\/\/api.coolapk.com\/v6\/main\/indexV8 url script-response-body https://github.com/ddgksf2013/Scripts/raw/master/coolapk.js
# > 酷安_评论广告@ddgksf2013
^https?:\/\/api.coolapk.com\/v6\/feed\/replyList url script-response-body https://github.com/ddgksf2013/Scripts/raw/master/coolapk.js
# > 酷安_商品推广@ddgksf2013
^https?:\/\/api.coolapk.com\/v6\/feed\/detail url script-response-body https://github.com/ddgksf2013/Scripts/raw/master/coolapk.js
# > 酷安_屏蔽热词@ddgksf2013
^https?:\/\/api\.coolapk\.com\/v6\/search\?.*type=hotSearch url reject-dict

[mitm] 

hostname=api.coolapk.com

***********************************/
const version = 'V1.0.10'

if (-1 != $request.url.indexOf('replyList')) {
  var t = JSON.parse($response.body)
  t.data.length && (t.data = t.data.filter((t) => t.id)), $done({ body: JSON.stringify(t) })
} else if (-1 != $request.url.indexOf('main/init')) {
  var t = JSON.parse($response.body)
  t.data.length && (t.data = t.data.filter((t) => !(945 == t.entityId || 6390 == t.entityId))),
    $done({ body: JSON.stringify(t) })
} else if (-1 != $request.url.indexOf('indexV8')) {
  var t = JSON.parse($response.body)
  ;(t.data = t.data.filter(
    (t) =>
      !(
        'sponsorCard' == t.entityTemplate ||
        8639 == t.entityId ||
        29349 == t.entityId ||
        33006 == t.entityId ||
        32557 == t.entityId ||
        -1 != t.title.indexOf('值得买') ||
        -1 != t.title.indexOf('红包')
      ),
  )),
    $done({ body: JSON.stringify(t) })
} else if (-1 != $request.url.indexOf('dataList')) {
  var t = JSON.parse($response.body)
  ;(t.data = t.data.filter(
    (t) => !('sponsorCard' == t.entityTemplate || -1 != t.title.indexOf('精选配件')),
  )),
    $done({ body: JSON.stringify(t) })
} else if (-1 != $request.url.indexOf('detail')) {
  var t = JSON.parse($response.body)
  t.data?.hotReplyRows?.length && (t.data.hotReplyRows = t.data.hotReplyRows.filter((t) => t.id)),
    t.data?.topReplyRows?.length && (t.data.topReplyRows = t.data.topReplyRows.filter((t) => t.id)),
    t.data?.include_goods_ids && (t.data.include_goods_ids = []),
    t.data?.include_goods && (t.data.include_goods = []),
    t.data?.detailSponsorCard && (t.data.detailSponsorCard = []),
    $done({ body: JSON.stringify(t) })
} else if ($request.url.indexOf('newTagDetail') != -1) {
  try {
    var t = JSON.parse($response.body)
    t.data.recommendRows = []
    t.data.intro = ''
    t.recent_follow_list = []
    t.follownum_txt = ''
    let arr = t.data.tabList.map((v) => {
      if (v.title == '最近回复' || v.title == '最新发布') return v
    })
    arr = arr.filter((v) => v !== undefined)
    t.data.tabList = arr
    $done({ body: JSON.stringify(t) })
  } catch (err) {
    console.log('酷安薅羊毛页面出错', err)
  }
} else $done($response)