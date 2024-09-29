/** 這隻檔案為自動生成，請勿更動 */
import { type AxiosRequestConfig } from 'axios'
import { SportAPI } from './client/instance'
export { cancelRequest, useSWR } from './utils'

/**
 * 1.体育新版菜单接口
 * 1.1.返回指定画面(EX:滚球,早盘,冠军)下有赔率的球类及菜单
 * @see https://sportsapidoc-2.cxsport.net/apidoc/%E4%BD%93%E8%82%B2%E6%8E%A5%E5%8F%A3%E6%96%87%E6%A1%A3/#_1_1_%E8%BF%94%E5%9B%9E%E6%8C%87%E5%AE%9A%E7%94%BB%E9%9D%A2(EX%3A%E6%BB%9A%E7%90%83%2C%E6%97%A9%E7%9B%98%2C%E5%86%A0%E5%86%9B)%E4%B8%8B%E6%9C%89%E8%B5%94%E7%8E%87%E7%9A%84%E7%90%83%E7%B1%BB%E5%8F%8A%E8%8F%9C%E5%8D%95
 */
export const reqV1SportQuery = async function (this: AxiosRequestConfig | void, params?: API_V1_SPORT_QUERY.REQ): Promise<API_V1_SPORT_QUERY.RES> {
  return (this?.instance || SportAPI).post('/api/front/v1/sport/query', params, this || undefined)
}

/**
 * 1.体育新版菜单接口
 * 1.2.手机版体育菜单,免登入即可访问
 * @see https://sportsapidoc-2.cxsport.net/apidoc/%E4%BD%93%E8%82%B2%E6%8E%A5%E5%8F%A3%E6%96%87%E6%A1%A3/#_1_2_%E6%89%8B%E6%9C%BA%E7%89%88%E4%BD%93%E8%82%B2%E8%8F%9C%E5%8D%95%2C%E5%85%8D%E7%99%BB%E5%85%A5%E5%8D%B3%E5%8F%AF%E8%AE%BF%E9%97%AE
 */
export const reqV1SportMobileMenu = async function (this: AxiosRequestConfig | void, params?: API_V1_SPORT_MOBILE_MENU.REQ): Promise<API_V1_SPORT_MOBILE_MENU.RES> {
  return (this?.instance || SportAPI).post('/api/front/v1/sport/mobile/menu', params, this || undefined)
}

/**
 * 1.体育新版菜单接口
 * 1.3.PC版体育左侧边栏,免登入即可访问
 * @see https://sportsapidoc-2.cxsport.net/apidoc/%E4%BD%93%E8%82%B2%E6%8E%A5%E5%8F%A3%E6%96%87%E6%A1%A3/#_1_3_PC%E7%89%88%E4%BD%93%E8%82%B2%E5%B7%A6%E4%BE%A7%E8%BE%B9%E6%A0%8F%2C%E5%85%8D%E7%99%BB%E5%85%A5%E5%8D%B3%E5%8F%AF%E8%AE%BF%E9%97%AE
 */
export const reqV1SportPcMenu = async function (this: AxiosRequestConfig | void, params?: API_V1_SPORT_PC_MENU.REQ): Promise<API_V1_SPORT_PC_MENU.RES> {
  return (this?.instance || SportAPI).post('/api/front/v1/sport/pc/menu', params, this || undefined)
}

/**
 * 1.体育新版菜单接口
 * 1.4.手机版top体育菜单,免登入即可访问
 * @see https://sportsapidoc-2.cxsport.net/apidoc/%E4%BD%93%E8%82%B2%E6%8E%A5%E5%8F%A3%E6%96%87%E6%A1%A3/#_1_4_%E6%89%8B%E6%9C%BA%E7%89%88top%E4%BD%93%E8%82%B2%E8%8F%9C%E5%8D%95%2C%E5%85%8D%E7%99%BB%E5%85%A5%E5%8D%B3%E5%8F%AF%E8%AE%BF%E9%97%AE
 */
export const reqV1SportMobileTopMenu = async function (this: AxiosRequestConfig | void, params?: API_V1_SPORT_MOBILE_TOPMENU.REQ): Promise<API_V1_SPORT_MOBILE_TOPMENU.RES> {
  return (this?.instance || SportAPI).post('/api/front/v1/sport/mobile/topMenu', params, this || undefined)
}

/**
 * 2.赛事动画ID映射
 * 2.1.获取映射id
 * @see https://sportsapidoc-2.cxsport.net/apidoc/%E4%BD%93%E8%82%B2%E6%8E%A5%E5%8F%A3%E6%96%87%E6%A1%A3/#_2_1_%E8%8E%B7%E5%8F%96%E6%98%A0%E5%B0%84id
 */
export const reqTrackerMappingMatchId = async function (this: AxiosRequestConfig | void, params?: API_TRACKER_MAPPING_MATCHID.REQ): Promise<API_TRACKER_MAPPING_MATCHID.RES> {
  const { matchId } = params || {}
  return (this?.instance || SportAPI).get(`/api/front/tracker/mapping/${matchId}`, { ...this, params })
}

/**
 * 3.赛事注单
 * 3.1.投注
 * @see https://sportsapidoc-2.cxsport.net/apidoc/%E4%BD%93%E8%82%B2%E6%8E%A5%E5%8F%A3%E6%96%87%E6%A1%A3/#_3_1_%E6%8A%95%E6%B3%A8
 */
export const reqMatchBetAdd = async function (this: AxiosRequestConfig | void, params?: API_MATCH_BET_ADD.REQ): Promise<API_MATCH_BET_ADD.RES> {
  return (this?.instance || SportAPI).post('/api/front/match/bet/add', params, this || undefined)
}

/**
 * 3.赛事注单
 * 3.2.投注列表
 * @see https://sportsapidoc-2.cxsport.net/apidoc/%E4%BD%93%E8%82%B2%E6%8E%A5%E5%8F%A3%E6%96%87%E6%A1%A3/#_3_2_%E6%8A%95%E6%B3%A8%E5%88%97%E8%A1%A8
 */
export const reqMatchBetList = async function (this: AxiosRequestConfig | void, params?: API_MATCH_BET_LIST.REQ): Promise<API_MATCH_BET_LIST.RES> {
  return (this?.instance || SportAPI).post('/api/front/match/bet/list', params, this || undefined)
}

/**
 * 3.赛事注单
 * 3.3.帳單歷史，查詢每日已結算注單統計資料
 * @see https://sportsapidoc-2.cxsport.net/apidoc/%E4%BD%93%E8%82%B2%E6%8E%A5%E5%8F%A3%E6%96%87%E6%A1%A3/#_3_3_%E5%B8%B3%E5%96%AE%E6%AD%B7%E5%8F%B2%EF%BC%8C%E6%9F%A5%E8%A9%A2%E6%AF%8F%E6%97%A5%E5%B7%B2%E7%B5%90%E7%AE%97%E6%B3%A8%E5%96%AE%E7%B5%B1%E8%A8%88%E8%B3%87%E6%96%99
 */
export const reqMatchBetSettledList = async function (this: AxiosRequestConfig | void, params?: API_MATCH_BET_SETTLED_LIST.REQ): Promise<API_MATCH_BET_SETTLED_LIST.RES> {
  return (this?.instance || SportAPI).post('/api/front/match/bet/settled/list', params, this || undefined)
}

/**
 * 3.赛事注单
 * 3.4.帳單歷史，查詢指定日期已結算注單明細
 * @see https://sportsapidoc-2.cxsport.net/apidoc/%E4%BD%93%E8%82%B2%E6%8E%A5%E5%8F%A3%E6%96%87%E6%A1%A3/#_3_4_%E5%B8%B3%E5%96%AE%E6%AD%B7%E5%8F%B2%EF%BC%8C%E6%9F%A5%E8%A9%A2%E6%8C%87%E5%AE%9A%E6%97%A5%E6%9C%9F%E5%B7%B2%E7%B5%90%E7%AE%97%E6%B3%A8%E5%96%AE%E6%98%8E%E7%B4%B0
 */
export const reqMatchBetSettledDetailList = async function (this: AxiosRequestConfig | void, params?: API_MATCH_BET_SETTLED_DETAIL_LIST.REQ): Promise<API_MATCH_BET_SETTLED_DETAIL_LIST.RES> {
  return (this?.instance || SportAPI).post('/api/front/match/bet/settled/detail/list', params, this || undefined)
}

/**
 * 3.赛事注单
 * 3.5.获得赛事的玩法限额信息(下注前获取）,免登入即可访问
 * @see https://sportsapidoc-2.cxsport.net/apidoc/%E4%BD%93%E8%82%B2%E6%8E%A5%E5%8F%A3%E6%96%87%E6%A1%A3/#_3_5_%E8%8E%B7%E5%BE%97%E8%B5%9B%E4%BA%8B%E7%9A%84%E7%8E%A9%E6%B3%95%E9%99%90%E9%A2%9D%E4%BF%A1%E6%81%AF(%E4%B8%8B%E6%B3%A8%E5%89%8D%E8%8E%B7%E5%8F%96%EF%BC%89%2C%E5%85%8D%E7%99%BB%E5%85%A5%E5%8D%B3%E5%8F%AF%E8%AE%BF%E9%97%AE
 */
export const reqMatchBetInfo = async function (this: AxiosRequestConfig | void, params?: API_MATCH_BET_INFO.REQ): Promise<API_MATCH_BET_INFO.RES> {
  return (this?.instance || SportAPI).post('/api/front/match/bet/info', params, this || undefined)
}

/**
 * 3.赛事注单
 * 3.6.获得赛事的玩法限额信息(下注前获取）,免登入即可访问
 * @see https://sportsapidoc-2.cxsport.net/apidoc/%E4%BD%93%E8%82%B2%E6%8E%A5%E5%8F%A3%E6%96%87%E6%A1%A3/#_3_6_%E8%8E%B7%E5%BE%97%E8%B5%9B%E4%BA%8B%E7%9A%84%E7%8E%A9%E6%B3%95%E9%99%90%E9%A2%9D%E4%BF%A1%E6%81%AF(%E4%B8%8B%E6%B3%A8%E5%89%8D%E8%8E%B7%E5%8F%96%EF%BC%89%2C%E5%85%8D%E7%99%BB%E5%85%A5%E5%8D%B3%E5%8F%AF%E8%AE%BF%E9%97%AE
 */
export const reqMatchBetInfoList = async function (this: AxiosRequestConfig | void, params?: API_MATCH_BET_INFO_LIST.REQ): Promise<API_MATCH_BET_INFO_LIST.RES> {
  return (this?.instance || SportAPI).post('/api/front/match/bet/info/list', params, this || undefined)
}

/**
 * 3.赛事注单
 * 3.7.h5未结算投注列表
 * @see https://sportsapidoc-2.cxsport.net/apidoc/%E4%BD%93%E8%82%B2%E6%8E%A5%E5%8F%A3%E6%96%87%E6%A1%A3/#_3_7_h5%E6%9C%AA%E7%BB%93%E7%AE%97%E6%8A%95%E6%B3%A8%E5%88%97%E8%A1%A8
 */
export const reqMatchBetMobileUnsettleList = async function (this: AxiosRequestConfig | void, params?: API_MATCH_BET_MOBILE_UNSETTLE_LIST.REQ): Promise<API_MATCH_BET_MOBILE_UNSETTLE_LIST.RES> {
  return (this?.instance || SportAPI).post('/api/front/match/bet/mobile/unsettle/list', params, this || undefined)
}

/**
 * 3.赛事注单
 * 3.8.h5 帳單歷史，查詢每日已結算注單統計資料
 * @see https://sportsapidoc-2.cxsport.net/apidoc/%E4%BD%93%E8%82%B2%E6%8E%A5%E5%8F%A3%E6%96%87%E6%A1%A3/#_3_8_h5%20%E5%B8%B3%E5%96%AE%E6%AD%B7%E5%8F%B2%EF%BC%8C%E6%9F%A5%E8%A9%A2%E6%AF%8F%E6%97%A5%E5%B7%B2%E7%B5%90%E7%AE%97%E6%B3%A8%E5%96%AE%E7%B5%B1%E8%A8%88%E8%B3%87%E6%96%99
 */
export const reqMatchBetMobileSettledList = async function (this: AxiosRequestConfig | void, params?: API_MATCH_BET_MOBILE_SETTLED_LIST.REQ): Promise<API_MATCH_BET_MOBILE_SETTLED_LIST.RES> {
  return (this?.instance || SportAPI).post('/api/front/match/bet/mobile/settled/list', params, this || undefined)
}

/**
 * 3.赛事注单
 * 3.9.注单兑现
 * @see https://sportsapidoc-2.cxsport.net/apidoc/%E4%BD%93%E8%82%B2%E6%8E%A5%E5%8F%A3%E6%96%87%E6%A1%A3/#_3_9_%E6%B3%A8%E5%8D%95%E5%85%91%E7%8E%B0
 */
export const reqMatchBetCashout = async function (this: AxiosRequestConfig | void, params?: API_MATCH_BET_CASHOUT.REQ): Promise<API_MATCH_BET_CASHOUT.RES> {
  return (this?.instance || SportAPI).post('/api/front/match/bet/cashout', params, this || undefined)
}

/**
 * 3.赛事注单
 * 3.10.確認 cashout注单 狀態
 * @see https://sportsapidoc-2.cxsport.net/apidoc/%E4%BD%93%E8%82%B2%E6%8E%A5%E5%8F%A3%E6%96%87%E6%A1%A3/#_3_10_%E7%A2%BA%E8%AA%8D%20cashout%E6%B3%A8%E5%8D%95%20%E7%8B%80%E6%85%8B
 */
export const reqMatchBetCheckCashoutStatus = async function (this: AxiosRequestConfig | void, params?: API_MATCH_BET_CHECKCASHOUTSTATUS.REQ): Promise<API_MATCH_BET_CHECKCASHOUTSTATUS.RES> {
  return (this?.instance || SportAPI).post('/api/front/match/bet/checkCashoutStatus', params, this || undefined)
}

/**
 * 3.赛事注单
 * 3.11.查詢賽事or賽事賠率cashout status
 * @see https://sportsapidoc-2.cxsport.net/apidoc/%E4%BD%93%E8%82%B2%E6%8E%A5%E5%8F%A3%E6%96%87%E6%A1%A3/#_3_11_%E6%9F%A5%E8%A9%A2%E8%B3%BD%E4%BA%8Bor%E8%B3%BD%E4%BA%8B%E8%B3%A0%E7%8E%87cashout%20status
 */
export const reqMatchBetCashoutStatus = async function (this: AxiosRequestConfig | void, params?: API_MATCH_BET_CASHOUT_STATUS.REQ): Promise<API_MATCH_BET_CASHOUT_STATUS.RES> {
  return (this?.instance || SportAPI).post('/api/front/match/bet/cashout/status', params, this || undefined)
}

/**
 * 3.赛事注单
 * 3.12.备注注单信息
 * @see https://sportsapidoc-2.cxsport.net/apidoc/%E4%BD%93%E8%82%B2%E6%8E%A5%E5%8F%A3%E6%96%87%E6%A1%A3/#_3_12_%E5%A4%87%E6%B3%A8%E6%B3%A8%E5%8D%95%E4%BF%A1%E6%81%AF
 */
export const reqMatchBetRemark = async function (this: AxiosRequestConfig | void, params?: API_MATCH_BET_REMARK.REQ): Promise<API_MATCH_BET_REMARK.RES> {
  return (this?.instance || SportAPI).post('/api/front/match/bet/remark', params, this || undefined)
}

/**
 * 3.赛事注单
 * 3.13.透过QR Code获取注单信息
 * @see https://sportsapidoc-2.cxsport.net/apidoc/%E4%BD%93%E8%82%B2%E6%8E%A5%E5%8F%A3%E6%96%87%E6%A1%A3/#_3_13_%E9%80%8F%E8%BF%87QR%20Code%E8%8E%B7%E5%8F%96%E6%B3%A8%E5%8D%95%E4%BF%A1%E6%81%AF
 */
export const reqMatchBetQrscan = async function (this: AxiosRequestConfig | void, params?: API_MATCH_BET_QRSCAN.REQ): Promise<API_MATCH_BET_QRSCAN.RES> {
  return (this?.instance || SportAPI).post('/api/front/match/bet/qrscan', params, this || undefined)
}

/**
 * 4.冠军赔率信息
 * 4.1.冠军大厅赔率列表,免登入即可访问
 * @see https://sportsapidoc-2.cxsport.net/apidoc/%E4%BD%93%E8%82%B2%E6%8E%A5%E5%8F%A3%E6%96%87%E6%A1%A3/#_4_1_%E5%86%A0%E5%86%9B%E5%A4%A7%E5%8E%85%E8%B5%94%E7%8E%87%E5%88%97%E8%A1%A8%2C%E5%85%8D%E7%99%BB%E5%85%A5%E5%8D%B3%E5%8F%AF%E8%AE%BF%E9%97%AE
 */
export const reqOutrightOddsList = async function (this: AxiosRequestConfig | void, params?: API_OUTRIGHT_ODDS_LIST.REQ): Promise<API_OUTRIGHT_ODDS_LIST.RES> {
  return (this?.instance || SportAPI).post('/api/front/outright/odds/list', params, this || undefined)
}

/**
 * 4.冠军赔率信息
 * 4.2.冠军大厅赔率列表,免登入即可访问 （无返回赔率)
 * @see https://sportsapidoc-2.cxsport.net/apidoc/%E4%BD%93%E8%82%B2%E6%8E%A5%E5%8F%A3%E6%96%87%E6%A1%A3/#_4_2_%E5%86%A0%E5%86%9B%E5%A4%A7%E5%8E%85%E8%B5%94%E7%8E%87%E5%88%97%E8%A1%A8%2C%E5%85%8D%E7%99%BB%E5%85%A5%E5%8D%B3%E5%8F%AF%E8%AE%BF%E9%97%AE%20%EF%BC%88%E6%97%A0%E8%BF%94%E5%9B%9E%E8%B5%94%E7%8E%87)
 */
export const reqOutrightOddsV2List = async function (this: AxiosRequestConfig | void, params?: API_OUTRIGHT_ODDS_V2_LIST.REQ): Promise<API_OUTRIGHT_ODDS_V2_LIST.RES> {
  return (this?.instance || SportAPI).post('/api/front/outright/odds/v2/list', params, this || undefined)
}

/**
 * 5.
 * 5.1.内部测试接口
 * @see https://sportsapidoc-2.cxsport.net/apidoc/%E4%BD%93%E8%82%B2%E6%8E%A5%E5%8F%A3%E6%96%87%E6%A1%A3/#_5_1_%E5%86%85%E9%83%A8%E6%B5%8B%E8%AF%95%E6%8E%A5%E5%8F%A3
 */
export const reqInnerTestVersionMatchId = async function (this: AxiosRequestConfig | void, params?: API_INNER_TEST_VERSION_MATCHID.REQ): Promise<API_INNER_TEST_VERSION_MATCHID.RES> {
  const { matchId } = params || {}
  return (this?.instance || SportAPI).get(`/api/front/inner/test/version/${matchId}`, { ...this, params })
}

/**
 * 6.直播大厅
 * 6.1.体育类型下的直播大厅列表
 * @see https://sportsapidoc-2.cxsport.net/apidoc/%E4%BD%93%E8%82%B2%E6%8E%A5%E5%8F%A3%E6%96%87%E6%A1%A3/#_6_1_%E4%BD%93%E8%82%B2%E7%B1%BB%E5%9E%8B%E4%B8%8B%E7%9A%84%E7%9B%B4%E6%92%AD%E5%A4%A7%E5%8E%85%E5%88%97%E8%A1%A8
 */
export const reqLiveRoundListGameType = async function (this: AxiosRequestConfig | void, params?: API_LIVEROUND_LIST_GAMETYPE.REQ): Promise<API_LIVEROUND_LIST_GAMETYPE.RES> {
  const { gameType } = params || {}
  return (this?.instance || SportAPI).get(`/api/front/liveRound/list/${gameType}`, { ...this, params })
}

/**
 * 6.直播大厅
 * 6.2.移动端首页热门赛事直播列表备注: 获取赛事主播资料
 * @see https://sportsapidoc-2.cxsport.net/apidoc/%E4%BD%93%E8%82%B2%E6%8E%A5%E5%8F%A3%E6%96%87%E6%A1%A3/#_6_2_%E7%A7%BB%E5%8A%A8%E7%AB%AF%E9%A6%96%E9%A1%B5%E7%83%AD%E9%97%A8%E8%B5%9B%E4%BA%8B%E7%9B%B4%E6%92%AD%E5%88%97%E8%A1%A8%0A%E5%A4%87%E6%B3%A8%3A%20%E8%8E%B7%E5%8F%96%E8%B5%9B%E4%BA%8B%E4%B8%BB%E6%92%AD%E8%B5%84%E6%96%99
 */
export const reqLiveRoundMobileHotMatchList = async function (this: AxiosRequestConfig | void, params?: API_LIVEROUND_MOBILE_HOTMATCH_LIST.REQ): Promise<API_LIVEROUND_MOBILE_HOTMATCH_LIST.RES> {
  return (this?.instance || SportAPI).get('/api/front/liveRound/mobile/hotMatch/list', { ...this, params })
}

/**
 * 6.直播大厅
 * 6.3.获取直播数量
 * @see https://sportsapidoc-2.cxsport.net/apidoc/%E4%BD%93%E8%82%B2%E6%8E%A5%E5%8F%A3%E6%96%87%E6%A1%A3/#_6_3_%E8%8E%B7%E5%8F%96%E7%9B%B4%E6%92%AD%E6%95%B0%E9%87%8F
 */
export const reqLiveRoundCount = async function (this: AxiosRequestConfig | void, params?: API_LIVEROUND_COUNT.REQ): Promise<API_LIVEROUND_COUNT.RES> {
  return (this?.instance || SportAPI).get('/api/front/liveRound/count', { ...this, params })
}

/**
 * 6.直播大厅
 * 6.4.移动端直播tab备注：按照赛事按开始时间从近到远进行排序；默认播放排序第一的直播；直播间不足20条时；填充具有直播地址的早盘赛事至20条（按照开赛时间排序）；
 * @see https://sportsapidoc-2.cxsport.net/apidoc/%E4%BD%93%E8%82%B2%E6%8E%A5%E5%8F%A3%E6%96%87%E6%A1%A3/#_6_4_%E7%A7%BB%E5%8A%A8%E7%AB%AF%E7%9B%B4%E6%92%ADtab%0A%E5%A4%87%E6%B3%A8%EF%BC%9A%E6%8C%89%E7%85%A7%E8%B5%9B%E4%BA%8B%E6%8C%89%E5%BC%80%E5%A7%8B%E6%97%B6%E9%97%B4%E4%BB%8E%E8%BF%91%E5%88%B0%E8%BF%9C%E8%BF%9B%E8%A1%8C%E6%8E%92%E5%BA%8F%EF%BC%9B%E9%BB%98%E8%AE%A4%E6%92%AD%E6%94%BE%E6%8E%92%E5%BA%8F%E7%AC%AC%E4%B8%80%E7%9A%84%E7%9B%B4%E6%92%AD%EF%BC%9B%E7%9B%B4%E6%92%AD%E9%97%B4%E4%B8%8D%E8%B6%B320%E6%9D%A1%E6%97%B6%EF%BC%9B%E5%A1%AB%E5%85%85%E5%85%B7%E6%9C%89%E7%9B%B4%E6%92%AD%E5%9C%B0%E5%9D%80%E7%9A%84%E6%97%A9%E7%9B%98%E8%B5%9B%E4%BA%8B%E8%87%B320%E6%9D%A1%EF%BC%88%E6%8C%89%E7%85%A7%E5%BC%80%E8%B5%9B%E6%97%B6%E9%97%B4%E6%8E%92%E5%BA%8F%EF%BC%89%EF%BC%9B
 */
export const reqLiveRoundMobileHall = async function (this: AxiosRequestConfig | void, params?: API_LIVEROUND_MOBILE_HALL.REQ): Promise<API_LIVEROUND_MOBILE_HALL.RES> {
  return (this?.instance || SportAPI).get('/api/front/liveRound/mobile/hall', { ...this, params })
}

/**
 * 6.直播大厅
 * 6.5.查询主播直播的拉流地址
 * @see https://sportsapidoc-2.cxsport.net/apidoc/%E4%BD%93%E8%82%B2%E6%8E%A5%E5%8F%A3%E6%96%87%E6%A1%A3/#_6_5_%E6%9F%A5%E8%AF%A2%E4%B8%BB%E6%92%AD%E7%9B%B4%E6%92%AD%E7%9A%84%E6%8B%89%E6%B5%81%E5%9C%B0%E5%9D%80
 */
export const reqLiveRoundRoundNo = async function (this: AxiosRequestConfig | void, params?: API_LIVEROUND_ROUNDNO.REQ): Promise<API_LIVEROUND_ROUNDNO.RES> {
  const { roundNo } = params || {}
  return (this?.instance || SportAPI).get(`/api/front/liveRound/${roundNo}`, { ...this, params })
}

/**
 * 7.我的最爱
 * 7.1.取得会员的所有最爱(包含球类、联赛、赛事、冠军、玩法)
 * @see https://sportsapidoc-2.cxsport.net/apidoc/%E4%BD%93%E8%82%B2%E6%8E%A5%E5%8F%A3%E6%96%87%E6%A1%A3/#_7_1_%E5%8F%96%E5%BE%97%E4%BC%9A%E5%91%98%E7%9A%84%E6%89%80%E6%9C%89%E6%9C%80%E7%88%B1(%E5%8C%85%E5%90%AB%E7%90%83%E7%B1%BB%E3%80%81%E8%81%94%E8%B5%9B%E3%80%81%E8%B5%9B%E4%BA%8B%E3%80%81%E5%86%A0%E5%86%9B%E3%80%81%E7%8E%A9%E6%B3%95)
 */
export const reqMyFavoriteQuery = async function (this: AxiosRequestConfig | void, params?: API_MYFAVORITE_QUERY.REQ): Promise<API_MYFAVORITE_QUERY.RES> {
  return (this?.instance || SportAPI).post('/api/front/myFavorite/query', params, this || undefined)
}

/**
 * 7.我的最爱
 * 7.2.我的赛事 加时赛也准备额外LeagueOddsVO
 * @see https://sportsapidoc-2.cxsport.net/apidoc/%E4%BD%93%E8%82%B2%E6%8E%A5%E5%8F%A3%E6%96%87%E6%A1%A3/#_7_2_%E6%88%91%E7%9A%84%E8%B5%9B%E4%BA%8B%20%E5%8A%A0%E6%97%B6%E8%B5%9B%E4%B9%9F%E5%87%86%E5%A4%87%E9%A2%9D%E5%A4%96LeagueOddsVO
 */
export const reqMyFavoriteMatchQueryIncludeOT = async function (this: AxiosRequestConfig | void, params?: API_MYFAVORITE_MATCH_QUERYINCLUDEOT.REQ): Promise<API_MYFAVORITE_MATCH_QUERYINCLUDEOT.RES> {
  return (this?.instance || SportAPI).post('/api/front/myFavorite/match/queryIncludeOT', params, this || undefined)
}

/**
 * 7.我的最爱
 * 7.3.我的赛事
 * @see https://sportsapidoc-2.cxsport.net/apidoc/%E4%BD%93%E8%82%B2%E6%8E%A5%E5%8F%A3%E6%96%87%E6%A1%A3/#_7_3_%E6%88%91%E7%9A%84%E8%B5%9B%E4%BA%8B
 */
export const reqMyFavoriteMatchQuery = async function (this: AxiosRequestConfig | void, params?: API_MYFAVORITE_MATCH_QUERY.REQ): Promise<API_MYFAVORITE_MATCH_QUERY.RES> {
  return (this?.instance || SportAPI).post('/api/front/myFavorite/match/query', params, this || undefined)
}

/**
 * 7.我的最爱
 * 7.4.保存
 * @see https://sportsapidoc-2.cxsport.net/apidoc/%E4%BD%93%E8%82%B2%E6%8E%A5%E5%8F%A3%E6%96%87%E6%A1%A3/#_7_4_%E4%BF%9D%E5%AD%98
 */
export const reqMyFavoriteSave = async function (this: AxiosRequestConfig | void, params?: API_MYFAVORITE_SAVE.REQ): Promise<API_MYFAVORITE_SAVE.RES> {
  return (this?.instance || SportAPI).post('/api/front/myFavorite/save', params, this || undefined)
}

/**
 * 7.我的最爱
 * 7.5.查询我的推荐赛事
 * @see https://sportsapidoc-2.cxsport.net/apidoc/%E4%BD%93%E8%82%B2%E6%8E%A5%E5%8F%A3%E6%96%87%E6%A1%A3/#_7_5_%E6%9F%A5%E8%AF%A2%E6%88%91%E7%9A%84%E6%8E%A8%E8%8D%90%E8%B5%9B%E4%BA%8B
 */
export const reqMyFavoriteQueryAll = async function (this: AxiosRequestConfig | void, params?: API_MYFAVORITE_QUERYALL.REQ): Promise<API_MYFAVORITE_QUERYALL.RES> {
  return (this?.instance || SportAPI).post('/api/front/myFavorite/queryAll', params, this || undefined)
}

/**
 * 8.冠军赛季信息
 * 8.1.查询赛季国家联赛列表,免登入即可访问
 * @see https://sportsapidoc-2.cxsport.net/apidoc/%E4%BD%93%E8%82%B2%E6%8E%A5%E5%8F%A3%E6%96%87%E6%A1%A3/#_8_1_%E6%9F%A5%E8%AF%A2%E8%B5%9B%E5%AD%A3%E5%9B%BD%E5%AE%B6%E8%81%94%E8%B5%9B%E5%88%97%E8%A1%A8%2C%E5%85%8D%E7%99%BB%E5%85%A5%E5%8D%B3%E5%8F%AF%E8%AE%BF%E9%97%AE
 */
