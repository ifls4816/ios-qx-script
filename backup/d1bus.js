// if ($request.url.indexOf('appCallBlack') != -1) {
//   var obj = JSON.parse($response.body)
//   var targetObj = {
//     payOrderID: 10859584,
//     serverLocTime: '2023-06-20 18:40:38',
//     UserName: ' ',
//     isCompanyLine: false,
//     resource: 'http://api.d1-bus.com/',
//     d1_social_bus_uuid_api: '2efc9da2-9307-499d-a468-de0394fae772',
//     countdown: -300,
//     discount: 0.0,
//     morOrEve: 2,
//     useType: '',
//     PassWord: ' ',
//     is_show_new_year: '0',
//     result: '操作成功',
//     memberCouponID: 2159949,
//     isCompanyPay: false,
//     balance: 0.0,
//     money: 10.0,
//     freeyRideTime: '',
//     now: '2023-06-20 18:40:38',
//     is_show_forum: '1',
//     status: 0,
//   }
//   $done({ body: JSON.stringify(targetObj) })
// }
// else if ($request.url.indexOf('getShartCouponParam') != -1) {
//   const o = {
//     serverLocTime: '2023-06-14 18:50:04',
//     UserName: ' ',
//     isshare: 0,
//     resource: 'http://api.d1-bus.com/',
//     d1_social_bus_uuid_api: '80f5f3ff-d2b6-4954-bf8f-459cbabe5025',
//     couponPackageID: 0,
//     payorderID: 10821765,
//     PassWord: ' ',
//     is_show_new_year: '0',
//     result: '',
//     now: '2023-06-14 18:50:04',
//     imageURL: 'http://web.d1-bus.com/H5dir/register20180913/image/btn_lingquyouhuiquan%402x.png',
//     busLineID: 603,
//     is_show_forum: '1',
//     membershartcouponID: 815603,
//     memberID: 7555530,
//     status: 0,
//   }
//   $done({ body: JSON.stringify(o) })
// } else if ($request.url.indexOf('drivenBusListAll--') != -1) {
//   // 乘车页tab
//   var o = {
//     serverLocTime: '2023-06-13 18:50:10',
//     UserName: ' ',
//     resource: 'http://api.d1-bus.com/',
//     d1_social_bus_uuid_api: '80f5f3ff-d2b6-4954-bf8f-459cbabe5025',
//     copywritingFoot: '请第一时间添加嘀一官方客服微信\n了解线路相关信息',
//     list: [
//       {
//         beanCode: '84494207555530101042',
//         BusInfoID: 349,
//         CompanyID: 0,
//         MemberTicketDetailID: 14660417,
//         BoardTime: '2023-06-13 19:05:00',
//         morOrEve: 2,
//         LineCode: '',
//         RideStationID: 6376,
//         VerifyCode: '4494',
//         DebusStationDate: '20:09:00',
//         StarTime: '19:05:00',
//         IsHaveTicket: false,
//         ArrivalTime: '20:39:00',
//         RideStationTime: '19:14:00',
//         Status: 1,
//         HaveTicketTime: null,
//         StartStation: '融科橄榄城（公交站）',
//         schphonum: 0,
//         Gid: 0,
//         RideStationDate: '19:14:00',
//         BusLineID: 603,
//         busStatus: 0,
//         TicketDate: '2023-06-13',
//         EndStation: '环湖小镇',
//         StartStationID: 6365,
//         DebusStationTime: '20:09:00',
//         BusLineTimeID: 1042,
//         NaviShow: 0,
//         JM: '',
//         EndTime: '20:39:00',
//         seatKey: '',
//         CarNo: '京AAN810',
//         TicketStatus: '0',
//         isInvAllByServer: 0,
//         DebusStationID: 6372,
//         EndBoardTime: '21:05:00',
//         DepartTime: '19:05:00',
//         freeyRideTime: '',
//         isShowPhoto: 0,
//         BusLineTimeScheduleID: 697300,
//         TicketType: 'day',
//         StartBoardTime: '17:05:00',
//         LineType: 'line',
//         imgStrQR: 'http://pics.d1-bus.com/upload/323922dc-602a-4574-b851-b12935e5f54b.png',
//         buslineStatus: 0,
//         BusLineName: 'DW36（晚班）望京～华业东方玫瑰',
//         RideStation: '双鹤药业五环入口',
//         message: '发车前20分钟以内上车',
//         EndStationID: 6374,
//         DebusStation: '旗舰凯旋',
//         buslinetimeStatus: 0,
//         isFranchisee: 0,
//         stationList: [
//           {
//             Address: '',
//             IsStation: true,
//             StationDate: '19:05:00',
//             Latitude: 39.997498,
//             IntervalTime: 0,
//             PictureJson: '[]',
//             StationID: 6365,
//             Longitude: 116.482585,
//             Describea: '',
//             StationName: '融科橄榄城（公交站）',
//             Type: false,
//             isshowpic: 0,
//             mapText: '预估',
//             Rim: '',
//             listText: '',
//           },
//           {
//             Address: '',
//             IsStation: true,
//             StationDate: '19:07:00',
//             Latitude: 40.000472,
//             IntervalTime: 2,
//             PictureJson: '[]',
//             StationID: 6366,
//             Longitude: 116.484962,
//             Describea: '',
//             StationName: '绿地中心（西北角）',
//             Type: false,
//             isshowpic: 0,
//             mapText: '预估',
//             Rim: '',
//             listText: '',
//           },
//           {
//             Address: '',
//             IsStation: true,
//             StationDate: '19:12:00',
//             Latitude: 40.011402,
//             IntervalTime: 5,
//             PictureJson: '[]',
//             StationID: 6367,
//             Longitude: 116.478443,
//             Describea: '',
//             StationName: '中国数码港大厦（路口）',
//             Type: false,
//             isshowpic: 0,
//             mapText: '预估',
//             Rim: '',
//             listText: '',
//           },
//           {
//             Address: '',
//             IsStation: true,
//             StationDate: '19:14:00',
//             Latitude: 40.010723,
//             IntervalTime: 2,
//             PictureJson: '[]',
//             StationID: 6376,
//             Longitude: 116.48252,
//             Describea: '',
//             StationName: '双鹤药业五环入口',
//             Type: false,
//             isshowpic: 0,
//             mapText: '预估',
//             Rim: '',
//             listText: '',
//           },
//           {
//             Address: '',
//             IsStation: false,
//             StationDate: '19:14:00',
//             Latitude: 39.909782,
//             IntervalTime: 0,
//             PictureJson: '[]',
//             StationID: 6369,
//             Longitude: 116.54171,
//             Describea: '',
//             StationName: '',
//             Type: false,
//             isshowpic: 0,
//             mapText: '预估',
//             Rim: '',
//             listText: '',
//           },
//           {
//             Address: '',
//             IsStation: true,
//             StationDate: '19:59:00',
//             Latitude: 39.902203,
//             IntervalTime: 45,
//             PictureJson: '[]',
//             StationID: 6375,
//             Longitude: 116.638564,
//             Describea: '',
//             StationName: '通州北苑',
//             Type: true,
//             isshowpic: 0,
//             mapText: '预估',
//             Rim: '',
//             listText: '',
//           },
//           {
//             Address: '',
//             IsStation: true,
//             StationDate: '20:06:00',
//             Latitude: 39.88729,
//             IntervalTime: 7,
//             PictureJson: '[]',
//             StationID: 6371,
//             Longitude: 116.653327,
//             Describea: '',
//             StationName: '蓝调沙龙',
//             Type: true,
//             isshowpic: 0,
//             mapText: '预估',
//             Rim: '',
//             listText: '',
//           },
//           {
//             Address: '',
//             IsStation: true,
//             StationDate: '20:09:00',
//             Latitude: 39.87806,
//             IntervalTime: 3,
//             PictureJson: '[]',
//             StationID: 6372,
//             Longitude: 116.647487,
//             Describea: '',
//             StationName: '旗舰凯旋',
//             Type: true,
//             isshowpic: 0,
//             mapText: '预估',
//             Rim: '',
//             listText: '',
//           },
//           {
//             Address: '',
//             IsStation: true,
//             StationDate: '20:12:00',
//             Latitude: 39.875506,
//             IntervalTime: 3,
//             PictureJson: '[]',
//             StationID: 6373,
//             Longitude: 116.66247,
//             Describea: '',
//             StationName: '云景里',
//             Type: true,
//             isshowpic: 0,
//             mapText: '预估',
//             Rim: '',
//             listText: '',
//           },
//           {
//             Address: '',
//             IsStation: true,
//             StationDate: '20:14:00',
//             Latitude: 39.875465,
//             IntervalTime: 2,
//             PictureJson: '[]',
//             StationID: 32857,
//             Longitude: 116.668638,
//             Describea: '',
//             StationName: '金侨时代家园',
//             Type: true,
//             isshowpic: 0,
//             mapText: '',
//             Rim: '',
//             listText: '',
//           },
//           {
//             Address: '',
//             IsStation: true,
//             StationDate: '20:19:00',
//             Latitude: 39.88215,
//             IntervalTime: 5,
//             PictureJson: '[]',
//             StationID: 33367,
//             Longitude: 116.684043,
//             Describea: '',
//             StationName: '华业东方玫瑰',
//             Type: true,
//             isshowpic: 0,
//             mapText: '',
//             Rim: '',
//             listText: '',
//           },
//           {
//             Address: '',
//             IsStation: true,
//             StationDate: '20:39:00',
//             Latitude: 39.845575,
//             IntervalTime: 20,
//             PictureJson: '[]',
//             StationID: 6374,
//             Longitude: 116.738252,
//             Describea: '',
//             StationName: '环湖小镇',
//             Type: true,
//             isshowpic: 0,
//             mapText: '预估',
//             Rim: '',
//             listText: '',
//           },
//         ],
//         PastTime: '2023-06-12 20:39:00',
//         isInvAllByApp: 0,
//       },
//     ],
//     PassWord: ' ',
//     is_show_new_year: '0',
//     result: '操作成功',
//     noticketmemo: '近两个工作日内您暂无行程哟 \\n（点击我的-我的订单-出行安排可查看所有车票）',
//     now: '2023-06-12 18:50:10',
//     copywritingTitle: '一人一座　·　轻松上下班',
//     is_show_forum: '1',
//     status: 0,
//   }
//   // var obj = JSON.parse($response.body)
//   $done({ body: JSON.stringify(o) })
// } else if ($request.url.indexOf('getVerifyCode--') != -1) {
//   // 出示车票接口
//   var a = {
//     // "beanCode": "97943914010403555570",
//     beanCode: '84494207555530101042',
//     serverLocTime: '2023-06-14 18:45:26',
//     isTicket: '0',
//     UserName: ' ',
//     resource: 'http://api.d1-bus.com/',
//     tipsStr: '',
//     d1_social_bus_uuid_api: '80f5f3ff-d2b6-4954-bf8f-459cbabe5025',
//     seatKey: '',
//     adList: [
//       // "{\"advertiseMentID\":\"1290\",\"Pic\":\"http://pics.d1-bus.com/http://pics.d1-bus.com/upload/48d3ef08-36fd-4442-9762-3b9a14ea8647.png\",\"title\":\"6.13\",\"url\":\"\",\"islogin\":\"0\",\"dataJson\":\"{\\\"code\\\":\\\"SkipApplets\\\",\\\"androidClassName\\\":\\\"SkipApplets\\\",\\\"data\\\":{\\\"path\\\":\\\"pages/common/blank-page/index?weappSharePath=pages%2Fhome%2Ffeature%2Findex%3Falias%3D8rgXqDcfCM%26kdt_id%3D91451219\\\",\\\"appId\\\":\\\"wxf143a66eb7528d12\\\",\\\"userName\\\":\\\"gh_2aa45dfef1ad\\\",\\\"miniprogramType\\\":\\\"0\\\"},\\\"posion\\\":\\\"0\\\",\\\"iosClassName\\\":\\\"SkipApplets\\\",\\\"position\\\":\\\"0\\\"}\"}"
//     ],
//     PassWord: ' ',
//     is_show_new_year: '0',
//     result: '操作成功',
//     seatType: '',
//     seatNum: '',
//     now: '2023-06-14 18:45:26',
//     haveTicketTime: '',
//     isPast: '0',
//     is_show_forum: '1',
//     status: 0,
//   }
//   $done({ body: JSON.stringify(a) })
// } else {

