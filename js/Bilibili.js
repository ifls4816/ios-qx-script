/***********************************

[rewrite_local]
# ======= BiliJson 播放页处理 ======= #
# ～ BiliBili_哔哩哔哩_屏蔽广告浮窗@ddgksf2013
^https?:\/\/api\.bilibili\.com\/pgc\/activity\/deliver\/material\/receive url reject-dict
# ～ BiliBili_哔哩哔哩_Material_Ad@ddgksf2013
^https?:\/\/api\.bilibili\.com\/x\/vip\/ads\/material\/report url reject-dict
# ～ BiliBili_哔哩哔哩_小卡片广告@ddgksf2013
^https://api.bilibili.com/pgc/season/player/cards url reject-dict

# ======= BiliJson 开屏及隐私 ======= #
# ～ BiliBili_哔哩哔哩_屏蔽IP请求@ddgksf2013
^https?:\/\/app\.bilibili\.com\/x\/resource\/ip url reject
# ～ BiliBili_哔哩哔哩_应用开屏去广告@bm7
^https://app.bilibili.com/x/v2/splash/show url reject-dict
# ～ BiliBili_哔哩哔哩_应用开屏广告预加载@yjqiang
^https:\/\/app\.bilibili\.com\/x\/v2\/splash\/list url script-response-body https://github.com/ddgksf2013/Scripts/raw/master/bilibili_json.js

# ～ BiliBili_哔哩哔哩_屏蔽首页右上活动@ddgksf2013
^https?:\/\/app\.bilibili\.com\/x\/resource\/top\/activity url script-response-body https://github.com/ddgksf2013/Scripts/raw/master/bilibili_json.js
# ～ BiliBili_哔哩哔哩_热搜发现@ddgksf2013
^https://app.bilibili.com/x/v2/search/square url script-response-body https://github.com/ddgksf2013/Scripts/raw/master/bilibili_json.js


# ======= BiliProto 处理 ======= #
# ～ BiliBili_哔哩哔哩_屏蔽DefaultWord@ddgksf2013
^https?:\/\/(app\.bilibili\.com|grpc\.biliapi\.net)\/bilibili\.app\.interface\.v1\.Search\/Default url reject
# ～ BiliBili_哔哩哔哩_搜索去广告@BiliUniverse
^https?:\/\/(grpc\.biliapi\.net|app\.bilibili\.com)\/bilibili\.polymer\.app\.search\.v1\.Search\/SearchAll$ url script-response-body https://github.com/ddgksf2013/Scripts/raw/master/bilibili_proto_beta.js
# ～ BiliBili_哔哩哔哩_交互点赞投票弹幕及会员弹幕@BiliUniverse
^https?:\/\/(app\.bilibili\.com|grpc\.biliapi\.net)\/bilibili\.community\.service\.dm\.v1\.DM\/(DmView|DmSegMobile) url script-response-body https://github.com/ddgksf2013/Scripts/raw/master/bilibili_proto_beta.js
# ～ BiliBili_哔哩哔哩_动态综合页及视频页去广告@BiliUniverse
^https?:\/\/(app\.bilibili\.com|grpc\.biliapi\.net)\/bilibili\.app\.dynamic\.v2\.Dynamic\/Dyn(All|Video)$ url script-response-body https://github.com/ddgksf2013/Scripts/raw/master/bilibili_proto_beta.js

[mitm] 
hostname = -broadcast.chat.bilibili.com, -*cdn*.biliapi.net, -*tracker*.biliapi.net, app.bilibili.com, *.bilibili.com, *.bili*.*, *.bilibili.*, grpc.biliapi.net,*biliapi.net

***********************************/