export const reqOutrightLeagueList = async function (this: AxiosRequestConfig | void, params?: API_OUTRIGHT_LEAGUE_LIST.REQ): Promise<API_OUTRIGHT_LEAGUE_LIST.RES> {
  return (this?.instance || SportAPI).post('/api/front/outright/league/list', params, this || undefined)
}

/**
 * 8.冠军赛季信息
 * 8.2.查询赛季国家联赛列表,免登入即可访问
 * @see https://sportsapidoc-2.cxsport.net/apidoc/%E4%BD%93%E8%82%B2%E6%8E%A5%E5%8F%A3%E6%96%87%E6%A1%A3/#_8_2_%E6%9F%A5%E8%AF%A2%E8%B5%9B%E5%AD%A3%E5%9B%BD%E5%AE%B6%E8%81%94%E8%B5%9B%E5%88%97%E8%A1%A8%2C%E5%85%8D%E7%99%BB%E5%85%A5%E5%8D%B3%E5%8F%AF%E8%AE%BF%E9%97%AE
 */
export const reqOutrightV2LeagueList = async function (this: AxiosRequestConfig | void, params?: API_OUTRIGHT_V2_LEAGUE_LIST.REQ): Promise<API_OUTRIGHT_V2_LEAGUE_LIST.RES> {
  return (this?.instance || SportAPI).post('/api/front/outright/v2/league/list', params, this || undefined)
}

/**
 * 8.冠军赛季信息
 * 8.3.查询赛季国家联赛列表,免登入即可访问
 * @see https://sportsapidoc-2.cxsport.net/apidoc/%E4%BD%93%E8%82%B2%E6%8E%A5%E5%8F%A3%E6%96%87%E6%A1%A3/#_8_3_%E6%9F%A5%E8%AF%A2%E8%B5%9B%E5%AD%A3%E5%9B%BD%E5%AE%B6%E8%81%94%E8%B5%9B%E5%88%97%E8%A1%A8%2C%E5%85%8D%E7%99%BB%E5%85%A5%E5%8D%B3%E5%8F%AF%E8%AE%BF%E9%97%AE
 */
export const reqOutrightV3LeagueList = async function (this: AxiosRequestConfig | void, params?: API_OUTRIGHT_V3_LEAGUE_LIST.REQ): Promise<API_OUTRIGHT_V3_LEAGUE_LIST.RES> {
  return (this?.instance || SportAPI).post('/api/front/outright/v3/league/list', params, this || undefined)
}

/**
 * 9.赛事赔率信息
 * 9.1.- 目前供PC使用(只要有赔率也会塞赛事供前端，可以点入详情查看其他赛事，避免有玩法不在playCateMenu里而整个赛事没显示，导致上面赛事数量与下面对不起来)大厅赔率列表,根据滚球今日早盘等类型返回对应联赛列表与各联赛的可玩赛事仅提供第一个联赛的赛事赔率,其他联赛的赛事赔率在订阅ws时返回,以免接口的处理数据量过大免登入即可访问
 * @see https://sportsapidoc-2.cxsport.net/apidoc/%E4%BD%93%E8%82%B2%E6%8E%A5%E5%8F%A3%E6%96%87%E6%A1%A3/#_9_1_-%20%E7%9B%AE%E5%89%8D%E4%BE%9BPC%E4%BD%BF%E7%94%A8%0A(%E5%8F%AA%E8%A6%81%E6%9C%89%E8%B5%94%E7%8E%87%E4%B9%9F%E4%BC%9A%E5%A1%9E%E8%B5%9B%E4%BA%8B%E4%BE%9B%E5%89%8D%E7%AB%AF%EF%BC%8C%E5%8F%AF%E4%BB%A5%E7%82%B9%E5%85%A5%E8%AF%A6%E6%83%85%E6%9F%A5%E7%9C%8B%E5%85%B6%E4%BB%96%E8%B5%9B%E4%BA%8B%EF%BC%8C%E9%81%BF%E5%85%8D%E6%9C%89%E7%8E%A9%E6%B3%95%E4%B8%8D%E5%9C%A8playCateMenu%E9%87%8C%E8%80%8C%E6%95%B4%E4%B8%AA%E8%B5%9B%E4%BA%8B%E6%B2%A1%E6%98%BE%E7%A4%BA%EF%BC%8C%E5%AF%BC%E8%87%B4%E4%B8%8A%E9%9D%A2%E8%B5%9B%E4%BA%8B%E6%95%B0%E9%87%8F%E4%B8%8E%E4%B8%8B%E9%9D%A2%E5%AF%B9%E4%B8%8D%E8%B5%B7%E6%9D%A5)%0A%E5%A4%A7%E5%8E%85%E8%B5%94%E7%8E%87%E5%88%97%E8%A1%A8%2C%E6%A0%B9%E6%8D%AE%E6%BB%9A%E7%90%83%E4%BB%8A%E6%97%A5%E6%97%A9%E7%9B%98%E7%AD%89%E7%B1%BB%E5%9E%8B%E8%BF%94%E5%9B%9E%E5%AF%B9%E5%BA%94%E8%81%94%E8%B5%9B%E5%88%97%E8%A1%A8%E4%B8%8E%E5%90%84%E8%81%94%E8%B5%9B%E7%9A%84%E5%8F%AF%E7%8E%A9%E8%B5%9B%E4%BA%8B%0A%E4%BB%85%E6%8F%90%E4%BE%9B%E7%AC%AC%E4%B8%80%E4%B8%AA%E8%81%94%E8%B5%9B%E7%9A%84%E8%B5%9B%E4%BA%8B%E8%B5%94%E7%8E%87%2C%E5%85%B6%E4%BB%96%E8%81%94%E8%B5%9B%E7%9A%84%E8%B5%9B%E4%BA%8B%E8%B5%94%E7%8E%87%E5%9C%A8%E8%AE%A2%E9%98%85ws%E6%97%B6%E8%BF%94%E5%9B%9E%2C%E4%BB%A5%E5%85%8D%E6%8E%A5%E5%8F%A3%E7%9A%84%E5%A4%84%E7%90%86%E6%95%B0%E6%8D%AE%E9%87%8F%E8%BF%87%E5%A4%A7%0A%E5%85%8D%E7%99%BB%E5%85%A5%E5%8D%B3%E5%8F%AF%E8%AE%BF%E9%97%AE
 */
export const reqMatchOddsSimpleListMatchall = async function (this: AxiosRequestConfig | void, params?: API_MATCH_ODDS_SIMPLE_LIST_MATCHALL.REQ): Promise<API_MATCH_ODDS_SIMPLE_LIST_MATCHALL.RES> {
  return (this?.instance || SportAPI).post('/api/front/match/odds/simple/list/matchall', params, this || undefined)
}

/**
 * 9.赛事赔率信息
 * 9.2.大厅赔率列表,根据滚球今日早盘等类型返回对应联赛列表与各联赛的可玩赛事仅提供第一个联赛的赛事赔率,其他联赛的赛事赔率在订阅ws时返回,以免接口的处理数据量过大免登入即可访问
 * @see https://sportsapidoc-2.cxsport.net/apidoc/%E4%BD%93%E8%82%B2%E6%8E%A5%E5%8F%A3%E6%96%87%E6%A1%A3/#_9_2_%E5%A4%A7%E5%8E%85%E8%B5%94%E7%8E%87%E5%88%97%E8%A1%A8%2C%E6%A0%B9%E6%8D%AE%E6%BB%9A%E7%90%83%E4%BB%8A%E6%97%A5%E6%97%A9%E7%9B%98%E7%AD%89%E7%B1%BB%E5%9E%8B%E8%BF%94%E5%9B%9E%E5%AF%B9%E5%BA%94%E8%81%94%E8%B5%9B%E5%88%97%E8%A1%A8%E4%B8%8E%E5%90%84%E8%81%94%E8%B5%9B%E7%9A%84%E5%8F%AF%E7%8E%A9%E8%B5%9B%E4%BA%8B%0A%E4%BB%85%E6%8F%90%E4%BE%9B%E7%AC%AC%E4%B8%80%E4%B8%AA%E8%81%94%E8%B5%9B%E7%9A%84%E8%B5%9B%E4%BA%8B%E8%B5%94%E7%8E%87%2C%E5%85%B6%E4%BB%96%E8%81%94%E8%B5%9B%E7%9A%84%E8%B5%9B%E4%BA%8B%E8%B5%94%E7%8E%87%E5%9C%A8%E8%AE%A2%E9%98%85ws%E6%97%B6%E8%BF%94%E5%9B%9E%2C%E4%BB%A5%E5%85%8D%E6%8E%A5%E5%8F%A3%E7%9A%84%E5%A4%84%E7%90%86%E6%95%B0%E6%8D%AE%E9%87%8F%E8%BF%87%E5%A4%A7%0A%E5%85%8D%E7%99%BB%E5%85%A5%E5%8D%B3%E5%8F%AF%E8%AE%BF%E9%97%AE
 */
export const reqMatchOddsSimpleList = async function (this: AxiosRequestConfig | void, params?: API_MATCH_ODDS_SIMPLE_LIST.REQ): Promise<API_MATCH_ODDS_SIMPLE_LIST.RES> {
  return (this?.instance || SportAPI).post('/api/front/match/odds/simple/list', params, this || undefined)
}

/**
 * 9.赛事赔率信息
 * 9.3.赛事赔率列表,免登入即可访问
 * @see https://sportsapidoc-2.cxsport.net/apidoc/%E4%BD%93%E8%82%B2%E6%8E%A5%E5%8F%A3%E6%96%87%E6%A1%A3/#_9_3_%E8%B5%9B%E4%BA%8B%E8%B5%94%E7%8E%87%E5%88%97%E8%A1%A8%2C%E5%85%8D%E7%99%BB%E5%85%A5%E5%8D%B3%E5%8F%AF%E8%AE%BF%E9%97%AE
 */
export const reqMatchOddsDetail = async function (this: AxiosRequestConfig | void, params?: API_MATCH_ODDS_DETAIL.REQ): Promise<API_MATCH_ODDS_DETAIL.RES> {
  return (this?.instance || SportAPI).post('/api/front/match/odds/detail', params, this || undefined)
}

/**
 * 9.赛事赔率信息
 * 9.4.特优赔率列表,免登入即可访问
 * @see https://sportsapidoc-2.cxsport.net/apidoc/%E4%BD%93%E8%82%B2%E6%8E%A5%E5%8F%A3%E6%96%87%E6%A1%A3/#_9_4_%E7%89%B9%E4%BC%98%E8%B5%94%E7%8E%87%E5%88%97%E8%A1%A8%2C%E5%85%8D%E7%99%BB%E5%85%A5%E5%8D%B3%E5%8F%AF%E8%AE%BF%E9%97%AE
 */
export const reqMatchOddsEpsList = async function (this: AxiosRequestConfig | void, params?: API_MATCH_ODDS_EPS_LIST.REQ): Promise<API_MATCH_ODDS_EPS_LIST.RES> {
  return (this?.instance || SportAPI).post('/api/front/match/odds/eps/list', params, this || undefined)
}

/**
 * 9.赛事赔率信息
 * 9.5.快捷菜单赔率列表,免登入即可访问
 * @see https://sportsapidoc-2.cxsport.net/apidoc/%E4%BD%93%E8%82%B2%E6%8E%A5%E5%8F%A3%E6%96%87%E6%A1%A3/#_9_5_%E5%BF%AB%E6%8D%B7%E8%8F%9C%E5%8D%95%E8%B5%94%E7%8E%87%E5%88%97%E8%A1%A8%2C%E5%85%8D%E7%99%BB%E5%85%A5%E5%8D%B3%E5%8F%AF%E8%AE%BF%E9%97%AE
 */
export const reqMatchOddsQuickList = async function (this: AxiosRequestConfig | void, params?: API_MATCH_ODDS_QUICK_LIST.REQ): Promise<API_MATCH_ODDS_QUICK_LIST.RES> {
  return (this?.instance || SportAPI).post('/api/front/match/odds/quick/list', params, this || undefined)
}

/**
 * 9.赛事赔率信息
 * 9.6.反波胆单赔率列表,免登入即可访问
 * @see https://sportsapidoc-2.cxsport.net/apidoc/%E4%BD%93%E8%82%B2%E6%8E%A5%E5%8F%A3%E6%96%87%E6%A1%A3/#_9_6_%E5%8F%8D%E6%B3%A2%E8%83%86%E5%8D%95%E8%B5%94%E7%8E%87%E5%88%97%E8%A1%A8%2C%E5%85%8D%E7%99%BB%E5%85%A5%E5%8D%B3%E5%8F%AF%E8%AE%BF%E9%97%AE
 */
export const reqMatchOddsQuickLcsList = async function (this: AxiosRequestConfig | void, params?: API_MATCH_ODDS_QUICK_LCS_LIST.REQ): Promise<API_MATCH_ODDS_QUICK_LCS_LIST.RES> {
  return (this?.instance || SportAPI).post('/api/front/match/odds/quick/lcs/list', params, this || undefined)
}

/**
 * 9.赛事赔率信息
 * 9.7.查询赛事根据分页
 * @see https://sportsapidoc-2.cxsport.net/apidoc/%E4%BD%93%E8%82%B2%E6%8E%A5%E5%8F%A3%E6%96%87%E6%A1%A3/#_9_7_%E6%9F%A5%E8%AF%A2%E8%B5%9B%E4%BA%8B%E6%A0%B9%E6%8D%AE%E5%88%86%E9%A1%B5
 */
export const reqMatchOddsQueryMatchByPage = async function (this: AxiosRequestConfig | void, params?: API_MATCH_ODDS_QUERYMATCHBYPAGE.REQ): Promise<API_MATCH_ODDS_QUERYMATCHBYPAGE.RES> {
  return (this?.instance || SportAPI).post('/api/front/match/odds/queryMatchByPage', params, this || undefined)
}

/**
 * 9.赛事赔率信息
 * 9.8.热门推荐盘口备注: 指适用足球，篮球；优先展示滚球分类下足球篮球球类赛事的排序各自前2的赛事。滚球下不足四场赛事 展示即将开始的赛事 即将赛事不足填充四条 展示今日赛事
 * @see https://sportsapidoc-2.cxsport.net/apidoc/%E4%BD%93%E8%82%B2%E6%8E%A5%E5%8F%A3%E6%96%87%E6%A1%A3/#_9_8_%E7%83%AD%E9%97%A8%E6%8E%A8%E8%8D%90%E7%9B%98%E5%8F%A3%0A%E5%A4%87%E6%B3%A8%3A%20%E6%8C%87%E9%80%82%E7%94%A8%E8%B6%B3%E7%90%83%EF%BC%8C%E7%AF%AE%E7%90%83%EF%BC%9B%E4%BC%98%E5%85%88%E5%B1%95%E7%A4%BA%E6%BB%9A%E7%90%83%E5%88%86%E7%B1%BB%E4%B8%8B%E8%B6%B3%E7%90%83%E7%AF%AE%E7%90%83%E7%90%83%E7%B1%BB%E8%B5%9B%E4%BA%8B%E7%9A%84%E6%8E%92%E5%BA%8F%E5%90%84%E8%87%AA%E5%89%8D2%E7%9A%84%E8%B5%9B%E4%BA%8B%E3%80%82%E6%BB%9A%E7%90%83%E4%B8%8B%E4%B8%8D%E8%B6%B3%E5%9B%9B%E5%9C%BA%E8%B5%9B%E4%BA%8B%20%E5%B1%95%E7%A4%BA%E5%8D%B3%E5%B0%86%E5%BC%80%E5%A7%8B%E7%9A%84%E8%B5%9B%E4%BA%8B%20%20%E5%8D%B3%E5%B0%86%E8%B5%9B%E4%BA%8B%E4%B8%8D%E8%B6%B3%E5%A1%AB%E5%85%85%E5%9B%9B%E6%9D%A1%20%E5%B1%95%E7%A4%BA%E4%BB%8A%E6%97%A5%E8%B5%9B%E4%BA%8B
 */
export const reqMatchOddsMobileHotHandicapHandicapTypeList = async function (
  this: AxiosRequestConfig | void,
  params?: API_MATCH_ODDS_MOBILE_HOT_HANDICAP_HANDICAPTYPE_LIST.REQ,
): Promise<API_MATCH_ODDS_MOBILE_HOT_HANDICAP_HANDICAPTYPE_LIST.RES> {
  const { handicapType } = params || {}
  return (this?.instance || SportAPI).get(`/api/front/match/odds/mobile/hot/handicap/${handicapType}/list`, { ...this, params })
}

/**
 * 9.赛事赔率信息
 * 9.9.移动端所有滚球列表
 * @see https://sportsapidoc-2.cxsport.net/apidoc/%E4%BD%93%E8%82%B2%E6%8E%A5%E5%8F%A3%E6%96%87%E6%A1%A3/#_9_9_%E7%A7%BB%E5%8A%A8%E7%AB%AF%E6%89%80%E6%9C%89%E6%BB%9A%E7%90%83%E5%88%97%E8%A1%A8
 */
export const reqMatchOddsMobileInplayAll = async function (this: AxiosRequestConfig | void, params?: API_MATCH_ODDS_MOBILE_INPLAY_ALL.REQ): Promise<API_MATCH_ODDS_MOBILE_INPLAY_ALL.RES> {
  return (this?.instance || SportAPI).post('/api/front/match/odds/mobile/inplay/all', params, this || undefined)
}

/**
 * 9.赛事赔率信息
 * 9.10.七日内赛事赔率列表, 生成文档用, 主接口压缩过返回的是String, 无法套用smartDoc, 故新增此接口用来生成doc
 * @see https://sportsapidoc-2.cxsport.net/apidoc/%E4%BD%93%E8%82%B2%E6%8E%A5%E5%8F%A3%E6%96%87%E6%A1%A3/#_9_10_%E4%B8%83%E6%97%A5%E5%86%85%E8%B5%9B%E4%BA%8B%E8%B5%94%E7%8E%87%E5%88%97%E8%A1%A8%2C%20%E7%94%9F%E6%88%90%E6%96%87%E6%A1%A3%E7%94%A8%2C%20%E4%B8%BB%E6%8E%A5%E5%8F%A3%E5%8E%8B%E7%BC%A9%E8%BF%87%E8%BF%94%E5%9B%9E%E7%9A%84%E6%98%AFString%2C%20%E6%97%A0%E6%B3%95%E5%A5%97%E7%94%A8smartDoc%2C%20%E6%95%85%E6%96%B0%E5%A2%9E%E6%AD%A4%E6%8E%A5%E5%8F%A3%E7%94%A8%E6%9D%A5%E7%94%9F%E6%88%90doc
 */
export const reqMatchOddsWeekList = async function (this: AxiosRequestConfig | void): Promise<API_MATCH_ODDS_WEEK_LIST.RES> {
  return (this?.instance || SportAPI).get('/api/front/match/odds/week/list', this || undefined)
}

/**
 * 9.赛事赔率信息
 * 9.11.七日内赛事赔率列表
 * @see https://sportsapidoc-2.cxsport.net/apidoc/%E4%BD%93%E8%82%B2%E6%8E%A5%E5%8F%A3%E6%96%87%E6%A1%A3/#_9_11_%E4%B8%83%E6%97%A5%E5%86%85%E8%B5%9B%E4%BA%8B%E8%B5%94%E7%8E%87%E5%88%97%E8%A1%A8
 */
export const reqMatchOddsWeekListDateType = async function (this: AxiosRequestConfig | void, params?: API_MATCH_ODDS_WEEK_LIST_DATETYPE.REQ): Promise<API_MATCH_ODDS_WEEK_LIST_DATETYPE.RES> {
  const { dateType } = params || {}
  return (this?.instance || SportAPI).get(`/api/front/match/odds/week/list/${dateType}`, { ...this, params })
}

/**
 * 10.赛事联赛信息
 * 10.1.查询赛事列表,免登入即可访问
 * @see https://sportsapidoc-2.cxsport.net/apidoc/%E4%BD%93%E8%82%B2%E6%8E%A5%E5%8F%A3%E6%96%87%E6%A1%A3/#_10_1_%E6%9F%A5%E8%AF%A2%E8%B5%9B%E4%BA%8B%E5%88%97%E8%A1%A8%2C%E5%85%8D%E7%99%BB%E5%85%A5%E5%8D%B3%E5%8F%AF%E8%AE%BF%E9%97%AE
 */
export const reqMatchLeagueList = async function (this: AxiosRequestConfig | void, params?: API_MATCH_LEAGUE_LIST.REQ): Promise<API_MATCH_LEAGUE_LIST.RES> {
  return (this?.instance || SportAPI).post('/api/front/match/league/list', params, this || undefined)
}

/**
 * 10.赛事联赛信息
 * 10.2.查询赛事时间区间列表,免登入即可访问
 * @see https://sportsapidoc-2.cxsport.net/apidoc/%E4%BD%93%E8%82%B2%E6%8E%A5%E5%8F%A3%E6%96%87%E6%A1%A3/#_10_2_%E6%9F%A5%E8%AF%A2%E8%B5%9B%E4%BA%8B%E6%97%B6%E9%97%B4%E5%8C%BA%E9%97%B4%E5%88%97%E8%A1%A8%2C%E5%85%8D%E7%99%BB%E5%85%A5%E5%8D%B3%E5%8F%AF%E8%AE%BF%E9%97%AE
 */
export const reqMatchLeagueDatelist = async function (this: AxiosRequestConfig | void, params?: API_MATCH_LEAGUE_DATELIST.REQ): Promise<API_MATCH_LEAGUE_DATELIST.RES> {
  return (this?.instance || SportAPI).post('/api/front/match/league/datelist', params, this || undefined)
}

/**
 * 11.用户资金明细
 * 11.1.查询用户资金明细, 最大区间8天
 * @see https://sportsapidoc-2.cxsport.net/apidoc/%E4%BD%93%E8%82%B2%E6%8E%A5%E5%8F%A3%E6%96%87%E6%A1%A3/#_11_1_%E6%9F%A5%E8%AF%A2%E7%94%A8%E6%88%B7%E8%B5%84%E9%87%91%E6%98%8E%E7%BB%86%2C%20%E6%9C%80%E5%A4%A7%E5%8C%BA%E9%97%B48%E5%A4%A9
 */
export const reqSportBillQuery = async function (this: AxiosRequestConfig | void, params?: API_SPORTBILL_QUERY.REQ): Promise<API_SPORTBILL_QUERY.RES> {
  return (this?.instance || SportAPI).post('/api/front/sportBill/query', params, this || undefined)
}

/**
 * 12.玩法返水
 * 12.1.根据条件获取第三方玩法返水组合,免登入即可访问
 * @see https://sportsapidoc-2.cxsport.net/apidoc/%E4%BD%93%E8%82%B2%E6%8E%A5%E5%8F%A3%E6%96%87%E6%A1%A3/#_12_1_%E6%A0%B9%E6%8D%AE%E6%9D%A1%E4%BB%B6%E8%8E%B7%E5%8F%96%E7%AC%AC%E4%B8%89%E6%96%B9%E7%8E%A9%E6%B3%95%E8%BF%94%E6%B0%B4%E7%BB%84%E5%90%88%2C%E5%85%8D%E7%99%BB%E5%85%A5%E5%8D%B3%E5%8F%AF%E8%AE%BF%E9%97%AE
 */
export const reqPlaycomThirdRebates = async function (this: AxiosRequestConfig | void, params?: API_PLAYCOM_THIRDREBATES.REQ): Promise<API_PLAYCOM_THIRDREBATES.RES> {
  return (this?.instance || SportAPI).get('/api/front/playcom/thirdRebates', { ...this, params })
}

/**
 * 13.
 * 13.1.取得最近赛事(免登陆)
 * @see https://sportsapidoc-2.cxsport.net/apidoc/%E4%BD%93%E8%82%B2%E6%8E%A5%E5%8F%A3%E6%96%87%E6%A1%A3/#_13_1_%E5%8F%96%E5%BE%97%E6%9C%80%E8%BF%91%E8%B5%9B%E4%BA%8B(%E5%85%8D%E7%99%BB%E9%99%86)
 */
export const reqFibaLatest = async function (this: AxiosRequestConfig | void, params?: API_FIBA_LATEST.REQ): Promise<API_FIBA_LATEST.RES> {
  return (this?.instance || SportAPI).post('/api/front/fiba/latest', params, this || undefined)
}

/**
 * 13.
 * 13.2.根据类型取得赛事
 * @see https://sportsapidoc-2.cxsport.net/apidoc/%E4%BD%93%E8%82%B2%E6%8E%A5%E5%8F%A3%E6%96%87%E6%A1%A3/#_13_2_%E6%A0%B9%E6%8D%AE%E7%B1%BB%E5%9E%8B%E5%8F%96%E5%BE%97%E8%B5%9B%E4%BA%8B
 */
export const reqFibaGames = async function (this: AxiosRequestConfig | void, params?: API_FIBA_GAMES.REQ): Promise<API_FIBA_GAMES.RES> {
  return (this?.instance || SportAPI).post('/api/front/fiba/games', params, this || undefined)
}

/**
 * 13.
 * 13.3.取得fiba設置賽事時間列表
 * @see https://sportsapidoc-2.cxsport.net/apidoc/%E4%BD%93%E8%82%B2%E6%8E%A5%E5%8F%A3%E6%96%87%E6%A1%A3/#_13_3_%E5%8F%96%E5%BE%97fiba%E8%A8%AD%E7%BD%AE%E8%B3%BD%E4%BA%8B%E6%99%82%E9%96%93%E5%88%97%E8%A1%A8
 */
export const reqFibaDate = async function (this: AxiosRequestConfig | void, params?: API_FIBA_DATE.REQ): Promise<API_FIBA_DATE.RES> {
  return (this?.instance || SportAPI).post('/api/front/fiba/date', params, this || undefined)
}

/**
 * 14.冠军赛果信息
 * 14.1.获取冠军赛果列表,免登入即可访问
 * @see https://sportsapidoc-2.cxsport.net/apidoc/%E4%BD%93%E8%82%B2%E6%8E%A5%E5%8F%A3%E6%96%87%E6%A1%A3/#_14_1_%E8%8E%B7%E5%8F%96%E5%86%A0%E5%86%9B%E8%B5%9B%E6%9E%9C%E5%88%97%E8%A1%A8%2C%E5%85%8D%E7%99%BB%E5%85%A5%E5%8D%B3%E5%8F%AF%E8%AE%BF%E9%97%AE
 */
export const reqOutrightResultList = async function (this: AxiosRequestConfig | void, params?: API_OUTRIGHT_RESULT_LIST.REQ): Promise<API_OUTRIGHT_RESULT_LIST.RES> {
  return (this?.instance || SportAPI).post('/api/front/outright/result/list', params, this || undefined)
}

/**
 * 15.体育新版菜单接口
 * 15.1.手机版top体育菜单,免登入即可访问
 * @see https://sportsapidoc-2.cxsport.net/apidoc/%E4%BD%93%E8%82%B2%E6%8E%A5%E5%8F%A3%E6%96%87%E6%A1%A3/#_15_1_%E6%89%8B%E6%9C%BA%E7%89%88top%E4%BD%93%E8%82%B2%E8%8F%9C%E5%8D%95%2C%E5%85%8D%E7%99%BB%E5%85%A5%E5%8D%B3%E5%8F%AF%E8%AE%BF%E9%97%AE
 */
export const reqV2SportMobileTopMenu = async function (this: AxiosRequestConfig | void, params?: API_V2_SPORT_MOBILE_TOPMENU.REQ): Promise<API_V2_SPORT_MOBILE_TOPMENU.RES> {
  return (this?.instance || SportAPI).post('/api/front/v2/sport/mobile/topMenu', params, this || undefined)
}

/**
 * 16.体育信息
 * 16.1.推荐赛事接口
 * @see https://sportsapidoc-2.cxsport.net/apidoc/%E4%BD%93%E8%82%B2%E6%8E%A5%E5%8F%A3%E6%96%87%E6%A1%A3/#_16_1_%E6%8E%A8%E8%8D%90%E8%B5%9B%E4%BA%8B%E6%8E%A5%E5%8F%A3
 */
export const reqSportV2Recommend = async function (this: AxiosRequestConfig | void, params?: API_SPORT_V2_RECOMMEND.REQ): Promise<API_SPORT_V2_RECOMMEND.RES> {
  return (this?.instance || SportAPI).post('/api/front/sport/v2/recommend', params, this || undefined)
}

/**
 * 17.赛事
 * 17.1.按赛事类型预加载各体育赛事,免登入即可访问
 * @see https://sportsapidoc-2.cxsport.net/apidoc/%E4%BD%93%E8%82%B2%E6%8E%A5%E5%8F%A3%E6%96%87%E6%A1%A3/#_17_1_%E6%8C%89%E8%B5%9B%E4%BA%8B%E7%B1%BB%E5%9E%8B%E9%A2%84%E5%8A%A0%E8%BD%BD%E5%90%84%E4%BD%93%E8%82%B2%E8%B5%9B%E4%BA%8B%2C%E5%85%8D%E7%99%BB%E5%85%A5%E5%8D%B3%E5%8F%AF%E8%AE%BF%E9%97%AE
 */
export const reqMatchPreload = async function (this: AxiosRequestConfig | void, params?: API_MATCH_PRELOAD.REQ): Promise<API_MATCH_PRELOAD.RES> {
  return (this?.instance || SportAPI).post('/api/front/match/preload', params, this || undefined)
}

/**
 * 17.赛事
 * 17.2.获取首页panel要显示的全部球种各一场赛事, 只返回滚球或即将开赛的赛事
 * @see https://sportsapidoc-2.cxsport.net/apidoc/%E4%BD%93%E8%82%B2%E6%8E%A5%E5%8F%A3%E6%96%87%E6%A1%A3/#_17_2_%E8%8E%B7%E5%8F%96%E9%A6%96%E9%A1%B5panel%E8%A6%81%E6%98%BE%E7%A4%BA%E7%9A%84%E5%85%A8%E9%83%A8%E7%90%83%E7%A7%8D%E5%90%84%E4%B8%80%E5%9C%BA%E8%B5%9B%E4%BA%8B%2C%20%E5%8F%AA%E8%BF%94%E5%9B%9E%E6%BB%9A%E7%90%83%E6%88%96%E5%8D%B3%E5%B0%86%E5%BC%80%E8%B5%9B%E7%9A%84%E8%B5%9B%E4%BA%8B
 */