// }

// const f = {
//   noContainGiveMoney: 0,
//   payOrderID: 0,
//   serverLocTime: '2023-06-21 17:36:16',
//   UserName: ' ',
//   resource: 'http://api.d1-bus.com/',
//   d1_social_bus_uuid_api: '2efc9da2-9307-499d-a468-de0394fae772',
//   PassWord: ' ',
//   is_show_new_year: '0',
//   result: '操作失败',
//   memberRechargeMoney: 0,
//   memberGiveMoney: 0,
//   balance: 0,
//   now: '2023-06-21 17:36:16',
//   busLineID: 0,
//   is_show_forum: '1',
//   memberID: 7558551,
//   status: 1,
// }

const urlArr = $request.url.split('/')
const length = urlArr.length - 1
const urlName = urlArr[length]
if (
  ![
    'getBusLocus',
    'getSkin',
    'OperationLog',
    'PrivacyNotice',
    'areaList',
    'getFloatButtonInfo',
    'toCommitCommentsNo',
    'selDayTicket', // 日票界面
  ].includes(urlName)
) {
  console.log('------------------------------start')
  console.log(
    JSON.stringify({
      'PATH======>>>': $request.url,
      // 'REQ>>>>>>>>>': $request,
      'BODY------>>>': $response.body,
    }),
  )
  console.log('==============================end')
}
var obj = JSON.parse($response.body)
$done({ body: JSON.stringify(obj) })

// http://api.d1-bus.com/coupon/getAvailableCouponList 查询可用优惠券

// http://api.d1-bus.com/payorder/cancelPayOrder 取消订单

// http://api.d1-bus.com/ticket/buyTicket 创建订单