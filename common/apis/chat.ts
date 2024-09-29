/** 這隻檔案為自動生成，請勿更動 */
import { type AxiosRequestConfig } from 'axios'
import { ChatAPI } from './client/instance'
export { cancelRequest, useSWR } from './utils'

/**
 * 1.前台 room
 * 1.1.查询所有开放的房间
 * @see https://sportsapidoc-2.cxsport.net/apidoc/chat/%E4%BD%93%E8%82%B2%E8%81%8A%E5%A4%A9%E5%AE%A4%E6%8E%A5%E5%8F%A3%E6%96%87%E6%A1%A3/front/#_1_1_%E6%9F%A5%E8%AF%A2%E6%89%80%E6%9C%89%E5%BC%80%E6%94%BE%E7%9A%84%E6%88%BF%E9%97%B4
 */
export const reqChatRoomQueryList = async function (this: AxiosRequestConfig | void): Promise<API_ROOM_QUERYLIST.RES> {
  return (this?.instance || ChatAPI).post('/api/chat/front/room/queryList', null, this || undefined)
}

/**
 * 2.红包
 * 2.1.抢红包
 * @see https://sportsapidoc-2.cxsport.net/apidoc/chat/%E4%BD%93%E8%82%B2%E8%81%8A%E5%A4%A9%E5%AE%A4%E6%8E%A5%E5%8F%A3%E6%96%87%E6%A1%A3/front/#_2_1_%E6%8A%A2%E7%BA%A2%E5%8C%85
 */
export const reqChatPacketLuckyBag = async function (this: AxiosRequestConfig | void, params?: API_PACKET_LUCKYBAG.REQ): Promise<API_PACKET_LUCKYBAG.RES> {
  return (this?.instance || ChatAPI).post('/api/chat/front/packet/luckyBag', params, this || undefined)
}

/**
 * 2.红包
 * 2.2.获得未抢红包列表
 * @see https://sportsapidoc-2.cxsport.net/apidoc/chat/%E4%BD%93%E8%82%B2%E8%81%8A%E5%A4%A9%E5%AE%A4%E6%8E%A5%E5%8F%A3%E6%96%87%E6%A1%A3/front/#_2_2_%E8%8E%B7%E5%BE%97%E6%9C%AA%E6%8A%A2%E7%BA%A2%E5%8C%85%E5%88%97%E8%A1%A8
 */
export const reqChatPacketRoomIdGetUnPacket = async function (this: AxiosRequestConfig | void, params?: API_PACKET_ROOMID_GETUNPACKET.REQ): Promise<API_PACKET_ROOMID_GETUNPACKET.RES> {
  const { roomId } = params || {}
  return (this?.instance || ChatAPI).post(`/api/chat/front/packet/${roomId}/getUnPacket`, params, this || undefined)
}

/**
 * 3.聊天室表情包
 * 3.1.查询所有表情包
 * @see https://sportsapidoc-2.cxsport.net/apidoc/chat/%E4%BD%93%E8%82%B2%E8%81%8A%E5%A4%A9%E5%AE%A4%E6%8E%A5%E5%8F%A3%E6%96%87%E6%A1%A3/front/#_3_1_%E6%9F%A5%E8%AF%A2%E6%89%80%E6%9C%89%E8%A1%A8%E6%83%85%E5%8C%85
 */
export const reqChatEmoticonsQueryList = async function (this: AxiosRequestConfig | void): Promise<API_EMOTICONS_QUERYLIST.RES> {
  return (this?.instance || ChatAPI).get('/api/chat/front/emoticons/queryList', this || undefined)
}

/**
 * 4.聊天
 * 4.1.初始化聊天室用户(游客,一般用户)
 * @see https://sportsapidoc-2.cxsport.net/apidoc/chat/%E4%BD%93%E8%82%B2%E8%81%8A%E5%A4%A9%E5%AE%A4%E6%8E%A5%E5%8F%A3%E6%96%87%E6%A1%A3/front/#_4_1_%E5%88%9D%E5%A7%8B%E5%8C%96%E8%81%8A%E5%A4%A9%E5%AE%A4%E7%94%A8%E6%88%B7(%E6%B8%B8%E5%AE%A2%2C%E4%B8%80%E8%88%AC%E7%94%A8%E6%88%B7)
 */