export const reqMatchPanel = async function (this: AxiosRequestConfig | void, params?: API_MATCH_PANEL.REQ): Promise<API_MATCH_PANEL.RES> {
  return (this?.instance || SportAPI).post('/api/front/match/panel', params, this || undefined)
}

/**
 * 17.赛事
 * 17.3.获取小金直播信息获取地址（小金地址）得到形如：https://sbk-live.cxct.org/api/LiveCenter/GetLiveStreamInfo?eventId=5219648&venderEventId=kie6bw8eg3qnikzkv9wrxono&clientIp=54.238.64.92&isHls=true&language=zh-cn&partnerId=0&deviceName=Desktop_HLS的地址，直接发起请求，得到如下响应：{"IsSuccess":true,"ReturnCode":"0","Message":"Success","SysDateTime":"2021/09/11 08:32:31 -04:00","Response":{"EventId":"5219648","LsEventId":"kie6bw8eg3qnikzkv9wrxono","PartnerId":"0","VideoProvider":"p2","StreamURL":"https://wab.performfeeds.com/livestreamlaunch/lbfdi04kmk1p13eiv27fvu5w5/1rqfmyydb5e491o603msv2wwj4?_fmt=json&_fld=sl,aLng,sTok,pa&_rt=c&aLng=xx-xx,en-gb","ViewData":null,"HasCoverage":true,"HasLineup":false,"StreamId":null,"AccessToken":"Bearer dzmnlUHA6S5tDWzmzxAiWFUxpZWE9CCX0NWrRuTGsOhVwNUSU0hMe7zYE_7g8_0l6tLMUJ-Q0BLlMiyOhS157z5z2BhCe5OCk-uFVe33yyLy-yzBWha-i397WmFj9_apv7Jxfm1_Qy8iN3jS0vo1pSLFgzaUVhxWv0hFU75JTQLjAdyZHM2U3cPtIK4MoFUpW0_s8FauQAtScs48YqyT6sdKzQuDFZKCHkTEbnSH9xkdiKx50Y_5ih05hnATdC_6QMfsmYHXVO3mblnqmW8TE89smSUR1APFciCz8O6z5K9xQPgnJJ2LWnM0WwKhc9BiLNgSygeXGt8feFzKBTZozA","MatchTrackerEventId":"25567618","ProviderSportId":"1"}}其中Response中的内容就是之前 /live/info 接口解析得到的内容
 * @see https://sportsapidoc-2.cxsport.net/apidoc/%E4%BD%93%E8%82%B2%E6%8E%A5%E5%8F%A3%E6%96%87%E6%A1%A3/#_17_3_%E8%8E%B7%E5%8F%96%E5%B0%8F%E9%87%91%E7%9B%B4%E6%92%AD%E4%BF%A1%E6%81%AF%E8%8E%B7%E5%8F%96%E5%9C%B0%E5%9D%80%EF%BC%88%E5%B0%8F%E9%87%91%E5%9C%B0%E5%9D%80%EF%BC%89%0A%E5%BE%97%E5%88%B0%E5%BD%A2%E5%A6%82%EF%BC%9Ahttps%3A%2F%2Fsbk-live.cxct.org%2Fapi%2FLiveCenter%2FGetLiveStreamInfo%3FeventId%3D5219648%26venderEventId%3Dkie6bw8eg3qnikzkv9wrxono%26clientIp%3D54.238.64.92%26isHls%3Dtrue%26language%3Dzh-cn%26partnerId%3D0%26deviceName%3DDesktop_HLS%0A%E7%9A%84%E5%9C%B0%E5%9D%80%EF%BC%8C%0A%E7%9B%B4%E6%8E%A5%E5%8F%91%E8%B5%B7%E8%AF%B7%E6%B1%82%EF%BC%8C%E5%BE%97%E5%88%B0%E5%A6%82%E4%B8%8B%E5%93%8D%E5%BA%94%EF%BC%9A%0A%7B
 */
export const reqMatchLiveUrl = async function (this: AxiosRequestConfig | void, params?: API_MATCH_LIVE_URL.REQ): Promise<API_MATCH_LIVE_URL.RES> {
  return (this?.instance || SportAPI).post('/api/front/match/live/url', params, this || undefined)
}

/**
 * 17.赛事
 * 17.4.直播链路地址获取返回样例：{"IsSuccess": true,"ReturnCode": "0","Message": "Success","SysDateTime": "2022/01/24 08:09:32 +07:00","Response": {"StreamURLs": [{"url": "https://livesports.sportsapi.cn/m3u8/101-401071178-cd890861b4be604e24dd115aa6b428c9.m3u8?secret=83d33a93941f2a40191884bd9a7876b1&c=101&key=108","format": "m3u8","type": 1,"status": 1},{"url": "https://livesports.sportsapi.cn/live/101-401071178-cd890861b4be604e24dd115aa6b428c9.flv?secret=83d33a93941f2a40191884bd9a7876b1&c=101&key=108","format": "flv","type": 1,"status": 1},{"url": "rtmp://sportslive.sportsapi.cn:30008/live/101-401071178-cd890861b4be604e24dd115aa6b428c9?secret=83d33a93941f2a40191884bd9a7876b1&c=101&key=108","format": "rtmp","type": 1,"status": 1}],"EventId": "401071178","LsEventId": "401071178","VideoProvider": "own","StreamURL": "https://livesports.sportsapi.cn/m3u8/101-401071178-cd890861b4be604e24dd115aa6b428c9.m3u8?secret=83d33a93941f2a40191884bd9a7876b1&c=101&key=108"}}
 * @see https://sportsapidoc-2.cxsport.net/apidoc/%E4%BD%93%E8%82%B2%E6%8E%A5%E5%8F%A3%E6%96%87%E6%A1%A3/#_17_4_%E7%9B%B4%E6%92%AD%E9%93%BE%E8%B7%AF%E5%9C%B0%E5%9D%80%E8%8E%B7%E5%8F%96%0A%E8%BF%94%E5%9B%9E%E6%A0%B7%E4%BE%8B%EF%BC%9A%0A%7B%0A
 */
export const reqMatchLiveStreamUrlMappingId = async function (this: AxiosRequestConfig | void, params?: API_MATCH_LIVE_STREAM_URL_MAPPINGID.REQ): Promise<API_MATCH_LIVE_STREAM_URL_MAPPINGID.RES> {
  const { mappingId } = params || {}
  return (this?.instance || SportAPI).get(`/api/front/match/live/stream/url/${mappingId}`, { ...this, params })
}

/**
 * 17.赛事
 * 17.5.动画地址获取
 * @see https://sportsapidoc-2.cxsport.net/apidoc/%E4%BD%93%E8%82%B2%E6%8E%A5%E5%8F%A3%E6%96%87%E6%A1%A3/#_17_5_%E5%8A%A8%E7%94%BB%E5%9C%B0%E5%9D%80%E8%8E%B7%E5%8F%96
 */
export const reqMatchTrackerUrlMappingId = async function (this: AxiosRequestConfig | void, params?: API_MATCH_TRACKER_URL_MAPPINGID.REQ): Promise<API_MATCH_TRACKER_URL_MAPPINGID.RES> {
  const { mappingId } = params || {}
  return (this?.instance || SportAPI).get(`/api/front/match/tracker/url/${mappingId}`, { ...this, params })
}

/**
 * 17.赛事
 * 17.6.glive 直播链路地址获取
 * @see https://sportsapidoc-2.cxsport.net/apidoc/%E4%BD%93%E8%82%B2%E6%8E%A5%E5%8F%A3%E6%96%87%E6%A1%A3/#_17_6_glive%20%E7%9B%B4%E6%92%AD%E9%93%BE%E8%B7%AF%E5%9C%B0%E5%9D%80%E8%8E%B7%E5%8F%96
 */
export const reqMatchLiveStreamGliveUrlMappingId = async function (
  this: AxiosRequestConfig | void,
  params?: API_MATCH_LIVE_STREAM_GLIVE_URL_MAPPINGID.REQ,
): Promise<API_MATCH_LIVE_STREAM_GLIVE_URL_MAPPINGID.RES> {
  const { mappingId } = params || {}
  return (this?.instance || SportAPI).get(`/api/front/match/live/stream/glive/url/${mappingId}`, { ...this, params })
}

/**
 * 18.参赛表
 * 18.1.查询参赛表
 * @see https://sportsapidoc-2.cxsport.net/apidoc/%E4%BD%93%E8%82%B2%E6%8E%A5%E5%8F%A3%E6%96%87%E6%A1%A3/#_18_1_%E6%9F%A5%E8%AF%A2%E5%8F%82%E8%B5%9B%E8%A1%A8
 */
export const reqMatchCategoryQuery = async function (this: AxiosRequestConfig | void, params?: API_MATCHCATEGORY_QUERY.REQ): Promise<API_MATCHCATEGORY_QUERY.RES> {
  return (this?.instance || SportAPI).post('/api/front/matchCategory/query', params, this || undefined)
}

/**
 * 18.参赛表
 * 18.2.查询推薦賽事
 * @see https://sportsapidoc-2.cxsport.net/apidoc/%E4%BD%93%E8%82%B2%E6%8E%A5%E5%8F%A3%E6%96%87%E6%A1%A3/#_18_2_%E6%9F%A5%E8%AF%A2%E6%8E%A8%E8%96%A6%E8%B3%BD%E4%BA%8B
 */
export const reqMatchCategoryRecommendQuery = async function (this: AxiosRequestConfig | void, params?: API_MATCHCATEGORY_RECOMMEND_QUERY.REQ): Promise<API_MATCHCATEGORY_RECOMMEND_QUERY.RES> {
  return (this?.instance || SportAPI).post('/api/front/matchCategory/recommend/query', params, this || undefined)
}

/**
 * 18.参赛表
 * 18.3.查詢主頁精選賽事
 * @see https://sportsapidoc-2.cxsport.net/apidoc/%E4%BD%93%E8%82%B2%E6%8E%A5%E5%8F%A3%E6%96%87%E6%A1%A3/#_18_3_%E6%9F%A5%E8%A9%A2%E4%B8%BB%E9%A0%81%E7%B2%BE%E9%81%B8%E8%B3%BD%E4%BA%8B%0A%3Cp%3E%0AplayCateMenuCode%3A%20pc%3A%20SPECIAL_MATCH%2C%20mobile%3A%20SPECIAL_MATCH_MOBILE
 */
export const reqMatchCategorySpecialMatchQuery = async function (
  this: AxiosRequestConfig | void,
  params?: API_MATCHCATEGORY_SPECIAL_MATCH_QUERY.REQ,
): Promise<API_MATCHCATEGORY_SPECIAL_MATCH_QUERY.RES> {
  return (this?.instance || SportAPI).post('/api/front/matchCategory/special/match/query', params, this || undefined)
}

/**
 * 18.参赛表
 * 18.4.查詢主頁精選賽事菜单
 * @see https://sportsapidoc-2.cxsport.net/apidoc/%E4%BD%93%E8%82%B2%E6%8E%A5%E5%8F%A3%E6%96%87%E6%A1%A3/#_18_4_%E6%9F%A5%E8%A9%A2%E4%B8%BB%E9%A0%81%E7%B2%BE%E9%81%B8%E8%B3%BD%E4%BA%8B%E8%8F%9C%E5%8D%95%0A%3Cp%3E%0AplayCateMenuCode%3A%20pc%3A%20SPECIAL_MATCH%2C%20mobile%3A%20SPECIAL_MATCH_MOBILE
 */
export const reqMatchCategorySpecialMenuQuery = async function (this: AxiosRequestConfig | void, params?: API_MATCHCATEGORY_SPECIAL_MENU_QUERY.REQ): Promise<API_MATCHCATEGORY_SPECIAL_MENU_QUERY.RES> {
  return (this?.instance || SportAPI).post('/api/front/matchCategory/special/menu/query', params, this || undefined)
}

/**
 * 19.赛事赛果信息
 * 19.1.获取赛果列表,免登入即可访问
 * @see https://sportsapidoc-2.cxsport.net/apidoc/%E4%BD%93%E8%82%B2%E6%8E%A5%E5%8F%A3%E6%96%87%E6%A1%A3/#_19_1_%E8%8E%B7%E5%8F%96%E8%B5%9B%E6%9E%9C%E5%88%97%E8%A1%A8%2C%E5%85%8D%E7%99%BB%E5%85%A5%E5%8D%B3%E5%8F%AF%E8%AE%BF%E9%97%AE
 */
export const reqMatchResultList = async function (this: AxiosRequestConfig | void, params?: API_MATCH_RESULT_LIST.REQ): Promise<API_MATCH_RESULT_LIST.RES> {
  return (this?.instance || SportAPI).post('/api/front/match/result/list', params, this || undefined)
}

/**
 * 19.赛事赛果信息
 * 19.2.获取赛事玩法赛果,免登入即可访问
 * @see https://sportsapidoc-2.cxsport.net/apidoc/%E4%BD%93%E8%82%B2%E6%8E%A5%E5%8F%A3%E6%96%87%E6%A1%A3/#_19_2_%E8%8E%B7%E5%8F%96%E8%B5%9B%E4%BA%8B%E7%8E%A9%E6%B3%95%E8%B5%9B%E6%9E%9C%2C%E5%85%8D%E7%99%BB%E5%85%A5%E5%8D%B3%E5%8F%AF%E8%AE%BF%E9%97%AE
 */
export const reqMatchResultPlayList = async function (this: AxiosRequestConfig | void, params?: API_MATCH_RESULT_PLAY_LIST.REQ): Promise<API_MATCH_RESULT_PLAY_LIST.RES> {
  return (this?.instance || SportAPI).get('/api/front/match/result/play/list', { ...this, params })
}

/**
 * 20.玩法分类信息
 * 20.1.玩法分类列表,免登入即可访问
 * @see https://sportsapidoc-2.cxsport.net/apidoc/%E4%BD%93%E8%82%B2%E6%8E%A5%E5%8F%A3%E6%96%87%E6%A1%A3/#_20_1_%E7%8E%A9%E6%B3%95%E5%88%86%E7%B1%BB%E5%88%97%E8%A1%A8%2C%E5%85%8D%E7%99%BB%E5%85%A5%E5%8D%B3%E5%8F%AF%E8%AE%BF%E9%97%AE
 */
export const reqPlaycateTypeList = async function (this: AxiosRequestConfig | void, params?: API_PLAYCATE_TYPE_LIST.REQ): Promise<API_PLAYCATE_TYPE_LIST.RES> {
  return (this?.instance || SportAPI).get('/api/front/playcate/type/list', { ...this, params })
}

/**
 * 21.赛程
 * 21.1.取得赛程
 * @see https://sportsapidoc-2.cxsport.net/apidoc/%E4%BD%93%E8%82%B2%E6%8E%A5%E5%8F%A3%E6%96%87%E6%A1%A3/#_21_1_%E5%8F%96%E5%BE%97%E8%B5%9B%E7%A8%8B
 */
export const reqScheduleQuery = async function (this: AxiosRequestConfig | void, params?: API_SCHEDULE_QUERY.REQ): Promise<API_SCHEDULE_QUERY.RES> {
  return (this?.instance || SportAPI).post('/api/front/schedule/query', params, this || undefined)
}

/**
 * 22.
 * 22.1.获取时间轴数据
 * @see https://sportsapidoc-2.cxsport.net/apidoc/%E4%BD%93%E8%82%B2%E6%8E%A5%E5%8F%A3%E6%96%87%E6%A1%A3/#_22_1_%E8%8E%B7%E5%8F%96%E6%97%B6%E9%97%B4%E8%BD%B4%E6%95%B0%E6%8D%AE
 */
export const reqTimeline = async function (this: AxiosRequestConfig | void, params?: API_TIMELINE.REQ): Promise<API_TIMELINE.RES> {
  return (this?.instance || SportAPI).get('/api/front/timeline', { ...this, params })
}

/**
 * 23.玩法投注限额
 * 23.1.获取所有体育玩法限额,免登入即可访问
 * @see https://sportsapidoc-2.cxsport.net/apidoc/%E4%BD%93%E8%82%B2%E6%8E%A5%E5%8F%A3%E6%96%87%E6%A1%A3/#_23_1_%E8%8E%B7%E5%8F%96%E6%89%80%E6%9C%89%E4%BD%93%E8%82%B2%E7%8E%A9%E6%B3%95%E9%99%90%E9%A2%9D%2C%E5%85%8D%E7%99%BB%E5%85%A5%E5%8D%B3%E5%8F%AF%E8%AE%BF%E9%97%AE
 */
export const reqPlayQuotaComList = async function (this: AxiosRequestConfig | void, params?: API_PLAYQUOTACOM_LIST.REQ): Promise<API_PLAYQUOTACOM_LIST.RES> {
  return (this?.instance || SportAPI).get('/api/front/playQuotaCom/list', { ...this, params })
}

/**
 * 24.namemap（赔率名称等国际化）
 * 24.1.赔率名称映射(免登陆)
 * @see https://sportsapidoc-2.cxsport.net/apidoc/%E4%BD%93%E8%82%B2%E6%8E%A5%E5%8F%A3%E6%96%87%E6%A1%A3/#_24_1_%E8%B5%94%E7%8E%87%E5%90%8D%E7%A7%B0%E6%98%A0%E5%B0%84(%E5%85%8D%E7%99%BB%E9%99%86)
 */
export const reqNamemapOddsnamemap = async function (this: AxiosRequestConfig | void, params?: API_NAMEMAP_ODDS_NAME_MAP.REQ): Promise<API_NAMEMAP_ODDS_NAME_MAP.RES> {
  return (this?.instance || SportAPI).get('/api/front/namemap/odds-name-map', { ...this, params })
}

/**
 * 25.下注排行相关
 * 25.1.查询最新下注排行
 * @see https://sportsapidoc-2.cxsport.net/apidoc/%E4%BD%93%E8%82%B2%E6%8E%A5%E5%8F%A3%E6%96%87%E6%A1%A3/#_25_1_%E6%9F%A5%E8%AF%A2%E6%9C%80%E6%96%B0%E4%B8%8B%E6%B3%A8%E6%8E%92%E8%A1%8C
 */
export const reqBetRankQueryBetRankNewest = async function (this: AxiosRequestConfig | void, params?: API_BETRANK_QUERYBETRANKNEWEST.REQ): Promise<API_BETRANK_QUERYBETRANKNEWEST.RES> {
  return (this?.instance || SportAPI).post('/api/front/betRank/queryBetRankNewest', params, this || undefined)
}

/**
 * 25.下注排行相关
 * 25.2.查询最大盈利下注
 * @see https://sportsapidoc-2.cxsport.net/apidoc/%E4%BD%93%E8%82%B2%E6%8E%A5%E5%8F%A3%E6%96%87%E6%A1%A3/#_25_2_%E6%9F%A5%E8%AF%A2%E6%9C%80%E5%A4%A7%E7%9B%88%E5%88%A9%E4%B8%8B%E6%B3%A8
 */
export const reqBetRankQueryBetRankMaxWin = async function (this: AxiosRequestConfig | void, params?: API_BETRANK_QUERYBETRANKMAXWIN.REQ): Promise<API_BETRANK_QUERYBETRANKMAXWIN.RES> {
  return (this?.instance || SportAPI).post('/api/front/betRank/queryBetRankMaxWin', params, this || undefined)
}

/**
 * 26.证件和人脸识别
 * 26.1.证件和人脸识别
 * @see https://sportsapidoc-2.cxsport.net/apidoc/%E4%BD%93%E8%82%B2%E6%8E%A5%E5%8F%A3%E6%96%87%E6%A1%A3/#_26_1_%E8%AF%81%E4%BB%B6%E5%92%8C%E4%BA%BA%E8%84%B8%E8%AF%86%E5%88%AB
 */
export const reqRealidInitialize = async function (this: AxiosRequestConfig | void, params?: API_REALID_INITIALIZE.REQ): Promise<API_REALID_INITIALIZE.RES> {
  return (this?.instance || SportAPI).post('/[/api/front/realid]/initialize', params, this || undefined)
}

/**
 * 26.证件和人脸识别
 * 26.2.查询人脸识别的结果信息
 * @see https://sportsapidoc-2.cxsport.net/apidoc/%E4%BD%93%E8%82%B2%E6%8E%A5%E5%8F%A3%E6%96%87%E6%A1%A3/#_26_2_%E6%9F%A5%E8%AF%A2%E4%BA%BA%E8%84%B8%E8%AF%86%E5%88%AB%E7%9A%84%E7%BB%93%E6%9E%9C%E4%BF%A1%E6%81%AF
 */
export const reqRealidCheckresult = async function (this: AxiosRequestConfig | void, params?: API_REALID_CHECKRESULT.REQ): Promise<API_REALID_CHECKRESULT.RES> {
  return (this?.instance || SportAPI).post('/[/api/front/realid]/checkresult', params, this || undefined)
}

/**
 * 27.体育信息
 * 27.1.体育菜单,免登入即可访问
 * @see https://sportsapidoc-2.cxsport.net/apidoc/%E4%BD%93%E8%82%B2%E6%8E%A5%E5%8F%A3%E6%96%87%E6%A1%A3/#_27_1_%E4%BD%93%E8%82%B2%E8%8F%9C%E5%8D%95%2C%E5%85%8D%E7%99%BB%E5%85%A5%E5%8D%B3%E5%8F%AF%E8%AE%BF%E9%97%AE
 */
export const reqSportMenu = async function (this: AxiosRequestConfig | void, params?: API_SPORT_MENU.REQ): Promise<API_SPORT_MENU.RES> {
  return (this?.instance || SportAPI).post('/api/front/sport/menu', params, this || undefined)
}

/**
 * 27.体育信息
 * 27.2.返回指定画面(EX:滚球,早盘,冠军)下有赔率的球类及菜单
 * @see https://sportsapidoc-2.cxsport.net/apidoc/%E4%BD%93%E8%82%B2%E6%8E%A5%E5%8F%A3%E6%96%87%E6%A1%A3/#_27_2_%E8%BF%94%E5%9B%9E%E6%8C%87%E5%AE%9A%E7%94%BB%E9%9D%A2(EX%3A%E6%BB%9A%E7%90%83%2C%E6%97%A9%E7%9B%98%2C%E5%86%A0%E5%86%9B)%E4%B8%8B%E6%9C%89%E8%B5%94%E7%8E%87%E7%9A%84%E7%90%83%E7%B1%BB%E5%8F%8A%E8%8F%9C%E5%8D%95
 */
export const reqSportQuery = async function (this: AxiosRequestConfig | void, params?: API_SPORT_QUERY.REQ): Promise<API_SPORT_QUERY.RES> {
  return (this?.instance || SportAPI).post('/api/front/sport/query', params, this || undefined)
}

/**
 * 27.体育信息
 * 27.3.手机版体育菜单,免登入即可访问
 * @see https://sportsapidoc-2.cxsport.net/apidoc/%E4%BD%93%E8%82%B2%E6%8E%A5%E5%8F%A3%E6%96%87%E6%A1%A3/#_27_3_%E6%89%8B%E6%9C%BA%E7%89%88%E4%BD%93%E8%82%B2%E8%8F%9C%E5%8D%95%2C%E5%85%8D%E7%99%BB%E5%85%A5%E5%8D%B3%E5%8F%AF%E8%AE%BF%E9%97%AE
 */
export const reqSportMobileMenu = async function (this: AxiosRequestConfig | void, params?: API_SPORT_MOBILE_MENU.REQ): Promise<API_SPORT_MOBILE_MENU.RES> {
  return (this?.instance || SportAPI).post('/api/front/sport/mobile/menu', params, this || undefined)
}

/**
 * 27.体育信息
 * 27.4.PC版体育左侧边栏,免登入即可访问
 * @see https://sportsapidoc-2.cxsport.net/apidoc/%E4%BD%93%E8%82%B2%E6%8E%A5%E5%8F%A3%E6%96%87%E6%A1%A3/#_27_4_PC%E7%89%88%E4%BD%93%E8%82%B2%E5%B7%A6%E4%BE%A7%E8%BE%B9%E6%A0%8F%2C%E5%85%8D%E7%99%BB%E5%85%A5%E5%8D%B3%E5%8F%AF%E8%AE%BF%E9%97%AE
 */
export const reqSportPcMenu = async function (this: AxiosRequestConfig | void, params?: API_SPORT_PC_MENU.REQ): Promise<API_SPORT_PC_MENU.RES> {
  return (this?.instance || SportAPI).post('/api/front/sport/pc/menu', params, this || undefined)
}

/**
 * 27.体育信息
 * 27.5.PC版体育右侧滚球赛事接口
 * @see https://sportsapidoc-2.cxsport.net/apidoc/%E4%BD%93%E8%82%B2%E6%8E%A5%E5%8F%A3%E6%96%87%E6%A1%A3/#_27_5_PC%E7%89%88%E4%BD%93%E8%82%B2%E5%8F%B3%E4%BE%A7%E6%BB%9A%E7%90%83%E8%B5%9B%E4%BA%8B%E6%8E%A5%E5%8F%A3
 */
export const reqSportPcListInplay = async function (this: AxiosRequestConfig | void, params?: API_SPORT_PC_LIST_INPLAY.REQ): Promise<API_SPORT_PC_LIST_INPLAY.RES> {
  return (this?.instance || SportAPI).get('/api/front/sport/pc/list/inplay', { ...this, params })
}

/**
 * 27.体育信息
 * 27.6.PC版体育右侧热门赛事接口
 * @see https://sportsapidoc-2.cxsport.net/apidoc/%E4%BD%93%E8%82%B2%E6%8E%A5%E5%8F%A3%E6%96%87%E6%A1%A3/#_27_6_PC%E7%89%88%E4%BD%93%E8%82%B2%E5%8F%B3%E4%BE%A7%E7%83%AD%E9%97%A8%E8%B5%9B%E4%BA%8B%E6%8E%A5%E5%8F%A3
 */
export const reqSportPcListPopular = async function (this: AxiosRequestConfig | void, params?: API_SPORT_PC_LIST_POPULAR.REQ): Promise<API_SPORT_PC_LIST_POPULAR.RES> {
  return (this?.instance || SportAPI).get('/api/front/sport/pc/list/popular', { ...this, params })
}

/**
 * 27.体育信息
 * 27.7.PC版体育右侧我的赛事接口
 * @see https://sportsapidoc-2.cxsport.net/apidoc/%E4%BD%93%E8%82%B2%E6%8E%A5%E5%8F%A3%E6%96%87%E6%A1%A3/#_27_7_PC%E7%89%88%E4%BD%93%E8%82%B2%E5%8F%B3%E4%BE%A7%E6%88%91%E7%9A%84%E8%B5%9B%E4%BA%8B%E6%8E%A5%E5%8F%A3
 */
export const reqSportPcListMyfav = async function (this: AxiosRequestConfig | void, params?: API_SPORT_PC_LIST_MYFAV.REQ): Promise<API_SPORT_PC_LIST_MYFAV.RES> {
  return (this?.instance || SportAPI).get('/api/front/sport/pc/list/myfav', { ...this, params })
}

/**
 * 27.体育信息
 * 27.8.获取专题列表（特殊参赛表）
 * @see https://sportsapidoc-2.cxsport.net/apidoc/%E4%BD%93%E8%82%B2%E6%8E%A5%E5%8F%A3%E6%96%87%E6%A1%A3/#_27_8_%E8%8E%B7%E5%8F%96%E4%B8%93%E9%A2%98%E5%88%97%E8%A1%A8%EF%BC%88%E7%89%B9%E6%AE%8A%E5%8F%82%E8%B5%9B%E8%A1%A8%EF%BC%89
 */
export const reqSportCouponMenu = async function (this: AxiosRequestConfig | void, params?: API_SPORT_COUPON_MENU.REQ): Promise<API_SPORT_COUPON_MENU.RES> {
  return (this?.instance || SportAPI).get('/api/front/sport/coupon/menu', { ...this, params })
}

/**
 * 27.体育信息
 * 27.9.体育列表,免登入即可访问
 * @see https://sportsapidoc-2.cxsport.net/apidoc/%E4%BD%93%E8%82%B2%E6%8E%A5%E5%8F%A3%E6%96%87%E6%A1%A3/#_27_9_%E4%BD%93%E8%82%B2%E5%88%97%E8%A1%A8%2C%E5%85%8D%E7%99%BB%E5%85%A5%E5%8D%B3%E5%8F%AF%E8%AE%BF%E9%97%AE
 */
export const reqSportList = async function (this: AxiosRequestConfig | void, params?: API_SPORT_LIST.REQ): Promise<API_SPORT_LIST.RES> {
  return (this?.instance || SportAPI).get('/api/front/sport/list', { ...this, params })
}

/**
 * 27.体育信息
 * 27.10.首页体育菜单,免登入即可访问
 * @see https://sportsapidoc-2.cxsport.net/apidoc/%E4%BD%93%E8%82%B2%E6%8E%A5%E5%8F%A3%E6%96%87%E6%A1%A3/#_27_10_%E9%A6%96%E9%A1%B5%E4%BD%93%E8%82%B2%E8%8F%9C%E5%8D%95%2C%E5%85%8D%E7%99%BB%E5%85%A5%E5%8D%B3%E5%8F%AF%E8%AE%BF%E9%97%AE
 */
export const reqSportHomeMenu = async function (this: AxiosRequestConfig | void, params?: API_SPORT_HOME_MENU.REQ): Promise<API_SPORT_HOME_MENU.RES> {
  return (this?.instance || SportAPI).post('/api/front/sport/home/menu', params, this || undefined)
}

