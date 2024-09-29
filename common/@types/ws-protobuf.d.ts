declare namespace WS {
  type StringMap = {
    value: { [key: string]: string }
  }
  /** MATCH_PARLAY_CHANGE 赛事串关更改事件 */
  type SwitchParlayMatchEvent = {
    status: number
    matchId: string
  }
  /** STOP_BET_CONFIRM_MATCH，MTS风控后台专用，不涉及前端 */
  type BetConfirmMatchEvent = {
    status: number
    matchId: string
  }
  type PlayOddsWithTypeVO = {
    hkOdds: string
    malayOdds: string
    indoOdds: string
    marketSort: number
    hkOddsFromSource: string
    malayOddsFromSource: string
    indoOddsFromSource: string
    mtsSelections: string
    dynamicSpread: number
    dynamicExtInfo: number
    dynamicMarket: string
    eventType: number
    group: string
    matchTime: number
    id: string
    matchId: string
    leagueId: string
    gameType: string
    playCateId: number
    playCateCode: string
    playId: number
    playCode: string
    spread: string
    odds: string
    oddsFromSource: string
    oddsType: string
    rowSort: number
    addTime: number
    updateTime: number
    statusFromSource: number
    status: number
    extInfo: string
    parlay: number
    producerId: number
    rtScore: string
    version: number
  }
  /** MTS_PLAY_ODDS ， MTS风控后台专用，不涉及前端 */
  type MtsPlayOddsEvent = {
    matchId: string
    playOddsList: Array<PlayOddsWithTypeVO>
  }
  type OddsMarginConfig = {
    id: string
    matchId: string
    playCateCode: string
    playCode1: string
    playCode2: string
    groupId: string
    margin1: number
    margin2: number
    configType: number
    oddsType: string
    pairOdds: number
  }
  /** ODDS_MARGIN_CHANGED， MTS风控后台专用，不涉及前端 */
  type OddsMarginChangedEvent = {
    configList: Array<OddsMarginConfig>
    matchId: string
  }
  type OddsSuspendConfig = {
    id: string
    eventId: string
    playCateCode: string
    playCode: string
    oddsId: string
    marketSort: number
    type: number
  }
  /** ODDS_SUSPEND_CHANGED， MTS风控后台专用，不涉及前端 */
  type OddsSuspendChangedEvent = {
    configList: Array<OddsSuspendConfig>
    matchId: string
    reason: string
  }
  type BaseSportBet = {
    uniqNo: string
    orderNo: string
    userId: number
    userName: string
    stake: string
    num: number
    totalAmount: string
    grossWin: string
    win: string
    status: number
  }
  /** ORDER_SETTLEMENT */
  type BetSettlementEvent = {
    sportBet: BaseSportBet
    isChampionship: number
  }
  /** CLOSE_PLAY_CATE */
  type ClosePlayCateEvent = {
    gameType: string
    playCateCode: string
  }
  /** DATA_SOURCE_CHANGE */
  type DataSourceChangeEvent = {}
  /** GLOBAL_STOP */
  type GlobalStopEvent = {
    producerId: number
    oddsIdPrefix: string
  }
  /** LEAGUE_CHANGE */
  type LeagueChangeEvent = {
    leagueIdList: Array<string>
    matchIdList: Array<string>
    gameType: string
  }
  /** MATCH_STATUS_SWITCH */
  type MatchStatusSwitchEvent = {
    matchIdList: Array<string>
    gameType: string
    isOpen: boolean
  }
  /** MATCH_CLOCK */
  type MatchClockEvent = {
    matchId: string
    eventDate: number
    scheduledTime: number
    matchTime: number
    stoppageTime: number
    stoppageTimeAnnounced: number
    remainingTime: number
    remainingTimeInPeriod: number
    stopped: number
    gameType: string
    matchTimeMinute: number
    remainingTimeInPeriodMinute: number
    showTimeStyle: number
  }
  type PlayCateTypeVO = {
    code: string
    name: string
    gameType: string
    sort: number
    remark: string
  }
  type NullableOddsWithPlayNameVO = {
    null: null
    oddsWithPlayNameVO: OddsWithPlayNameVO
  }
  type OddsWithPlayNameVO = {
    id: string
    name: string
    extInfo: string
    spread: string
    odds: string
    marketSort: number
    status: number
    producerId: number
    playCode: string
    rowSort: number
    nameMap: { [key: string]: string }
    extInfoMap: { [key: string]: string }
    version: number
  }
  type OddsDetailVO = {
    playCateCode: string
    typeCodes: string
    name: string
    odds: Array<NullableOddsWithPlayNameVO>
    rowSort: number
  }
  /** MATCH_ODDS_CHANGE */
  type MatchOddsChangeEvent = {
    eventId: string
    isLongTermEvent: number
    playCateTypeList: Array<PlayCateTypeVO>
    oddsList: Array<OddsDetailVO>
    gameType: string
    eventType: string
    updateMode: number
  }
  /** MATCH_ODDS_LOCK */
  type MatchOddsLockEvent = {
    matchId: string
    outright: boolean
  }
  type MatchStatusCO = {
    dataId: string
    matchId: string
    status: number
    statusName: string
    gameType: string
    homeTotalScore: string
    awayTotalScore: string
    homeScore: string
    awayScore: string
    homeHalfScore: string
    awayHalfScore: string
    homePoints: string
    awayPoints: string
    homeCornerKicks: number
    awayCornerKicks: number
    homeCards: number
    awayCards: number
    homeYellowCards: number
    awayYellowCards: number
    homeOver: string
    awayOver: string
    homeOut: string
    awayOut: string
    attack: string
    halfStatus: number
    firstBaseBag: string
    secBaseBag: string
    thirdBaseBag: string
    outNumber: string
    time: number
    latestStatus: number
    showPeriod: string
    periods: Array<Period>
    players: Array<Player>
    cashOutStatus: number
  }
  type Period = {
    status: number
    statusName: string
    homeScore: string
    awayScore: string
    homeCornerKicks: number
    awayCornerKicks: number
    homeCards: string
    awayCards: string
    homeYellowCards: number
    awayYellowCards: number
  }
  type Player = {
    name: string
    score: string
    order: number
  }
  type SimpleMatchStatusVO = {
    statusCode: number
    statusName: string
    homeScore: string
    awayScore: string
  }
  /** MATCH_STATUS_CHANGE */
  type MatchStatusChangeEvent = {
    matchStatusCO: MatchStatusCO
    matchStatusList: Array<SimpleMatchStatusVO>
  }
  /** NOTICE */
  type NoticeEvent = {
    message: string
  }
  type NullableOddsVO = {
    null: null
    oddsVO: OddsVO
  }
  type OddsVO = {
    id: string
    name: string
    spread: string
    extInfo: string
    odds: string
    marketSort: number
    status: number
    producerId: number
    gameType: string
    playCateId: number
    playCateCode: string
    nameMap: { [key: string]: string }
    extInfoMap: { [key: string]: string }
    playCode: string
    group: string
    version: number
  }
  type OddsMarketVO = {
    playCateCode: string
    oddsList: Array<NullableOddsVO>
  }
  type QuickPlayCateVO = {
    gameType: string
    code: string
    name: string
    sort: number
  }
  /** ODDS_CHANGE */
  type OddsChangeEvent = {
    eventId: string
    isLongTermEvent: number
    oddsList: Array<OddsMarketVO>
    gameType: string
    quickPlayCateList: Array<QuickPlayCateVO>
    dynamicMarkets: { [key: string]: StringMap }
    playCateNum: number
    updateMode: number
  }
  /** PING_PONG */
  type PingPongEvent = {
    message: string
  }
  type PlayQuotaCom = {
    id: number
    code: string
    name: string
    min: string
    max: string
    platformId: number
    gameType: string
  }
  /** PLAY_QUOTA_CHANGE */
  type PlayQuotaChangeEvent = {
    playQuotaComMap: { [key: string]: PlayQuotaCom }
  }
  /** PRODUCER_UP */
  type ProducerUpEvent = {
    producerId: number
  }
  /** SYS_MAINTENANCE */
  type SysMaintainEvent = {
    status: number
  }
  /** SPORT_MAINTENANCE */
  type SportMaintainEvent = {
    status: number
  }
  /** CHATROOM_SWITCH */
  type ChatroomSwitchEvent = {
    status: number
  }
  /** MATCH_CHATROOM_SWITCH */
  type MatchChatroomSwitchEvent = {
    status: number
  }
  /** CASHOUT_STATUS */
  type CashoutSwitchEvent = {
    status: number
  }
  type CashoutMatchStatusEvent = {
    cashoutMatchStatusList: Array<CashoutMatchStatusVO>
  }
  type CashoutMatchStatusVO = {
    matchId: string
    status: number
  }
  /** USER_DISCOUNT_CHANGE */
  type UserDiscountChangeEvent = {
    discount: string
    discountByGameTypeList: Array<DiscountByGameTypeVO>
  }
  type DiscountByGameTypeVO = {
    discount: string
    gameType: string
  }
  /** USER_INFO_CHANGE */
  type UserInfoChangeEvent = {}
  type UserLevelConfig = {
    id: number
    code: string
    name: string
    growthThreshold: number
    maxBetMoney: number
    maxParlayBetMoney: number
    maxCpBetMoney: number
  }
  /** USER_LEVEL_CONFIG_CHANGE */
  type UserLevelConfigChangeEvent = {
    userLevelConfigList: Array<UserLevelConfig>
  }
  /** LOCK_MONEY */
  type UserLockMoneyEvent = {
    lockMoney: string
    uwEnableTime: number
  }
  /** USER_MONEY */
  type UserMoneyEvent = {
    money: string
  }
  type UserNotice = {
    id: number
    userId: number
    userName: string
    addDate: number
    title: string
    content: string
    operatorId: number
    operatorName: string
    isRead: number
    tempId: number
    noticeType: number
    msgShowType: number
    status: number
    platformId: number
  }
  /** USER_NOTICE */
  type UserNoticeEvent = {
    userNoticeList: Array<UserNotice>
  }
  /** USER_RECH_CFG */
  type UserRechCfgEvent = {}
  type League = {
    id: string
    name: string
    categoryCode: string
    category: string
    categoryIcon: string
  }
  type MatchInfo = {
    id: string
    leagueId: string
    leagueName: string
    homeId: string
    homeName: string
    awayId: string
    awayName: string
    startTime: number
    endTime: number
    status: number
    playCateNum: number
    name: string
    img: string
    msg: string
    parlay: number
    liveVideo: number
    neutral: number
    eps: number
    spt: number
    trackerId: string
    tvId: string
    streamId: string
    gameType: string
    source: number
    homeIcon: string
    homeIconSvg: string
    awayIcon: string
    awayIconSvg: string
    inplay: number
    isLive: number
    roundNo: string
    streamerIcon: string
    streamerName: string
    frontCoverUrl: string
  }
  type MobileHotHandicapVO = {
    league: League
    matchInfo: MatchInfo
    oddsSort: string
    sportName: string
  }
  type MobileLiveRoundHallEvent = {
    mobileHotHandicapVOList: Array<MobileHotHandicapVO>
  }
  type BetCashOutEvent = {
    sportBet: BaseSportBet
    isChampionship: number
    cashOutStatus: number
  }
  type Event = {
    eventType: string
    betConfirmMatchEvent: BetConfirmMatchEvent
    betSettlementEvent: BetSettlementEvent
    closePlayCateEvent: ClosePlayCateEvent
    dataSourceChangeEvent: DataSourceChangeEvent
    globalStopEvent: GlobalStopEvent
    leagueChangeEvent: LeagueChangeEvent
    matchClockEvent: MatchClockEvent
    matchOddsChangeEvent: MatchOddsChangeEvent
    matchOddsLockEvent: MatchOddsLockEvent
    matchStatusChangeEvent: MatchStatusChangeEvent
    mtsPlayOddsEvent: MtsPlayOddsEvent
    noticeEvent: NoticeEvent
    oddsChangeEvent: OddsChangeEvent
    oddsMarginChangedEvent: OddsMarginChangedEvent
    oddsSuspendChangedEvent: OddsSuspendChangedEvent
    pingPongEvent: PingPongEvent
    playQuotaChangeEvent: PlayQuotaChangeEvent
    producerUpEvent: ProducerUpEvent
    sysMaintainEvent: SysMaintainEvent
    userDiscountChangeEvent: UserDiscountChangeEvent
    userInfoChangeEvent: UserInfoChangeEvent
    userLevelConfigChangeEvent: UserLevelConfigChangeEvent
    userLockMoneyEvent: UserLockMoneyEvent
    userMoneyEvent: UserMoneyEvent
    userNoticeEvent: UserNoticeEvent
    userRechCfgEvent: UserRechCfgEvent
    mobileLiveRoundHallEvent: MobileLiveRoundHallEvent
    matchStatusSwitchEvent: MatchStatusSwitchEvent
    sportMaintainEvent: SportMaintainEvent
    switchParlayMatchEvent: SwitchParlayMatchEvent
    matchChatroomSwitchEvent: MatchChatroomSwitchEvent
    chatroomSwitchEvent: ChatroomSwitchEvent
    betCashOutEvent: BetCashOutEvent
    cashoutSwitchEvent: CashoutSwitchEvent
    cashoutMatchStatusEvent: CashoutMatchStatusEvent
  }
  /** 对外公开协议，统一为Events */
  type Events = {
    events: Array<Event>
  }
  type google = {}
}