export const reqChatChatInit = async function (this: AxiosRequestConfig | void, params?: API_CHAT_INIT.REQ): Promise<API_CHAT_INIT.RES> {
  return (this?.instance || ChatAPI).post('/api/chat/front/chat/init', params, this || undefined)
}

/**
 * 4.聊天
 * 4.2.初始化聊天室用户(访客)
 * @see https://sportsapidoc-2.cxsport.net/apidoc/chat/%E4%BD%93%E8%82%B2%E8%81%8A%E5%A4%A9%E5%AE%A4%E6%8E%A5%E5%8F%A3%E6%96%87%E6%A1%A3/front/#_4_2_%E5%88%9D%E5%A7%8B%E5%8C%96%E8%81%8A%E5%A4%A9%E5%AE%A4%E7%94%A8%E6%88%B7(%E8%AE%BF%E5%AE%A2)
 */
export const reqChatChatGuestInit = async function (this: AxiosRequestConfig | void): Promise<API_CHAT_GUEST_INIT.RES> {
  return (this?.instance || ChatAPI).post('/api/chat/front/chat/guest/init', null, this || undefined)
}

/**
 * 4.聊天
 * 4.3.用户进入聊天室
 * @see https://sportsapidoc-2.cxsport.net/apidoc/chat/%E4%BD%93%E8%82%B2%E8%81%8A%E5%A4%A9%E5%AE%A4%E6%8E%A5%E5%8F%A3%E6%96%87%E6%A1%A3/front/#_4_3_%E7%94%A8%E6%88%B7%E8%BF%9B%E5%85%A5%E8%81%8A%E5%A4%A9%E5%AE%A4
 */
export const reqChatChatRoomIdJoinRoom = async function (this: AxiosRequestConfig | void, params?: API_CHAT_ROOMID_JOINROOM.REQ): Promise<API_CHAT_ROOMID_JOINROOM.RES> {
  const { roomId } = params || {}
  return (this?.instance || ChatAPI).post(`/api/chat/front/chat/${roomId}/joinRoom`, params, this || undefined)
}

/**
 * 4.聊天
 * 4.4.用户离开聊天室
 * @see https://sportsapidoc-2.cxsport.net/apidoc/chat/%E4%BD%93%E8%82%B2%E8%81%8A%E5%A4%A9%E5%AE%A4%E6%8E%A5%E5%8F%A3%E6%96%87%E6%A1%A3/front/#_4_4_%E7%94%A8%E6%88%B7%E7%A6%BB%E5%BC%80%E8%81%8A%E5%A4%A9%E5%AE%A4
 */
export const reqChatChatRoomIdLeaveRoom = async function (this: AxiosRequestConfig | void, params?: API_CHAT_ROOMID_LEAVEROOM.REQ): Promise<API_CHAT_ROOMID_LEAVEROOM.RES> {
  const { roomId } = params || {}
  return (this?.instance || ChatAPI).post(`/api/chat/front/chat/${roomId}/leaveRoom`, params, this || undefined)
}

/**
 * 4.聊天
 * 4.5.删除讯息
 * @see https://sportsapidoc-2.cxsport.net/apidoc/chat/%E4%BD%93%E8%82%B2%E8%81%8A%E5%A4%A9%E5%AE%A4%E6%8E%A5%E5%8F%A3%E6%96%87%E6%A1%A3/front/#_4_5_%E5%88%A0%E9%99%A4%E8%AE%AF%E6%81%AF
 */
export const reqChatChatRoomIdRemoveMessageMessageId = async function (
  this: AxiosRequestConfig | void,
  params?: API_CHAT_ROOMID_REMOVEMESSAGE_MESSAGEID.REQ,
): Promise<API_CHAT_ROOMID_REMOVEMESSAGE_MESSAGEID.RES> {
  const { roomId, messageId } = params || {}
  return (this?.instance || ChatAPI).post(`/api/chat/front/chat/${roomId}/removeMessage/${messageId}`, params, this || undefined)
}