/**
 * 27.体育信息
 * 27.11.查询搜寻引擎资料, 免登入即可访问
 * @see https://sportsapidoc-2.cxsport.net/apidoc/%E4%BD%93%E8%82%B2%E6%8E%A5%E5%8F%A3%E6%96%87%E6%A1%A3/#_27_11_%E6%9F%A5%E8%AF%A2%E6%90%9C%E5%AF%BB%E5%BC%95%E6%93%8E%E8%B5%84%E6%96%99%2C%20%E5%85%8D%E7%99%BB%E5%85%A5%E5%8D%B3%E5%8F%AF%E8%AE%BF%E9%97%AE
 */
export const reqSportSearchEngine = async function (this: AxiosRequestConfig | void, params?: API_SPORT_SEARCHENGINE.REQ): Promise<API_SPORT_SEARCHENGINE.RES> {
  return (this?.instance || SportAPI).post('/api/front/sport/searchEngine', params, this || undefined)
}

/**
 * 27.体育信息
 * 27.12.手机宣传页热门推荐接口
 * @see https://sportsapidoc-2.cxsport.net/apidoc/%E4%BD%93%E8%82%B2%E6%8E%A5%E5%8F%A3%E6%96%87%E6%A1%A3/#_27_12_%E6%89%8B%E6%9C%BA%E5%AE%A3%E4%BC%A0%E9%A1%B5%E7%83%AD%E9%97%A8%E6%8E%A8%E8%8D%90%E6%8E%A5%E5%8F%A3
 */
export const reqSportRecommend = async function (this: AxiosRequestConfig | void, params?: API_SPORT_RECOMMEND.REQ): Promise<API_SPORT_RECOMMEND.RES> {
  return (this?.instance || SportAPI).post('/api/front/sport/recommend', params, this || undefined)
}

/**
 * 27.体育信息
 * 27.13.手机宣传页热门推荐联赛接口
 * @see https://sportsapidoc-2.cxsport.net/apidoc/%E4%BD%93%E8%82%B2%E6%8E%A5%E5%8F%A3%E6%96%87%E6%A1%A3/#_27_13_%E6%89%8B%E6%9C%BA%E5%AE%A3%E4%BC%A0%E9%A1%B5%E7%83%AD%E9%97%A8%E6%8E%A8%E8%8D%90%E8%81%94%E8%B5%9B%E6%8E%A5%E5%8F%A3
 */
export const reqSportRecommendLeague = async function (this: AxiosRequestConfig | void): Promise<API_SPORT_RECOMMENDLEAGUE.RES> {
  return (this?.instance || SportAPI).post('/api/front/sport/recommendLeague', null, this || undefined)
}

/**
 * 27.体育信息
 * 27.14.pc端首页热门展示
 * @see https://sportsapidoc-2.cxsport.net/apidoc/%E4%BD%93%E8%82%B2%E6%8E%A5%E5%8F%A3%E6%96%87%E6%A1%A3/#_27_14_pc%E7%AB%AF%E9%A6%96%E9%A1%B5%E7%83%AD%E9%97%A8%E5%B1%95%E7%A4%BA
 */
export const reqSportPcHot = async function (this: AxiosRequestConfig | void, params?: API_SPORT_PC_HOT.REQ): Promise<API_SPORT_PC_HOT.RES> {
  return (this?.instance || SportAPI).post('/api/front/sport/pc/hot', params, this || undefined)
}

/**
 * 27.体育信息
 * 27.15.获取各球种的菜单配置
 * @see https://sportsapidoc-2.cxsport.net/apidoc/%E4%BD%93%E8%82%B2%E6%8E%A5%E5%8F%A3%E6%96%87%E6%A1%A3/#_27_15_%E8%8E%B7%E5%8F%96%E5%90%84%E7%90%83%E7%A7%8D%E7%9A%84%E8%8F%9C%E5%8D%95%E9%85%8D%E7%BD%AE
 */
export const reqSportMenuList = async function (this: AxiosRequestConfig | void): Promise<API_SPORT_MENU_LIST.RES> {
  return (this?.instance || SportAPI).get('/api/front/sport/menu/list', this || undefined)
}

/**
 * 27.体育信息
 * 27.16.pc前端，获取有视频或动画的赛事
 * @see https://sportsapidoc-2.cxsport.net/apidoc/%E4%BD%93%E8%82%B2%E6%8E%A5%E5%8F%A3%E6%96%87%E6%A1%A3/#_27_16_pc%E5%89%8D%E7%AB%AF%EF%BC%8C%E8%8E%B7%E5%8F%96%E6%9C%89%E8%A7%86%E9%A2%91%E6%88%96%E5%8A%A8%E7%94%BB%E7%9A%84%E8%B5%9B%E4%BA%8B
 */
export const reqSportPcMatchStreamGet = async function (this: AxiosRequestConfig | void, params?: API_SPORT_PC_MATCH_STREAM_GET.REQ): Promise<API_SPORT_PC_MATCH_STREAM_GET.RES> {
  return (this?.instance || SportAPI).get('/api/front/sport/pc/match/stream/get', { ...this, params })
}

/**
 * 27.体育信息
 * 27.17.pc前端，直播赛事栏位显示
 * @see https://sportsapidoc-2.cxsport.net/apidoc/%E4%BD%93%E8%82%B2%E6%8E%A5%E5%8F%A3%E6%96%87%E6%A1%A3/#_27_17_pc%E5%89%8D%E7%AB%AF%EF%BC%8C%E7%9B%B4%E6%92%AD%E8%B5%9B%E4%BA%8B%E6%A0%8F%E4%BD%8D%E6%98%BE%E7%A4%BA
 */
export const reqSportPcMatchStreamList = async function (this: AxiosRequestConfig | void, params?: API_SPORT_PC_MATCH_STREAM_LIST.REQ): Promise<API_SPORT_PC_MATCH_STREAM_LIST.RES> {
  return (this?.instance || SportAPI).get('/api/front/sport/pc/match/stream/list', { ...this, params })
}

/**
 * 28.投注站相关
 * 28.1.免登入可访问查询直营投注站列表
 * @see https://sportsapidoc-2.cxsport.net/apidoc/%E4%BD%93%E8%82%B2%E6%8E%A5%E5%8F%A3%E6%96%87%E6%A1%A3/#_28_1_%E5%85%8D%E7%99%BB%E5%85%A5%E5%8F%AF%E8%AE%BF%E9%97%AE%0A%E6%9F%A5%E8%AF%A2%E7%9B%B4%E8%90%A5%E6%8A%95%E6%B3%A8%E7%AB%99%E5%88%97%E8%A1%A8
 */
export const reqBettingStationQuery = async function (this: AxiosRequestConfig | void, params?: API_BETTINGSTATION_QUERY.REQ): Promise<API_BETTINGSTATION_QUERY.RES> {
  return (this?.instance || SportAPI).get('/api/front/bettingStation/query', { ...this, params })
}

/**
 * 28.投注站相关
 * 28.2.查询可提款投注站
 * @see https://sportsapidoc-2.cxsport.net/apidoc/%E4%BD%93%E8%82%B2%E6%8E%A5%E5%8F%A3%E6%96%87%E6%A1%A3/#_28_2_%E6%9F%A5%E8%AF%A2%E5%8F%AF%E6%8F%90%E6%AC%BE%E6%8A%95%E6%B3%A8%E7%AB%99
 */
export const reqBettingStationQueryUwStation = async function (this: AxiosRequestConfig | void, params?: API_BETTINGSTATION_QUERYUWSTATION.REQ): Promise<API_BETTINGSTATION_QUERYUWSTATION.RES> {
  return (this?.instance || SportAPI).get('/api/front/bettingStation/queryUwStation', { ...this, params })
}

/**
 * 28.投注站相关
 * 28.3.用邀请码查询投注站/代理
 * @see https://sportsapidoc-2.cxsport.net/apidoc/%E4%BD%93%E8%82%B2%E6%8E%A5%E5%8F%A3%E6%96%87%E6%A1%A3/#_28_3_%E7%94%A8%E9%82%80%E8%AF%B7%E7%A0%81%E6%9F%A5%E8%AF%A2%E6%8A%95%E6%B3%A8%E7%AB%99%2F%E4%BB%A3%E7%90%86
 */
export const reqBettingStationQueryByInvite = async function (this: AxiosRequestConfig | void, params?: API_BETTINGSTATION_QUERYBYINVITE.REQ): Promise<API_BETTINGSTATION_QUERYBYINVITE.RES> {
  return (this?.instance || SportAPI).get('/api/front/bettingStation/queryByInvite', { ...this, params })
}

/**
 * 28.投注站相关
 * 28.4.根据投注站id查询投注站详情
 * @see https://sportsapidoc-2.cxsport.net/apidoc/%E4%BD%93%E8%82%B2%E6%8E%A5%E5%8F%A3%E6%96%87%E6%A1%A3/#_28_4_%E6%A0%B9%E6%8D%AE%E6%8A%95%E6%B3%A8%E7%AB%99id%E6%9F%A5%E8%AF%A2%E6%8A%95%E6%B3%A8%E7%AB%99%E8%AF%A6%E6%83%85
 */
export const reqBettingStationQueryByBettingStationId = async function (
  this: AxiosRequestConfig | void,
  params?: API_BETTINGSTATION_QUERYBYBETTINGSTATIONID.REQ,
): Promise<API_BETTINGSTATION_QUERYBYBETTINGSTATIONID.RES> {
  return (this?.instance || SportAPI).get('/api/front/bettingStation/queryByBettingStationId', { ...this, params })
}

/**
 * 29.工作性质Controller
 * 29.1.获取所有工作性质列表
 * @see https://sportsapidoc-2.cxsport.net/apidoc/%E4%BD%93%E8%82%B2%E6%8E%A5%E5%8F%A3%E6%96%87%E6%A1%A3/#_29_1_%E8%8E%B7%E5%8F%96%E6%89%80%E6%9C%89%E5%B7%A5%E4%BD%9C%E6%80%A7%E8%B4%A8%E5%88%97%E8%A1%A8
 */
export const reqWorksQueryAll = async function (this: AxiosRequestConfig | void): Promise<API_WORKS_QUERYALL.RES> {
  return (this?.instance || SportAPI).get('/api/front/works/queryAll', this || undefined)
}

/**
 * 30.用户提款
 * 30.1.提款列表
 * @see https://sportsapidoc-2.cxsport.net/apidoc/%E4%BD%93%E8%82%B2%E6%8E%A5%E5%8F%A3%E6%96%87%E6%A1%A3/#_30_1_%E6%8F%90%E6%AC%BE%E5%88%97%E8%A1%A8
 */
export const reqUserwithdrawList = async function (this: AxiosRequestConfig | void, params?: API_USERWITHDRAW_LIST.REQ): Promise<API_USERWITHDRAW_LIST.RES> {
  return (this?.instance || SportAPI).post('/api/front/userwithdraw/list', params, this || undefined)
}

/**
 * 30.用户提款
 * 30.2.添加提款信息
 * @see https://sportsapidoc-2.cxsport.net/apidoc/%E4%BD%93%E8%82%B2%E6%8E%A5%E5%8F%A3%E6%96%87%E6%A1%A3/#_30_2_%E6%B7%BB%E5%8A%A0%E6%8F%90%E6%AC%BE%E4%BF%A1%E6%81%AF
 */
export const reqUserwithdrawAdd = async function (this: AxiosRequestConfig | void, params?: API_USERWITHDRAW_ADD.REQ): Promise<API_USERWITHDRAW_ADD.RES> {
  return (this?.instance || SportAPI).post('/api/front/userwithdraw/add', params, this || undefined)
}

/**
 * 30.用户提款
 * 30.3.获取用户提款活动
 * @see https://sportsapidoc-2.cxsport.net/apidoc/%E4%BD%93%E8%82%B2%E6%8E%A5%E5%8F%A3%E6%96%87%E6%A1%A3/#_30_3_%E8%8E%B7%E5%8F%96%E7%94%A8%E6%88%B7%E6%8F%90%E6%AC%BE%E6%B4%BB%E5%8A%A8
 */
export const reqUserwithdrawGetUserWdActivity = async function (this: AxiosRequestConfig | void, params?: API_USERWITHDRAW_GETUSERWDACTIVITY.REQ): Promise<API_USERWITHDRAW_GETUSERWDACTIVITY.RES> {
  return (this?.instance || SportAPI).post('/api/front/userwithdraw/getUserWdActivity', params, this || undefined)
}

/**
 * 30.用户提款
 * 30.4.获取提现稽核资料
 * @see https://sportsapidoc-2.cxsport.net/apidoc/%E4%BD%93%E8%82%B2%E6%8E%A5%E5%8F%A3%E6%96%87%E6%A1%A3/#_30_4_%E8%8E%B7%E5%8F%96%E6%8F%90%E7%8E%B0%E7%A8%BD%E6%A0%B8%E8%B5%84%E6%96%99
 */
export const reqUserwithdrawGetUwCheck = async function (this: AxiosRequestConfig | void, params?: API_USERWITHDRAW_GETUWCHECK.REQ): Promise<API_USERWITHDRAW_GETUWCHECK.RES> {
  return (this?.instance || SportAPI).get('/api/front/userwithdraw/getUwCheck', { ...this, params })
}

/**
 * 31.第三方游戏接口
 * 31.1.获取余额
 * @see https://sportsapidoc-2.cxsport.net/apidoc/%E4%BD%93%E8%82%B2%E6%8E%A5%E5%8F%A3%E6%96%87%E6%A1%A3/#_31_1_%E8%8E%B7%E5%8F%96%E4%BD%99%E9%A2%9D
 */
export const reqThirdapiFirmTypeGetBalance = async function (this: AxiosRequestConfig | void, params?: API_THIRDAPI_FIRMTYPE_GETBALANCE.REQ): Promise<API_THIRDAPI_FIRMTYPE_GETBALANCE.RES> {
  const { firmType } = params || {}
  return (this?.instance || SportAPI).get(`/api/front/thirdapi/${firmType}/getBalance`, { ...this, params })
}

/**
 * 31.第三方游戏接口
 * 31.2.登录
 * @see https://sportsapidoc-2.cxsport.net/apidoc/%E4%BD%93%E8%82%B2%E6%8E%A5%E5%8F%A3%E6%96%87%E6%A1%A3/#_31_2_%E7%99%BB%E5%BD%95
 */
export const reqThirdapiFirmTypeLogin = async function (this: AxiosRequestConfig | void, params?: API_THIRDAPI_FIRMTYPE_LOGIN.REQ): Promise<API_THIRDAPI_FIRMTYPE_LOGIN.RES> {
  const { firmType } = params || {}
  return (this?.instance || SportAPI).get(`/api/front/thirdapi/${firmType}/login`, { ...this, params })
}

/**
 * 31.第三方游戏接口
 * 31.3.所有第三方平台余额获取
 * @see https://sportsapidoc-2.cxsport.net/apidoc/%E4%BD%93%E8%82%B2%E6%8E%A5%E5%8F%A3%E6%96%87%E6%A1%A3/#_31_3_%E6%89%80%E6%9C%89%E7%AC%AC%E4%B8%89%E6%96%B9%E5%B9%B3%E5%8F%B0%E4%BD%99%E9%A2%9D%E8%8E%B7%E5%8F%96
 */
export const reqThirdapiGetAllBalance = async function (this: AxiosRequestConfig | void, params?: API_THIRDAPI_GETALLBALANCE.REQ): Promise<API_THIRDAPI_GETALLBALANCE.RES> {
  return (this?.instance || SportAPI).get('/api/front/thirdapi/getAllBalance', { ...this, params })
}

/**
 * 31.第三方游戏接口
 * 31.4.转账
 * @see https://sportsapidoc-2.cxsport.net/apidoc/%E4%BD%93%E8%82%B2%E6%8E%A5%E5%8F%A3%E6%96%87%E6%A1%A3/#_31_4_%E8%BD%AC%E8%B4%A6
 */
export const reqThirdapiOutPlatInPlatTransfer = async function (this: AxiosRequestConfig | void, params?: API_THIRDAPI_OUTPLAT_INPLAT_TRANSFER.REQ): Promise<API_THIRDAPI_OUTPLAT_INPLAT_TRANSFER.RES> {
  const { outPlat, inPlat } = params || {}
  return (this?.instance || SportAPI).get(`/api/front/thirdapi/${outPlat}/${inPlat}/transfer`, { ...this, params })
}

/**
 * 31.第三方游戏接口
 * 31.5.一键转出
 * @see https://sportsapidoc-2.cxsport.net/apidoc/%E4%BD%93%E8%82%B2%E6%8E%A5%E5%8F%A3%E6%96%87%E6%A1%A3/#_31_5_%E4%B8%80%E9%94%AE%E8%BD%AC%E5%87%BA
 */
export const reqThirdapiAllTransferOut = async function (this: AxiosRequestConfig | void, params?: API_THIRDAPI_ALLTRANSFEROUT.REQ): Promise<API_THIRDAPI_ALLTRANSFEROUT.RES> {
  return (this?.instance || SportAPI).get('/api/front/thirdapi/allTransferOut', { ...this, params })
}

/**
 * 31.第三方游戏接口
 * 31.6.自动转入、转出（先将第三方都转至平台，再将平台的余额转至第三方）
 * @see https://sportsapidoc-2.cxsport.net/apidoc/%E4%BD%93%E8%82%B2%E6%8E%A5%E5%8F%A3%E6%96%87%E6%A1%A3/#_31_6_%E8%87%AA%E5%8A%A8%E8%BD%AC%E5%85%A5%E3%80%81%E8%BD%AC%E5%87%BA%EF%BC%88%E5%85%88%E5%B0%86%E7%AC%AC%E4%B8%89%E6%96%B9%E9%83%BD%E8%BD%AC%E8%87%B3%E5%B9%B3%E5%8F%B0%EF%BC%8C%E5%86%8D%E5%B0%86%E5%B9%B3%E5%8F%B0%E7%9A%84%E4%BD%99%E9%A2%9D%E8%BD%AC%E8%87%B3%E7%AC%AC%E4%B8%89%E6%96%B9%EF%BC%89
 */
export const reqThirdapiInPlatAutoTransfer = async function (this: AxiosRequestConfig | void, params?: API_THIRDAPI_INPLAT_AUTOTRANSFER.REQ): Promise<API_THIRDAPI_INPLAT_AUTOTRANSFER.RES> {
  const { inPlat } = params || {}
  return (this?.instance || SportAPI).get(`/api/front/thirdapi/${inPlat}/autoTransfer`, { ...this, params })
}

/**
 * 31.第三方游戏接口
 * 31.7.兑换记录
 * @see https://sportsapidoc-2.cxsport.net/apidoc/%E4%BD%93%E8%82%B2%E6%8E%A5%E5%8F%A3%E6%96%87%E6%A1%A3/#_31_7_%E5%85%91%E6%8D%A2%E8%AE%B0%E5%BD%95
 */
export const reqThirdapiQueryTransfers = async function (this: AxiosRequestConfig | void, params?: API_THIRDAPI_QUERYTRANSFERS.REQ): Promise<API_THIRDAPI_QUERYTRANSFERS.RES> {
  return (this?.instance || SportAPI).post('/api/front/thirdapi/queryTransfers', params, this || undefined)
}

/**
 * 31.第三方游戏接口
 * 31.8.一级订单查询
 * @see https://sportsapidoc-2.cxsport.net/apidoc/%E4%BD%93%E8%82%B2%E6%8E%A5%E5%8F%A3%E6%96%87%E6%A1%A3/#_31_8_%E4%B8%80%E7%BA%A7%E8%AE%A2%E5%8D%95%E6%9F%A5%E8%AF%A2
 */
export const reqThirdapiQueryFirstOrders = async function (this: AxiosRequestConfig | void, params?: API_THIRDAPI_QUERYFIRSTORDERS.REQ): Promise<API_THIRDAPI_QUERYFIRSTORDERS.RES> {
  return (this?.instance || SportAPI).post('/api/front/thirdapi/queryFirstOrders', params, this || undefined)
}

/**
 * 31.第三方游戏接口
 * 31.9.新版一级订单查询
 * @see https://sportsapidoc-2.cxsport.net/apidoc/%E4%BD%93%E8%82%B2%E6%8E%A5%E5%8F%A3%E6%96%87%E6%A1%A3/#_31_9_%E6%96%B0%E7%89%88%E4%B8%80%E7%BA%A7%E8%AE%A2%E5%8D%95%E6%9F%A5%E8%AF%A2
 */
export const reqThirdapiV2Orders = async function (this: AxiosRequestConfig | void, params?: API_THIRDAPI_V2_ORDERS.REQ): Promise<API_THIRDAPI_V2_ORDERS.RES> {
  return (this?.instance || SportAPI).post('/api/front/thirdapi/v2/orders', params, this || undefined)
}

/**
 * 31.第三方游戏接口
 * 31.10.二级订单查询
 * @see https://sportsapidoc-2.cxsport.net/apidoc/%E4%BD%93%E8%82%B2%E6%8E%A5%E5%8F%A3%E6%96%87%E6%A1%A3/#_31_10_%E4%BA%8C%E7%BA%A7%E8%AE%A2%E5%8D%95%E6%9F%A5%E8%AF%A2
 */
export const reqThirdapiQuerySecondOrders = async function (this: AxiosRequestConfig | void, params?: API_THIRDAPI_QUERYSECONDORDERS.REQ): Promise<API_THIRDAPI_QUERYSECONDORDERS.RES> {
  return (this?.instance || SportAPI).post('/api/front/thirdapi/querySecondOrders', params, this || undefined)
}

/**
 * 31.第三方游戏接口
 * 31.11.访客模式登录
 * @see https://sportsapidoc-2.cxsport.net/apidoc/%E4%BD%93%E8%82%B2%E6%8E%A5%E5%8F%A3%E6%96%87%E6%A1%A3/#_31_11_%E8%AE%BF%E5%AE%A2%E6%A8%A1%E5%BC%8F%E7%99%BB%E5%BD%95
 */
export const reqThirdapiGuestLoginFirmType = async function (this: AxiosRequestConfig | void, params?: API_THIRDAPI_GUESTLOGIN_FIRMTYPE.REQ): Promise<API_THIRDAPI_GUESTLOGIN_FIRMTYPE.RES> {
  const { firmType } = params || {}
  return (this?.instance || SportAPI).get(`/api/front/thirdapi/guestLogin/${firmType}`, { ...this, params })
}

/**
 * 32.歐洲盃积分榜
 * 32.1.取得賽事時間列表
 * @see https://sportsapidoc-2.cxsport.net/apidoc/%E4%BD%93%E8%82%B2%E6%8E%A5%E5%8F%A3%E6%96%87%E6%A1%A3/#_32_1_%E5%8F%96%E5%BE%97%E8%B3%BD%E4%BA%8B%E6%99%82%E9%96%93%E5%88%97%E8%A1%A8
 */
export const reqEuropecupDate = async function (this: AxiosRequestConfig | void, params?: API_EUROPECUP_DATE.REQ): Promise<API_EUROPECUP_DATE.RES> {
  return (this?.instance || SportAPI).post('/api/front/europecup/date', params, this || undefined)
}

/**
 * 32.歐洲盃积分榜
 * 32.2.取得最近赛事
 * @see https://sportsapidoc-2.cxsport.net/apidoc/%E4%BD%93%E8%82%B2%E6%8E%A5%E5%8F%A3%E6%96%87%E6%A1%A3/#_32_2_%E5%8F%96%E5%BE%97%E6%9C%80%E8%BF%91%E8%B5%9B%E4%BA%8B
 */
export const reqEuropecupLatest = async function (this: AxiosRequestConfig | void, params?: API_EUROPECUP_LATEST.REQ): Promise<API_EUROPECUP_LATEST.RES> {
  return (this?.instance || SportAPI).post('/api/front/europecup/latest', params, this || undefined)
}

/**
 * 32.歐洲盃积分榜
 * 32.3.根据类型取得赛事
 * @see https://sportsapidoc-2.cxsport.net/apidoc/%E4%BD%93%E8%82%B2%E6%8E%A5%E5%8F%A3%E6%96%87%E6%A1%A3/#_32_3_%E6%A0%B9%E6%8D%AE%E7%B1%BB%E5%9E%8B%E5%8F%96%E5%BE%97%E8%B5%9B%E4%BA%8B
 */
export const reqEuropecupGames = async function (this: AxiosRequestConfig | void, params?: API_EUROPECUP_GAMES.REQ): Promise<API_EUROPECUP_GAMES.RES> {
  return (this?.instance || SportAPI).post('/api/front/europecup/games', params, this || undefined)
}

/**
 * 32.歐洲盃积分榜
 * 32.4.取得淘汰賽資料
 * @see https://sportsapidoc-2.cxsport.net/apidoc/%E4%BD%93%E8%82%B2%E6%8E%A5%E5%8F%A3%E6%96%87%E6%A1%A3/#_32_4_%E5%8F%96%E5%BE%97%E6%B7%98%E6%B1%B0%E8%B3%BD%E8%B3%87%E6%96%99
 */
export const reqEuropecupKnockouts = async function (this: AxiosRequestConfig | void): Promise<API_EUROPECUP_KNOCKOUTS.RES> {
  return (this?.instance || SportAPI).post('/api/front/europecup/knockouts', null, this || undefined)
}

/**
 * 33.充值配置信息
 * 33.1.获取充值配置信息
 * @see https://sportsapidoc-2.cxsport.net/apidoc/%E4%BD%93%E8%82%B2%E6%8E%A5%E5%8F%A3%E6%96%87%E6%A1%A3/#_33_1_%E8%8E%B7%E5%8F%96%E5%85%85%E5%80%BC%E9%85%8D%E7%BD%AE%E4%BF%A1%E6%81%AF
 */
export const reqRechcfgMap = async function (this: AxiosRequestConfig | void, params?: API_RECHCFG_MAP.REQ): Promise<API_RECHCFG_MAP.RES> {
  return (this?.instance || SportAPI).get('/api/front/rechcfg/map', { ...this, params })
}

/**
 * 34.世界杯
 * 34.1.世界杯小组赛小组列表
 * @see https://sportsapidoc-2.cxsport.net/apidoc/%E4%BD%93%E8%82%B2%E6%8E%A5%E5%8F%A3%E6%96%87%E6%A1%A3/#_34_1_%E4%B8%96%E7%95%8C%E6%9D%AF%E5%B0%8F%E7%BB%84%E8%B5%9B%E5%B0%8F%E7%BB%84%E5%88%97%E8%A1%A8
 */
export const reqWordlcupGroupList = async function (this: AxiosRequestConfig | void): Promise<API_WORDLCUP_GROUP_LIST.RES> {
  return (this?.instance || SportAPI).post('/api/front/wordlcup/group/list', null, this || undefined)
}

/**
 * 34.世界杯
 * 34.2.世界杯积分榜列表
 * @see https://sportsapidoc-2.cxsport.net/apidoc/%E4%BD%93%E8%82%B2%E6%8E%A5%E5%8F%A3%E6%96%87%E6%A1%A3/#_34_2_%E4%B8%96%E7%95%8C%E6%9D%AF%E7%A7%AF%E5%88%86%E6%A6%9C%E5%88%97%E8%A1%A8
 */
export const reqWordlcupScoreboardList = async function (this: AxiosRequestConfig | void, params?: API_WORDLCUP_SCOREBOARD_LIST.REQ): Promise<API_WORDLCUP_SCOREBOARD_LIST.RES> {
  return (this?.instance || SportAPI).post('/api/front/wordlcup/scoreboard/list', params, this || undefined)
}

/**
 * 35.未授权接口（维护状态、开放域名等）
 * 35.1.获取配置信息
 * @see https://sportsapidoc-2.cxsport.net/apidoc/%E4%BD%93%E8%82%B2%E6%8E%A5%E5%8F%A3%E6%96%87%E6%A1%A3/#_35_1_%E8%8E%B7%E5%8F%96%E9%85%8D%E7%BD%AE%E4%BF%A1%E6%81%AF
 */
export const reqIndexConfig = async function (this: AxiosRequestConfig | void, params?: API_INDEX_CONFIG.REQ): Promise<API_INDEX_CONFIG.RES> {
  return (this?.instance || SportAPI).get('/api/front/index/config', { ...this, params })
}

/**
 * 35.未授权接口（维护状态、开放域名等）
 * 35.2.验证是否在维护
 * @see https://sportsapidoc-2.cxsport.net/apidoc/%E4%BD%93%E8%82%B2%E6%8E%A5%E5%8F%A3%E6%96%87%E6%A1%A3/#_35_2_%E9%AA%8C%E8%AF%81%E6%98%AF%E5%90%A6%E5%9C%A8%E7%BB%B4%E6%8A%A4
 */
export const reqIndexCheckwh = async function (this: AxiosRequestConfig | void): Promise<null> {
  return (this?.instance || SportAPI).get('/api/front/index/checkwh', this || undefined)
}

/**
 * 35.未授权接口（维护状态、开放域名等）
 * 35.3.开放的域名（随机获取一个）
 * @see https://sportsapidoc-2.cxsport.net/apidoc/%E4%BD%93%E8%82%B2%E6%8E%A5%E5%8F%A3%E6%96%87%E6%A1%A3/#_35_3_%E5%BC%80%E6%94%BE%E7%9A%84%E5%9F%9F%E5%90%8D%EF%BC%88%E9%9A%8F%E6%9C%BA%E8%8E%B7%E5%8F%96%E4%B8%80%E4%B8%AA%EF%BC%89
 */
export const reqIndexOpenDomain = async function (this: AxiosRequestConfig | void): Promise<null> {
  return (this?.instance || SportAPI).get('/api/front/index/openDomain', this || undefined)
}

/**
 * 35.未授权接口（维护状态、开放域名等）
 * 35.4.导航域名入口
 * @see https://sportsapidoc-2.cxsport.net/apidoc/%E4%BD%93%E8%82%B2%E6%8E%A5%E5%8F%A3%E6%96%87%E6%A1%A3/#_35_4_%E5%AF%BC%E8%88%AA%E5%9F%9F%E5%90%8D%E5%85%A5%E5%8F%A3
 */
