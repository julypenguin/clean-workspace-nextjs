// 1.前台 room: 1.1.查询所有开放的房间
declare namespace API_ROOM_QUERYLIST {
  // 1.前台 room: 1.1.查询所有开放的房间
  type RES = {
    // No comments found.
    success: boolean
    // No comments found.
    msg: string
    // No comments found.
    code: number
    // No comments found.
    rows: Array<{
      // No comments found.
      id: number
      // No comments found.
      name: string
      // No comments found.
      language: string
      // No comments found.
      platformId: number
      // No comments found.
      platCode: string
      // No comments found.
      platName: string
      // No comments found.
      rechMoney: number
      // No comments found.
      betMoney: number
      // No comments found.
      createDate: string
      // No comments found.
      remark: string
      // No comments found.
      isOpen: string
      // No comments found.
      isSpeak: string
      // No comments found.
      isShowCount: string
      // No comments found.
      basicAmount: number
      // No comments found.
      onlineCount: number
      // No comments found.
      constraintType: string
      // No comments found.
      dataStatisticsRange: number
    }>
    // No comments found.
    dataStatisticsRange: number
    // No comments found.
    total: number
  }
}
// 2.红包: 2.1.抢红包
declare namespace API_PACKET_LUCKYBAG {
  // 2.红包: 2.1.抢红包
  type RES = {
    // No comments found.
    success: boolean
    // No comments found.
    msg: string
    // No comments found.
    code: number
    // No comments found.
    t: any
  }
  // 2.红包: 2.1.抢红包
  type REQ = {
    // 红包id
    packetId: number
    // 关键字
    watchWord?: string
  }
}
// 2.红包: 2.2.获得未抢红包列表
declare namespace API_PACKET_ROOMID_GETUNPACKET {
  // 2.红包: 2.2.获得未抢红包列表
  type RES = {
    // No comments found.
    success: boolean
    // No comments found.
    msg: string
    // No comments found.
    code: number
    // No comments found.
    rows: Array<{
      // 红包ID
      id: number
      // 房间ID
      roomId: number
      // 币别
      currency: string
      // 最低充值金额
      rechMoney: number
      // 最低下注金额
      betMoney: number
      // 创建人
      createBy: string
      // 创建时间
      createDate: string
      // 红包状态（1：正常；2：已抢完；3：已关闭）
      status: number
      // 0-立刻发红包(系统红包) 1 每日红包（暂无）2 随机红包 3 定向红包 4 小号红包 5 口令红包
      packetType: number
      // 平台ID
      platformId: number
    }>
    // 平台ID
    platformId: number
    // No comments found.
    total: number
  }
  // 2.红包: 2.2.获得未抢红包列表
  type REQ = {
    // No comments found. (This is path parameter.)
    roomId: number
  }
}
// 3.聊天室表情包: 3.1.查询所有表情包
declare namespace API_EMOTICONS_QUERYLIST {
  // 3.聊天室表情包: 3.1.查询所有表情包
  type RES = {
    // No comments found.
    success: boolean
    // No comments found.
    msg: string
    // No comments found.
    code: number
    // No comments found.
    rows: Array<{
      // No comments found.
      typeName: string
      // No comments found.
      list: Array<{
        // 主键
        id: number
        // 表情分类
        type: number
        // 表情图片
        url: string
        // 排序
        sort: number
        // 创建时间
        addTime: string
        // 更新时间
        updateTime: string
        // 平台ID
        platformId: number
      }>
      // No comments found.
      typeSort: number
      // 创建时间
      typeAddTime: string
    }>
    // 创建时间
    typeAddTime: string
    // No comments found.
    total: number
  }
}
// 4.聊天: 4.1.初始化聊天室用户(游客,一般用户)
declare namespace API_CHAT_INIT {
  // 4.聊天: 4.1.初始化聊天室用户(游客,一般用户)
  type RES = {
    // No comments found.
    success: boolean
    // No comments found.
    msg: string
    // No comments found.
    code: number
    // No comments found.
    t: {
      // 用户ID
      userId: number
      // 用户唯一识别码
      userUniKey: string
      // 昵称
      nickName: string
      // 头像
      iconUrl: string
      // 头像缩图
      iconMiniUrl: string
      // 平台
      platformId: number
      // 用户等级
      userLevelId: number
      // 币别
      currency: string
      // 国家
      nationCode: string
      // 近2天充值
      rechMoney: number
      // 近2天下注
      betMoney: number
      // 用户状态（0正常、1禁言、2禁止登录）
      state: number
      // 测试试玩账号类型：0-普通账号，2-内部测试账号，1-游客
      testFlag: number
      // 语言 zh:中文，en：英文
      lang: string
      // 是否使用预设头像 0:否 1:是
      isDefaultIcon: string
      // 最后一次发言时间
      lastMessageTime: string
      // token
      token: string
      // 用户权限
      userLevelConfigVO: {
        // 角色名称
        name: string
        // 角色code
        code: string
        // 背景颜色
        bgColor: string
        // 文字颜色
        textColor: string
        // 下注背景色
        betBgColor: string
        // 昵称颜色
        nickTextColor: string
        // 是否系统默认 0否、1是
        isDefault: string
        // 是否允许踢人 0否、1是
        isKick: string
        // 是否允许禁言 0否、1是
        isGag: string
        // 是否允许发言 0否、1是
        isSpeak: string
        // 是否允许私聊 0否、1是
        isChat: string
        // 是否允许发送图片 0否、1是
        isSendImg: string
        // 是否允许发红包 0否、1是
        isSendPacket: string
        // 是否允许发送语音 0否、1是
        isSendAudio: string
        // 类型 0游客、1会员、2管理员、3訪客
        type: string
        // 消息最大长度
        maxLength: number
        // 平台id
        platformId: number
        // 是否允许封禁会员 0否、1是
        isBanned: string
      }
      // 是否 显示我的投注 0:否 1:是
      isShowMyBets: number
      // 平台code
      platformCode: string
    }
  }
  // 4.聊天: 4.1.初始化聊天室用户(游客,一般用户)
  type REQ = {
    // 平台用户ID
    userId?: number
    // 平台用户名
    userName?: string
    // 用户类型 0:聊天室游客 1：聊天室会员 2：聊天室管理员
    userType?: number
    // 平台编码
    platCode?: string
    // 平台Id
    platformId?: number
    // 最近两天充值金额
    rechMoney?: number
    // 最近两天下注金额
    betMoney?: number
    // 昨日充值金额 Sysmoney系统币
    sysRechMoney?: number
    // 昨日下注金额 Sysmoney系统币
    sysBetMoney?: number
    // 成长值
    growthValue?: number
    // 成长值代码
    growthCode?: string
    // 签名时间
    signTime?: string
    // 测试试玩账号类型：0-普通账号，2-内部测试账号，1-游客(试玩帐号), 3-访客(未登入)
    flag?: string
    // 用户头像
    iconUrl?: string
    // 签名
    sign?: string
    // 昵称
    nickName?: string
    // 币种
    currency?: string
    // 国家代码
    nationCode?: string
    // 用户层级
    userLevelConfig?: {
      // 主键id
      id?: number
      // 等级代码
      code?: string
      // 等级名称
      name?: string
      // 成长值门槛
      growthThreshold?: number
      // 单注最大下注额
      maxBetMoney?: number
      // 串关最大下注额
      maxParlayBetMoney?: number
      // 单注冠军最大下注额
      maxCpBetMoney?: number
      // 备注
      remark?: string
      // 平台id
      platformId?: number
      // 平台代码
      platformCode?: string
      // 更新时间
      updateDate?: string
      // 充值返水
      rechRebate?: number
      // 返水比例
      betRebate?: number
      // 最大单注返水金额上限, 0为不限制
      maxSingleBetRebate?: number
    }
  }
}
// 4.聊天: 4.2.初始化聊天室用户(访客)
declare namespace API_CHAT_GUEST_INIT {
  // 4.聊天: 4.2.初始化聊天室用户(访客)
  type RES = {
    // No comments found.
    success: boolean
    // No comments found.
    msg: string
    // No comments found.
    code: number
    // No comments found.
    t: {
      // 用户ID
      userId: number
      // 用户唯一识别码
      userUniKey: string
      // 昵称
      nickName: string
      // 头像
      iconUrl: string
      // 头像缩图
      iconMiniUrl: string
      // 平台
      platformId: number
      // 用户等级
      userLevelId: number
      // 币别
      currency: string
      // 国家
      nationCode: string
      // 近2天充值
      rechMoney: number
      // 近2天下注
      betMoney: number
      // 用户状态（0正常、1禁言、2禁止登录）
      state: number
      // 测试试玩账号类型：0-普通账号，2-内部测试账号，1-游客
      testFlag: number
      // 语言 zh:中文，en：英文
      lang: string
      // 是否使用预设头像 0:否 1:是
      isDefaultIcon: string
      // 最后一次发言时间
      lastMessageTime: string
      // token
      token: string
      // 用户权限
      userLevelConfigVO: {
        // 角色名称
        name: string
        // 角色code
        code: string
        // 背景颜色
        bgColor: string
        // 文字颜色
        textColor: string
        // 下注背景色
        betBgColor: string
        // 昵称颜色
        nickTextColor: string
        // 是否系统默认 0否、1是
        isDefault: string
        // 是否允许踢人 0否、1是
        isKick: string
        // 是否允许禁言 0否、1是
        isGag: string
        // 是否允许发言 0否、1是
        isSpeak: string
        // 是否允许私聊 0否、1是
        isChat: string
        // 是否允许发送图片 0否、1是
        isSendImg: string
        // 是否允许发红包 0否、1是
        isSendPacket: string
        // 是否允许发送语音 0否、1是
        isSendAudio: string
        // 类型 0游客、1会员、2管理员、3訪客
        type: string
        // 消息最大长度
        maxLength: number
        // 平台id
        platformId: number
        // 是否允许封禁会员 0否、1是
        isBanned: string
      }
      // 是否 显示我的投注 0:否 1:是
      isShowMyBets: number
      // 平台code
      platformCode: string
    }
  }
}
// 4.聊天: 4.3.用户进入聊天室
declare namespace API_CHAT_ROOMID_JOINROOM {
  // 4.聊天: 4.3.用户进入聊天室
  type RES = {
    // No comments found.
    success: boolean
    // No comments found.
    msg: string
    // No comments found.
    code: number
  }
  // 4.聊天: 4.3.用户进入聊天室
  type REQ = {
    // No comments found. (This is path parameter.)
    roomId: number
  }
}
// 4.聊天: 4.4.用户离开聊天室
declare namespace API_CHAT_ROOMID_LEAVEROOM {
  // 4.聊天: 4.4.用户离开聊天室
  type RES = {
    // No comments found.
    success: boolean
    // No comments found.
    msg: string
    // No comments found.
    code: number
  }
  // 4.聊天: 4.4.用户离开聊天室
  type REQ = {
    // No comments found. (This is path parameter.)
    roomId: number
  }
}
// 4.聊天: 4.5.删除讯息
declare namespace API_CHAT_ROOMID_REMOVEMESSAGE_MESSAGEID {
  // 4.聊天: 4.5.删除讯息
  type RES = {
    // No comments found.
    success: boolean
    // No comments found.
    msg: string
    // No comments found.
    code: number
  }
  // 4.聊天: 4.5.删除讯息
  type REQ = {
    // No comments found. (This is path parameter.)
    roomId: number
    // No comments found. (This is path parameter.)
    messageId: string
  }
}
// 4.聊天: 4.6.用户进入赛事聊天室
declare namespace API_CHAT_MATCHID_JOIN_MATCH_CHATROOM {
  // 4.聊天: 4.6.用户进入赛事聊天室
  type RES = {
    // No comments found.
    success: boolean
    // No comments found.
    msg: string
    // No comments found.
    code: number
  }
  // 4.聊天: 4.6.用户进入赛事聊天室
  type REQ = {
    // No comments found. (This is path parameter.)
    matchId: string
  }
}
// 4.聊天: 4.7.用户离开赛事聊天室
declare namespace API_CHAT_MATCHID_LEAVE_MATCH_CHATROOM {
  // 4.聊天: 4.7.用户离开赛事聊天室
  type RES = {
    // No comments found.
    success: boolean
    // No comments found.
    msg: string
    // No comments found.
    code: number
  }
  // 4.聊天: 4.7.用户离开赛事聊天室
  type REQ = {
    // No comments found. (This is path parameter.)
    matchId: string
  }
}
// 4.聊天: 4.8.刪除用戶訊息
declare namespace API_CHAT_MATCHID_DELETE_MESSAGE_MESSAGEID {
  // 4.聊天: 4.8.刪除用戶訊息
  type RES = {
    // No comments found.
    success: boolean
    // No comments found.
    msg: string
    // No comments found.
    code: number
  }
  // 4.聊天: 4.8.刪除用戶訊息
  type REQ = {
    // No comments found. (This is path parameter.)
    matchId: string
    // No comments found. (This is path parameter.)
    messageId: string
  }
}
// 5.赛事聊天室注单: 5.1.查询會員賽事聊天室注單
declare namespace API_BET_QUERYMATCHBETLIST {
  // 5.赛事聊天室注单: 5.1.查询會員賽事聊天室注單
  type RES = {
    // No comments found.
    success: boolean
    // No comments found.
    msg: string
    // No comments found.
    code: number
    // No comments found.
    rows: Array<{
      // 订单号
      orderNo: string
      // 用户id
      userId: number
      // 用户名
      userName: string
      // 游戏类型 FT：soccer
      gameType: string
      // 赛事赔率信息notNull
      matchOdds: Array<{
        // 主队名称国际化
        homeNameI18n: any
        // 客队名称国际化
        awayNameI18n: any
        // 玩法分类名称国际化
        playCateNameI18n: any
        // 联赛名称名称国际化
        leagueNameI18n: any
        // 玩法名称国际化
        playNameI18n: any
        // 让球名称国际化
        spreadI18n: any
        // 游戏类型 FT：soccer
        gameType: string
        // 赔率id
        oddsId: string
        // 赛事id
        matchId: string
        // 主队名称
        homeName: string
        // 主队id
        homeId: string
        // 客队名称
        awayName: string
        // 客队id
        awayId: string
        // 玩法分类名称
        playCateName: string
        // 玩法名称
        playName: string
        // 让球
        spread: string
        // 其他信息,如更优赔率的玩法名称,特定玩法的球员名称
        extInfo: string
        // 欧洲盘赔率
        odds: number
        // 香港盘赔率
        hkOdds: number
        // 印尼盘赔率
        indoOdds: number
        // 马来盘赔率
        malayOdds: number
        // 联赛id
        leagueId: string
        // 联赛名称
        leagueName: string
        // 玩法
        playId: number
        // 投注类型
        playCateId: number
        // 玩法分类代码
        playCateCode: string
        // 玩法代码
        playCode: string
        // 投注类型賽果
        playCateMatchResult: string
        // 实时比分，小金让球盘玩法结算时使用，如： 2-1
        rtScore: string
        // 开赛时间
        startTime: string | number
        // 结束时间
        endTime: string | number
        // 状态 0：未确认，1：未结算，2：赢，3：赢半，4：输，5：输半，6：和，7：已取消
        status: number
        // 下注盤口
        oddsType: string
        // 下注时赛事状态 0:早盘 1:滚球, 2:今日
        matchStatus: number
        // 国家名称
        categoryName: string
        // 国家图标
        categoryIcon: string
      }>
      // 下注金额
      stake: number
      // 注单数
      num: number
      // 下注总额
      totalAmount: number
      // 可赢额
      winnable: number
      // 总彩金，包括本金
      grossWin: number
      // 扣除本金后的赢的彩金
      netWin: number
      // 返水比例
      rebate: number
      // 返水总额
      rebateAmount: number
      // 总输赢（扣除本金加反水）
      win: number
      // 状态 0：未确认，1：未结算，2：赢，3：赢半，4：输，5：输半，6：和，7：已取消
      status: number
      // 取消原因
      cancelReason: string
      // 取消触发来源（ 0: 自动，1: 手动 ）
      cancelledBy: string
      // 下注时间
      addTime: string
      // 更新时间
      updateTime: string
      // 结算时间
      settleTime: string
      // TODAY("TODAY", "今日"), EARLY("EARLY", "早盘"), PARLAY("PARLAY", "连串")
      matchType: string
      // 0：不是串關 , 1: 串關
      parlay: number
      // 3C1：三串一，3C4：三串四
      parlayType: string
      // 币别
      currency: string
      // 会员画面金额，依盘口有不同意义(印尼/马来盘负盘口，为可赢金额 其余为下注金额)
      userPlayAmount: number
      // 玩法组合
      parlayComsDetailVOs: Array<{
        // 本组合是否是赢 0：否，1：是，6:和
        status: number
        // 下注金额
        stake: number
        // 中奖金额，包括本金
        winMoney: number
        // 玩法组合
        matchOddsVOList: Array<{
          // 主队名称国际化
          homeNameI18n: any
          // 客队名称国际化
          awayNameI18n: any
          // 玩法分类名称国际化
          playCateNameI18n: any
          // 联赛名称名称国际化
          leagueNameI18n: any
          // 玩法名称国际化
          playNameI18n: any
          // 让球名称国际化
          spreadI18n: any
          // 游戏类型 FT：soccer
          gameType: string
          // 赔率id
          oddsId: string
          // 赛事id
          matchId: string
          // 主队名称
          homeName: string
          // 主队id
          homeId: string
          // 客队名称
          awayName: string
          // 客队id
          awayId: string
          // 玩法分类名称
          playCateName: string
          // 玩法名称
          playName: string
          // 让球
          spread: string
          // 其他信息,如更优赔率的玩法名称,特定玩法的球员名称
          extInfo: string
          // 欧洲盘赔率
          odds: number
          // 香港盘赔率
          hkOdds: number
          // 印尼盘赔率
          indoOdds: number
          // 马来盘赔率
          malayOdds: number
          // 联赛id
          leagueId: string
          // 联赛名称
          leagueName: string
          // 玩法
          playId: number
          // 投注类型
          playCateId: number
          // 玩法分类代码
          playCateCode: string
          // 玩法代码
          playCode: string
          // 投注类型賽果
          playCateMatchResult: string
          // 实时比分，小金让球盘玩法结算时使用，如： 2-1
          rtScore: string
          // 开赛时间
          startTime: string | number
          // 结束时间
          endTime: string | number
          // 状态 0：未确认，1：未结算，2：赢，3：赢半，4：输，5：输半，6：和，7：已取消
          status: number
          // 下注盤口
          oddsType: string
          // 下注时赛事状态 0:早盘 1:滚球, 2:今日
          matchStatus: number
          // 国家名称
          categoryName: string
          // 国家图标
          categoryIcon: string
        }>
      }>
      // 有效投注额
      validBetAmount: number
      // 注单确定成立时间
      betConfirmTime: string
    }>
    // 注单确定成立时间
    betConfirmTime: string
    // No comments found.
    total: number
    // No comments found.
    other: {
      // 订单号
      orderNo: string
      // 用户id
      userId: number
      // 用户名
      userName: string
      // 游戏类型 FT：soccer
      gameType: string
      // 赛事赔率信息notNull
      matchOdds: Array<{
        // 主队名称国际化
        homeNameI18n: any
        // 客队名称国际化
        awayNameI18n: any
        // 玩法分类名称国际化
        playCateNameI18n: any
        // 联赛名称名称国际化
        leagueNameI18n: any
        // 玩法名称国际化
        playNameI18n: any
        // 让球名称国际化
        spreadI18n: any
        // 游戏类型 FT：soccer
        gameType: string
        // 赔率id
        oddsId: string
        // 赛事id
        matchId: string
        // 主队名称
        homeName: string
        // 主队id
        homeId: string
        // 客队名称
        awayName: string
        // 客队id
        awayId: string
        // 玩法分类名称
        playCateName: string
        // 玩法名称
        playName: string
        // 让球
        spread: string
        // 其他信息,如更优赔率的玩法名称,特定玩法的球员名称
        extInfo: string
        // 欧洲盘赔率
        odds: number
        // 香港盘赔率
        hkOdds: number
        // 印尼盘赔率
        indoOdds: number
        // 马来盘赔率
        malayOdds: number
        // 联赛id
        leagueId: string
        // 联赛名称
        leagueName: string
        // 玩法
        playId: number
        // 投注类型
        playCateId: number
        // 玩法分类代码
        playCateCode: string
        // 玩法代码
        playCode: string
        // 投注类型賽果
        playCateMatchResult: string
        // 实时比分，小金让球盘玩法结算时使用，如： 2-1
        rtScore: string
        // 开赛时间
        startTime: string | number
        // 结束时间
        endTime: string | number
        // 状态 0：未确认，1：未结算，2：赢，3：赢半，4：输，5：输半，6：和，7：已取消
        status: number
        // 下注盤口
        oddsType: string
        // 下注时赛事状态 0:早盘 1:滚球, 2:今日
        matchStatus: number
        // 国家名称
        categoryName: string
        // 国家图标
        categoryIcon: string
      }>
      // 下注金额
      stake: number
      // 注单数
      num: number
      // 下注总额
      totalAmount: number
      // 可赢额
      winnable: number
      // 总彩金，包括本金
      grossWin: number
      // 扣除本金后的赢的彩金
      netWin: number
      // 返水比例
      rebate: number
      // 返水总额
      rebateAmount: number
      // 总输赢（扣除本金加反水）
      win: number
      // 状态 0：未确认，1：未结算，2：赢，3：赢半，4：输，5：输半，6：和，7：已取消
      status: number
      // 取消原因
      cancelReason: string
      // 取消触发来源（ 0: 自动，1: 手动 ）
      cancelledBy: string
      // 下注时间
      addTime: string
      // 更新时间
      updateTime: string
      // 结算时间
      settleTime: string
      // TODAY("TODAY", "今日"), EARLY("EARLY", "早盘"), PARLAY("PARLAY", "连串")
      matchType: string
      // 0：不是串關 , 1: 串關
      parlay: number
      // 3C1：三串一，3C4：三串四
      parlayType: string
      // 币别
      currency: string
      // 会员画面金额，依盘口有不同意义(印尼/马来盘负盘口，为可赢金额 其余为下注金额)
      userPlayAmount: number
      // 玩法组合
      parlayComsDetailVOs: Array<{
        // 本组合是否是赢 0：否，1：是，6:和
        status: number
        // 下注金额
        stake: number
        // 中奖金额，包括本金
        winMoney: number
        // 玩法组合
        matchOddsVOList: Array<{
          // 主队名称国际化
          homeNameI18n: any
          // 客队名称国际化
          awayNameI18n: any
          // 玩法分类名称国际化
          playCateNameI18n: any
          // 联赛名称名称国际化
          leagueNameI18n: any
          // 玩法名称国际化
          playNameI18n: any
          // 让球名称国际化
          spreadI18n: any
          // 游戏类型 FT：soccer
          gameType: string
          // 赔率id
          oddsId: string
          // 赛事id
          matchId: string
          // 主队名称
          homeName: string
          // 主队id
          homeId: string
          // 客队名称
          awayName: string
          // 客队id
          awayId: string
          // 玩法分类名称
          playCateName: string
          // 玩法名称
          playName: string
          // 让球
          spread: string
          // 其他信息,如更优赔率的玩法名称,特定玩法的球员名称
          extInfo: string
          // 欧洲盘赔率
          odds: number
          // 香港盘赔率
          hkOdds: number
          // 印尼盘赔率
          indoOdds: number
          // 马来盘赔率
          malayOdds: number
          // 联赛id
          leagueId: string
          // 联赛名称
          leagueName: string
          // 玩法
          playId: number
          // 投注类型
          playCateId: number
          // 玩法分类代码
          playCateCode: string
          // 玩法代码
          playCode: string
          // 投注类型賽果
          playCateMatchResult: string
          // 实时比分，小金让球盘玩法结算时使用，如： 2-1
          rtScore: string
          // 开赛时间
          startTime: string | number
          // 结束时间
          endTime: string | number
          // 状态 0：未确认，1：未结算，2：赢，3：赢半，4：输，5：输半，6：和，7：已取消
          status: number
          // 下注盤口
          oddsType: string
          // 下注时赛事状态 0:早盘 1:滚球, 2:今日
          matchStatus: number
          // 国家名称
          categoryName: string
          // 国家图标
          categoryIcon: string
        }>
      }>
      // 有效投注额
      validBetAmount: number
      // 注单确定成立时间
      betConfirmTime: string
    }
  }
  // 5.赛事聊天室注单: 5.1.查询會員賽事聊天室注單
  type REQ = {
    // 賽事ID
    matchId: string
  }
}
// 5.赛事聊天室注单: 5.2.發指定曬單到送賽事聊天室
declare namespace API_BET_SENDBETTOMATCHROOM {
  // 5.赛事聊天室注单: 5.2.發指定曬單到送賽事聊天室
  type RES = {
    // No comments found.
    success: boolean
    // No comments found.
    msg: string
    // No comments found.
    code: number
  }
  // 5.赛事聊天室注单: 5.2.發指定曬單到送賽事聊天室
  type REQ = {
    // 賽事ID
    matchId: string
    // 订单号
    orderNo: string
    // 賽事聊天室id
    matchRoomId: number
  }
}
// 6.用户: 6.1.修改昵称
declare namespace API_USER_EDITNICKNAME {
  // 6.用户: 6.1.修改昵称
  type RES = {
    // No comments found.
    success: boolean
    // No comments found.
    msg: string
    // No comments found.
    code: number
  }
  // 6.用户: 6.1.修改昵称
  type REQ = {
    // 昵称
    nickName?: string
  }
}
// 6.用户: 6.2.验证token 是否过期。如果不过期返回token信息，过期返回success: false
declare namespace API_USER_CHECKTOKEN {
  // 6.用户: 6.2.验证token 是否过期。如果不过期返回token信息，过期返回success: false
  type RES = {
    // No comments found.
    success: boolean
    // No comments found.
    msg: string
    // No comments found.
    code: number
  }
}
// 6.用户: 6.3.禁言
declare namespace API_USER_USERID_GAG {
  // 6.用户: 6.3.禁言
  type RES = {
    // No comments found.
    success: boolean
    // No comments found.
    msg: string
    // No comments found.
    code: number
  }
  // 6.用户: 6.3.禁言
  type REQ = {
    // No comments found. (This is path parameter.)
    userId: number
  }
}
// 6.用户: 6.4.解除禁言
declare namespace API_USER_USERID_UNGAG {
  // 6.用户: 6.4.解除禁言
  type RES = {
    // No comments found.
    success: boolean
    // No comments found.
    msg: string
    // No comments found.
    code: number
  }
  // 6.用户: 6.4.解除禁言
  type REQ = {
    // No comments found. (This is path parameter.)
    userId: number
  }
}
// 6.用户: 6.5.踢出
declare namespace API_USER_USERID_KICK {
  // 6.用户: 6.5.踢出
  type RES = {
    // No comments found.
    success: boolean
    // No comments found.
    msg: string
    // No comments found.
    code: number
  }
  // 6.用户: 6.5.踢出
  type REQ = {
    // No comments found. (This is path parameter.)
    userId: number
  }
}
// 6.用户: 6.6.封禁
declare namespace API_USER_USERID_BANNED {
  // 6.用户: 6.6.封禁
  type RES = {
    // No comments found.
    success: boolean
    // No comments found.
    msg: string
    // No comments found.
    code: number
  }
  // 6.用户: 6.6.封禁
  type REQ = {
    // No comments found. (This is path parameter.)
    userId: number
  }
}
// 6.用户: 6.7.用户设置
declare namespace API_USER_UPDATESETTING {
  // 6.用户: 6.7.用户设置
  type RES = {
    // No comments found.
    success: boolean
    // No comments found.
    msg: string
    // No comments found.
    code: number
  }
  // 6.用户: 6.7.用户设置
  type REQ = {
    // 用户id
    userId?: number
    // 是否 显示我的投注 0:否 1:是
    isShowMyBets?: string
    // 平台id
    platformId?: number
  }
}
// 6.用户: 6.8.禁言
declare namespace API_USER_FORBIDDENSPEAK {
  // 6.用户: 6.8.禁言
  type RES = {
    // No comments found.
    success: boolean
    // No comments found.
    msg: string
    // No comments found.
    code: number
  }
  // 6.用户: 6.8.禁言
  type REQ = {
    // 用户id
    userId?: number
    // 禁言时间
    time?: number
  }
}
// 6.用户: 6.9.解禁
declare namespace API_USER_SPEAKENABLE {
  // 6.用户: 6.9.解禁
  type RES = {
    // No comments found.
    success: boolean
    // No comments found.
    msg: string
    // No comments found.
    code: number
  }
  // 6.用户: 6.9.解禁
  type REQ = {
    // 用户id
    userId?: number
    // 禁言时间
    time?: number
  }
}