/**
 * 4.聊天
 * 4.6.用户进入赛事聊天室
 * @see https://sportsapidoc-2.cxsport.net/apidoc/chat/%E4%BD%93%E8%82%B2%E8%81%8A%E5%A4%A9%E5%AE%A4%E6%8E%A5%E5%8F%A3%E6%96%87%E6%A1%A3/front/#_4_6_%E7%94%A8%E6%88%B7%E8%BF%9B%E5%85%A5%E8%B5%9B%E4%BA%8B%E8%81%8A%E5%A4%A9%E5%AE%A4
 */
export const reqChatChatMatchIdJoinMatchChatroom = async function (
  this: AxiosRequestConfig | void,
  params?: API_CHAT_MATCHID_JOIN_MATCH_CHATROOM.REQ,
): Promise<API_CHAT_MATCHID_JOIN_MATCH_CHATROOM.RES> {
  const { matchId } = params || {}
  return (this?.instance || ChatAPI).post(`/api/chat/front/chat/${matchId}/join/match/chatroom`, params, this || undefined)
}

/**
 * 4.聊天
 * 4.7.用户离开赛事聊天室
 * @see https://sportsapidoc-2.cxsport.net/apidoc/chat/%E4%BD%93%E8%82%B2%E8%81%8A%E5%A4%A9%E5%AE%A4%E6%8E%A5%E5%8F%A3%E6%96%87%E6%A1%A3/front/#_4_7_%E7%94%A8%E6%88%B7%E7%A6%BB%E5%BC%80%E8%B5%9B%E4%BA%8B%E8%81%8A%E5%A4%A9%E5%AE%A4
 */
export const reqChatChatMatchIdLeaveMatchChatroom = async function (
  this: AxiosRequestConfig | void,
  params?: API_CHAT_MATCHID_LEAVE_MATCH_CHATROOM.REQ,
): Promise<API_CHAT_MATCHID_LEAVE_MATCH_CHATROOM.RES> {
  const { matchId } = params || {}
  return (this?.instance || ChatAPI).post(`/api/chat/front/chat/${matchId}/leave/match/chatroom`, params, this || undefined)
}

/**
 * 4.聊天
 * 4.8.刪除用戶訊息
 * @see https://sportsapidoc-2.cxsport.net/apidoc/chat/%E4%BD%93%E8%82%B2%E8%81%8A%E5%A4%A9%E5%AE%A4%E6%8E%A5%E5%8F%A3%E6%96%87%E6%A1%A3/front/#_4_8_%E5%88%AA%E9%99%A4%E7%94%A8%E6%88%B6%E8%A8%8A%E6%81%AF
 */
export const reqChatChatMatchIdDeleteMessageMessageId = async function (
  this: AxiosRequestConfig | void,
  params?: API_CHAT_MATCHID_DELETE_MESSAGE_MESSAGEID.REQ,
): Promise<API_CHAT_MATCHID_DELETE_MESSAGE_MESSAGEID.RES> {
  const { matchId, messageId } = params || {}
  return (this?.instance || ChatAPI).post(`/api/chat/front/chat/${matchId}/delete/message/${messageId}`, params, this || undefined)
}

/**
 * 5.赛事聊天室注单
 * 5.1.查询會員賽事聊天室注單
 * @see https://sportsapidoc-2.cxsport.net/apidoc/chat/%E4%BD%93%E8%82%B2%E8%81%8A%E5%A4%A9%E5%AE%A4%E6%8E%A5%E5%8F%A3%E6%96%87%E6%A1%A3/front/#_5_1_%E6%9F%A5%E8%AF%A2%E6%9C%83%E5%93%A1%E8%B3%BD%E4%BA%8B%E8%81%8A%E5%A4%A9%E5%AE%A4%E6%B3%A8%E5%96%AE
 */
export const reqChatBetQueryMatchBetList = async function (this: AxiosRequestConfig | void, params?: API_BET_QUERYMATCHBETLIST.REQ): Promise<API_BET_QUERYMATCHBETLIST.RES> {
  return (this?.instance || ChatAPI).post('/api/chat/front/bet/queryMatchBetList', params, this || undefined)
}

