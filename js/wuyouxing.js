/***********************************
 * 
> 应用名称：无忧行

[rewrite_local]

# 屏蔽首页相关接口
^https?:\/\/app3.jegotrip.com.cn\/api\/destination\/v1\/destination\/getDestinationById url reject
^https?:\/\/app3.jegotrip.com.cn\/api\/layout\/v1\/init\/destinationModel url reject
^https?:\/\/app3.jegotrip.com.cn\/api\/destination\/v1\/banner\/getDestBanners url reject
^https?:\/\/app3.jegotrip.com.cn\/api\/destination\/v1\/queryGlobalStrategyData url reject
^https?:\/\/app3.jegotrip.com.cn\/api\/destination\/v1\/banner\/getDestBanners url reject
^https?:\/\/app3.jegotrip.com.cn\/api\/destination\/v1\/rec\/columnListByRegion url reject
^https?:\/\/app3.jegotrip.com.cn\/api\/destination\/v1\/poi\/queryJegoListAndNameByDestinationId url reject
^https?:\/\/app3.jegotrip.com.cn\/api\/destination\/v1\/rec/queryData url reject

[mitm] 

hostname=app3.jegotrip.com.cn

***********************************/