export const reqIndexNavigate = async function (this: AxiosRequestConfig | void): Promise<API_INDEX_NAVIGATE.RES> {
  return (this?.instance || SportAPI).get('/api/front/index/navigate', this || undefined)
}

/**
 * 35.未授权接口（维护状态、开放域名等）
 * 35.5.验证域名合法性
 * @see https://sportsapidoc-2.cxsport.net/apidoc/%E4%BD%93%E8%82%B2%E6%8E%A5%E5%8F%A3%E6%96%87%E6%A1%A3/#_35_5_%E9%AA%8C%E8%AF%81%E5%9F%9F%E5%90%8D%E5%90%88%E6%B3%95%E6%80%A7
 */
export const reqIndexCheckDomain = async function (this: AxiosRequestConfig | void, params?: API_INDEX_CHECKDOMAIN.REQ): Promise<API_INDEX_CHECKDOMAIN.RES> {
  return (this?.instance || SportAPI).post('/api/front/index/checkDomain', params, this || undefined)
}

/**
 * 35.未授权接口（维护状态、开放域名等）
 * 35.6.第三方游戏信息
 * @see https://sportsapidoc-2.cxsport.net/apidoc/%E4%BD%93%E8%82%B2%E6%8E%A5%E5%8F%A3%E6%96%87%E6%A1%A3/#_35_6_%E7%AC%AC%E4%B8%89%E6%96%B9%E6%B8%B8%E6%88%8F%E4%BF%A1%E6%81%AF
 */
export const reqIndexThirdgames = async function (this: AxiosRequestConfig | void, params?: API_INDEX_THIRDGAMES.REQ): Promise<API_INDEX_THIRDGAMES.RES> {
  return (this?.instance || SportAPI).get('/api/front/index/thirdgames', { ...this, params })
}

/**
 * 35.未授权接口（维护状态、开放域名等）
 * 35.7.新版UI第三方游戏信息
 * @see https://sportsapidoc-2.cxsport.net/apidoc/%E4%BD%93%E8%82%B2%E6%8E%A5%E5%8F%A3%E6%96%87%E6%A1%A3/#_35_7_%E6%96%B0%E7%89%88UI%E7%AC%AC%E4%B8%89%E6%96%B9%E6%B8%B8%E6%88%8F%E4%BF%A1%E6%81%AF
 */
export const reqIndexV2Thirdgames = async function (this: AxiosRequestConfig | void, params?: API_INDEX_V2_THIRDGAMES.REQ): Promise<API_INDEX_V2_THIRDGAMES.RES> {
  return (this?.instance || SportAPI).get('/api/front/index/v2/thirdgames', { ...this, params })
}

/**
 * 35.未授权接口（维护状态、开放域名等）
 * 35.8.服务器时间
 * @see https://sportsapidoc-2.cxsport.net/apidoc/%E4%BD%93%E8%82%B2%E6%8E%A5%E5%8F%A3%E6%96%87%E6%A1%A3/#_35_8_%E6%9C%8D%E5%8A%A1%E5%99%A8%E6%97%B6%E9%97%B4
 */
export const reqIndexServerTime = async function (this: AxiosRequestConfig | void): Promise<API_INDEX_SERVERTIME.RES> {
  return (this?.instance || SportAPI).get('/api/front/index/serverTime', this || undefined)
}

/**
 * 35.未授权接口（维护状态、开放域名等）
 * 35.9.玩法相关翻译资源接口
 * @see https://sportsapidoc-2.cxsport.net/apidoc/%E4%BD%93%E8%82%B2%E6%8E%A5%E5%8F%A3%E6%96%87%E6%A1%A3/#_35_9_%E7%8E%A9%E6%B3%95%E7%9B%B8%E5%85%B3%E7%BF%BB%E8%AF%91%E8%B5%84%E6%BA%90%E6%8E%A5%E5%8F%A3
 */
export const reqIndexResourcejson = async function (this: AxiosRequestConfig | void): Promise<API_INDEX_RESOURCE_JSON.RES> {
  return (this?.instance || SportAPI).get('/api/front/index/resource.json', this || undefined)
}

/**
 * 35.未授权接口（维护状态、开放域名等）
 * 35.10.跳转到组装的页面
 * @see https://sportsapidoc-2.cxsport.net/apidoc/%E4%BD%93%E8%82%B2%E6%8E%A5%E5%8F%A3%E6%96%87%E6%A1%A3/#_35_10_%E8%B7%B3%E8%BD%AC%E5%88%B0%E7%BB%84%E8%A3%85%E7%9A%84%E9%A1%B5%E9%9D%A2
 */
export const reqIndexToGameFirmTypeTicket = async function (this: AxiosRequestConfig | void, params?: API_INDEX_TOGAME_FIRMTYPE_TICKET.REQ): Promise<null> {
  const { firmType, ticket } = params || {}
  return (this?.instance || SportAPI).get(`/api/front/index/toGame/${firmType}/${ticket}`, { ...this, params })
}

/**
 * 35.未授权接口（维护状态、开放域名等）
 * 35.11.获取彩票游戏信息
 * @see https://sportsapidoc-2.cxsport.net/apidoc/%E4%BD%93%E8%82%B2%E6%8E%A5%E5%8F%A3%E6%96%87%E6%A1%A3/#_35_11_%E8%8E%B7%E5%8F%96%E5%BD%A9%E7%A5%A8%E6%B8%B8%E6%88%8F%E4%BF%A1%E6%81%AF
 */
export const reqIndexCgcpGames = async function (this: AxiosRequestConfig | void, params?: API_INDEX_CGCPGAMES.REQ): Promise<API_INDEX_CGCPGAMES.RES> {
  return (this?.instance || SportAPI).get('/api/front/index/cgcpGames', { ...this, params })
}

/**
 * 36.查询前台游戏入口图片展示
 * 36.1.查询前台游戏入口图片展示
 * @see https://sportsapidoc-2.cxsport.net/apidoc/%E4%BD%93%E8%82%B2%E6%8E%A5%E5%8F%A3%E6%96%87%E6%A1%A3/#_36_1_%E6%9F%A5%E8%AF%A2%E5%89%8D%E5%8F%B0%E6%B8%B8%E6%88%8F%E5%85%A5%E5%8F%A3%E5%9B%BE%E7%89%87%E5%B1%95%E7%A4%BA
 */
export const reqGameEntryConfigQueryGameEntryConfig = async function (
  this: AxiosRequestConfig | void,
  params?: API_GAMEENTRYCONFIG_QUERYGAMEENTRYCONFIG.REQ,
): Promise<API_GAMEENTRYCONFIG_QUERYGAMEENTRYCONFIG.RES> {
  return (this?.instance || SportAPI).post('/api/front/gameEntryConfig/queryGameEntryConfig', params, this || undefined)
}

/**
 * 36.查询前台游戏入口图片展示
 * 36.2.获取累计头奖金额
 * @see https://sportsapidoc-2.cxsport.net/apidoc/%E4%BD%93%E8%82%B2%E6%8E%A5%E5%8F%A3%E6%96%87%E6%A1%A3/#_36_2_%E8%8E%B7%E5%8F%96%E7%B4%AF%E8%AE%A1%E5%A4%B4%E5%A5%96%E9%87%91%E9%A2%9D
 */
export const reqGameEntryConfigQueryTotalRewardAmount = async function (this: AxiosRequestConfig | void): Promise<API_GAMEENTRYCONFIG_QUERYTOTALREWARDAMOUNT.RES> {
  return (this?.instance || SportAPI).post('/api/front/gameEntryConfig/queryTotalRewardAmount', null, this || undefined)
}

/**
 * 37.VIP特权活动
 * 37.1.VIP特權
 * @see https://sportsapidoc-2.cxsport.net/apidoc/%E4%BD%93%E8%82%B2%E6%8E%A5%E5%8F%A3%E6%96%87%E6%A1%A3/#_37_1_VIP%E7%89%B9%E6%AC%8A
 */
export const reqActivityVipUser = async function (this: AxiosRequestConfig | void, params?: API_ACTIVITY_VIP_USER.REQ): Promise<API_ACTIVITY_VIP_USER.RES> {
  return (this?.instance || SportAPI).get('/api/front/activity/vip/user', { ...this, params })
}

/**
 * 37.VIP特权活动
 * 37.2.VIP特權详情
 * @see https://sportsapidoc-2.cxsport.net/apidoc/%E4%BD%93%E8%82%B2%E6%8E%A5%E5%8F%A3%E6%96%87%E6%A1%A3/#_37_2_VIP%E7%89%B9%E6%AC%8A%E8%AF%A6%E6%83%85
 */
export const reqActivityVipDetail = async function (this: AxiosRequestConfig | void, params?: API_ACTIVITY_VIP_DETAIL.REQ): Promise<API_ACTIVITY_VIP_DETAIL.RES> {
  return (this?.instance || SportAPI).get('/api/front/activity/vip/detail', { ...this, params })
}

/**
 * 37.VIP特权活动
 * 37.3.领取VIP特权奖项
 * @see https://sportsapidoc-2.cxsport.net/apidoc/%E4%BD%93%E8%82%B2%E6%8E%A5%E5%8F%A3%E6%96%87%E6%A1%A3/#_37_3_%E9%A2%86%E5%8F%96VIP%E7%89%B9%E6%9D%83%E5%A5%96%E9%A1%B9
 */
export const reqActivityVipAward = async function (this: AxiosRequestConfig | void, params?: API_ACTIVITY_VIP_AWARD.REQ): Promise<API_ACTIVITY_VIP_AWARD.RES> {
  return (this?.instance || SportAPI).post('/api/front/activity/vip/award', params, this || undefined)
}

/**
 * 37.VIP特权活动
 * 37.4.[TEST] VIP特權 建立測試資料 by userId
 * @see https://sportsapidoc-2.cxsport.net/apidoc/%E4%BD%93%E8%82%B2%E6%8E%A5%E5%8F%A3%E6%96%87%E6%A1%A3/#_37_4_%5BTEST%5D%20VIP%E7%89%B9%E6%AC%8A%20%E5%BB%BA%E7%AB%8B%E6%B8%AC%E8%A9%A6%E8%B3%87%E6%96%99%20by%20userId
 */
export const reqActivityVipUserTestUserIdRewardType = async function (
  this: AxiosRequestConfig | void,
  params?: API_ACTIVITY_VIP_USER_TEST_USERID_REWARDTYPE.REQ,
): Promise<API_ACTIVITY_VIP_USER_TEST_USERID_REWARDTYPE.RES> {
  const { userId, rewardType } = params || {}
  return (this?.instance || SportAPI).get(`/api/front/activity/vip/user/test/${userId}/${rewardType}`, { ...this, params })
}

/**
 * 37.VIP特权活动
 * 37.5.專屬紅包申請
 * @see https://sportsapidoc-2.cxsport.net/apidoc/%E4%BD%93%E8%82%B2%E6%8E%A5%E5%8F%A3%E6%96%87%E6%A1%A3/#_37_5_%E5%B0%88%E5%B1%AC%E7%B4%85%E5%8C%85%E7%94%B3%E8%AB%8B
 */
export const reqActivityVipUniredenpApply = async function (this: AxiosRequestConfig | void, params?: API_ACTIVITY_VIP_UNIREDENP_APPLY.REQ): Promise<API_ACTIVITY_VIP_UNIREDENP_APPLY.RES> {
  return (this?.instance || SportAPI).post('/api/front/activity/vip/uniredenp/apply', params, this || undefined)
}

/**
 * 38.信贷吧接口
 * 38.1.是否显示信贷吧协议内容,如过是，返还值t=1 ,如果否，返还值t=0
 * @see https://sportsapidoc-2.cxsport.net/apidoc/%E4%BD%93%E8%82%B2%E6%8E%A5%E5%8F%A3%E6%96%87%E6%A1%A3/#_38_1_%E6%98%AF%E5%90%A6%E6%98%BE%E7%A4%BA%E4%BF%A1%E8%B4%B7%E5%90%A7%E5%8D%8F%E8%AE%AE%E5%86%85%E5%AE%B9%2C%E5%A6%82%E8%BF%87%E6%98%AF%EF%BC%8C%E8%BF%94%E8%BF%98%E5%80%BCt%3D1%20%2C%E5%A6%82%E6%9E%9C%E5%90%A6%EF%BC%8C%E8%BF%94%E8%BF%98%E5%80%BCt%3D0
 */
export const reqXdbShowXdbDeal = async function (this: AxiosRequestConfig | void, params?: API_XDB_SHOWXDBDEAL.REQ): Promise<API_XDB_SHOWXDBDEAL.RES> {
  return (this?.instance || SportAPI).get('/api/front/xdb/showXdbDeal', { ...this, params })
}

/**
 * 38.信贷吧接口
 * 38.2.用户同意信贷吧协议
 * @see https://sportsapidoc-2.cxsport.net/apidoc/%E4%BD%93%E8%82%B2%E6%8E%A5%E5%8F%A3%E6%96%87%E6%A1%A3/#_38_2_%E7%94%A8%E6%88%B7%E5%90%8C%E6%84%8F%E4%BF%A1%E8%B4%B7%E5%90%A7%E5%8D%8F%E8%AE%AE
 */
export const reqXdbAgreeXdbDeal = async function (this: AxiosRequestConfig | void, params?: API_XDB_AGREEXDBDEAL.REQ): Promise<API_XDB_AGREEXDBDEAL.RES> {
  return (this?.instance || SportAPI).get('/api/front/xdb/agreeXdbDeal', { ...this, params })
}

/**
 * 38.信贷吧接口
 * 38.3.查询用户借款信息
 * @see https://sportsapidoc-2.cxsport.net/apidoc/%E4%BD%93%E8%82%B2%E6%8E%A5%E5%8F%A3%E6%96%87%E6%A1%A3/#_38_3_%E6%9F%A5%E8%AF%A2%E7%94%A8%E6%88%B7%E5%80%9F%E6%AC%BE%E4%BF%A1%E6%81%AF
 */
export const reqXdbGetUserCredit = async function (this: AxiosRequestConfig | void, params?: API_XDB_GETUSERCREDIT.REQ): Promise<API_XDB_GETUSERCREDIT.RES> {
  return (this?.instance || SportAPI).get('/api/front/xdb/getUserCredit', { ...this, params })
}

/**
 * 38.信贷吧接口
 * 38.4.查询用户已借贷金额
 * @see https://sportsapidoc-2.cxsport.net/apidoc/%E4%BD%93%E8%82%B2%E6%8E%A5%E5%8F%A3%E6%96%87%E6%A1%A3/#_38_4_%E6%9F%A5%E8%AF%A2%E7%94%A8%E6%88%B7%E5%B7%B2%E5%80%9F%E8%B4%B7%E9%87%91%E9%A2%9D
 */
export const reqXdbGetUserRepay = async function (this: AxiosRequestConfig | void, params?: API_XDB_GETUSERREPAY.REQ): Promise<API_XDB_GETUSERREPAY.RES> {
  return (this?.instance || SportAPI).get('/api/front/xdb/getUserRepay', { ...this, params })
}

/**
 * 38.信贷吧接口
 * 38.5.信贷吧借贷申请
 * @see https://sportsapidoc-2.cxsport.net/apidoc/%E4%BD%93%E8%82%B2%E6%8E%A5%E5%8F%A3%E6%96%87%E6%A1%A3/#_38_5_%E4%BF%A1%E8%B4%B7%E5%90%A7%E5%80%9F%E8%B4%B7%E7%94%B3%E8%AF%B7
 */
export const reqXdbBorrowMoney = async function (this: AxiosRequestConfig | void, params?: API_XDB_BORROWMONEY.REQ): Promise<API_XDB_BORROWMONEY.RES> {
  return (this?.instance || SportAPI).post('/api/front/xdb/borrowMoney', params, this || undefined)
}

/**
 * 38.信贷吧接口
 * 38.6.信贷吧还款
 * @see https://sportsapidoc-2.cxsport.net/apidoc/%E4%BD%93%E8%82%B2%E6%8E%A5%E5%8F%A3%E6%96%87%E6%A1%A3/#_38_6_%E4%BF%A1%E8%B4%B7%E5%90%A7%E8%BF%98%E6%AC%BE
 */
export const reqXdbReturnMoney = async function (this: AxiosRequestConfig | void, params?: API_XDB_RETURNMONEY.REQ): Promise<API_XDB_RETURNMONEY.RES> {
  return (this?.instance || SportAPI).post('/api/front/xdb/returnMoney', params, this || undefined)
}

/**
 * 38.信贷吧接口
 * 38.7.个人信贷吧历史记录查询
 * @see https://sportsapidoc-2.cxsport.net/apidoc/%E4%BD%93%E8%82%B2%E6%8E%A5%E5%8F%A3%E6%96%87%E6%A1%A3/#_38_7_%E4%B8%AA%E4%BA%BA%E4%BF%A1%E8%B4%B7%E5%90%A7%E5%8E%86%E5%8F%B2%E8%AE%B0%E5%BD%95%E6%9F%A5%E8%AF%A2
 */
export const reqXdbGetXdbRecord = async function (this: AxiosRequestConfig | void, params?: API_XDB_GETXDBRECORD.REQ): Promise<API_XDB_GETXDBRECORD.RES> {
  return (this?.instance || SportAPI).get('/api/front/xdb/getXdbRecord', { ...this, params })
}

/**
 * 39.邀请码接口
 * 39.1.邀请码列表
 * @see https://sportsapidoc-2.cxsport.net/apidoc/%E4%BD%93%E8%82%B2%E6%8E%A5%E5%8F%A3%E6%96%87%E6%A1%A3/#_39_1_%E9%82%80%E8%AF%B7%E7%A0%81%E5%88%97%E8%A1%A8
 */
export const reqUserInviteListHyType = async function (this: AxiosRequestConfig | void, params?: API_USER_INVITE_LIST_HYTYPE.REQ): Promise<API_USER_INVITE_LIST_HYTYPE.RES> {
  const { hyType } = params || {}
  return (this?.instance || SportAPI).post(`/api/front/user/invite/list/${hyType}`, params, this || undefined)
}

/**
 * 39.邀请码接口
 * 39.2.生成邀请码
 * @see https://sportsapidoc-2.cxsport.net/apidoc/%E4%BD%93%E8%82%B2%E6%8E%A5%E5%8F%A3%E6%96%87%E6%A1%A3/#_39_2_%E7%94%9F%E6%88%90%E9%82%80%E8%AF%B7%E7%A0%81
 */
export const reqUserInviteSave = async function (this: AxiosRequestConfig | void, params?: API_USER_INVITE_SAVE.REQ): Promise<API_USER_INVITE_SAVE.RES> {
  return (this?.instance || SportAPI).post('/api/front/user/invite/save', params, this || undefined)
}

/**
 * 40.用户提现信息包含银行卡、虚拟币
 * 40.1.我的提现信息
 * @see https://sportsapidoc-2.cxsport.net/apidoc/%E4%BD%93%E8%82%B2%E6%8E%A5%E5%8F%A3%E6%96%87%E6%A1%A3/#_40_1_%E6%88%91%E7%9A%84%E6%8F%90%E7%8E%B0%E4%BF%A1%E6%81%AF
 */
export const reqUserBankMy = async function (this: AxiosRequestConfig | void, params?: API_USER_BANK_MY.REQ): Promise<API_USER_BANK_MY.RES> {
  return (this?.instance || SportAPI).get('/api/front/user/bank/my', { ...this, params })
}

/**
 * 40.用户提现信息包含银行卡、虚拟币
 * 40.2.添加提现信息 (编辑需带id)
 * @see https://sportsapidoc-2.cxsport.net/apidoc/%E4%BD%93%E8%82%B2%E6%8E%A5%E5%8F%A3%E6%96%87%E6%A1%A3/#_40_2_%E6%B7%BB%E5%8A%A0%E6%8F%90%E7%8E%B0%E4%BF%A1%E6%81%AF%20(%E7%BC%96%E8%BE%91%E9%9C%80%E5%B8%A6id)
 */
export const reqUserBankAdd = async function (this: AxiosRequestConfig | void, params?: API_USER_BANK_ADD.REQ): Promise<API_USER_BANK_ADD.RES> {
  return (this?.instance || SportAPI).post('/api/front/user/bank/add', params, this || undefined)
}

/**
 * 40.用户提现信息包含银行卡、虚拟币
 * 40.3.删除提现信息
 * @see https://sportsapidoc-2.cxsport.net/apidoc/%E4%BD%93%E8%82%B2%E6%8E%A5%E5%8F%A3%E6%96%87%E6%A1%A3/#_40_3_%E5%88%A0%E9%99%A4%E6%8F%90%E7%8E%B0%E4%BF%A1%E6%81%AF
 */
export const reqUserBankDelete = async function (this: AxiosRequestConfig | void, params?: API_USER_BANK_DELETE.REQ): Promise<API_USER_BANK_DELETE.RES> {
  return (this?.instance || SportAPI).post('/api/front/user/bank/delete', params, this || undefined)
}

/**
 * 41.用户充值
 * 41.1.充值列表
 * @see https://sportsapidoc-2.cxsport.net/apidoc/%E4%BD%93%E8%82%B2%E6%8E%A5%E5%8F%A3%E6%96%87%E6%A1%A3/#_41_1_%E5%85%85%E5%80%BC%E5%88%97%E8%A1%A8
 */
export const reqUserrechList = async function (this: AxiosRequestConfig | void, params?: API_USERRECH_LIST.REQ): Promise<API_USERRECH_LIST.RES> {
  return (this?.instance || SportAPI).post('/api/front/userrech/list', params, this || undefined)
}

/**
 * 41.用户充值
 * 41.2.新增充值（线下转账）
 * @see https://sportsapidoc-2.cxsport.net/apidoc/%E4%BD%93%E8%82%B2%E6%8E%A5%E5%8F%A3%E6%96%87%E6%A1%A3/#_41_2_%E6%96%B0%E5%A2%9E%E5%85%85%E5%80%BC%EF%BC%88%E7%BA%BF%E4%B8%8B%E8%BD%AC%E8%B4%A6%EF%BC%89
 */
export const reqUserrechAdd = async function (this: AxiosRequestConfig | void, params?: API_USERRECH_ADD.REQ): Promise<API_USERRECH_ADD.RES> {
  return (this?.instance || SportAPI).post('/api/front/userrech/add', params, this || undefined)
}

/**
 * 41.用户充值
 * 41.3.新增充值（在线充值，支持POST/GET方法）
 * @see https://sportsapidoc-2.cxsport.net/apidoc/%E4%BD%93%E8%82%B2%E6%8E%A5%E5%8F%A3%E6%96%87%E6%A1%A3/#_41_3_%E6%96%B0%E5%A2%9E%E5%85%85%E5%80%BC%EF%BC%88%E5%9C%A8%E7%BA%BF%E5%85%85%E5%80%BC%EF%BC%8C%E6%94%AF%E6%8C%81POST%2FGET%E6%96%B9%E6%B3%95%EF%BC%89
 */
export const reqUserrechOnlinepay = async function (this: AxiosRequestConfig | void, params?: API_USERRECH_ONLINEPAY.REQ): Promise<null> {
  return (this?.instance || SportAPI).get('/api/front/userrech/onlinepay', { ...this, params })
}

/**
 * 41.用户充值
 * 41.4.取得充值验证码
 * @see https://sportsapidoc-2.cxsport.net/apidoc/%E4%BD%93%E8%82%B2%E6%8E%A5%E5%8F%A3%E6%96%87%E6%A1%A3/#_41_4_%E5%8F%96%E5%BE%97%E5%85%85%E5%80%BC%E9%AA%8C%E8%AF%81%E7%A0%81
 */
export const reqUserrechVerifyCode = async function (this: AxiosRequestConfig | void, params?: API_USERRECH_VERIFYCODE.REQ): Promise<API_USERRECH_VERIFYCODE.RES> {
  return (this?.instance || SportAPI).get('/api/front/userrech/verifyCode', { ...this, params })
}

/**
 * 41.用户充值
 * 41.5.刪除像素Pixel
 * @see https://sportsapidoc-2.cxsport.net/apidoc/%E4%BD%93%E8%82%B2%E6%8E%A5%E5%8F%A3%E6%96%87%E6%A1%A3/#_41_5_%E5%88%AA%E9%99%A4%E5%83%8F%E7%B4%A0Pixel
 */
export const reqUserrechRemovePixel = async function (this: AxiosRequestConfig | void, params?: API_USERRECH_REMOVE_PIXEL.REQ): Promise<API_USERRECH_REMOVE_PIXEL.RES> {
  return (this?.instance || SportAPI).post('/api/front/userrech/remove/pixel', params, this || undefined)
}

/**
 * 41.用户充值
 * 41.6.刪除首沖事件
 * @see https://sportsapidoc-2.cxsport.net/apidoc/%E4%BD%93%E8%82%B2%E6%8E%A5%E5%8F%A3%E6%96%87%E6%A1%A3/#_41_6_%E5%88%AA%E9%99%A4%E9%A6%96%E6%B2%96%E4%BA%8B%E4%BB%B6
 */
export const reqUserrechRemoveFirstPixel = async function (this: AxiosRequestConfig | void, params?: API_USERRECH_REMOVE_FIRSTPIXEL.REQ): Promise<API_USERRECH_REMOVE_FIRSTPIXEL.RES> {
  return (this?.instance || SportAPI).post('/api/front/userrech/remove/firstPixel', params, this || undefined)
}

/**
 * 42.公告
 * 42.1.获取公告
 * @see https://sportsapidoc-2.cxsport.net/apidoc/%E4%BD%93%E8%82%B2%E6%8E%A5%E5%8F%A3%E6%96%87%E6%A1%A3/#_42_1_%E8%8E%B7%E5%8F%96%E5%85%AC%E5%91%8A
 */
export const reqMessageList = async function (this: AxiosRequestConfig | void, params?: API_MESSAGE_LIST.REQ): Promise<API_MESSAGE_LIST.RES> {
  return (this?.instance || SportAPI).get('/api/front/message/list', { ...this, params })
}

/**
 * 43.消息中心
 * 43.1.消息列表
 * @see https://sportsapidoc-2.cxsport.net/apidoc/%E4%BD%93%E8%82%B2%E6%8E%A5%E5%8F%A3%E6%96%87%E6%A1%A3/#_43_1_%E6%B6%88%E6%81%AF%E5%88%97%E8%A1%A8
 */
export const reqUserNoticeList = async function (this: AxiosRequestConfig | void, params?: API_USER_NOTICE_LIST.REQ): Promise<API_USER_NOTICE_LIST.RES> {
  return (this?.instance || SportAPI).post('/api/front/user/notice/list', params, this || undefined)
}

/**
 * 43.消息中心
 * 43.2.设置为已读
 * @see https://sportsapidoc-2.cxsport.net/apidoc/%E4%BD%93%E8%82%B2%E6%8E%A5%E5%8F%A3%E6%96%87%E6%A1%A3/#_43_2_%E8%AE%BE%E7%BD%AE%E4%B8%BA%E5%B7%B2%E8%AF%BB
 */
export const reqUserNoticeReadedId = async function (this: AxiosRequestConfig | void, params?: API_USER_NOTICE_READED_ID.REQ): Promise<API_USER_NOTICE_READED_ID.RES> {
  const { id } = params || {}
  return (this?.instance || SportAPI).post(`/api/front/user/notice/readed/${id}`, params, this || undefined)
}

/**
 * 43.消息中心
 * 43.3.设置为全部已读
 * @see https://sportsapidoc-2.cxsport.net/apidoc/%E4%BD%93%E8%82%B2%E6%8E%A5%E5%8F%A3%E6%96%87%E6%A1%A3/#_43_3_%E8%AE%BE%E7%BD%AE%E4%B8%BA%E5%85%A8%E9%83%A8%E5%B7%B2%E8%AF%BB
 */
export const reqUserNoticeAllReadied = async function (this: AxiosRequestConfig | void, params?: API_USER_NOTICE_ALLREADIED.REQ): Promise<API_USER_NOTICE_ALLREADIED.RES> {
  return (this?.instance || SportAPI).post('/api/front/user/notice/allReadied', params, this || undefined)
}

/**
 * 44.会员等级
 * 44.1.会员等级及成长值
 * @see https://sportsapidoc-2.cxsport.net/apidoc/%E4%BD%93%E8%82%B2%E6%8E%A5%E5%8F%A3%E6%96%87%E6%A1%A3/#_44_1_%E4%BC%9A%E5%91%98%E7%AD%89%E7%BA%A7%E5%8F%8A%E6%88%90%E9%95%BF%E5%80%BC
 */
export const reqUserLevelGetLevelGrowth = async function (this: AxiosRequestConfig | void, params?: API_USER_LEVEL_GETLEVELGROWTH.REQ): Promise<API_USER_LEVEL_GETLEVELGROWTH.RES> {
  return (this?.instance || SportAPI).get('/api/front/user/level/getLevelGrowth', { ...this, params })
}

/**
 * 45.首页用户绑定
 * 45.1.通过聊天平台传入的 openId 获取用户是否已经绑定
 * @see https://sportsapidoc-2.cxsport.net/apidoc/%E4%BD%93%E8%82%B2%E6%8E%A5%E5%8F%A3%E6%96%87%E6%A1%A3/#_45_1_%E9%80%9A%E8%BF%87%E8%81%8A%E5%A4%A9%E5%B9%B3%E5%8F%B0%E4%BC%A0%E5%85%A5%E7%9A%84%20openId%20%E8%8E%B7%E5%8F%96%E7%94%A8%E6%88%B7%E6%98%AF%E5%90%A6%E5%B7%B2%E7%BB%8F%E7%BB%91%E5%AE%9A
 */
export const reqIndexBindGetUserBindInfo = async function (this: AxiosRequestConfig | void, params?: API_INDEX_BIND_GETUSERBINDINFO.REQ): Promise<API_INDEX_BIND_GETUSERBINDINFO.RES> {
  return (this?.instance || SportAPI).post('/api/front/index/bind/getUserBindInfo', params, this || undefined)
}