/**
 * 5.赛事聊天室注单
 * 5.2.發指定曬單到送賽事聊天室
 * @see https://sportsapidoc-2.cxsport.net/apidoc/chat/%E4%BD%93%E8%82%B2%E8%81%8A%E5%A4%A9%E5%AE%A4%E6%8E%A5%E5%8F%A3%E6%96%87%E6%A1%A3/front/#_5_2_%E7%99%BC%E6%8C%87%E5%AE%9A%E6%9B%AC%E5%96%AE%E5%88%B0%E9%80%81%E8%B3%BD%E4%BA%8B%E8%81%8A%E5%A4%A9%E5%AE%A4
 */
export const reqChatBetSendBetToMatchRoom = async function (this: AxiosRequestConfig | void, params?: API_BET_SENDBETTOMATCHROOM.REQ): Promise<API_BET_SENDBETTOMATCHROOM.RES> {
  return (this?.instance || ChatAPI).post('/api/chat/front/bet/sendBetToMatchRoom', params, this || undefined)
}

/**
 * 6.用户
 * 6.1.修改昵称
 * @see https://sportsapidoc-2.cxsport.net/apidoc/chat/%E4%BD%93%E8%82%B2%E8%81%8A%E5%A4%A9%E5%AE%A4%E6%8E%A5%E5%8F%A3%E6%96%87%E6%A1%A3/front/#_6_1_%E4%BF%AE%E6%94%B9%E6%98%B5%E7%A7%B0
 */
export const reqChatUserEditNickName = async function (this: AxiosRequestConfig | void, params?: API_USER_EDITNICKNAME.REQ): Promise<API_USER_EDITNICKNAME.RES> {
  return (this?.instance || ChatAPI).post('/api/chat/front/user/editNickName', params, this || undefined)
}

/**
 * 6.用户
 * 6.2.验证token 是否过期。如果不过期返回token信息，过期返回success: false
 * @see https://sportsapidoc-2.cxsport.net/apidoc/chat/%E4%BD%93%E8%82%B2%E8%81%8A%E5%A4%A9%E5%AE%A4%E6%8E%A5%E5%8F%A3%E6%96%87%E6%A1%A3/front/#_6_2_%E9%AA%8C%E8%AF%81token%20%E6%98%AF%E5%90%A6%E8%BF%87%E6%9C%9F%E3%80%82%E5%A6%82%E6%9E%9C%E4%B8%8D%E8%BF%87%E6%9C%9F%E8%BF%94%E5%9B%9Etoken%E4%BF%A1%E6%81%AF%EF%BC%8C%E8%BF%87%E6%9C%9F%E8%BF%94%E5%9B%9Esuccess%3A%20false
 */
export const reqChatUserChecktoken = async function (this: AxiosRequestConfig | void): Promise<API_USER_CHECKTOKEN.RES> {
  return (this?.instance || ChatAPI).post('/api/chat/front/user/checktoken', null, this || undefined)
}

/**
 * 6.用户
 * 6.3.禁言
 * @see https://sportsapidoc-2.cxsport.net/apidoc/chat/%E4%BD%93%E8%82%B2%E8%81%8A%E5%A4%A9%E5%AE%A4%E6%8E%A5%E5%8F%A3%E6%96%87%E6%A1%A3/front/#_6_3_%E7%A6%81%E8%A8%80
 */
export const reqChatUserUserIdGag = async function (this: AxiosRequestConfig | void, params?: API_USER_USERID_GAG.REQ): Promise<API_USER_USERID_GAG.RES> {
  const { userId } = params || {}
  return (this?.instance || ChatAPI).post(`/api/chat/front/user/${userId}/gag`, params, this || undefined)
}

/**
 * 6.用户
 * 6.4.解除禁言
 * @see https://sportsapidoc-2.cxsport.net/apidoc/chat/%E4%BD%93%E8%82%B2%E8%81%8A%E5%A4%A9%E5%AE%A4%E6%8E%A5%E5%8F%A3%E6%96%87%E6%A1%A3/front/#_6_4_%E8%A7%A3%E9%99%A4%E7%A6%81%E8%A8%80
 */
