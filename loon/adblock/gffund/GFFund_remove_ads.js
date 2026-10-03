// 广发基金去开屏广告
// 开屏与各位置横幅共用 get_banner_info.vir（开屏 page=34，参数在编码后的请求体里），只删除标记为「开屏」的条目
// 开屏后约 4 秒的等待是 App 内置计时，返回空列表或「获取失败」都不会缩短，所以不做处理
if (!$response.body) $done({});
let obj = JSON.parse($response.body);

if (Array.isArray(obj?.banner_list)) {
  obj.banner_list = obj.banner_list.filter((i) => i?.exposure_way !== "开屏");
}

$done({ body: JSON.stringify(obj) });