/**
 * 45.首页用户绑定
 * 45.2.根据平台 绑定来源 用户id 查询绑定info
 * @see https://sportsapidoc-2.cxsport.net/apidoc/%E4%BD%93%E8%82%B2%E6%8E%A5%E5%8F%A3%E6%96%87%E6%A1%A3/#_45_2_%E6%A0%B9%E6%8D%AE%E5%B9%B3%E5%8F%B0%20%E7%BB%91%E5%AE%9A%E6%9D%A5%E6%BA%90%20%E7%94%A8%E6%88%B7id%20%E6%9F%A5%E8%AF%A2%E7%BB%91%E5%AE%9Ainfo
 */
export const reqIndexBindStatusBindSource = async function (this: AxiosRequestConfig | void, params?: API_INDEX_BIND_STATUS_BINDSOURCE.REQ): Promise<API_INDEX_BIND_STATUS_BINDSOURCE.RES> {
  const { bindSource } = params || {}
  return (this?.instance || SportAPI).get(`/api/front/index/bind/status/${bindSource}`, { ...this, params })
}

/**
 * 46.有效域名接口
 * 46.1.获取有效的app域名
 * @see https://sportsapidoc-2.cxsport.net/apidoc/%E4%BD%93%E8%82%B2%E6%8E%A5%E5%8F%A3%E6%96%87%E6%A1%A3/#_46_1_%E8%8E%B7%E5%8F%96%E6%9C%89%E6%95%88%E7%9A%84app%E5%9F%9F%E5%90%8D
 */
export const reqDomainconfigAppdomainPlatformCodejson = async function (
  this: AxiosRequestConfig | void,
  params?: API_DOMAINCONFIG_APPDOMAIN_PLATFORMCODE_JSON.REQ,
): Promise<API_DOMAINCONFIG_APPDOMAIN_PLATFORMCODE_JSON.RES> {
  const { platformCode } = params || {}
  return (this?.instance || SportAPI).get(`/api/front/domainconfig/appdomain/${platformCode}.json`, { ...this, params })
}

/**
 * 47.活动派奖
 * 47.1.活动派奖列表
 * @see https://sportsapidoc-2.cxsport.net/apidoc/%E4%BD%93%E8%82%B2%E6%8E%A5%E5%8F%A3%E6%96%87%E6%A1%A3/#_47_1_%E6%B4%BB%E5%8A%A8%E6%B4%BE%E5%A5%96%E5%88%97%E8%A1%A8
 */
export const reqRewardlogList = async function (this: AxiosRequestConfig | void, params?: API_REWARDLOG_LIST.REQ): Promise<API_REWARDLOG_LIST.RES> {
  return (this?.instance || SportAPI).post('/api/front/rewardlog/list', params, this || undefined)
}

/**
 * 48.聊天室用户接口
 * 48.1.获取红包记录
 * @see https://sportsapidoc-2.cxsport.net/apidoc/%E4%BD%93%E8%82%B2%E6%8E%A5%E5%8F%A3%E6%96%87%E6%A1%A3/#_48_1_%E8%8E%B7%E5%8F%96%E7%BA%A2%E5%8C%85%E8%AE%B0%E5%BD%95
 */
export const reqUserUserPacketList = async function (this: AxiosRequestConfig | void, params?: API_USER_USERPACKET_LIST.REQ): Promise<API_USER_USERPACKET_LIST.RES> {
  return (this?.instance || SportAPI).post('/api/front/user/userPacket/list', params, this || undefined)
}

/**
 * 48.聊天室用户接口
 * 48.2.获取打赏记录
 * @see https://sportsapidoc-2.cxsport.net/apidoc/%E4%BD%93%E8%82%B2%E6%8E%A5%E5%8F%A3%E6%96%87%E6%A1%A3/#_48_2_%E8%8E%B7%E5%8F%96%E6%89%93%E8%B5%8F%E8%AE%B0%E5%BD%95
 */
export const reqUserUserFollowBetRewardList = async function (this: AxiosRequestConfig | void, params?: API_USER_USERFOLLOWBETREWARD_LIST.REQ): Promise<API_USER_USERFOLLOWBETREWARD_LIST.RES> {
  return (this?.instance || SportAPI).get('/api/front/user/userFollowBetReward/list', { ...this, params })
}

/**
 * 48.聊天室用户接口
 * 48.3.打赏跟注
 * @see https://sportsapidoc-2.cxsport.net/apidoc/%E4%BD%93%E8%82%B2%E6%8E%A5%E5%8F%A3%E6%96%87%E6%A1%A3/#_48_3_%E6%89%93%E8%B5%8F%E8%B7%9F%E6%B3%A8
 */
export const reqUserRewardFollowBet = async function (this: AxiosRequestConfig | void, params?: API_USER_REWARDFOLLOWBET.REQ): Promise<API_USER_REWARDFOLLOWBET.RES> {
  return (this?.instance || SportAPI).get('/api/front/user/rewardFollowBet', { ...this, params })
}

/**
 * 49.余额宝接口
 * 49.1.是否显示余额宝协议内容,如过是，返还值t=1 ,如果否，返还值t=0
 * @see https://sportsapidoc-2.cxsport.net/apidoc/%E4%BD%93%E8%82%B2%E6%8E%A5%E5%8F%A3%E6%96%87%E6%A1%A3/#_49_1_%E6%98%AF%E5%90%A6%E6%98%BE%E7%A4%BA%E4%BD%99%E9%A2%9D%E5%AE%9D%E5%8D%8F%E8%AE%AE%E5%86%85%E5%AE%B9%2C%E5%A6%82%E8%BF%87%E6%98%AF%EF%BC%8C%E8%BF%94%E8%BF%98%E5%80%BCt%3D1%20%2C%E5%A6%82%E6%9E%9C%E5%90%A6%EF%BC%8C%E8%BF%94%E8%BF%98%E5%80%BCt%3D0
 */
export const reqYebShowYebDeal = async function (this: AxiosRequestConfig | void, params?: API_YEB_SHOWYEBDEAL.REQ): Promise<API_YEB_SHOWYEBDEAL.RES> {
  return (this?.instance || SportAPI).get('/api/front/yeb/showYebDeal', { ...this, params })
}

/**
 * 49.余额宝接口
 * 49.2.用户同意余额宝协议
 * @see https://sportsapidoc-2.cxsport.net/apidoc/%E4%BD%93%E8%82%B2%E6%8E%A5%E5%8F%A3%E6%96%87%E6%A1%A3/#_49_2_%E7%94%A8%E6%88%B7%E5%90%8C%E6%84%8F%E4%BD%99%E9%A2%9D%E5%AE%9D%E5%8D%8F%E8%AE%AE
 */
export const reqYebAgreeYebDeal = async function (this: AxiosRequestConfig | void, params?: API_YEB_AGREEYEBDEAL.REQ): Promise<API_YEB_AGREEYEBDEAL.RES> {
  return (this?.instance || SportAPI).get('/api/front/yeb/agreeYebDeal', { ...this, params })
}

/**
 * 49.余额宝接口
 * 49.3.查询余额宝信息
 * @see https://sportsapidoc-2.cxsport.net/apidoc/%E4%BD%93%E8%82%B2%E6%8E%A5%E5%8F%A3%E6%96%87%E6%A1%A3/#_49_3_%E6%9F%A5%E8%AF%A2%E4%BD%99%E9%A2%9D%E5%AE%9D%E4%BF%A1%E6%81%AF
 */
export const reqYebGetDepositInfo = async function (this: AxiosRequestConfig | void, params?: API_YEB_GETDEPOSITINFO.REQ): Promise<API_YEB_GETDEPOSITINFO.RES> {
  return (this?.instance || SportAPI).get('/api/front/yeb/getDepositInfo', { ...this, params })
}

/**
 * 49.余额宝接口
 * 49.4.余额宝历史交易记录
 * @see https://sportsapidoc-2.cxsport.net/apidoc/%E4%BD%93%E8%82%B2%E6%8E%A5%E5%8F%A3%E6%96%87%E6%A1%A3/#_49_4_%E4%BD%99%E9%A2%9D%E5%AE%9D%E5%8E%86%E5%8F%B2%E4%BA%A4%E6%98%93%E8%AE%B0%E5%BD%95
 */
export const reqYebGetDepositHistory = async function (this: AxiosRequestConfig | void, params?: API_YEB_GETDEPOSITHISTORY.REQ): Promise<API_YEB_GETDEPOSITHISTORY.RES> {
  return (this?.instance || SportAPI).post('/api/front/yeb/getDepositHistory', params, this || undefined)
}

/**
 * 49.余额宝接口
 * 49.5.余额宝转入
 * @see https://sportsapidoc-2.cxsport.net/apidoc/%E4%BD%93%E8%82%B2%E6%8E%A5%E5%8F%A3%E6%96%87%E6%A1%A3/#_49_5_%E4%BD%99%E9%A2%9D%E5%AE%9D%E8%BD%AC%E5%85%A5
 */
export const reqYebTransferIn = async function (this: AxiosRequestConfig | void, params?: API_YEB_TRANSFERIN.REQ): Promise<API_YEB_TRANSFERIN.RES> {
  return (this?.instance || SportAPI).post('/api/front/yeb/transferIn', params, this || undefined)
}

/**
 * 49.余额宝接口
 * 49.6.余额宝转出
 * @see https://sportsapidoc-2.cxsport.net/apidoc/%E4%BD%93%E8%82%B2%E6%8E%A5%E5%8F%A3%E6%96%87%E6%A1%A3/#_49_6_%E4%BD%99%E9%A2%9D%E5%AE%9D%E8%BD%AC%E5%87%BA
 */
export const reqYebTransferOut = async function (this: AxiosRequestConfig | void, params?: API_YEB_TRANSFEROUT.REQ): Promise<API_YEB_TRANSFEROUT.RES> {
  return (this?.instance || SportAPI).post('/api/front/yeb/transferOut', params, this || undefined)
}

/**
 * 49.余额宝接口
 * 49.7.利息领取
 * @see https://sportsapidoc-2.cxsport.net/apidoc/%E4%BD%93%E8%82%B2%E6%8E%A5%E5%8F%A3%E6%96%87%E6%A1%A3/#_49_7_%E5%88%A9%E6%81%AF%E9%A2%86%E5%8F%96
 */
export const reqYebClaimed = async function (this: AxiosRequestConfig | void, params?: API_YEB_CLAIMED.REQ): Promise<API_YEB_CLAIMED.RES> {
  return (this?.instance || SportAPI).post('/api/front/yeb/claimed', params, this || undefined)
}

/**
 * 50.活动信息接口
 * 50.1.活动列表
 * @see https://sportsapidoc-2.cxsport.net/apidoc/%E4%BD%93%E8%82%B2%E6%8E%A5%E5%8F%A3%E6%96%87%E6%A1%A3/#_50_1_%E6%B4%BB%E5%8A%A8%E5%88%97%E8%A1%A8
 */
export const reqActivityList = async function (this: AxiosRequestConfig | void, params?: API_ACTIVITY_LIST.REQ): Promise<API_ACTIVITY_LIST.RES> {
  return (this?.instance || SportAPI).get('/api/front/activity/list', { ...this, params })
}

/**
 * 50.活动信息接口
 * 50.2.今日可抽奖次数（返回1：代表可抽奖1次）
 * @see https://sportsapidoc-2.cxsport.net/apidoc/%E4%BD%93%E8%82%B2%E6%8E%A5%E5%8F%A3%E6%96%87%E6%A1%A3/#_50_2_%E4%BB%8A%E6%97%A5%E5%8F%AF%E6%8A%BD%E5%A5%96%E6%AC%A1%E6%95%B0%EF%BC%88%E8%BF%94%E5%9B%9E1%EF%BC%9A%E4%BB%A3%E8%A1%A8%E5%8F%AF%E6%8A%BD%E5%A5%961%E6%AC%A1%EF%BC%89
 */
export const reqActivityLoginTodaytimesTopActivityIdTopActivityId = async function (
  this: AxiosRequestConfig | void,
  params?: API_ACTIVITY_LOGIN_TODAYTIMES_TOPACTIVITYID_TOPACTIVITYID.REQ,
): Promise<API_ACTIVITY_LOGIN_TODAYTIMES_TOPACTIVITYID_TOPACTIVITYID.RES> {
  const { topActivityId } = params || {}
  return (this?.instance || SportAPI).get(`/api/front/activity/login/todaytimes/topActivityId/${topActivityId}`, { ...this, params })
}

/**
 * 50.活动信息接口
 * 50.3.今日可抽奖次数（返回[0,1]：代表可抽奖0次,今天已抽1次）
 * @see https://sportsapidoc-2.cxsport.net/apidoc/%E4%BD%93%E8%82%B2%E6%8E%A5%E5%8F%A3%E6%96%87%E6%A1%A3/#_50_3_%E4%BB%8A%E6%97%A5%E5%8F%AF%E6%8A%BD%E5%A5%96%E6%AC%A1%E6%95%B0%EF%BC%88%E8%BF%94%E5%9B%9E%5B0%2C1%5D%EF%BC%9A%E4%BB%A3%E8%A1%A8%E5%8F%AF%E6%8A%BD%E5%A5%960%E6%AC%A1%2C%E4%BB%8A%E5%A4%A9%E5%B7%B2%E6%8A%BD1%E6%AC%A1%EF%BC%89
 */
export const reqActivityLoginTodaytimesV1TopActivityIdTopActivityId = async function (
  this: AxiosRequestConfig | void,
  params?: API_ACTIVITY_LOGIN_TODAYTIMES_V1_TOPACTIVITYID_TOPACTIVITYID.REQ,
): Promise<API_ACTIVITY_LOGIN_TODAYTIMES_V1_TOPACTIVITYID_TOPACTIVITYID.RES> {
  const { topActivityId } = params || {}
  return (this?.instance || SportAPI).get(`/api/front/activity/login/todaytimes/v1/topActivityId/${topActivityId}`, { ...this, params })
}

/**
 * 50.活动信息接口
 * 50.4.连续性可抽奖次数（返回1：代表可抽奖1次）
 * @see https://sportsapidoc-2.cxsport.net/apidoc/%E4%BD%93%E8%82%B2%E6%8E%A5%E5%8F%A3%E6%96%87%E6%A1%A3/#_50_4_%E8%BF%9E%E7%BB%AD%E6%80%A7%E5%8F%AF%E6%8A%BD%E5%A5%96%E6%AC%A1%E6%95%B0%EF%BC%88%E8%BF%94%E5%9B%9E1%EF%BC%9A%E4%BB%A3%E8%A1%A8%E5%8F%AF%E6%8A%BD%E5%A5%961%E6%AC%A1%EF%BC%89
 */
export const reqActivityContinuousTimesUserActivityIdUserActivityId = async function (
  this: AxiosRequestConfig | void,
  params?: API_ACTIVITY_CONTINUOUS_TIMES_USERACTIVITYID_USERACTIVITYID.REQ,
): Promise<API_ACTIVITY_CONTINUOUS_TIMES_USERACTIVITYID_USERACTIVITYID.RES> {
  const { userActivityId } = params || {}
  return (this?.instance || SportAPI).get(`/api/front/activity/continuous/times/userActivityId/${userActivityId}`, { ...this, params })
}

/**
 * 50.活动信息接口
 * 50.5.登录活动抽奖，msg信息包含是否中奖信息 -1：未中奖，其他：中奖N等奖，如：2（二等奖）
 * @see https://sportsapidoc-2.cxsport.net/apidoc/%E4%BD%93%E8%82%B2%E6%8E%A5%E5%8F%A3%E6%96%87%E6%A1%A3/#_50_5_%E7%99%BB%E5%BD%95%E6%B4%BB%E5%8A%A8%E6%8A%BD%E5%A5%96%EF%BC%8Cmsg%E4%BF%A1%E6%81%AF%E5%8C%85%E5%90%AB%E6%98%AF%E5%90%A6%E4%B8%AD%E5%A5%96%E4%BF%A1%E6%81%AF%20-1%EF%BC%9A%E6%9C%AA%E4%B8%AD%E5%A5%96%EF%BC%8C%E5%85%B6%E4%BB%96%EF%BC%9A%E4%B8%AD%E5%A5%96N%E7%AD%89%E5%A5%96%EF%BC%8C%E5%A6%82%EF%BC%9A2%EF%BC%88%E4%BA%8C%E7%AD%89%E5%A5%96%EF%BC%89
 */
export const reqActivityLoginLuckdrawActivityIdActivityId = async function (
  this: AxiosRequestConfig | void,
  params?: API_ACTIVITY_LOGIN_LUCKDRAW_ACTIVITYID_ACTIVITYID.REQ,
): Promise<API_ACTIVITY_LOGIN_LUCKDRAW_ACTIVITYID_ACTIVITYID.RES> {
  const { activityId } = params || {}
  return (this?.instance || SportAPI).get(`/api/front/activity/login/luckdraw/activityId/${activityId}`, { ...this, params })
}

/**
 * 50.活动信息接口
 * 50.6.连续性活动抽奖，msg信息包含是否中奖信息，EMPTY：未中奖，其他信息：中奖信息，如：88元
 * @see https://sportsapidoc-2.cxsport.net/apidoc/%E4%BD%93%E8%82%B2%E6%8E%A5%E5%8F%A3%E6%96%87%E6%A1%A3/#_50_6_%E8%BF%9E%E7%BB%AD%E6%80%A7%E6%B4%BB%E5%8A%A8%E6%8A%BD%E5%A5%96%EF%BC%8Cmsg%E4%BF%A1%E6%81%AF%E5%8C%85%E5%90%AB%E6%98%AF%E5%90%A6%E4%B8%AD%E5%A5%96%E4%BF%A1%E6%81%AF%EF%BC%8CEMPTY%EF%BC%9A%E6%9C%AA%E4%B8%AD%E5%A5%96%EF%BC%8C%E5%85%B6%E4%BB%96%E4%BF%A1%E6%81%AF%EF%BC%9A%E4%B8%AD%E5%A5%96%E4%BF%A1%E6%81%AF%EF%BC%8C%E5%A6%82%EF%BC%9A88%E5%85%83
 */
export const reqActivityContinuousLuckdrawUserActivityIdUserActivityId = async function (
  this: AxiosRequestConfig | void,
  params?: API_ACTIVITY_CONTINUOUS_LUCKDRAW_USERACTIVITYID_USERACTIVITYID.REQ,
): Promise<API_ACTIVITY_CONTINUOUS_LUCKDRAW_USERACTIVITYID_USERACTIVITYID.RES> {
  const { userActivityId } = params || {}
  return (this?.instance || SportAPI).get(`/api/front/activity/continuous/luckdraw/userActivityId/${userActivityId}`, { ...this, params })
}

/**
 * 50.活动信息接口
 * 50.7.用户活动列表
 * @see https://sportsapidoc-2.cxsport.net/apidoc/%E4%BD%93%E8%82%B2%E6%8E%A5%E5%8F%A3%E6%96%87%E6%A1%A3/#_50_7_%E7%94%A8%E6%88%B7%E6%B4%BB%E5%8A%A8%E5%88%97%E8%A1%A8
 */
export const reqActivityUseractivitylistTopActivityIdActivityId = async function (
  this: AxiosRequestConfig | void,
  params?: API_ACTIVITY_USERACTIVITYLIST_TOPACTIVITYID_ACTIVITYID.REQ,
): Promise<API_ACTIVITY_USERACTIVITYLIST_TOPACTIVITYID_ACTIVITYID.RES> {
  const { activityId } = params || {}
  return (this?.instance || SportAPI).get(`/api/front/activity/useractivitylist/topActivityId/${activityId}`, { ...this, params })
}

/**
 * 50.活动信息接口
 * 50.8.奖品列表
 * @see https://sportsapidoc-2.cxsport.net/apidoc/%E4%BD%93%E8%82%B2%E6%8E%A5%E5%8F%A3%E6%96%87%E6%A1%A3/#_50_8_%E5%A5%96%E5%93%81%E5%88%97%E8%A1%A8
 */
export const reqActivityPrizelistActivityIdActivityId = async function (
  this: AxiosRequestConfig | void,
  params?: API_ACTIVITY_PRIZELIST_ACTIVITYID_ACTIVITYID.REQ,
): Promise<API_ACTIVITY_PRIZELIST_ACTIVITYID_ACTIVITYID.RES> {
  const { activityId } = params || {}
  return (this?.instance || SportAPI).get(`/api/front/activity/prizelist/activityId/${activityId}`, { ...this, params })
}

/**
 * 50.活动信息接口
 * 50.9.邀请活动列表
 * @see https://sportsapidoc-2.cxsport.net/apidoc/%E4%BD%93%E8%82%B2%E6%8E%A5%E5%8F%A3%E6%96%87%E6%A1%A3/#_50_9_%E9%82%80%E8%AF%B7%E6%B4%BB%E5%8A%A8%E5%88%97%E8%A1%A8
 */
export const reqActivityInviteActivityIdActivityId = async function (
  this: AxiosRequestConfig | void,
  params?: API_ACTIVITY_INVITE_ACTIVITYID_ACTIVITYID.REQ,
): Promise<API_ACTIVITY_INVITE_ACTIVITYID_ACTIVITYID.RES> {
  const { activityId } = params || {}
  return (this?.instance || SportAPI).get(`/api/front/activity/invite/activityId/${activityId}`, { ...this, params })
}

/**
 * 50.活动信息接口
 * 50.10.邀请活动待领取记录
 * @see https://sportsapidoc-2.cxsport.net/apidoc/%E4%BD%93%E8%82%B2%E6%8E%A5%E5%8F%A3%E6%96%87%E6%A1%A3/#_50_10_%E9%82%80%E8%AF%B7%E6%B4%BB%E5%8A%A8%E5%BE%85%E9%A2%86%E5%8F%96%E8%AE%B0%E5%BD%95
 */
export const reqActivityInvitePendingreceiveActivityId = async function (
  this: AxiosRequestConfig | void,
  params?: API_ACTIVITY_INVITE_PENDINGRECEIVE_ACTIVITYID.REQ,
): Promise<API_ACTIVITY_INVITE_PENDINGRECEIVE_ACTIVITYID.RES> {
  const { activityId } = params || {}
  return (this?.instance || SportAPI).get(`/api/front/activity/invite/pendingreceive/${activityId}`, { ...this, params })
}

/**
 * 50.活动信息接口
 * 50.11.查询用户活动领取记录
 * @see https://sportsapidoc-2.cxsport.net/apidoc/%E4%BD%93%E8%82%B2%E6%8E%A5%E5%8F%A3%E6%96%87%E6%A1%A3/#_50_11_%E6%9F%A5%E8%AF%A2%E7%94%A8%E6%88%B7%E6%B4%BB%E5%8A%A8%E9%A2%86%E5%8F%96%E8%AE%B0%E5%BD%95
 */
export const reqActivityQueryrewardlog = async function (this: AxiosRequestConfig | void, params?: API_ACTIVITY_QUERYREWARDLOG.REQ): Promise<API_ACTIVITY_QUERYREWARDLOG.RES> {
  return (this?.instance || SportAPI).get('/api/front/activity/queryrewardlog', { ...this, params })
}

/**
 * 50.活动信息接口
 * 50.12.查询邀请活动邀请列表
 * @see https://sportsapidoc-2.cxsport.net/apidoc/%E4%BD%93%E8%82%B2%E6%8E%A5%E5%8F%A3%E6%96%87%E6%A1%A3/#_50_12_%E6%9F%A5%E8%AF%A2%E9%82%80%E8%AF%B7%E6%B4%BB%E5%8A%A8%E9%82%80%E8%AF%B7%E5%88%97%E8%A1%A8
 */
export const reqActivityQueryinvited = async function (this: AxiosRequestConfig | void, params?: API_ACTIVITY_QUERYINVITED.REQ): Promise<API_ACTIVITY_QUERYINVITED.RES> {
  return (this?.instance || SportAPI).post('/api/front/activity/queryinvited', params, this || undefined)
}

/**
 * 50.活动信息接口
 * 50.13.查询用户邀请活动记录
 * @see https://sportsapidoc-2.cxsport.net/apidoc/%E4%BD%93%E8%82%B2%E6%8E%A5%E5%8F%A3%E6%96%87%E6%A1%A3/#_50_13_%E6%9F%A5%E8%AF%A2%E7%94%A8%E6%88%B7%E9%82%80%E8%AF%B7%E6%B4%BB%E5%8A%A8%E8%AE%B0%E5%BD%95
 */
export const reqActivityInviteQueryrewardlog = async function (this: AxiosRequestConfig | void, params?: API_ACTIVITY_INVITE_QUERYREWARDLOG.REQ): Promise<API_ACTIVITY_INVITE_QUERYREWARDLOG.RES> {
  return (this?.instance || SportAPI).post('/api/front/activity/invite/queryrewardlog', params, this || undefined)
}

/**
 * 50.活动信息接口
 * 50.14.查询用户邀请活动记录總計
 * @see https://sportsapidoc-2.cxsport.net/apidoc/%E4%BD%93%E8%82%B2%E6%8E%A5%E5%8F%A3%E6%96%87%E6%A1%A3/#_50_14_%E6%9F%A5%E8%AF%A2%E7%94%A8%E6%88%B7%E9%82%80%E8%AF%B7%E6%B4%BB%E5%8A%A8%E8%AE%B0%E5%BD%95%E7%B8%BD%E8%A8%88
 */
export const reqActivityInviteQueryrewardsum = async function (this: AxiosRequestConfig | void, params?: API_ACTIVITY_INVITE_QUERYREWARDSUM.REQ): Promise<API_ACTIVITY_INVITE_QUERYREWARDSUM.RES> {
  return (this?.instance || SportAPI).post('/api/front/activity/invite/queryrewardsum', params, this || undefined)
}

/**
 * 50.活动信息接口
 * 50.15.查询用户邀请活动记录
 * @see https://sportsapidoc-2.cxsport.net/apidoc/%E4%BD%93%E8%82%B2%E6%8E%A5%E5%8F%A3%E6%96%87%E6%A1%A3/#_50_15_%E6%9F%A5%E8%AF%A2%E7%94%A8%E6%88%B7%E9%82%80%E8%AF%B7%E6%B4%BB%E5%8A%A8%E8%AE%B0%E5%BD%95
 */
export const reqActivityInviteQuerybetinfo = async function (this: AxiosRequestConfig | void, params?: API_ACTIVITY_INVITE_QUERYBETINFO.REQ): Promise<API_ACTIVITY_INVITE_QUERYBETINFO.RES> {
  return (this?.instance || SportAPI).post('/api/front/activity/invite/querybetinfo', params, this || undefined)
}

/**
 * 50.活动信息接口
 * 50.16.领取奖项
 * @see https://sportsapidoc-2.cxsport.net/apidoc/%E4%BD%93%E8%82%B2%E6%8E%A5%E5%8F%A3%E6%96%87%E6%A1%A3/#_50_16_%E9%A2%86%E5%8F%96%E5%A5%96%E9%A1%B9
 */
export const reqActivityAward = async function (this: AxiosRequestConfig | void, params?: API_ACTIVITY_AWARD.REQ): Promise<API_ACTIVITY_AWARD.RES> {
  return (this?.instance || SportAPI).post('/api/front/activity/award', params, this || undefined)
}

/**
 * 50.活动信息接口
 * 50.17.活动列表 区分模式(越南、真人、直播...)
 * @see https://sportsapidoc-2.cxsport.net/apidoc/%E4%BD%93%E8%82%B2%E6%8E%A5%E5%8F%A3%E6%96%87%E6%A1%A3/#_50_17_%E6%B4%BB%E5%8A%A8%E5%88%97%E8%A1%A8%20%E5%8C%BA%E5%88%86%E6%A8%A1%E5%BC%8F(%E8%B6%8A%E5%8D%97%E3%80%81%E7%9C%9F%E4%BA%BA%E3%80%81%E7%9B%B4%E6%92%AD...)
 */
export const reqActivityListinfo = async function (this: AxiosRequestConfig | void, params?: API_ACTIVITY_LISTINFO.REQ): Promise<API_ACTIVITY_LISTINFO.RES> {
  return (this?.instance || SportAPI).get('/api/front/activity/listinfo', { ...this, params })
}

/**
 * 50.活动信息接口
 * 50.18.活动列表 区分模式(越南、真人、直播...)
 * @see https://sportsapidoc-2.cxsport.net/apidoc/%E4%BD%93%E8%82%B2%E6%8E%A5%E5%8F%A3%E6%96%87%E6%A1%A3/#_50_18_%E6%B4%BB%E5%8A%A8%E5%88%97%E8%A1%A8%20%E5%8C%BA%E5%88%86%E6%A8%A1%E5%BC%8F(%E8%B6%8A%E5%8D%97%E3%80%81%E7%9C%9F%E4%BA%BA%E3%80%81%E7%9B%B4%E6%92%AD...)
 */
export const reqActivityListimage = async function (this: AxiosRequestConfig | void, params?: API_ACTIVITY_LISTIMAGE.REQ): Promise<API_ACTIVITY_LISTIMAGE.RES> {
  return (this?.instance || SportAPI).get('/api/front/activity/listimage', { ...this, params })
}

/**
 * 50.活动信息接口
 * 50.19.砸金蛋获取当前用户抽奖信
 * @see https://sportsapidoc-2.cxsport.net/apidoc/%E4%BD%93%E8%82%B2%E6%8E%A5%E5%8F%A3%E6%96%87%E6%A1%A3/#_50_19_%E7%A0%B8%E9%87%91%E8%9B%8B%E8%8E%B7%E5%8F%96%E5%BD%93%E5%89%8D%E7%94%A8%E6%88%B7%E6%8A%BD%E5%A5%96%E4%BF%A1
 */
