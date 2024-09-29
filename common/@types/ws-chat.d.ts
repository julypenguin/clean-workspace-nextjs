/** 這一份是手動寫的 */
declare namespace WS {
  type ChatEvent =
    | {
        /** 初始訊息，格式跟正常 Socket 差很多 */
        bulletinList: any[]
        messageList: ChatMessage[]
        chatRoom: any
      }
    | ({
        /** 正常 Socket 訊息 */
        seq: number // 信息编号,client发送讯息id,如果为server主动推送，则为0
        time: number // 系统时间戳
        msg: string // 消息提示
      } & (
        | {
            // 文字
            type: 1000
            content: ChatMessage
          }
        | {
            type: string | number // 讯息代码,参考如下表
            content: any // 回传数据
          }
      ))

  /** 聊天室订阅通道 /ws/notify/room/{roomId} */
  type ChatMessage = {
    messageId: string // 讯息id
    type: number // ChatType 聊天类型
    userId: number // 用户ID
    userUniKey: string // 用户唯一识别码
    nickName: string // 昵称
    userName: string // 会员帐号
    iconUrl: string // 头像
    iconMiniUrl: string // 头像缩图
    remark: string // 备注
    content: string // 讯息内容
    curTime: string // 讯息时间
    userType: string // 会员角色 0游客、1会员、2管理员、3訪客
    bgColor: string // 边框颜色;内容颜色
    textColor: string // 文字颜色
    userLevelCode: string // 用户等级Code
  }
}