export const reqChatUserUserIdUnGag = async function (this: AxiosRequestConfig | void, params?: API_USER_USERID_UNGAG.REQ): Promise<API_USER_USERID_UNGAG.RES> {
  const { userId } = params || {}
  return (this?.instance || ChatAPI).post(`/api/chat/front/user/${userId}/unGag`, params, this || undefined)
}

/**
 * 6.用户
 * 6.5.踢出
 * @see https://sportsapidoc-2.cxsport.net/apidoc/chat/%E4%BD%93%E8%82%B2%E8%81%8A%E5%A4%A9%E5%AE%A4%E6%8E%A5%E5%8F%A3%E6%96%87%E6%A1%A3/front/#_6_5_%E8%B8%A2%E5%87%BA
 */
export const reqChatUserUserIdKick = async function (this: AxiosRequestConfig | void, params?: API_USER_USERID_KICK.REQ): Promise<API_USER_USERID_KICK.RES> {
  const { userId } = params || {}
  return (this?.instance || ChatAPI).post(`/api/chat/front/user/${userId}/kick`, params, this || undefined)
}

/**
 * 6.用户
 * 6.6.封禁
 * @see https://sportsapidoc-2.cxsport.net/apidoc/chat/%E4%BD%93%E8%82%B2%E8%81%8A%E5%A4%A9%E5%AE%A4%E6%8E%A5%E5%8F%A3%E6%96%87%E6%A1%A3/front/#_6_6_%E5%B0%81%E7%A6%81
 */
export const reqChatUserUserIdBanned = async function (this: AxiosRequestConfig | void, params?: API_USER_USERID_BANNED.REQ): Promise<API_USER_USERID_BANNED.RES> {
  const { userId } = params || {}
  return (this?.instance || ChatAPI).post(`/api/chat/front/user/${userId}/banned`, params, this || undefined)
}

/**
 * 6.用户
 * 6.7.用户设置
 * @see https://sportsapidoc-2.cxsport.net/apidoc/chat/%E4%BD%93%E8%82%B2%E8%81%8A%E5%A4%A9%E5%AE%A4%E6%8E%A5%E5%8F%A3%E6%96%87%E6%A1%A3/front/#_6_7_%E7%94%A8%E6%88%B7%E8%AE%BE%E7%BD%AE
 */
export const reqChatUserUpdateSetting = async function (this: AxiosRequestConfig | void, params?: API_USER_UPDATESETTING.REQ): Promise<API_USER_UPDATESETTING.RES> {
  return (this?.instance || ChatAPI).post('/api/chat/front/user/updateSetting', params, this || undefined)
}

/**
 * 6.用户
 * 6.8.禁言
 * @see https://sportsapidoc-2.cxsport.net/apidoc/chat/%E4%BD%93%E8%82%B2%E8%81%8A%E5%A4%A9%E5%AE%A4%E6%8E%A5%E5%8F%A3%E6%96%87%E6%A1%A3/front/#_6_8_%E7%A6%81%E8%A8%80
 */
export const reqChatUserForbiddenSpeak = async function (this: AxiosRequestConfig | void, params?: API_USER_FORBIDDENSPEAK.REQ): Promise<API_USER_FORBIDDENSPEAK.RES> {
  return (this?.instance || ChatAPI).post('/api/chat/front/user/forbiddenSpeak', params, this || undefined)
}

/**
 * 6.用户
 * 6.9.解禁
 * @see https://sportsapidoc-2.cxsport.net/apidoc/chat/%E4%BD%93%E8%82%B2%E8%81%8A%E5%A4%A9%E5%AE%A4%E6%8E%A5%E5%8F%A3%E6%96%87%E6%A1%A3/front/#_6_9_%E8%A7%A3%E7%A6%81
 */
export const reqChatUserSpeakEnable = async function (this: AxiosRequestConfig | void, params?: API_USER_SPEAKENABLE.REQ): Promise<API_USER_SPEAKENABLE.RES> {
  return (this?.instance || ChatAPI).post('/api/chat/front/user/speakEnable', params, this || undefined)
}