export const reqActivityGetEggInfoActivityId = async function (this: AxiosRequestConfig | void, params?: API_ACTIVITY_GETEGGINFO_ACTIVITYID.REQ): Promise<API_ACTIVITY_GETEGGINFO_ACTIVITYID.RES> {
  const { activityId } = params || {}
  return (this?.instance || SportAPI).get(`/api/front/activity/getEggInfo/${activityId}`, { ...this, params })
}

/**
 * 50.活动信息接口
 * 50.20.砸金蛋领奖
 * @see https://sportsapidoc-2.cxsport.net/apidoc/%E4%BD%93%E8%82%B2%E6%8E%A5%E5%8F%A3%E6%96%87%E6%A1%A3/#_50_20_%E7%A0%B8%E9%87%91%E8%9B%8B%E9%A2%86%E5%A5%96
 */
export const reqActivityEggLuckdraw = async function (this: AxiosRequestConfig | void, params?: API_ACTIVITY_EGG_LUCKDRAW.REQ): Promise<API_ACTIVITY_EGG_LUCKDRAW.RES> {
  return (this?.instance || SportAPI).post('/api/front/activity/egg/luckdraw', params, this || undefined)
}

/**
 * 51.主要给chat提供服务
 * 51.1.获取平台用户信息,和签名信息
 * @see https://sportsapidoc-2.cxsport.net/apidoc/%E4%BD%93%E8%82%B2%E6%8E%A5%E5%8F%A3%E6%96%87%E6%A1%A3/#_51_1_%E8%8E%B7%E5%8F%96%E5%B9%B3%E5%8F%B0%E7%94%A8%E6%88%B7%E4%BF%A1%E6%81%AF%2C%E5%92%8C%E7%AD%BE%E5%90%8D%E4%BF%A1%E6%81%AF
 */
export const reqChatGetSign = async function (this: AxiosRequestConfig | void, params?: API_CHAT_GETSIGN.REQ): Promise<API_CHAT_GETSIGN.RES> {
  return (this?.instance || SportAPI).get('/api/front/chat/getSign', { ...this, params })
}

/**
 * 52.地区信息
 * 52.1.获取（城市，省，国家）信息
 * @see https://sportsapidoc-2.cxsport.net/apidoc/%E4%BD%93%E8%82%B2%E6%8E%A5%E5%8F%A3%E6%96%87%E6%A1%A3/#_52_1_%E8%8E%B7%E5%8F%96%EF%BC%88%E5%9F%8E%E5%B8%82%EF%BC%8C%E7%9C%81%EF%BC%8C%E5%9B%BD%E5%AE%B6%EF%BC%89%E4%BF%A1%E6%81%AF
 */
export const reqAreaAll = async function (this: AxiosRequestConfig | void): Promise<API_AREA_ALL.RES> {
  return (this?.instance || SportAPI).post('/api/front/area/all', null, this || undefined)
}

/**
 * 52.地区信息
 * 52.2.地區數據
 * @see https://sportsapidoc-2.cxsport.net/apidoc/%E4%BD%93%E8%82%B2%E6%8E%A5%E5%8F%A3%E6%96%87%E6%A1%A3/#_52_2_%E5%9C%B0%E5%8D%80%E6%95%B8%E6%93%9A
 */
export const reqAreaUniversal = async function (this: AxiosRequestConfig | void): Promise<API_AREA_UNIVERSAL.RES> {
  return (this?.instance || SportAPI).post('/api/front/area/universal', null, this || undefined)
}

/**
 * 53.首页未授权公共类（登录、登出、验证码、在线用户数、语言列表）
 * 53.1.获取验证码
 * @see https://sportsapidoc-2.cxsport.net/apidoc/%E4%BD%93%E8%82%B2%E6%8E%A5%E5%8F%A3%E6%96%87%E6%A1%A3/#_53_1_%E8%8E%B7%E5%8F%96%E9%AA%8C%E8%AF%81%E7%A0%81
 */
export const reqIndexGetvalidatecode = async function (this: AxiosRequestConfig | void, params?: API_INDEX_GETVALIDATECODE.REQ): Promise<API_INDEX_GETVALIDATECODE.RES> {
  return (this?.instance || SportAPI).post('/api/front/index/getvalidatecode', params, this || undefined)
}

/**
 * 53.首页未授权公共类（登录、登出、验证码、在线用户数、语言列表）
 * 53.2.获取否开启验证码配置
 * @see https://sportsapidoc-2.cxsport.net/apidoc/%E4%BD%93%E8%82%B2%E6%8E%A5%E5%8F%A3%E6%96%87%E6%A1%A3/#_53_2_%E8%8E%B7%E5%8F%96%E5%90%A6%E5%BC%80%E5%90%AF%E9%AA%8C%E8%AF%81%E7%A0%81%E9%85%8D%E7%BD%AE
 */
export const reqIndexValidcodeenable = async function (this: AxiosRequestConfig | void): Promise<API_INDEX_VALIDCODEENABLE.RES> {
  return (this?.instance || SportAPI).get('/api/front/index/validcodeenable', this || undefined)
}

/**
 * 53.首页未授权公共类（登录、登出、验证码、在线用户数、语言列表）
 * 53.3.注册用户
 * @see https://sportsapidoc-2.cxsport.net/apidoc/%E4%BD%93%E8%82%B2%E6%8E%A5%E5%8F%A3%E6%96%87%E6%A1%A3/#_53_3_%E6%B3%A8%E5%86%8C%E7%94%A8%E6%88%B7
 */
export const reqIndexRegister = async function (this: AxiosRequestConfig | void, params?: API_INDEX_REGISTER.REQ): Promise<API_INDEX_REGISTER.RES> {
  return (this?.instance || SportAPI).post('/api/front/index/register', params, this || undefined)
}

/**
 * 53.首页未授权公共类（登录、登出、验证码、在线用户数、语言列表）
 * 53.4.快速注册用户
 * @see https://sportsapidoc-2.cxsport.net/apidoc/%E4%BD%93%E8%82%B2%E6%8E%A5%E5%8F%A3%E6%96%87%E6%A1%A3/#_53_4_%E5%BF%AB%E9%80%9F%E6%B3%A8%E5%86%8C%E7%94%A8%E6%88%B7
 */
export const reqIndexQuickRegister = async function (this: AxiosRequestConfig | void, params?: API_INDEX_QUICKREGISTER.REQ): Promise<API_INDEX_QUICKREGISTER.RES> {
  return (this?.instance || SportAPI).post('/api/front/index/quickRegister', params, this || undefined)
}

/**
 * 53.首页未授权公共类（登录、登出、验证码、在线用户数、语言列表）
 * 53.5.会员登录
 * @see https://sportsapidoc-2.cxsport.net/apidoc/%E4%BD%93%E8%82%B2%E6%8E%A5%E5%8F%A3%E6%96%87%E6%A1%A3/#_53_5_%E4%BC%9A%E5%91%98%E7%99%BB%E5%BD%95
 */
export const reqIndexLogin = async function (this: AxiosRequestConfig | void, params?: API_INDEX_LOGIN.REQ): Promise<API_INDEX_LOGIN.RES> {
  return (this?.instance || SportAPI).post('/api/front/index/login', params, this || undefined)
}

/**
 * 53.首页未授权公共类（登录、登出、验证码、在线用户数、语言列表）
 * 53.6.google登入验证
 * @see https://sportsapidoc-2.cxsport.net/apidoc/%E4%BD%93%E8%82%B2%E6%8E%A5%E5%8F%A3%E6%96%87%E6%A1%A3/#_53_6_google%E7%99%BB%E5%85%A5%E9%AA%8C%E8%AF%81
 */
export const reqIndexAuthGoogle = async function (this: AxiosRequestConfig | void, params?: API_INDEX_AUTH_GOOGLE.REQ): Promise<API_INDEX_AUTH_GOOGLE.RES> {
  return (this?.instance || SportAPI).post('/api/front/index/auth/google', params, this || undefined)
}

/**
 * 53.首页未授权公共类（登录、登出、验证码、在线用户数、语言列表）
 * 53.7.Open Auth Quick Register
 * @see https://sportsapidoc-2.cxsport.net/apidoc/%E4%BD%93%E8%82%B2%E6%8E%A5%E5%8F%A3%E6%96%87%E6%A1%A3/#_53_7_Open%20Auth%20Quick%20Register
 */
export const reqIndexAuthQuickregister = async function (this: AxiosRequestConfig | void, params?: API_INDEX_AUTH_QUICK_REGISTER.REQ): Promise<API_INDEX_AUTH_QUICK_REGISTER.RES> {
  return (this?.instance || SportAPI).post('/api/front/index/auth/quick-register', params, this || undefined)
}

/**
 * 53.首页未授权公共类（登录、登出、验证码、在线用户数、语言列表）
 * 53.8.绑定帐号
 * @see https://sportsapidoc-2.cxsport.net/apidoc/%E4%BD%93%E8%82%B2%E6%8E%A5%E5%8F%A3%E6%96%87%E6%A1%A3/#_53_8_%E7%BB%91%E5%AE%9A%E5%B8%90%E5%8F%B7
 */
export const reqIndexAuthBind = async function (this: AxiosRequestConfig | void, params?: API_INDEX_AUTH_BIND.REQ): Promise<API_INDEX_AUTH_BIND.RES> {
  return (this?.instance || SportAPI).post('/api/front/index/auth/bind', params, this || undefined)
}

/**
 * 53.首页未授权公共类（登录、登出、验证码、在线用户数、语言列表）
 * 53.9.open auth bind
 * @see https://sportsapidoc-2.cxsport.net/apidoc/%E4%BD%93%E8%82%B2%E6%8E%A5%E5%8F%A3%E6%96%87%E6%A1%A3/#_53_9_open%20auth%20bind
 */
export const reqIndexAuthPostbind = async function (this: AxiosRequestConfig | void, params?: API_INDEX_AUTH_POST_BIND.REQ): Promise<API_INDEX_AUTH_POST_BIND.RES> {
  return (this?.instance || SportAPI).post('/api/front/index/auth/post-bind', params, this || undefined)
}

/**
 * 53.首页未授权公共类（登录、登出、验证码、在线用户数、语言列表）
 * 53.10.游客登录
 * @see https://sportsapidoc-2.cxsport.net/apidoc/%E4%BD%93%E8%82%B2%E6%8E%A5%E5%8F%A3%E6%96%87%E6%A1%A3/#_53_10_%E6%B8%B8%E5%AE%A2%E7%99%BB%E5%BD%95
 */
export const reqIndexLoginforguest = async function (this: AxiosRequestConfig | void, params?: API_INDEX_LOGINFORGUEST.REQ): Promise<API_INDEX_LOGINFORGUEST.RES> {
  return (this?.instance || SportAPI).post('/api/front/index/loginforguest', params, this || undefined)
}

/**
 * 53.首页未授权公共类（登录、登出、验证码、在线用户数、语言列表）
 * 53.11.试玩游戏跳转
 * @see https://sportsapidoc-2.cxsport.net/apidoc/%E4%BD%93%E8%82%B2%E6%8E%A5%E5%8F%A3%E6%96%87%E6%A1%A3/#_53_11_%E8%AF%95%E7%8E%A9%E6%B8%B8%E6%88%8F%E8%B7%B3%E8%BD%AC
 */
export const reqIndexForwardGuest = async function (this: AxiosRequestConfig | void, params?: API_INDEX_FORWARDGUEST.REQ): Promise<API_INDEX_FORWARDGUEST.RES> {
  return (this?.instance || SportAPI).post('/api/front/index/forwardGuest', params, this || undefined)
}

/**
 * 53.首页未授权公共类（登录、登出、验证码、在线用户数、语言列表）
 * 53.12.demo站试玩游戏跳转(多了识别码验证)
 * @see https://sportsapidoc-2.cxsport.net/apidoc/%E4%BD%93%E8%82%B2%E6%8E%A5%E5%8F%A3%E6%96%87%E6%A1%A3/#_53_12_demo%E7%AB%99%E8%AF%95%E7%8E%A9%E6%B8%B8%E6%88%8F%E8%B7%B3%E8%BD%AC(%E5%A4%9A%E4%BA%86%E8%AF%86%E5%88%AB%E7%A0%81%E9%AA%8C%E8%AF%81)
 */
export const reqIndexDemoLogin = async function (this: AxiosRequestConfig | void, params?: API_INDEX_DEMO_LOGIN.REQ): Promise<API_INDEX_DEMO_LOGIN.RES> {
  return (this?.instance || SportAPI).post('/api/front/index/demo/login', params, this || undefined)
}

/**
 * 53.首页未授权公共类（登录、登出、验证码、在线用户数、语言列表）
 * 53.13.登出系统
 * @see https://sportsapidoc-2.cxsport.net/apidoc/%E4%BD%93%E8%82%B2%E6%8E%A5%E5%8F%A3%E6%96%87%E6%A1%A3/#_53_13_%E7%99%BB%E5%87%BA%E7%B3%BB%E7%BB%9F
 */
export const reqIndexLogout = async function (this: AxiosRequestConfig | void, params?: API_INDEX_LOGOUT.REQ): Promise<API_INDEX_LOGOUT.RES> {
  return (this?.instance || SportAPI).post('/api/front/index/logout', params, this || undefined)
}

/**
 * 53.首页未授权公共类（登录、登出、验证码、在线用户数、语言列表）
 * 53.14.账号名称是否已存在
 * @see https://sportsapidoc-2.cxsport.net/apidoc/%E4%BD%93%E8%82%B2%E6%8E%A5%E5%8F%A3%E6%96%87%E6%A1%A3/#_53_14_%E8%B4%A6%E5%8F%B7%E5%90%8D%E7%A7%B0%E6%98%AF%E5%90%A6%E5%B7%B2%E5%AD%98%E5%9C%A8
 */
export const reqIndexCheckexistUserName = async function (this: AxiosRequestConfig | void, params?: API_INDEX_CHECKEXIST_USERNAME.REQ): Promise<API_INDEX_CHECKEXIST_USERNAME.RES> {
  const { userName } = params || {}
  return (this?.instance || SportAPI).get(`/api/front/index/checkexist/${userName}`, { ...this, params })
}

/**
 * 53.首页未授权公共类（登录、登出、验证码、在线用户数、语言列表）
 * 53.15.校验密码复杂度
 * @see https://sportsapidoc-2.cxsport.net/apidoc/%E4%BD%93%E8%82%B2%E6%8E%A5%E5%8F%A3%E6%96%87%E6%A1%A3/#_53_15_%E6%A0%A1%E9%AA%8C%E5%AF%86%E7%A0%81%E5%A4%8D%E6%9D%82%E5%BA%A6
 */
export const reqIndexCheckPass = async function (this: AxiosRequestConfig | void, params?: API_INDEX_CHECK_PASS.REQ): Promise<API_INDEX_CHECK_PASS.RES> {
  const { pass } = params || {}
  return (this?.instance || SportAPI).get(`/api/front/index/check/${pass}`, { ...this, params })
}

/**
 * 53.首页未授权公共类（登录、登出、验证码、在线用户数、语言列表）
 * 53.16.公告(免登入即可访问)
 * @see https://sportsapidoc-2.cxsport.net/apidoc/%E4%BD%93%E8%82%B2%E6%8E%A5%E5%8F%A3%E6%96%87%E6%A1%A3/#_53_16_%E5%85%AC%E5%91%8A(%E5%85%8D%E7%99%BB%E5%85%A5%E5%8D%B3%E5%8F%AF%E8%AE%BF%E9%97%AE)
 */
export const reqIndexPromotenotice = async function (this: AxiosRequestConfig | void, params?: API_INDEX_PROMOTENOTICE.REQ): Promise<API_INDEX_PROMOTENOTICE.RES> {
  return (this?.instance || SportAPI).get('/api/front/index/promotenotice', { ...this, params })
}

/**
 * 53.首页未授权公共类（登录、登出、验证码、在线用户数、语言列表）
 * 53.17.验证token 是否过期。如果不过期返回token信息，过期返回success: false
 * @see https://sportsapidoc-2.cxsport.net/apidoc/%E4%BD%93%E8%82%B2%E6%8E%A5%E5%8F%A3%E6%96%87%E6%A1%A3/#_53_17_%E9%AA%8C%E8%AF%81token%20%E6%98%AF%E5%90%A6%E8%BF%87%E6%9C%9F%E3%80%82%E5%A6%82%E6%9E%9C%E4%B8%8D%E8%BF%87%E6%9C%9F%E8%BF%94%E5%9B%9Etoken%E4%BF%A1%E6%81%AF%EF%BC%8C%E8%BF%87%E6%9C%9F%E8%BF%94%E5%9B%9Esuccess%3A%20false
 */
export const reqIndexChecktoken = async function (this: AxiosRequestConfig | void): Promise<API_INDEX_CHECKTOKEN.RES> {
  return (this?.instance || SportAPI).post('/api/front/index/checktoken', null, this || undefined)
}

/**
 * 53.首页未授权公共类（登录、登出、验证码、在线用户数、语言列表）
 * 53.18.发送验证码
 * @see https://sportsapidoc-2.cxsport.net/apidoc/%E4%BD%93%E8%82%B2%E6%8E%A5%E5%8F%A3%E6%96%87%E6%A1%A3/#_53_18_%E5%8F%91%E9%80%81%E9%AA%8C%E8%AF%81%E7%A0%81
 */
export const reqIndexSendSms = async function (this: AxiosRequestConfig | void, params?: API_INDEX_SENDSMS.REQ): Promise<API_INDEX_SENDSMS.RES> {
  return (this?.instance || SportAPI).post('/api/front/index/sendSms', params, this || undefined)
}

/**
 * 53.首页未授权公共类（登录、登出、验证码、在线用户数、语言列表）
 * 53.19.发送验证码 (忘记密码共能用，需要验证用户存不存在 )
 * @see https://sportsapidoc-2.cxsport.net/apidoc/%E4%BD%93%E8%82%B2%E6%8E%A5%E5%8F%A3%E6%96%87%E6%A1%A3/#_53_19_%E5%8F%91%E9%80%81%E9%AA%8C%E8%AF%81%E7%A0%81%20(%E5%BF%98%E8%AE%B0%E5%AF%86%E7%A0%81%E5%85%B1%E8%83%BD%E7%94%A8%EF%BC%8C%E9%9C%80%E8%A6%81%E9%AA%8C%E8%AF%81%E7%94%A8%E6%88%B7%E5%AD%98%E4%B8%8D%E5%AD%98%E5%9C%A8%20)
 */
export const reqIndexSendSmsForgotPassword = async function (this: AxiosRequestConfig | void, params?: API_INDEX_SENDSMSFORGOTPASSWORD.REQ): Promise<API_INDEX_SENDSMSFORGOTPASSWORD.RES> {
  return (this?.instance || SportAPI).post('/api/front/index/sendSmsForgotPassword', params, this || undefined)
}

/**
 * 53.首页未授权公共类（登录、登出、验证码、在线用户数、语言列表）
 * 53.20.忘记密码 验证 短信验证码
 * @see https://sportsapidoc-2.cxsport.net/apidoc/%E4%BD%93%E8%82%B2%E6%8E%A5%E5%8F%A3%E6%96%87%E6%A1%A3/#_53_20_%E5%BF%98%E8%AE%B0%E5%AF%86%E7%A0%81%20%E9%AA%8C%E8%AF%81%20%E7%9F%AD%E4%BF%A1%E9%AA%8C%E8%AF%81%E7%A0%81
 */
export const reqIndexValidateForgotPasswordSMS = async function (this: AxiosRequestConfig | void, params?: API_INDEX_VALIDATEFORGOTPASSWORDSMS.REQ): Promise<API_INDEX_VALIDATEFORGOTPASSWORDSMS.RES> {
  return (this?.instance || SportAPI).post('/api/front/index/validateForgotPasswordSMS', params, this || undefined)
}

/**
 * 53.首页未授权公共类（登录、登出、验证码、在线用户数、语言列表）
 * 53.21.忘記密碼 賬戶認證
 * @see https://sportsapidoc-2.cxsport.net/apidoc/%E4%BD%93%E8%82%B2%E6%8E%A5%E5%8F%A3%E6%96%87%E6%A1%A3/#_53_21_%E5%BF%98%E8%A8%98%E5%AF%86%E7%A2%BC%20%E8%B3%AC%E6%88%B6%E8%AA%8D%E8%AD%89
 */
export const reqIndexValidateUser = async function (this: AxiosRequestConfig | void, params?: API_INDEX_VALIDATEUSER.REQ): Promise<API_INDEX_VALIDATEUSER.RES> {
  return (this?.instance || SportAPI).post('/api/front/index/validateUser', params, this || undefined)
}

/**
 * 53.首页未授权公共类（登录、登出、验证码、在线用户数、语言列表）
 * 53.22.忘记密码 验证通过 -> 更新密码
 * @see https://sportsapidoc-2.cxsport.net/apidoc/%E4%BD%93%E8%82%B2%E6%8E%A5%E5%8F%A3%E6%96%87%E6%A1%A3/#_53_22_%E5%BF%98%E8%AE%B0%E5%AF%86%E7%A0%81%20%E9%AA%8C%E8%AF%81%E9%80%9A%E8%BF%87%20-%3E%20%E6%9B%B4%E6%96%B0%E5%AF%86%E7%A0%81
 */
export const reqIndexResetForgotPassword = async function (this: AxiosRequestConfig | void, params?: API_INDEX_RESETFORGOTPASSWORD.REQ): Promise<API_INDEX_RESETFORGOTPASSWORD.RES> {
  return (this?.instance || SportAPI).post('/api/front/index/resetForgotPassword', params, this || undefined)
}

/**
 * 53.首页未授权公共类（登录、登出、验证码、在线用户数、语言列表）
 * 53.23.获取用户在线人数
 * @see https://sportsapidoc-2.cxsport.net/apidoc/%E4%BD%93%E8%82%B2%E6%8E%A5%E5%8F%A3%E6%96%87%E6%A1%A3/#_53_23_%E8%8E%B7%E5%8F%96%E7%94%A8%E6%88%B7%E5%9C%A8%E7%BA%BF%E4%BA%BA%E6%95%B0
 */
export const reqIndexOnlineUser = async function (this: AxiosRequestConfig | void): Promise<API_INDEX_ONLINEUSER.RES> {
  return (this?.instance || SportAPI).post('/api/front/index/onlineUser', null, this || undefined)
}

/**
 * 53.首页未授权公共类（登录、登出、验证码、在线用户数、语言列表）
 * 53.24.获取场馆用户在线人数
 * @see https://sportsapidoc-2.cxsport.net/apidoc/%E4%BD%93%E8%82%B2%E6%8E%A5%E5%8F%A3%E6%96%87%E6%A1%A3/#_53_24_%E8%8E%B7%E5%8F%96%E5%9C%BA%E9%A6%86%E7%94%A8%E6%88%B7%E5%9C%A8%E7%BA%BF%E4%BA%BA%E6%95%B0
 */
export const reqIndexThirdGameOnlineUser = async function (this: AxiosRequestConfig | void): Promise<API_INDEX_THIRDGAMEONLINEUSER.RES> {
  return (this?.instance || SportAPI).post('/api/front/index/thirdGameOnlineUser', null, this || undefined)
}

/**
 * 53.首页未授权公共类（登录、登出、验证码、在线用户数、语言列表）
 * 53.25.获取支持的语言
 * @see https://sportsapidoc-2.cxsport.net/apidoc/%E4%BD%93%E8%82%B2%E6%8E%A5%E5%8F%A3%E6%96%87%E6%A1%A3/#_53_25_%E8%8E%B7%E5%8F%96%E6%94%AF%E6%8C%81%E7%9A%84%E8%AF%AD%E8%A8%80
 */
export const reqIndexLanguage = async function (this: AxiosRequestConfig | void): Promise<API_INDEX_LANGUAGE.RES> {
  return (this?.instance || SportAPI).get('/api/front/index/language', this || undefined)
}

/**
 * 53.首页未授权公共类（登录、登出、验证码、在线用户数、语言列表）
 * 53.26.获取玩家信息
 * @see https://sportsapidoc-2.cxsport.net/apidoc/%E4%BD%93%E8%82%B2%E6%8E%A5%E5%8F%A3%E6%96%87%E6%A1%A3/#_53_26_%E8%8E%B7%E5%8F%96%E7%8E%A9%E5%AE%B6%E4%BF%A1%E6%81%AF
 */
export const reqIndexPlayerinfoUserId = async function (this: AxiosRequestConfig | void, params?: API_INDEX_PLAYER_INFO_USERID.REQ): Promise<API_INDEX_PLAYER_INFO_USERID.RES> {
  const { userId } = params || {}
  return (this?.instance || SportAPI).get(`/api/front/index/player-info/${userId}`, { ...this, params })
}

/**
 * 53.首页未授权公共类（登录、登出、验证码、在线用户数、语言列表）
 * 53.27.获取配置信息
 * @see https://sportsapidoc-2.cxsport.net/apidoc/%E4%BD%93%E8%82%B2%E6%8E%A5%E5%8F%A3%E6%96%87%E6%A1%A3/#_53_27_%E8%8E%B7%E5%8F%96%E9%85%8D%E7%BD%AE%E4%BF%A1%E6%81%AF
 */
export const reqIndexConfigjson = async function (this: AxiosRequestConfig | void, params?: API_INDEX_CONFIG_JSON.REQ): Promise<API_INDEX_CONFIG_JSON.RES> {
  return (this?.instance || SportAPI).get('/api/front/index/config.json', { ...this, params })
}

/**
 * 53.首页未授权公共类（登录、登出、验证码、在线用户数、语言列表）
 * 53.28.获取动画地址
 * @see https://sportsapidoc-2.cxsport.net/apidoc/%E4%BD%93%E8%82%B2%E6%8E%A5%E5%8F%A3%E6%96%87%E6%A1%A3/#_53_28_%E8%8E%B7%E5%8F%96%E5%8A%A8%E7%94%BB%E5%9C%B0%E5%9D%80
 */
export const reqIndexAnimationjson = async function (this: AxiosRequestConfig | void): Promise<API_INDEX_ANIMATION_JSON.RES> {
  return (this?.instance || SportAPI).get('/api/front/index/animation.json', this || undefined)
}

/**
 * 53.首页未授权公共类（登录、登出、验证码、在线用户数、语言列表）
 * 53.29.发送登入装置验证讯息
 * @see https://sportsapidoc-2.cxsport.net/apidoc/%E4%BD%93%E8%82%B2%E6%8E%A5%E5%8F%A3%E6%96%87%E6%A1%A3/#_53_29_%E5%8F%91%E9%80%81%E7%99%BB%E5%85%A5%E8%A3%85%E7%BD%AE%E9%AA%8C%E8%AF%81%E8%AE%AF%E6%81%AF
 */
export const reqIndexSendLoginDeviceSms = async function (this: AxiosRequestConfig | void, params?: API_INDEX_SENDLOGINDEVICESMS.REQ): Promise<API_INDEX_SENDLOGINDEVICESMS.RES> {
  return (this?.instance || SportAPI).post('/api/front/index/sendLoginDeviceSms', params, this || undefined)
}

/**
 * 53.首页未授权公共类（登录、登出、验证码、在线用户数、语言列表）
 * 53.30.登入装置讯息检验
 * @see https://sportsapidoc-2.cxsport.net/apidoc/%E4%BD%93%E8%82%B2%E6%8E%A5%E5%8F%A3%E6%96%87%E6%A1%A3/#_53_30_%E7%99%BB%E5%85%A5%E8%A3%85%E7%BD%AE%E8%AE%AF%E6%81%AF%E6%A3%80%E9%AA%8C
 */
export const reqIndexValidateLoginDeviceSms = async function (this: AxiosRequestConfig | void, params?: API_INDEX_VALIDATELOGINDEVICESMS.REQ): Promise<API_INDEX_VALIDATELOGINDEVICESMS.RES> {
  return (this?.instance || SportAPI).post('/api/front/index/validateLoginDeviceSms', params, this || undefined)
}

/**
 * 53.首页未授权公共类（登录、登出、验证码、在线用户数、语言列表）
 * 53.31.发送双重验证讯息
 * @see https://sportsapidoc-2.cxsport.net/apidoc/%E4%BD%93%E8%82%B2%E6%8E%A5%E5%8F%A3%E6%96%87%E6%A1%A3/#_53_31_%E5%8F%91%E9%80%81%E5%8F%8C%E9%87%8D%E9%AA%8C%E8%AF%81%E8%AE%AF%E6%81%AF
 */
export const reqIndexSendTwoFactor = async function (this: AxiosRequestConfig | void, params?: API_INDEX_SENDTWOFACTOR.REQ): Promise<API_INDEX_SENDTWOFACTOR.RES> {
  return (this?.instance || SportAPI).post('/api/front/index/sendTwoFactor', params, this || undefined)
}

/**
 * 53.首页未授权公共类（登录、登出、验证码、在线用户数、语言列表）
 * 53.32.双重验证校验
 * @see https://sportsapidoc-2.cxsport.net/apidoc/%E4%BD%93%E8%82%B2%E6%8E%A5%E5%8F%A3%E6%96%87%E6%A1%A3/#_53_32_%E5%8F%8C%E9%87%8D%E9%AA%8C%E8%AF%81%E6%A0%A1%E9%AA%8C
 */
export const reqIndexValidateTwoFactor = async function (this: AxiosRequestConfig | void, params?: API_INDEX_VALIDATETWOFACTOR.REQ): Promise<API_INDEX_VALIDATETWOFACTOR.RES> {
  return (this?.instance || SportAPI).post('/api/front/index/validateTwoFactor', params, this || undefined)
}

/**
 * 53.首页未授权公共类（登录、登出、验证码、在线用户数、语言列表）
 * 53.33.获取用户ip对应国家
 * @see https://sportsapidoc-2.cxsport.net/apidoc/%E4%BD%93%E8%82%B2%E6%8E%A5%E5%8F%A3%E6%96%87%E6%A1%A3/#_53_33_%E8%8E%B7%E5%8F%96%E7%94%A8%E6%88%B7ip%E5%AF%B9%E5%BA%94%E5%9B%BD%E5%AE%B6
 */
