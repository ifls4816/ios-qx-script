if ($request.url.indexOf('newTagDetail') != -1) {
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