export const reqIndexUserIpCountry = async function (this: AxiosRequestConfig | void): Promise<API_INDEX_USERIPCOUNTRY.RES> {
  return (this?.instance || SportAPI).get('/api/front/index/userIpCountry', this || undefined)
}

/**
 * 53.首页未授权公共类（登录、登出、验证码、在线用户数、语言列表）
 * 53.34.前端调用接口 - 用来判断okbet9首页 是否调用判断的登录页
 * @see https://sportsapidoc-2.cxsport.net/apidoc/%E4%BD%93%E8%82%B2%E6%8E%A5%E5%8F%A3%E6%96%87%E6%A1%A3/#_53_34_%E5%89%8D%E7%AB%AF%E8%B0%83%E7%94%A8%E6%8E%A5%E5%8F%A3%20-%20%E7%94%A8%E6%9D%A5%E5%88%A4%E6%96%ADokbet9%E9%A6%96%E9%A1%B5%20%E6%98%AF%E5%90%A6%E8%B0%83%E7%94%A8%E5%88%A4%E6%96%AD%E7%9A%84%E7%99%BB%E5%BD%95%E9%A1%B5
 */
export const reqIndexGetOpenNationByIp = async function (this: AxiosRequestConfig | void): Promise<API_INDEX_GETOPENNATIONBYIP.RES> {
  return (this?.instance || SportAPI).get('/api/front/index/getOpenNationByIp', this || undefined)
}

/**
 * 53.首页未授权公共类（登录、登出、验证码、在线用户数、语言列表）
 * 53.35.判断会员ip是否在可见的国家中(APP上架商店审核用), true:可见, false:不可见
 * @see https://sportsapidoc-2.cxsport.net/apidoc/%E4%BD%93%E8%82%B2%E6%8E%A5%E5%8F%A3%E6%96%87%E6%A1%A3/#_53_35_%E5%88%A4%E6%96%AD%E4%BC%9A%E5%91%98ip%E6%98%AF%E5%90%A6%E5%9C%A8%E5%8F%AF%E8%A7%81%E7%9A%84%E5%9B%BD%E5%AE%B6%E4%B8%AD(APP%E4%B8%8A%E6%9E%B6%E5%95%86%E5%BA%97%E5%AE%A1%E6%A0%B8%E7%94%A8)%2C%20true%3A%E5%8F%AF%E8%A7%81%2C%20false%3A%E4%B8%8D%E5%8F%AF%E8%A7%81
 */
export const reqIndexGetIsAvailableCountryIp = async function (this: AxiosRequestConfig | void): Promise<API_INDEX_GETISAVAILABLECOUNTRYIP.RES> {
  return (this?.instance || SportAPI).get('/api/front/index/getIsAvailableCountryIp', this || undefined)
}

/**
 * 54.用户信用接口
 * 54.1.取得会员当前进行中的周期
 * @see https://sportsapidoc-2.cxsport.net/apidoc/%E4%BD%93%E8%82%B2%E6%8E%A5%E5%8F%A3%E6%96%87%E6%A1%A3/#_54_1_%E5%8F%96%E5%BE%97%E4%BC%9A%E5%91%98%E5%BD%93%E5%89%8D%E8%BF%9B%E8%A1%8C%E4%B8%AD%E7%9A%84%E5%91%A8%E6%9C%9F
 */
export const reqUserCreditCircleCurrent = async function (this: AxiosRequestConfig | void, params?: API_USER_CREDIT_CIRCLE_CURRENT.REQ): Promise<API_USER_CREDIT_CIRCLE_CURRENT.RES> {
  return (this?.instance || SportAPI).post('/api/front/user/credit/circle/current', params, this || undefined)
}

/**
 * 54.用户信用接口
 * 54.2.取得会员历史周期
 * @see https://sportsapidoc-2.cxsport.net/apidoc/%E4%BD%93%E8%82%B2%E6%8E%A5%E5%8F%A3%E6%96%87%E6%A1%A3/#_54_2_%E5%8F%96%E5%BE%97%E4%BC%9A%E5%91%98%E5%8E%86%E5%8F%B2%E5%91%A8%E6%9C%9F
 */
export const reqUserCreditCircleHistory = async function (this: AxiosRequestConfig | void, params?: API_USER_CREDIT_CIRCLE_HISTORY.REQ): Promise<API_USER_CREDIT_CIRCLE_HISTORY.RES> {
  return (this?.instance || SportAPI).post('/api/front/user/credit/circle/history', params, this || undefined)
}

/**
 * 55.反馈信息
 * 55.1.反馈列表
 * @see https://sportsapidoc-2.cxsport.net/apidoc/%E4%BD%93%E8%82%B2%E6%8E%A5%E5%8F%A3%E6%96%87%E6%A1%A3/#_55_1_%E5%8F%8D%E9%A6%88%E5%88%97%E8%A1%A8
 */
export const reqFeedbackQuerylist = async function (this: AxiosRequestConfig | void, params?: API_FEEDBACK_QUERYLIST.REQ): Promise<API_FEEDBACK_QUERYLIST.RES> {
  return (this?.instance || SportAPI).post('/api/front/feedback/querylist', params, this || undefined)
}

/**
 * 55.反馈信息
 * 55.2.提交反馈信息
 * @see https://sportsapidoc-2.cxsport.net/apidoc/%E4%BD%93%E8%82%B2%E6%8E%A5%E5%8F%A3%E6%96%87%E6%A1%A3/#_55_2_%E6%8F%90%E4%BA%A4%E5%8F%8D%E9%A6%88%E4%BF%A1%E6%81%AF
 */
export const reqFeedbackSave = async function (this: AxiosRequestConfig | void, params?: API_FEEDBACK_SAVE.REQ): Promise<API_FEEDBACK_SAVE.RES> {
  return (this?.instance || SportAPI).post('/api/front/feedback/save', params, this || undefined)
}

/**
 * 55.反馈信息
 * 55.3.回复反馈信息
 * @see https://sportsapidoc-2.cxsport.net/apidoc/%E4%BD%93%E8%82%B2%E6%8E%A5%E5%8F%A3%E6%96%87%E6%A1%A3/#_55_3_%E5%9B%9E%E5%A4%8D%E5%8F%8D%E9%A6%88%E4%BF%A1%E6%81%AF
 */
export const reqFeedbackReply = async function (this: AxiosRequestConfig | void, params?: API_FEEDBACK_REPLY.REQ): Promise<API_FEEDBACK_REPLY.RES> {
  return (this?.instance || SportAPI).post('/api/front/feedback/reply', params, this || undefined)
}

/**
 * 55.反馈信息
 * 55.4.获取反馈详情
 * @see https://sportsapidoc-2.cxsport.net/apidoc/%E4%BD%93%E8%82%B2%E6%8E%A5%E5%8F%A3%E6%96%87%E6%A1%A3/#_55_4_%E8%8E%B7%E5%8F%96%E5%8F%8D%E9%A6%88%E8%AF%A6%E6%83%85
 */
export const reqFeedbackQuerydetailId = async function (this: AxiosRequestConfig | void, params?: API_FEEDBACK_QUERYDETAIL_ID.REQ): Promise<API_FEEDBACK_QUERYDETAIL_ID.RES> {
  const { id } = params || {}
  return (this?.instance || SportAPI).get(`/api/front/feedback/querydetail/${id}`, { ...this, params })
}

/**
 * 56.红包雨相关接口
 * 56.1.获取当前可以抢的红包雨
 * @see https://sportsapidoc-2.cxsport.net/apidoc/%E4%BD%93%E8%82%B2%E6%8E%A5%E5%8F%A3%E6%96%87%E6%A1%A3/#_56_1_%E8%8E%B7%E5%8F%96%E5%BD%93%E5%89%8D%E5%8F%AF%E4%BB%A5%E6%8A%A2%E7%9A%84%E7%BA%A2%E5%8C%85%E9%9B%A8
 */
export const reqRedenpRainInfo = async function (this: AxiosRequestConfig | void, params?: API_REDENP_RAIN_INFO.REQ): Promise<API_REDENP_RAIN_INFO.RES> {
  return (this?.instance || SportAPI).get('/api/front/redenp/rain/info', { ...this, params })
}

/**
 * 56.红包雨相关接口
 * 56.2.红包雨抢包
 * @see https://sportsapidoc-2.cxsport.net/apidoc/%E4%BD%93%E8%82%B2%E6%8E%A5%E5%8F%A3%E6%96%87%E6%A1%A3/#_56_2_%E7%BA%A2%E5%8C%85%E9%9B%A8%E6%8A%A2%E5%8C%85
 */
export const reqRedenpRainGrabRedEnpId = async function (this: AxiosRequestConfig | void, params?: API_REDENP_RAIN_GRAB_REDENPID.REQ): Promise<API_REDENP_RAIN_GRAB_REDENPID.RES> {
  const { redEnpId } = params || {}
  return (this?.instance || SportAPI).get(`/api/front/redenp/rain/grab/${redEnpId}`, { ...this, params })
}

/**
 * 57.代理注册、验证码
 * 57.1.获取验证码
 * @see https://sportsapidoc-2.cxsport.net/apidoc/%E4%BD%93%E8%82%B2%E6%8E%A5%E5%8F%A3%E6%96%87%E6%A1%A3/#_57_1_%E8%8E%B7%E5%8F%96%E9%AA%8C%E8%AF%81%E7%A0%81
 */
export const reqIndexAgentGetvalidatecode = async function (this: AxiosRequestConfig | void, params?: API_INDEX_AGENT_GETVALIDATECODE.REQ): Promise<API_INDEX_AGENT_GETVALIDATECODE.RES> {
  return (this?.instance || SportAPI).post('/api/front/index/agent/getvalidatecode', params, this || undefined)
}

/**
 * 57.代理注册、验证码
 * 57.2.代理注册
 * @see https://sportsapidoc-2.cxsport.net/apidoc/%E4%BD%93%E8%82%B2%E6%8E%A5%E5%8F%A3%E6%96%87%E6%A1%A3/#_57_2_%E4%BB%A3%E7%90%86%E6%B3%A8%E5%86%8C
 */
export const reqIndexAgentRegister = async function (this: AxiosRequestConfig | void, params?: API_INDEX_AGENT_REGISTER.REQ): Promise<API_INDEX_AGENT_REGISTER.RES> {
  return (this?.instance || SportAPI).post('/api/front/index/agent/register', params, this || undefined)
}

/**
 * 58.飞单登录
 * 58.1.飞单登录
 * @see https://sportsapidoc-2.cxsport.net/apidoc/%E4%BD%93%E8%82%B2%E6%8E%A5%E5%8F%A3%E6%96%87%E6%A1%A3/#_58_1_%E9%A3%9E%E5%8D%95%E7%99%BB%E5%BD%95
 */
export const reqFlyLogin = async function (this: AxiosRequestConfig | void, params?: API_FLY_LOGIN.REQ): Promise<API_FLY_LOGIN.RES> {
  return (this?.instance || SportAPI).get('/api/front/fly/login', { ...this, params })
}

/**
 * 59.用户信息
 * 59.1.获取公告 isRead
 * @see https://sportsapidoc-2.cxsport.net/apidoc/%E4%BD%93%E8%82%B2%E6%8E%A5%E5%8F%A3%E6%96%87%E6%A1%A3/#_59_1_%E8%8E%B7%E5%8F%96%E5%85%AC%E5%91%8A%20isRead
 */
export const reqUserMessageList = async function (this: AxiosRequestConfig | void, params?: API_USER_MESSAGE_LIST.REQ): Promise<API_USER_MESSAGE_LIST.RES> {
  return (this?.instance || SportAPI).get('/api/front/user/message/list', { ...this, params })
}

/**
 * 59.用户信息
 * 59.2.记录已读状态
 * @see https://sportsapidoc-2.cxsport.net/apidoc/%E4%BD%93%E8%82%B2%E6%8E%A5%E5%8F%A3%E6%96%87%E6%A1%A3/#_59_2_%E8%AE%B0%E5%BD%95%E5%B7%B2%E8%AF%BB%E7%8A%B6%E6%80%81
 */
export const reqUserMessageReadedId = async function (this: AxiosRequestConfig | void, params?: API_USER_MESSAGE_READED_ID.REQ): Promise<API_USER_MESSAGE_READED_ID.RES> {
  const { id } = params || {}
  return (this?.instance || SportAPI).get(`/api/front/user/message/readed/${id}`, { ...this, params })
}

/**
 * 59.用户信息
 * 59.3.记录已读状态
 * @see https://sportsapidoc-2.cxsport.net/apidoc/%E4%BD%93%E8%82%B2%E6%8E%A5%E5%8F%A3%E6%96%87%E6%A1%A3/#_59_3_%E8%AE%B0%E5%BD%95%E5%B7%B2%E8%AF%BB%E7%8A%B6%E6%80%81
 */
export const reqUserMessageAllReadied = async function (this: AxiosRequestConfig | void, params?: API_USER_MESSAGE_ALLREADIED.REQ): Promise<API_USER_MESSAGE_ALLREADIED.RES> {
  return (this?.instance || SportAPI).get('/api/front/user/message/allReadied', { ...this, params })
}

/**
 * 60.活动信息接口
 * 60.1.取得会员可参与的活动列表
 * @see https://sportsapidoc-2.cxsport.net/apidoc/%E4%BD%93%E8%82%B2%E6%8E%A5%E5%8F%A3%E6%96%87%E6%A1%A3/#_60_1_%E5%8F%96%E5%BE%97%E4%BC%9A%E5%91%98%E5%8F%AF%E5%8F%82%E4%B8%8E%E7%9A%84%E6%B4%BB%E5%8A%A8%E5%88%97%E8%A1%A8
 */
export const reqV2ActivityList = async function (this: AxiosRequestConfig | void): Promise<API_V2_ACTIVITY_LIST.RES> {
  return (this?.instance || SportAPI).get('/api/front/v2/activity/list', this || undefined)
}

/**
 * 60.活动信息接口
 * 60.2.领取奖项
 * @see https://sportsapidoc-2.cxsport.net/apidoc/%E4%BD%93%E8%82%B2%E6%8E%A5%E5%8F%A3%E6%96%87%E6%A1%A3/#_60_2_%E9%A2%86%E5%8F%96%E5%A5%96%E9%A1%B9
 */
export const reqV2ActivityAward = async function (this: AxiosRequestConfig | void, params?: API_V2_ACTIVITY_AWARD.REQ): Promise<API_V2_ACTIVITY_AWARD.RES> {
  return (this?.instance || SportAPI).post('/api/front/v2/activity/award', params, this || undefined)
}

/**
 * 60.活动信息接口
 * 60.3.取得活动詳情
 * @see https://sportsapidoc-2.cxsport.net/apidoc/%E4%BD%93%E8%82%B2%E6%8E%A5%E5%8F%A3%E6%96%87%E6%A1%A3/#_60_3_%E5%8F%96%E5%BE%97%E6%B4%BB%E5%8A%A8%E8%A9%B3%E6%83%85
 */
export const reqV2ActivityActivityId = async function (this: AxiosRequestConfig | void, params?: API_V2_ACTIVITY_ACTIVITYID.REQ): Promise<API_V2_ACTIVITY_ACTIVITYID.RES> {
  const { activityId } = params || {}
  return (this?.instance || SportAPI).get(`/api/front/v2/activity/${activityId}`, { ...this, params })
}

/**
 * 61.用户信息
 * 61.1.获取用户信息
 * @see https://sportsapidoc-2.cxsport.net/apidoc/%E4%BD%93%E8%82%B2%E6%8E%A5%E5%8F%A3%E6%96%87%E6%A1%A3/#_61_1_%E8%8E%B7%E5%8F%96%E7%94%A8%E6%88%B7%E4%BF%A1%E6%81%AF
 */
export const reqUserInfo = async function (this: AxiosRequestConfig | void, params?: API_USER_INFO.REQ): Promise<API_USER_INFO.RES> {
  return (this?.instance || SportAPI).get('/api/front/user/info', { ...this, params })
}

/**
 * 61.用户信息
 * 61.2.获取余额
 * @see https://sportsapidoc-2.cxsport.net/apidoc/%E4%BD%93%E8%82%B2%E6%8E%A5%E5%8F%A3%E6%96%87%E6%A1%A3/#_61_2_%E8%8E%B7%E5%8F%96%E4%BD%99%E9%A2%9D
 */
export const reqUserMoney = async function (this: AxiosRequestConfig | void, params?: API_USER_MONEY.REQ): Promise<API_USER_MONEY.RES> {
  return (this?.instance || SportAPI).get('/api/front/user/money', { ...this, params })
}

/**
 * 61.用户信息
 * 61.3.更新密码
 * @see https://sportsapidoc-2.cxsport.net/apidoc/%E4%BD%93%E8%82%B2%E6%8E%A5%E5%8F%A3%E6%96%87%E6%A1%A3/#_61_3_%E6%9B%B4%E6%96%B0%E5%AF%86%E7%A0%81
 */
export const reqUserUpdatepwd = async function (this: AxiosRequestConfig | void, params?: API_USER_UPDATEPWD.REQ): Promise<API_USER_UPDATEPWD.RES> {
  return (this?.instance || SportAPI).post('/api/front/user/updatepwd', params, this || undefined)
}

/**
 * 61.用户信息
 * 61.4.更新资金密码
 * @see https://sportsapidoc-2.cxsport.net/apidoc/%E4%BD%93%E8%82%B2%E6%8E%A5%E5%8F%A3%E6%96%87%E6%A1%A3/#_61_4_%E6%9B%B4%E6%96%B0%E8%B5%84%E9%87%91%E5%AF%86%E7%A0%81
 */
export const reqUserUpdatefundpwd = async function (this: AxiosRequestConfig | void, params?: API_USER_UPDATEFUNDPWD.REQ): Promise<API_USER_UPDATEFUNDPWD.RES> {
  return (this?.instance || SportAPI).post('/api/front/user/updatefundpwd', params, this || undefined)
}

/**
 * 61.用户信息
 * 61.5.设置用户真实名称
 * @see https://sportsapidoc-2.cxsport.net/apidoc/%E4%BD%93%E8%82%B2%E6%8E%A5%E5%8F%A3%E6%96%87%E6%A1%A3/#_61_5_%E8%AE%BE%E7%BD%AE%E7%94%A8%E6%88%B7%E7%9C%9F%E5%AE%9E%E5%90%8D%E7%A7%B0
 */
export const reqUserFullname = async function (this: AxiosRequestConfig | void, params?: API_USER_FULLNAME.REQ): Promise<API_USER_FULLNAME.RES> {
  return (this?.instance || SportAPI).post('/api/front/user/fullname', params, this || undefined)
}

/**
 * 61.用户信息
 * 61.6.更新昵称
 * @see https://sportsapidoc-2.cxsport.net/apidoc/%E4%BD%93%E8%82%B2%E6%8E%A5%E5%8F%A3%E6%96%87%E6%A1%A3/#_61_6_%E6%9B%B4%E6%96%B0%E6%98%B5%E7%A7%B0
 */
export const reqUserEditNickName = async function (this: AxiosRequestConfig | void, params?: API_USER_EDITNICKNAME.REQ): Promise<API_USER_EDITNICKNAME.RES> {
  return (this?.instance || SportAPI).post('/api/front/user/editNickName', params, this || undefined)
}

/**
 * 61.用户信息
 * 61.7.更新头像
 * @see https://sportsapidoc-2.cxsport.net/apidoc/%E4%BD%93%E8%82%B2%E6%8E%A5%E5%8F%A3%E6%96%87%E6%A1%A3/#_61_7_%E6%9B%B4%E6%96%B0%E5%A4%B4%E5%83%8F
 */
export const reqUserEditIconUrl = async function (this: AxiosRequestConfig | void, params?: API_USER_EDITICONURL.REQ): Promise<API_USER_EDITICONURL.RES> {
  return (this?.instance || SportAPI).post('/api/front/user/editIconUrl', params, this || undefined)
}

/**
 * 61.用户信息
 * 61.8.设置提款资料
 * @see https://sportsapidoc-2.cxsport.net/apidoc/%E4%BD%93%E8%82%B2%E6%8E%A5%E5%8F%A3%E6%96%87%E6%A1%A3/#_61_8_%E8%AE%BE%E7%BD%AE%E6%8F%90%E6%AC%BE%E8%B5%84%E6%96%99
 */
export const reqUserSetWdUserInfo = async function (this: AxiosRequestConfig | void, params?: API_USER_SETWDUSERINFO.REQ): Promise<API_USER_SETWDUSERINFO.RES> {
  return (this?.instance || SportAPI).post('/api/front/user/setWdUserInfo', params, this || undefined)
}

/**
 * 61.用户信息
 * 61.9.设置充值资料
 * @see https://sportsapidoc-2.cxsport.net/apidoc/%E4%BD%93%E8%82%B2%E6%8E%A5%E5%8F%A3%E6%96%87%E6%A1%A3/#_61_9_%E8%AE%BE%E7%BD%AE%E5%85%85%E5%80%BC%E8%B5%84%E6%96%99
 */
export const reqUserSetRechargeInfo = async function (this: AxiosRequestConfig | void, params?: API_USER_SETRECHARGEINFO.REQ): Promise<API_USER_SETRECHARGEINFO.RES> {
  return (this?.instance || SportAPI).post('/api/front/user/setRechargeInfo', params, this || undefined)
}

/**
 * 61.用户信息
 * 61.10.上传证件
 * @see https://sportsapidoc-2.cxsport.net/apidoc/%E4%BD%93%E8%82%B2%E6%8E%A5%E5%8F%A3%E6%96%87%E6%A1%A3/#_61_10_%E4%B8%8A%E4%BC%A0%E8%AF%81%E4%BB%B6
 */
export const reqUserUploadVerifyPhoto = async function (this: AxiosRequestConfig | void, params?: API_USER_UPLOADVERIFYPHOTO.REQ): Promise<API_USER_UPLOADVERIFYPHOTO.RES> {
  return (this?.instance || SportAPI).post('/api/front/user/uploadVerifyPhoto', params, this || undefined)
}

/**
 * 61.用户信息
 * 61.11.会员变更为冻结状态
 * @see https://sportsapidoc-2.cxsport.net/apidoc/%E4%BD%93%E8%82%B2%E6%8E%A5%E5%8F%A3%E6%96%87%E6%A1%A3/#_61_11_%E4%BC%9A%E5%91%98%E5%8F%98%E6%9B%B4%E4%B8%BA%E5%86%BB%E7%BB%93%E7%8A%B6%E6%80%81
 */
export const reqUserSetFroze = async function (this: AxiosRequestConfig | void, params?: API_USER_SETFROZE.REQ): Promise<API_USER_SETFROZE.RES> {
  return (this?.instance || SportAPI).post('/api/front/user/setFroze', params, this || undefined)
}

/**
 * 61.用户信息
 * 61.12.会员设定生日
 * @see https://sportsapidoc-2.cxsport.net/apidoc/%E4%BD%93%E8%82%B2%E6%8E%A5%E5%8F%A3%E6%96%87%E6%A1%A3/#_61_12_%E4%BC%9A%E5%91%98%E8%AE%BE%E5%AE%9A%E7%94%9F%E6%97%A5
 */
export const reqUserSetBirthday = async function (this: AxiosRequestConfig | void, params?: API_USER_SETBIRTHDAY.REQ): Promise<API_USER_SETBIRTHDAY.RES> {
  return (this?.instance || SportAPI).post('/api/front/user/setBirthday', params, this || undefined)
}

/**
 * 61.用户信息
 * 61.13.会员设置每次下注金额限制
 * @see https://sportsapidoc-2.cxsport.net/apidoc/%E4%BD%93%E8%82%B2%E6%8E%A5%E5%8F%A3%E6%96%87%E6%A1%A3/#_61_13_%E4%BC%9A%E5%91%98%E8%AE%BE%E7%BD%AE%E6%AF%8F%E6%AC%A1%E4%B8%8B%E6%B3%A8%E9%87%91%E9%A2%9D%E9%99%90%E5%88%B6
 */
export const reqUserSetPerBetLimit = async function (this: AxiosRequestConfig | void, params?: API_USER_SETPERBETLIMIT.REQ): Promise<API_USER_SETPERBETLIMIT.RES> {
  return (this?.instance || SportAPI).post('/api/front/user/setPerBetLimit', params, this || undefined)
}

/**
 * 61.用户信息
 * 61.14.取得双重验证状态 (success: true 验证成功, false 需重新验证手机)
 * @see https://sportsapidoc-2.cxsport.net/apidoc/%E4%BD%93%E8%82%B2%E6%8E%A5%E5%8F%A3%E6%96%87%E6%A1%A3/#_61_14_%E5%8F%96%E5%BE%97%E5%8F%8C%E9%87%8D%E9%AA%8C%E8%AF%81%E7%8A%B6%E6%80%81%20(success%3A%20true%20%E9%AA%8C%E8%AF%81%E6%88%90%E5%8A%9F%2C%20false%20%E9%9C%80%E9%87%8D%E6%96%B0%E9%AA%8C%E8%AF%81%E6%89%8B%E6%9C%BA)
 */
export const reqUserGetTwoFactorValidateStatus = async function (this: AxiosRequestConfig | void, params?: API_USER_GETTWOFACTORVALIDATESTATUS.REQ): Promise<API_USER_GETTWOFACTORVALIDATESTATUS.RES> {
  return (this?.instance || SportAPI).get('/api/front/user/getTwoFactorValidateStatus', { ...this, params })
}

/**
 * 61.用户信息
 * 61.15.获取用户锁定额度
 * @see https://sportsapidoc-2.cxsport.net/apidoc/%E4%BD%93%E8%82%B2%E6%8E%A5%E5%8F%A3%E6%96%87%E6%A1%A3/#_61_15_%E8%8E%B7%E5%8F%96%E7%94%A8%E6%88%B7%E9%94%81%E5%AE%9A%E9%A2%9D%E5%BA%A6
 */
export const reqUserLockMoney = async function (this: AxiosRequestConfig | void, params?: API_USER_LOCKMONEY.REQ): Promise<API_USER_LOCKMONEY.RES> {
  return (this?.instance || SportAPI).get('/api/front/user/lockMoney', { ...this, params })
}

/**
 * 61.用户信息
 * 61.16.登录密码校验
 * @see https://sportsapidoc-2.cxsport.net/apidoc/%E4%BD%93%E8%82%B2%E6%8E%A5%E5%8F%A3%E6%96%87%E6%A1%A3/#_61_16_%E7%99%BB%E5%BD%95%E5%AF%86%E7%A0%81%E6%A0%A1%E9%AA%8C
 */
export const reqUserPasswordVerify = async function (this: AxiosRequestConfig | void, params?: API_USER_PASSWORDVERIFY.REQ): Promise<API_USER_PASSWORDVERIFY.RES> {
  return (this?.instance || SportAPI).post('/api/front/user/passwordVerify', params, this || undefined)
}

/**
 * 61.用户信息
 * 61.17.注销备注：IOS审查用到；
 * @see https://sportsapidoc-2.cxsport.net/apidoc/%E4%BD%93%E8%82%B2%E6%8E%A5%E5%8F%A3%E6%96%87%E6%A1%A3/#_61_17_%E6%B3%A8%E9%94%80%0A%E5%A4%87%E6%B3%A8%EF%BC%9AIOS%E5%AE%A1%E6%9F%A5%E7%94%A8%E5%88%B0%EF%BC%9B
 */
export const reqUserRemove = async function (this: AxiosRequestConfig | void, params?: API_USER_REMOVE.REQ): Promise<API_USER_REMOVE.RES> {
  return (this?.instance || SportAPI).post('/api/front/user/remove', params, this || undefined)
}

/**
 * 61.用户信息
 * 61.18.完善用户信息详情
 * @see https://sportsapidoc-2.cxsport.net/apidoc/%E4%BD%93%E8%82%B2%E6%8E%A5%E5%8F%A3%E6%96%87%E6%A1%A3/#_61_18_%E5%AE%8C%E5%96%84%E7%94%A8%E6%88%B7%E4%BF%A1%E6%81%AF%E8%AF%A6%E6%83%85
 */
export const reqUserCompleteUserDetails = async function (this: AxiosRequestConfig | void, params?: API_USER_COMPLETEUSERDETAILS.REQ): Promise<API_USER_COMPLETEUSERDETAILS.RES> {
  return (this?.instance || SportAPI).post('/api/front/user/CompleteUserDetails', params, this || undefined)
}

/**
 * 61.用户信息
 * 61.19.完善用户信息详情查询
 * @see https://sportsapidoc-2.cxsport.net/apidoc/%E4%BD%93%E8%82%B2%E6%8E%A5%E5%8F%A3%E6%96%87%E6%A1%A3/#_61_19_%E5%AE%8C%E5%96%84%E7%94%A8%E6%88%B7%E4%BF%A1%E6%81%AF%E8%AF%A6%E6%83%85%E6%9F%A5%E8%AF%A2
 */
export const reqUserQueryUserInfoDetails = async function (this: AxiosRequestConfig | void, params?: API_USER_QUERYUSERINFODETAILS.REQ): Promise<API_USER_QUERYUSERINFODETAILS.RES> {
  return (this?.instance || SportAPI).get('/api/front/user/queryUserInfoDetails', { ...this, params })
}

/**
 * 61.用户信息
 * 61.20.查询收入来源列表
 * @see https://sportsapidoc-2.cxsport.net/apidoc/%E4%BD%93%E8%82%B2%E6%8E%A5%E5%8F%A3%E6%96%87%E6%A1%A3/#_61_20_%E6%9F%A5%E8%AF%A2%E6%94%B6%E5%85%A5%E6%9D%A5%E6%BA%90%E5%88%97%E8%A1%A8
 */
export const reqUserQuerySalarySource = async function (this: AxiosRequestConfig | void, params?: API_USER_QUERYSALARYSOURCE.REQ): Promise<API_USER_QUERYSALARYSOURCE.RES> {
  return (this?.instance || SportAPI).get('/api/front/user/querySalarySource', { ...this, params })
}
