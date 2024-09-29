// 1.体育新版菜单接口: 1.1.返回指定画面(EX:滚球,早盘,冠军)下有赔率的球类及菜单
declare namespace API_V1_SPORT_QUERY {
  // 1.体育新版菜单接口: 1.1.返回指定画面(EX:滚球,早盘,冠军)下有赔率的球类及菜单
  type RES = {
    // No comments found.
    success: boolean
    // No comments found.
    msg: string
    // No comments found.
    code: number
    // No comments found.
    t: {
      // 比赛总数量
      num: number
      // 菜单分类,如：滚球
      items: Array<{
        // 体育名称,如：足球
        name: string
        // 体育代码,如：FT
        code: string
        // 总数量
        num: number
        // 赛事数量
        matchNum: number
        // 冠軍比赛数量
        outRightNum: number
        // 排序号
        sortNum: number
        // 玩法分类类型菜单列表
        play: Array<{
          // 玩法菜单code
          code: string
          // 玩法菜单名称
          name: string
          // 赔率大厅画面用, 1:菜单玩法支持下拉选项 0:不支持下拉选项
          selectionType: number
          // 数量
          num: number
          // 菜单底下包含的玩法类(List格式)
          playCateList: Array<{
            // 代码
            code: string
            // 玩法类名称，如：让球, 大/小
            name: string
            // 排序
            rowSort: number
            // 各语系玩法名称
            playCateNameMap: any
          }>
          // 各语系菜单名称
          nameMap: any
          // 玩法排序
          oddsSort: string
          // 玩法显示名称
          playCateNameMap: any
          // 菜单下包含的玩法类(Map格式)
          playCateMap: {
            [key: string]: {
              // 代码
              code: string
              // 玩法类名称，如：让球, 大/小
              name: string
              // 排序
              rowSort: number
              // 各语系玩法名称
              playCateNameMap: any
            }
          }
        }>
        // 是否存在滚盘中赛事，0：否，1：是
        existInPlay: number
        // 玩法菜单列表code
        playCateMenuCodeList: any[]
        // 国家列表
        categoryList: Array<{
          // 主键
          id: string
          // 游戏类型 (FT:足球，BK:篮球,TN:网球, VB:网球,BM：羽球)
          gameType: string
          // 分类名称notNull
          name: string
          // 分类code
          code: string
          // 图标,svg的html元素(已进行UrlEncoded)
          icon: string
          // 联赛列表notNull
          list: Array<{
            // 联赛id
            id: string
            // 名称
            name: string
            // 赛事数量
            num: number
            // 排序
            sort: number
            // 联盟icon
            icon: string
          }>
          // 赛事/赛季数量notNull
          num: number
          // 排序
          sort: number
        }>
      }>
      // 排序
      sort: number
      // 赛事比赛数量
      matchNum: number
      // 冠軍比赛数量
      outRightNum: number
    }
  }
  // 1.体育新版菜单接口: 1.1.返回指定画面(EX:滚球,早盘,冠军)下有赔率的球类及菜单
  type REQ = {
    // 当下时间（时间戳格式）
    now: string | number
    // 今日开始时间（00:00:00的时间戳格式）
    todayStart: string | number
    // 赛事类型,eg: INPLAY(滚球）, ATSTART（即将开赛）, IN1HR(近1小時), IN3HR(近3小時),IN6HR(近6小時), IN12HR(近12小時), IN24HR(近24小時), TODAY（今日）, EARLY(早盘), OUTRIGHT（冠军）, PARLAY（串连）, EPS(特优赔率）, MYEVENT(我的赛事）, CATEGORY(参赛表）sc:xxx （特殊参赛表（专题）例如：奥运会冠军）, CS (波胆)
    matchType: string
    // 联赛或赛季id列表
    leagueIdList?: any[]
    // 赛事id列表(我的赛事接口才需要的参数,传入会员已加入最爱的赛事id列表)
    matchIdList?: any[]
    // Season id列表(我的赛事接口才需要的参数,传入会员已加入最爱的赛事id列表)
    seasonIdList?: any[]
    // 球类编码,目前只有使用参赛表访问时需要传此参数
    gameType?: string
  }
}
// 1.体育新版菜单接口: 1.2.手机版体育菜单,免登入即可访问
declare namespace API_V1_SPORT_MOBILE_MENU {
  // 1.体育新版菜单接口: 1.2.手机版体育菜单,免登入即可访问
  type RES = {
    // No comments found.
    success: boolean
    // No comments found.
    msg: string
    // No comments found.
    code: number
    // No comments found.
    t: {
      // No comments found.
      menu: {
        // 滚球
        inPlay: {
          // 比赛总数量
          num: number
          // 菜单分类,如：滚球
          items: Array<{
            // 体育名称,如：足球
            name: string
            // 体育代码,如：FT
            code: string
            // 总数量
            num: number
            // 赛事数量
            matchNum: number
            // 冠軍比赛数量
            outRightNum: number
            // 排序号
            sortNum: number
            // 玩法分类类型菜单列表
            play: Array<{
              // 玩法菜单code
              code: string
              // 玩法菜单名称
              name: string
              // 赔率大厅画面用, 1:菜单玩法支持下拉选项 0:不支持下拉选项
              selectionType: number
              // 数量
              num: number
              // 菜单底下包含的玩法类(List格式)
              playCateList: Array<{
                // 代码
                code: string
                // 玩法类名称，如：让球, 大/小
                name: string
                // 排序
                rowSort: number
                // 各语系玩法名称
                playCateNameMap: any
              }>
              // 各语系菜单名称
              nameMap: any
              // 玩法排序
              oddsSort: string
              // 玩法显示名称
              playCateNameMap: any
              // 菜单下包含的玩法类(Map格式)
              playCateMap: {
                [key: string]: {
                  // 代码
                  code: string
                  // 玩法类名称，如：让球, 大/小
                  name: string
                  // 排序
                  rowSort: number
                  // 各语系玩法名称
                  playCateNameMap: any
                }
              }
            }>
            // 是否存在滚盘中赛事，0：否，1：是
            existInPlay: number
            // 玩法菜单列表code
            playCateMenuCodeList: any[]
            // 国家列表
            categoryList: Array<{
              // 主键
              id: string
              // 游戏类型 (FT:足球，BK:篮球,TN:网球, VB:网球,BM：羽球)
              gameType: string
              // 分类名称notNull
              name: string
              // 分类code
              code: string
              // 图标,svg的html元素(已进行UrlEncoded)
              icon: string
              // 联赛列表notNull
              list: Array<{
                // 联赛id
                id: string
                // 名称
                name: string
                // 赛事数量
                num: number
                // 排序
                sort: number
                // 联盟icon
                icon: string
              }>
              // 赛事/赛季数量notNull
              num: number
              // 排序
              sort: number
            }>
          }>
          // 排序
          sort: number
          // 赛事比赛数量
          matchNum: number
          // 冠軍比赛数量
          outRightNum: number
        }
        // 今日盘
        today: {
          // 比赛总数量
          num: number
          // 菜单分类,如：滚球
          items: Array<{
            // 体育名称,如：足球
            name: string
            // 体育代码,如：FT
            code: string
            // 总数量
            num: number
            // 赛事数量
            matchNum: number
            // 冠軍比赛数量
            outRightNum: number
            // 排序号
            sortNum: number
            // 玩法分类类型菜单列表
            play: Array<{
              // 玩法菜单code
              code: string
              // 玩法菜单名称
              name: string
              // 赔率大厅画面用, 1:菜单玩法支持下拉选项 0:不支持下拉选项
              selectionType: number
              // 数量
              num: number
              // 菜单底下包含的玩法类(List格式)
              playCateList: Array<{
                // 代码
                code: string
                // 玩法类名称，如：让球, 大/小
                name: string
                // 排序
                rowSort: number
                // 各语系玩法名称
                playCateNameMap: any
              }>
              // 各语系菜单名称
              nameMap: any
              // 玩法排序
              oddsSort: string
              // 玩法显示名称
              playCateNameMap: any
              // 菜单下包含的玩法类(Map格式)
              playCateMap: {
                [key: string]: {
                  // 代码
                  code: string
                  // 玩法类名称，如：让球, 大/小
                  name: string
                  // 排序
                  rowSort: number
                  // 各语系玩法名称
                  playCateNameMap: any
                }
              }
            }>
            // 是否存在滚盘中赛事，0：否，1：是
            existInPlay: number
            // 玩法菜单列表code
            playCateMenuCodeList: any[]
            // 国家列表
            categoryList: Array<{
              // 主键
              id: string
              // 游戏类型 (FT:足球，BK:篮球,TN:网球, VB:网球,BM：羽球)
              gameType: string
              // 分类名称notNull
              name: string
              // 分类code
              code: string
              // 图标,svg的html元素(已进行UrlEncoded)
              icon: string
              // 联赛列表notNull
              list: Array<{
                // 联赛id
                id: string
                // 名称
                name: string
                // 赛事数量
                num: number
                // 排序
                sort: number
                // 联盟icon
                icon: string
              }>
              // 赛事/赛季数量notNull
              num: number
              // 排序
              sort: number
            }>
          }>
          // 排序
          sort: number
          // 赛事比赛数量
          matchNum: number
          // 冠軍比赛数量
          outRightNum: number
        }
        // 早盘
        early: {
          // 比赛总数量
          num: number
          // 菜单分类,如：滚球
          items: Array<{
            // 体育名称,如：足球
            name: string
            // 体育代码,如：FT
            code: string
            // 总数量
            num: number
            // 赛事数量
            matchNum: number
            // 冠軍比赛数量
            outRightNum: number
            // 排序号
            sortNum: number
            // 玩法分类类型菜单列表
            play: Array<{
              // 玩法菜单code
              code: string
              // 玩法菜单名称
              name: string
              // 赔率大厅画面用, 1:菜单玩法支持下拉选项 0:不支持下拉选项
              selectionType: number
              // 数量
              num: number
              // 菜单底下包含的玩法类(List格式)
              playCateList: Array<{
                // 代码
                code: string
                // 玩法类名称，如：让球, 大/小
                name: string
                // 排序
                rowSort: number
                // 各语系玩法名称
                playCateNameMap: any
              }>
              // 各语系菜单名称
              nameMap: any
              // 玩法排序
              oddsSort: string
              // 玩法显示名称
              playCateNameMap: any
              // 菜单下包含的玩法类(Map格式)
              playCateMap: {
                [key: string]: {
                  // 代码
                  code: string
                  // 玩法类名称，如：让球, 大/小
                  name: string
                  // 排序
                  rowSort: number
                  // 各语系玩法名称
                  playCateNameMap: any
                }
              }
            }>
            // 是否存在滚盘中赛事，0：否，1：是
            existInPlay: number
            // 玩法菜单列表code
            playCateMenuCodeList: any[]
            // 国家列表
            categoryList: Array<{
              // 主键
              id: string
              // 游戏类型 (FT:足球，BK:篮球,TN:网球, VB:网球,BM：羽球)
              gameType: string
              // 分类名称notNull
              name: string
              // 分类code
              code: string
              // 图标,svg的html元素(已进行UrlEncoded)
              icon: string
              // 联赛列表notNull
              list: Array<{
                // 联赛id
                id: string
                // 名称
                name: string
                // 赛事数量
                num: number
                // 排序
                sort: number
                // 联盟icon
                icon: string
              }>
              // 赛事/赛季数量notNull
              num: number
              // 排序
              sort: number
            }>
          }>
          // 排序
          sort: number
          // 赛事比赛数量
          matchNum: number
          // 冠軍比赛数量
          outRightNum: number
        }
        // 连串盘
        parlay: {
          // 比赛总数量
          num: number
          // 菜单分类,如：滚球
          items: Array<{
            // 体育名称,如：足球
            name: string
            // 体育代码,如：FT
            code: string
            // 总数量
            num: number
            // 赛事数量
            matchNum: number
            // 冠軍比赛数量
            outRightNum: number
            // 排序号
            sortNum: number
            // 玩法分类类型菜单列表
            play: Array<{
              // 玩法菜单code
              code: string
              // 玩法菜单名称
              name: string
              // 赔率大厅画面用, 1:菜单玩法支持下拉选项 0:不支持下拉选项
              selectionType: number
              // 数量
              num: number
              // 菜单底下包含的玩法类(List格式)
              playCateList: Array<{
                // 代码
                code: string
                // 玩法类名称，如：让球, 大/小
                name: string
                // 排序
                rowSort: number
                // 各语系玩法名称
                playCateNameMap: any
              }>
              // 各语系菜单名称
              nameMap: any
              // 玩法排序
              oddsSort: string
              // 玩法显示名称
              playCateNameMap: any
              // 菜单下包含的玩法类(Map格式)
              playCateMap: {
                [key: string]: {
                  // 代码
                  code: string
                  // 玩法类名称，如：让球, 大/小
                  name: string
                  // 排序
                  rowSort: number
                  // 各语系玩法名称
                  playCateNameMap: any
                }
              }
            }>
            // 是否存在滚盘中赛事，0：否，1：是
            existInPlay: number
            // 玩法菜单列表code
            playCateMenuCodeList: any[]
            // 国家列表
            categoryList: Array<{
              // 主键
              id: string
              // 游戏类型 (FT:足球，BK:篮球,TN:网球, VB:网球,BM：羽球)
              gameType: string
              // 分类名称notNull
              name: string
              // 分类code
              code: string
              // 图标,svg的html元素(已进行UrlEncoded)
              icon: string
              // 联赛列表notNull
              list: Array<{
                // 联赛id
                id: string
                // 名称
                name: string
                // 赛事数量
                num: number
                // 排序
                sort: number
                // 联盟icon
                icon: string
              }>
              // 赛事/赛季数量notNull
              num: number
              // 排序
              sort: number
            }>
          }>
          // 排序
          sort: number
          // 赛事比赛数量
          matchNum: number
          // 冠軍比赛数量
          outRightNum: number
        }
        // 冠军
        outright: {
          // 比赛总数量
          num: number
          // 菜单分类,如：滚球
          items: Array<{
            // 体育名称,如：足球
            name: string
            // 体育代码,如：FT
            code: string
            // 总数量
            num: number
            // 赛事数量
            matchNum: number
            // 冠軍比赛数量
            outRightNum: number
            // 排序号
            sortNum: number
            // 玩法分类类型菜单列表
            play: Array<{
              // 玩法菜单code
              code: string
              // 玩法菜单名称
              name: string
              // 赔率大厅画面用, 1:菜单玩法支持下拉选项 0:不支持下拉选项
              selectionType: number
              // 数量
              num: number
              // 菜单底下包含的玩法类(List格式)
              playCateList: Array<{
                // 代码
                code: string
                // 玩法类名称，如：让球, 大/小
                name: string
                // 排序
                rowSort: number
                // 各语系玩法名称
                playCateNameMap: any
              }>
              // 各语系菜单名称
              nameMap: any
              // 玩法排序
              oddsSort: string
              // 玩法显示名称
              playCateNameMap: any
              // 菜单下包含的玩法类(Map格式)
              playCateMap: {
                [key: string]: {
                  // 代码
                  code: string
                  // 玩法类名称，如：让球, 大/小
                  name: string
                  // 排序
                  rowSort: number
                  // 各语系玩法名称
                  playCateNameMap: any
                }
              }
            }>
            // 是否存在滚盘中赛事，0：否，1：是
            existInPlay: number
            // 玩法菜单列表code
            playCateMenuCodeList: any[]
            // 国家列表
            categoryList: Array<{
              // 主键
              id: string
              // 游戏类型 (FT:足球，BK:篮球,TN:网球, VB:网球,BM：羽球)
              gameType: string
              // 分类名称notNull
              name: string
              // 分类code
              code: string
              // 图标,svg的html元素(已进行UrlEncoded)
              icon: string
              // 联赛列表notNull
              list: Array<{
                // 联赛id
                id: string
                // 名称
                name: string
                // 赛事数量
                num: number
                // 排序
                sort: number
                // 联盟icon
                icon: string
              }>
              // 赛事/赛季数量notNull
              num: number
              // 排序
              sort: number
            }>
          }>
          // 排序
          sort: number
          // 赛事比赛数量
          matchNum: number
          // 冠軍比赛数量
          outRightNum: number
        }
        // 特优赔率
        eps: {
          // 比赛总数量
          num: number
          // 菜单分类,如：滚球
          items: Array<{
            // 体育名称,如：足球
            name: string
            // 体育代码,如：FT
            code: string
            // 总数量
            num: number
            // 赛事数量
            matchNum: number
            // 冠軍比赛数量
            outRightNum: number
            // 排序号
            sortNum: number
            // 玩法分类类型菜单列表
            play: Array<{
              // 玩法菜单code
              code: string
              // 玩法菜单名称
              name: string
              // 赔率大厅画面用, 1:菜单玩法支持下拉选项 0:不支持下拉选项
              selectionType: number
              // 数量
              num: number
              // 菜单底下包含的玩法类(List格式)
              playCateList: Array<{
                // 代码
                code: string
                // 玩法类名称，如：让球, 大/小
                name: string
                // 排序
                rowSort: number
                // 各语系玩法名称
                playCateNameMap: any
              }>
              // 各语系菜单名称
              nameMap: any
              // 玩法排序
              oddsSort: string
              // 玩法显示名称
              playCateNameMap: any
              // 菜单下包含的玩法类(Map格式)
              playCateMap: {
                [key: string]: {
                  // 代码
                  code: string
                  // 玩法类名称，如：让球, 大/小
                  name: string
                  // 排序
                  rowSort: number
                  // 各语系玩法名称
                  playCateNameMap: any
                }
              }
            }>
            // 是否存在滚盘中赛事，0：否，1：是
            existInPlay: number
            // 玩法菜单列表code
            playCateMenuCodeList: any[]
            // 国家列表
            categoryList: Array<{
              // 主键
              id: string
              // 游戏类型 (FT:足球，BK:篮球,TN:网球, VB:网球,BM：羽球)
              gameType: string
              // 分类名称notNull
              name: string
              // 分类code
              code: string
              // 图标,svg的html元素(已进行UrlEncoded)
              icon: string
              // 联赛列表notNull
              list: Array<{
                // 联赛id
                id: string
                // 名称
                name: string
                // 赛事数量
                num: number
                // 排序
                sort: number
                // 联盟icon
                icon: string
              }>
              // 赛事/赛季数量notNull
              num: number
              // 排序
              sort: number
            }>
          }>
          // 排序
          sort: number
          // 赛事比赛数量
          matchNum: number
          // 冠軍比赛数量
          outRightNum: number
        }
        // 波胆菜单
        cs: {
          // 比赛总数量
          num: number
          // 菜单分类,如：滚球
          items: Array<{
            // 体育名称,如：足球
            name: string
            // 体育代码,如：FT
            code: string
            // 总数量
            num: number
            // 赛事数量
            matchNum: number
            // 冠軍比赛数量
            outRightNum: number
            // 排序号
            sortNum: number
            // 玩法分类类型菜单列表
            play: Array<{
              // 玩法菜单code
              code: string
              // 玩法菜单名称
              name: string
              // 赔率大厅画面用, 1:菜单玩法支持下拉选项 0:不支持下拉选项
              selectionType: number
              // 数量
              num: number
              // 菜单底下包含的玩法类(List格式)
              playCateList: Array<{
                // 代码
                code: string
                // 玩法类名称，如：让球, 大/小
                name: string
                // 排序
                rowSort: number
                // 各语系玩法名称
                playCateNameMap: any
              }>
              // 各语系菜单名称
              nameMap: any
              // 玩法排序
              oddsSort: string
              // 玩法显示名称
              playCateNameMap: any
              // 菜单下包含的玩法类(Map格式)
              playCateMap: {
                [key: string]: {
                  // 代码
                  code: string
                  // 玩法类名称，如：让球, 大/小
                  name: string
                  // 排序
                  rowSort: number
                  // 各语系玩法名称
                  playCateNameMap: any
                }
              }
            }>
            // 是否存在滚盘中赛事，0：否，1：是
            existInPlay: number
            // 玩法菜单列表code
            playCateMenuCodeList: any[]
            // 国家列表
            categoryList: Array<{
              // 主键
              id: string
              // 游戏类型 (FT:足球，BK:篮球,TN:网球, VB:网球,BM：羽球)
              gameType: string
              // 分类名称notNull
              name: string
              // 分类code
              code: string
              // 图标,svg的html元素(已进行UrlEncoded)
              icon: string
              // 联赛列表notNull
              list: Array<{
                // 联赛id
                id: string
                // 名称
                name: string
                // 赛事数量
                num: number
                // 排序
                sort: number
                // 联盟icon
                icon: string
              }>
              // 赛事/赛季数量notNull
              num: number
              // 排序
              sort: number
            }>
          }>
          // 排序
          sort: number
          // 赛事比赛数量
          matchNum: number
          // 冠軍比赛数量
          outRightNum: number
        }
        // 我的赛事
        myFavorite: {
          // 比赛总数量
          num: number
          // 菜单分类,如：滚球
          items: Array<{
            // 体育名称,如：足球
            name: string
            // 体育代码,如：FT
            code: string
            // 总数量
            num: number
            // 赛事数量
            matchNum: number
            // 冠軍比赛数量
            outRightNum: number
            // 排序号
            sortNum: number
            // 玩法分类类型菜单列表
            play: Array<{
              // 玩法菜单code
              code: string
              // 玩法菜单名称
              name: string
              // 赔率大厅画面用, 1:菜单玩法支持下拉选项 0:不支持下拉选项
              selectionType: number
              // 数量
              num: number
              // 菜单底下包含的玩法类(List格式)
              playCateList: Array<{
                // 代码
                code: string
                // 玩法类名称，如：让球, 大/小
                name: string
                // 排序
                rowSort: number
                // 各语系玩法名称
                playCateNameMap: any
              }>
              // 各语系菜单名称
              nameMap: any
              // 玩法排序
              oddsSort: string
              // 玩法显示名称
              playCateNameMap: any
              // 菜单下包含的玩法类(Map格式)
              playCateMap: {
                [key: string]: {
                  // 代码
                  code: string
                  // 玩法类名称，如：让球, 大/小
                  name: string
                  // 排序
                  rowSort: number
                  // 各语系玩法名称
                  playCateNameMap: any
                }
              }
            }>
            // 是否存在滚盘中赛事，0：否，1：是
            existInPlay: number
            // 玩法菜单列表code
            playCateMenuCodeList: any[]
            // 国家列表
            categoryList: Array<{
              // 主键
              id: string
              // 游戏类型 (FT:足球，BK:篮球,TN:网球, VB:网球,BM：羽球)
              gameType: string
              // 分类名称notNull
              name: string
              // 分类code
              code: string
              // 图标,svg的html元素(已进行UrlEncoded)
              icon: string
              // 联赛列表notNull
              list: Array<{
                // 联赛id
                id: string
                // 名称
                name: string
                // 赛事数量
                num: number
                // 排序
                sort: number
                // 联盟icon
                icon: string
              }>
              // 赛事/赛季数量notNull
              num: number
              // 排序
              sort: number
            }>
          }>
          // 排序
          sort: number
          // 赛事比赛数量
          matchNum: number
          // 冠軍比赛数量
          outRightNum: number
        }
      }
      // 即将开始
      atStart: {
        // 比赛总数量
        num: number
        // 菜单分类,如：滚球
        items: Array<{
          // 体育名称,如：足球
          name: string
          // 体育代码,如：FT
          code: string
          // 总数量
          num: number
          // 赛事数量
          matchNum: number
          // 冠軍比赛数量
          outRightNum: number
          // 排序号
          sortNum: number
          // 玩法分类类型菜单列表
          play: Array<{
            // 玩法菜单code
            code: string
            // 玩法菜单名称
            name: string
            // 赔率大厅画面用, 1:菜单玩法支持下拉选项 0:不支持下拉选项
            selectionType: number
            // 数量
            num: number
            // 菜单底下包含的玩法类(List格式)
            playCateList: Array<{
              // 代码
              code: string
              // 玩法类名称，如：让球, 大/小
              name: string
              // 排序
              rowSort: number
              // 各语系玩法名称
              playCateNameMap: any
            }>
            // 各语系菜单名称
            nameMap: any
            // 玩法排序
            oddsSort: string
            // 玩法显示名称
            playCateNameMap: any
            // 菜单下包含的玩法类(Map格式)
            playCateMap: {
              [key: string]: {
                // 代码
                code: string
                // 玩法类名称，如：让球, 大/小
                name: string
                // 排序
                rowSort: number
                // 各语系玩法名称
                playCateNameMap: any
              }
            }
          }>
          // 是否存在滚盘中赛事，0：否，1：是
          existInPlay: number
          // 玩法菜单列表code
          playCateMenuCodeList: any[]
          // 国家列表
          categoryList: Array<{
            // 主键
            id: string
            // 游戏类型 (FT:足球，BK:篮球,TN:网球, VB:网球,BM：羽球)
            gameType: string
            // 分类名称notNull
            name: string
            // 分类code
            code: string
            // 图标,svg的html元素(已进行UrlEncoded)
            icon: string
            // 联赛列表notNull
            list: Array<{
              // 联赛id
              id: string
              // 名称
              name: string
              // 赛事数量
              num: number
              // 排序
              sort: number
              // 联盟icon
              icon: string
            }>
            // 赛事/赛季数量notNull
            num: number
            // 排序
            sort: number
          }>
        }>
        // 排序
        sort: number
        // 赛事比赛数量
        matchNum: number
        // 冠軍比赛数量
        outRightNum: number
      }
      // IN12HR
      in12hr: {
        // 比赛总数量
        num: number
        // 菜单分类,如：滚球
        items: Array<{
          // 体育名称,如：足球
          name: string
          // 体育代码,如：FT
          code: string
          // 总数量
          num: number
          // 赛事数量
          matchNum: number
          // 冠軍比赛数量
          outRightNum: number
          // 排序号
          sortNum: number
          // 玩法分类类型菜单列表
          play: Array<{
            // 玩法菜单code
            code: string
            // 玩法菜单名称
            name: string
            // 赔率大厅画面用, 1:菜单玩法支持下拉选项 0:不支持下拉选项
            selectionType: number
            // 数量
            num: number
            // 菜单底下包含的玩法类(List格式)
            playCateList: Array<{
              // 代码
              code: string
              // 玩法类名称，如：让球, 大/小
              name: string
              // 排序
              rowSort: number
              // 各语系玩法名称
              playCateNameMap: any
            }>
            // 各语系菜单名称
            nameMap: any
            // 玩法排序
            oddsSort: string
            // 玩法显示名称
            playCateNameMap: any
            // 菜单下包含的玩法类(Map格式)
            playCateMap: {
              [key: string]: {
                // 代码
                code: string
                // 玩法类名称，如：让球, 大/小
                name: string
                // 排序
                rowSort: number
                // 各语系玩法名称
                playCateNameMap: any
              }
            }
          }>
          // 是否存在滚盘中赛事，0：否，1：是
          existInPlay: number
          // 玩法菜单列表code
          playCateMenuCodeList: any[]
          // 国家列表
          categoryList: Array<{
            // 主键
            id: string
            // 游戏类型 (FT:足球，BK:篮球,TN:网球, VB:网球,BM：羽球)
            gameType: string
            // 分类名称notNull
            name: string
            // 分类code
            code: string
            // 图标,svg的html元素(已进行UrlEncoded)
            icon: string
            // 联赛列表notNull
            list: Array<{
              // 联赛id
              id: string
              // 名称
              name: string
              // 赛事数量
              num: number
              // 排序
              sort: number
              // 联盟icon
              icon: string
            }>
            // 赛事/赛季数量notNull
            num: number
            // 排序
            sort: number
          }>
        }>
        // 排序
        sort: number
        // 赛事比赛数量
        matchNum: number
        // 冠軍比赛数量
        outRightNum: number
      }
      // IN24HR
      in24hr: {
        // 比赛总数量
        num: number
        // 菜单分类,如：滚球
        items: Array<{
          // 体育名称,如：足球
          name: string
          // 体育代码,如：FT
          code: string
          // 总数量
          num: number
          // 赛事数量
          matchNum: number
          // 冠軍比赛数量
          outRightNum: number
          // 排序号
          sortNum: number
          // 玩法分类类型菜单列表
          play: Array<{
            // 玩法菜单code
            code: string
            // 玩法菜单名称
            name: string
            // 赔率大厅画面用, 1:菜单玩法支持下拉选项 0:不支持下拉选项
            selectionType: number
            // 数量
            num: number
            // 菜单底下包含的玩法类(List格式)
            playCateList: Array<{
              // 代码
              code: string
              // 玩法类名称，如：让球, 大/小
              name: string
              // 排序
              rowSort: number
              // 各语系玩法名称
              playCateNameMap: any
            }>
            // 各语系菜单名称
            nameMap: any
            // 玩法排序
            oddsSort: string
            // 玩法显示名称
            playCateNameMap: any
            // 菜单下包含的玩法类(Map格式)
            playCateMap: {
              [key: string]: {
                // 代码
                code: string
                // 玩法类名称，如：让球, 大/小
                name: string
                // 排序
                rowSort: number
                // 各语系玩法名称
                playCateNameMap: any
              }
            }
          }>
          // 是否存在滚盘中赛事，0：否，1：是
          existInPlay: number
          // 玩法菜单列表code
          playCateMenuCodeList: any[]
          // 国家列表
          categoryList: Array<{
            // 主键
            id: string
            // 游戏类型 (FT:足球，BK:篮球,TN:网球, VB:网球,BM：羽球)
            gameType: string
            // 分类名称notNull
            name: string
            // 分类code
            code: string
            // 图标,svg的html元素(已进行UrlEncoded)
            icon: string
            // 联赛列表notNull
            list: Array<{
              // 联赛id
              id: string
              // 名称
              name: string
              // 赛事数量
              num: number
              // 排序
              sort: number
              // 联盟icon
              icon: string
            }>
            // 赛事/赛季数量notNull
            num: number
            // 排序
            sort: number
          }>
        }>
        // 排序
        sort: number
        // 赛事比赛数量
        matchNum: number
        // 冠軍比赛数量
        outRightNum: number
      }
    }
  }
  // 1.体育新版菜单接口: 1.2.手机版体育菜单,免登入即可访问
  type REQ = {
    // 当下时间（时间戳格式）
    now: string | number
    // 今日开始时间（00:00:00的时间戳格式）
    todayStart: string | number
    // 赛事类型
    gameType?: string
    // 多球种时傳入字串內容,不同球种之间使用逗号分隔,顺序高的球种要排前面
    gameTypes?: string
  }
}
// 1.体育新版菜单接口: 1.3.PC版体育左侧边栏,免登入即可访问
declare namespace API_V1_SPORT_PC_MENU {
  // 1.体育新版菜单接口: 1.3.PC版体育左侧边栏,免登入即可访问
  type RES = {
    // No comments found.
    success: boolean
    // No comments found.
    msg: string
    // No comments found.
    code: number
    // No comments found.
    t: {
      // 滚球
      inPlay: {
        // 比赛总数量
        num: number
        // 菜单分类,如：滚球
        items: Array<{
          // 体育名称,如：足球
          name: string
          // 体育代码,如：FT
          code: string
          // 总数量
          num: number
          // 赛事数量
          matchNum: number
          // 冠軍比赛数量
          outRightNum: number
          // 排序号
          sortNum: number
          // 玩法分类类型菜单列表
          play: Array<{
            // 玩法菜单code
            code: string
            // 玩法菜单名称
            name: string
            // 赔率大厅画面用, 1:菜单玩法支持下拉选项 0:不支持下拉选项
            selectionType: number
            // 数量
            num: number
            // 菜单底下包含的玩法类(List格式)
            playCateList: Array<{
              // 代码
              code: string
              // 玩法类名称，如：让球, 大/小
              name: string
              // 排序
              rowSort: number
              // 各语系玩法名称
              playCateNameMap: any
            }>
            // 各语系菜单名称
            nameMap: any
            // 玩法排序
            oddsSort: string
            // 玩法显示名称
            playCateNameMap: any
            // 菜单下包含的玩法类(Map格式)
            playCateMap: {
              [key: string]: {
                // 代码
                code: string
                // 玩法类名称，如：让球, 大/小
                name: string
                // 排序
                rowSort: number
                // 各语系玩法名称
                playCateNameMap: any
              }
            }
          }>
          // 是否存在滚盘中赛事，0：否，1：是
          existInPlay: number
          // 玩法菜单列表code
          playCateMenuCodeList: any[]
          // 国家列表
          categoryList: Array<{
            // 主键
            id: string
            // 游戏类型 (FT:足球，BK:篮球,TN:网球, VB:网球,BM：羽球)
            gameType: string
            // 分类名称notNull
            name: string
            // 分类code
            code: string
            // 图标,svg的html元素(已进行UrlEncoded)
            icon: string
            // 联赛列表notNull
            list: Array<{
              // 联赛id
              id: string
              // 名称
              name: string
              // 赛事数量
              num: number
              // 排序
              sort: number
              // 联盟icon
              icon: string
            }>
            // 赛事/赛季数量notNull
            num: number
            // 排序
            sort: number
          }>
        }>
        // 排序
        sort: number
        // 赛事比赛数量
        matchNum: number
        // 冠軍比赛数量
        outRightNum: number
      }
      // 今日盘
      today: {
        // 比赛总数量
        num: number
        // 菜单分类,如：滚球
        items: Array<{
          // 体育名称,如：足球
          name: string
          // 体育代码,如：FT
          code: string
          // 总数量
          num: number
          // 赛事数量
          matchNum: number
          // 冠軍比赛数量
          outRightNum: number
          // 排序号
          sortNum: number
          // 玩法分类类型菜单列表
          play: Array<{
            // 玩法菜单code
            code: string
            // 玩法菜单名称
            name: string
            // 赔率大厅画面用, 1:菜单玩法支持下拉选项 0:不支持下拉选项
            selectionType: number
            // 数量
            num: number
            // 菜单底下包含的玩法类(List格式)
            playCateList: Array<{
              // 代码
              code: string
              // 玩法类名称，如：让球, 大/小
              name: string
              // 排序
              rowSort: number
              // 各语系玩法名称
              playCateNameMap: any
            }>
            // 各语系菜单名称
            nameMap: any
            // 玩法排序
            oddsSort: string
            // 玩法显示名称
            playCateNameMap: any
            // 菜单下包含的玩法类(Map格式)
            playCateMap: {
              [key: string]: {
                // 代码
                code: string
                // 玩法类名称，如：让球, 大/小
                name: string
                // 排序
                rowSort: number
                // 各语系玩法名称
                playCateNameMap: any
              }
            }
          }>
          // 是否存在滚盘中赛事，0：否，1：是
          existInPlay: number
          // 玩法菜单列表code
          playCateMenuCodeList: any[]
          // 国家列表
          categoryList: Array<{
            // 主键
            id: string
            // 游戏类型 (FT:足球，BK:篮球,TN:网球, VB:网球,BM：羽球)
            gameType: string
            // 分类名称notNull
            name: string
            // 分类code
            code: string
            // 图标,svg的html元素(已进行UrlEncoded)
            icon: string
            // 联赛列表notNull
            list: Array<{
              // 联赛id
              id: string
              // 名称
              name: string
              // 赛事数量
              num: number
              // 排序
              sort: number
              // 联盟icon
              icon: string
            }>
            // 赛事/赛季数量notNull
            num: number
            // 排序
            sort: number
          }>
        }>
        // 排序
        sort: number
        // 赛事比赛数量
        matchNum: number
        // 冠軍比赛数量
        outRightNum: number
      }
      // 早盘
      early: {
        // 比赛总数量
        num: number
        // 菜单分类,如：滚球
        items: Array<{
          // 体育名称,如：足球
          name: string
          // 体育代码,如：FT
          code: string
          // 总数量
          num: number
          // 赛事数量
          matchNum: number
          // 冠軍比赛数量
          outRightNum: number
          // 排序号
          sortNum: number
          // 玩法分类类型菜单列表
          play: Array<{
            // 玩法菜单code
            code: string
            // 玩法菜单名称
            name: string
            // 赔率大厅画面用, 1:菜单玩法支持下拉选项 0:不支持下拉选项
            selectionType: number
            // 数量
            num: number
            // 菜单底下包含的玩法类(List格式)
            playCateList: Array<{
              // 代码
              code: string
              // 玩法类名称，如：让球, 大/小
              name: string
              // 排序
              rowSort: number
              // 各语系玩法名称
              playCateNameMap: any
            }>
            // 各语系菜单名称
            nameMap: any
            // 玩法排序
            oddsSort: string
            // 玩法显示名称
            playCateNameMap: any
            // 菜单下包含的玩法类(Map格式)
            playCateMap: {
              [key: string]: {
                // 代码
                code: string
                // 玩法类名称，如：让球, 大/小
                name: string
                // 排序
                rowSort: number
                // 各语系玩法名称
                playCateNameMap: any
              }
            }
          }>
          // 是否存在滚盘中赛事，0：否，1：是
          existInPlay: number
          // 玩法菜单列表code
          playCateMenuCodeList: any[]
          // 国家列表
          categoryList: Array<{
            // 主键
            id: string
            // 游戏类型 (FT:足球，BK:篮球,TN:网球, VB:网球,BM：羽球)
            gameType: string
            // 分类名称notNull
            name: string
            // 分类code
            code: string
            // 图标,svg的html元素(已进行UrlEncoded)
            icon: string
            // 联赛列表notNull
            list: Array<{
              // 联赛id
              id: string
              // 名称
              name: string
              // 赛事数量
              num: number
              // 排序
              sort: number
              // 联盟icon
              icon: string
            }>
            // 赛事/赛季数量notNull
            num: number
            // 排序
            sort: number
          }>
        }>
        // 排序
        sort: number
        // 赛事比赛数量
        matchNum: number
        // 冠軍比赛数量
        outRightNum: number
      }
      // 连串盘
      parlay: {
        // 比赛总数量
        num: number
        // 菜单分类,如：滚球
        items: Array<{
          // 体育名称,如：足球
          name: string
          // 体育代码,如：FT
          code: string
          // 总数量
          num: number
          // 赛事数量
          matchNum: number
          // 冠軍比赛数量
          outRightNum: number
          // 排序号
          sortNum: number
          // 玩法分类类型菜单列表
          play: Array<{
            // 玩法菜单code
            code: string
            // 玩法菜单名称
            name: string
            // 赔率大厅画面用, 1:菜单玩法支持下拉选项 0:不支持下拉选项
            selectionType: number
            // 数量
            num: number
            // 菜单底下包含的玩法类(List格式)
            playCateList: Array<{
              // 代码
              code: string
              // 玩法类名称，如：让球, 大/小
              name: string
              // 排序
              rowSort: number
              // 各语系玩法名称
              playCateNameMap: any
            }>
            // 各语系菜单名称
            nameMap: any
            // 玩法排序
            oddsSort: string
            // 玩法显示名称
            playCateNameMap: any
            // 菜单下包含的玩法类(Map格式)
            playCateMap: {
              [key: string]: {
                // 代码
                code: string
                // 玩法类名称，如：让球, 大/小
                name: string
                // 排序
                rowSort: number
                // 各语系玩法名称
                playCateNameMap: any
              }
            }
          }>
          // 是否存在滚盘中赛事，0：否，1：是
          existInPlay: number
          // 玩法菜单列表code
          playCateMenuCodeList: any[]
          // 国家列表
          categoryList: Array<{
            // 主键
            id: string
            // 游戏类型 (FT:足球，BK:篮球,TN:网球, VB:网球,BM：羽球)
            gameType: string
            // 分类名称notNull
            name: string
            // 分类code
            code: string
            // 图标,svg的html元素(已进行UrlEncoded)
            icon: string
            // 联赛列表notNull
            list: Array<{
              // 联赛id
              id: string
              // 名称
              name: string
              // 赛事数量
              num: number
              // 排序
              sort: number
              // 联盟icon
              icon: string
            }>
            // 赛事/赛季数量notNull
            num: number
            // 排序
            sort: number
          }>
        }>
        // 排序
        sort: number
        // 赛事比赛数量
        matchNum: number
        // 冠軍比赛数量
        outRightNum: number
      }
      // 冠军
      outright: {
        // 比赛总数量
        num: number
        // 菜单分类,如：滚球
        items: Array<{
          // 体育名称,如：足球
          name: string
          // 体育代码,如：FT
          code: string
          // 总数量
          num: number
          // 赛事数量
          matchNum: number
          // 冠軍比赛数量
          outRightNum: number
          // 排序号
          sortNum: number
          // 玩法分类类型菜单列表
          play: Array<{
            // 玩法菜单code
            code: string
            // 玩法菜单名称
            name: string
            // 赔率大厅画面用, 1:菜单玩法支持下拉选项 0:不支持下拉选项
            selectionType: number
            // 数量
            num: number
            // 菜单底下包含的玩法类(List格式)
            playCateList: Array<{
              // 代码
              code: string
              // 玩法类名称，如：让球, 大/小
              name: string
              // 排序
              rowSort: number
              // 各语系玩法名称
              playCateNameMap: any
            }>
            // 各语系菜单名称
            nameMap: any
            // 玩法排序
            oddsSort: string
            // 玩法显示名称
            playCateNameMap: any
            // 菜单下包含的玩法类(Map格式)
            playCateMap: {
              [key: string]: {
                // 代码
                code: string
                // 玩法类名称，如：让球, 大/小
                name: string
                // 排序
                rowSort: number
                // 各语系玩法名称
                playCateNameMap: any
              }
            }
          }>
          // 是否存在滚盘中赛事，0：否，1：是
          existInPlay: number
          // 玩法菜单列表code
          playCateMenuCodeList: any[]
          // 国家列表
          categoryList: Array<{
            // 主键
            id: string
            // 游戏类型 (FT:足球，BK:篮球,TN:网球, VB:网球,BM：羽球)
            gameType: string
            // 分类名称notNull
            name: string
            // 分类code
            code: string
            // 图标,svg的html元素(已进行UrlEncoded)
            icon: string
            // 联赛列表notNull
            list: Array<{
              // 联赛id
              id: string
              // 名称
              name: string
              // 赛事数量
              num: number
              // 排序
              sort: number
              // 联盟icon
              icon: string
            }>
            // 赛事/赛季数量notNull
            num: number
            // 排序
            sort: number
          }>
        }>
        // 排序
        sort: number
        // 赛事比赛数量
        matchNum: number
        // 冠軍比赛数量
        outRightNum: number
      }
      // 特优赔率
      eps: {
        // 比赛总数量
        num: number
        // 菜单分类,如：滚球
        items: Array<{
          // 体育名称,如：足球
          name: string
          // 体育代码,如：FT
          code: string
          // 总数量
          num: number
          // 赛事数量
          matchNum: number
          // 冠軍比赛数量
          outRightNum: number
          // 排序号
          sortNum: number
          // 玩法分类类型菜单列表
          play: Array<{
            // 玩法菜单code
            code: string
            // 玩法菜单名称
            name: string
            // 赔率大厅画面用, 1:菜单玩法支持下拉选项 0:不支持下拉选项
            selectionType: number
            // 数量
            num: number
            // 菜单底下包含的玩法类(List格式)
            playCateList: Array<{
              // 代码
              code: string
              // 玩法类名称，如：让球, 大/小
              name: string
              // 排序
              rowSort: number
              // 各语系玩法名称
              playCateNameMap: any
            }>
            // 各语系菜单名称
            nameMap: any
            // 玩法排序
            oddsSort: string
            // 玩法显示名称
            playCateNameMap: any
            // 菜单下包含的玩法类(Map格式)
            playCateMap: {
              [key: string]: {
                // 代码
                code: string
                // 玩法类名称，如：让球, 大/小
                name: string
                // 排序
                rowSort: number
                // 各语系玩法名称
                playCateNameMap: any
              }
            }
          }>
          // 是否存在滚盘中赛事，0：否，1：是
          existInPlay: number
          // 玩法菜单列表code
          playCateMenuCodeList: any[]
          // 国家列表
          categoryList: Array<{
            // 主键
            id: string
            // 游戏类型 (FT:足球，BK:篮球,TN:网球, VB:网球,BM：羽球)
            gameType: string
            // 分类名称notNull
            name: string
            // 分类code
            code: string
            // 图标,svg的html元素(已进行UrlEncoded)
            icon: string
            // 联赛列表notNull
            list: Array<{
              // 联赛id
              id: string
              // 名称
              name: string
              // 赛事数量
              num: number
              // 排序
              sort: number
              // 联盟icon
              icon: string
            }>
            // 赛事/赛季数量notNull
            num: number
            // 排序
            sort: number
          }>
        }>
        // 排序
        sort: number
        // 赛事比赛数量
        matchNum: number
        // 冠軍比赛数量
        outRightNum: number
      }
      // 即将开始
      atStart: {
        // 比赛总数量
        num: number
        // 菜单分类,如：滚球
        items: Array<{
          // 体育名称,如：足球
          name: string
          // 体育代码,如：FT
          code: string
          // 总数量
          num: number
          // 赛事数量
          matchNum: number
          // 冠軍比赛数量
          outRightNum: number
          // 排序号
          sortNum: number
          // 玩法分类类型菜单列表
          play: Array<{
            // 玩法菜单code
            code: string
            // 玩法菜单名称
            name: string
            // 赔率大厅画面用, 1:菜单玩法支持下拉选项 0:不支持下拉选项
            selectionType: number
            // 数量
            num: number
            // 菜单底下包含的玩法类(List格式)
            playCateList: Array<{
              // 代码
              code: string
              // 玩法类名称，如：让球, 大/小
              name: string
              // 排序
              rowSort: number
              // 各语系玩法名称
              playCateNameMap: any
            }>
            // 各语系菜单名称
            nameMap: any
            // 玩法排序
            oddsSort: string
            // 玩法显示名称
            playCateNameMap: any
            // 菜单下包含的玩法类(Map格式)
            playCateMap: {
              [key: string]: {
                // 代码
                code: string
                // 玩法类名称，如：让球, 大/小
                name: string
                // 排序
                rowSort: number
                // 各语系玩法名称
                playCateNameMap: any
              }
            }
          }>
          // 是否存在滚盘中赛事，0：否，1：是
          existInPlay: number
          // 玩法菜单列表code
          playCateMenuCodeList: any[]
          // 国家列表
          categoryList: Array<{
            // 主键
            id: string
            // 游戏类型 (FT:足球，BK:篮球,TN:网球, VB:网球,BM：羽球)
            gameType: string
            // 分类名称notNull
            name: string
            // 分类code
            code: string
            // 图标,svg的html元素(已进行UrlEncoded)
            icon: string
            // 联赛列表notNull
            list: Array<{
              // 联赛id
              id: string
              // 名称
              name: string
              // 赛事数量
              num: number
              // 排序
              sort: number
              // 联盟icon
              icon: string
            }>
            // 赛事/赛季数量notNull
            num: number
            // 排序
            sort: number
          }>
        }>
        // 排序
        sort: number
        // 赛事比赛数量
        matchNum: number
        // 冠軍比赛数量
        outRightNum: number
      }
      // 我的赛事
      myFavorite: {
        // 比赛总数量
        num: number
        // 菜单分类,如：滚球
        items: Array<{
          // 体育名称,如：足球
          name: string
          // 体育代码,如：FT
          code: string
          // 总数量
          num: number
          // 赛事数量
          matchNum: number
          // 冠軍比赛数量
          outRightNum: number
          // 排序号
          sortNum: number
          // 玩法分类类型菜单列表
          play: Array<{
            // 玩法菜单code
            code: string
            // 玩法菜单名称
            name: string
            // 赔率大厅画面用, 1:菜单玩法支持下拉选项 0:不支持下拉选项
            selectionType: number
            // 数量
            num: number
            // 菜单底下包含的玩法类(List格式)
            playCateList: Array<{
              // 代码
              code: string
              // 玩法类名称，如：让球, 大/小
              name: string
              // 排序
              rowSort: number
              // 各语系玩法名称
              playCateNameMap: any
            }>
            // 各语系菜单名称
            nameMap: any
            // 玩法排序
            oddsSort: string
            // 玩法显示名称
            playCateNameMap: any
            // 菜单下包含的玩法类(Map格式)
            playCateMap: {
              [key: string]: {
                // 代码
                code: string
                // 玩法类名称，如：让球, 大/小
                name: string
                // 排序
                rowSort: number
                // 各语系玩法名称
                playCateNameMap: any
              }
            }
          }>
          // 是否存在滚盘中赛事，0：否，1：是
          existInPlay: number
          // 玩法菜单列表code
          playCateMenuCodeList: any[]
          // 国家列表
          categoryList: Array<{
            // 主键
            id: string
            // 游戏类型 (FT:足球，BK:篮球,TN:网球, VB:网球,BM：羽球)
            gameType: string
            // 分类名称notNull
            name: string
            // 分类code
            code: string
            // 图标,svg的html元素(已进行UrlEncoded)
            icon: string
            // 联赛列表notNull
            list: Array<{
              // 联赛id
              id: string
              // 名称
              name: string
              // 赛事数量
              num: number
              // 排序
              sort: number
              // 联盟icon
              icon: string
            }>
            // 赛事/赛季数量notNull
            num: number
            // 排序
            sort: number
          }>
        }>
        // 排序
        sort: number
        // 赛事比赛数量
        matchNum: number
        // 冠軍比赛数量
        outRightNum: number
      }
      // 波胆
      cs: {
        // 比赛总数量
        num: number
        // 菜单分类,如：滚球
        items: Array<{
          // 体育名称,如：足球
          name: string
          // 体育代码,如：FT
          code: string
          // 总数量
          num: number
          // 赛事数量
          matchNum: number
          // 冠軍比赛数量
          outRightNum: number
          // 排序号
          sortNum: number
          // 玩法分类类型菜单列表
          play: Array<{
            // 玩法菜单code
            code: string
            // 玩法菜单名称
            name: string
            // 赔率大厅画面用, 1:菜单玩法支持下拉选项 0:不支持下拉选项
            selectionType: number
            // 数量
            num: number
            // 菜单底下包含的玩法类(List格式)
            playCateList: Array<{
              // 代码
              code: string
              // 玩法类名称，如：让球, 大/小
              name: string
              // 排序
              rowSort: number
              // 各语系玩法名称
              playCateNameMap: any
            }>
            // 各语系菜单名称
            nameMap: any
            // 玩法排序
            oddsSort: string
            // 玩法显示名称
            playCateNameMap: any
            // 菜单下包含的玩法类(Map格式)
            playCateMap: {
              [key: string]: {
                // 代码
                code: string
                // 玩法类名称，如：让球, 大/小
                name: string
                // 排序
                rowSort: number
                // 各语系玩法名称
                playCateNameMap: any
              }
            }
          }>
          // 是否存在滚盘中赛事，0：否，1：是
          existInPlay: number
          // 玩法菜单列表code
          playCateMenuCodeList: any[]
          // 国家列表
          categoryList: Array<{
            // 主键
            id: string
            // 游戏类型 (FT:足球，BK:篮球,TN:网球, VB:网球,BM：羽球)
            gameType: string
            // 分类名称notNull
            name: string
            // 分类code
            code: string
            // 图标,svg的html元素(已进行UrlEncoded)
            icon: string
            // 联赛列表notNull
            list: Array<{
              // 联赛id
              id: string
              // 名称
              name: string
              // 赛事数量
              num: number
              // 排序
              sort: number
              // 联盟icon
              icon: string
            }>
            // 赛事/赛季数量notNull
            num: number
            // 排序
            sort: number
          }>
        }>
        // 排序
        sort: number
        // 赛事比赛数量
        matchNum: number
        // 冠軍比赛数量
        outRightNum: number
      }
    }
  }
  // 1.体育新版菜单接口: 1.3.PC版体育左侧边栏,免登入即可访问
  type REQ = {
    // 当下时间（时间戳格式）
    now: string | number
    // 今日开始时间（00:00:00的时间戳格式）
    todayStart: string | number
  }
}
// 1.体育新版菜单接口: 1.4.手机版top体育菜单,免登入即可访问
declare namespace API_V1_SPORT_MOBILE_TOPMENU {
  // 1.体育新版菜单接口: 1.4.手机版top体育菜单,免登入即可访问
  type RES = {
    // No comments found.
    success: boolean
    // No comments found.
    msg: string
    // No comments found.
    code: number
    // No comments found.
    rows: Array<{
      // 球種名稱
      name: string
      // 球種
      gameType: string
      // 排序
      sort: number
      // 滚球
      inPlay: {
        // 体育名称,如：足球
        name: string
        // 体育代码,如：FT
        code: string
        // 总数量
        num: number
        // 赛事数量
        matchNum: number
        // 冠軍比赛数量
        outRightNum: number
        // 排序号
        sortNum: number
        // 玩法分类类型菜单列表
        play: Array<{
          // 玩法菜单code
          code: string
          // 玩法菜单名称
          name: string
          // 赔率大厅画面用, 1:菜单玩法支持下拉选项 0:不支持下拉选项
          selectionType: number
          // 数量
          num: number
          // 菜单底下包含的玩法类(List格式)
          playCateList: Array<{
            // 代码
            code: string
            // 玩法类名称，如：让球, 大/小
            name: string
            // 排序
            rowSort: number
            // 各语系玩法名称
            playCateNameMap: any
          }>
          // 各语系菜单名称
          nameMap: any
          // 玩法排序
          oddsSort: string
          // 玩法显示名称
          playCateNameMap: any
          // 菜单下包含的玩法类(Map格式)
          playCateMap: {
            [key: string]: {
              // 代码
              code: string
              // 玩法类名称，如：让球, 大/小
              name: string
              // 排序
              rowSort: number
              // 各语系玩法名称
              playCateNameMap: any
            }
          }
        }>
        // 是否存在滚盘中赛事，0：否，1：是
        existInPlay: number
        // 玩法菜单列表code
        playCateMenuCodeList: any[]
        // 国家列表
        categoryList: Array<{
          // 主键
          id: string
          // 游戏类型 (FT:足球，BK:篮球,TN:网球, VB:网球,BM：羽球)
          gameType: string
          // 分类名称notNull
          name: string
          // 分类code
          code: string
          // 图标,svg的html元素(已进行UrlEncoded)
          icon: string
          // 联赛列表notNull
          list: Array<{
            // 联赛id
            id: string
            // 名称
            name: string
            // 赛事数量
            num: number
            // 排序
            sort: number
            // 联盟icon
            icon: string
          }>
          // 赛事/赛季数量notNull
          num: number
          // 排序
          sort: number
        }>
      }
      // 今日盘
      today: {
        // 体育名称,如：足球
        name: string
        // 体育代码,如：FT
        code: string
        // 总数量
        num: number
        // 赛事数量
        matchNum: number
        // 冠軍比赛数量
        outRightNum: number
        // 排序号
        sortNum: number
        // 玩法分类类型菜单列表
        play: Array<{
          // 玩法菜单code
          code: string
          // 玩法菜单名称
          name: string
          // 赔率大厅画面用, 1:菜单玩法支持下拉选项 0:不支持下拉选项
          selectionType: number
          // 数量
          num: number
          // 菜单底下包含的玩法类(List格式)
          playCateList: Array<{
            // 代码
            code: string
            // 玩法类名称，如：让球, 大/小
            name: string
            // 排序
            rowSort: number
            // 各语系玩法名称
            playCateNameMap: any
          }>
          // 各语系菜单名称
          nameMap: any
          // 玩法排序
          oddsSort: string
          // 玩法显示名称
          playCateNameMap: any
          // 菜单下包含的玩法类(Map格式)
          playCateMap: {
            [key: string]: {
              // 代码
              code: string
              // 玩法类名称，如：让球, 大/小
              name: string
              // 排序
              rowSort: number
              // 各语系玩法名称
              playCateNameMap: any
            }
          }
        }>
        // 是否存在滚盘中赛事，0：否，1：是
        existInPlay: number
        // 玩法菜单列表code
        playCateMenuCodeList: any[]
        // 国家列表
        categoryList: Array<{
          // 主键
          id: string
          // 游戏类型 (FT:足球，BK:篮球,TN:网球, VB:网球,BM：羽球)
          gameType: string
          // 分类名称notNull
          name: string
          // 分类code
          code: string
          // 图标,svg的html元素(已进行UrlEncoded)
          icon: string
          // 联赛列表notNull
          list: Array<{
            // 联赛id
            id: string
            // 名称
            name: string
            // 赛事数量
            num: number
            // 排序
            sort: number
            // 联盟icon
            icon: string
          }>
          // 赛事/赛季数量notNull
          num: number
          // 排序
          sort: number
        }>
      }
      // 早盘
      early: {
        // 体育名称,如：足球
        name: string
        // 体育代码,如：FT
        code: string
        // 总数量
        num: number
        // 赛事数量
        matchNum: number
        // 冠軍比赛数量
        outRightNum: number
        // 排序号
        sortNum: number
        // 玩法分类类型菜单列表
        play: Array<{
          // 玩法菜单code
          code: string
          // 玩法菜单名称
          name: string
          // 赔率大厅画面用, 1:菜单玩法支持下拉选项 0:不支持下拉选项
          selectionType: number
          // 数量
          num: number
          // 菜单底下包含的玩法类(List格式)
          playCateList: Array<{
            // 代码
            code: string
            // 玩法类名称，如：让球, 大/小
            name: string
            // 排序
            rowSort: number
            // 各语系玩法名称
            playCateNameMap: any
          }>
          // 各语系菜单名称
          nameMap: any
          // 玩法排序
          oddsSort: string
          // 玩法显示名称
          playCateNameMap: any
          // 菜单下包含的玩法类(Map格式)
          playCateMap: {
            [key: string]: {
              // 代码
              code: string
              // 玩法类名称，如：让球, 大/小
              name: string
              // 排序
              rowSort: number
              // 各语系玩法名称
              playCateNameMap: any
            }
          }
        }>
        // 是否存在滚盘中赛事，0：否，1：是
        existInPlay: number
        // 玩法菜单列表code
        playCateMenuCodeList: any[]
        // 国家列表
        categoryList: Array<{
          // 主键
          id: string
          // 游戏类型 (FT:足球，BK:篮球,TN:网球, VB:网球,BM：羽球)
          gameType: string
          // 分类名称notNull
          name: string
          // 分类code
          code: string
          // 图标,svg的html元素(已进行UrlEncoded)
          icon: string
          // 联赛列表notNull
          list: Array<{
            // 联赛id
            id: string
            // 名称
            name: string
            // 赛事数量
            num: number
            // 排序
            sort: number
            // 联盟icon
            icon: string
          }>
          // 赛事/赛季数量notNull
          num: number
          // 排序
          sort: number
        }>
      }
      // 连串盘
      parlay: {
        // 体育名称,如：足球
        name: string
        // 体育代码,如：FT
        code: string
        // 总数量
        num: number
        // 赛事数量
        matchNum: number
        // 冠軍比赛数量
        outRightNum: number
        // 排序号
        sortNum: number
        // 玩法分类类型菜单列表
        play: Array<{
          // 玩法菜单code
          code: string
          // 玩法菜单名称
          name: string
          // 赔率大厅画面用, 1:菜单玩法支持下拉选项 0:不支持下拉选项
          selectionType: number
          // 数量
          num: number
          // 菜单底下包含的玩法类(List格式)
          playCateList: Array<{
            // 代码
            code: string
            // 玩法类名称，如：让球, 大/小
            name: string
            // 排序
            rowSort: number
            // 各语系玩法名称
            playCateNameMap: any
          }>
          // 各语系菜单名称
          nameMap: any
          // 玩法排序
          oddsSort: string
          // 玩法显示名称
          playCateNameMap: any
          // 菜单下包含的玩法类(Map格式)
          playCateMap: {
            [key: string]: {
              // 代码
              code: string
              // 玩法类名称，如：让球, 大/小
              name: string
              // 排序
              rowSort: number
              // 各语系玩法名称
              playCateNameMap: any
            }
          }
        }>
        // 是否存在滚盘中赛事，0：否，1：是
        existInPlay: number
        // 玩法菜单列表code
        playCateMenuCodeList: any[]
        // 国家列表
        categoryList: Array<{
          // 主键
          id: string
          // 游戏类型 (FT:足球，BK:篮球,TN:网球, VB:网球,BM：羽球)
          gameType: string
          // 分类名称notNull
          name: string
          // 分类code
          code: string
          // 图标,svg的html元素(已进行UrlEncoded)
          icon: string
          // 联赛列表notNull
          list: Array<{
            // 联赛id
            id: string
            // 名称
            name: string
            // 赛事数量
            num: number
            // 排序
            sort: number
            // 联盟icon
            icon: string
          }>
          // 赛事/赛季数量notNull
          num: number
          // 排序
          sort: number
        }>
      }
      // 即将开始
      atStart: {
        // 体育名称,如：足球
        name: string
        // 体育代码,如：FT
        code: string
        // 总数量
        num: number
        // 赛事数量
        matchNum: number
        // 冠軍比赛数量
        outRightNum: number
        // 排序号
        sortNum: number
        // 玩法分类类型菜单列表
        play: Array<{
          // 玩法菜单code
          code: string
          // 玩法菜单名称
          name: string
          // 赔率大厅画面用, 1:菜单玩法支持下拉选项 0:不支持下拉选项
          selectionType: number
          // 数量
          num: number
          // 菜单底下包含的玩法类(List格式)
          playCateList: Array<{
            // 代码
            code: string
            // 玩法类名称，如：让球, 大/小
            name: string
            // 排序
            rowSort: number
            // 各语系玩法名称
            playCateNameMap: any
          }>
          // 各语系菜单名称
          nameMap: any
          // 玩法排序
          oddsSort: string
          // 玩法显示名称
          playCateNameMap: any
          // 菜单下包含的玩法类(Map格式)
          playCateMap: {
            [key: string]: {
              // 代码
              code: string
              // 玩法类名称，如：让球, 大/小
              name: string
              // 排序
              rowSort: number
              // 各语系玩法名称
              playCateNameMap: any
            }
          }
        }>
        // 是否存在滚盘中赛事，0：否，1：是
        existInPlay: number
        // 玩法菜单列表code
        playCateMenuCodeList: any[]
        // 国家列表
        categoryList: Array<{
          // 主键
          id: string
          // 游戏类型 (FT:足球，BK:篮球,TN:网球, VB:网球,BM：羽球)
          gameType: string
          // 分类名称notNull
          name: string
          // 分类code
          code: string
          // 图标,svg的html元素(已进行UrlEncoded)
          icon: string
          // 联赛列表notNull
          list: Array<{
            // 联赛id
            id: string
            // 名称
            name: string
            // 赛事数量
            num: number
            // 排序
            sort: number
            // 联盟icon
            icon: string
          }>
          // 赛事/赛季数量notNull
          num: number
          // 排序
          sort: number
        }>
      }
      // 近12小時
      in12hr: {
        // 体育名称,如：足球
        name: string
        // 体育代码,如：FT
        code: string
        // 总数量
        num: number
        // 赛事数量
        matchNum: number
        // 冠軍比赛数量
        outRightNum: number
        // 排序号
        sortNum: number
        // 玩法分类类型菜单列表
        play: Array<{
          // 玩法菜单code
          code: string
          // 玩法菜单名称
          name: string
          // 赔率大厅画面用, 1:菜单玩法支持下拉选项 0:不支持下拉选项
          selectionType: number
          // 数量
          num: number
          // 菜单底下包含的玩法类(List格式)
          playCateList: Array<{
            // 代码
            code: string
            // 玩法类名称，如：让球, 大/小
            name: string
            // 排序
            rowSort: number
            // 各语系玩法名称
            playCateNameMap: any
          }>
          // 各语系菜单名称
          nameMap: any
          // 玩法排序
          oddsSort: string
          // 玩法显示名称
          playCateNameMap: any
          // 菜单下包含的玩法类(Map格式)
          playCateMap: {
            [key: string]: {
              // 代码
              code: string
              // 玩法类名称，如：让球, 大/小
              name: string
              // 排序
              rowSort: number
              // 各语系玩法名称
              playCateNameMap: any
            }
          }
        }>
        // 是否存在滚盘中赛事，0：否，1：是
        existInPlay: number
        // 玩法菜单列表code
        playCateMenuCodeList: any[]
        // 国家列表
        categoryList: Array<{
          // 主键
          id: string
          // 游戏类型 (FT:足球，BK:篮球,TN:网球, VB:网球,BM：羽球)
          gameType: string
          // 分类名称notNull
          name: string
          // 分类code
          code: string
          // 图标,svg的html元素(已进行UrlEncoded)
          icon: string
          // 联赛列表notNull
          list: Array<{
            // 联赛id
            id: string
            // 名称
            name: string
            // 赛事数量
            num: number
            // 排序
            sort: number
            // 联盟icon
            icon: string
          }>
          // 赛事/赛季数量notNull
          num: number
          // 排序
          sort: number
        }>
      }
      // 近24小時
      in24hr: {
        // 体育名称,如：足球
        name: string
        // 体育代码,如：FT
        code: string
        // 总数量
        num: number
        // 赛事数量
        matchNum: number
        // 冠軍比赛数量
        outRightNum: number
        // 排序号
        sortNum: number
        // 玩法分类类型菜单列表
        play: Array<{
          // 玩法菜单code
          code: string
          // 玩法菜单名称
          name: string
          // 赔率大厅画面用, 1:菜单玩法支持下拉选项 0:不支持下拉选项
          selectionType: number
          // 数量
          num: number
          // 菜单底下包含的玩法类(List格式)
          playCateList: Array<{
            // 代码
            code: string
            // 玩法类名称，如：让球, 大/小
            name: string
            // 排序
            rowSort: number
            // 各语系玩法名称
            playCateNameMap: any
          }>
          // 各语系菜单名称
          nameMap: any
          // 玩法排序
          oddsSort: string
          // 玩法显示名称
          playCateNameMap: any
          // 菜单下包含的玩法类(Map格式)
          playCateMap: {
            [key: string]: {
              // 代码
              code: string
              // 玩法类名称，如：让球, 大/小
              name: string
              // 排序
              rowSort: number
              // 各语系玩法名称
              playCateNameMap: any
            }
          }
        }>
        // 是否存在滚盘中赛事，0：否，1：是
        existInPlay: number
        // 玩法菜单列表code
        playCateMenuCodeList: any[]
        // 国家列表
        categoryList: Array<{
          // 主键
          id: string
          // 游戏类型 (FT:足球，BK:篮球,TN:网球, VB:网球,BM：羽球)
          gameType: string
          // 分类名称notNull
          name: string
          // 分类code
          code: string
          // 图标,svg的html元素(已进行UrlEncoded)
          icon: string
          // 联赛列表notNull
          list: Array<{
            // 联赛id
            id: string
            // 名称
            name: string
            // 赛事数量
            num: number
            // 排序
            sort: number
            // 联盟icon
            icon: string
          }>
          // 赛事/赛季数量notNull
          num: number
          // 排序
          sort: number
        }>
      }
      // 特优赔率
      eps: {
        // 体育名称,如：足球
        name: string
        // 体育代码,如：FT
        code: string
        // 总数量
        num: number
        // 赛事数量
        matchNum: number
        // 冠軍比赛数量
        outRightNum: number
        // 排序号
        sortNum: number
        // 玩法分类类型菜单列表
        play: Array<{
          // 玩法菜单code
          code: string
          // 玩法菜单名称
          name: string
          // 赔率大厅画面用, 1:菜单玩法支持下拉选项 0:不支持下拉选项
          selectionType: number
          // 数量
          num: number
          // 菜单底下包含的玩法类(List格式)
          playCateList: Array<{
            // 代码
            code: string
            // 玩法类名称，如：让球, 大/小
            name: string
            // 排序
            rowSort: number
            // 各语系玩法名称
            playCateNameMap: any
          }>
          // 各语系菜单名称
          nameMap: any
          // 玩法排序
          oddsSort: string
          // 玩法显示名称
          playCateNameMap: any
          // 菜单下包含的玩法类(Map格式)
          playCateMap: {
            [key: string]: {
              // 代码
              code: string
              // 玩法类名称，如：让球, 大/小
              name: string
              // 排序
              rowSort: number
              // 各语系玩法名称
              playCateNameMap: any
            }
          }
        }>
        // 是否存在滚盘中赛事，0：否，1：是
        existInPlay: number
        // 玩法菜单列表code
        playCateMenuCodeList: any[]
        // 国家列表
        categoryList: Array<{
          // 主键
          id: string
          // 游戏类型 (FT:足球，BK:篮球,TN:网球, VB:网球,BM：羽球)
          gameType: string
          // 分类名称notNull
          name: string
          // 分类code
          code: string
          // 图标,svg的html元素(已进行UrlEncoded)
          icon: string
          // 联赛列表notNull
          list: Array<{
            // 联赛id
            id: string
            // 名称
            name: string
            // 赛事数量
            num: number
            // 排序
            sort: number
            // 联盟icon
            icon: string
          }>
          // 赛事/赛季数量notNull
          num: number
          // 排序
          sort: number
        }>
      }
      // 波胆(波胆&反波胆)(足球才有)
      cs: {
        // 体育名称,如：足球
        name: string
        // 体育代码,如：FT
        code: string
        // 总数量
        num: number
        // 赛事数量
        matchNum: number
        // 冠軍比赛数量
        outRightNum: number
        // 排序号
        sortNum: number
        // 玩法分类类型菜单列表
        play: Array<{
          // 玩法菜单code
          code: string
          // 玩法菜单名称
          name: string
          // 赔率大厅画面用, 1:菜单玩法支持下拉选项 0:不支持下拉选项
          selectionType: number
          // 数量
          num: number
          // 菜单底下包含的玩法类(List格式)
          playCateList: Array<{
            // 代码
            code: string
            // 玩法类名称，如：让球, 大/小
            name: string
            // 排序
            rowSort: number
            // 各语系玩法名称
            playCateNameMap: any
          }>
          // 各语系菜单名称
          nameMap: any
          // 玩法排序
          oddsSort: string
          // 玩法显示名称
          playCateNameMap: any
          // 菜单下包含的玩法类(Map格式)
          playCateMap: {
            [key: string]: {
              // 代码
              code: string
              // 玩法类名称，如：让球, 大/小
              name: string
              // 排序
              rowSort: number
              // 各语系玩法名称
              playCateNameMap: any
            }
          }
        }>
        // 是否存在滚盘中赛事，0：否，1：是
        existInPlay: number
        // 玩法菜单列表code
        playCateMenuCodeList: any[]
        // 国家列表
        categoryList: Array<{
          // 主键
          id: string
          // 游戏类型 (FT:足球，BK:篮球,TN:网球, VB:网球,BM：羽球)
          gameType: string
          // 分类名称notNull
          name: string
          // 分类code
          code: string
          // 图标,svg的html元素(已进行UrlEncoded)
          icon: string
          // 联赛列表notNull
          list: Array<{
            // 联赛id
            id: string
            // 名称
            name: string
            // 赛事数量
            num: number
            // 排序
            sort: number
            // 联盟icon
            icon: string
          }>
          // 赛事/赛季数量notNull
          num: number
          // 排序
          sort: number
        }>
      }
      // 冠军
      outright: {
        // 体育名称,如：足球
        name: string
        // 体育代码,如：FT
        code: string
        // 总数量
        num: number
        // 赛事数量
        matchNum: number
        // 冠軍比赛数量
        outRightNum: number
        // 排序号
        sortNum: number
        // 玩法分类类型菜单列表
        play: Array<{
          // 玩法菜单code
          code: string
          // 玩法菜单名称
          name: string
          // 赔率大厅画面用, 1:菜单玩法支持下拉选项 0:不支持下拉选项
          selectionType: number
          // 数量
          num: number
          // 菜单底下包含的玩法类(List格式)
          playCateList: Array<{
            // 代码
            code: string
            // 玩法类名称，如：让球, 大/小
            name: string
            // 排序
            rowSort: number
            // 各语系玩法名称
            playCateNameMap: any
          }>
          // 各语系菜单名称
          nameMap: any
          // 玩法排序
          oddsSort: string
          // 玩法显示名称
          playCateNameMap: any
          // 菜单下包含的玩法类(Map格式)
          playCateMap: {
            [key: string]: {
              // 代码
              code: string
              // 玩法类名称，如：让球, 大/小
              name: string
              // 排序
              rowSort: number
              // 各语系玩法名称
              playCateNameMap: any
            }
          }
        }>
        // 是否存在滚盘中赛事，0：否，1：是
        existInPlay: number
        // 玩法菜单列表code
        playCateMenuCodeList: any[]
        // 国家列表
        categoryList: Array<{
          // 主键
          id: string
          // 游戏类型 (FT:足球，BK:篮球,TN:网球, VB:网球,BM：羽球)
          gameType: string
          // 分类名称notNull
          name: string
          // 分类code
          code: string
          // 图标,svg的html元素(已进行UrlEncoded)
          icon: string
          // 联赛列表notNull
          list: Array<{
            // 联赛id
            id: string
            // 名称
            name: string
            // 赛事数量
            num: number
            // 排序
            sort: number
            // 联盟icon
            icon: string
          }>
          // 赛事/赛季数量notNull
          num: number
          // 排序
          sort: number
        }>
      }
      // 我的赛事
      myFavorite: {
        // 体育名称,如：足球
        name: string
        // 体育代码,如：FT
        code: string
        // 总数量
        num: number
        // 赛事数量
        matchNum: number
        // 冠軍比赛数量
        outRightNum: number
        // 排序号
        sortNum: number
        // 玩法分类类型菜单列表
        play: Array<{
          // 玩法菜单code
          code: string
          // 玩法菜单名称
          name: string
          // 赔率大厅画面用, 1:菜单玩法支持下拉选项 0:不支持下拉选项
          selectionType: number
          // 数量
          num: number
          // 菜单底下包含的玩法类(List格式)
          playCateList: Array<{
            // 代码
            code: string
            // 玩法类名称，如：让球, 大/小
            name: string
            // 排序
            rowSort: number
            // 各语系玩法名称
            playCateNameMap: any
          }>
          // 各语系菜单名称
          nameMap: any
          // 玩法排序
          oddsSort: string
          // 玩法显示名称
          playCateNameMap: any
          // 菜单下包含的玩法类(Map格式)
          playCateMap: {
            [key: string]: {
              // 代码
              code: string
              // 玩法类名称，如：让球, 大/小
              name: string
              // 排序
              rowSort: number
              // 各语系玩法名称
              playCateNameMap: any
            }
          }
        }>
        // 是否存在滚盘中赛事，0：否，1：是
        existInPlay: number
        // 玩法菜单列表code
        playCateMenuCodeList: any[]
        // 国家列表
        categoryList: Array<{
          // 主键
          id: string
          // 游戏类型 (FT:足球，BK:篮球,TN:网球, VB:网球,BM：羽球)
          gameType: string
          // 分类名称notNull
          name: string
          // 分类code
          code: string
          // 图标,svg的html元素(已进行UrlEncoded)
          icon: string
          // 联赛列表notNull
          list: Array<{
            // 联赛id
            id: string
            // 名称
            name: string
            // 赛事数量
            num: number
            // 排序
            sort: number
            // 联盟icon
            icon: string
          }>
          // 赛事/赛季数量notNull
          num: number
          // 排序
          sort: number
        }>
      }
    }>
    // 排序
    sort: number
    // No comments found.
    total: number
  }
  // 1.体育新版菜单接口: 1.4.手机版top体育菜单,免登入即可访问
  type REQ = {
    // 当下时间（时间戳格式）
    now: string | number
    // 今日开始时间（00:00:00的时间戳格式）
    todayStart: string | number
    // 球種
    gameType?: string
  }
}
// 2.赛事动画ID映射: 2.1.获取映射id
declare namespace API_TRACKER_MAPPING_MATCHID {
  // 2.赛事动画ID映射: 2.1.获取映射id
  type RES = {
    // No comments found.
    success: boolean
    // No comments found.
    msg: string
    // No comments found.
    code: number
    // No comments found.
    t: {
      // 赛事id
      matchId: string
      // 映射id
      mappingId: string
      // 直播id(同matchInfo的streamId)
      streamId: string
      // 映射厂家 1：statscore
      mappingFrom: number
      // dataConfig
      dataConfig: string
      // 动画可用语系,默认返回与前端传入语系相同,但若动画商不支持的语系会返回en,前端调用动画时语言要传此参数
      lang: string
    }
  }
  // 2.赛事动画ID映射: 2.1.获取映射id
  type REQ = {
    // 赛事id
    matchId: string
  }
}
// 3.赛事注单: 3.1.投注
declare namespace API_MATCH_BET_ADD {
  // 3.赛事注单: 3.1.投注
  type RES = {
    // No comments found.
    success: boolean
    // No comments found.
    msg: string
    // No comments found.
    code: number
    // No comments found.
    t: {
      // 单注注单收据
      singleBets: Array<{
        // 赛事信息notNull
        matchOdds: Array<{
          // 游戏类型 FT：soccer
          gameType: string
          // 赔率id
          oddsId: string
          // 赛事id
          matchId: string
          // 主队名称
          homeName: string
          // 主队名称国际化
          homeNameI18n: any
          // 主队id
          homeId: string
          // 客队名称
          awayName: string
          // 客队名称国际化
          awayNameI18n: any
          // 客队id
          awayId: string
          // 玩法分类名称
          playCateName: string
          // 玩法分类名称国际化
          playCateNameI18n: any
          // 玩法名称
          playName: string
          // 玩法名称国际化
          playNameI18n: any
          // 让球
          spread: string
          // 让球名称国际化
          spreadI18n: any
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
          // 联赛icon
          leagueIcon: string
          // 联赛名称名称国际化
          leagueNameI18n: any
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
          // 状态 0：未确认，1：未结算，2：赢，3：赢半，4：输，5：输半，6：和，7：已取消 8:兌現中 9:已兌現
          status: number
          // 国际化状态名称 key:语系 value:状态名称 ex: {"zh":"上半场","en":"first half"}
          statusNameI18n: any
          // 投注类型賽果statusNameI18n ： 国际化状态名称 key:语系 value:状态名称 ex: {"zh":"上半场","en":"first half"}score : 比分
          playCateMatchResultList: any[]
          // 下注盤口
          oddsType: string
          // 下注时赛事状态 0:早盘 1:滚球, 2:今日
          matchStatus: number
          // 国家名称
          categoryName: string
          // 国家图标
          categoryIcon: string
          // 国家代号
          categoryCode: string
          // 一个注单多个比分项，具体选项内容，目前只有篮球末位比分用到
          multiCode: any[]
          // 新末尾比分每節相关参数
          endingCardOFLWinnable: any
          // 最高可贏金額
          maximumWinnable: number
          // 用户投注卡片金额
          cardMoney: number
          // 主队图标
          homeIcon: string
          // 客队图标
          awayIcon: string
        }>
        // 投注额
        stake: number
        // 状态 0：未确认，1：未结算，2：赢，3：赢半，4：输，5：输半，6：和，7：已取消 8:兌現中 9:已兌現
        status: number
        // 可赢额
        winnable: number
        // 注单数
        num: number
        // 订单号
        orderNo: string
        // 是否是连串 0：否，1：是
        parlay: number
        // 串关类型
        parlayType: string
        // 0: 赛事赔率， 1: （赛季）冠军赔率
        eventType: number
        // 币别
        currency: string
        // 理由 status 为7的时候显示, 給前端判斷賠率已改變用
        reasonCode: string
        // 理由 status 为7的时候显示
        reason: string
        // 下注失败的赔率id
        reasonOddsId: string
        // 下注失败的赔率理由
        reasonForOdds: string
        // 下注失败编码 status 为7的时候显示
        code: any
        // 状态 0:不出現 1:出現
        cashoutStatus: number
      }>
      // 串关注单收据
      parlayBets: Array<{
        // 赛事信息notNull
        matchOdds: Array<{
          // 游戏类型 FT：soccer
          gameType: string
          // 赔率id
          oddsId: string
          // 赛事id
          matchId: string
          // 主队名称
          homeName: string
          // 主队名称国际化
          homeNameI18n: any
          // 主队id
          homeId: string
          // 客队名称
          awayName: string
          // 客队名称国际化
          awayNameI18n: any
          // 客队id
          awayId: string
          // 玩法分类名称
          playCateName: string
          // 玩法分类名称国际化
          playCateNameI18n: any
          // 玩法名称
          playName: string
          // 玩法名称国际化
          playNameI18n: any
          // 让球
          spread: string
          // 让球名称国际化
          spreadI18n: any
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
          // 联赛icon
          leagueIcon: string
          // 联赛名称名称国际化
          leagueNameI18n: any
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
          // 状态 0：未确认，1：未结算，2：赢，3：赢半，4：输，5：输半，6：和，7：已取消 8:兌現中 9:已兌現
          status: number
          // 国际化状态名称 key:语系 value:状态名称 ex: {"zh":"上半场","en":"first half"}
          statusNameI18n: any
          // 投注类型賽果statusNameI18n ： 国际化状态名称 key:语系 value:状态名称 ex: {"zh":"上半场","en":"first half"}score : 比分
          playCateMatchResultList: any[]
          // 下注盤口
          oddsType: string
          // 下注时赛事状态 0:早盘 1:滚球, 2:今日
          matchStatus: number
          // 国家名称
          categoryName: string
          // 国家图标
          categoryIcon: string
          // 国家代号
          categoryCode: string
          // 一个注单多个比分项，具体选项内容，目前只有篮球末位比分用到
          multiCode: any[]
          // 新末尾比分每節相关参数
          endingCardOFLWinnable: any
          // 最高可贏金額
          maximumWinnable: number
          // 用户投注卡片金额
          cardMoney: number
          // 主队图标
          homeIcon: string
          // 客队图标
          awayIcon: string
        }>
        // 投注额
        stake: number
        // 状态 0：未确认，1：未结算，2：赢，3：赢半，4：输，5：输半，6：和，7：已取消 8:兌現中 9:已兌現
        status: number
        // 可赢额
        winnable: number
        // 注单数
        num: number
        // 订单号
        orderNo: string
        // 是否是连串 0：否，1：是
        parlay: number
        // 串关类型
        parlayType: string
        // 0: 赛事赔率， 1: （赛季）冠军赔率
        eventType: number
        // 币别
        currency: string
        // 理由 status 为7的时候显示, 給前端判斷賠率已改變用
        reasonCode: string
        // 理由 status 为7的时候显示
        reason: string
        // 下注失败的赔率id
        reasonOddsId: string
        // 下注失败的赔率理由
        reasonForOdds: string
        // 下注失败编码 status 为7的时候显示
        code: any
        // 状态 0:不出現 1:出現
        cashoutStatus: number
      }>
      // 总投注额
      totalStake: number
      // 总可赢额
      totalWinnable: number
      // 总注单数
      totalNum: number
      // 会员画面下注金额
      userPlayAmount: number
      // 显示确认注单时间,根据用户及赛事的风险层级计算
      betConfirmTime: string
    }
  }
  // 3.赛事注单: 3.1.投注
  type REQ = {
    // 赔率列表与单注投注金额
    oddsList: Array<{
      // 赔率id
      oid: string
      // 赔率
      odds: number
      // (新)单注的下注金额
      stake?: number
      // 赔率类型 EU：欧洲盘
      oddsType: string
      // 额外信息，如让球的让分，第x个进球的x
      spread?: string
    }>
    // 额外信息，如让球的让分，第x个进球的x
    spread?: string
    // 串关投注金额
    stakeList?: Array<{
      // 串关类型：2C1：2串1,3C1：3串1,4C1：4串1,5C1：5串1,6C1：6串1,7C：17串1,8C1：8串1,9C1：9串1,10C1：10串1,3C4：3串4,4C11：4串11,5C26：5串26,6C57：6串57,7C120：7串120,8C247：8串247,9C502：9串502,10C1013：10串1013
      parlayType: string
      // 串关的下注金额
      stake?: number
    }>
    // 串关的下注金额
    stake?: number
    // 是否通知赔率变动 1：不接受更新赔率 0:接受更新赔率 2：接受更好的赔率
    oddsChangeOption: number
    // 来源（0：WEB, 1：MOBILE_BROWSER, 2：ANDROID, 3：IOS） 默认WEB
    loginSrc?: number
    // 设备号 (App专用, pc h5 可为空值)
    deviceId?: string
    // 0: 线上, 1:投注站
    channelType?: number
    // 投注站编号(线上的话为null)
    bettingStationId?: number
    // 是否跟投(0: 否, 1: 是)
    isFollowUp?: number
  }
}
// 3.赛事注单: 3.2.投注列表
declare namespace API_MATCH_BET_LIST {
  // 3.赛事注单: 3.2.投注列表
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
        // 游戏类型 FT：soccer
        gameType: string
        // 赔率id
        oddsId: string
        // 赛事id
        matchId: string
        // 主队名称
        homeName: string
        // 主队名称国际化
        homeNameI18n: any
        // 主队id
        homeId: string
        // 客队名称
        awayName: string
        // 客队名称国际化
        awayNameI18n: any
        // 客队id
        awayId: string
        // 玩法分类名称
        playCateName: string
        // 玩法分类名称国际化
        playCateNameI18n: any
        // 玩法名称
        playName: string
        // 玩法名称国际化
        playNameI18n: any
        // 让球
        spread: string
        // 让球名称国际化
        spreadI18n: any
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
        // 联赛icon
        leagueIcon: string
        // 联赛名称名称国际化
        leagueNameI18n: any
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
        // 状态 0：未确认，1：未结算，2：赢，3：赢半，4：输，5：输半，6：和，7：已取消 8:兌現中 9:已兌現
        status: number
        // 国际化状态名称 key:语系 value:状态名称 ex: {"zh":"上半场","en":"first half"}
        statusNameI18n: any
        // 投注类型賽果statusNameI18n ： 国际化状态名称 key:语系 value:状态名称 ex: {"zh":"上半场","en":"first half"}score : 比分
        playCateMatchResultList: any[]
        // 下注盤口
        oddsType: string
        // 下注时赛事状态 0:早盘 1:滚球, 2:今日
        matchStatus: number
        // 国家名称
        categoryName: string
        // 国家图标
        categoryIcon: string
        // 国家代号
        categoryCode: string
        // 一个注单多个比分项，具体选项内容，目前只有篮球末位比分用到
        multiCode: any[]
        // 新末尾比分每節相关参数
        endingCardOFLWinnable: any
        // 最高可贏金額
        maximumWinnable: number
        // 用户投注卡片金额
        cardMoney: number
        // 主队图标
        homeIcon: string
        // 客队图标
        awayIcon: string
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
      // 状态 0：未确认，1：未结算，2：赢，3：赢半，4：输，5：输半，6：和，7：已取消 8:兌現中 9:已兌現
      status: number
      // 状态 0：未開賽(等待中)，1：已開賽&完赛 (进行中)1.单注的注单「注單狀態」已開賽&完赛以綠字顯示「進行中」，未開賽以紅字顯示「等待中」。2.串关的注单「注單狀態」注單內「任一」賽事已開賽&完赛以綠字顯示「進行中」，注單內「全部」賽事皆未開賽以紅字顯示「等待中」。3.冠军不需要注单状态
      unsettleStatus: number
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
      // 是否是连串 0：不是，1：是
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
          // 游戏类型 FT：soccer
          gameType: string
          // 赔率id
          oddsId: string
          // 赛事id
          matchId: string
          // 主队名称
          homeName: string
          // 主队名称国际化
          homeNameI18n: any
          // 主队id
          homeId: string
          // 客队名称
          awayName: string
          // 客队名称国际化
          awayNameI18n: any
          // 客队id
          awayId: string
          // 玩法分类名称
          playCateName: string
          // 玩法分类名称国际化
          playCateNameI18n: any
          // 玩法名称
          playName: string
          // 玩法名称国际化
          playNameI18n: any
          // 让球
          spread: string
          // 让球名称国际化
          spreadI18n: any
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
          // 联赛icon
          leagueIcon: string
          // 联赛名称名称国际化
          leagueNameI18n: any
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
          // 状态 0：未确认，1：未结算，2：赢，3：赢半，4：输，5：输半，6：和，7：已取消 8:兌現中 9:已兌現
          status: number
          // 国际化状态名称 key:语系 value:状态名称 ex: {"zh":"上半场","en":"first half"}
          statusNameI18n: any
          // 投注类型賽果statusNameI18n ： 国际化状态名称 key:语系 value:状态名称 ex: {"zh":"上半场","en":"first half"}score : 比分
          playCateMatchResultList: any[]
          // 下注盤口
          oddsType: string
          // 下注时赛事状态 0:早盘 1:滚球, 2:今日
          matchStatus: number
          // 国家名称
          categoryName: string
          // 国家图标
          categoryIcon: string
          // 国家代号
          categoryCode: string
          // 一个注单多个比分项，具体选项内容，目前只有篮球末位比分用到
          multiCode: any[]
          // 新末尾比分每節相关参数
          endingCardOFLWinnable: any
          // 最高可贏金額
          maximumWinnable: number
          // 用户投注卡片金额
          cardMoney: number
          // 主队图标
          homeIcon: string
          // 客队图标
          awayIcon: string
        }>
      }>
      // 有效投注额
      validBetAmount: number
      // 注单确定成立时间
      betConfirmTime: string
      // 注单打印时输入的用户备注信息
      remark: string
      // 惟一号
      uniqNo: string
      // cashout 狀態 0:不可 ,1:可 ,2:按鈕不可按
      cashoutStatus: number
      // 不能cashout 原因
      cashoutMsg: string
      // cashout 金額
      cashoutAmount: number
    }>
    // cashout 金額
    cashoutAmount: number
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
        // 游戏类型 FT：soccer
        gameType: string
        // 赔率id
        oddsId: string
        // 赛事id
        matchId: string
        // 主队名称
        homeName: string
        // 主队名称国际化
        homeNameI18n: any
        // 主队id
        homeId: string
        // 客队名称
        awayName: string
        // 客队名称国际化
        awayNameI18n: any
        // 客队id
        awayId: string
        // 玩法分类名称
        playCateName: string
        // 玩法分类名称国际化
        playCateNameI18n: any
        // 玩法名称
        playName: string
        // 玩法名称国际化
        playNameI18n: any
        // 让球
        spread: string
        // 让球名称国际化
        spreadI18n: any
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
        // 联赛icon
        leagueIcon: string
        // 联赛名称名称国际化
        leagueNameI18n: any
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
        // 状态 0：未确认，1：未结算，2：赢，3：赢半，4：输，5：输半，6：和，7：已取消 8:兌現中 9:已兌現
        status: number
        // 国际化状态名称 key:语系 value:状态名称 ex: {"zh":"上半场","en":"first half"}
        statusNameI18n: any
        // 投注类型賽果statusNameI18n ： 国际化状态名称 key:语系 value:状态名称 ex: {"zh":"上半场","en":"first half"}score : 比分
        playCateMatchResultList: any[]
        // 下注盤口
        oddsType: string
        // 下注时赛事状态 0:早盘 1:滚球, 2:今日
        matchStatus: number
        // 国家名称
        categoryName: string
        // 国家图标
        categoryIcon: string
        // 国家代号
        categoryCode: string
        // 一个注单多个比分项，具体选项内容，目前只有篮球末位比分用到
        multiCode: any[]
        // 新末尾比分每節相关参数
        endingCardOFLWinnable: any
        // 最高可贏金額
        maximumWinnable: number
        // 用户投注卡片金额
        cardMoney: number
        // 主队图标
        homeIcon: string
        // 客队图标
        awayIcon: string
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
      // 状态 0：未确认，1：未结算，2：赢，3：赢半，4：输，5：输半，6：和，7：已取消 8:兌現中 9:已兌現
      status: number
      // 状态 0：未開賽(等待中)，1：已開賽&完赛 (进行中)1.单注的注单「注單狀態」已開賽&完赛以綠字顯示「進行中」，未開賽以紅字顯示「等待中」。2.串关的注单「注單狀態」注單內「任一」賽事已開賽&完赛以綠字顯示「進行中」，注單內「全部」賽事皆未開賽以紅字顯示「等待中」。3.冠军不需要注单状态
      unsettleStatus: number
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
      // 是否是连串 0：不是，1：是
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
          // 游戏类型 FT：soccer
          gameType: string
          // 赔率id
          oddsId: string
          // 赛事id
          matchId: string
          // 主队名称
          homeName: string
          // 主队名称国际化
          homeNameI18n: any
          // 主队id
          homeId: string
          // 客队名称
          awayName: string
          // 客队名称国际化
          awayNameI18n: any
          // 客队id
          awayId: string
          // 玩法分类名称
          playCateName: string
          // 玩法分类名称国际化
          playCateNameI18n: any
          // 玩法名称
          playName: string
          // 玩法名称国际化
          playNameI18n: any
          // 让球
          spread: string
          // 让球名称国际化
          spreadI18n: any
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
          // 联赛icon
          leagueIcon: string
          // 联赛名称名称国际化
          leagueNameI18n: any
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
          // 状态 0：未确认，1：未结算，2：赢，3：赢半，4：输，5：输半，6：和，7：已取消 8:兌現中 9:已兌現
          status: number
          // 国际化状态名称 key:语系 value:状态名称 ex: {"zh":"上半场","en":"first half"}
          statusNameI18n: any
          // 投注类型賽果statusNameI18n ： 国际化状态名称 key:语系 value:状态名称 ex: {"zh":"上半场","en":"first half"}score : 比分
          playCateMatchResultList: any[]
          // 下注盤口
          oddsType: string
          // 下注时赛事状态 0:早盘 1:滚球, 2:今日
          matchStatus: number
          // 国家名称
          categoryName: string
          // 国家图标
          categoryIcon: string
          // 国家代号
          categoryCode: string
          // 一个注单多个比分项，具体选项内容，目前只有篮球末位比分用到
          multiCode: any[]
          // 新末尾比分每節相关参数
          endingCardOFLWinnable: any
          // 最高可贏金額
          maximumWinnable: number
          // 用户投注卡片金额
          cardMoney: number
          // 主队图标
          homeIcon: string
          // 客队图标
          awayIcon: string
        }>
      }>
      // 有效投注额
      validBetAmount: number
      // 注单确定成立时间
      betConfirmTime: string
      // 注单打印时输入的用户备注信息
      remark: string
      // 惟一号
      uniqNo: string
      // cashout 狀態 0:不可 ,1:可 ,2:按鈕不可按
      cashoutStatus: number
      // 不能cashout 原因
      cashoutMsg: string
      // cashout 金額
      cashoutAmount: number
    }
  }
  // 3.赛事注单: 3.2.投注列表
  type REQ = {
    // 当前页
    page?: number
    // 每页条数
    pageSize?: number
    // 开始时间（时间戳）
    startTime?: string | number
    // 结束时间（时间戳）
    endTime?: string | number
    // 状态 0：未确认，1：未结算，2：赢，3：赢半，4：输，5：输半，6：和，7：已取消 8:兌現中 9:已兌現
    statusList?: any[]
    // 游戏类型 (FT:足球，BK:篮球,TN:网球, VB:网球,BM：羽球)
    gameType?: string
    // 是否只显示冠军注单,0:否 1:是
    championOnly?: number
    // 时间查询类型 默认是 addTime 下注时间 settleTime 结算时间 startTime 开赛时间
    queryTimeType?: string
    // 玩法code（如新末尾籃球比分玩法code：FS-LD-CS-OFL）
    playCateCode?: string
    // （用于区分前端和后端请求同一ES查询方法）默认来自前端
    clientType?: string
    // 订单号
    orderNo?: string
    // 赛事id
    matchId?: string
    // 状态 0：未确认，1：未结算，2：赢，3：赢半，4：输，5：输半，6：和，7：已取消
    matchOddsStatusList?: any[]
    // 是否是连串 0：不是，1：是
    parlay?: number
    // 注单流水号
    uniqNo?: string
    // 注单流水号(多笔)
    uniqNos?: any[]
    // 兑现金额
    cashoutAmount?: number
    // cashout狀態 0:不可 ,1:可
    cashoutStatusList?: any[]
  }
}
// 3.赛事注单: 3.3.帳單歷史，查詢每日已結算注單統計資料
declare namespace API_MATCH_BET_SETTLED_LIST {
  // 3.赛事注单: 3.3.帳單歷史，查詢每日已結算注單統計資料
  type RES = {
    // No comments found.
    success: boolean
    // No comments found.
    msg: string
    // No comments found.
    code: number
    // No comments found.
    rows: Array<{
      // 用户id
      userId: number
      // 平台id
      platformId: number
      // 游戏类型 FT：足球
      gameType: string
      // 統計日期前端查询时，如果date为空，那么表示为总计
      statDate: string
      // 今日结算注单（含撤单）
      settledBetNum: number
      // 今日结算注单总投注额（含撤单）
      settledBetMoney: number
      // 今日结算注单总有效投注數（不含撤单）
      validBetNum: number
      // 今日结算注单总有效投注额（不含撤单）
      validBetMoney: number
      // 盈利注单投注额
      winBetMoney: number
      // 代理退水金额
      agentRebateMoney: number
      // 会员输赢，不含退水
      vipRewardMoney: number
      // 会员退水金额
      realRebate: number
      // 会员输赢，含退水
      vipRewardMoneyWithRebate: number
      // 会员画面下注金额
      userPlayAmount: number
    }>
    // 会员画面下注金额
    userPlayAmount: number
    // No comments found.
    total: number
  }
  // 3.赛事注单: 3.3.帳單歷史，查詢每日已結算注單統計資料
  type REQ = {
    // 当前页
    page?: number
    // 每页条数
    pageSize?: number
    // 开始时间（时间戳）
    startTime?: string | number
    // 结束时间（时间戳）
    endTime?: string | number
    // 游戏类型 FT：足球
    gameType?: string
  }
}
// 3.赛事注单: 3.4.帳單歷史，查詢指定日期已結算注單明細
declare namespace API_MATCH_BET_SETTLED_DETAIL_LIST {
  // 3.赛事注单: 3.4.帳單歷史，查詢指定日期已結算注單明細
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
        // 游戏类型 FT：soccer
        gameType: string
        // 赔率id
        oddsId: string
        // 赛事id
        matchId: string
        // 主队名称
        homeName: string
        // 主队名称国际化
        homeNameI18n: any
        // 主队id
        homeId: string
        // 客队名称
        awayName: string
        // 客队名称国际化
        awayNameI18n: any
        // 客队id
        awayId: string
        // 玩法分类名称
        playCateName: string
        // 玩法分类名称国际化
        playCateNameI18n: any
        // 玩法名称
        playName: string
        // 玩法名称国际化
        playNameI18n: any
        // 让球
        spread: string
        // 让球名称国际化
        spreadI18n: any
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
        // 联赛icon
        leagueIcon: string
        // 联赛名称名称国际化
        leagueNameI18n: any
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
        // 状态 0：未确认，1：未结算，2：赢，3：赢半，4：输，5：输半，6：和，7：已取消 8:兌現中 9:已兌現
        status: number
        // 国际化状态名称 key:语系 value:状态名称 ex: {"zh":"上半场","en":"first half"}
        statusNameI18n: any
        // 投注类型賽果statusNameI18n ： 国际化状态名称 key:语系 value:状态名称 ex: {"zh":"上半场","en":"first half"}score : 比分
        playCateMatchResultList: any[]
        // 下注盤口
        oddsType: string
        // 下注时赛事状态 0:早盘 1:滚球, 2:今日
        matchStatus: number
        // 国家名称
        categoryName: string
        // 国家图标
        categoryIcon: string
        // 国家代号
        categoryCode: string
        // 一个注单多个比分项，具体选项内容，目前只有篮球末位比分用到
        multiCode: any[]
        // 新末尾比分每節相关参数
        endingCardOFLWinnable: any
        // 最高可贏金額
        maximumWinnable: number
        // 用户投注卡片金额
        cardMoney: number
        // 主队图标
        homeIcon: string
        // 客队图标
        awayIcon: string
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
      // 状态 0：未确认，1：未结算，2：赢，3：赢半，4：输，5：输半，6：和，7：已取消 8:兌現中 9:已兌現
      status: number
      // 状态 0：未開賽(等待中)，1：已開賽&完赛 (进行中)1.单注的注单「注單狀態」已開賽&完赛以綠字顯示「進行中」，未開賽以紅字顯示「等待中」。2.串关的注单「注單狀態」注單內「任一」賽事已開賽&完赛以綠字顯示「進行中」，注單內「全部」賽事皆未開賽以紅字顯示「等待中」。3.冠军不需要注单状态
      unsettleStatus: number
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
      // 是否是连串 0：不是，1：是
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
          // 游戏类型 FT：soccer
          gameType: string
          // 赔率id
          oddsId: string
          // 赛事id
          matchId: string
          // 主队名称
          homeName: string
          // 主队名称国际化
          homeNameI18n: any
          // 主队id
          homeId: string
          // 客队名称
          awayName: string
          // 客队名称国际化
          awayNameI18n: any
          // 客队id
          awayId: string
          // 玩法分类名称
          playCateName: string
          // 玩法分类名称国际化
          playCateNameI18n: any
          // 玩法名称
          playName: string
          // 玩法名称国际化
          playNameI18n: any
          // 让球
          spread: string
          // 让球名称国际化
          spreadI18n: any
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
          // 联赛icon
          leagueIcon: string
          // 联赛名称名称国际化
          leagueNameI18n: any
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
          // 状态 0：未确认，1：未结算，2：赢，3：赢半，4：输，5：输半，6：和，7：已取消 8:兌現中 9:已兌現
          status: number
          // 国际化状态名称 key:语系 value:状态名称 ex: {"zh":"上半场","en":"first half"}
          statusNameI18n: any
          // 投注类型賽果statusNameI18n ： 国际化状态名称 key:语系 value:状态名称 ex: {"zh":"上半场","en":"first half"}score : 比分
          playCateMatchResultList: any[]
          // 下注盤口
          oddsType: string
          // 下注时赛事状态 0:早盘 1:滚球, 2:今日
          matchStatus: number
          // 国家名称
          categoryName: string
          // 国家图标
          categoryIcon: string
          // 国家代号
          categoryCode: string
          // 一个注单多个比分项，具体选项内容，目前只有篮球末位比分用到
          multiCode: any[]
          // 新末尾比分每節相关参数
          endingCardOFLWinnable: any
          // 最高可贏金額
          maximumWinnable: number
          // 用户投注卡片金额
          cardMoney: number
          // 主队图标
          homeIcon: string
          // 客队图标
          awayIcon: string
        }>
      }>
      // 有效投注额
      validBetAmount: number
      // 注单确定成立时间
      betConfirmTime: string
      // 注单打印时输入的用户备注信息
      remark: string
      // 惟一号
      uniqNo: string
      // cashout 狀態 0:不可 ,1:可 ,2:按鈕不可按
      cashoutStatus: number
      // 不能cashout 原因
      cashoutMsg: string
      // cashout 金額
      cashoutAmount: number
    }>
    // cashout 金額
    cashoutAmount: number
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
        // 游戏类型 FT：soccer
        gameType: string
        // 赔率id
        oddsId: string
        // 赛事id
        matchId: string
        // 主队名称
        homeName: string
        // 主队名称国际化
        homeNameI18n: any
        // 主队id
        homeId: string
        // 客队名称
        awayName: string
        // 客队名称国际化
        awayNameI18n: any
        // 客队id
        awayId: string
        // 玩法分类名称
        playCateName: string
        // 玩法分类名称国际化
        playCateNameI18n: any
        // 玩法名称
        playName: string
        // 玩法名称国际化
        playNameI18n: any
        // 让球
        spread: string
        // 让球名称国际化
        spreadI18n: any
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
        // 联赛icon
        leagueIcon: string
        // 联赛名称名称国际化
        leagueNameI18n: any
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
        // 状态 0：未确认，1：未结算，2：赢，3：赢半，4：输，5：输半，6：和，7：已取消 8:兌現中 9:已兌現
        status: number
        // 国际化状态名称 key:语系 value:状态名称 ex: {"zh":"上半场","en":"first half"}
        statusNameI18n: any
        // 投注类型賽果statusNameI18n ： 国际化状态名称 key:语系 value:状态名称 ex: {"zh":"上半场","en":"first half"}score : 比分
        playCateMatchResultList: any[]
        // 下注盤口
        oddsType: string
        // 下注时赛事状态 0:早盘 1:滚球, 2:今日
        matchStatus: number
        // 国家名称
        categoryName: string
        // 国家图标
        categoryIcon: string
        // 国家代号
        categoryCode: string
        // 一个注单多个比分项，具体选项内容，目前只有篮球末位比分用到
        multiCode: any[]
        // 新末尾比分每節相关参数
        endingCardOFLWinnable: any
        // 最高可贏金額
        maximumWinnable: number
        // 用户投注卡片金额
        cardMoney: number
        // 主队图标
        homeIcon: string
        // 客队图标
        awayIcon: string
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
      // 状态 0：未确认，1：未结算，2：赢，3：赢半，4：输，5：输半，6：和，7：已取消 8:兌現中 9:已兌現
      status: number
      // 状态 0：未開賽(等待中)，1：已開賽&完赛 (进行中)1.单注的注单「注單狀態」已開賽&完赛以綠字顯示「進行中」，未開賽以紅字顯示「等待中」。2.串关的注单「注單狀態」注單內「任一」賽事已開賽&完赛以綠字顯示「進行中」，注單內「全部」賽事皆未開賽以紅字顯示「等待中」。3.冠军不需要注单状态
      unsettleStatus: number
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
      // 是否是连串 0：不是，1：是
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
          // 游戏类型 FT：soccer
          gameType: string
          // 赔率id
          oddsId: string
          // 赛事id
          matchId: string
          // 主队名称
          homeName: string
          // 主队名称国际化
          homeNameI18n: any
          // 主队id
          homeId: string
          // 客队名称
          awayName: string
          // 客队名称国际化
          awayNameI18n: any
          // 客队id
          awayId: string
          // 玩法分类名称
          playCateName: string
          // 玩法分类名称国际化
          playCateNameI18n: any
          // 玩法名称
          playName: string
          // 玩法名称国际化
          playNameI18n: any
          // 让球
          spread: string
          // 让球名称国际化
          spreadI18n: any
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
          // 联赛icon
          leagueIcon: string
          // 联赛名称名称国际化
          leagueNameI18n: any
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
          // 状态 0：未确认，1：未结算，2：赢，3：赢半，4：输，5：输半，6：和，7：已取消 8:兌現中 9:已兌現
          status: number
          // 国际化状态名称 key:语系 value:状态名称 ex: {"zh":"上半场","en":"first half"}
          statusNameI18n: any
          // 投注类型賽果statusNameI18n ： 国际化状态名称 key:语系 value:状态名称 ex: {"zh":"上半场","en":"first half"}score : 比分
          playCateMatchResultList: any[]
          // 下注盤口
          oddsType: string
          // 下注时赛事状态 0:早盘 1:滚球, 2:今日
          matchStatus: number
          // 国家名称
          categoryName: string
          // 国家图标
          categoryIcon: string
          // 国家代号
          categoryCode: string
          // 一个注单多个比分项，具体选项内容，目前只有篮球末位比分用到
          multiCode: any[]
          // 新末尾比分每節相关参数
          endingCardOFLWinnable: any
          // 最高可贏金額
          maximumWinnable: number
          // 用户投注卡片金额
          cardMoney: number
          // 主队图标
          homeIcon: string
          // 客队图标
          awayIcon: string
        }>
      }>
      // 有效投注额
      validBetAmount: number
      // 注单确定成立时间
      betConfirmTime: string
      // 注单打印时输入的用户备注信息
      remark: string
      // 惟一号
      uniqNo: string
      // cashout 狀態 0:不可 ,1:可 ,2:按鈕不可按
      cashoutStatus: number
      // 不能cashout 原因
      cashoutMsg: string
      // cashout 金額
      cashoutAmount: number
    }
  }
  // 3.赛事注单: 3.4.帳單歷史，查詢指定日期已結算注單明細
  type REQ = {
    // 当前页
    page?: number
    // 每页条数
    pageSize?: number
    // 开始时间（时间戳）
    startTime?: string | number
    // 结束时间（时间戳）
    endTime?: string | number
    // 统计时间,日期字串：yyyy-MM-dd
    statDate?: string
    // 游戏类型 FT：足球
    gameType?: string
  }
}
// 3.赛事注单: 3.5.获得赛事的玩法限额信息(下注前获取）,免登入即可访问
declare namespace API_MATCH_BET_INFO {
  // 3.赛事注单: 3.5.获得赛事的玩法限额信息(下注前获取）,免登入即可访问
  type RES = {
    // No comments found.
    success: boolean
    // No comments found.
    msg: string
    // No comments found.
    code: number
    // No comments found.
    t: {
      // 弃用, 玩法单注投注最大金额, 0为不限制 调整为 maxBetMoney
      playMaxBetSingleBet: number
      // 单注最大下注额, 0 为不限制
      maxBetMoney: number
      // 单注最小下注额, 0 为不限制
      minBetMoney: number
      // 单注最大赔付额, 0 为不限制
      maxPayout: number
      // 串关最大下注额, 0 为不限制
      maxParlayBetMoney: number
      // 串关最小下注额, 0 为不限制
      minParlayBetMoney: number
      // 串关最大赔付额, 0 为不限制
      maxParlayPayout: number
      // 单注冠军最大下注额, 0 为不限制
      maxCpBetMoney: number
      // 单注冠军最小下注额, 0 为不限制
      minCpBetMoney: number
      // 单注冠军最大赔付额, 0 为不限制
      maxCpPayout: number
      // 賠率狀態 0:活跃可用，可投注、1：临时锁定，不允许投注、2：不可用，不可见也不可投注
      status: number
      // 赔率编号
      oid: string
      // 单注下注副盘口百分比例
      maxBetSingleBetSubPercent: number
      // 赛事/赛季可用状态 0:开启,1:关闭
      matchStatus: number
      // 联赛可用状态 0：开启，1：关闭
      leagueStatus: number
      // 玩法是否可串关 0:不可 1:可
      parlayStatus: number
      // cashout 狀態 0:不可 ,1:可
      cashoutStatus: number
    }
  }
  // 3.赛事注单: 3.5.获得赛事的玩法限额信息(下注前获取）,免登入即可访问
  type REQ = {
    // 赛事编号
    matchId: string
    // 赔率编号
    oid: string
  }
}
// 3.赛事注单: 3.6.获得赛事的玩法限额信息(下注前获取）,免登入即可访问
declare namespace API_MATCH_BET_INFO_LIST {
  // 3.赛事注单: 3.6.获得赛事的玩法限额信息(下注前获取）,免登入即可访问
  type RES = {
    // No comments found.
    success: boolean
    // No comments found.
    msg: string
    // No comments found.
    code: number
    // No comments found.
    rows: Array<{
      // 弃用, 玩法单注投注最大金额, 0为不限制 调整为 maxBetMoney
      playMaxBetSingleBet: number
      // 单注最大下注额, 0 为不限制
      maxBetMoney: number
      // 单注最小下注额, 0 为不限制
      minBetMoney: number
      // 单注最大赔付额, 0 为不限制
      maxPayout: number
      // 串关最大下注额, 0 为不限制
      maxParlayBetMoney: number
      // 串关最小下注额, 0 为不限制
      minParlayBetMoney: number
      // 串关最大赔付额, 0 为不限制
      maxParlayPayout: number
      // 单注冠军最大下注额, 0 为不限制
      maxCpBetMoney: number
      // 单注冠军最小下注额, 0 为不限制
      minCpBetMoney: number
      // 单注冠军最大赔付额, 0 为不限制
      maxCpPayout: number
      // 賠率狀態 0:活跃可用，可投注、1：临时锁定，不允许投注、2：不可用，不可见也不可投注
      status: number
      // 赔率编号
      oid: string
      // 单注下注副盘口百分比例
      maxBetSingleBetSubPercent: number
      // 赛事/赛季可用状态 0:开启,1:关闭
      matchStatus: number
      // 联赛可用状态 0：开启，1：关闭
      leagueStatus: number
      // 玩法是否可串关 0:不可 1:可
      parlayStatus: number
      // cashout 狀態 0:不可 ,1:可
      cashoutStatus: number
    }>
    // cashout 狀態 0:不可 ,1:可
    cashoutStatus: number
    // No comments found.
    total: number
  }
  // 3.赛事注单: 3.6.获得赛事的玩法限额信息(下注前获取）,免登入即可访问
  type REQ = {
    // 赛事编号
    matchId: string
    // 赔率编号
    oidList: any[]
  }
}
// 3.赛事注单: 3.7.h5未结算投注列表
declare namespace API_MATCH_BET_MOBILE_UNSETTLE_LIST {
  // 3.赛事注单: 3.7.h5未结算投注列表
  type RES = {
    // No comments found.
    success: boolean
    // No comments found.
    msg: string
    // No comments found.
    code: number
    // No comments found.
    rows: Array<{
      // 統計日期前端查询时，如果date为空，那么表示为总计
      statDate: string
      // 今日结算注单
      betNum: number
      // 今日注单总投注额
      betMoney: number
      // 今日注单总有效投注數
      validBetNum: number
      // 今日注单总有效投注额
      validBetMoney: number
      // 可赢金额
      winnable: number
    }>
    // 可赢金额
    winnable: number
    // No comments found.
    total: number
    // No comments found.
    other: {
      // 統計日期前端查询时，如果date为空，那么表示为总计
      statDate: string
      // 今日结算注单
      betNum: number
      // 今日注单总投注额
      betMoney: number
      // 今日注单总有效投注數
      validBetNum: number
      // 今日注单总有效投注额
      validBetMoney: number
      // 可赢金额
      winnable: number
    }
  }
  // 3.赛事注单: 3.7.h5未结算投注列表
  type REQ = {
    // 当前页
    page?: number
    // 每页条数
    pageSize?: number
    // 开始时间（时间戳）
    startTime?: string | number
    // 结束时间（时间戳）
    endTime?: string | number
    // 游戏类型 FT：足球
    gameType?: string
  }
}
// 3.赛事注单: 3.8.h5 帳單歷史，查詢每日已結算注單統計資料
declare namespace API_MATCH_BET_MOBILE_SETTLED_LIST {
  // 3.赛事注单: 3.8.h5 帳單歷史，查詢每日已結算注單統計資料
  type RES = {
    // No comments found.
    success: boolean
    // No comments found.
    msg: string
    // No comments found.
    code: number
    // No comments found.
    rows: Array<{
      // 用户id
      userId: number
      // 平台id
      platformId: number
      // 游戏类型 FT：足球
      gameType: string
      // 統計日期前端查询时，如果date为空，那么表示为总计
      statDate: string
      // 今日结算注单（含撤单）
      settledBetNum: number
      // 今日结算注单总投注额（含撤单）
      settledBetMoney: number
      // 今日结算注单总有效投注數（不含撤单）
      validBetNum: number
      // 今日结算注单总有效投注额（不含撤单）
      validBetMoney: number
      // 盈利注单投注额
      winBetMoney: number
      // 代理退水金额
      agentRebateMoney: number
      // 会员输赢，不含退水
      vipRewardMoney: number
      // 会员退水金额
      realRebate: number
      // 会员输赢，含退水
      vipRewardMoneyWithRebate: number
      // 会员画面下注金额
      userPlayAmount: number
    }>
    // 会员画面下注金额
    userPlayAmount: number
    // No comments found.
    total: number
    // No comments found.
    other: {
      // 用户id
      userId: number
      // 平台id
      platformId: number
      // 游戏类型 FT：足球
      gameType: string
      // 統計日期前端查询时，如果date为空，那么表示为总计
      statDate: string
      // 今日结算注单（含撤单）
      settledBetNum: number
      // 今日结算注单总投注额（含撤单）
      settledBetMoney: number
      // 今日结算注单总有效投注數（不含撤单）
      validBetNum: number
      // 今日结算注单总有效投注额（不含撤单）
      validBetMoney: number
      // 盈利注单投注额
      winBetMoney: number
      // 代理退水金额
      agentRebateMoney: number
      // 会员输赢，不含退水
      vipRewardMoney: number
      // 会员退水金额
      realRebate: number
      // 会员输赢，含退水
      vipRewardMoneyWithRebate: number
      // 会员画面下注金额
      userPlayAmount: number
    }
  }
  // 3.赛事注单: 3.8.h5 帳單歷史，查詢每日已結算注單統計資料
  type REQ = {
    // 当前页
    page?: number
    // 每页条数
    pageSize?: number
    // 开始时间（时间戳）
    startTime?: string | number
    // 结束时间（时间戳）
    endTime?: string | number
    // 游戏类型 FT：足球
    gameType?: string
  }
}
// 3.赛事注单: 3.9.注单兑现
declare namespace API_MATCH_BET_CASHOUT {
  // 3.赛事注单: 3.9.注单兑现
  type RES = {
    // No comments found.
    success: boolean
    // No comments found.
    msg: string
    // No comments found.
    code: number
    // No comments found.
    t: {
      // 状态 0:失败 1:成功 2:确认金额
      status: number
      // 兑现金额
      cashoutAmount: number
    }
  }
  // 3.赛事注单: 3.9.注单兑现
  type REQ = {
    // 当前页
    page?: number
    // 每页条数
    pageSize?: number
    // 开始时间（时间戳）
    startTime?: string | number
    // 结束时间（时间戳）
    endTime?: string | number
    // 状态 0：未确认，1：未结算，2：赢，3：赢半，4：输，5：输半，6：和，7：已取消 8:兌現中 9:已兌現
    statusList?: any[]
    // 游戏类型 (FT:足球，BK:篮球,TN:网球, VB:网球,BM：羽球)
    gameType?: string
    // 是否只显示冠军注单,0:否 1:是
    championOnly?: number
    // 时间查询类型 默认是 addTime 下注时间 settleTime 结算时间 startTime 开赛时间
    queryTimeType?: string
    // 玩法code（如新末尾籃球比分玩法code：FS-LD-CS-OFL）
    playCateCode?: string
    // （用于区分前端和后端请求同一ES查询方法）默认来自前端
    clientType?: string
    // 订单号
    orderNo?: string
    // 赛事id
    matchId?: string
    // 状态 0：未确认，1：未结算，2：赢，3：赢半，4：输，5：输半，6：和，7：已取消
    matchOddsStatusList?: any[]
    // 是否是连串 0：不是，1：是
    parlay?: number
    // 注单流水号
    uniqNo?: string
    // 注单流水号(多笔)
    uniqNos?: any[]
    // 兑现金额
    cashoutAmount?: number
    // cashout狀態 0:不可 ,1:可
    cashoutStatusList?: any[]
  }
}
// 3.赛事注单: 3.10.確認 cashout注单 狀態
declare namespace API_MATCH_BET_CHECKCASHOUTSTATUS {
  // 3.赛事注单: 3.10.確認 cashout注单 狀態
  type RES = {
    // No comments found.
    success: boolean
    // No comments found.
    msg: string
    // No comments found.
    code: number
    // No comments found.
    rows: Array<{
      // 惟一号
      uniqNo: string
      // 订单号
      orderNo: string
      // 状态 1:Enabled 2:Disabled
      cashoutStatus: number
      // 兑现金额
      cashoutAmount: number
    }>
    // 兑现金额
    cashoutAmount: number
    // No comments found.
    total: number
  }
  // 3.赛事注单: 3.10.確認 cashout注单 狀態
  type REQ = {
    // 当前页
    page?: number
    // 每页条数
    pageSize?: number
    // 开始时间（时间戳）
    startTime?: string | number
    // 结束时间（时间戳）
    endTime?: string | number
    // 状态 0：未确认，1：未结算，2：赢，3：赢半，4：输，5：输半，6：和，7：已取消 8:兌現中 9:已兌現
    statusList?: any[]
    // 游戏类型 (FT:足球，BK:篮球,TN:网球, VB:网球,BM：羽球)
    gameType?: string
    // 是否只显示冠军注单,0:否 1:是
    championOnly?: number
    // 时间查询类型 默认是 addTime 下注时间 settleTime 结算时间 startTime 开赛时间
    queryTimeType?: string
    // 玩法code（如新末尾籃球比分玩法code：FS-LD-CS-OFL）
    playCateCode?: string
    // （用于区分前端和后端请求同一ES查询方法）默认来自前端
    clientType?: string
    // 订单号
    orderNo?: string
    // 赛事id
    matchId?: string
    // 状态 0：未确认，1：未结算，2：赢，3：赢半，4：输，5：输半，6：和，7：已取消
    matchOddsStatusList?: any[]
    // 是否是连串 0：不是，1：是
    parlay?: number
    // 注单流水号
    uniqNo?: string
    // 注单流水号(多笔)
    uniqNos?: any[]
    // 兑现金额
    cashoutAmount?: number
    // cashout狀態 0:不可 ,1:可
    cashoutStatusList?: any[]
  }
}
// 3.赛事注单: 3.11.查詢賽事or賽事賠率cashout status
declare namespace API_MATCH_BET_CASHOUT_STATUS {
  // 3.赛事注单: 3.11.查詢賽事or賽事賠率cashout status
  type RES = {
    // No comments found.
    success: boolean
    // No comments found.
    msg: string
    // No comments found.
    code: number
  }
  // 3.赛事注单: 3.11.查詢賽事or賽事賠率cashout status
  type REQ = {
    // 游戏类型 FT：soccer
    gameType?: string
    // 赔率id
    oddsId?: string
    // 赛事id
    matchId?: string
    // 主队名称
    homeName?: string
    // 主队名称国际化
    homeNameI18n?: any
    // 主队id
    homeId?: string
    // 客队名称
    awayName?: string
    // 客队名称国际化
    awayNameI18n?: any
    // 客队id
    awayId?: string
    // 玩法分类名称
    playCateName?: string
    // 玩法分类名称国际化
    playCateNameI18n?: any
    // 玩法名称
    playName?: string
    // 玩法名称国际化
    playNameI18n?: any
    // 让球
    spread?: string
    // 让球名称国际化
    spreadI18n?: any
    // 其他信息,如更优赔率的玩法名称,特定玩法的球员名称
    extInfo?: string
    // 欧洲盘赔率
    odds?: number
    // 香港盘赔率
    hkOdds?: number
    // 印尼盘赔率
    indoOdds?: number
    // 马来盘赔率
    malayOdds?: number
    // 联赛id
    leagueId?: string
    // 联赛名称
    leagueName?: string
    // 联赛icon
    leagueIcon?: string
    // 联赛名称名称国际化
    leagueNameI18n?: any
    // 玩法
    playId?: number
    // 投注类型
    playCateId?: number
    // 玩法分类代码
    playCateCode?: string
    // 玩法代码
    playCode?: string
    // 投注类型賽果
    playCateMatchResult?: string
    // 实时比分，小金让球盘玩法结算时使用，如： 2-1
    rtScore?: string
    // 开赛时间
    startTime?: string | number
    // 结束时间
    endTime?: string | number
    // 状态 0：未确认，1：未结算，2：赢，3：赢半，4：输，5：输半，6：和，7：已取消 8:兌現中 9:已兌現
    status?: number
    // 国际化状态名称 key:语系 value:状态名称 ex: {"zh":"上半场","en":"first half"}
    statusNameI18n?: any
    // 投注类型賽果statusNameI18n ： 国际化状态名称 key:语系 value:状态名称 ex: {"zh":"上半场","en":"first half"}score : 比分
    playCateMatchResultList?: any[]
    // 下注盤口
    oddsType?: string
    // 下注时赛事状态 0:早盘 1:滚球, 2:今日
    matchStatus?: number
    // 国家名称
    categoryName?: string
    // 国家图标
    categoryIcon?: string
    // 国家代号
    categoryCode?: string
    // 一个注单多个比分项，具体选项内容，目前只有篮球末位比分用到
    multiCode?: any[]
    // 新末尾比分每節相关参数
    endingCardOFLWinnable?: any
    // 最高可贏金額
    maximumWinnable?: number
    // 用户投注卡片金额
    cardMoney?: number
    // 主队图标
    homeIcon?: string
    // 客队图标
    awayIcon?: string
  }
}
// 3.赛事注单: 3.12.备注注单信息
declare namespace API_MATCH_BET_REMARK {
  // 3.赛事注单: 3.12.备注注单信息
  type RES = {
    // No comments found.
    success: boolean
    // No comments found.
    msg: string
    // No comments found.
    code: number
    // No comments found.
    t: {
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
        // 游戏类型 FT：soccer
        gameType: string
        // 赔率id
        oddsId: string
        // 赛事id
        matchId: string
        // 主队名称
        homeName: string
        // 主队名称国际化
        homeNameI18n: any
        // 主队id
        homeId: string
        // 客队名称
        awayName: string
        // 客队名称国际化
        awayNameI18n: any
        // 客队id
        awayId: string
        // 玩法分类名称
        playCateName: string
        // 玩法分类名称国际化
        playCateNameI18n: any
        // 玩法名称
        playName: string
        // 玩法名称国际化
        playNameI18n: any
        // 让球
        spread: string
        // 让球名称国际化
        spreadI18n: any
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
        // 联赛icon
        leagueIcon: string
        // 联赛名称名称国际化
        leagueNameI18n: any
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
        // 状态 0：未确认，1：未结算，2：赢，3：赢半，4：输，5：输半，6：和，7：已取消 8:兌現中 9:已兌現
        status: number
        // 国际化状态名称 key:语系 value:状态名称 ex: {"zh":"上半场","en":"first half"}
        statusNameI18n: any
        // 投注类型賽果statusNameI18n ： 国际化状态名称 key:语系 value:状态名称 ex: {"zh":"上半场","en":"first half"}score : 比分
        playCateMatchResultList: any[]
        // 下注盤口
        oddsType: string
        // 下注时赛事状态 0:早盘 1:滚球, 2:今日
        matchStatus: number
        // 国家名称
        categoryName: string
        // 国家图标
        categoryIcon: string
        // 国家代号
        categoryCode: string
        // 一个注单多个比分项，具体选项内容，目前只有篮球末位比分用到
        multiCode: any[]
        // 新末尾比分每節相关参数
        endingCardOFLWinnable: any
        // 最高可贏金額
        maximumWinnable: number
        // 用户投注卡片金额
        cardMoney: number
        // 主队图标
        homeIcon: string
        // 客队图标
        awayIcon: string
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
      // 状态 0：未确认，1：未结算，2：赢，3：赢半，4：输，5：输半，6：和，7：已取消 8:兌現中 9:已兌現
      status: number
      // 状态 0：未開賽(等待中)，1：已開賽&完赛 (进行中)1.单注的注单「注單狀態」已開賽&完赛以綠字顯示「進行中」，未開賽以紅字顯示「等待中」。2.串关的注单「注單狀態」注單內「任一」賽事已開賽&完赛以綠字顯示「進行中」，注單內「全部」賽事皆未開賽以紅字顯示「等待中」。3.冠军不需要注单状态
      unsettleStatus: number
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
      // 是否是连串 0：不是，1：是
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
          // 游戏类型 FT：soccer
          gameType: string
          // 赔率id
          oddsId: string
          // 赛事id
          matchId: string
          // 主队名称
          homeName: string
          // 主队名称国际化
          homeNameI18n: any
          // 主队id
          homeId: string
          // 客队名称
          awayName: string
          // 客队名称国际化
          awayNameI18n: any
          // 客队id
          awayId: string
          // 玩法分类名称
          playCateName: string
          // 玩法分类名称国际化
          playCateNameI18n: any
          // 玩法名称
          playName: string
          // 玩法名称国际化
          playNameI18n: any
          // 让球
          spread: string
          // 让球名称国际化
          spreadI18n: any
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
          // 联赛icon
          leagueIcon: string
          // 联赛名称名称国际化
          leagueNameI18n: any
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
          // 状态 0：未确认，1：未结算，2：赢，3：赢半，4：输，5：输半，6：和，7：已取消 8:兌現中 9:已兌現
          status: number
          // 国际化状态名称 key:语系 value:状态名称 ex: {"zh":"上半场","en":"first half"}
          statusNameI18n: any
          // 投注类型賽果statusNameI18n ： 国际化状态名称 key:语系 value:状态名称 ex: {"zh":"上半场","en":"first half"}score : 比分
          playCateMatchResultList: any[]
          // 下注盤口
          oddsType: string
          // 下注时赛事状态 0:早盘 1:滚球, 2:今日
          matchStatus: number
          // 国家名称
          categoryName: string
          // 国家图标
          categoryIcon: string
          // 国家代号
          categoryCode: string
          // 一个注单多个比分项，具体选项内容，目前只有篮球末位比分用到
          multiCode: any[]
          // 新末尾比分每節相关参数
          endingCardOFLWinnable: any
          // 最高可贏金額
          maximumWinnable: number
          // 用户投注卡片金额
          cardMoney: number
          // 主队图标
          homeIcon: string
          // 客队图标
          awayIcon: string
        }>
      }>
      // 有效投注额
      validBetAmount: number
      // 注单确定成立时间
      betConfirmTime: string
      // 注单打印时输入的用户备注信息
      remark: string
      // 惟一号
      uniqNo: string
      // cashout 狀態 0:不可 ,1:可 ,2:按鈕不可按
      cashoutStatus: number
      // 不能cashout 原因
      cashoutMsg: string
      // cashout 金額
      cashoutAmount: number
      // 篮球末位比分玩法专用的选项名称，如果非篮球末位比分就是空的list
      endingCardNames: any[]
      // 系统货币类型符号，例如 ，₱ ， ¥ ， $ , ₫
      systemCurrencySign: string
    }
  }
  // 3.赛事注单: 3.12.备注注单信息
  type REQ = {
    // 注单号
    orderNo: string
    // 注单打印 用户备注信息 真实姓名或手机号
    remark: string
    // 下注时间
    addTime: string
  }
}
// 3.赛事注单: 3.13.透过QR Code获取注单信息
declare namespace API_MATCH_BET_QRSCAN {
  // 3.赛事注单: 3.13.透过QR Code获取注单信息
  type RES = {
    // No comments found.
    success: boolean
    // No comments found.
    msg: string
    // No comments found.
    code: number
    // No comments found.
    t: {
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
        // 游戏类型 FT：soccer
        gameType: string
        // 赔率id
        oddsId: string
        // 赛事id
        matchId: string
        // 主队名称
        homeName: string
        // 主队名称国际化
        homeNameI18n: any
        // 主队id
        homeId: string
        // 客队名称
        awayName: string
        // 客队名称国际化
        awayNameI18n: any
        // 客队id
        awayId: string
        // 玩法分类名称
        playCateName: string
        // 玩法分类名称国际化
        playCateNameI18n: any
        // 玩法名称
        playName: string
        // 玩法名称国际化
        playNameI18n: any
        // 让球
        spread: string
        // 让球名称国际化
        spreadI18n: any
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
        // 联赛icon
        leagueIcon: string
        // 联赛名称名称国际化
        leagueNameI18n: any
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
        // 状态 0：未确认，1：未结算，2：赢，3：赢半，4：输，5：输半，6：和，7：已取消 8:兌現中 9:已兌現
        status: number
        // 国际化状态名称 key:语系 value:状态名称 ex: {"zh":"上半场","en":"first half"}
        statusNameI18n: any
        // 投注类型賽果statusNameI18n ： 国际化状态名称 key:语系 value:状态名称 ex: {"zh":"上半场","en":"first half"}score : 比分
        playCateMatchResultList: any[]
        // 下注盤口
        oddsType: string
        // 下注时赛事状态 0:早盘 1:滚球, 2:今日
        matchStatus: number
        // 国家名称
        categoryName: string
        // 国家图标
        categoryIcon: string
        // 国家代号
        categoryCode: string
        // 一个注单多个比分项，具体选项内容，目前只有篮球末位比分用到
        multiCode: any[]
        // 新末尾比分每節相关参数
        endingCardOFLWinnable: any
        // 最高可贏金額
        maximumWinnable: number
        // 用户投注卡片金额
        cardMoney: number
        // 主队图标
        homeIcon: string
        // 客队图标
        awayIcon: string
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
      // 状态 0：未确认，1：未结算，2：赢，3：赢半，4：输，5：输半，6：和，7：已取消 8:兌現中 9:已兌現
      status: number
      // 状态 0：未開賽(等待中)，1：已開賽&完赛 (进行中)1.单注的注单「注單狀態」已開賽&完赛以綠字顯示「進行中」，未開賽以紅字顯示「等待中」。2.串关的注单「注單狀態」注單內「任一」賽事已開賽&完赛以綠字顯示「進行中」，注單內「全部」賽事皆未開賽以紅字顯示「等待中」。3.冠军不需要注单状态
      unsettleStatus: number
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
      // 是否是连串 0：不是，1：是
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
          // 游戏类型 FT：soccer
          gameType: string
          // 赔率id
          oddsId: string
          // 赛事id
          matchId: string
          // 主队名称
          homeName: string
          // 主队名称国际化
          homeNameI18n: any
          // 主队id
          homeId: string
          // 客队名称
          awayName: string
          // 客队名称国际化
          awayNameI18n: any
          // 客队id
          awayId: string
          // 玩法分类名称
          playCateName: string
          // 玩法分类名称国际化
          playCateNameI18n: any
          // 玩法名称
          playName: string
          // 玩法名称国际化
          playNameI18n: any
          // 让球
          spread: string
          // 让球名称国际化
          spreadI18n: any
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
          // 联赛icon
          leagueIcon: string
          // 联赛名称名称国际化
          leagueNameI18n: any
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
          // 状态 0：未确认，1：未结算，2：赢，3：赢半，4：输，5：输半，6：和，7：已取消 8:兌現中 9:已兌現
          status: number
          // 国际化状态名称 key:语系 value:状态名称 ex: {"zh":"上半场","en":"first half"}
          statusNameI18n: any
          // 投注类型賽果statusNameI18n ： 国际化状态名称 key:语系 value:状态名称 ex: {"zh":"上半场","en":"first half"}score : 比分
          playCateMatchResultList: any[]
          // 下注盤口
          oddsType: string
          // 下注时赛事状态 0:早盘 1:滚球, 2:今日
          matchStatus: number
          // 国家名称
          categoryName: string
          // 国家图标
          categoryIcon: string
          // 国家代号
          categoryCode: string
          // 一个注单多个比分项，具体选项内容，目前只有篮球末位比分用到
          multiCode: any[]
          // 新末尾比分每節相关参数
          endingCardOFLWinnable: any
          // 最高可贏金額
          maximumWinnable: number
          // 用户投注卡片金额
          cardMoney: number
          // 主队图标
          homeIcon: string
          // 客队图标
          awayIcon: string
        }>
      }>
      // 有效投注额
      validBetAmount: number
      // 注单确定成立时间
      betConfirmTime: string
      // 注单打印时输入的用户备注信息
      remark: string
      // 惟一号
      uniqNo: string
      // cashout 狀態 0:不可 ,1:可 ,2:按鈕不可按
      cashoutStatus: number
      // 不能cashout 原因
      cashoutMsg: string
      // cashout 金額
      cashoutAmount: number
      // 篮球末位比分玩法专用的选项名称，如果非篮球末位比分就是空的list
      endingCardNames: any[]
      // 系统货币类型符号，例如 ，₱ ， ¥ ， $ , ₫
      systemCurrencySign: string
    }
  }
  // 3.赛事注单: 3.13.透过QR Code获取注单信息
  type REQ = {
    // 注单唯一编号
    uniqNo: string
    // 下注时间
    addTime: string
  }
}
// 4.冠军赔率信息: 4.1.冠军大厅赔率列表,免登入即可访问
declare namespace API_OUTRIGHT_ODDS_LIST {
  // 4.冠军赔率信息: 4.1.冠军大厅赔率列表,免登入即可访问
  type RES = {
    // No comments found.
    success: boolean
    // No comments found.
    msg: string
    // No comments found.
    code: number
    // No comments found.
    t: {
      // 体育项目notNull
      sport: {
        // code,FT:足球，BK:篮球notNull
        code: string
        // 名称,如：足球，篮球notNull
        name: string
      }
      // 联赛&赔率notNull
      leagueOdds: Array<{
        // 联赛/赛季notNull
        league: {
          // 联赛/赛季id
          id: string
          // 名称
          name: string
          // 国家Code
          categoryCode: string
          // 国家
          category: string
          // 国家图标,svg的html元素(已进行UrlEncoded)
          categoryIcon: string
          // 联赛简称
          shortName: string
          // 联盟icon
          icon: string
        }
        // 赛事或赛季赔率notNull
        matchOdds: Array<{
          // 赛事信息notNull
          matchInfo: {
            // 赛事或赛季id
            id: string
            // 联赛id
            leagueId: string
            // 联赛名称
            leagueName: string
            // 主队id
            homeId: string
            // 主队名称
            homeName: string
            // 客队id
            awayId: string
            // 客队名称
            awayName: string
            // 赛事或赛季开始时间
            startTime: string | number
            // 赛事或赛季结束时间
            endTime: string | number
            // 赛事状态 0：未开始，1：比赛中，2：已结束，3：延期，4：已取消
            status: number
            // 该赛事之全部可投注玩法类数量
            playCateNum: number
            // 賽季名稱
            name: string
            // 圖片
            img: string
            // 訊息
            msg: string
            // 是否可以参加过关，0：否，1：是
            parlay: number
            // 有无赛事直播 0:无 1:有
            liveVideo: number
            // 是否是中立场，1：是，0：否
            neutral: number
            // 是否有特优赔率，1：是，0：否
            eps: number
            // 赛事的赛制类型,目前仅网球排球需要显示,0:默认值 3:三战两胜 5:五战三胜...
            spt: number
            // 动画映射id
            trackerId: string
            // 小金直播id
            tvId: string
            // 第三方直播id
            streamId: string
            // 游戏类型
            gameType: string
            // 数据源
            source: number
            // 主队图标
            homeIcon: string
            // 主队图标(svg)
            homeIconSvg: string
            // 客队图标
            awayIcon: string
            // 客队图标(svg)
            awayIconSvg: string
            // 是否滚盘中 0：否，1：是
            inplay: number
            // 是否有主播直播 0：否，1：是
            isLive: number
            // 房间号
            roundNo: string
            // 主播头像
            streamerIcon: string
            // 主播名称
            StreamerName: string
            // 封面路径
            frontCoverUrl: string
            // 赛事事件列表,结构同ws推送的消息格式,主要提供给推荐赛事/热门赛事接口获取比分与时间,对应ws事件名称为MATCH_STATUS_CHANGE/MATCH_CLOCK
            eventList: Array<{
              // No comments found.
              eventType: string
            }>
            // No comments found.
            eventType: string
            // 是否为fiba赛事
            isFiba: boolean
            // 是否为欧洲杯赛事
            isEuropeCup: boolean
            // cashout 狀態 0:不可 ,1:可
            cashoutStatus: number
          }
          // 动态市场字典(冠军玩法有效)， key: 对应odds的key, value: {zh:"xxx",en:"cxxewe"}
          dynamicMarkets: any
          // odds map的取key顺序(逗号分隔),ex:HDP,1X2... 表示key先取HDP,再取1X2
          oddsSort: string
          // 赔率 key=>玩法类型code value=>赔率列表
          odds: {
            [key: string]: {
              // 赔率idnullable
              id: string
              // 玩法类名称nullable
              name: string
              // 让分或大小分值nullable
              spread: string
              // 额外信息nullable
              extInfo: string
              // 欧洲盘赔率nullable
              odds: number
              // 香港盘赔率nullable
              hkOdds: number
              // 马来盘赔率
              malayOdds: number
              // 印尼盘赔率
              indoOdds: number
              // 市场排序，用于让球等玩法的排序
              marketSort: number
              // 0:活跃可用，可投注、1：临时锁定，不允许投注、2：不可用，不可见也不可投注nullable
              status: number
              // 赔率生产者nullable
              producerId: number
              // 保存各语系name对应值的map
              nameMap: any
              // 保存各语系extInfo对应值的map
              extInfoMap: any
              // 游戏类型 FT:soccer,BK:Basketball,BS:Baseball,FS:Outright,OP:Other,TN:Tennis,VB:Volleyball,BM:Badminton,TT:table tennis
              gameType: string
              // 玩法分类id
              playCateId: number
              // 玩法分类代码
              playCateCode: string
              // 玩法编码
              playCode: string
              // 賠率分組
              group: string
              // 版本号
              version: number
            }
          }
          // 赔率陣列
          oddsList: Array<{
            // 赔率idnullable
            id: string
            // 玩法类名称nullable
            name: string
            // 让分或大小分值nullable
            spread: string
            // 额外信息nullable
            extInfo: string
            // 欧洲盘赔率nullable
            odds: number
            // 香港盘赔率nullable
            hkOdds: number
            // 马来盘赔率
            malayOdds: number
            // 印尼盘赔率
            indoOdds: number
            // 市场排序，用于让球等玩法的排序
            marketSort: number
            // 0:活跃可用，可投注、1：临时锁定，不允许投注、2：不可用，不可见也不可投注nullable
            status: number
            // 赔率生产者nullable
            producerId: number
            // 保存各语系name对应值的map
            nameMap: any
            // 保存各语系extInfo对应值的map
            extInfoMap: any
            // 游戏类型 FT:soccer,BK:Basketball,BS:Baseball,FS:Outright,OP:Other,TN:Tennis,VB:Volleyball,BM:Badminton,TT:table tennis
            gameType: string
            // 玩法分类id
            playCateId: number
            // 玩法分类代码
            playCateCode: string
            // 玩法编码
            playCode: string
            // 賠率分組
            group: string
            // 版本号
            version: number
          }>
          // 赛事可玩的快捷玩法列表
          quickPlayCateList: Array<{
            // 游戏类型,如： FT篮球，BK篮球
            gameType: string
            // 代码
            code: string
            // 名称，如：让球/大小盘
            name: string
            // menu 排序
            sort: number
          }>
          // 大厅玩法对应名称
          playCateNameMap: any
          // 玩法实际名称(注单显示用)
          betPlayCateNameMap: any
          // dynamic玩法排序 (冠軍用)
          dynamicSort: string
          // 新版篮球末位比分自己投注的数量
          bkEndCarkOFLCount: number
          // 賠率的數量
          oddsNumMap: any
        }>
        // 排序
        sort: number
        // 是否展开，0：否，1：是
        unfold: number
        // 玩法赔率排序,同时代表该菜单下总共有的全部玩法
        oddsSort: string
        // 玩法对应名称
        playCateNameMap: any
      }>
      // 加时联赛&赔率
      otLeagueOdds: Array<{
        // 联赛/赛季notNull
        league: {
          // 联赛/赛季id
          id: string
          // 名称
          name: string
          // 国家Code
          categoryCode: string
          // 国家
          category: string
          // 国家图标,svg的html元素(已进行UrlEncoded)
          categoryIcon: string
          // 联赛简称
          shortName: string
          // 联盟icon
          icon: string
        }
        // 赛事或赛季赔率notNull
        matchOdds: Array<{
          // 赛事信息notNull
          matchInfo: {
            // 赛事或赛季id
            id: string
            // 联赛id
            leagueId: string
            // 联赛名称
            leagueName: string
            // 主队id
            homeId: string
            // 主队名称
            homeName: string
            // 客队id
            awayId: string
            // 客队名称
            awayName: string
            // 赛事或赛季开始时间
            startTime: string | number
            // 赛事或赛季结束时间
            endTime: string | number
            // 赛事状态 0：未开始，1：比赛中，2：已结束，3：延期，4：已取消
            status: number
            // 该赛事之全部可投注玩法类数量
            playCateNum: number
            // 賽季名稱
            name: string
            // 圖片
            img: string
            // 訊息
            msg: string
            // 是否可以参加过关，0：否，1：是
            parlay: number
            // 有无赛事直播 0:无 1:有
            liveVideo: number
            // 是否是中立场，1：是，0：否
            neutral: number
            // 是否有特优赔率，1：是，0：否
            eps: number
            // 赛事的赛制类型,目前仅网球排球需要显示,0:默认值 3:三战两胜 5:五战三胜...
            spt: number
            // 动画映射id
            trackerId: string
            // 小金直播id
            tvId: string
            // 第三方直播id
            streamId: string
            // 游戏类型
            gameType: string
            // 数据源
            source: number
            // 主队图标
            homeIcon: string
            // 主队图标(svg)
            homeIconSvg: string
            // 客队图标
            awayIcon: string
            // 客队图标(svg)
            awayIconSvg: string
            // 是否滚盘中 0：否，1：是
            inplay: number
            // 是否有主播直播 0：否，1：是
            isLive: number
            // 房间号
            roundNo: string
            // 主播头像
            streamerIcon: string
            // 主播名称
            StreamerName: string
            // 封面路径
            frontCoverUrl: string
            // 赛事事件列表,结构同ws推送的消息格式,主要提供给推荐赛事/热门赛事接口获取比分与时间,对应ws事件名称为MATCH_STATUS_CHANGE/MATCH_CLOCK
            eventList: Array<{
              // No comments found.
              eventType: string
            }>
            // No comments found.
            eventType: string
            // 是否为fiba赛事
            isFiba: boolean
            // 是否为欧洲杯赛事
            isEuropeCup: boolean
            // cashout 狀態 0:不可 ,1:可
            cashoutStatus: number
          }
          // 动态市场字典(冠军玩法有效)， key: 对应odds的key, value: {zh:"xxx",en:"cxxewe"}
          dynamicMarkets: any
          // odds map的取key顺序(逗号分隔),ex:HDP,1X2... 表示key先取HDP,再取1X2
          oddsSort: string
          // 赔率 key=>玩法类型code value=>赔率列表
          odds: {
            [key: string]: {
              // 赔率idnullable
              id: string
              // 玩法类名称nullable
              name: string
              // 让分或大小分值nullable
              spread: string
              // 额外信息nullable
              extInfo: string
              // 欧洲盘赔率nullable
              odds: number
              // 香港盘赔率nullable
              hkOdds: number
              // 马来盘赔率
              malayOdds: number
              // 印尼盘赔率
              indoOdds: number
              // 市场排序，用于让球等玩法的排序
              marketSort: number
              // 0:活跃可用，可投注、1：临时锁定，不允许投注、2：不可用，不可见也不可投注nullable
              status: number
              // 赔率生产者nullable
              producerId: number
              // 保存各语系name对应值的map
              nameMap: any
              // 保存各语系extInfo对应值的map
              extInfoMap: any
              // 游戏类型 FT:soccer,BK:Basketball,BS:Baseball,FS:Outright,OP:Other,TN:Tennis,VB:Volleyball,BM:Badminton,TT:table tennis
              gameType: string
              // 玩法分类id
              playCateId: number
              // 玩法分类代码
              playCateCode: string
              // 玩法编码
              playCode: string
              // 賠率分組
              group: string
              // 版本号
              version: number
            }
          }
          // 赔率陣列
          oddsList: Array<{
            // 赔率idnullable
            id: string
            // 玩法类名称nullable
            name: string
            // 让分或大小分值nullable
            spread: string
            // 额外信息nullable
            extInfo: string
            // 欧洲盘赔率nullable
            odds: number
            // 香港盘赔率nullable
            hkOdds: number
            // 马来盘赔率
            malayOdds: number
            // 印尼盘赔率
            indoOdds: number
            // 市场排序，用于让球等玩法的排序
            marketSort: number
            // 0:活跃可用，可投注、1：临时锁定，不允许投注、2：不可用，不可见也不可投注nullable
            status: number
            // 赔率生产者nullable
            producerId: number
            // 保存各语系name对应值的map
            nameMap: any
            // 保存各语系extInfo对应值的map
            extInfoMap: any
            // 游戏类型 FT:soccer,BK:Basketball,BS:Baseball,FS:Outright,OP:Other,TN:Tennis,VB:Volleyball,BM:Badminton,TT:table tennis
            gameType: string
            // 玩法分类id
            playCateId: number
            // 玩法分类代码
            playCateCode: string
            // 玩法编码
            playCode: string
            // 賠率分組
            group: string
            // 版本号
            version: number
          }>
          // 赛事可玩的快捷玩法列表
          quickPlayCateList: Array<{
            // 游戏类型,如： FT篮球，BK篮球
            gameType: string
            // 代码
            code: string
            // 名称，如：让球/大小盘
            name: string
            // menu 排序
            sort: number
          }>
          // 大厅玩法对应名称
          playCateNameMap: any
          // 玩法实际名称(注单显示用)
          betPlayCateNameMap: any
          // dynamic玩法排序 (冠軍用)
          dynamicSort: string
          // 新版篮球末位比分自己投注的数量
          bkEndCarkOFLCount: number
          // 賠率的數量
          oddsNumMap: any
        }>
        // 排序
        sort: number
        // 是否展开，0：否，1：是
        unfold: number
        // 玩法赔率排序,同时代表该菜单下总共有的全部玩法
        oddsSort: string
        // 玩法对应名称
        playCateNameMap: any
      }>
      // 总页数
      totalPage: number
    }
  }
  // 4.冠军赔率信息: 4.1.冠军大厅赔率列表,免登入即可访问
  type REQ = {
    // 游戏类型 (FT:足球，BK:篮球,TN:网球, VB:网球,BM：羽球)
    gameType: string
    // 联赛或赛季id列表
    leagueIdList?: any[]
    // sc:xxx 特殊参赛表（专题，如奥运会）
    matchType?: string
    // 玩法类型菜单code备注：playCateMenuCode=OUTRIGHT, 查询的是冠军玩法赔率
    playCateMenuCode: string
    // No comments found.
    page?: number
    // No comments found.
    pageSize?: number
    // season id列表
    seasonIdList?: any[]
  }
}
// 4.冠军赔率信息: 4.2.冠军大厅赔率列表,免登入即可访问 （无返回赔率)
declare namespace API_OUTRIGHT_ODDS_V2_LIST {
  // 4.冠军赔率信息: 4.2.冠军大厅赔率列表,免登入即可访问 （无返回赔率)
  type RES = {
    // No comments found.
    success: boolean
    // No comments found.
    msg: string
    // No comments found.
    code: number
    // No comments found.
    t: {
      // 体育项目notNull
      sport: {
        // code,FT:足球，BK:篮球notNull
        code: string
        // 名称,如：足球，篮球notNull
        name: string
      }
      // 联赛&赔率notNull
      leagueOdds: Array<{
        // 联赛/赛季notNull
        league: {
          // 联赛/赛季id
          id: string
          // 名称
          name: string
          // 国家Code
          categoryCode: string
          // 国家
          category: string
          // 国家图标,svg的html元素(已进行UrlEncoded)
          categoryIcon: string
          // 联赛简称
          shortName: string
          // 联盟icon
          icon: string
        }
        // 赛事或赛季赔率notNull
        matchOdds: Array<{
          // 赛事信息notNull
          matchInfo: {
            // 赛事或赛季id
            id: string
            // 联赛id
            leagueId: string
            // 联赛名称
            leagueName: string
            // 主队id
            homeId: string
            // 主队名称
            homeName: string
            // 客队id
            awayId: string
            // 客队名称
            awayName: string
            // 赛事或赛季开始时间
            startTime: string | number
            // 赛事或赛季结束时间
            endTime: string | number
            // 赛事状态 0：未开始，1：比赛中，2：已结束，3：延期，4：已取消
            status: number
            // 该赛事之全部可投注玩法类数量
            playCateNum: number
            // 賽季名稱
            name: string
            // 圖片
            img: string
            // 訊息
            msg: string
            // 是否可以参加过关，0：否，1：是
            parlay: number
            // 有无赛事直播 0:无 1:有
            liveVideo: number
            // 是否是中立场，1：是，0：否
            neutral: number
            // 是否有特优赔率，1：是，0：否
            eps: number
            // 赛事的赛制类型,目前仅网球排球需要显示,0:默认值 3:三战两胜 5:五战三胜...
            spt: number
            // 动画映射id
            trackerId: string
            // 小金直播id
            tvId: string
            // 第三方直播id
            streamId: string
            // 游戏类型
            gameType: string
            // 数据源
            source: number
            // 主队图标
            homeIcon: string
            // 主队图标(svg)
            homeIconSvg: string
            // 客队图标
            awayIcon: string
            // 客队图标(svg)
            awayIconSvg: string
            // 是否滚盘中 0：否，1：是
            inplay: number
            // 是否有主播直播 0：否，1：是
            isLive: number
            // 房间号
            roundNo: string
            // 主播头像
            streamerIcon: string
            // 主播名称
            StreamerName: string
            // 封面路径
            frontCoverUrl: string
            // 赛事事件列表,结构同ws推送的消息格式,主要提供给推荐赛事/热门赛事接口获取比分与时间,对应ws事件名称为MATCH_STATUS_CHANGE/MATCH_CLOCK
            eventList: Array<{
              // No comments found.
              eventType: string
            }>
            // No comments found.
            eventType: string
            // 是否为fiba赛事
            isFiba: boolean
            // 是否为欧洲杯赛事
            isEuropeCup: boolean
            // cashout 狀態 0:不可 ,1:可
            cashoutStatus: number
          }
          // 动态市场字典(冠军玩法有效)， key: 对应odds的key, value: {zh:"xxx",en:"cxxewe"}
          dynamicMarkets: any
          // odds map的取key顺序(逗号分隔),ex:HDP,1X2... 表示key先取HDP,再取1X2
          oddsSort: string
          // 赔率 key=>玩法类型code value=>赔率列表
          odds: {
            [key: string]: {
              // 赔率idnullable
              id: string
              // 玩法类名称nullable
              name: string
              // 让分或大小分值nullable
              spread: string
              // 额外信息nullable
              extInfo: string
              // 欧洲盘赔率nullable
              odds: number
              // 香港盘赔率nullable
              hkOdds: number
              // 马来盘赔率
              malayOdds: number
              // 印尼盘赔率
              indoOdds: number
              // 市场排序，用于让球等玩法的排序
              marketSort: number
              // 0:活跃可用，可投注、1：临时锁定，不允许投注、2：不可用，不可见也不可投注nullable
              status: number
              // 赔率生产者nullable
              producerId: number
              // 保存各语系name对应值的map
              nameMap: any
              // 保存各语系extInfo对应值的map
              extInfoMap: any
              // 游戏类型 FT:soccer,BK:Basketball,BS:Baseball,FS:Outright,OP:Other,TN:Tennis,VB:Volleyball,BM:Badminton,TT:table tennis
              gameType: string
              // 玩法分类id
              playCateId: number
              // 玩法分类代码
              playCateCode: string
              // 玩法编码
              playCode: string
              // 賠率分組
              group: string
              // 版本号
              version: number
            }
          }
          // 赔率陣列
          oddsList: Array<{
            // 赔率idnullable
            id: string
            // 玩法类名称nullable
            name: string
            // 让分或大小分值nullable
            spread: string
            // 额外信息nullable
            extInfo: string
            // 欧洲盘赔率nullable
            odds: number
            // 香港盘赔率nullable
            hkOdds: number
            // 马来盘赔率
            malayOdds: number
            // 印尼盘赔率
            indoOdds: number
            // 市场排序，用于让球等玩法的排序
            marketSort: number
            // 0:活跃可用，可投注、1：临时锁定，不允许投注、2：不可用，不可见也不可投注nullable
            status: number
            // 赔率生产者nullable
            producerId: number
            // 保存各语系name对应值的map
            nameMap: any
            // 保存各语系extInfo对应值的map
            extInfoMap: any
            // 游戏类型 FT:soccer,BK:Basketball,BS:Baseball,FS:Outright,OP:Other,TN:Tennis,VB:Volleyball,BM:Badminton,TT:table tennis
            gameType: string
            // 玩法分类id
            playCateId: number
            // 玩法分类代码
            playCateCode: string
            // 玩法编码
            playCode: string
            // 賠率分組
            group: string
            // 版本号
            version: number
          }>
          // 赛事可玩的快捷玩法列表
          quickPlayCateList: Array<{
            // 游戏类型,如： FT篮球，BK篮球
            gameType: string
            // 代码
            code: string
            // 名称，如：让球/大小盘
            name: string
            // menu 排序
            sort: number
          }>
          // 大厅玩法对应名称
          playCateNameMap: any
          // 玩法实际名称(注单显示用)
          betPlayCateNameMap: any
          // dynamic玩法排序 (冠軍用)
          dynamicSort: string
          // 新版篮球末位比分自己投注的数量
          bkEndCarkOFLCount: number
          // 賠率的數量
          oddsNumMap: any
        }>
        // 排序
        sort: number
        // 是否展开，0：否，1：是
        unfold: number
        // 玩法赔率排序,同时代表该菜单下总共有的全部玩法
        oddsSort: string
        // 玩法对应名称
        playCateNameMap: any
      }>
      // 加时联赛&赔率
      otLeagueOdds: Array<{
        // 联赛/赛季notNull
        league: {
          // 联赛/赛季id
          id: string
          // 名称
          name: string
          // 国家Code
          categoryCode: string
          // 国家
          category: string
          // 国家图标,svg的html元素(已进行UrlEncoded)
          categoryIcon: string
          // 联赛简称
          shortName: string
          // 联盟icon
          icon: string
        }
        // 赛事或赛季赔率notNull
        matchOdds: Array<{
          // 赛事信息notNull
          matchInfo: {
            // 赛事或赛季id
            id: string
            // 联赛id
            leagueId: string
            // 联赛名称
            leagueName: string
            // 主队id
            homeId: string
            // 主队名称
            homeName: string
            // 客队id
            awayId: string
            // 客队名称
            awayName: string
            // 赛事或赛季开始时间
            startTime: string | number
            // 赛事或赛季结束时间
            endTime: string | number
            // 赛事状态 0：未开始，1：比赛中，2：已结束，3：延期，4：已取消
            status: number
            // 该赛事之全部可投注玩法类数量
            playCateNum: number
            // 賽季名稱
            name: string
            // 圖片
            img: string
            // 訊息
            msg: string
            // 是否可以参加过关，0：否，1：是
            parlay: number
            // 有无赛事直播 0:无 1:有
            liveVideo: number
            // 是否是中立场，1：是，0：否
            neutral: number
            // 是否有特优赔率，1：是，0：否
            eps: number
            // 赛事的赛制类型,目前仅网球排球需要显示,0:默认值 3:三战两胜 5:五战三胜...
            spt: number
            // 动画映射id
            trackerId: string
            // 小金直播id
            tvId: string
            // 第三方直播id
            streamId: string
            // 游戏类型
            gameType: string
            // 数据源
            source: number
            // 主队图标
            homeIcon: string
            // 主队图标(svg)
            homeIconSvg: string
            // 客队图标
            awayIcon: string
            // 客队图标(svg)
            awayIconSvg: string
            // 是否滚盘中 0：否，1：是
            inplay: number
            // 是否有主播直播 0：否，1：是
            isLive: number
            // 房间号
            roundNo: string
            // 主播头像
            streamerIcon: string
            // 主播名称
            StreamerName: string
            // 封面路径
            frontCoverUrl: string
            // 赛事事件列表,结构同ws推送的消息格式,主要提供给推荐赛事/热门赛事接口获取比分与时间,对应ws事件名称为MATCH_STATUS_CHANGE/MATCH_CLOCK
            eventList: Array<{
              // No comments found.
              eventType: string
            }>
            // No comments found.
            eventType: string
            // 是否为fiba赛事
            isFiba: boolean
            // 是否为欧洲杯赛事
            isEuropeCup: boolean
            // cashout 狀態 0:不可 ,1:可
            cashoutStatus: number
          }
          // 动态市场字典(冠军玩法有效)， key: 对应odds的key, value: {zh:"xxx",en:"cxxewe"}
          dynamicMarkets: any
          // odds map的取key顺序(逗号分隔),ex:HDP,1X2... 表示key先取HDP,再取1X2
          oddsSort: string
          // 赔率 key=>玩法类型code value=>赔率列表
          odds: {
            [key: string]: {
              // 赔率idnullable
              id: string
              // 玩法类名称nullable
              name: string
              // 让分或大小分值nullable
              spread: string
              // 额外信息nullable
              extInfo: string
              // 欧洲盘赔率nullable
              odds: number
              // 香港盘赔率nullable
              hkOdds: number
              // 马来盘赔率
              malayOdds: number
              // 印尼盘赔率
              indoOdds: number
              // 市场排序，用于让球等玩法的排序
              marketSort: number
              // 0:活跃可用，可投注、1：临时锁定，不允许投注、2：不可用，不可见也不可投注nullable
              status: number
              // 赔率生产者nullable
              producerId: number
              // 保存各语系name对应值的map
              nameMap: any
              // 保存各语系extInfo对应值的map
              extInfoMap: any
              // 游戏类型 FT:soccer,BK:Basketball,BS:Baseball,FS:Outright,OP:Other,TN:Tennis,VB:Volleyball,BM:Badminton,TT:table tennis
              gameType: string
              // 玩法分类id
              playCateId: number
              // 玩法分类代码
              playCateCode: string
              // 玩法编码
              playCode: string
              // 賠率分組
              group: string
              // 版本号
              version: number
            }
          }
          // 赔率陣列
          oddsList: Array<{
            // 赔率idnullable
            id: string
            // 玩法类名称nullable
            name: string
            // 让分或大小分值nullable
            spread: string
            // 额外信息nullable
            extInfo: string
            // 欧洲盘赔率nullable
            odds: number
            // 香港盘赔率nullable
            hkOdds: number
            // 马来盘赔率
            malayOdds: number
            // 印尼盘赔率
            indoOdds: number
            // 市场排序，用于让球等玩法的排序
            marketSort: number
            // 0:活跃可用，可投注、1：临时锁定，不允许投注、2：不可用，不可见也不可投注nullable
            status: number
            // 赔率生产者nullable
            producerId: number
            // 保存各语系name对应值的map
            nameMap: any
            // 保存各语系extInfo对应值的map
            extInfoMap: any
            // 游戏类型 FT:soccer,BK:Basketball,BS:Baseball,FS:Outright,OP:Other,TN:Tennis,VB:Volleyball,BM:Badminton,TT:table tennis
            gameType: string
            // 玩法分类id
            playCateId: number
            // 玩法分类代码
            playCateCode: string
            // 玩法编码
            playCode: string
            // 賠率分組
            group: string
            // 版本号
            version: number
          }>
          // 赛事可玩的快捷玩法列表
          quickPlayCateList: Array<{
            // 游戏类型,如： FT篮球，BK篮球
            gameType: string
            // 代码
            code: string
            // 名称，如：让球/大小盘
            name: string
            // menu 排序
            sort: number
          }>
          // 大厅玩法对应名称
          playCateNameMap: any
          // 玩法实际名称(注单显示用)
          betPlayCateNameMap: any
          // dynamic玩法排序 (冠軍用)
          dynamicSort: string
          // 新版篮球末位比分自己投注的数量
          bkEndCarkOFLCount: number
          // 賠率的數量
          oddsNumMap: any
        }>
        // 排序
        sort: number
        // 是否展开，0：否，1：是
        unfold: number
        // 玩法赔率排序,同时代表该菜单下总共有的全部玩法
        oddsSort: string
        // 玩法对应名称
        playCateNameMap: any
      }>
      // 总页数
      totalPage: number
    }
  }
  // 4.冠军赔率信息: 4.2.冠军大厅赔率列表,免登入即可访问 （无返回赔率)
  type REQ = {
    // 游戏类型 (FT:足球，BK:篮球,TN:网球, VB:网球,BM：羽球)
    gameType: string
    // 联赛或赛季id列表
    leagueIdList?: any[]
    // sc:xxx 特殊参赛表（专题，如奥运会）
    matchType?: string
    // 玩法类型菜单code备注：playCateMenuCode=OUTRIGHT, 查询的是冠军玩法赔率
    playCateMenuCode: string
    // No comments found.
    page?: number
    // No comments found.
    pageSize?: number
    // season id列表
    seasonIdList?: any[]
  }
}
// 5.: 5.1.内部测试接口
declare namespace API_INNER_TEST_VERSION_MATCHID {
  // 5.: 5.1.内部测试接口
  type RES = {
    // No comments found.
    success: boolean
    // No comments found.
    msg: string
    // No comments found.
    code: number
  }
  // 5.: 5.1.内部测试接口
  type REQ = {
    // No comments found.
    matchId: string
  }
}
// 6.直播大厅: 6.1.体育类型下的直播大厅列表
declare namespace API_LIVEROUND_LIST_GAMETYPE {
  // 6.直播大厅: 6.1.体育类型下的直播大厅列表
  type RES = {
    // No comments found.
    success: boolean
    // No comments found.
    msg: string
    // No comments found.
    code: number
    // No comments found.
    rows: Array<{
      // 直播间Id
      id: number
      // 直播间名称
      roomName: string
      // 房间号
      roundNo: string
      // 推荐主播 0:一般,1:推荐
      recommend: number
      // 预计开播时间
      liveDate: string
      // RoundStatus直播状态 待开始-1;0:结束;1直播中;2暂停
      status: number
      // 体育类型
      sportType: string
      // 拉流URL
      pullRtmpUrl: string
      // 拉流URL
      pullFlvUrl: string
      // 封面路径
      frontCoverUrl: string
      // 賽事id
      matchId: string
      // 排序值
      sort: number
    }>
    // 排序值
    sort: number
    // No comments found.
    total: number
  }
  // 6.直播大厅: 6.1.体育类型下的直播大厅列表
  type REQ = {
    // 体育种类
    gameType: string
    // No comments found.
    platformId?: number
  }
}
// 6.直播大厅: 6.2.移动端首页热门赛事直播列表备注: 获取赛事主播资料
declare namespace API_LIVEROUND_MOBILE_HOTMATCH_LIST {
  // 6.直播大厅: 6.2.移动端首页热门赛事直播列表备注: 获取赛事主播资料
  type RES = {
    // No comments found.
    success: boolean
    // No comments found.
    msg: string
    // No comments found.
    code: number
    // No comments found.
    t: {
      // 赛事信息
      matchInfo: {
        // 赛事或赛季id
        id: string
        // 联赛id
        leagueId: string
        // 联赛名称
        leagueName: string
        // 主队id
        homeId: string
        // 主队名称
        homeName: string
        // 客队id
        awayId: string
        // 客队名称
        awayName: string
        // 赛事或赛季开始时间
        startTime: string | number
        // 赛事或赛季结束时间
        endTime: string | number
        // 赛事状态 0：未开始，1：比赛中，2：已结束，3：延期，4：已取消
        status: number
        // 该赛事之全部可投注玩法类数量
        playCateNum: number
        // 賽季名稱
        name: string
        // 圖片
        img: string
        // 訊息
        msg: string
        // 是否可以参加过关，0：否，1：是
        parlay: number
        // 有无赛事直播 0:无 1:有
        liveVideo: number
        // 是否是中立场，1：是，0：否
        neutral: number
        // 是否有特优赔率，1：是，0：否
        eps: number
        // 赛事的赛制类型,目前仅网球排球需要显示,0:默认值 3:三战两胜 5:五战三胜...
        spt: number
        // 动画映射id
        trackerId: string
        // 小金直播id
        tvId: string
        // 第三方直播id
        streamId: string
        // 游戏类型
        gameType: string
        // 数据源
        source: number
        // 主队图标
        homeIcon: string
        // 主队图标(svg)
        homeIconSvg: string
        // 客队图标
        awayIcon: string
        // 客队图标(svg)
        awayIconSvg: string
        // 是否滚盘中 0：否，1：是
        inplay: number
        // 是否有主播直播 0：否，1：是
        isLive: number
        // 房间号
        roundNo: string
        // 主播头像
        streamerIcon: string
        // 主播名称
        StreamerName: string
        // 封面路径
        frontCoverUrl: string
        // 赛事事件列表,结构同ws推送的消息格式,主要提供给推荐赛事/热门赛事接口获取比分与时间,对应ws事件名称为MATCH_STATUS_CHANGE/MATCH_CLOCK
        eventList: Array<{
          // No comments found.
          eventType: string
        }>
        // No comments found.
        eventType: string
        // 是否为fiba赛事
        isFiba: boolean
        // 是否为欧洲杯赛事
        isEuropeCup: boolean
        // cashout 狀態 0:不可 ,1:可
        cashoutStatus: number
      }
      // 联赛/赛季
      league: {
        // 联赛/赛季id
        id: string
        // 名称
        name: string
        // 国家Code
        categoryCode: string
        // 国家
        category: string
        // 国家图标,svg的html元素(已进行UrlEncoded)
        categoryIcon: string
        // 联赛简称
        shortName: string
        // 联盟icon
        icon: string
      }
      // 体育类型, 如:足球，篮球
      sportName: string
    }
  }
  // 6.直播大厅: 6.2.移动端首页热门赛事直播列表备注: 获取赛事主播资料
  type REQ = {
    // No comments found.
    platformId?: number
  }
}
// 6.直播大厅: 6.3.获取直播数量
declare namespace API_LIVEROUND_COUNT {
  // 6.直播大厅: 6.3.获取直播数量
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
  // 6.直播大厅: 6.3.获取直播数量
  type REQ = {
    // No comments found.
    platformId?: number
  }
}
// 6.直播大厅: 6.4.移动端直播tab备注：按照赛事按开始时间从近到远进行排序；默认播放排序第一的直播；直播间不足20条时；填充具有直播地址的早盘赛事至20条（按照开赛时间排序）；
declare namespace API_LIVEROUND_MOBILE_HALL {
  // 6.直播大厅: 6.4.移动端直播tab备注：按照赛事按开始时间从近到远进行排序；默认播放排序第一的直播；直播间不足20条时；填充具有直播地址的早盘赛事至20条（按照开赛时间排序）；
  type RES = {
    // No comments found.
    success: boolean
    // No comments found.
    msg: string
    // No comments found.
    code: number
    // No comments found.
    rows: Array<{
      // 联赛/赛季
      league: {
        // 联赛/赛季id
        id: string
        // 名称
        name: string
        // 国家Code
        categoryCode: string
        // 国家
        category: string
        // 国家图标,svg的html元素(已进行UrlEncoded)
        categoryIcon: string
        // 联赛简称
        shortName: string
        // 联盟icon
        icon: string
      }
      // 赛事信息
      matchInfo: {
        // 赛事或赛季id
        id: string
        // 联赛id
        leagueId: string
        // 联赛名称
        leagueName: string
        // 主队id
        homeId: string
        // 主队名称
        homeName: string
        // 客队id
        awayId: string
        // 客队名称
        awayName: string
        // 赛事或赛季开始时间
        startTime: string | number
        // 赛事或赛季结束时间
        endTime: string | number
        // 赛事状态 0：未开始，1：比赛中，2：已结束，3：延期，4：已取消
        status: number
        // 该赛事之全部可投注玩法类数量
        playCateNum: number
        // 賽季名稱
        name: string
        // 圖片
        img: string
        // 訊息
        msg: string
        // 是否可以参加过关，0：否，1：是
        parlay: number
        // 有无赛事直播 0:无 1:有
        liveVideo: number
        // 是否是中立场，1：是，0：否
        neutral: number
        // 是否有特优赔率，1：是，0：否
        eps: number
        // 赛事的赛制类型,目前仅网球排球需要显示,0:默认值 3:三战两胜 5:五战三胜...
        spt: number
        // 动画映射id
        trackerId: string
        // 小金直播id
        tvId: string
        // 第三方直播id
        streamId: string
        // 游戏类型
        gameType: string
        // 数据源
        source: number
        // 主队图标
        homeIcon: string
        // 主队图标(svg)
        homeIconSvg: string
        // 客队图标
        awayIcon: string
        // 客队图标(svg)
        awayIconSvg: string
        // 是否滚盘中 0：否，1：是
        inplay: number
        // 是否有主播直播 0：否，1：是
        isLive: number
        // 房间号
        roundNo: string
        // 主播头像
        streamerIcon: string
        // 主播名称
        StreamerName: string
        // 封面路径
        frontCoverUrl: string
        // 赛事事件列表,结构同ws推送的消息格式,主要提供给推荐赛事/热门赛事接口获取比分与时间,对应ws事件名称为MATCH_STATUS_CHANGE/MATCH_CLOCK
        eventList: Array<{
          // No comments found.
          eventType: string
        }>
        // No comments found.
        eventType: string
        // 是否为fiba赛事
        isFiba: boolean
        // 是否为欧洲杯赛事
        isEuropeCup: boolean
        // cashout 狀態 0:不可 ,1:可
        cashoutStatus: number
      }
      // 玩法赔率排序,同时代表该菜单下总共有的全部玩法
      oddsSort: string
      // 玩法对应名称
      playCateNameMap: any
      // 体育名称, 如:篮球, 足球
      sportName: string
    }>
    // 体育名称, 如:篮球, 足球
    sportName: string
    // No comments found.
    total: number
  }
  // 6.直播大厅: 6.4.移动端直播tab备注：按照赛事按开始时间从近到远进行排序；默认播放排序第一的直播；直播间不足20条时；填充具有直播地址的早盘赛事至20条（按照开赛时间排序）；
  type REQ = {
    // No comments found.
    platformId?: number
  }
}
// 6.直播大厅: 6.5.查询主播直播的拉流地址
declare namespace API_LIVEROUND_ROUNDNO {
  // 6.直播大厅: 6.5.查询主播直播的拉流地址
  type RES = {
    // No comments found.
    success: boolean
    // No comments found.
    msg: string
    // No comments found.
    code: number
    // No comments found.
    t: {
      // 拉流URL
      pullRtmpUrl: string
      // 拉流URL
      pullFlvUrl: string
      // 封面路径
      frontCoverUrl: string
    }
  }
  // 6.直播大厅: 6.5.查询主播直播的拉流地址
  type REQ = {
    // 房间号
    roundNo: string
    // No comments found.
    platformId?: number
  }
}
// 7.我的最爱: 7.1.取得会员的所有最爱(包含球类、联赛、赛事、冠军、玩法)
declare namespace API_MYFAVORITE_QUERY {
  // 7.我的最爱: 7.1.取得会员的所有最爱(包含球类、联赛、赛事、冠军、玩法)
  type RES = {
    // No comments found.
    success: boolean
    // No comments found.
    msg: string
    // No comments found.
    code: number
    // No comments found.
    t: {
      // 喜好的运动
      sport: string
      // 喜好的联赛
      league: string
      // 喜好的一般赛事
      match: string
      // 喜好的冠军赛事
      outright: string
      // 喜好的玩法
      playCate: Array<{
        // 球类
        gameType: string
        // 玩法类code
        code: string
      }>
      // 喜好的遊戲id
      thirdGameIds: string
    }
  }
  // 7.我的最爱: 7.1.取得会员的所有最爱(包含球类、联赛、赛事、冠军、玩法)
  type REQ = {
    // 用户id（从x-seesion-token获取，无需传值）
    userId?: number
    // 平台id（从x-seesion-token获取，无需传值）
    platformId?: number
  }
}
// 7.我的最爱: 7.2.我的赛事 加时赛也准备额外LeagueOddsVO
declare namespace API_MYFAVORITE_MATCH_QUERYINCLUDEOT {
  // 7.我的最爱: 7.2.我的赛事 加时赛也准备额外LeagueOddsVO
  type RES = {
    // No comments found.
    success: boolean
    // No comments found.
    msg: string
    // No comments found.
    code: number
    // No comments found.
    rows: Array<{
      // 联赛/赛季notNull
      league: {
        // 联赛/赛季id
        id: string
        // 名称
        name: string
        // 国家Code
        categoryCode: string
        // 国家
        category: string
        // 国家图标,svg的html元素(已进行UrlEncoded)
        categoryIcon: string
        // 联赛简称
        shortName: string
        // 联盟icon
        icon: string
      }
      // 赛事或赛季赔率notNull
      matchOdds: Array<{
        // 赛事信息notNull
        matchInfo: {
          // 赛事或赛季id
          id: string
          // 联赛id
          leagueId: string
          // 联赛名称
          leagueName: string
          // 主队id
          homeId: string
          // 主队名称
          homeName: string
          // 客队id
          awayId: string
          // 客队名称
          awayName: string
          // 赛事或赛季开始时间
          startTime: string | number
          // 赛事或赛季结束时间
          endTime: string | number
          // 赛事状态 0：未开始，1：比赛中，2：已结束，3：延期，4：已取消
          status: number
          // 该赛事之全部可投注玩法类数量
          playCateNum: number
          // 賽季名稱
          name: string
          // 圖片
          img: string
          // 訊息
          msg: string
          // 是否可以参加过关，0：否，1：是
          parlay: number
          // 有无赛事直播 0:无 1:有
          liveVideo: number
          // 是否是中立场，1：是，0：否
          neutral: number
          // 是否有特优赔率，1：是，0：否
          eps: number
          // 赛事的赛制类型,目前仅网球排球需要显示,0:默认值 3:三战两胜 5:五战三胜...
          spt: number
          // 动画映射id
          trackerId: string
          // 小金直播id
          tvId: string
          // 第三方直播id
          streamId: string
          // 游戏类型
          gameType: string
          // 数据源
          source: number
          // 主队图标
          homeIcon: string
          // 主队图标(svg)
          homeIconSvg: string
          // 客队图标
          awayIcon: string
          // 客队图标(svg)
          awayIconSvg: string
          // 是否滚盘中 0：否，1：是
          inplay: number
          // 是否有主播直播 0：否，1：是
          isLive: number
          // 房间号
          roundNo: string
          // 主播头像
          streamerIcon: string
          // 主播名称
          StreamerName: string
          // 封面路径
          frontCoverUrl: string
          // 赛事事件列表,结构同ws推送的消息格式,主要提供给推荐赛事/热门赛事接口获取比分与时间,对应ws事件名称为MATCH_STATUS_CHANGE/MATCH_CLOCK
          eventList: Array<{
            // No comments found.
            eventType: string
          }>
          // No comments found.
          eventType: string
          // 是否为fiba赛事
          isFiba: boolean
          // 是否为欧洲杯赛事
          isEuropeCup: boolean
          // cashout 狀態 0:不可 ,1:可
          cashoutStatus: number
        }
        // 动态市场字典(冠军玩法有效)， key: 对应odds的key, value: {zh:"xxx",en:"cxxewe"}
        dynamicMarkets: any
        // odds map的取key顺序(逗号分隔),ex:HDP,1X2... 表示key先取HDP,再取1X2
        oddsSort: string
        // 赔率 key=>玩法类型code value=>赔率列表
        odds: {
          [key: string]: {
            // 赔率idnullable
            id: string
            // 玩法类名称nullable
            name: string
            // 让分或大小分值nullable
            spread: string
            // 额外信息nullable
            extInfo: string
            // 欧洲盘赔率nullable
            odds: number
            // 香港盘赔率nullable
            hkOdds: number
            // 马来盘赔率
            malayOdds: number
            // 印尼盘赔率
            indoOdds: number
            // 市场排序，用于让球等玩法的排序
            marketSort: number
            // 0:活跃可用，可投注、1：临时锁定，不允许投注、2：不可用，不可见也不可投注nullable
            status: number
            // 赔率生产者nullable
            producerId: number
            // 保存各语系name对应值的map
            nameMap: any
            // 保存各语系extInfo对应值的map
            extInfoMap: any
            // 游戏类型 FT:soccer,BK:Basketball,BS:Baseball,FS:Outright,OP:Other,TN:Tennis,VB:Volleyball,BM:Badminton,TT:table tennis
            gameType: string
            // 玩法分类id
            playCateId: number
            // 玩法分类代码
            playCateCode: string
            // 玩法编码
            playCode: string
            // 賠率分組
            group: string
            // 版本号
            version: number
          }
        }
        // 赔率陣列
        oddsList: Array<{
          // 赔率idnullable
          id: string
          // 玩法类名称nullable
          name: string
          // 让分或大小分值nullable
          spread: string
          // 额外信息nullable
          extInfo: string
          // 欧洲盘赔率nullable
          odds: number
          // 香港盘赔率nullable
          hkOdds: number
          // 马来盘赔率
          malayOdds: number
          // 印尼盘赔率
          indoOdds: number
          // 市场排序，用于让球等玩法的排序
          marketSort: number
          // 0:活跃可用，可投注、1：临时锁定，不允许投注、2：不可用，不可见也不可投注nullable
          status: number
          // 赔率生产者nullable
          producerId: number
          // 保存各语系name对应值的map
          nameMap: any
          // 保存各语系extInfo对应值的map
          extInfoMap: any
          // 游戏类型 FT:soccer,BK:Basketball,BS:Baseball,FS:Outright,OP:Other,TN:Tennis,VB:Volleyball,BM:Badminton,TT:table tennis
          gameType: string
          // 玩法分类id
          playCateId: number
          // 玩法分类代码
          playCateCode: string
          // 玩法编码
          playCode: string
          // 賠率分組
          group: string
          // 版本号
          version: number
        }>
        // 赛事可玩的快捷玩法列表
        quickPlayCateList: Array<{
          // 游戏类型,如： FT篮球，BK篮球
          gameType: string
          // 代码
          code: string
          // 名称，如：让球/大小盘
          name: string
          // menu 排序
          sort: number
        }>
        // 大厅玩法对应名称
        playCateNameMap: any
        // 玩法实际名称(注单显示用)
        betPlayCateNameMap: any
        // dynamic玩法排序 (冠軍用)
        dynamicSort: string
        // 新版篮球末位比分自己投注的数量
        bkEndCarkOFLCount: number
        // 賠率的數量
        oddsNumMap: any
      }>
      // 排序
      sort: number
      // 是否展开，0：否，1：是
      unfold: number
      // 玩法赔率排序,同时代表该菜单下总共有的全部玩法
      oddsSort: string
      // 玩法对应名称
      playCateNameMap: any
    }>
    // 玩法对应名称
    playCateNameMap: any
    // No comments found.
    total: number
  }
  // 7.我的最爱: 7.2.我的赛事 加时赛也准备额外LeagueOddsVO
  type REQ = {
    // 游戏类型 (FT:足球，BK:篮球,TN:网球, VB:网球,BM：羽球)
    gameType: string
    // 玩法类型菜单code
    playCateMenuCode: string
    // 联赛id列表
    leagueIdList?: any[]
  }
}
// 7.我的最爱: 7.3.我的赛事
declare namespace API_MYFAVORITE_MATCH_QUERY {
  // 7.我的最爱: 7.3.我的赛事
  type RES = {
    // No comments found.
    success: boolean
    // No comments found.
    msg: string
    // No comments found.
    code: number
    // No comments found.
    rows: Array<{
      // 联赛/赛季notNull
      league: {
        // 联赛/赛季id
        id: string
        // 名称
        name: string
        // 国家Code
        categoryCode: string
        // 国家
        category: string
        // 国家图标,svg的html元素(已进行UrlEncoded)
        categoryIcon: string
        // 联赛简称
        shortName: string
        // 联盟icon
        icon: string
      }
      // 赛事或赛季赔率notNull
      matchOdds: Array<{
        // 赛事信息notNull
        matchInfo: {
          // 赛事或赛季id
          id: string
          // 联赛id
          leagueId: string
          // 联赛名称
          leagueName: string
          // 主队id
          homeId: string
          // 主队名称
          homeName: string
          // 客队id
          awayId: string
          // 客队名称
          awayName: string
          // 赛事或赛季开始时间
          startTime: string | number
          // 赛事或赛季结束时间
          endTime: string | number
          // 赛事状态 0：未开始，1：比赛中，2：已结束，3：延期，4：已取消
          status: number
          // 该赛事之全部可投注玩法类数量
          playCateNum: number
          // 賽季名稱
          name: string
          // 圖片
          img: string
          // 訊息
          msg: string
          // 是否可以参加过关，0：否，1：是
          parlay: number
          // 有无赛事直播 0:无 1:有
          liveVideo: number
          // 是否是中立场，1：是，0：否
          neutral: number
          // 是否有特优赔率，1：是，0：否
          eps: number
          // 赛事的赛制类型,目前仅网球排球需要显示,0:默认值 3:三战两胜 5:五战三胜...
          spt: number
          // 动画映射id
          trackerId: string
          // 小金直播id
          tvId: string
          // 第三方直播id
          streamId: string
          // 游戏类型
          gameType: string
          // 数据源
          source: number
          // 主队图标
          homeIcon: string
          // 主队图标(svg)
          homeIconSvg: string
          // 客队图标
          awayIcon: string
          // 客队图标(svg)
          awayIconSvg: string
          // 是否滚盘中 0：否，1：是
          inplay: number
          // 是否有主播直播 0：否，1：是
          isLive: number
          // 房间号
          roundNo: string
          // 主播头像
          streamerIcon: string
          // 主播名称
          StreamerName: string
          // 封面路径
          frontCoverUrl: string
          // 赛事事件列表,结构同ws推送的消息格式,主要提供给推荐赛事/热门赛事接口获取比分与时间,对应ws事件名称为MATCH_STATUS_CHANGE/MATCH_CLOCK
          eventList: Array<{
            // No comments found.
            eventType: string
          }>
          // No comments found.
          eventType: string
          // 是否为fiba赛事
          isFiba: boolean
          // 是否为欧洲杯赛事
          isEuropeCup: boolean
          // cashout 狀態 0:不可 ,1:可
          cashoutStatus: number
        }
        // 动态市场字典(冠军玩法有效)， key: 对应odds的key, value: {zh:"xxx",en:"cxxewe"}
        dynamicMarkets: any
        // odds map的取key顺序(逗号分隔),ex:HDP,1X2... 表示key先取HDP,再取1X2
        oddsSort: string
        // 赔率 key=>玩法类型code value=>赔率列表
        odds: {
          [key: string]: {
            // 赔率idnullable
            id: string
            // 玩法类名称nullable
            name: string
            // 让分或大小分值nullable
            spread: string
            // 额外信息nullable
            extInfo: string
            // 欧洲盘赔率nullable
            odds: number
            // 香港盘赔率nullable
            hkOdds: number
            // 马来盘赔率
            malayOdds: number
            // 印尼盘赔率
            indoOdds: number
            // 市场排序，用于让球等玩法的排序
            marketSort: number
            // 0:活跃可用，可投注、1：临时锁定，不允许投注、2：不可用，不可见也不可投注nullable
            status: number
            // 赔率生产者nullable
            producerId: number
            // 保存各语系name对应值的map
            nameMap: any
            // 保存各语系extInfo对应值的map
            extInfoMap: any
            // 游戏类型 FT:soccer,BK:Basketball,BS:Baseball,FS:Outright,OP:Other,TN:Tennis,VB:Volleyball,BM:Badminton,TT:table tennis
            gameType: string
            // 玩法分类id
            playCateId: number
            // 玩法分类代码
            playCateCode: string
            // 玩法编码
            playCode: string
            // 賠率分組
            group: string
            // 版本号
            version: number
          }
        }
        // 赔率陣列
        oddsList: Array<{
          // 赔率idnullable
          id: string
          // 玩法类名称nullable
          name: string
          // 让分或大小分值nullable
          spread: string
          // 额外信息nullable
          extInfo: string
          // 欧洲盘赔率nullable
          odds: number
          // 香港盘赔率nullable
          hkOdds: number
          // 马来盘赔率
          malayOdds: number
          // 印尼盘赔率
          indoOdds: number
          // 市场排序，用于让球等玩法的排序
          marketSort: number
          // 0:活跃可用，可投注、1：临时锁定，不允许投注、2：不可用，不可见也不可投注nullable
          status: number
          // 赔率生产者nullable
          producerId: number
          // 保存各语系name对应值的map
          nameMap: any
          // 保存各语系extInfo对应值的map
          extInfoMap: any
          // 游戏类型 FT:soccer,BK:Basketball,BS:Baseball,FS:Outright,OP:Other,TN:Tennis,VB:Volleyball,BM:Badminton,TT:table tennis
          gameType: string
          // 玩法分类id
          playCateId: number
          // 玩法分类代码
          playCateCode: string
          // 玩法编码
          playCode: string
          // 賠率分組
          group: string
          // 版本号
          version: number
        }>
        // 赛事可玩的快捷玩法列表
        quickPlayCateList: Array<{
          // 游戏类型,如： FT篮球，BK篮球
          gameType: string
          // 代码
          code: string
          // 名称，如：让球/大小盘
          name: string
          // menu 排序
          sort: number
        }>
        // 大厅玩法对应名称
        playCateNameMap: any
        // 玩法实际名称(注单显示用)
        betPlayCateNameMap: any
        // dynamic玩法排序 (冠軍用)
        dynamicSort: string
        // 新版篮球末位比分自己投注的数量
        bkEndCarkOFLCount: number
        // 賠率的數量
        oddsNumMap: any
      }>
      // 排序
      sort: number
      // 是否展开，0：否，1：是
      unfold: number
      // 玩法赔率排序,同时代表该菜单下总共有的全部玩法
      oddsSort: string
      // 玩法对应名称
      playCateNameMap: any
    }>
    // 玩法对应名称
    playCateNameMap: any
    // No comments found.
    total: number
  }
  // 7.我的最爱: 7.3.我的赛事
  type REQ = {
    // 游戏类型 (FT:足球，BK:篮球,TN:网球, VB:网球,BM：羽球)
    gameType: string
    // 玩法类型菜单code
    playCateMenuCode: string
    // 联赛id列表
    leagueIdList?: any[]
  }
}
// 7.我的最爱: 7.4.保存
declare namespace API_MYFAVORITE_SAVE {
  // 7.我的最爱: 7.4.保存
  type RES = {
    // No comments found.
    success: boolean
    // No comments found.
    msg: string
    // No comments found.
    code: number
    // No comments found.
    t: {
      // 喜好的运动
      sport: string
      // 喜好的联赛
      league: string
      // 喜好的一般赛事
      match: string
      // 喜好的冠军赛事
      outright: string
      // 喜好的玩法
      playCate: Array<{
        // 球类
        gameType: string
        // 玩法类code
        code: string
      }>
      // 喜好的遊戲id
      thirdGameIds: string
    }
  }
  // 7.我的最爱: 7.4.保存
  type REQ = {
    // 要保存的喜好的类型(1:球类,2:联赛,3:赛事,4:冠军赛事,5:玩法类,6:三方游戏)
    type: string
    // 要保存的喜好的code listsport:FT,BK...league:26118,26060...等联赛idmatch:5083889,5083804...等赛事idoutright:4530015,5108904...等冠军idplayCate:HDP,O/U...game:thirdGameDataDictId
    code: any[]
    // 如果type是5(玩法类)的时候需要传此参数,标明是哪个球类的玩法被添加进最爱
    gameType?: string
  }
}
// 7.我的最爱: 7.5.查询我的推荐赛事
declare namespace API_MYFAVORITE_QUERYALL {
  // 7.我的最爱: 7.5.查询我的推荐赛事
  type RES = {
    // No comments found.
    success: boolean
    // No comments found.
    msg: string
    // No comments found.
    code: number
    // No comments found.
    rows: Array<{
      // 赛事类型
      gameType: string
      // 联赛赛事
      leagueOddsList: Array<{
        // 联赛/赛季notNull
        league: {
          // 联赛/赛季id
          id: string
          // 名称
          name: string
          // 国家Code
          categoryCode: string
          // 国家
          category: string
          // 国家图标,svg的html元素(已进行UrlEncoded)
          categoryIcon: string
          // 联赛简称
          shortName: string
          // 联盟icon
          icon: string
        }
        // 赛事或赛季赔率notNull
        matchOdds: Array<{
          // 赛事信息notNull
          matchInfo: {
            // 赛事或赛季id
            id: string
            // 联赛id
            leagueId: string
            // 联赛名称
            leagueName: string
            // 主队id
            homeId: string
            // 主队名称
            homeName: string
            // 客队id
            awayId: string
            // 客队名称
            awayName: string
            // 赛事或赛季开始时间
            startTime: string | number
            // 赛事或赛季结束时间
            endTime: string | number
            // 赛事状态 0：未开始，1：比赛中，2：已结束，3：延期，4：已取消
            status: number
            // 该赛事之全部可投注玩法类数量
            playCateNum: number
            // 賽季名稱
            name: string
            // 圖片
            img: string
            // 訊息
            msg: string
            // 是否可以参加过关，0：否，1：是
            parlay: number
            // 有无赛事直播 0:无 1:有
            liveVideo: number
            // 是否是中立场，1：是，0：否
            neutral: number
            // 是否有特优赔率，1：是，0：否
            eps: number
            // 赛事的赛制类型,目前仅网球排球需要显示,0:默认值 3:三战两胜 5:五战三胜...
            spt: number
            // 动画映射id
            trackerId: string
            // 小金直播id
            tvId: string
            // 第三方直播id
            streamId: string
            // 游戏类型
            gameType: string
            // 数据源
            source: number
            // 主队图标
            homeIcon: string
            // 主队图标(svg)
            homeIconSvg: string
            // 客队图标
            awayIcon: string
            // 客队图标(svg)
            awayIconSvg: string
            // 是否滚盘中 0：否，1：是
            inplay: number
            // 是否有主播直播 0：否，1：是
            isLive: number
            // 房间号
            roundNo: string
            // 主播头像
            streamerIcon: string
            // 主播名称
            StreamerName: string
            // 封面路径
            frontCoverUrl: string
            // 赛事事件列表,结构同ws推送的消息格式,主要提供给推荐赛事/热门赛事接口获取比分与时间,对应ws事件名称为MATCH_STATUS_CHANGE/MATCH_CLOCK
            eventList: Array<{
              // No comments found.
              eventType: string
            }>
            // No comments found.
            eventType: string
            // 是否为fiba赛事
            isFiba: boolean
            // 是否为欧洲杯赛事
            isEuropeCup: boolean
            // cashout 狀態 0:不可 ,1:可
            cashoutStatus: number
          }
          // 动态市场字典(冠军玩法有效)， key: 对应odds的key, value: {zh:"xxx",en:"cxxewe"}
          dynamicMarkets: any
          // odds map的取key顺序(逗号分隔),ex:HDP,1X2... 表示key先取HDP,再取1X2
          oddsSort: string
          // 赔率 key=>玩法类型code value=>赔率列表
          odds: {
            [key: string]: {
              // 赔率idnullable
              id: string
              // 玩法类名称nullable
              name: string
              // 让分或大小分值nullable
              spread: string
              // 额外信息nullable
              extInfo: string
              // 欧洲盘赔率nullable
              odds: number
              // 香港盘赔率nullable
              hkOdds: number
              // 马来盘赔率
              malayOdds: number
              // 印尼盘赔率
              indoOdds: number
              // 市场排序，用于让球等玩法的排序
              marketSort: number
              // 0:活跃可用，可投注、1：临时锁定，不允许投注、2：不可用，不可见也不可投注nullable
              status: number
              // 赔率生产者nullable
              producerId: number
              // 保存各语系name对应值的map
              nameMap: any
              // 保存各语系extInfo对应值的map
              extInfoMap: any
              // 游戏类型 FT:soccer,BK:Basketball,BS:Baseball,FS:Outright,OP:Other,TN:Tennis,VB:Volleyball,BM:Badminton,TT:table tennis
              gameType: string
              // 玩法分类id
              playCateId: number
              // 玩法分类代码
              playCateCode: string
              // 玩法编码
              playCode: string
              // 賠率分組
              group: string
              // 版本号
              version: number
            }
          }
          // 赔率陣列
          oddsList: Array<{
            // 赔率idnullable
            id: string
            // 玩法类名称nullable
            name: string
            // 让分或大小分值nullable
            spread: string
            // 额外信息nullable
            extInfo: string
            // 欧洲盘赔率nullable
            odds: number
            // 香港盘赔率nullable
            hkOdds: number
            // 马来盘赔率
            malayOdds: number
            // 印尼盘赔率
            indoOdds: number
            // 市场排序，用于让球等玩法的排序
            marketSort: number
            // 0:活跃可用，可投注、1：临时锁定，不允许投注、2：不可用，不可见也不可投注nullable
            status: number
            // 赔率生产者nullable
            producerId: number
            // 保存各语系name对应值的map
            nameMap: any
            // 保存各语系extInfo对应值的map
            extInfoMap: any
            // 游戏类型 FT:soccer,BK:Basketball,BS:Baseball,FS:Outright,OP:Other,TN:Tennis,VB:Volleyball,BM:Badminton,TT:table tennis
            gameType: string
            // 玩法分类id
            playCateId: number
            // 玩法分类代码
            playCateCode: string
            // 玩法编码
            playCode: string
            // 賠率分組
            group: string
            // 版本号
            version: number
          }>
          // 赛事可玩的快捷玩法列表
          quickPlayCateList: Array<{
            // 游戏类型,如： FT篮球，BK篮球
            gameType: string
            // 代码
            code: string
            // 名称，如：让球/大小盘
            name: string
            // menu 排序
            sort: number
          }>
          // 大厅玩法对应名称
          playCateNameMap: any
          // 玩法实际名称(注单显示用)
          betPlayCateNameMap: any
          // dynamic玩法排序 (冠軍用)
          dynamicSort: string
          // 新版篮球末位比分自己投注的数量
          bkEndCarkOFLCount: number
          // 賠率的數量
          oddsNumMap: any
        }>
        // 排序
        sort: number
        // 是否展开，0：否，1：是
        unfold: number
        // 玩法赔率排序,同时代表该菜单下总共有的全部玩法
        oddsSort: string
        // 玩法对应名称
        playCateNameMap: any
      }>
      // 冠軍赛事
      seasonOddsList: Array<{
        // 联赛/赛季notNull
        league: {
          // 联赛/赛季id
          id: string
          // 名称
          name: string
          // 国家Code
          categoryCode: string
          // 国家
          category: string
          // 国家图标,svg的html元素(已进行UrlEncoded)
          categoryIcon: string
          // 联赛简称
          shortName: string
          // 联盟icon
          icon: string
        }
        // 赛事或赛季赔率notNull
        matchOdds: Array<{
          // 赛事信息notNull
          matchInfo: {
            // 赛事或赛季id
            id: string
            // 联赛id
            leagueId: string
            // 联赛名称
            leagueName: string
            // 主队id
            homeId: string
            // 主队名称
            homeName: string
            // 客队id
            awayId: string
            // 客队名称
            awayName: string
            // 赛事或赛季开始时间
            startTime: string | number
            // 赛事或赛季结束时间
            endTime: string | number
            // 赛事状态 0：未开始，1：比赛中，2：已结束，3：延期，4：已取消
            status: number
            // 该赛事之全部可投注玩法类数量
            playCateNum: number
            // 賽季名稱
            name: string
            // 圖片
            img: string
            // 訊息
            msg: string
            // 是否可以参加过关，0：否，1：是
            parlay: number
            // 有无赛事直播 0:无 1:有
            liveVideo: number
            // 是否是中立场，1：是，0：否
            neutral: number
            // 是否有特优赔率，1：是，0：否
            eps: number
            // 赛事的赛制类型,目前仅网球排球需要显示,0:默认值 3:三战两胜 5:五战三胜...
            spt: number
            // 动画映射id
            trackerId: string
            // 小金直播id
            tvId: string
            // 第三方直播id
            streamId: string
            // 游戏类型
            gameType: string
            // 数据源
            source: number
            // 主队图标
            homeIcon: string
            // 主队图标(svg)
            homeIconSvg: string
            // 客队图标
            awayIcon: string
            // 客队图标(svg)
            awayIconSvg: string
            // 是否滚盘中 0：否，1：是
            inplay: number
            // 是否有主播直播 0：否，1：是
            isLive: number
            // 房间号
            roundNo: string
            // 主播头像
            streamerIcon: string
            // 主播名称
            StreamerName: string
            // 封面路径
            frontCoverUrl: string
            // 赛事事件列表,结构同ws推送的消息格式,主要提供给推荐赛事/热门赛事接口获取比分与时间,对应ws事件名称为MATCH_STATUS_CHANGE/MATCH_CLOCK
            eventList: Array<{
              // No comments found.
              eventType: string
            }>
            // No comments found.
            eventType: string
            // 是否为fiba赛事
            isFiba: boolean
            // 是否为欧洲杯赛事
            isEuropeCup: boolean
            // cashout 狀態 0:不可 ,1:可
            cashoutStatus: number
          }
          // 动态市场字典(冠军玩法有效)， key: 对应odds的key, value: {zh:"xxx",en:"cxxewe"}
          dynamicMarkets: any
          // odds map的取key顺序(逗号分隔),ex:HDP,1X2... 表示key先取HDP,再取1X2
          oddsSort: string
          // 赔率 key=>玩法类型code value=>赔率列表
          odds: {
            [key: string]: {
              // 赔率idnullable
              id: string
              // 玩法类名称nullable
              name: string
              // 让分或大小分值nullable
              spread: string
              // 额外信息nullable
              extInfo: string
              // 欧洲盘赔率nullable
              odds: number
              // 香港盘赔率nullable
              hkOdds: number
              // 马来盘赔率
              malayOdds: number
              // 印尼盘赔率
              indoOdds: number
              // 市场排序，用于让球等玩法的排序
              marketSort: number
              // 0:活跃可用，可投注、1：临时锁定，不允许投注、2：不可用，不可见也不可投注nullable
              status: number
              // 赔率生产者nullable
              producerId: number
              // 保存各语系name对应值的map
              nameMap: any
              // 保存各语系extInfo对应值的map
              extInfoMap: any
              // 游戏类型 FT:soccer,BK:Basketball,BS:Baseball,FS:Outright,OP:Other,TN:Tennis,VB:Volleyball,BM:Badminton,TT:table tennis
              gameType: string
              // 玩法分类id
              playCateId: number
              // 玩法分类代码
              playCateCode: string
              // 玩法编码
              playCode: string
              // 賠率分組
              group: string
              // 版本号
              version: number
            }
          }
          // 赔率陣列
          oddsList: Array<{
            // 赔率idnullable
            id: string
            // 玩法类名称nullable
            name: string
            // 让分或大小分值nullable
            spread: string
            // 额外信息nullable
            extInfo: string
            // 欧洲盘赔率nullable
            odds: number
            // 香港盘赔率nullable
            hkOdds: number
            // 马来盘赔率
            malayOdds: number
            // 印尼盘赔率
            indoOdds: number
            // 市场排序，用于让球等玩法的排序
            marketSort: number
            // 0:活跃可用，可投注、1：临时锁定，不允许投注、2：不可用，不可见也不可投注nullable
            status: number
            // 赔率生产者nullable
            producerId: number
            // 保存各语系name对应值的map
            nameMap: any
            // 保存各语系extInfo对应值的map
            extInfoMap: any
            // 游戏类型 FT:soccer,BK:Basketball,BS:Baseball,FS:Outright,OP:Other,TN:Tennis,VB:Volleyball,BM:Badminton,TT:table tennis
            gameType: string
            // 玩法分类id
            playCateId: number
            // 玩法分类代码
            playCateCode: string
            // 玩法编码
            playCode: string
            // 賠率分組
            group: string
            // 版本号
            version: number
          }>
          // 赛事可玩的快捷玩法列表
          quickPlayCateList: Array<{
            // 游戏类型,如： FT篮球，BK篮球
            gameType: string
            // 代码
            code: string
            // 名称，如：让球/大小盘
            name: string
            // menu 排序
            sort: number
          }>
          // 大厅玩法对应名称
          playCateNameMap: any
          // 玩法实际名称(注单显示用)
          betPlayCateNameMap: any
          // dynamic玩法排序 (冠軍用)
          dynamicSort: string
          // 新版篮球末位比分自己投注的数量
          bkEndCarkOFLCount: number
          // 賠率的數量
          oddsNumMap: any
        }>
        // 排序
        sort: number
        // 是否展开，0：否，1：是
        unfold: number
        // 玩法赔率排序,同时代表该菜单下总共有的全部玩法
        oddsSort: string
        // 玩法对应名称
        playCateNameMap: any
      }>
    }>
    // 玩法对应名称
    playCateNameMap: any
    // No comments found.
    total: number
  }
  // 7.我的最爱: 7.5.查询我的推荐赛事
  type REQ = {
    // 游戏类型 (FT:足球，BK:篮球,TN:网球, VB:网球,BM：羽球)没带的话全查
    gameType?: string
    // 玩法类型菜单code
    playCateMenuCode: string
  }
}
// 8.冠军赛季信息: 8.1.查询赛季国家联赛列表,免登入即可访问
declare namespace API_OUTRIGHT_LEAGUE_LIST {
  // 8.冠军赛季信息: 8.1.查询赛季国家联赛列表,免登入即可访问
  type RES = {
    // No comments found.
    success: boolean
    // No comments found.
    msg: string
    // No comments found.
    code: number
    // No comments found.
    rows: Array<{
      // 主键
      id: string
      // 游戏类型 (FT:足球，BK:篮球,TN:网球, VB:网球,BM：羽球)
      gameType: string
      // 分类名称notNull
      name: string
      // 分类code
      code: string
      // 图标,svg的html元素(已进行UrlEncoded)
      icon: string
      // 联赛列表notNull
      list: Array<{
        // 联赛id
        id: string
        // 名称
        name: string
        // 赛事数量
        num: number
        // 排序
        sort: number
        // 联盟icon
        icon: string
      }>
      // 赛事/赛季数量notNull
      num: number
      // 排序
      sort: number
    }>
    // 排序
    sort: number
    // No comments found.
    total: number
  }
  // 8.冠军赛季信息: 8.1.查询赛季国家联赛列表,免登入即可访问
  type REQ = {
    // 游戏类型 (FT:足球，BK:篮球,TN:网球, VB:网球,BM：羽球)
    gameType: string
    // 专题冠军需要传入,如 sc:xxx 特殊参赛表（专题，如奥运会）一般冠军不用带此参数
    matchType?: string
  }
}
// 8.冠军赛季信息: 8.2.查询赛季国家联赛列表,免登入即可访问
declare namespace API_OUTRIGHT_V2_LEAGUE_LIST {
  // 8.冠军赛季信息: 8.2.查询赛季国家联赛列表,免登入即可访问
  type RES = {
    // No comments found.
    success: boolean
    // No comments found.
    msg: string
    // No comments found.
    code: number
    // No comments found.
    rows: Array<{
      // 游戏类型 (FT:足球，BK:篮球,TN:网球, VB:网球,BM：羽球)
      gameType: string
      // No comments found.
      leagueList: Array<{
        // 主键
        id: string
        // 游戏类型 (FT:足球，BK:篮球,TN:网球, VB:网球,BM：羽球)
        gameType: string
        // 分类名称notNull
        name: string
        // 分类code
        code: string
        // 图标,svg的html元素(已进行UrlEncoded)
        icon: string
        // 联赛列表notNull
        list: Array<{
          // 联赛id
          id: string
          // 名称
          name: string
          // 赛事数量
          num: number
          // 排序
          sort: number
          // 联盟icon
          icon: string
        }>
        // 赛事/赛季数量notNull
        num: number
        // 排序
        sort: number
      }>
    }>
    // 排序
    sort: number
    // No comments found.
    total: number
  }
  // 8.冠军赛季信息: 8.2.查询赛季国家联赛列表,免登入即可访问
  type REQ = {
    // 游戏类型 (FT:足球，BK:篮球,TN:网球, VB:网球,BM：羽球)，如为空则查出全部
    gameType?: string
    // 专题冠军需要传入,如 sc:xxx 特殊参赛表（专题，如奥运会）一般冠军不用带此参数
    matchType?: string
  }
}
// 8.冠军赛季信息: 8.3.查询赛季国家联赛列表,免登入即可访问
declare namespace API_OUTRIGHT_V3_LEAGUE_LIST {
  // 8.冠军赛季信息: 8.3.查询赛季国家联赛列表,免登入即可访问
  type RES = {
    // No comments found.
    success: boolean
    // No comments found.
    msg: string
    // No comments found.
    code: number
    // No comments found.
    rows: Array<{
      // 分类code
      code: string
      // 分类名称
      name: string
      // 赛季数量
      num: number
      // 排序
      sort: number
      // 分类icon
      icon: string
      // 赛季列表
      list: Array<{
        // 赛季id
        id: string
        // 赛季名称
        name: string
        // 赛季开始时间
        start: string
        // 赛季结束时间
        end: string
        // 赛季数量
        num: number
        // 排序
        sort: number
      }>
    }>
    // 排序
    sort: number
    // No comments found.
    total: number
  }
  // 8.冠军赛季信息: 8.3.查询赛季国家联赛列表,免登入即可访问
  type REQ = {
    // 游戏类型 (FT:足球，BK:篮球,TN:网球, VB:网球,BM：羽球)
    gameType: string
    // 联赛或赛季id列表
    leagueIdList?: any[]
    // sc:xxx 特殊参赛表（专题，如奥运会）
    matchType?: string
    // 玩法类型菜单code备注：playCateMenuCode=OUTRIGHT, 查询的是冠军玩法赔率
    playCateMenuCode: string
    // No comments found.
    page?: number
    // No comments found.
    pageSize?: number
    // season id列表
    seasonIdList?: any[]
  }
}
// 9.赛事赔率信息: 9.1.- 目前供PC使用(只要有赔率也会塞赛事供前端，可以点入详情查看其他赛事，避免有玩法不在playCateMenu里而整个赛事没显示，导致上面赛事数量与下面对不起来)大厅赔率列表,根据滚球今日早盘等类型返回对应联赛列表与各联赛的可玩赛事仅提供第一个联赛的赛事赔率,其他联赛的赛事赔率在订阅ws时返回,以免接口的处理数据量过大免登入即可访问
declare namespace API_MATCH_ODDS_SIMPLE_LIST_MATCHALL {
  // 9.赛事赔率信息: 9.1.- 目前供PC使用(只要有赔率也会塞赛事供前端，可以点入详情查看其他赛事，避免有玩法不在playCateMenu里而整个赛事没显示，导致上面赛事数量与下面对不起来)大厅赔率列表,根据滚球今日早盘等类型返回对应联赛列表与各联赛的可玩赛事仅提供第一个联赛的赛事赔率,其他联赛的赛事赔率在订阅ws时返回,以免接口的处理数据量过大免登入即可访问
  type RES = {
    // No comments found.
    success: boolean
    // No comments found.
    msg: string
    // No comments found.
    code: number
    // No comments found.
    t: {
      // 体育项目notNull
      sport: {
        // code,FT:足球，BK:篮球notNull
        code: string
        // 名称,如：足球，篮球notNull
        name: string
      }
      // 联赛&赔率notNull
      leagueOdds: Array<{
        // 联赛/赛季notNull
        league: {
          // 联赛/赛季id
          id: string
          // 名称
          name: string
          // 国家Code
          categoryCode: string
          // 国家
          category: string
          // 国家图标,svg的html元素(已进行UrlEncoded)
          categoryIcon: string
          // 联赛简称
          shortName: string
          // 联盟icon
          icon: string
        }
        // 赛事或赛季赔率notNull
        matchOdds: Array<{
          // 赛事信息notNull
          matchInfo: {
            // 赛事或赛季id
            id: string
            // 联赛id
            leagueId: string
            // 联赛名称
            leagueName: string
            // 主队id
            homeId: string
            // 主队名称
            homeName: string
            // 客队id
            awayId: string
            // 客队名称
            awayName: string
            // 赛事或赛季开始时间
            startTime: string | number
            // 赛事或赛季结束时间
            endTime: string | number
            // 赛事状态 0：未开始，1：比赛中，2：已结束，3：延期，4：已取消
            status: number
            // 该赛事之全部可投注玩法类数量
            playCateNum: number
            // 賽季名稱
            name: string
            // 圖片
            img: string
            // 訊息
            msg: string
            // 是否可以参加过关，0：否，1：是
            parlay: number
            // 有无赛事直播 0:无 1:有
            liveVideo: number
            // 是否是中立场，1：是，0：否
            neutral: number
            // 是否有特优赔率，1：是，0：否
            eps: number
            // 赛事的赛制类型,目前仅网球排球需要显示,0:默认值 3:三战两胜 5:五战三胜...
            spt: number
            // 动画映射id
            trackerId: string
            // 小金直播id
            tvId: string
            // 第三方直播id
            streamId: string
            // 游戏类型
            gameType: string
            // 数据源
            source: number
            // 主队图标
            homeIcon: string
            // 主队图标(svg)
            homeIconSvg: string
            // 客队图标
            awayIcon: string
            // 客队图标(svg)
            awayIconSvg: string
            // 是否滚盘中 0：否，1：是
            inplay: number
            // 是否有主播直播 0：否，1：是
            isLive: number
            // 房间号
            roundNo: string
            // 主播头像
            streamerIcon: string
            // 主播名称
            StreamerName: string
            // 封面路径
            frontCoverUrl: string
            // 赛事事件列表,结构同ws推送的消息格式,主要提供给推荐赛事/热门赛事接口获取比分与时间,对应ws事件名称为MATCH_STATUS_CHANGE/MATCH_CLOCK
            eventList: Array<{
              // No comments found.
              eventType: string
            }>
            // No comments found.
            eventType: string
            // 是否为fiba赛事
            isFiba: boolean
            // 是否为欧洲杯赛事
            isEuropeCup: boolean
            // cashout 狀態 0:不可 ,1:可
            cashoutStatus: number
          }
          // 动态市场字典(冠军玩法有效)， key: 对应odds的key, value: {zh:"xxx",en:"cxxewe"}
          dynamicMarkets: any
          // odds map的取key顺序(逗号分隔),ex:HDP,1X2... 表示key先取HDP,再取1X2
          oddsSort: string
          // 赔率 key=>玩法类型code value=>赔率列表
          odds: {
            [key: string]: {
              // 赔率idnullable
              id: string
              // 玩法类名称nullable
              name: string
              // 让分或大小分值nullable
              spread: string
              // 额外信息nullable
              extInfo: string
              // 欧洲盘赔率nullable
              odds: number
              // 香港盘赔率nullable
              hkOdds: number
              // 马来盘赔率
              malayOdds: number
              // 印尼盘赔率
              indoOdds: number
              // 市场排序，用于让球等玩法的排序
              marketSort: number
              // 0:活跃可用，可投注、1：临时锁定，不允许投注、2：不可用，不可见也不可投注nullable
              status: number
              // 赔率生产者nullable
              producerId: number
              // 保存各语系name对应值的map
              nameMap: any
              // 保存各语系extInfo对应值的map
              extInfoMap: any
              // 游戏类型 FT:soccer,BK:Basketball,BS:Baseball,FS:Outright,OP:Other,TN:Tennis,VB:Volleyball,BM:Badminton,TT:table tennis
              gameType: string
              // 玩法分类id
              playCateId: number
              // 玩法分类代码
              playCateCode: string
              // 玩法编码
              playCode: string
              // 賠率分組
              group: string
              // 版本号
              version: number
            }
          }
          // 赔率陣列
          oddsList: Array<{
            // 赔率idnullable
            id: string
            // 玩法类名称nullable
            name: string
            // 让分或大小分值nullable
            spread: string
            // 额外信息nullable
            extInfo: string
            // 欧洲盘赔率nullable
            odds: number
            // 香港盘赔率nullable
            hkOdds: number
            // 马来盘赔率
            malayOdds: number
            // 印尼盘赔率
            indoOdds: number
            // 市场排序，用于让球等玩法的排序
            marketSort: number
            // 0:活跃可用，可投注、1：临时锁定，不允许投注、2：不可用，不可见也不可投注nullable
            status: number
            // 赔率生产者nullable
            producerId: number
            // 保存各语系name对应值的map
            nameMap: any
            // 保存各语系extInfo对应值的map
            extInfoMap: any
            // 游戏类型 FT:soccer,BK:Basketball,BS:Baseball,FS:Outright,OP:Other,TN:Tennis,VB:Volleyball,BM:Badminton,TT:table tennis
            gameType: string
            // 玩法分类id
            playCateId: number
            // 玩法分类代码
            playCateCode: string
            // 玩法编码
            playCode: string
            // 賠率分組
            group: string
            // 版本号
            version: number
          }>
          // 赛事可玩的快捷玩法列表
          quickPlayCateList: Array<{
            // 游戏类型,如： FT篮球，BK篮球
            gameType: string
            // 代码
            code: string
            // 名称，如：让球/大小盘
            name: string
            // menu 排序
            sort: number
          }>
          // 大厅玩法对应名称
          playCateNameMap: any
          // 玩法实际名称(注单显示用)
          betPlayCateNameMap: any
          // dynamic玩法排序 (冠軍用)
          dynamicSort: string
          // 新版篮球末位比分自己投注的数量
          bkEndCarkOFLCount: number
          // 賠率的數量
          oddsNumMap: any
        }>
        // 排序
        sort: number
        // 是否展开，0：否，1：是
        unfold: number
        // 玩法赔率排序,同时代表该菜单下总共有的全部玩法
        oddsSort: string
        // 玩法对应名称
        playCateNameMap: any
      }>
      // 加时联赛&赔率
      otLeagueOdds: Array<{
        // 联赛/赛季notNull
        league: {
          // 联赛/赛季id
          id: string
          // 名称
          name: string
          // 国家Code
          categoryCode: string
          // 国家
          category: string
          // 国家图标,svg的html元素(已进行UrlEncoded)
          categoryIcon: string
          // 联赛简称
          shortName: string
          // 联盟icon
          icon: string
        }
        // 赛事或赛季赔率notNull
        matchOdds: Array<{
          // 赛事信息notNull
          matchInfo: {
            // 赛事或赛季id
            id: string
            // 联赛id
            leagueId: string
            // 联赛名称
            leagueName: string
            // 主队id
            homeId: string
            // 主队名称
            homeName: string
            // 客队id
            awayId: string
            // 客队名称
            awayName: string
            // 赛事或赛季开始时间
            startTime: string | number
            // 赛事或赛季结束时间
            endTime: string | number
            // 赛事状态 0：未开始，1：比赛中，2：已结束，3：延期，4：已取消
            status: number
            // 该赛事之全部可投注玩法类数量
            playCateNum: number
            // 賽季名稱
            name: string
            // 圖片
            img: string
            // 訊息
            msg: string
            // 是否可以参加过关，0：否，1：是
            parlay: number
            // 有无赛事直播 0:无 1:有
            liveVideo: number
            // 是否是中立场，1：是，0：否
            neutral: number
            // 是否有特优赔率，1：是，0：否
            eps: number
            // 赛事的赛制类型,目前仅网球排球需要显示,0:默认值 3:三战两胜 5:五战三胜...
            spt: number
            // 动画映射id
            trackerId: string
            // 小金直播id
            tvId: string
            // 第三方直播id
            streamId: string
            // 游戏类型
            gameType: string
            // 数据源
            source: number
            // 主队图标
            homeIcon: string
            // 主队图标(svg)
            homeIconSvg: string
            // 客队图标
            awayIcon: string
            // 客队图标(svg)
            awayIconSvg: string
            // 是否滚盘中 0：否，1：是
            inplay: number
            // 是否有主播直播 0：否，1：是
            isLive: number
            // 房间号
            roundNo: string
            // 主播头像
            streamerIcon: string
            // 主播名称
            StreamerName: string
            // 封面路径
            frontCoverUrl: string
            // 赛事事件列表,结构同ws推送的消息格式,主要提供给推荐赛事/热门赛事接口获取比分与时间,对应ws事件名称为MATCH_STATUS_CHANGE/MATCH_CLOCK
            eventList: Array<{
              // No comments found.
              eventType: string
            }>
            // No comments found.
            eventType: string
            // 是否为fiba赛事
            isFiba: boolean
            // 是否为欧洲杯赛事
            isEuropeCup: boolean
            // cashout 狀態 0:不可 ,1:可
            cashoutStatus: number
          }
          // 动态市场字典(冠军玩法有效)， key: 对应odds的key, value: {zh:"xxx",en:"cxxewe"}
          dynamicMarkets: any
          // odds map的取key顺序(逗号分隔),ex:HDP,1X2... 表示key先取HDP,再取1X2
          oddsSort: string
          // 赔率 key=>玩法类型code value=>赔率列表
          odds: {
            [key: string]: {
              // 赔率idnullable
              id: string
              // 玩法类名称nullable
              name: string
              // 让分或大小分值nullable
              spread: string
              // 额外信息nullable
              extInfo: string
              // 欧洲盘赔率nullable
              odds: number
              // 香港盘赔率nullable
              hkOdds: number
              // 马来盘赔率
              malayOdds: number
              // 印尼盘赔率
              indoOdds: number
              // 市场排序，用于让球等玩法的排序
              marketSort: number
              // 0:活跃可用，可投注、1：临时锁定，不允许投注、2：不可用，不可见也不可投注nullable
              status: number
              // 赔率生产者nullable
              producerId: number
              // 保存各语系name对应值的map
              nameMap: any
              // 保存各语系extInfo对应值的map
              extInfoMap: any
              // 游戏类型 FT:soccer,BK:Basketball,BS:Baseball,FS:Outright,OP:Other,TN:Tennis,VB:Volleyball,BM:Badminton,TT:table tennis
              gameType: string
              // 玩法分类id
              playCateId: number
              // 玩法分类代码
              playCateCode: string
              // 玩法编码
              playCode: string
              // 賠率分組
              group: string
              // 版本号
              version: number
            }
          }
          // 赔率陣列
          oddsList: Array<{
            // 赔率idnullable
            id: string
            // 玩法类名称nullable
            name: string
            // 让分或大小分值nullable
            spread: string
            // 额外信息nullable
            extInfo: string
            // 欧洲盘赔率nullable
            odds: number
            // 香港盘赔率nullable
            hkOdds: number
            // 马来盘赔率
            malayOdds: number
            // 印尼盘赔率
            indoOdds: number
            // 市场排序，用于让球等玩法的排序
            marketSort: number
            // 0:活跃可用，可投注、1：临时锁定，不允许投注、2：不可用，不可见也不可投注nullable
            status: number
            // 赔率生产者nullable
            producerId: number
            // 保存各语系name对应值的map
            nameMap: any
            // 保存各语系extInfo对应值的map
            extInfoMap: any
            // 游戏类型 FT:soccer,BK:Basketball,BS:Baseball,FS:Outright,OP:Other,TN:Tennis,VB:Volleyball,BM:Badminton,TT:table tennis
            gameType: string
            // 玩法分类id
            playCateId: number
            // 玩法分类代码
            playCateCode: string
            // 玩法编码
            playCode: string
            // 賠率分組
            group: string
            // 版本号
            version: number
          }>
          // 赛事可玩的快捷玩法列表
          quickPlayCateList: Array<{
            // 游戏类型,如： FT篮球，BK篮球
            gameType: string
            // 代码
            code: string
            // 名称，如：让球/大小盘
            name: string
            // menu 排序
            sort: number
          }>
          // 大厅玩法对应名称
          playCateNameMap: any
          // 玩法实际名称(注单显示用)
          betPlayCateNameMap: any
          // dynamic玩法排序 (冠軍用)
          dynamicSort: string
          // 新版篮球末位比分自己投注的数量
          bkEndCarkOFLCount: number
          // 賠率的數量
          oddsNumMap: any
        }>
        // 排序
        sort: number
        // 是否展开，0：否，1：是
        unfold: number
        // 玩法赔率排序,同时代表该菜单下总共有的全部玩法
        oddsSort: string
        // 玩法对应名称
        playCateNameMap: any
      }>
      // 总页数
      totalPage: number
    }
  }
  // 9.赛事赔率信息: 9.1.- 目前供PC使用(只要有赔率也会塞赛事供前端，可以点入详情查看其他赛事，避免有玩法不在playCateMenu里而整个赛事没显示，导致上面赛事数量与下面对不起来)大厅赔率列表,根据滚球今日早盘等类型返回对应联赛列表与各联赛的可玩赛事仅提供第一个联赛的赛事赔率,其他联赛的赛事赔率在订阅ws时返回,以免接口的处理数据量过大免登入即可访问
  type REQ = {
    // 游戏类型 (FT:足球，BK:篮球,TN:网球, VB:网球,BM：羽球)
    gameType: string
    // 赛事类型,eg: TODAY（今日）, EARLY(早盘),PARLAY（串连）, INPLAY(滚球）,ATSTART(即将开始), IN1HR(近1小時), IN3HR(近3小時), IN6HR(近6小時), IN12HR(近12小時), IN24HR(近24小時), sc:xxx 特殊参赛表（专题，如奥运会）,CS(波胆)
    matchType: string
    // 联赛或赛季id列表
    leagueIdList?: any[]
    // 赛事id列表
    matchIdList?: any[]
    // 玩法类型菜单code备注：playCateMenuCode=OUTRIGHT, 查询的是冠军玩法赔率;
    playCateMenuCode: string
    // matchType为PARLAY时需带此参数,可支持的选项为：INPLAY（滚球），TODAY（今日）,EARLY（早盘)为空则为查询所有，默认30天内赛事
    date?: string
    // 开始时间（时间戳）
    startTime?: string | number
    // 结束时间（时间戳）
    endTime?: string | number
    // 是否为行动装置 0: 否，1: 是
    isMobile?: number
    // 排序类型 0：按联赛id，1：按赛事时间
    orderType?: number
  }
}
// 9.赛事赔率信息: 9.2.大厅赔率列表,根据滚球今日早盘等类型返回对应联赛列表与各联赛的可玩赛事仅提供第一个联赛的赛事赔率,其他联赛的赛事赔率在订阅ws时返回,以免接口的处理数据量过大免登入即可访问
declare namespace API_MATCH_ODDS_SIMPLE_LIST {
  // 9.赛事赔率信息: 9.2.大厅赔率列表,根据滚球今日早盘等类型返回对应联赛列表与各联赛的可玩赛事仅提供第一个联赛的赛事赔率,其他联赛的赛事赔率在订阅ws时返回,以免接口的处理数据量过大免登入即可访问
  type RES = {
    // No comments found.
    success: boolean
    // No comments found.
    msg: string
    // No comments found.
    code: number
    // No comments found.
    t: {
      // 体育项目notNull
      sport: {
        // code,FT:足球，BK:篮球notNull
        code: string
        // 名称,如：足球，篮球notNull
        name: string
      }
      // 联赛&赔率notNull
      leagueOdds: Array<{
        // 联赛/赛季notNull
        league: {
          // 联赛/赛季id
          id: string
          // 名称
          name: string
          // 国家Code
          categoryCode: string
          // 国家
          category: string
          // 国家图标,svg的html元素(已进行UrlEncoded)
          categoryIcon: string
          // 联赛简称
          shortName: string
          // 联盟icon
          icon: string
        }
        // 赛事或赛季赔率notNull
        matchOdds: Array<{
          // 赛事信息notNull
          matchInfo: {
            // 赛事或赛季id
            id: string
            // 联赛id
            leagueId: string
            // 联赛名称
            leagueName: string
            // 主队id
            homeId: string
            // 主队名称
            homeName: string
            // 客队id
            awayId: string
            // 客队名称
            awayName: string
            // 赛事或赛季开始时间
            startTime: string | number
            // 赛事或赛季结束时间
            endTime: string | number
            // 赛事状态 0：未开始，1：比赛中，2：已结束，3：延期，4：已取消
            status: number
            // 该赛事之全部可投注玩法类数量
            playCateNum: number
            // 賽季名稱
            name: string
            // 圖片
            img: string
            // 訊息
            msg: string
            // 是否可以参加过关，0：否，1：是
            parlay: number
            // 有无赛事直播 0:无 1:有
            liveVideo: number
            // 是否是中立场，1：是，0：否
            neutral: number
            // 是否有特优赔率，1：是，0：否
            eps: number
            // 赛事的赛制类型,目前仅网球排球需要显示,0:默认值 3:三战两胜 5:五战三胜...
            spt: number
            // 动画映射id
            trackerId: string
            // 小金直播id
            tvId: string
            // 第三方直播id
            streamId: string
            // 游戏类型
            gameType: string
            // 数据源
            source: number
            // 主队图标
            homeIcon: string
            // 主队图标(svg)
            homeIconSvg: string
            // 客队图标
            awayIcon: string
            // 客队图标(svg)
            awayIconSvg: string
            // 是否滚盘中 0：否，1：是
            inplay: number
            // 是否有主播直播 0：否，1：是
            isLive: number
            // 房间号
            roundNo: string
            // 主播头像
            streamerIcon: string
            // 主播名称
            StreamerName: string
            // 封面路径
            frontCoverUrl: string
            // 赛事事件列表,结构同ws推送的消息格式,主要提供给推荐赛事/热门赛事接口获取比分与时间,对应ws事件名称为MATCH_STATUS_CHANGE/MATCH_CLOCK
            eventList: Array<{
              // No comments found.
              eventType: string
            }>
            // No comments found.
            eventType: string
            // 是否为fiba赛事
            isFiba: boolean
            // 是否为欧洲杯赛事
            isEuropeCup: boolean
            // cashout 狀態 0:不可 ,1:可
            cashoutStatus: number
          }
          // 动态市场字典(冠军玩法有效)， key: 对应odds的key, value: {zh:"xxx",en:"cxxewe"}
          dynamicMarkets: any
          // odds map的取key顺序(逗号分隔),ex:HDP,1X2... 表示key先取HDP,再取1X2
          oddsSort: string
          // 赔率 key=>玩法类型code value=>赔率列表
          odds: {
            [key: string]: {
              // 赔率idnullable
              id: string
              // 玩法类名称nullable
              name: string
              // 让分或大小分值nullable
              spread: string
              // 额外信息nullable
              extInfo: string
              // 欧洲盘赔率nullable
              odds: number
              // 香港盘赔率nullable
              hkOdds: number
              // 马来盘赔率
              malayOdds: number
              // 印尼盘赔率
              indoOdds: number
              // 市场排序，用于让球等玩法的排序
              marketSort: number
              // 0:活跃可用，可投注、1：临时锁定，不允许投注、2：不可用，不可见也不可投注nullable
              status: number
              // 赔率生产者nullable
              producerId: number
              // 保存各语系name对应值的map
              nameMap: any
              // 保存各语系extInfo对应值的map
              extInfoMap: any
              // 游戏类型 FT:soccer,BK:Basketball,BS:Baseball,FS:Outright,OP:Other,TN:Tennis,VB:Volleyball,BM:Badminton,TT:table tennis
              gameType: string
              // 玩法分类id
              playCateId: number
              // 玩法分类代码
              playCateCode: string
              // 玩法编码
              playCode: string
              // 賠率分組
              group: string
              // 版本号
              version: number
            }
          }
          // 赔率陣列
          oddsList: Array<{
            // 赔率idnullable
            id: string
            // 玩法类名称nullable
            name: string
            // 让分或大小分值nullable
            spread: string
            // 额外信息nullable
            extInfo: string
            // 欧洲盘赔率nullable
            odds: number
            // 香港盘赔率nullable
            hkOdds: number
            // 马来盘赔率
            malayOdds: number
            // 印尼盘赔率
            indoOdds: number
            // 市场排序，用于让球等玩法的排序
            marketSort: number
            // 0:活跃可用，可投注、1：临时锁定，不允许投注、2：不可用，不可见也不可投注nullable
            status: number
            // 赔率生产者nullable
            producerId: number
            // 保存各语系name对应值的map
            nameMap: any
            // 保存各语系extInfo对应值的map
            extInfoMap: any
            // 游戏类型 FT:soccer,BK:Basketball,BS:Baseball,FS:Outright,OP:Other,TN:Tennis,VB:Volleyball,BM:Badminton,TT:table tennis
            gameType: string
            // 玩法分类id
            playCateId: number
            // 玩法分类代码
            playCateCode: string
            // 玩法编码
            playCode: string
            // 賠率分組
            group: string
            // 版本号
            version: number
          }>
          // 赛事可玩的快捷玩法列表
          quickPlayCateList: Array<{
            // 游戏类型,如： FT篮球，BK篮球
            gameType: string
            // 代码
            code: string
            // 名称，如：让球/大小盘
            name: string
            // menu 排序
            sort: number
          }>
          // 大厅玩法对应名称
          playCateNameMap: any
          // 玩法实际名称(注单显示用)
          betPlayCateNameMap: any
          // dynamic玩法排序 (冠軍用)
          dynamicSort: string
          // 新版篮球末位比分自己投注的数量
          bkEndCarkOFLCount: number
          // 賠率的數量
          oddsNumMap: any
        }>
        // 排序
        sort: number
        // 是否展开，0：否，1：是
        unfold: number
        // 玩法赔率排序,同时代表该菜单下总共有的全部玩法
        oddsSort: string
        // 玩法对应名称
        playCateNameMap: any
      }>
      // 加时联赛&赔率
      otLeagueOdds: Array<{
        // 联赛/赛季notNull
        league: {
          // 联赛/赛季id
          id: string
          // 名称
          name: string
          // 国家Code
          categoryCode: string
          // 国家
          category: string
          // 国家图标,svg的html元素(已进行UrlEncoded)
          categoryIcon: string
          // 联赛简称
          shortName: string
          // 联盟icon
          icon: string
        }
        // 赛事或赛季赔率notNull
        matchOdds: Array<{
          // 赛事信息notNull
          matchInfo: {
            // 赛事或赛季id
            id: string
            // 联赛id
            leagueId: string
            // 联赛名称
            leagueName: string
            // 主队id
            homeId: string
            // 主队名称
            homeName: string
            // 客队id
            awayId: string
            // 客队名称
            awayName: string
            // 赛事或赛季开始时间
            startTime: string | number
            // 赛事或赛季结束时间
            endTime: string | number
            // 赛事状态 0：未开始，1：比赛中，2：已结束，3：延期，4：已取消
            status: number
            // 该赛事之全部可投注玩法类数量
            playCateNum: number
            // 賽季名稱
            name: string
            // 圖片
            img: string
            // 訊息
            msg: string
            // 是否可以参加过关，0：否，1：是
            parlay: number
            // 有无赛事直播 0:无 1:有
            liveVideo: number
            // 是否是中立场，1：是，0：否
            neutral: number
            // 是否有特优赔率，1：是，0：否
            eps: number
            // 赛事的赛制类型,目前仅网球排球需要显示,0:默认值 3:三战两胜 5:五战三胜...
            spt: number
            // 动画映射id
            trackerId: string
            // 小金直播id
            tvId: string
            // 第三方直播id
            streamId: string
            // 游戏类型
            gameType: string
            // 数据源
            source: number
            // 主队图标
            homeIcon: string
            // 主队图标(svg)
            homeIconSvg: string
            // 客队图标
            awayIcon: string
            // 客队图标(svg)
            awayIconSvg: string
            // 是否滚盘中 0：否，1：是
            inplay: number
            // 是否有主播直播 0：否，1：是
            isLive: number
            // 房间号
            roundNo: string
            // 主播头像
            streamerIcon: string
            // 主播名称
            StreamerName: string
            // 封面路径
            frontCoverUrl: string
            // 赛事事件列表,结构同ws推送的消息格式,主要提供给推荐赛事/热门赛事接口获取比分与时间,对应ws事件名称为MATCH_STATUS_CHANGE/MATCH_CLOCK
            eventList: Array<{
              // No comments found.
              eventType: string
            }>
            // No comments found.
            eventType: string
            // 是否为fiba赛事
            isFiba: boolean
            // 是否为欧洲杯赛事
            isEuropeCup: boolean
            // cashout 狀態 0:不可 ,1:可
            cashoutStatus: number
          }
          // 动态市场字典(冠军玩法有效)， key: 对应odds的key, value: {zh:"xxx",en:"cxxewe"}
          dynamicMarkets: any
          // odds map的取key顺序(逗号分隔),ex:HDP,1X2... 表示key先取HDP,再取1X2
          oddsSort: string
          // 赔率 key=>玩法类型code value=>赔率列表
          odds: {
            [key: string]: {
              // 赔率idnullable
              id: string
              // 玩法类名称nullable
              name: string
              // 让分或大小分值nullable
              spread: string
              // 额外信息nullable
              extInfo: string
              // 欧洲盘赔率nullable
              odds: number
              // 香港盘赔率nullable
              hkOdds: number
              // 马来盘赔率
              malayOdds: number
              // 印尼盘赔率
              indoOdds: number
              // 市场排序，用于让球等玩法的排序
              marketSort: number
              // 0:活跃可用，可投注、1：临时锁定，不允许投注、2：不可用，不可见也不可投注nullable
              status: number
              // 赔率生产者nullable
              producerId: number
              // 保存各语系name对应值的map
              nameMap: any
              // 保存各语系extInfo对应值的map
              extInfoMap: any
              // 游戏类型 FT:soccer,BK:Basketball,BS:Baseball,FS:Outright,OP:Other,TN:Tennis,VB:Volleyball,BM:Badminton,TT:table tennis
              gameType: string
              // 玩法分类id
              playCateId: number
              // 玩法分类代码
              playCateCode: string
              // 玩法编码
              playCode: string
              // 賠率分組
              group: string
              // 版本号
              version: number
            }
          }
          // 赔率陣列
          oddsList: Array<{
            // 赔率idnullable
            id: string
            // 玩法类名称nullable
            name: string
            // 让分或大小分值nullable
            spread: string
            // 额外信息nullable
            extInfo: string
            // 欧洲盘赔率nullable
            odds: number
            // 香港盘赔率nullable
            hkOdds: number
            // 马来盘赔率
            malayOdds: number
            // 印尼盘赔率
            indoOdds: number
            // 市场排序，用于让球等玩法的排序
            marketSort: number
            // 0:活跃可用，可投注、1：临时锁定，不允许投注、2：不可用，不可见也不可投注nullable
            status: number
            // 赔率生产者nullable
            producerId: number
            // 保存各语系name对应值的map
            nameMap: any
            // 保存各语系extInfo对应值的map
            extInfoMap: any
            // 游戏类型 FT:soccer,BK:Basketball,BS:Baseball,FS:Outright,OP:Other,TN:Tennis,VB:Volleyball,BM:Badminton,TT:table tennis
            gameType: string
            // 玩法分类id
            playCateId: number
            // 玩法分类代码
            playCateCode: string
            // 玩法编码
            playCode: string
            // 賠率分組
            group: string
            // 版本号
            version: number
          }>
          // 赛事可玩的快捷玩法列表
          quickPlayCateList: Array<{
            // 游戏类型,如： FT篮球，BK篮球
            gameType: string
            // 代码
            code: string
            // 名称，如：让球/大小盘
            name: string
            // menu 排序
            sort: number
          }>
          // 大厅玩法对应名称
          playCateNameMap: any
          // 玩法实际名称(注单显示用)
          betPlayCateNameMap: any
          // dynamic玩法排序 (冠軍用)
          dynamicSort: string
          // 新版篮球末位比分自己投注的数量
          bkEndCarkOFLCount: number
          // 賠率的數量
          oddsNumMap: any
        }>
        // 排序
        sort: number
        // 是否展开，0：否，1：是
        unfold: number
        // 玩法赔率排序,同时代表该菜单下总共有的全部玩法
        oddsSort: string
        // 玩法对应名称
        playCateNameMap: any
      }>
      // 总页数
      totalPage: number
    }
  }
  // 9.赛事赔率信息: 9.2.大厅赔率列表,根据滚球今日早盘等类型返回对应联赛列表与各联赛的可玩赛事仅提供第一个联赛的赛事赔率,其他联赛的赛事赔率在订阅ws时返回,以免接口的处理数据量过大免登入即可访问
  type REQ = {
    // 游戏类型 (FT:足球，BK:篮球,TN:网球, VB:网球,BM：羽球)
    gameType: string
    // 赛事类型,eg: TODAY（今日）, EARLY(早盘),PARLAY（串连）, INPLAY(滚球）,ATSTART(即将开始), IN1HR(近1小時), IN3HR(近3小時), IN6HR(近6小時), IN12HR(近12小時), IN24HR(近24小時), sc:xxx 特殊参赛表（专题，如奥运会）,CS(波胆)
    matchType: string
    // 联赛或赛季id列表
    leagueIdList?: any[]
    // 赛事id列表
    matchIdList?: any[]
    // 玩法类型菜单code备注：playCateMenuCode=OUTRIGHT, 查询的是冠军玩法赔率;
    playCateMenuCode: string
    // matchType为PARLAY时需带此参数,可支持的选项为：INPLAY（滚球），TODAY（今日）,EARLY（早盘)为空则为查询所有，默认30天内赛事
    date?: string
    // 开始时间（时间戳）
    startTime?: string | number
    // 结束时间（时间戳）
    endTime?: string | number
    // 是否为行动装置 0: 否，1: 是
    isMobile?: number
    // 排序类型 0：按联赛id，1：按赛事时间
    orderType?: number
  }
}
// 9.赛事赔率信息: 9.3.赛事赔率列表,免登入即可访问
declare namespace API_MATCH_ODDS_DETAIL {
  // 9.赛事赔率信息: 9.3.赛事赔率列表,免登入即可访问
  type RES = {
    // No comments found.
    success: boolean
    // No comments found.
    msg: string
    // No comments found.
    code: number
    // No comments found.
    t: {
      // 联赛notNull
      league: {
        // 联赛/赛季id
        id: string
        // 名称
        name: string
        // 国家Code
        categoryCode: string
        // 国家
        category: string
        // 国家图标,svg的html元素(已进行UrlEncoded)
        categoryIcon: string
        // 联赛简称
        shortName: string
        // 联盟icon
        icon: string
      }
      // 赛事&赔率notNull
      matchOdds: {
        // 赛事信息notNull
        matchInfo: {
          // 赛事或赛季id
          id: string
          // 联赛id
          leagueId: string
          // 联赛名称
          leagueName: string
          // 主队id
          homeId: string
          // 主队名称
          homeName: string
          // 客队id
          awayId: string
          // 客队名称
          awayName: string
          // 赛事或赛季开始时间
          startTime: string | number
          // 赛事或赛季结束时间
          endTime: string | number
          // 赛事状态 0：未开始，1：比赛中，2：已结束，3：延期，4：已取消
          status: number
          // 该赛事之全部可投注玩法类数量
          playCateNum: number
          // 賽季名稱
          name: string
          // 圖片
          img: string
          // 訊息
          msg: string
          // 是否可以参加过关，0：否，1：是
          parlay: number
          // 有无赛事直播 0:无 1:有
          liveVideo: number
          // 是否是中立场，1：是，0：否
          neutral: number
          // 是否有特优赔率，1：是，0：否
          eps: number
          // 赛事的赛制类型,目前仅网球排球需要显示,0:默认值 3:三战两胜 5:五战三胜...
          spt: number
          // 动画映射id
          trackerId: string
          // 小金直播id
          tvId: string
          // 第三方直播id
          streamId: string
          // 游戏类型
          gameType: string
          // 数据源
          source: number
          // 主队图标
          homeIcon: string
          // 主队图标(svg)
          homeIconSvg: string
          // 客队图标
          awayIcon: string
          // 客队图标(svg)
          awayIconSvg: string
          // 是否滚盘中 0：否，1：是
          inplay: number
          // 是否有主播直播 0：否，1：是
          isLive: number
          // 房间号
          roundNo: string
          // 主播头像
          streamerIcon: string
          // 主播名称
          StreamerName: string
          // 封面路径
          frontCoverUrl: string
          // 赛事事件列表,结构同ws推送的消息格式,主要提供给推荐赛事/热门赛事接口获取比分与时间,对应ws事件名称为MATCH_STATUS_CHANGE/MATCH_CLOCK
          eventList: Array<{
            // No comments found.
            eventType: string
          }>
          // No comments found.
          eventType: string
          // 是否为fiba赛事
          isFiba: boolean
          // 是否为欧洲杯赛事
          isEuropeCup: boolean
          // cashout 狀態 0:不可 ,1:可
          cashoutStatus: number
        }
        // 玩法分类表
        playCateTypeList: Array<{
          // 类型代码
          code: string
          // 类型名称（中文）
          name: string
          // 游戏类型 FT：足球
          gameType: string
          // 排序 default 1 COMMENT '同级排序，值越小排在越前面
          sort: number
          // 备注
          remark: string
        }>
        // 赔率 key=>玩法类型code:spread value=>赔率详情
        odds: {
          [key: string]: {
            // 玩法类code
            playCateCode: string
            // 所属分类notNull
            typeCodes: string
            // 玩法类型名称notNull
            name: string
            // 保存各语系name对应值的map
            nameMap: any
            // 赔率notNull
            odds: Array<{
              // 赔率idnullable
              id: string
              // 玩法名称（如果是球员玩法，则名称代码球员名称）nullable
              name: string
              // 额外信息. （如果是球员玩法，则H表示主队,C表示客队）nullable
              extInfo: string
              // 让分或大小分值 (如果是球员玩法，则表示球员ID)nullable
              spread: string
              // 欧洲盘赔率nullable
              odds: number
              // 香港盘赔率nullable
              hkOdds: number
              // 印尼盘赔率nullable
              indoOdds: number
              // 马来盘赔率nullable
              malayOdds: number
              // 市场排序，用于让球等玩法的排序
              marketSort: number
              // 0:活跃可用，可投注、1：临时锁定，不允许投注、2：不可用，不可见也不可投注nullable
              status: number
              // 赔率生产者nullable
              producerId: number
              // 玩法代码
              playCode: string
              // 行序
              rowSort: number
              // 保存各语系name对应值的map
              nameMap: any
              // 保存各语系extInfo对应值的map
              extInfoMap: any
              // 版本号
              version: number
            }>
            // 排序
            rowSort: number
          }
        }
      }
      // 是否開放投注，0：否，1：是
      betStatus: number
    }
  }
  // 9.赛事赔率信息: 9.3.赛事赔率列表,免登入即可访问
  type REQ = {
    // 赛事id
    matchId: string
    // 赛事类型,eg: TODAY（今日）, EARLY(早盘),PARLAY（串连）, INPLAY(滚球）,ATSTART(即将开始）, sc:xxx 特殊参赛表（专题，如奥运会）,CS(波胆)
    matchType?: string
  }
}
// 9.赛事赔率信息: 9.4.特优赔率列表,免登入即可访问
declare namespace API_MATCH_ODDS_EPS_LIST {
  // 9.赛事赔率信息: 9.4.特优赔率列表,免登入即可访问
  type RES = {
    // No comments found.
    success: boolean
    // No comments found.
    msg: string
    // No comments found.
    code: number
    // No comments found.
    rows: Array<{
      // 所属日期时间戳
      date: string
      // 联赛&赔率notNull
      leagueOdds: Array<{
        // 联赛/赛季notNull
        league: {
          // 联赛/赛季id
          id: string
          // 名称
          name: string
          // 国家Code
          categoryCode: string
          // 国家
          category: string
          // 国家图标,svg的html元素(已进行UrlEncoded)
          categoryIcon: string
          // 联赛简称
          shortName: string
          // 联盟icon
          icon: string
        }
        // 赛事或赛季赔率notNull
        matchOdds: Array<{
          // 赛事信息notNull
          matchInfo: {
            // 赛事或赛季id
            id: string
            // 联赛id
            leagueId: string
            // 联赛名称
            leagueName: string
            // 主队id
            homeId: string
            // 主队名称
            homeName: string
            // 客队id
            awayId: string
            // 客队名称
            awayName: string
            // 赛事或赛季开始时间
            startTime: string | number
            // 赛事或赛季结束时间
            endTime: string | number
            // 赛事状态 0：未开始，1：比赛中，2：已结束，3：延期，4：已取消
            status: number
            // 该赛事之全部可投注玩法类数量
            playCateNum: number
            // 賽季名稱
            name: string
            // 圖片
            img: string
            // 訊息
            msg: string
            // 是否可以参加过关，0：否，1：是
            parlay: number
            // 有无赛事直播 0:无 1:有
            liveVideo: number
            // 是否是中立场，1：是，0：否
            neutral: number
            // 是否有特优赔率，1：是，0：否
            eps: number
            // 赛事的赛制类型,目前仅网球排球需要显示,0:默认值 3:三战两胜 5:五战三胜...
            spt: number
            // 动画映射id
            trackerId: string
            // 小金直播id
            tvId: string
            // 第三方直播id
            streamId: string
            // 游戏类型
            gameType: string
            // 数据源
            source: number
            // 主队图标
            homeIcon: string
            // 主队图标(svg)
            homeIconSvg: string
            // 客队图标
            awayIcon: string
            // 客队图标(svg)
            awayIconSvg: string
            // 是否滚盘中 0：否，1：是
            inplay: number
            // 是否有主播直播 0：否，1：是
            isLive: number
            // 房间号
            roundNo: string
            // 主播头像
            streamerIcon: string
            // 主播名称
            StreamerName: string
            // 封面路径
            frontCoverUrl: string
            // 赛事事件列表,结构同ws推送的消息格式,主要提供给推荐赛事/热门赛事接口获取比分与时间,对应ws事件名称为MATCH_STATUS_CHANGE/MATCH_CLOCK
            eventList: Array<{
              // No comments found.
              eventType: string
            }>
            // No comments found.
            eventType: string
            // 是否为fiba赛事
            isFiba: boolean
            // 是否为欧洲杯赛事
            isEuropeCup: boolean
            // cashout 狀態 0:不可 ,1:可
            cashoutStatus: number
          }
          // 动态市场字典(冠军玩法有效)， key: 对应odds的key, value: {zh:"xxx",en:"cxxewe"}
          dynamicMarkets: any
          // odds map的取key顺序(逗号分隔),ex:HDP,1X2... 表示key先取HDP,再取1X2
          oddsSort: string
          // 赔率 key=>玩法类型code value=>赔率列表
          odds: {
            [key: string]: {
              // 赔率idnullable
              id: string
              // 玩法类名称nullable
              name: string
              // 让分或大小分值nullable
              spread: string
              // 额外信息nullable
              extInfo: string
              // 欧洲盘赔率nullable
              odds: number
              // 香港盘赔率nullable
              hkOdds: number
              // 马来盘赔率
              malayOdds: number
              // 印尼盘赔率
              indoOdds: number
              // 市场排序，用于让球等玩法的排序
              marketSort: number
              // 0:活跃可用，可投注、1：临时锁定，不允许投注、2：不可用，不可见也不可投注nullable
              status: number
              // 赔率生产者nullable
              producerId: number
              // 保存各语系name对应值的map
              nameMap: any
              // 保存各语系extInfo对应值的map
              extInfoMap: any
              // 游戏类型 FT:soccer,BK:Basketball,BS:Baseball,FS:Outright,OP:Other,TN:Tennis,VB:Volleyball,BM:Badminton,TT:table tennis
              gameType: string
              // 玩法分类id
              playCateId: number
              // 玩法分类代码
              playCateCode: string
              // 玩法编码
              playCode: string
              // 賠率分組
              group: string
              // 版本号
              version: number
            }
          }
          // 赔率陣列
          oddsList: Array<{
            // 赔率idnullable
            id: string
            // 玩法类名称nullable
            name: string
            // 让分或大小分值nullable
            spread: string
            // 额外信息nullable
            extInfo: string
            // 欧洲盘赔率nullable
            odds: number
            // 香港盘赔率nullable
            hkOdds: number
            // 马来盘赔率
            malayOdds: number
            // 印尼盘赔率
            indoOdds: number
            // 市场排序，用于让球等玩法的排序
            marketSort: number
            // 0:活跃可用，可投注、1：临时锁定，不允许投注、2：不可用，不可见也不可投注nullable
            status: number
            // 赔率生产者nullable
            producerId: number
            // 保存各语系name对应值的map
            nameMap: any
            // 保存各语系extInfo对应值的map
            extInfoMap: any
            // 游戏类型 FT:soccer,BK:Basketball,BS:Baseball,FS:Outright,OP:Other,TN:Tennis,VB:Volleyball,BM:Badminton,TT:table tennis
            gameType: string
            // 玩法分类id
            playCateId: number
            // 玩法分类代码
            playCateCode: string
            // 玩法编码
            playCode: string
            // 賠率分組
            group: string
            // 版本号
            version: number
          }>
          // 赛事可玩的快捷玩法列表
          quickPlayCateList: Array<{
            // 游戏类型,如： FT篮球，BK篮球
            gameType: string
            // 代码
            code: string
            // 名称，如：让球/大小盘
            name: string
            // menu 排序
            sort: number
          }>
          // 大厅玩法对应名称
          playCateNameMap: any
          // 玩法实际名称(注单显示用)
          betPlayCateNameMap: any
          // dynamic玩法排序 (冠軍用)
          dynamicSort: string
          // 新版篮球末位比分自己投注的数量
          bkEndCarkOFLCount: number
          // 賠率的數量
          oddsNumMap: any
        }>
        // 排序
        sort: number
        // 是否展开，0：否，1：是
        unfold: number
        // 玩法赔率排序,同时代表该菜单下总共有的全部玩法
        oddsSort: string
        // 玩法对应名称
        playCateNameMap: any
      }>
    }>
    // 玩法对应名称
    playCateNameMap: any
    // No comments found.
    total: number
  }
  // 9.赛事赔率信息: 9.4.特优赔率列表,免登入即可访问
  type REQ = {
    // 运动类型
    gameType: string
    // 今日00:00:00时间（时间戳）
    startTime: string | number
    // sc:xxx 特殊参赛表（专题，如奥运会）
    matchType?: string
  }
}
// 9.赛事赔率信息: 9.5.快捷菜单赔率列表,免登入即可访问
declare namespace API_MATCH_ODDS_QUICK_LIST {
  // 9.赛事赔率信息: 9.5.快捷菜单赔率列表,免登入即可访问
  type RES = {
    // No comments found.
    success: boolean
    // No comments found.
    msg: string
    // No comments found.
    code: number
    // No comments found.
    t: {
      // 快捷玩法赔率 key=>快捷类型code value=>玩法赔率物件,结构与赔率详情页面相同
      quickOdds: {
        [key: string]: {
          // 赔率idnullable
          id: string
          // 玩法名称（如果是球员玩法，则名称代码球员名称）nullable
          name: string
          // 额外信息. （如果是球员玩法，则H表示主队,C表示客队）nullable
          extInfo: string
          // 让分或大小分值 (如果是球员玩法，则表示球员ID)nullable
          spread: string
          // 欧洲盘赔率nullable
          odds: number
          // 香港盘赔率nullable
          hkOdds: number
          // 印尼盘赔率nullable
          indoOdds: number
          // 马来盘赔率nullable
          malayOdds: number
          // 市场排序，用于让球等玩法的排序
          marketSort: number
          // 0:活跃可用，可投注、1：临时锁定，不允许投注、2：不可用，不可见也不可投注nullable
          status: number
          // 赔率生产者nullable
          producerId: number
          // 玩法代码
          playCode: string
          // 行序
          rowSort: number
          // 保存各语系name对应值的map
          nameMap: any
          // 保存各语系extInfo对应值的map
          extInfoMap: any
          // 版本号
          version: number
        }
      }
      // 玩法赔率排序key => 快捷类型codevalue => oddsCode的sort
      oddsSort: any
    }
  }
  // 9.赛事赔率信息: 9.5.快捷菜单赔率列表,免登入即可访问
  type REQ = {
    // 赛事id
    matchId: string
    // 赛事类型,eg: TODAY（今日）, EARLY(早盘),PARLAY（串连）, INPLAY(滚球）,ATSTART(即将开始）, sc:xxx 特殊参赛表（专题，如奥运会）,CS(波胆)
    matchType?: string
  }
}
// 9.赛事赔率信息: 9.6.反波胆单赔率列表,免登入即可访问
declare namespace API_MATCH_ODDS_QUICK_LCS_LIST {
  // 9.赛事赔率信息: 9.6.反波胆单赔率列表,免登入即可访问
  type RES = {
    // No comments found.
    success: boolean
    // No comments found.
    msg: string
    // No comments found.
    code: number
    // No comments found.
    t: {
      // 快捷玩法赔率 key=>快捷类型code value=>玩法赔率物件,结构与赔率详情页面相同
      quickOdds: {
        [key: string]: {
          // 赔率idnullable
          id: string
          // 玩法名称（如果是球员玩法，则名称代码球员名称）nullable
          name: string
          // 额外信息. （如果是球员玩法，则H表示主队,C表示客队）nullable
          extInfo: string
          // 让分或大小分值 (如果是球员玩法，则表示球员ID)nullable
          spread: string
          // 欧洲盘赔率nullable
          odds: number
          // 香港盘赔率nullable
          hkOdds: number
          // 印尼盘赔率nullable
          indoOdds: number
          // 马来盘赔率nullable
          malayOdds: number
          // 市场排序，用于让球等玩法的排序
          marketSort: number
          // 0:活跃可用，可投注、1：临时锁定，不允许投注、2：不可用，不可见也不可投注nullable
          status: number
          // 赔率生产者nullable
          producerId: number
          // 玩法代码
          playCode: string
          // 行序
          rowSort: number
          // 保存各语系name对应值的map
          nameMap: any
          // 保存各语系extInfo对应值的map
          extInfoMap: any
          // 版本号
          version: number
        }
      }
      // 玩法赔率排序key => 快捷类型codevalue => oddsCode的sort
      oddsSort: any
    }
  }
  // 9.赛事赔率信息: 9.6.反波胆单赔率列表,免登入即可访问
  type REQ = {
    // 赛事id
    matchId: string
    // 赛事类型,eg: TODAY（今日）, EARLY(早盘),PARLAY（串连）, INPLAY(滚球）,ATSTART(即将开始）, sc:xxx 特殊参赛表（专题，如奥运会）,CS(波胆)
    matchType?: string
  }
}
// 9.赛事赔率信息: 9.7.查询赛事根据分页
declare namespace API_MATCH_ODDS_QUERYMATCHBYPAGE {
  // 9.赛事赔率信息: 9.7.查询赛事根据分页
  type RES = {
    // No comments found.
    success: boolean
    // No comments found.
    msg: string
    // No comments found.
    code: number
    // No comments found.
    rows: Array<{
      // 体育项目notNull
      sport: {
        // code,FT:足球，BK:篮球notNull
        code: string
        // 名称,如：足球，篮球notNull
        name: string
      }
      // 联赛&赔率notNull
      leagueOdds: Array<{
        // 联赛/赛季notNull
        league: {
          // 联赛/赛季id
          id: string
          // 名称
          name: string
          // 国家Code
          categoryCode: string
          // 国家
          category: string
          // 国家图标,svg的html元素(已进行UrlEncoded)
          categoryIcon: string
          // 联赛简称
          shortName: string
          // 联盟icon
          icon: string
        }
        // 赛事或赛季赔率notNull
        matchOdds: Array<{
          // 赛事信息notNull
          matchInfo: {
            // 赛事或赛季id
            id: string
            // 联赛id
            leagueId: string
            // 联赛名称
            leagueName: string
            // 主队id
            homeId: string
            // 主队名称
            homeName: string
            // 客队id
            awayId: string
            // 客队名称
            awayName: string
            // 赛事或赛季开始时间
            startTime: string | number
            // 赛事或赛季结束时间
            endTime: string | number
            // 赛事状态 0：未开始，1：比赛中，2：已结束，3：延期，4：已取消
            status: number
            // 该赛事之全部可投注玩法类数量
            playCateNum: number
            // 賽季名稱
            name: string
            // 圖片
            img: string
            // 訊息
            msg: string
            // 是否可以参加过关，0：否，1：是
            parlay: number
            // 有无赛事直播 0:无 1:有
            liveVideo: number
            // 是否是中立场，1：是，0：否
            neutral: number
            // 是否有特优赔率，1：是，0：否
            eps: number
            // 赛事的赛制类型,目前仅网球排球需要显示,0:默认值 3:三战两胜 5:五战三胜...
            spt: number
            // 动画映射id
            trackerId: string
            // 小金直播id
            tvId: string
            // 第三方直播id
            streamId: string
            // 游戏类型
            gameType: string
            // 数据源
            source: number
            // 主队图标
            homeIcon: string
            // 主队图标(svg)
            homeIconSvg: string
            // 客队图标
            awayIcon: string
            // 客队图标(svg)
            awayIconSvg: string
            // 是否滚盘中 0：否，1：是
            inplay: number
            // 是否有主播直播 0：否，1：是
            isLive: number
            // 房间号
            roundNo: string
            // 主播头像
            streamerIcon: string
            // 主播名称
            StreamerName: string
            // 封面路径
            frontCoverUrl: string
            // 赛事事件列表,结构同ws推送的消息格式,主要提供给推荐赛事/热门赛事接口获取比分与时间,对应ws事件名称为MATCH_STATUS_CHANGE/MATCH_CLOCK
            eventList: Array<{
              // No comments found.
              eventType: string
            }>
            // No comments found.
            eventType: string
            // 是否为fiba赛事
            isFiba: boolean
            // 是否为欧洲杯赛事
            isEuropeCup: boolean
            // cashout 狀態 0:不可 ,1:可
            cashoutStatus: number
          }
          // 动态市场字典(冠军玩法有效)， key: 对应odds的key, value: {zh:"xxx",en:"cxxewe"}
          dynamicMarkets: any
          // odds map的取key顺序(逗号分隔),ex:HDP,1X2... 表示key先取HDP,再取1X2
          oddsSort: string
          // 赔率 key=>玩法类型code value=>赔率列表
          odds: {
            [key: string]: {
              // 赔率idnullable
              id: string
              // 玩法类名称nullable
              name: string
              // 让分或大小分值nullable
              spread: string
              // 额外信息nullable
              extInfo: string
              // 欧洲盘赔率nullable
              odds: number
              // 香港盘赔率nullable
              hkOdds: number
              // 马来盘赔率
              malayOdds: number
              // 印尼盘赔率
              indoOdds: number
              // 市场排序，用于让球等玩法的排序
              marketSort: number
              // 0:活跃可用，可投注、1：临时锁定，不允许投注、2：不可用，不可见也不可投注nullable
              status: number
              // 赔率生产者nullable
              producerId: number
              // 保存各语系name对应值的map
              nameMap: any
              // 保存各语系extInfo对应值的map
              extInfoMap: any
              // 游戏类型 FT:soccer,BK:Basketball,BS:Baseball,FS:Outright,OP:Other,TN:Tennis,VB:Volleyball,BM:Badminton,TT:table tennis
              gameType: string
              // 玩法分类id
              playCateId: number
              // 玩法分类代码
              playCateCode: string
              // 玩法编码
              playCode: string
              // 賠率分組
              group: string
              // 版本号
              version: number
            }
          }
          // 赔率陣列
          oddsList: Array<{
            // 赔率idnullable
            id: string
            // 玩法类名称nullable
            name: string
            // 让分或大小分值nullable
            spread: string
            // 额外信息nullable
            extInfo: string
            // 欧洲盘赔率nullable
            odds: number
            // 香港盘赔率nullable
            hkOdds: number
            // 马来盘赔率
            malayOdds: number
            // 印尼盘赔率
            indoOdds: number
            // 市场排序，用于让球等玩法的排序
            marketSort: number
            // 0:活跃可用，可投注、1：临时锁定，不允许投注、2：不可用，不可见也不可投注nullable
            status: number
            // 赔率生产者nullable
            producerId: number
            // 保存各语系name对应值的map
            nameMap: any
            // 保存各语系extInfo对应值的map
            extInfoMap: any
            // 游戏类型 FT:soccer,BK:Basketball,BS:Baseball,FS:Outright,OP:Other,TN:Tennis,VB:Volleyball,BM:Badminton,TT:table tennis
            gameType: string
            // 玩法分类id
            playCateId: number
            // 玩法分类代码
            playCateCode: string
            // 玩法编码
            playCode: string
            // 賠率分組
            group: string
            // 版本号
            version: number
          }>
          // 赛事可玩的快捷玩法列表
          quickPlayCateList: Array<{
            // 游戏类型,如： FT篮球，BK篮球
            gameType: string
            // 代码
            code: string
            // 名称，如：让球/大小盘
            name: string
            // menu 排序
            sort: number
          }>
          // 大厅玩法对应名称
          playCateNameMap: any
          // 玩法实际名称(注单显示用)
          betPlayCateNameMap: any
          // dynamic玩法排序 (冠軍用)
          dynamicSort: string
          // 新版篮球末位比分自己投注的数量
          bkEndCarkOFLCount: number
          // 賠率的數量
          oddsNumMap: any
        }>
        // 排序
        sort: number
        // 是否展开，0：否，1：是
        unfold: number
        // 玩法赔率排序,同时代表该菜单下总共有的全部玩法
        oddsSort: string
        // 玩法对应名称
        playCateNameMap: any
      }>
      // 加时联赛&赔率
      otLeagueOdds: Array<{
        // 联赛/赛季notNull
        league: {
          // 联赛/赛季id
          id: string
          // 名称
          name: string
          // 国家Code
          categoryCode: string
          // 国家
          category: string
          // 国家图标,svg的html元素(已进行UrlEncoded)
          categoryIcon: string
          // 联赛简称
          shortName: string
          // 联盟icon
          icon: string
        }
        // 赛事或赛季赔率notNull
        matchOdds: Array<{
          // 赛事信息notNull
          matchInfo: {
            // 赛事或赛季id
            id: string
            // 联赛id
            leagueId: string
            // 联赛名称
            leagueName: string
            // 主队id
            homeId: string
            // 主队名称
            homeName: string
            // 客队id
            awayId: string
            // 客队名称
            awayName: string
            // 赛事或赛季开始时间
            startTime: string | number
            // 赛事或赛季结束时间
            endTime: string | number
            // 赛事状态 0：未开始，1：比赛中，2：已结束，3：延期，4：已取消
            status: number
            // 该赛事之全部可投注玩法类数量
            playCateNum: number
            // 賽季名稱
            name: string
            // 圖片
            img: string
            // 訊息
            msg: string
            // 是否可以参加过关，0：否，1：是
            parlay: number
            // 有无赛事直播 0:无 1:有
            liveVideo: number
            // 是否是中立场，1：是，0：否
            neutral: number
            // 是否有特优赔率，1：是，0：否
            eps: number
            // 赛事的赛制类型,目前仅网球排球需要显示,0:默认值 3:三战两胜 5:五战三胜...
            spt: number
            // 动画映射id
            trackerId: string
            // 小金直播id
            tvId: string
            // 第三方直播id
            streamId: string
            // 游戏类型
            gameType: string
            // 数据源
            source: number
            // 主队图标
            homeIcon: string
            // 主队图标(svg)
            homeIconSvg: string
            // 客队图标
            awayIcon: string
            // 客队图标(svg)
            awayIconSvg: string
            // 是否滚盘中 0：否，1：是
            inplay: number
            // 是否有主播直播 0：否，1：是
            isLive: number
            // 房间号
            roundNo: string
            // 主播头像
            streamerIcon: string
            // 主播名称
            StreamerName: string
            // 封面路径
            frontCoverUrl: string
            // 赛事事件列表,结构同ws推送的消息格式,主要提供给推荐赛事/热门赛事接口获取比分与时间,对应ws事件名称为MATCH_STATUS_CHANGE/MATCH_CLOCK
            eventList: Array<{
              // No comments found.
              eventType: string
            }>
            // No comments found.
            eventType: string
            // 是否为fiba赛事
            isFiba: boolean
            // 是否为欧洲杯赛事
            isEuropeCup: boolean
            // cashout 狀態 0:不可 ,1:可
            cashoutStatus: number
          }
          // 动态市场字典(冠军玩法有效)， key: 对应odds的key, value: {zh:"xxx",en:"cxxewe"}
          dynamicMarkets: any
          // odds map的取key顺序(逗号分隔),ex:HDP,1X2... 表示key先取HDP,再取1X2
          oddsSort: string
          // 赔率 key=>玩法类型code value=>赔率列表
          odds: {
            [key: string]: {
              // 赔率idnullable
              id: string
              // 玩法类名称nullable
              name: string
              // 让分或大小分值nullable
              spread: string
              // 额外信息nullable
              extInfo: string
              // 欧洲盘赔率nullable
              odds: number
              // 香港盘赔率nullable
              hkOdds: number
              // 马来盘赔率
              malayOdds: number
              // 印尼盘赔率
              indoOdds: number
              // 市场排序，用于让球等玩法的排序
              marketSort: number
              // 0:活跃可用，可投注、1：临时锁定，不允许投注、2：不可用，不可见也不可投注nullable
              status: number
              // 赔率生产者nullable
              producerId: number
              // 保存各语系name对应值的map
              nameMap: any
              // 保存各语系extInfo对应值的map
              extInfoMap: any
              // 游戏类型 FT:soccer,BK:Basketball,BS:Baseball,FS:Outright,OP:Other,TN:Tennis,VB:Volleyball,BM:Badminton,TT:table tennis
              gameType: string
              // 玩法分类id
              playCateId: number
              // 玩法分类代码
              playCateCode: string
              // 玩法编码
              playCode: string
              // 賠率分組
              group: string
              // 版本号
              version: number
            }
          }
          // 赔率陣列
          oddsList: Array<{
            // 赔率idnullable
            id: string
            // 玩法类名称nullable
            name: string
            // 让分或大小分值nullable
            spread: string
            // 额外信息nullable
            extInfo: string
            // 欧洲盘赔率nullable
            odds: number
            // 香港盘赔率nullable
            hkOdds: number
            // 马来盘赔率
            malayOdds: number
            // 印尼盘赔率
            indoOdds: number
            // 市场排序，用于让球等玩法的排序
            marketSort: number
            // 0:活跃可用，可投注、1：临时锁定，不允许投注、2：不可用，不可见也不可投注nullable
            status: number
            // 赔率生产者nullable
            producerId: number
            // 保存各语系name对应值的map
            nameMap: any
            // 保存各语系extInfo对应值的map
            extInfoMap: any
            // 游戏类型 FT:soccer,BK:Basketball,BS:Baseball,FS:Outright,OP:Other,TN:Tennis,VB:Volleyball,BM:Badminton,TT:table tennis
            gameType: string
            // 玩法分类id
            playCateId: number
            // 玩法分类代码
            playCateCode: string
            // 玩法编码
            playCode: string
            // 賠率分組
            group: string
            // 版本号
            version: number
          }>
          // 赛事可玩的快捷玩法列表
          quickPlayCateList: Array<{
            // 游戏类型,如： FT篮球，BK篮球
            gameType: string
            // 代码
            code: string
            // 名称，如：让球/大小盘
            name: string
            // menu 排序
            sort: number
          }>
          // 大厅玩法对应名称
          playCateNameMap: any
          // 玩法实际名称(注单显示用)
          betPlayCateNameMap: any
          // dynamic玩法排序 (冠軍用)
          dynamicSort: string
          // 新版篮球末位比分自己投注的数量
          bkEndCarkOFLCount: number
          // 賠率的數量
          oddsNumMap: any
        }>
        // 排序
        sort: number
        // 是否展开，0：否，1：是
        unfold: number
        // 玩法赔率排序,同时代表该菜单下总共有的全部玩法
        oddsSort: string
        // 玩法对应名称
        playCateNameMap: any
      }>
      // 总页数
      totalPage: number
    }>
    // 总页数
    totalPage: number
    // No comments found.
    total: number
  }
  // 9.赛事赔率信息: 9.7.查询赛事根据分页
  type REQ = {
    // 当前页
    page?: number
    // 每页条数
    pageSize?: number
    // 开始时间（时间戳）
    startTime?: string | number
    // 结束时间（时间戳）
    endTime?: string | number
    // 赛事类型,eg: TODAY（今日）, EARLY(早盘),PARLAY（串连）, INPLAY(滚球）,ATSTART(即将开始）, sc:xxx 特殊参赛表（专题，如奥运会）,CS(波胆)
    matchType: string
    // 是否全球种资料都查询 0:根据指定的球种查询 1:全部查询 预设为1
    isAllGameType?: number
    // 查询球类明细
    queryDetailList?: Array<{
      // 游戏类型 (FT:足球，BK:篮球,TN:网球, VB:网球,BM：羽球)
      gameType: string
      // 玩法分类菜单代码 (可不带, 不带的话就查预设玩法)
      playCateMenuCode?: string
      // 联赛或赛季id列表
      leagueIdList?: any[]
      // 来源编号(不需填写)
      sourceId?: string
    }>
    // 来源编号(不需填写)
    sourceId?: string
    // 是否为手机
    isMobile?: number
    // 排序类型 0：按联赛id，1：按赛事时间
    orderType?: number
  }
}
// 9.赛事赔率信息: 9.8.热门推荐盘口备注: 指适用足球，篮球；优先展示滚球分类下足球篮球球类赛事的排序各自前2的赛事。滚球下不足四场赛事 展示即将开始的赛事 即将赛事不足填充四条 展示今日赛事
declare namespace API_MATCH_ODDS_MOBILE_HOT_HANDICAP_HANDICAPTYPE_LIST {
  // 9.赛事赔率信息: 9.8.热门推荐盘口备注: 指适用足球，篮球；优先展示滚球分类下足球篮球球类赛事的排序各自前2的赛事。滚球下不足四场赛事 展示即将开始的赛事 即将赛事不足填充四条 展示今日赛事
  type RES = {
    // No comments found.
    success: boolean
    // No comments found.
    msg: string
    // No comments found.
    code: number
    // No comments found.
    rows: Array<{
      // 联赛/赛季
      league: {
        // 联赛/赛季id
        id: string
        // 名称
        name: string
        // 国家Code
        categoryCode: string
        // 国家
        category: string
        // 国家图标,svg的html元素(已进行UrlEncoded)
        categoryIcon: string
        // 联赛简称
        shortName: string
        // 联盟icon
        icon: string
      }
      // 赛事信息
      matchInfos: Array<{
        // 赛事或赛季id
        id: string
        // 联赛id
        leagueId: string
        // 联赛名称
        leagueName: string
        // 主队id
        homeId: string
        // 主队名称
        homeName: string
        // 客队id
        awayId: string
        // 客队名称
        awayName: string
        // 赛事或赛季开始时间
        startTime: string | number
        // 赛事或赛季结束时间
        endTime: string | number
        // 赛事状态 0：未开始，1：比赛中，2：已结束，3：延期，4：已取消
        status: number
        // 该赛事之全部可投注玩法类数量
        playCateNum: number
        // 賽季名稱
        name: string
        // 圖片
        img: string
        // 訊息
        msg: string
        // 是否可以参加过关，0：否，1：是
        parlay: number
        // 有无赛事直播 0:无 1:有
        liveVideo: number
        // 是否是中立场，1：是，0：否
        neutral: number
        // 是否有特优赔率，1：是，0：否
        eps: number
        // 赛事的赛制类型,目前仅网球排球需要显示,0:默认值 3:三战两胜 5:五战三胜...
        spt: number
        // 动画映射id
        trackerId: string
        // 小金直播id
        tvId: string
        // 第三方直播id
        streamId: string
        // 游戏类型
        gameType: string
        // 数据源
        source: number
        // 主队图标
        homeIcon: string
        // 主队图标(svg)
        homeIconSvg: string
        // 客队图标
        awayIcon: string
        // 客队图标(svg)
        awayIconSvg: string
        // 是否滚盘中 0：否，1：是
        inplay: number
        // 是否有主播直播 0：否，1：是
        isLive: number
        // 房间号
        roundNo: string
        // 主播头像
        streamerIcon: string
        // 主播名称
        StreamerName: string
        // 封面路径
        frontCoverUrl: string
        // 赛事事件列表,结构同ws推送的消息格式,主要提供给推荐赛事/热门赛事接口获取比分与时间,对应ws事件名称为MATCH_STATUS_CHANGE/MATCH_CLOCK
        eventList: Array<{
          // No comments found.
          eventType: string
        }>
        // No comments found.
        eventType: string
        // 是否为fiba赛事
        isFiba: boolean
        // 是否为欧洲杯赛事
        isEuropeCup: boolean
        // cashout 狀態 0:不可 ,1:可
        cashoutStatus: number
      }>
      // 玩法赔率排序,同时代表该菜单下总共有的全部玩法
      oddsSort: string
      // 玩法对应名称
      playCateNameMap: any
      // 体育名称, 如:篮球, 足球
      sportName: string
    }>
    // 体育名称, 如:篮球, 足球
    sportName: string
    // No comments found.
    total: number
  }
  // 9.赛事赔率信息: 9.8.热门推荐盘口备注: 指适用足球，篮球；优先展示滚球分类下足球篮球球类赛事的排序各自前2的赛事。滚球下不足四场赛事 展示即将开始的赛事 即将赛事不足填充四条 展示今日赛事
  type REQ = {
    // 盘都类型, 1:独赢 2：让球 3:大小
    handicapType: number
    // No comments found.
    platformId?: number
  }
}
// 9.赛事赔率信息: 9.9.移动端所有滚球列表
declare namespace API_MATCH_ODDS_MOBILE_INPLAY_ALL {
  // 9.赛事赔率信息: 9.9.移动端所有滚球列表
  type RES = {
    // No comments found.
    success: boolean
    // No comments found.
    msg: string
    // No comments found.
    code: number
    // No comments found.
    rows: Array<{
      // 体育项目notNull
      sport: {
        // code,FT:足球，BK:篮球notNull
        code: string
        // 名称,如：足球，篮球notNull
        name: string
      }
      // 联赛&赔率notNull
      leagueOdds: Array<{
        // 联赛/赛季notNull
        league: {
          // 联赛/赛季id
          id: string
          // 名称
          name: string
          // 国家Code
          categoryCode: string
          // 国家
          category: string
          // 国家图标,svg的html元素(已进行UrlEncoded)
          categoryIcon: string
          // 联赛简称
          shortName: string
          // 联盟icon
          icon: string
        }
        // 赛事或赛季赔率notNull
        matchOdds: Array<{
          // 赛事信息notNull
          matchInfo: {
            // 赛事或赛季id
            id: string
            // 联赛id
            leagueId: string
            // 联赛名称
            leagueName: string
            // 主队id
            homeId: string
            // 主队名称
            homeName: string
            // 客队id
            awayId: string
            // 客队名称
            awayName: string
            // 赛事或赛季开始时间
            startTime: string | number
            // 赛事或赛季结束时间
            endTime: string | number
            // 赛事状态 0：未开始，1：比赛中，2：已结束，3：延期，4：已取消
            status: number
            // 该赛事之全部可投注玩法类数量
            playCateNum: number
            // 賽季名稱
            name: string
            // 圖片
            img: string
            // 訊息
            msg: string
            // 是否可以参加过关，0：否，1：是
            parlay: number
            // 有无赛事直播 0:无 1:有
            liveVideo: number
            // 是否是中立场，1：是，0：否
            neutral: number
            // 是否有特优赔率，1：是，0：否
            eps: number
            // 赛事的赛制类型,目前仅网球排球需要显示,0:默认值 3:三战两胜 5:五战三胜...
            spt: number
            // 动画映射id
            trackerId: string
            // 小金直播id
            tvId: string
            // 第三方直播id
            streamId: string
            // 游戏类型
            gameType: string
            // 数据源
            source: number
            // 主队图标
            homeIcon: string
            // 主队图标(svg)
            homeIconSvg: string
            // 客队图标
            awayIcon: string
            // 客队图标(svg)
            awayIconSvg: string
            // 是否滚盘中 0：否，1：是
            inplay: number
            // 是否有主播直播 0：否，1：是
            isLive: number
            // 房间号
            roundNo: string
            // 主播头像
            streamerIcon: string
            // 主播名称
            StreamerName: string
            // 封面路径
            frontCoverUrl: string
            // 赛事事件列表,结构同ws推送的消息格式,主要提供给推荐赛事/热门赛事接口获取比分与时间,对应ws事件名称为MATCH_STATUS_CHANGE/MATCH_CLOCK
            eventList: Array<{
              // No comments found.
              eventType: string
            }>
            // No comments found.
            eventType: string
            // 是否为fiba赛事
            isFiba: boolean
            // 是否为欧洲杯赛事
            isEuropeCup: boolean
            // cashout 狀態 0:不可 ,1:可
            cashoutStatus: number
          }
          // 动态市场字典(冠军玩法有效)， key: 对应odds的key, value: {zh:"xxx",en:"cxxewe"}
          dynamicMarkets: any
          // odds map的取key顺序(逗号分隔),ex:HDP,1X2... 表示key先取HDP,再取1X2
          oddsSort: string
          // 赔率 key=>玩法类型code value=>赔率列表
          odds: {
            [key: string]: {
              // 赔率idnullable
              id: string
              // 玩法类名称nullable
              name: string
              // 让分或大小分值nullable
              spread: string
              // 额外信息nullable
              extInfo: string
              // 欧洲盘赔率nullable
              odds: number
              // 香港盘赔率nullable
              hkOdds: number
              // 马来盘赔率
              malayOdds: number
              // 印尼盘赔率
              indoOdds: number
              // 市场排序，用于让球等玩法的排序
              marketSort: number
              // 0:活跃可用，可投注、1：临时锁定，不允许投注、2：不可用，不可见也不可投注nullable
              status: number
              // 赔率生产者nullable
              producerId: number
              // 保存各语系name对应值的map
              nameMap: any
              // 保存各语系extInfo对应值的map
              extInfoMap: any
              // 游戏类型 FT:soccer,BK:Basketball,BS:Baseball,FS:Outright,OP:Other,TN:Tennis,VB:Volleyball,BM:Badminton,TT:table tennis
              gameType: string
              // 玩法分类id
              playCateId: number
              // 玩法分类代码
              playCateCode: string
              // 玩法编码
              playCode: string
              // 賠率分組
              group: string
              // 版本号
              version: number
            }
          }
          // 赔率陣列
          oddsList: Array<{
            // 赔率idnullable
            id: string
            // 玩法类名称nullable
            name: string
            // 让分或大小分值nullable
            spread: string
            // 额外信息nullable
            extInfo: string
            // 欧洲盘赔率nullable
            odds: number
            // 香港盘赔率nullable
            hkOdds: number
            // 马来盘赔率
            malayOdds: number
            // 印尼盘赔率
            indoOdds: number
            // 市场排序，用于让球等玩法的排序
            marketSort: number
            // 0:活跃可用，可投注、1：临时锁定，不允许投注、2：不可用，不可见也不可投注nullable
            status: number
            // 赔率生产者nullable
            producerId: number
            // 保存各语系name对应值的map
            nameMap: any
            // 保存各语系extInfo对应值的map
            extInfoMap: any
            // 游戏类型 FT:soccer,BK:Basketball,BS:Baseball,FS:Outright,OP:Other,TN:Tennis,VB:Volleyball,BM:Badminton,TT:table tennis
            gameType: string
            // 玩法分类id
            playCateId: number
            // 玩法分类代码
            playCateCode: string
            // 玩法编码
            playCode: string
            // 賠率分組
            group: string
            // 版本号
            version: number
          }>
          // 赛事可玩的快捷玩法列表
          quickPlayCateList: Array<{
            // 游戏类型,如： FT篮球，BK篮球
            gameType: string
            // 代码
            code: string
            // 名称，如：让球/大小盘
            name: string
            // menu 排序
            sort: number
          }>
          // 大厅玩法对应名称
          playCateNameMap: any
          // 玩法实际名称(注单显示用)
          betPlayCateNameMap: any
          // dynamic玩法排序 (冠軍用)
          dynamicSort: string
          // 新版篮球末位比分自己投注的数量
          bkEndCarkOFLCount: number
          // 賠率的數量
          oddsNumMap: any
        }>
        // 排序
        sort: number
        // 是否展开，0：否，1：是
        unfold: number
        // 玩法赔率排序,同时代表该菜单下总共有的全部玩法
        oddsSort: string
        // 玩法对应名称
        playCateNameMap: any
      }>
      // 加时联赛&赔率
      otLeagueOdds: Array<{
        // 联赛/赛季notNull
        league: {
          // 联赛/赛季id
          id: string
          // 名称
          name: string
          // 国家Code
          categoryCode: string
          // 国家
          category: string
          // 国家图标,svg的html元素(已进行UrlEncoded)
          categoryIcon: string
          // 联赛简称
          shortName: string
          // 联盟icon
          icon: string
        }
        // 赛事或赛季赔率notNull
        matchOdds: Array<{
          // 赛事信息notNull
          matchInfo: {
            // 赛事或赛季id
            id: string
            // 联赛id
            leagueId: string
            // 联赛名称
            leagueName: string
            // 主队id
            homeId: string
            // 主队名称
            homeName: string
            // 客队id
            awayId: string
            // 客队名称
            awayName: string
            // 赛事或赛季开始时间
            startTime: string | number
            // 赛事或赛季结束时间
            endTime: string | number
            // 赛事状态 0：未开始，1：比赛中，2：已结束，3：延期，4：已取消
            status: number
            // 该赛事之全部可投注玩法类数量
            playCateNum: number
            // 賽季名稱
            name: string
            // 圖片
            img: string
            // 訊息
            msg: string
            // 是否可以参加过关，0：否，1：是
            parlay: number
            // 有无赛事直播 0:无 1:有
            liveVideo: number
            // 是否是中立场，1：是，0：否
            neutral: number
            // 是否有特优赔率，1：是，0：否
            eps: number
            // 赛事的赛制类型,目前仅网球排球需要显示,0:默认值 3:三战两胜 5:五战三胜...
            spt: number
            // 动画映射id
            trackerId: string
            // 小金直播id
            tvId: string
            // 第三方直播id
            streamId: string
            // 游戏类型
            gameType: string
            // 数据源
            source: number
            // 主队图标
            homeIcon: string
            // 主队图标(svg)
            homeIconSvg: string
            // 客队图标
            awayIcon: string
            // 客队图标(svg)
            awayIconSvg: string
            // 是否滚盘中 0：否，1：是
            inplay: number
            // 是否有主播直播 0：否，1：是
            isLive: number
            // 房间号
            roundNo: string
            // 主播头像
            streamerIcon: string
            // 主播名称
            StreamerName: string
            // 封面路径
            frontCoverUrl: string
            // 赛事事件列表,结构同ws推送的消息格式,主要提供给推荐赛事/热门赛事接口获取比分与时间,对应ws事件名称为MATCH_STATUS_CHANGE/MATCH_CLOCK
            eventList: Array<{
              // No comments found.
              eventType: string
            }>
            // No comments found.
            eventType: string
            // 是否为fiba赛事
            isFiba: boolean
            // 是否为欧洲杯赛事
            isEuropeCup: boolean
            // cashout 狀態 0:不可 ,1:可
            cashoutStatus: number
          }
          // 动态市场字典(冠军玩法有效)， key: 对应odds的key, value: {zh:"xxx",en:"cxxewe"}
          dynamicMarkets: any
          // odds map的取key顺序(逗号分隔),ex:HDP,1X2... 表示key先取HDP,再取1X2
          oddsSort: string
          // 赔率 key=>玩法类型code value=>赔率列表
          odds: {
            [key: string]: {
              // 赔率idnullable
              id: string
              // 玩法类名称nullable
              name: string
              // 让分或大小分值nullable
              spread: string
              // 额外信息nullable
              extInfo: string
              // 欧洲盘赔率nullable
              odds: number
              // 香港盘赔率nullable
              hkOdds: number
              // 马来盘赔率
              malayOdds: number
              // 印尼盘赔率
              indoOdds: number
              // 市场排序，用于让球等玩法的排序
              marketSort: number
              // 0:活跃可用，可投注、1：临时锁定，不允许投注、2：不可用，不可见也不可投注nullable
              status: number
              // 赔率生产者nullable
              producerId: number
              // 保存各语系name对应值的map
              nameMap: any
              // 保存各语系extInfo对应值的map
              extInfoMap: any
              // 游戏类型 FT:soccer,BK:Basketball,BS:Baseball,FS:Outright,OP:Other,TN:Tennis,VB:Volleyball,BM:Badminton,TT:table tennis
              gameType: string
              // 玩法分类id
              playCateId: number
              // 玩法分类代码
              playCateCode: string
              // 玩法编码
              playCode: string
              // 賠率分組
              group: string
              // 版本号
              version: number
            }
          }
          // 赔率陣列
          oddsList: Array<{
            // 赔率idnullable
            id: string
            // 玩法类名称nullable
            name: string
            // 让分或大小分值nullable
            spread: string
            // 额外信息nullable
            extInfo: string
            // 欧洲盘赔率nullable
            odds: number
            // 香港盘赔率nullable
            hkOdds: number
            // 马来盘赔率
            malayOdds: number
            // 印尼盘赔率
            indoOdds: number
            // 市场排序，用于让球等玩法的排序
            marketSort: number
            // 0:活跃可用，可投注、1：临时锁定，不允许投注、2：不可用，不可见也不可投注nullable
            status: number
            // 赔率生产者nullable
            producerId: number
            // 保存各语系name对应值的map
            nameMap: any
            // 保存各语系extInfo对应值的map
            extInfoMap: any
            // 游戏类型 FT:soccer,BK:Basketball,BS:Baseball,FS:Outright,OP:Other,TN:Tennis,VB:Volleyball,BM:Badminton,TT:table tennis
            gameType: string
            // 玩法分类id
            playCateId: number
            // 玩法分类代码
            playCateCode: string
            // 玩法编码
            playCode: string
            // 賠率分組
            group: string
            // 版本号
            version: number
          }>
          // 赛事可玩的快捷玩法列表
          quickPlayCateList: Array<{
            // 游戏类型,如： FT篮球，BK篮球
            gameType: string
            // 代码
            code: string
            // 名称，如：让球/大小盘
            name: string
            // menu 排序
            sort: number
          }>
          // 大厅玩法对应名称
          playCateNameMap: any
          // 玩法实际名称(注单显示用)
          betPlayCateNameMap: any
          // dynamic玩法排序 (冠軍用)
          dynamicSort: string
          // 新版篮球末位比分自己投注的数量
          bkEndCarkOFLCount: number
          // 賠率的數量
          oddsNumMap: any
        }>
        // 排序
        sort: number
        // 是否展开，0：否，1：是
        unfold: number
        // 玩法赔率排序,同时代表该菜单下总共有的全部玩法
        oddsSort: string
        // 玩法对应名称
        playCateNameMap: any
      }>
      // 总页数
      totalPage: number
    }>
    // 总页数
    totalPage: number
    // No comments found.
    total: number
  }
  // 9.赛事赔率信息: 9.9.移动端所有滚球列表
  type REQ = {
    // No comments found.
    platformId?: number
  }
}
// 9.赛事赔率信息: 9.10.七日内赛事赔率列表, 生成文档用, 主接口压缩过返回的是String, 无法套用smartDoc, 故新增此接口用来生成doc
declare namespace API_MATCH_ODDS_WEEK_LIST {
  // 9.赛事赔率信息: 9.10.七日内赛事赔率列表, 生成文档用, 主接口压缩过返回的是String, 无法套用smartDoc, 故新增此接口用来生成doc
  type RES = {
    // No comments found.
    success: boolean
    // No comments found.
    msg: string
    // No comments found.
    code: number
    // No comments found.
    t: {
      // 赛事Id&赔率key：赛事idvalue： map k:玩法 v:赔率相關值
      weekOdds: {
        [key: string]: {
          // 玩法赔率
          odds: {
            [key: string]: {
              // 主键
              id: string
              // 赛事或赛季id
              matchId: string
              // 游戏类型
              gameType: string
              // 玩法分类代码
              playCateCode: string
              // 玩法代码
              playCode: string
              // 让分 如：0 / 0.5
              spread: string
              // 赔率（真实使用赔率，可能与原始赔率不同）
              odds: number
              // 香港盘赔率nullable
              hkOdds: number
              // 马来盘赔率
              malayOdds: number
              // 印尼盘赔率
              indoOdds: number
              // 赔率类型 EU：欧洲盘 (只有欧洲盘,其它盘更具欧洲盘数据转换)
              oddsType: string
              // 行序
              rowSort: number
              // 实际锁定状态0:活跃可用，可投注、1：临时锁定，不允许投注、2：不可用，不可见也不可投注
              status: number
              // 额外信息，当玩法是球员玩法时，此处表示主客队，H为主队，C为客队
              extInfo: string
              // 是否串关
              parlay: number
              // 数据生产者
              producerId: number
              // 排序（用于让球等玩法的顺序处理）
              marketSort: number
              // 賠率分組
              group: string
            }
          }
          // 该赛事之全部可投注玩法类数量
          playCateNum: number
        }
      }
    }
  }
}
// 9.赛事赔率信息: 9.11.七日内赛事赔率列表
declare namespace API_MATCH_ODDS_WEEK_LIST_DATETYPE {
  // 9.赛事赔率信息: 9.11.七日内赛事赔率列表
  type RES = {}
  // 9.赛事赔率信息: 9.11.七日内赛事赔率列表
  type REQ = {
    // 日期参数传1、2、3, 1代表24小時內含滚球中的赛事, 2代表24小時以後的早盘赛事,3代表同时包含1与2的赛事
    dateType: number
  }
}
// 10.赛事联赛信息: 10.1.查询赛事列表,免登入即可访问
declare namespace API_MATCH_LEAGUE_LIST {
  // 10.赛事联赛信息: 10.1.查询赛事列表,免登入即可访问
  type RES = {
    // No comments found.
    success: boolean
    // No comments found.
    msg: string
    // No comments found.
    code: number
    // No comments found.
    rows: Array<{
      // 主键
      id: string
      // 游戏类型 (FT:足球，BK:篮球,TN:网球, VB:网球,BM：羽球)
      gameType: string
      // 分类名称notNull
      name: string
      // 分类code
      code: string
      // 图标,svg的html元素(已进行UrlEncoded)
      icon: string
      // 联赛列表notNull
      list: Array<{
        // 联赛id
        id: string
        // 名称
        name: string
        // 赛事数量
        num: number
        // 排序
        sort: number
        // 联盟icon
        icon: string
      }>
      // 赛事/赛季数量notNull
      num: number
      // 排序
      sort: number
    }>
    // 排序
    sort: number
    // No comments found.
    total: number
  }
  // 10.赛事联赛信息: 10.1.查询赛事列表,免登入即可访问
  type REQ = {
    // 游戏类型 (FT:足球，BK:篮球,TN:网球, VB:网球,BM：羽球)
    gameType: string
    // 赛事类型,eg: TODAY（今日）, EARLY(早盘),PARLAY（串连）, INPLAY(滚球）,ATSTART(即将开始）, sc:xxx 特殊参赛表（专题，如奥运会）,CS(波胆)
    matchType: string
    // 国家代码
    categoryCode?: string
    // 玩法分类菜单代码 (可不带, 不带的话就查全部)
    playCateMenuCode?: string
    // matchType为PARLAY时需带此参数,可支持的选项为：INPLAY（滚球），TODAY（今日）,EARLY（早盘)为空则为查询所有，默认30天内赛事
    date?: string
    // 开始时间（时间戳）
    startTime?: string | number
    // 结束时间（时间戳）
    endTime?: string | number
    // 是否为移动版 0: 否，1: 是
    isMobile?: number
  }
}
// 10.赛事联赛信息: 10.2.查询赛事时间区间列表,免登入即可访问
declare namespace API_MATCH_LEAGUE_DATELIST {
  // 10.赛事联赛信息: 10.2.查询赛事时间区间列表,免登入即可访问
  type RES = {
    // No comments found.
    success: boolean
    // No comments found.
    msg: string
    // No comments found.
    code: number
    // No comments found.
    rows: Array<{
      // 特殊代號： 近七日- SEVEN_DAYS, 其他- OTHERS
      code: string
      // 开始日期，如没有特殊代号就为当日日期
      startDate: string
      // 联赛资料
      leagueList: Array<{
        // 主键
        id: string
        // 游戏类型 (FT:足球，BK:篮球,TN:网球, VB:网球,BM：羽球)
        gameType: string
        // 分类名称notNull
        name: string
        // 分类code
        code: string
        // 图标,svg的html元素(已进行UrlEncoded)
        icon: string
        // 联赛列表notNull
        list: Array<{
          // 联赛id
          id: string
          // 名称
          name: string
          // 赛事数量
          num: number
          // 排序
          sort: number
          // 联盟icon
          icon: string
        }>
        // 赛事/赛季数量notNull
        num: number
        // 排序
        sort: number
      }>
    }>
    // 排序
    sort: number
    // No comments found.
    total: number
  }
  // 10.赛事联赛信息: 10.2.查询赛事时间区间列表,免登入即可访问
  type REQ = {
    // 游戏类型 (FT:足球，BK:篮球,TN:网球, VB:网球,BM：羽球)
    gameType: string
    // 赛事类型,eg: TODAY（今日）, EARLY(早盘),PARLAY（串连）, INPLAY(滚球）,ATSTART(即将开始）, sc:xxx 特殊参赛表（专题，如奥运会）,CS(波胆)
    matchType: string
    // 客戶端當天的00:00時間戳，日期返回會以這個當作切日期的標準，不帶的話默認使用美東時間
    userTodayBeginTime?: string
  }
}
// 11.用户资金明细: 11.1.查询用户资金明细, 最大区间8天
declare namespace API_SPORTBILL_QUERY {
  // 11.用户资金明细: 11.1.查询用户资金明细, 最大区间8天
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
      // 用户名
      userName: string
      // 交易金额
      money: number
      // 交易类型资讯
      tranTypeName: string
      // 交易余额
      balance: number
      // 添加时间
      addTime: string
    }>
    // 添加时间
    addTime: string
    // No comments found.
    total: number
  }
  // 11.用户资金明细: 11.1.查询用户资金明细, 最大区间8天
  type REQ = {
    // 当前页
    page?: number
    // 每页条数
    pageSize?: number
    // 开始时间（时间戳）
    startTime?: string | number
    // 结束时间（时间戳）
    endTime?: string | number
    // 交易类型bet:注单、recharge:充值、withdraw:提款、activity:活动金额、credit:信用账户金额、thirdDebate:三方返水
    tranTypeGroup?: string
  }
}
// 12.玩法返水: 12.1.根据条件获取第三方玩法返水组合,免登入即可访问
declare namespace API_PLAYCOM_THIRDREBATES {
  // 12.玩法返水: 12.1.根据条件获取第三方玩法返水组合,免登入即可访问
  type RES = {
    // No comments found.
    success: boolean
    // No comments found.
    msg: string
    // No comments found.
    code: number
    // No comments found.
    t: {
      // 第三方平台z
      firmType: string
      // 游戏
      firmCode: string
      // 第三方玩法返水组合
      thirdDebateBeans: Array<{
        // 第三方平台
        firmType: string
        // 游戏
        firmCode: string
        // 会员等级名称
        userLevelName: string
        // 会员等级code
        userLevelCode: string
        // 该级别下返水配置
        debateList: Array<{
          // No comments found.
          id: number
          // 第三方平台
          firmType: string
          // 游戏
          firmCode: string
          // 会员等级名称
          userLevelName: string
          // 会员等级code
          userLevelCode: string
          // 投注区间-最小值
          minMoney: number
          // 投注区间-最大值
          maxMoney: number
          // 返水
          debate: number
          // 平台id
          platformId: number
          // 最大返水金额
          maxDebateMoney: number
        }>
      }>
      // 厂商名称 & 类型
      GameFirms: Array<{
        // id主键
        id: number
        // 厂商名称
        firmName: string
        // 编码
        firmCode: string
        // 厂商类型 。比如AG.KT,.BY
        firmType: string
        // 对应中文名
        firmShowName: string
        // 游戏编码
        playCode: string
        // 系统开关状态,0-关闭，1-开启，2-维护
        sysOpen: number
        // 游戏图标地址
        iconUrl: string
        // 游戏页面地址
        pageUrl: string
        // 试玩状态，0： 不支持1：支持关闭 2：支持开启
        enableDemo: number
        // 排序
        sort: number
        // 是否热门,0-否，1-是
        isHot: number
        // 热门排序
        hotSort: number
        // 是否首页显示,0-否，1-是
        isFront: number
        // 首页排序
        frontSort: number
        // 平台开关状态,0-关闭，1-开启
        open: number
        // 平台id
        platformId: number
        // No comments found.
        gameFirmId: number
        // 官方認證,0-关闭，1-开启'
        certificate: number
        // 排除國家
        excludeNation: string
        // 排除幣種
        excludeCurrency: string
        // 维护时间 时间戳,格式为1683133200000_1683133200000,左边为开始时间,右边为结束时间
        maintenanceTime: string
        // 图片名称
        firmImageName: string
        // 廠商名称
        groupName: string
        // 廠商反水
        debate: number
        // 是否顯示 1: 是 ,0: 否
        isShow: number
        // 是否显示小游戏清单 1: 是 ,0: 否
        enterType: number
        // IOS是否外开 0:否 1:是
        iosOutward: number
        // ANDROID是否外开 0:否 1:是
        androidOutward: number
        // H5是否外开 0:否 1:是
        h5Outward: number
        // PC是否外开 0:否 1:是
        pcOutward: number
        // 访客支持状态 0： 不支持1：支持关闭 2：支持开启
        guestOpen: number
        // 钱包类型 0:转帐钱包, 1:单一钱包
        walletType: number
        // 游戏类别代码 GameCategory code
        cateCode: string
        // 厂商多國語系名称
        firmNameMap: any
      }>
    }
  }
  // 12.玩法返水: 12.1.根据条件获取第三方玩法返水组合,免登入即可访问
  type REQ = {
    // No comments found.
    firmType: string
    // No comments found.
    firmCode: string
    // No comments found.
    platformId?: number
  }
}
// 13.: 13.1.取得最近赛事(免登陆)
declare namespace API_FIBA_LATEST {
  // 13.: 13.1.取得最近赛事(免登陆)
  type RES = {
    // No comments found.
    success: boolean
    // No comments found.
    msg: string
    // No comments found.
    code: number
    // No comments found.
    rows: Array<{
      // 赛事或赛季id
      matchId: string
      // 赛事信息
      matchInfo: {
        // 赛事或赛季id
        id: string
        // 联赛id
        leagueId: string
        // 联赛名称
        leagueName: string
        // 主队id
        homeId: string
        // 主队名称
        homeName: string
        // 客队id
        awayId: string
        // 客队名称
        awayName: string
        // 赛事或赛季开始时间
        startTime: string | number
        // 赛事或赛季结束时间
        endTime: string | number
        // 赛事状态 0：未开始，1：比赛中，2：已结束，3：延期，4：已取消
        status: number
        // 该赛事之全部可投注玩法类数量
        playCateNum: number
        // 賽季名稱
        name: string
        // 圖片
        img: string
        // 訊息
        msg: string
        // 是否可以参加过关，0：否，1：是
        parlay: number
        // 有无赛事直播 0:无 1:有
        liveVideo: number
        // 是否是中立场，1：是，0：否
        neutral: number
        // 是否有特优赔率，1：是，0：否
        eps: number
        // 赛事的赛制类型,目前仅网球排球需要显示,0:默认值 3:三战两胜 5:五战三胜...
        spt: number
        // 动画映射id
        trackerId: string
        // 小金直播id
        tvId: string
        // 第三方直播id
        streamId: string
        // 游戏类型
        gameType: string
        // 数据源
        source: number
        // 主队图标
        homeIcon: string
        // 主队图标(svg)
        homeIconSvg: string
        // 客队图标
        awayIcon: string
        // 客队图标(svg)
        awayIconSvg: string
        // 是否滚盘中 0：否，1：是
        inplay: number
        // 是否有主播直播 0：否，1：是
        isLive: number
        // 房间号
        roundNo: string
        // 主播头像
        streamerIcon: string
        // 主播名称
        StreamerName: string
        // 封面路径
        frontCoverUrl: string
        // 赛事事件列表,结构同ws推送的消息格式,主要提供给推荐赛事/热门赛事接口获取比分与时间,对应ws事件名称为MATCH_STATUS_CHANGE/MATCH_CLOCK
        eventList: Array<{
          // No comments found.
          eventType: string
        }>
        // No comments found.
        eventType: string
        // 是否为fiba赛事
        isFiba: boolean
        // 是否为欧洲杯赛事
        isEuropeCup: boolean
        // cashout 狀態 0:不可 ,1:可
        cashoutStatus: number
      }
      // 联赛名称
      leagueName: string
      // 赛事或赛季开始时间
      startTime: string | number
      // 赛事或赛季结束时间
      endTime: string | number
      // 赛事状态 0：未开始，1：比赛中，2：已结束，3：延期，4：已取消
      status: number
      // 獲勝隊伍(主H, 客A)
      winTeam: string
      // 从match result取得的分数
      score: string
      // 主隊資訊
      homeTeam: {
        // fiba队伍id
        teamId: string
        // 队伍名称
        teamName: string
        // 球队图标
        icon: string
        // 胜场
        win: string
        // 败场
        lose: string
        // 积分
        point: string
        // 排序或阶段对应座标位置 排序 (R8-1, R8-2)
        finalPlace: string
        // 排序
        sort: number
        // 总得分
        score: string
        // 总失分
        against: string
        // 分差
        difference: string
      }
      // 客隊資訊
      awayTeam: {
        // fiba队伍id
        teamId: string
        // 队伍名称
        teamName: string
        // 球队图标
        icon: string
        // 胜场
        win: string
        // 败场
        lose: string
        // 积分
        point: string
        // 排序或阶段对应座标位置 排序 (R8-1, R8-2)
        finalPlace: string
        // 排序
        sort: number
        // 总得分
        score: string
        // 总失分
        against: string
        // 分差
        difference: string
      }
      // 排序
      sort: number
    }>
    // 排序
    sort: number
    // No comments found.
    total: number
  }
  // 13.: 13.1.取得最近赛事(免登陆)
  type REQ = {
    // No comments found.
    startTime?: string | number
    // No comments found.
    endTime?: string | number
    // fiba_group的type. 类型，FIRST: 第一回合(32), SECOND: 第二回合(16), 1732: 17-32强, CLASSGAMES: 5-8, FINAL: FINAL
    type?: string
    // fiba team 的 teamId
    teamId?: string
    // group分组编码 (Group A, Group B, Group C)
    groupCode?: string
  }
}
// 13.: 13.2.根据类型取得赛事
declare namespace API_FIBA_GAMES {
  // 13.: 13.2.根据类型取得赛事
  type RES = {
    // No comments found.
    success: boolean
    // No comments found.
    msg: string
    // No comments found.
    code: number
    // No comments found.
    rows: Array<{
      // fiba_group的type. 类型，FIRST: 第一回合(32), SECOND: 第二回合(16), 1732: 17-32强, CLASSGAMES: 5-8, FINAL: FINAL
      type: string
      // group
      groupList: Array<{
        // group分组编码 (Group A, Group B)
        groupCode: string
        // group名称 (Group A, Group B)
        groupName: string
        // fiba_group的type. 类型，FIRST: 第一回合(32), SECOND: 第二回合(16), 1732: 17-32强, CLASSGAMES: 5-8, FINAL: FINAL
        type: string
        // group底下的赛事
        matchInfoList: Array<{
          // 赛事或赛季id
          matchId: string
          // 赛事信息
          matchInfo: {
            // 赛事或赛季id
            id: string
            // 联赛id
            leagueId: string
            // 联赛名称
            leagueName: string
            // 主队id
            homeId: string
            // 主队名称
            homeName: string
            // 客队id
            awayId: string
            // 客队名称
            awayName: string
            // 赛事或赛季开始时间
            startTime: string | number
            // 赛事或赛季结束时间
            endTime: string | number
            // 赛事状态 0：未开始，1：比赛中，2：已结束，3：延期，4：已取消
            status: number
            // 该赛事之全部可投注玩法类数量
            playCateNum: number
            // 賽季名稱
            name: string
            // 圖片
            img: string
            // 訊息
            msg: string
            // 是否可以参加过关，0：否，1：是
            parlay: number
            // 有无赛事直播 0:无 1:有
            liveVideo: number
            // 是否是中立场，1：是，0：否
            neutral: number
            // 是否有特优赔率，1：是，0：否
            eps: number
            // 赛事的赛制类型,目前仅网球排球需要显示,0:默认值 3:三战两胜 5:五战三胜...
            spt: number
            // 动画映射id
            trackerId: string
            // 小金直播id
            tvId: string
            // 第三方直播id
            streamId: string
            // 游戏类型
            gameType: string
            // 数据源
            source: number
            // 主队图标
            homeIcon: string
            // 主队图标(svg)
            homeIconSvg: string
            // 客队图标
            awayIcon: string
            // 客队图标(svg)
            awayIconSvg: string
            // 是否滚盘中 0：否，1：是
            inplay: number
            // 是否有主播直播 0：否，1：是
            isLive: number
            // 房间号
            roundNo: string
            // 主播头像
            streamerIcon: string
            // 主播名称
            StreamerName: string
            // 封面路径
            frontCoverUrl: string
            // 赛事事件列表,结构同ws推送的消息格式,主要提供给推荐赛事/热门赛事接口获取比分与时间,对应ws事件名称为MATCH_STATUS_CHANGE/MATCH_CLOCK
            eventList: Array<{
              // No comments found.
              eventType: string
            }>
            // No comments found.
            eventType: string
            // 是否为fiba赛事
            isFiba: boolean
            // 是否为欧洲杯赛事
            isEuropeCup: boolean
            // cashout 狀態 0:不可 ,1:可
            cashoutStatus: number
          }
          // 联赛名称
          leagueName: string
          // 赛事或赛季开始时间
          startTime: string | number
          // 赛事或赛季结束时间
          endTime: string | number
          // 赛事状态 0：未开始，1：比赛中，2：已结束，3：延期，4：已取消
          status: number
          // 獲勝隊伍(主H, 客A)
          winTeam: string
          // 从match result取得的分数
          score: string
          // 主隊資訊
          homeTeam: {
            // fiba队伍id
            teamId: string
            // 队伍名称
            teamName: string
            // 球队图标
            icon: string
            // 胜场
            win: string
            // 败场
            lose: string
            // 积分
            point: string
            // 排序或阶段对应座标位置 排序 (R8-1, R8-2)
            finalPlace: string
            // 排序
            sort: number
            // 总得分
            score: string
            // 总失分
            against: string
            // 分差
            difference: string
          }
          // 客隊資訊
          awayTeam: {
            // fiba队伍id
            teamId: string
            // 队伍名称
            teamName: string
            // 球队图标
            icon: string
            // 胜场
            win: string
            // 败场
            lose: string
            // 积分
            point: string
            // 排序或阶段对应座标位置 排序 (R8-1, R8-2)
            finalPlace: string
            // 排序
            sort: number
            // 总得分
            score: string
            // 总失分
            against: string
            // 分差
            difference: string
          }
          // 排序
          sort: number
        }>
        // group底下的队伍
        groupTeamList: Array<{
          // fiba队伍id
          teamId: string
          // 队伍名称
          teamName: string
          // 球队图标
          icon: string
          // 胜场
          win: string
          // 败场
          lose: string
          // 积分
          point: string
          // 排序或阶段对应座标位置 排序 (R8-1, R8-2)
          finalPlace: string
          // 排序
          sort: number
          // 总得分
          score: string
          // 总失分
          against: string
          // 分差
          difference: string
        }>
      }>
    }>
    // 分差
    difference: string
    // No comments found.
    total: number
  }
  // 13.: 13.2.根据类型取得赛事
  type REQ = {
    // fiba_group的type. 类型，FIRST: 第一回合(32), SECOND: 第二回合(16), 1732: 17-32强, CLASSGAMES: 5-8, FINAL: FINAL
    type?: string
    // group分组编码 (Group A, Group B)
    groupCode?: string
  }
}
// 13.: 13.3.取得fiba設置賽事時間列表
declare namespace API_FIBA_DATE {
  // 13.: 13.3.取得fiba設置賽事時間列表
  type RES = {
    // No comments found.
    success: boolean
    // No comments found.
    msg: string
    // No comments found.
    code: number
    // No comments found.
    rows: any[]
    // No comments found.
    total: number
  }
  // 13.: 13.3.取得fiba設置賽事時間列表
  type REQ = {
    // 联赛id
    leagueIdList?: any[]
    // 赛事类型,eg: INPLAY(滚球）, ATSTART（即将开赛）, TODAY（今日）, EARLY(早盘), OUTRIGHT（冠军）, PARLAY（串连）, EPS(特优赔率）
    matchType?: string
    // 客戶端當天的00:00時間戳，日期返回會以這個當作切日期的標準
    userTodayBeginTime?: string
  }
}
// 14.冠军赛果信息: 14.1.获取冠军赛果列表,免登入即可访问
declare namespace API_OUTRIGHT_RESULT_LIST {
  // 14.冠军赛果信息: 14.1.获取冠军赛果列表,免登入即可访问
  type RES = {
    // No comments found.
    success: boolean
    // No comments found.
    msg: string
    // No comments found.
    code: number
    // No comments found.
    rows: Array<{
      // 赛季信息
      season: {
        // 赛季id
        id: string
        // 联赛名称
        leagueName: string
        // 名称
        name: string
        // 联赛开始时间
        start: string
        // 联赛结束时间
        end: string
      }
      // 赛果
      resultList: Array<{
        // 赛事id
        matchId: string
        // 玩法分类id
        playCateId: number
        // 玩法分类代码
        playCateCode: string
        // 玩法分类名称
        playCateName: string
        // 玩法id
        playId: number
        // 玩法代码
        playCode: string
        // 玩法名称
        playName: string
        // 让分 如：0 / 0.5
        spread: string
        // 其他信息,如更优赔率的玩法名称,特定玩法的球员名称
        extInfo: string
        // 结算状态，1: 未结算，2:赢，3:输，4:赢半，5:输半，6:和局，7:已取消
        resultStatus: number
        // 赛果更新时间
        updateTime: string
        // 冠軍玩法
        dynamicMarket: string
        // 是否为取消 , 0： 未取消， 1： 已取消
        isCancelled: number
      }>
    }>
    // 是否为取消 , 0： 未取消， 1： 已取消
    isCancelled: number
    // No comments found.
    total: number
  }
  // 14.冠军赛果信息: 14.1.获取冠军赛果列表,免登入即可访问
  type REQ = {
    // 当前页
    page?: number
    // 每页条数
    pageSize?: number
    // 开始时间（时间戳）
    startTime?: string | number
    // 结束时间（时间戳）
    endTime?: string | number
    // 游戏类型 (FT:足球，BK:篮球,TN:网球, VB:网球,BM：羽球)
    gameType: string
    // No comments found.
    matchId?: string
    // No comments found.
    leagueId?: string
    // 赛事id集合
    matchIdList?: any[]
  }
}
// 15.体育新版菜单接口: 15.1.手机版top体育菜单,免登入即可访问
declare namespace API_V2_SPORT_MOBILE_TOPMENU {
  // 15.体育新版菜单接口: 15.1.手机版top体育菜单,免登入即可访问
  type RES = {
    // No comments found.
    success: boolean
    // No comments found.
    msg: string
    // No comments found.
    code: number
    // No comments found.
    t: {
      // 球類排序
      ballSort: string
      // No comments found.
      topMenuList: Array<{
        // 球種名稱
        name: string
        // 球種
        gameType: string
        // 排序
        sort: number
        // 滚球
        inPlay: {
          // 体育名称,如：足球
          name: string
          // 体育代码,如：FT
          code: string
          // 总数量
          num: number
          // 赛事数量
          matchNum: number
          // 冠軍比赛数量
          outRightNum: number
          // 排序号
          sortNum: number
          // 玩法分类类型菜单列表
          play: Array<{
            // 玩法菜单code
            code: string
            // 玩法菜单名称
            name: string
            // 赔率大厅画面用, 1:菜单玩法支持下拉选项 0:不支持下拉选项
            selectionType: number
            // 数量
            num: number
            // 菜单底下包含的玩法类(List格式)
            playCateList: Array<{
              // 代码
              code: string
              // 玩法类名称，如：让球, 大/小
              name: string
              // 排序
              rowSort: number
              // 各语系玩法名称
              playCateNameMap: any
            }>
            // 各语系菜单名称
            nameMap: any
            // 玩法排序
            oddsSort: string
            // 玩法显示名称
            playCateNameMap: any
            // 菜单下包含的玩法类(Map格式)
            playCateMap: {
              [key: string]: {
                // 代码
                code: string
                // 玩法类名称，如：让球, 大/小
                name: string
                // 排序
                rowSort: number
                // 各语系玩法名称
                playCateNameMap: any
              }
            }
          }>
          // 是否存在滚盘中赛事，0：否，1：是
          existInPlay: number
          // 玩法菜单列表code
          playCateMenuCodeList: any[]
          // 国家列表
          categoryList: Array<{
            // 主键
            id: string
            // 游戏类型 (FT:足球，BK:篮球,TN:网球, VB:网球,BM：羽球)
            gameType: string
            // 分类名称notNull
            name: string
            // 分类code
            code: string
            // 图标,svg的html元素(已进行UrlEncoded)
            icon: string
            // 联赛列表notNull
            list: Array<{
              // 联赛id
              id: string
              // 名称
              name: string
              // 赛事数量
              num: number
              // 排序
              sort: number
              // 联盟icon
              icon: string
            }>
            // 赛事/赛季数量notNull
            num: number
            // 排序
            sort: number
          }>
        }
        // 今日盘
        today: {
          // 体育名称,如：足球
          name: string
          // 体育代码,如：FT
          code: string
          // 总数量
          num: number
          // 赛事数量
          matchNum: number
          // 冠軍比赛数量
          outRightNum: number
          // 排序号
          sortNum: number
          // 玩法分类类型菜单列表
          play: Array<{
            // 玩法菜单code
            code: string
            // 玩法菜单名称
            name: string
            // 赔率大厅画面用, 1:菜单玩法支持下拉选项 0:不支持下拉选项
            selectionType: number
            // 数量
            num: number
            // 菜单底下包含的玩法类(List格式)
            playCateList: Array<{
              // 代码
              code: string
              // 玩法类名称，如：让球, 大/小
              name: string
              // 排序
              rowSort: number
              // 各语系玩法名称
              playCateNameMap: any
            }>
            // 各语系菜单名称
            nameMap: any
            // 玩法排序
            oddsSort: string
            // 玩法显示名称
            playCateNameMap: any
            // 菜单下包含的玩法类(Map格式)
            playCateMap: {
              [key: string]: {
                // 代码
                code: string
                // 玩法类名称，如：让球, 大/小
                name: string
                // 排序
                rowSort: number
                // 各语系玩法名称
                playCateNameMap: any
              }
            }
          }>
          // 是否存在滚盘中赛事，0：否，1：是
          existInPlay: number
          // 玩法菜单列表code
          playCateMenuCodeList: any[]
          // 国家列表
          categoryList: Array<{
            // 主键
            id: string
            // 游戏类型 (FT:足球，BK:篮球,TN:网球, VB:网球,BM：羽球)
            gameType: string
            // 分类名称notNull
            name: string
            // 分类code
            code: string
            // 图标,svg的html元素(已进行UrlEncoded)
            icon: string
            // 联赛列表notNull
            list: Array<{
              // 联赛id
              id: string
              // 名称
              name: string
              // 赛事数量
              num: number
              // 排序
              sort: number
              // 联盟icon
              icon: string
            }>
            // 赛事/赛季数量notNull
            num: number
            // 排序
            sort: number
          }>
        }
        // 早盘
        early: {
          // 体育名称,如：足球
          name: string
          // 体育代码,如：FT
          code: string
          // 总数量
          num: number
          // 赛事数量
          matchNum: number
          // 冠軍比赛数量
          outRightNum: number
          // 排序号
          sortNum: number
          // 玩法分类类型菜单列表
          play: Array<{
            // 玩法菜单code
            code: string
            // 玩法菜单名称
            name: string
            // 赔率大厅画面用, 1:菜单玩法支持下拉选项 0:不支持下拉选项
            selectionType: number
            // 数量
            num: number
            // 菜单底下包含的玩法类(List格式)
            playCateList: Array<{
              // 代码
              code: string
              // 玩法类名称，如：让球, 大/小
              name: string
              // 排序
              rowSort: number
              // 各语系玩法名称
              playCateNameMap: any
            }>
            // 各语系菜单名称
            nameMap: any
            // 玩法排序
            oddsSort: string
            // 玩法显示名称
            playCateNameMap: any
            // 菜单下包含的玩法类(Map格式)
            playCateMap: {
              [key: string]: {
                // 代码
                code: string
                // 玩法类名称，如：让球, 大/小
                name: string
                // 排序
                rowSort: number
                // 各语系玩法名称
                playCateNameMap: any
              }
            }
          }>
          // 是否存在滚盘中赛事，0：否，1：是
          existInPlay: number
          // 玩法菜单列表code
          playCateMenuCodeList: any[]
          // 国家列表
          categoryList: Array<{
            // 主键
            id: string
            // 游戏类型 (FT:足球，BK:篮球,TN:网球, VB:网球,BM：羽球)
            gameType: string
            // 分类名称notNull
            name: string
            // 分类code
            code: string
            // 图标,svg的html元素(已进行UrlEncoded)
            icon: string
            // 联赛列表notNull
            list: Array<{
              // 联赛id
              id: string
              // 名称
              name: string
              // 赛事数量
              num: number
              // 排序
              sort: number
              // 联盟icon
              icon: string
            }>
            // 赛事/赛季数量notNull
            num: number
            // 排序
            sort: number
          }>
        }
        // 连串盘
        parlay: {
          // 体育名称,如：足球
          name: string
          // 体育代码,如：FT
          code: string
          // 总数量
          num: number
          // 赛事数量
          matchNum: number
          // 冠軍比赛数量
          outRightNum: number
          // 排序号
          sortNum: number
          // 玩法分类类型菜单列表
          play: Array<{
            // 玩法菜单code
            code: string
            // 玩法菜单名称
            name: string
            // 赔率大厅画面用, 1:菜单玩法支持下拉选项 0:不支持下拉选项
            selectionType: number
            // 数量
            num: number
            // 菜单底下包含的玩法类(List格式)
            playCateList: Array<{
              // 代码
              code: string
              // 玩法类名称，如：让球, 大/小
              name: string
              // 排序
              rowSort: number
              // 各语系玩法名称
              playCateNameMap: any
            }>
            // 各语系菜单名称
            nameMap: any
            // 玩法排序
            oddsSort: string
            // 玩法显示名称
            playCateNameMap: any
            // 菜单下包含的玩法类(Map格式)
            playCateMap: {
              [key: string]: {
                // 代码
                code: string
                // 玩法类名称，如：让球, 大/小
                name: string
                // 排序
                rowSort: number
                // 各语系玩法名称
                playCateNameMap: any
              }
            }
          }>
          // 是否存在滚盘中赛事，0：否，1：是
          existInPlay: number
          // 玩法菜单列表code
          playCateMenuCodeList: any[]
          // 国家列表
          categoryList: Array<{
            // 主键
            id: string
            // 游戏类型 (FT:足球，BK:篮球,TN:网球, VB:网球,BM：羽球)
            gameType: string
            // 分类名称notNull
            name: string
            // 分类code
            code: string
            // 图标,svg的html元素(已进行UrlEncoded)
            icon: string
            // 联赛列表notNull
            list: Array<{
              // 联赛id
              id: string
              // 名称
              name: string
              // 赛事数量
              num: number
              // 排序
              sort: number
              // 联盟icon
              icon: string
            }>
            // 赛事/赛季数量notNull
            num: number
            // 排序
            sort: number
          }>
        }
        // 即将开始
        atStart: {
          // 体育名称,如：足球
          name: string
          // 体育代码,如：FT
          code: string
          // 总数量
          num: number
          // 赛事数量
          matchNum: number
          // 冠軍比赛数量
          outRightNum: number
          // 排序号
          sortNum: number
          // 玩法分类类型菜单列表
          play: Array<{
            // 玩法菜单code
            code: string
            // 玩法菜单名称
            name: string
            // 赔率大厅画面用, 1:菜单玩法支持下拉选项 0:不支持下拉选项
            selectionType: number
            // 数量
            num: number
            // 菜单底下包含的玩法类(List格式)
            playCateList: Array<{
              // 代码
              code: string
              // 玩法类名称，如：让球, 大/小
              name: string
              // 排序
              rowSort: number
              // 各语系玩法名称
              playCateNameMap: any
            }>
            // 各语系菜单名称
            nameMap: any
            // 玩法排序
            oddsSort: string
            // 玩法显示名称
            playCateNameMap: any
            // 菜单下包含的玩法类(Map格式)
            playCateMap: {
              [key: string]: {
                // 代码
                code: string
                // 玩法类名称，如：让球, 大/小
                name: string
                // 排序
                rowSort: number
                // 各语系玩法名称
                playCateNameMap: any
              }
            }
          }>
          // 是否存在滚盘中赛事，0：否，1：是
          existInPlay: number
          // 玩法菜单列表code
          playCateMenuCodeList: any[]
          // 国家列表
          categoryList: Array<{
            // 主键
            id: string
            // 游戏类型 (FT:足球，BK:篮球,TN:网球, VB:网球,BM：羽球)
            gameType: string
            // 分类名称notNull
            name: string
            // 分类code
            code: string
            // 图标,svg的html元素(已进行UrlEncoded)
            icon: string
            // 联赛列表notNull
            list: Array<{
              // 联赛id
              id: string
              // 名称
              name: string
              // 赛事数量
              num: number
              // 排序
              sort: number
              // 联盟icon
              icon: string
            }>
            // 赛事/赛季数量notNull
            num: number
            // 排序
            sort: number
          }>
        }
        // 近12小時
        in12hr: {
          // 体育名称,如：足球
          name: string
          // 体育代码,如：FT
          code: string
          // 总数量
          num: number
          // 赛事数量
          matchNum: number
          // 冠軍比赛数量
          outRightNum: number
          // 排序号
          sortNum: number
          // 玩法分类类型菜单列表
          play: Array<{
            // 玩法菜单code
            code: string
            // 玩法菜单名称
            name: string
            // 赔率大厅画面用, 1:菜单玩法支持下拉选项 0:不支持下拉选项
            selectionType: number
            // 数量
            num: number
            // 菜单底下包含的玩法类(List格式)
            playCateList: Array<{
              // 代码
              code: string
              // 玩法类名称，如：让球, 大/小
              name: string
              // 排序
              rowSort: number
              // 各语系玩法名称
              playCateNameMap: any
            }>
            // 各语系菜单名称
            nameMap: any
            // 玩法排序
            oddsSort: string
            // 玩法显示名称
            playCateNameMap: any
            // 菜单下包含的玩法类(Map格式)
            playCateMap: {
              [key: string]: {
                // 代码
                code: string
                // 玩法类名称，如：让球, 大/小
                name: string
                // 排序
                rowSort: number
                // 各语系玩法名称
                playCateNameMap: any
              }
            }
          }>
          // 是否存在滚盘中赛事，0：否，1：是
          existInPlay: number
          // 玩法菜单列表code
          playCateMenuCodeList: any[]
          // 国家列表
          categoryList: Array<{
            // 主键
            id: string
            // 游戏类型 (FT:足球，BK:篮球,TN:网球, VB:网球,BM：羽球)
            gameType: string
            // 分类名称notNull
            name: string
            // 分类code
            code: string
            // 图标,svg的html元素(已进行UrlEncoded)
            icon: string
            // 联赛列表notNull
            list: Array<{
              // 联赛id
              id: string
              // 名称
              name: string
              // 赛事数量
              num: number
              // 排序
              sort: number
              // 联盟icon
              icon: string
            }>
            // 赛事/赛季数量notNull
            num: number
            // 排序
            sort: number
          }>
        }
        // 近24小時
        in24hr: {
          // 体育名称,如：足球
          name: string
          // 体育代码,如：FT
          code: string
          // 总数量
          num: number
          // 赛事数量
          matchNum: number
          // 冠軍比赛数量
          outRightNum: number
          // 排序号
          sortNum: number
          // 玩法分类类型菜单列表
          play: Array<{
            // 玩法菜单code
            code: string
            // 玩法菜单名称
            name: string
            // 赔率大厅画面用, 1:菜单玩法支持下拉选项 0:不支持下拉选项
            selectionType: number
            // 数量
            num: number
            // 菜单底下包含的玩法类(List格式)
            playCateList: Array<{
              // 代码
              code: string
              // 玩法类名称，如：让球, 大/小
              name: string
              // 排序
              rowSort: number
              // 各语系玩法名称
              playCateNameMap: any
            }>
            // 各语系菜单名称
            nameMap: any
            // 玩法排序
            oddsSort: string
            // 玩法显示名称
            playCateNameMap: any
            // 菜单下包含的玩法类(Map格式)
            playCateMap: {
              [key: string]: {
                // 代码
                code: string
                // 玩法类名称，如：让球, 大/小
                name: string
                // 排序
                rowSort: number
                // 各语系玩法名称
                playCateNameMap: any
              }
            }
          }>
          // 是否存在滚盘中赛事，0：否，1：是
          existInPlay: number
          // 玩法菜单列表code
          playCateMenuCodeList: any[]
          // 国家列表
          categoryList: Array<{
            // 主键
            id: string
            // 游戏类型 (FT:足球，BK:篮球,TN:网球, VB:网球,BM：羽球)
            gameType: string
            // 分类名称notNull
            name: string
            // 分类code
            code: string
            // 图标,svg的html元素(已进行UrlEncoded)
            icon: string
            // 联赛列表notNull
            list: Array<{
              // 联赛id
              id: string
              // 名称
              name: string
              // 赛事数量
              num: number
              // 排序
              sort: number
              // 联盟icon
              icon: string
            }>
            // 赛事/赛季数量notNull
            num: number
            // 排序
            sort: number
          }>
        }
        // 特优赔率
        eps: {
          // 体育名称,如：足球
          name: string
          // 体育代码,如：FT
          code: string
          // 总数量
          num: number
          // 赛事数量
          matchNum: number
          // 冠軍比赛数量
          outRightNum: number
          // 排序号
          sortNum: number
          // 玩法分类类型菜单列表
          play: Array<{
            // 玩法菜单code
            code: string
            // 玩法菜单名称
            name: string
            // 赔率大厅画面用, 1:菜单玩法支持下拉选项 0:不支持下拉选项
            selectionType: number
            // 数量
            num: number
            // 菜单底下包含的玩法类(List格式)
            playCateList: Array<{
              // 代码
              code: string
              // 玩法类名称，如：让球, 大/小
              name: string
              // 排序
              rowSort: number
              // 各语系玩法名称
              playCateNameMap: any
            }>
            // 各语系菜单名称
            nameMap: any
            // 玩法排序
            oddsSort: string
            // 玩法显示名称
            playCateNameMap: any
            // 菜单下包含的玩法类(Map格式)
            playCateMap: {
              [key: string]: {
                // 代码
                code: string
                // 玩法类名称，如：让球, 大/小
                name: string
                // 排序
                rowSort: number
                // 各语系玩法名称
                playCateNameMap: any
              }
            }
          }>
          // 是否存在滚盘中赛事，0：否，1：是
          existInPlay: number
          // 玩法菜单列表code
          playCateMenuCodeList: any[]
          // 国家列表
          categoryList: Array<{
            // 主键
            id: string
            // 游戏类型 (FT:足球，BK:篮球,TN:网球, VB:网球,BM：羽球)
            gameType: string
            // 分类名称notNull
            name: string
            // 分类code
            code: string
            // 图标,svg的html元素(已进行UrlEncoded)
            icon: string
            // 联赛列表notNull
            list: Array<{
              // 联赛id
              id: string
              // 名称
              name: string
              // 赛事数量
              num: number
              // 排序
              sort: number
              // 联盟icon
              icon: string
            }>
            // 赛事/赛季数量notNull
            num: number
            // 排序
            sort: number
          }>
        }
        // 波胆(波胆&反波胆)(足球才有)
        cs: {
          // 体育名称,如：足球
          name: string
          // 体育代码,如：FT
          code: string
          // 总数量
          num: number
          // 赛事数量
          matchNum: number
          // 冠軍比赛数量
          outRightNum: number
          // 排序号
          sortNum: number
          // 玩法分类类型菜单列表
          play: Array<{
            // 玩法菜单code
            code: string
            // 玩法菜单名称
            name: string
            // 赔率大厅画面用, 1:菜单玩法支持下拉选项 0:不支持下拉选项
            selectionType: number
            // 数量
            num: number
            // 菜单底下包含的玩法类(List格式)
            playCateList: Array<{
              // 代码
              code: string
              // 玩法类名称，如：让球, 大/小
              name: string
              // 排序
              rowSort: number
              // 各语系玩法名称
              playCateNameMap: any
            }>
            // 各语系菜单名称
            nameMap: any
            // 玩法排序
            oddsSort: string
            // 玩法显示名称
            playCateNameMap: any
            // 菜单下包含的玩法类(Map格式)
            playCateMap: {
              [key: string]: {
                // 代码
                code: string
                // 玩法类名称，如：让球, 大/小
                name: string
                // 排序
                rowSort: number
                // 各语系玩法名称
                playCateNameMap: any
              }
            }
          }>
          // 是否存在滚盘中赛事，0：否，1：是
          existInPlay: number
          // 玩法菜单列表code
          playCateMenuCodeList: any[]
          // 国家列表
          categoryList: Array<{
            // 主键
            id: string
            // 游戏类型 (FT:足球，BK:篮球,TN:网球, VB:网球,BM：羽球)
            gameType: string
            // 分类名称notNull
            name: string
            // 分类code
            code: string
            // 图标,svg的html元素(已进行UrlEncoded)
            icon: string
            // 联赛列表notNull
            list: Array<{
              // 联赛id
              id: string
              // 名称
              name: string
              // 赛事数量
              num: number
              // 排序
              sort: number
              // 联盟icon
              icon: string
            }>
            // 赛事/赛季数量notNull
            num: number
            // 排序
            sort: number
          }>
        }
        // 冠军
        outright: {
          // 体育名称,如：足球
          name: string
          // 体育代码,如：FT
          code: string
          // 总数量
          num: number
          // 赛事数量
          matchNum: number
          // 冠軍比赛数量
          outRightNum: number
          // 排序号
          sortNum: number
          // 玩法分类类型菜单列表
          play: Array<{
            // 玩法菜单code
            code: string
            // 玩法菜单名称
            name: string
            // 赔率大厅画面用, 1:菜单玩法支持下拉选项 0:不支持下拉选项
            selectionType: number
            // 数量
            num: number
            // 菜单底下包含的玩法类(List格式)
            playCateList: Array<{
              // 代码
              code: string
              // 玩法类名称，如：让球, 大/小
              name: string
              // 排序
              rowSort: number
              // 各语系玩法名称
              playCateNameMap: any
            }>
            // 各语系菜单名称
            nameMap: any
            // 玩法排序
            oddsSort: string
            // 玩法显示名称
            playCateNameMap: any
            // 菜单下包含的玩法类(Map格式)
            playCateMap: {
              [key: string]: {
                // 代码
                code: string
                // 玩法类名称，如：让球, 大/小
                name: string
                // 排序
                rowSort: number
                // 各语系玩法名称
                playCateNameMap: any
              }
            }
          }>
          // 是否存在滚盘中赛事，0：否，1：是
          existInPlay: number
          // 玩法菜单列表code
          playCateMenuCodeList: any[]
          // 国家列表
          categoryList: Array<{
            // 主键
            id: string
            // 游戏类型 (FT:足球，BK:篮球,TN:网球, VB:网球,BM：羽球)
            gameType: string
            // 分类名称notNull
            name: string
            // 分类code
            code: string
            // 图标,svg的html元素(已进行UrlEncoded)
            icon: string
            // 联赛列表notNull
            list: Array<{
              // 联赛id
              id: string
              // 名称
              name: string
              // 赛事数量
              num: number
              // 排序
              sort: number
              // 联盟icon
              icon: string
            }>
            // 赛事/赛季数量notNull
            num: number
            // 排序
            sort: number
          }>
        }
        // 我的赛事
        myFavorite: {
          // 体育名称,如：足球
          name: string
          // 体育代码,如：FT
          code: string
          // 总数量
          num: number
          // 赛事数量
          matchNum: number
          // 冠軍比赛数量
          outRightNum: number
          // 排序号
          sortNum: number
          // 玩法分类类型菜单列表
          play: Array<{
            // 玩法菜单code
            code: string
            // 玩法菜单名称
            name: string
            // 赔率大厅画面用, 1:菜单玩法支持下拉选项 0:不支持下拉选项
            selectionType: number
            // 数量
            num: number
            // 菜单底下包含的玩法类(List格式)
            playCateList: Array<{
              // 代码
              code: string
              // 玩法类名称，如：让球, 大/小
              name: string
              // 排序
              rowSort: number
              // 各语系玩法名称
              playCateNameMap: any
            }>
            // 各语系菜单名称
            nameMap: any
            // 玩法排序
            oddsSort: string
            // 玩法显示名称
            playCateNameMap: any
            // 菜单下包含的玩法类(Map格式)
            playCateMap: {
              [key: string]: {
                // 代码
                code: string
                // 玩法类名称，如：让球, 大/小
                name: string
                // 排序
                rowSort: number
                // 各语系玩法名称
                playCateNameMap: any
              }
            }
          }>
          // 是否存在滚盘中赛事，0：否，1：是
          existInPlay: number
          // 玩法菜单列表code
          playCateMenuCodeList: any[]
          // 国家列表
          categoryList: Array<{
            // 主键
            id: string
            // 游戏类型 (FT:足球，BK:篮球,TN:网球, VB:网球,BM：羽球)
            gameType: string
            // 分类名称notNull
            name: string
            // 分类code
            code: string
            // 图标,svg的html元素(已进行UrlEncoded)
            icon: string
            // 联赛列表notNull
            list: Array<{
              // 联赛id
              id: string
              // 名称
              name: string
              // 赛事数量
              num: number
              // 排序
              sort: number
              // 联盟icon
              icon: string
            }>
            // 赛事/赛季数量notNull
            num: number
            // 排序
            sort: number
          }>
        }
      }>
    }
  }
  // 15.体育新版菜单接口: 15.1.手机版top体育菜单,免登入即可访问
  type REQ = {
    // 当下时间（时间戳格式）
    now: string | number
    // 今日开始时间（00:00:00的时间戳格式）
    todayStart: string | number
    // 球種
    gameType?: string
  }
}
// 16.体育信息: 16.1.推荐赛事接口
declare namespace API_SPORT_V2_RECOMMEND {
  // 16.体育信息: 16.1.推荐赛事接口
  type RES = {
    // No comments found.
    success: boolean
    // No comments found.
    msg: string
    // No comments found.
    code: number
    // No comments found.
    t: {
      // 赛事列表
      recommendList: Array<{
        // 排序
        sort: number
        // 游戏类型
        gameType: string
        // 推荐赛事列表
        list: Array<{
          // 赛事
          matchInfo: {
            // 赛事或赛季id
            id: string
            // 联赛id
            leagueId: string
            // 联赛名称
            leagueName: string
            // 主队id
            homeId: string
            // 主队名称
            homeName: string
            // 客队id
            awayId: string
            // 客队名称
            awayName: string
            // 赛事或赛季开始时间
            startTime: string | number
            // 赛事或赛季结束时间
            endTime: string | number
            // 赛事状态 0：未开始，1：比赛中，2：已结束，3：延期，4：已取消
            status: number
            // 该赛事之全部可投注玩法类数量
            playCateNum: number
            // 賽季名稱
            name: string
            // 圖片
            img: string
            // 訊息
            msg: string
            // 是否可以参加过关，0：否，1：是
            parlay: number
            // 有无赛事直播 0:无 1:有
            liveVideo: number
            // 是否是中立场，1：是，0：否
            neutral: number
            // 是否有特优赔率，1：是，0：否
            eps: number
            // 赛事的赛制类型,目前仅网球排球需要显示,0:默认值 3:三战两胜 5:五战三胜...
            spt: number
            // 动画映射id
            trackerId: string
            // 小金直播id
            tvId: string
            // 第三方直播id
            streamId: string
            // 游戏类型
            gameType: string
            // 数据源
            source: number
            // 主队图标
            homeIcon: string
            // 主队图标(svg)
            homeIconSvg: string
            // 客队图标
            awayIcon: string
            // 客队图标(svg)
            awayIconSvg: string
            // 是否滚盘中 0：否，1：是
            inplay: number
            // 是否有主播直播 0：否，1：是
            isLive: number
            // 房间号
            roundNo: string
            // 主播头像
            streamerIcon: string
            // 主播名称
            StreamerName: string
            // 封面路径
            frontCoverUrl: string
            // 赛事事件列表,结构同ws推送的消息格式,主要提供给推荐赛事/热门赛事接口获取比分与时间,对应ws事件名称为MATCH_STATUS_CHANGE/MATCH_CLOCK
            eventList: Array<{
              // No comments found.
              eventType: string
            }>
            // No comments found.
            eventType: string
            // 是否为fiba赛事
            isFiba: boolean
            // 是否为欧洲杯赛事
            isEuropeCup: boolean
            // cashout 狀態 0:不可 ,1:可
            cashoutStatus: number
          }
          // 赔率(仅首页推荐赛事的接口会回传赔率,其馀画面使用WS获取赔率) key=>玩法类型code value=>赔率列表
          odds: {
            [key: string]: {
              // 赔率idnullable
              id: string
              // 玩法类名称nullable
              name: string
              // 让分或大小分值nullable
              spread: string
              // 额外信息nullable
              extInfo: string
              // 欧洲盘赔率nullable
              odds: number
              // 香港盘赔率nullable
              hkOdds: number
              // 马来盘赔率
              malayOdds: number
              // 印尼盘赔率
              indoOdds: number
              // 市场排序，用于让球等玩法的排序
              marketSort: number
              // 0:活跃可用，可投注、1：临时锁定，不允许投注、2：不可用，不可见也不可投注nullable
              status: number
              // 赔率生产者nullable
              producerId: number
              // 保存各语系name对应值的map
              nameMap: any
              // 保存各语系extInfo对应值的map
              extInfoMap: any
              // 游戏类型 FT:soccer,BK:Basketball,BS:Baseball,FS:Outright,OP:Other,TN:Tennis,VB:Volleyball,BM:Badminton,TT:table tennis
              gameType: string
              // 玩法分类id
              playCateId: number
              // 玩法分类代码
              playCateCode: string
              // 玩法编码
              playCode: string
              // 賠率分組
              group: string
              // 版本号
              version: number
            }
          }
          // 联赛/赛季
          league: {
            // 联赛/赛季id
            id: string
            // 名称
            name: string
            // 国家Code
            categoryCode: string
            // 国家
            category: string
            // 国家图标,svg的html元素(已进行UrlEncoded)
            categoryIcon: string
            // 联赛简称
            shortName: string
            // 联盟icon
            icon: string
          }
          // 游戏类型
          gameType: string
          // 分类(滚球/今日/早盘)下的赛事总数
          matchNum: number
          // 国家名称
          categoryName: string
          // 国家图标
          categoryIcon: string
          // 联赛id
          leagueId: string
          // 联赛名称
          leagueName: string
          // 玩法菜单列表
          menuList: Array<{
            // 玩法菜单code
            code: string
            // 玩法菜单名称
            name: string
            // 赔率大厅画面用, 1:菜单玩法支持下拉选项 0:不支持下拉选项
            selectionType: number
            // 数量
            num: number
            // 菜单底下包含的玩法类(List格式)
            playCateList: Array<{
              // 代码
              code: string
              // 玩法类名称，如：让球, 大/小
              name: string
              // 排序
              rowSort: number
              // 各语系玩法名称
              playCateNameMap: any
            }>
            // 各语系菜单名称
            nameMap: any
            // 玩法排序
            oddsSort: string
            // 玩法显示名称
            playCateNameMap: any
            // 菜单下包含的玩法类(Map格式)
            playCateMap: {
              [key: string]: {
                // 代码
                code: string
                // 玩法类名称，如：让球, 大/小
                name: string
                // 排序
                rowSort: number
                // 各语系玩法名称
                playCateNameMap: any
              }
            }
          }>
          // 赛事id
          id: string
          // 主队名称
          homeName: string
          // 客队名称
          awayName: string
          // 赛事开始时间
          startTime: string | number
          // 赛事状态 0：未开始，1：比赛中，2：已结束，3：延期，4：已取消
          status: number
          // 该赛事之全部可投注玩法类数量
          playCateNum: number
          // 有无赛事直播 0:无 1:有
          liveVideo: number
          // 是否是中立场，1：是，0：否
          neutral: number
          // 是否有特优赔率，1：是，0：否
          eps: number
          // 赛事的赛制类型,目前仅网球排球需要显示,0:默认值 3:三战两胜 5:五战三胜...
          spt: number
          // 动画映射id
          trackerId: string
          // 小金直播id
          tvId: string
          // 第三方直播id
          streamId: string
        }>
      }>
    }
  }
  // 16.体育信息: 16.1.推荐赛事接口
  type REQ = {
    // 当下时间（时间戳格式）
    now: string | number
    // 今日开始时间（00:00:00的时间戳格式）
    todayStart: string | number
    // 赛事类型
    gameType?: string
    // 多球种时傳入字串內容,不同球种之间使用逗号分隔,顺序高的球种要排前面
    gameTypes?: string
  }
}
// 17.赛事: 17.1.按赛事类型预加载各体育赛事,免登入即可访问
declare namespace API_MATCH_PRELOAD {
  // 17.赛事: 17.1.按赛事类型预加载各体育赛事,免登入即可访问
  type RES = {
    // No comments found.
    success: boolean
    // No comments found.
    msg: string
    // No comments found.
    code: number
    // No comments found.
    t: {
      // 赛事数量
      num: number
      // 体育赛事数据notNull
      datas: Array<{
        // 体育名称
        name: string
        // 体育代码
        code: string
        // 赛事列表
        matchs: Array<{
          // 赛事或赛季id
          id: string
          // 联赛id
          leagueId: string
          // 联赛名称
          leagueName: string
          // 主队id
          homeId: string
          // 主队名称
          homeName: string
          // 客队id
          awayId: string
          // 客队名称
          awayName: string
          // 赛事或赛季开始时间
          startTime: string | number
          // 赛事或赛季结束时间
          endTime: string | number
          // 赛事状态 0：未开始，1：比赛中，2：已结束，3：延期，4：已取消
          status: number
          // 该赛事之全部可投注玩法类数量
          playCateNum: number
          // 賽季名稱
          name: string
          // 圖片
          img: string
          // 訊息
          msg: string
          // 是否可以参加过关，0：否，1：是
          parlay: number
          // 有无赛事直播 0:无 1:有
          liveVideo: number
          // 是否是中立场，1：是，0：否
          neutral: number
          // 是否有特优赔率，1：是，0：否
          eps: number
          // 赛事的赛制类型,目前仅网球排球需要显示,0:默认值 3:三战两胜 5:五战三胜...
          spt: number
          // 动画映射id
          trackerId: string
          // 小金直播id
          tvId: string
          // 第三方直播id
          streamId: string
          // 游戏类型
          gameType: string
          // 数据源
          source: number
          // 主队图标
          homeIcon: string
          // 主队图标(svg)
          homeIconSvg: string
          // 客队图标
          awayIcon: string
          // 客队图标(svg)
          awayIconSvg: string
          // 是否滚盘中 0：否，1：是
          inplay: number
          // 是否有主播直播 0：否，1：是
          isLive: number
          // 房间号
          roundNo: string
          // 主播头像
          streamerIcon: string
          // 主播名称
          StreamerName: string
          // 封面路径
          frontCoverUrl: string
          // 赛事事件列表,结构同ws推送的消息格式,主要提供给推荐赛事/热门赛事接口获取比分与时间,对应ws事件名称为MATCH_STATUS_CHANGE/MATCH_CLOCK
          eventList: Array<{
            // No comments found.
            eventType: string
          }>
          // No comments found.
          eventType: string
          // 是否为fiba赛事
          isFiba: boolean
          // 是否为欧洲杯赛事
          isEuropeCup: boolean
          // cashout 狀態 0:不可 ,1:可
          cashoutStatus: number
        }>
        // 赛事賠率列表
        matchOdds: Array<{
          // 赛事信息notNull
          matchInfo: {
            // 赛事或赛季id
            id: string
            // 联赛id
            leagueId: string
            // 联赛名称
            leagueName: string
            // 主队id
            homeId: string
            // 主队名称
            homeName: string
            // 客队id
            awayId: string
            // 客队名称
            awayName: string
            // 赛事或赛季开始时间
            startTime: string | number
            // 赛事或赛季结束时间
            endTime: string | number
            // 赛事状态 0：未开始，1：比赛中，2：已结束，3：延期，4：已取消
            status: number
            // 该赛事之全部可投注玩法类数量
            playCateNum: number
            // 賽季名稱
            name: string
            // 圖片
            img: string
            // 訊息
            msg: string
            // 是否可以参加过关，0：否，1：是
            parlay: number
            // 有无赛事直播 0:无 1:有
            liveVideo: number
            // 是否是中立场，1：是，0：否
            neutral: number
            // 是否有特优赔率，1：是，0：否
            eps: number
            // 赛事的赛制类型,目前仅网球排球需要显示,0:默认值 3:三战两胜 5:五战三胜...
            spt: number
            // 动画映射id
            trackerId: string
            // 小金直播id
            tvId: string
            // 第三方直播id
            streamId: string
            // 游戏类型
            gameType: string
            // 数据源
            source: number
            // 主队图标
            homeIcon: string
            // 主队图标(svg)
            homeIconSvg: string
            // 客队图标
            awayIcon: string
            // 客队图标(svg)
            awayIconSvg: string
            // 是否滚盘中 0：否，1：是
            inplay: number
            // 是否有主播直播 0：否，1：是
            isLive: number
            // 房间号
            roundNo: string
            // 主播头像
            streamerIcon: string
            // 主播名称
            StreamerName: string
            // 封面路径
            frontCoverUrl: string
            // 赛事事件列表,结构同ws推送的消息格式,主要提供给推荐赛事/热门赛事接口获取比分与时间,对应ws事件名称为MATCH_STATUS_CHANGE/MATCH_CLOCK
            eventList: Array<{
              // No comments found.
              eventType: string
            }>
            // No comments found.
            eventType: string
            // 是否为fiba赛事
            isFiba: boolean
            // 是否为欧洲杯赛事
            isEuropeCup: boolean
            // cashout 狀態 0:不可 ,1:可
            cashoutStatus: number
          }
          // 动态市场字典(冠军玩法有效)， key: 对应odds的key, value: {zh:"xxx",en:"cxxewe"}
          dynamicMarkets: any
          // odds map的取key顺序(逗号分隔),ex:HDP,1X2... 表示key先取HDP,再取1X2
          oddsSort: string
          // 赔率 key=>玩法类型code value=>赔率列表
          odds: {
            [key: string]: {
              // 赔率idnullable
              id: string
              // 玩法类名称nullable
              name: string
              // 让分或大小分值nullable
              spread: string
              // 额外信息nullable
              extInfo: string
              // 欧洲盘赔率nullable
              odds: number
              // 香港盘赔率nullable
              hkOdds: number
              // 马来盘赔率
              malayOdds: number
              // 印尼盘赔率
              indoOdds: number
              // 市场排序，用于让球等玩法的排序
              marketSort: number
              // 0:活跃可用，可投注、1：临时锁定，不允许投注、2：不可用，不可见也不可投注nullable
              status: number
              // 赔率生产者nullable
              producerId: number
              // 保存各语系name对应值的map
              nameMap: any
              // 保存各语系extInfo对应值的map
              extInfoMap: any
              // 游戏类型 FT:soccer,BK:Basketball,BS:Baseball,FS:Outright,OP:Other,TN:Tennis,VB:Volleyball,BM:Badminton,TT:table tennis
              gameType: string
              // 玩法分类id
              playCateId: number
              // 玩法分类代码
              playCateCode: string
              // 玩法编码
              playCode: string
              // 賠率分組
              group: string
              // 版本号
              version: number
            }
          }
          // 赔率陣列
          oddsList: Array<{
            // 赔率idnullable
            id: string
            // 玩法类名称nullable
            name: string
            // 让分或大小分值nullable
            spread: string
            // 额外信息nullable
            extInfo: string
            // 欧洲盘赔率nullable
            odds: number
            // 香港盘赔率nullable
            hkOdds: number
            // 马来盘赔率
            malayOdds: number
            // 印尼盘赔率
            indoOdds: number
            // 市场排序，用于让球等玩法的排序
            marketSort: number
            // 0:活跃可用，可投注、1：临时锁定，不允许投注、2：不可用，不可见也不可投注nullable
            status: number
            // 赔率生产者nullable
            producerId: number
            // 保存各语系name对应值的map
            nameMap: any
            // 保存各语系extInfo对应值的map
            extInfoMap: any
            // 游戏类型 FT:soccer,BK:Basketball,BS:Baseball,FS:Outright,OP:Other,TN:Tennis,VB:Volleyball,BM:Badminton,TT:table tennis
            gameType: string
            // 玩法分类id
            playCateId: number
            // 玩法分类代码
            playCateCode: string
            // 玩法编码
            playCode: string
            // 賠率分組
            group: string
            // 版本号
            version: number
          }>
          // 赛事可玩的快捷玩法列表
          quickPlayCateList: Array<{
            // 游戏类型,如： FT篮球，BK篮球
            gameType: string
            // 代码
            code: string
            // 名称，如：让球/大小盘
            name: string
            // menu 排序
            sort: number
          }>
          // 大厅玩法对应名称
          playCateNameMap: any
          // 玩法实际名称(注单显示用)
          betPlayCateNameMap: any
          // dynamic玩法排序 (冠軍用)
          dynamicSort: string
          // 新版篮球末位比分自己投注的数量
          bkEndCarkOFLCount: number
          // 賠率的數量
          oddsNumMap: any
        }>
        // 赛事数量
        num: number
        // 首页玩法对应名称
        playCateNameMap: any
      }>
    }
  }
  // 17.赛事: 17.1.按赛事类型预加载各体育赛事,免登入即可访问
  type REQ = {
    // 赛事类型,eg: TODAY（今日）, EARLY(早盘),PARLAY（串连）, INPLAY(滚球）,ATSTART(即将开始）
    matchType: string
    // 体育赛事的数量 (默认加载2个赛事)
    num?: number
    // 开始时间（时间戳）
    startTime?: string | number
    // 结束时间（时间戳）
    endTime?: string | number
    // 平台id
    platformId?: number
    // 玩法类型菜单code备注：滚球pc端 HOME_INPLAYmobile端 HOME_INPLAY_MOBILE即将开赛pc端 HOME_ATSTARTmobile端 HOME_ATSTART_MOBILE
    playCateMenuCode?: string
  }
}
// 17.赛事: 17.2.获取首页panel要显示的全部球种各一场赛事, 只返回滚球或即将开赛的赛事
declare namespace API_MATCH_PANEL {
  // 17.赛事: 17.2.获取首页panel要显示的全部球种各一场赛事, 只返回滚球或即将开赛的赛事
  type RES = {
    // No comments found.
    success: boolean
    // No comments found.
    msg: string
    // No comments found.
    code: number
    // No comments found.
    t: {
      // panel要显示的全部球种各一场赛事, 只返回滚球或即将开赛的赛事notNull
      gameMatchList: Array<{
        // 赛事讯息
        matchInfo: {
          // 赛事或赛季id
          id: string
          // 联赛id
          leagueId: string
          // 联赛名称
          leagueName: string
          // 主队id
          homeId: string
          // 主队名称
          homeName: string
          // 客队id
          awayId: string
          // 客队名称
          awayName: string
          // 赛事或赛季开始时间
          startTime: string | number
          // 赛事或赛季结束时间
          endTime: string | number
          // 赛事状态 0：未开始，1：比赛中，2：已结束，3：延期，4：已取消
          status: number
          // 该赛事之全部可投注玩法类数量
          playCateNum: number
          // 賽季名稱
          name: string
          // 圖片
          img: string
          // 訊息
          msg: string
          // 是否可以参加过关，0：否，1：是
          parlay: number
          // 有无赛事直播 0:无 1:有
          liveVideo: number
          // 是否是中立场，1：是，0：否
          neutral: number
          // 是否有特优赔率，1：是，0：否
          eps: number
          // 赛事的赛制类型,目前仅网球排球需要显示,0:默认值 3:三战两胜 5:五战三胜...
          spt: number
          // 动画映射id
          trackerId: string
          // 小金直播id
          tvId: string
          // 第三方直播id
          streamId: string
          // 游戏类型
          gameType: string
          // 数据源
          source: number
          // 主队图标
          homeIcon: string
          // 主队图标(svg)
          homeIconSvg: string
          // 客队图标
          awayIcon: string
          // 客队图标(svg)
          awayIconSvg: string
          // 是否滚盘中 0：否，1：是
          inplay: number
          // 是否有主播直播 0：否，1：是
          isLive: number
          // 房间号
          roundNo: string
          // 主播头像
          streamerIcon: string
          // 主播名称
          StreamerName: string
          // 封面路径
          frontCoverUrl: string
          // 赛事事件列表,结构同ws推送的消息格式,主要提供给推荐赛事/热门赛事接口获取比分与时间,对应ws事件名称为MATCH_STATUS_CHANGE/MATCH_CLOCK
          eventList: Array<{
            // No comments found.
            eventType: string
          }>
          // No comments found.
          eventType: string
          // 是否为fiba赛事
          isFiba: boolean
          // 是否为欧洲杯赛事
          isEuropeCup: boolean
          // cashout 狀態 0:不可 ,1:可
          cashoutStatus: number
        }
        // 游戏类型
        gameType: string
      }>
    }
  }
  // 17.赛事: 17.2.获取首页panel要显示的全部球种各一场赛事, 只返回滚球或即将开赛的赛事
  type REQ = {
    // No comments found.
    platformId?: number
  }
}
// 17.赛事: 17.3.获取小金直播信息获取地址（小金地址）得到形如：https://sbk-live.cxct.org/api/LiveCenter/GetLiveStreamInfo?eventId=5219648&venderEventId=kie6bw8eg3qnikzkv9wrxono&clientIp=54.238.64.92&isHls=true&language=zh-cn&partnerId=0&deviceName=Desktop_HLS的地址，直接发起请求，得到如下响应：{"IsSuccess":true,"ReturnCode":"0","Message":"Success","SysDateTime":"2021/09/11 08:32:31 -04:00","Response":{"EventId":"5219648","LsEventId":"kie6bw8eg3qnikzkv9wrxono","PartnerId":"0","VideoProvider":"p2","StreamURL":"https://wab.performfeeds.com/livestreamlaunch/lbfdi04kmk1p13eiv27fvu5w5/1rqfmyydb5e491o603msv2wwj4?_fmt=json&_fld=sl,aLng,sTok,pa&_rt=c&aLng=xx-xx,en-gb","ViewData":null,"HasCoverage":true,"HasLineup":false,"StreamId":null,"AccessToken":"Bearer dzmnlUHA6S5tDWzmzxAiWFUxpZWE9CCX0NWrRuTGsOhVwNUSU0hMe7zYE_7g8_0l6tLMUJ-Q0BLlMiyOhS157z5z2BhCe5OCk-uFVe33yyLy-yzBWha-i397WmFj9_apv7Jxfm1_Qy8iN3jS0vo1pSLFgzaUVhxWv0hFU75JTQLjAdyZHM2U3cPtIK4MoFUpW0_s8FauQAtScs48YqyT6sdKzQuDFZKCHkTEbnSH9xkdiKx50Y_5ih05hnATdC_6QMfsmYHXVO3mblnqmW8TE89smSUR1APFciCz8O6z5K9xQPgnJJ2LWnM0WwKhc9BiLNgSygeXGt8feFzKBTZozA","MatchTrackerEventId":"25567618","ProviderSportId":"1"}}其中Response中的内容就是之前 /live/info 接口解析得到的内容
declare namespace API_MATCH_LIVE_URL {
  // 17.赛事: 17.3.获取小金直播信息获取地址（小金地址）得到形如：https://sbk-live.cxct.org/api/LiveCenter/GetLiveStreamInfo?eventId=5219648&venderEventId=kie6bw8eg3qnikzkv9wrxono&clientIp=54.238.64.92&isHls=true&language=zh-cn&partnerId=0&deviceName=Desktop_HLS的地址，直接发起请求，得到如下响应：{"IsSuccess":true,"ReturnCode":"0","Message":"Success","SysDateTime":"2021/09/11 08:32:31 -04:00","Response":{"EventId":"5219648","LsEventId":"kie6bw8eg3qnikzkv9wrxono","PartnerId":"0","VideoProvider":"p2","StreamURL":"https://wab.performfeeds.com/livestreamlaunch/lbfdi04kmk1p13eiv27fvu5w5/1rqfmyydb5e491o603msv2wwj4?_fmt=json&_fld=sl,aLng,sTok,pa&_rt=c&aLng=xx-xx,en-gb","ViewData":null,"HasCoverage":true,"HasLineup":false,"StreamId":null,"AccessToken":"Bearer dzmnlUHA6S5tDWzmzxAiWFUxpZWE9CCX0NWrRuTGsOhVwNUSU0hMe7zYE_7g8_0l6tLMUJ-Q0BLlMiyOhS157z5z2BhCe5OCk-uFVe33yyLy-yzBWha-i397WmFj9_apv7Jxfm1_Qy8iN3jS0vo1pSLFgzaUVhxWv0hFU75JTQLjAdyZHM2U3cPtIK4MoFUpW0_s8FauQAtScs48YqyT6sdKzQuDFZKCHkTEbnSH9xkdiKx50Y_5ih05hnATdC_6QMfsmYHXVO3mblnqmW8TE89smSUR1APFciCz8O6z5K9xQPgnJJ2LWnM0WwKhc9BiLNgSygeXGt8feFzKBTZozA","MatchTrackerEventId":"25567618","ProviderSportId":"1"}}其中Response中的内容就是之前 /live/info 接口解析得到的内容
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
  // 17.赛事: 17.3.获取小金直播信息获取地址（小金地址）得到形如：https://sbk-live.cxct.org/api/LiveCenter/GetLiveStreamInfo?eventId=5219648&venderEventId=kie6bw8eg3qnikzkv9wrxono&clientIp=54.238.64.92&isHls=true&language=zh-cn&partnerId=0&deviceName=Desktop_HLS的地址，直接发起请求，得到如下响应：{"IsSuccess":true,"ReturnCode":"0","Message":"Success","SysDateTime":"2021/09/11 08:32:31 -04:00","Response":{"EventId":"5219648","LsEventId":"kie6bw8eg3qnikzkv9wrxono","PartnerId":"0","VideoProvider":"p2","StreamURL":"https://wab.performfeeds.com/livestreamlaunch/lbfdi04kmk1p13eiv27fvu5w5/1rqfmyydb5e491o603msv2wwj4?_fmt=json&_fld=sl,aLng,sTok,pa&_rt=c&aLng=xx-xx,en-gb","ViewData":null,"HasCoverage":true,"HasLineup":false,"StreamId":null,"AccessToken":"Bearer dzmnlUHA6S5tDWzmzxAiWFUxpZWE9CCX0NWrRuTGsOhVwNUSU0hMe7zYE_7g8_0l6tLMUJ-Q0BLlMiyOhS157z5z2BhCe5OCk-uFVe33yyLy-yzBWha-i397WmFj9_apv7Jxfm1_Qy8iN3jS0vo1pSLFgzaUVhxWv0hFU75JTQLjAdyZHM2U3cPtIK4MoFUpW0_s8FauQAtScs48YqyT6sdKzQuDFZKCHkTEbnSH9xkdiKx50Y_5ih05hnATdC_6QMfsmYHXVO3mblnqmW8TE89smSUR1APFciCz8O6z5K9xQPgnJJ2LWnM0WwKhc9BiLNgSygeXGt8feFzKBTZozA","MatchTrackerEventId":"25567618","ProviderSportId":"1"}}其中Response中的内容就是之前 /live/info 接口解析得到的内容
  type REQ = {
    // No comments found.
    matchId: string
    // 是否为行动装置 0: 否，1: 是， 默认0
    isMobile?: number
  }
}
// 17.赛事: 17.4.直播链路地址获取返回样例：{"IsSuccess": true,"ReturnCode": "0","Message": "Success","SysDateTime": "2022/01/24 08:09:32 +07:00","Response": {"StreamURLs": [{"url": "https://livesports.sportsapi.cn/m3u8/101-401071178-cd890861b4be604e24dd115aa6b428c9.m3u8?secret=83d33a93941f2a40191884bd9a7876b1&c=101&key=108","format": "m3u8","type": 1,"status": 1},{"url": "https://livesports.sportsapi.cn/live/101-401071178-cd890861b4be604e24dd115aa6b428c9.flv?secret=83d33a93941f2a40191884bd9a7876b1&c=101&key=108","format": "flv","type": 1,"status": 1},{"url": "rtmp://sportslive.sportsapi.cn:30008/live/101-401071178-cd890861b4be604e24dd115aa6b428c9?secret=83d33a93941f2a40191884bd9a7876b1&c=101&key=108","format": "rtmp","type": 1,"status": 1}],"EventId": "401071178","LsEventId": "401071178","VideoProvider": "own","StreamURL": "https://livesports.sportsapi.cn/m3u8/101-401071178-cd890861b4be604e24dd115aa6b428c9.m3u8?secret=83d33a93941f2a40191884bd9a7876b1&c=101&key=108"}}
declare namespace API_MATCH_LIVE_STREAM_URL_MAPPINGID {
  // 17.赛事: 17.4.直播链路地址获取返回样例：{"IsSuccess": true,"ReturnCode": "0","Message": "Success","SysDateTime": "2022/01/24 08:09:32 +07:00","Response": {"StreamURLs": [{"url": "https://livesports.sportsapi.cn/m3u8/101-401071178-cd890861b4be604e24dd115aa6b428c9.m3u8?secret=83d33a93941f2a40191884bd9a7876b1&c=101&key=108","format": "m3u8","type": 1,"status": 1},{"url": "https://livesports.sportsapi.cn/live/101-401071178-cd890861b4be604e24dd115aa6b428c9.flv?secret=83d33a93941f2a40191884bd9a7876b1&c=101&key=108","format": "flv","type": 1,"status": 1},{"url": "rtmp://sportslive.sportsapi.cn:30008/live/101-401071178-cd890861b4be604e24dd115aa6b428c9?secret=83d33a93941f2a40191884bd9a7876b1&c=101&key=108","format": "rtmp","type": 1,"status": 1}],"EventId": "401071178","LsEventId": "401071178","VideoProvider": "own","StreamURL": "https://livesports.sportsapi.cn/m3u8/101-401071178-cd890861b4be604e24dd115aa6b428c9.m3u8?secret=83d33a93941f2a40191884bd9a7876b1&c=101&key=108"}}
  type RES = {
    // 是否成功
    IsSuccess: boolean
    // 返回码
    ReturnCode: string
    // 消息
    Message: string
    // 时间
    SysDateTime: string
    // 具体响应
    Response: {
      // 赛事id
      EventId: string
      // ls
      LsEventId: string
      // 模拟设定，内部接入填为 own
      VideoProvider: string
      // 直播地址
      StreamURL: string
      // 直播地址列表
      StreamURLs: Array<{
        // 直播流地址
        url: string
        // 直播流格式， rtmp , flv , m3u8
        format: string
        // 直播类型；1 标清原声/卫星源（快速流），2 标清中文，3 高清原声，4 高清中文
        type: number
        // 状态，1 有流数据，2 暂无流数据
        status: number
      }>
    }
  }
  // 17.赛事: 17.4.直播链路地址获取返回样例：{"IsSuccess": true,"ReturnCode": "0","Message": "Success","SysDateTime": "2022/01/24 08:09:32 +07:00","Response": {"StreamURLs": [{"url": "https://livesports.sportsapi.cn/m3u8/101-401071178-cd890861b4be604e24dd115aa6b428c9.m3u8?secret=83d33a93941f2a40191884bd9a7876b1&c=101&key=108","format": "m3u8","type": 1,"status": 1},{"url": "https://livesports.sportsapi.cn/live/101-401071178-cd890861b4be604e24dd115aa6b428c9.flv?secret=83d33a93941f2a40191884bd9a7876b1&c=101&key=108","format": "flv","type": 1,"status": 1},{"url": "rtmp://sportslive.sportsapi.cn:30008/live/101-401071178-cd890861b4be604e24dd115aa6b428c9?secret=83d33a93941f2a40191884bd9a7876b1&c=101&key=108","format": "rtmp","type": 1,"status": 1}],"EventId": "401071178","LsEventId": "401071178","VideoProvider": "own","StreamURL": "https://livesports.sportsapi.cn/m3u8/101-401071178-cd890861b4be604e24dd115aa6b428c9.m3u8?secret=83d33a93941f2a40191884bd9a7876b1&c=101&key=108"}}
  type REQ = {
    // No comments found.
    mappingId: string
  }
}
// 17.赛事: 17.5.动画地址获取
declare namespace API_MATCH_TRACKER_URL_MAPPINGID {
  // 17.赛事: 17.5.动画地址获取
  type RES = {
    // No comments found.
    success: boolean
    // No comments found.
    msg: string
    // No comments found.
    code: number
    // No comments found.
    t: {
      // 第三方赛事id
      mappingId: string
      // 赛事类型
      gameType: string
      // PC 地址
      pcUrl: string
      // H5 地址
      h5Url: string
    }
  }
  // 17.赛事: 17.5.动画地址获取
  type REQ = {
    // No comments found.
    mappingId: string
  }
}
// 17.赛事: 17.6.glive 直播链路地址获取
declare namespace API_MATCH_LIVE_STREAM_GLIVE_URL_MAPPINGID {
  // 17.赛事: 17.6.glive 直播链路地址获取
  type RES = {
    // 是否成功
    IsSuccess: boolean
    // 返回码
    ReturnCode: string
    // 消息
    Message: string
    // 时间
    SysDateTime: string
    // 具体响应
    Response: {
      // 赛事id
      EventId: string
      // ls
      LsEventId: string
      // 模拟设定，内部接入填为 own
      VideoProvider: string
      // 直播地址
      StreamURL: string
      // 直播地址列表
      StreamURLs: Array<{
        // 直播流地址
        url: string
        // 直播流格式， rtmp , flv , m3u8
        format: string
        // 直播类型；1 标清原声/卫星源（快速流），2 标清中文，3 高清原声，4 高清中文
        type: number
        // 状态，1 有流数据，2 暂无流数据
        status: number
      }>
    }
  }
  // 17.赛事: 17.6.glive 直播链路地址获取
  type REQ = {
    // No comments found.
    mappingId: string
  }
}
// 18.参赛表: 18.1.查询参赛表
declare namespace API_MATCHCATEGORY_QUERY {
  // 18.参赛表: 18.1.查询参赛表
  type RES = {
    // No comments found.
    success: boolean
    // No comments found.
    msg: string
    // No comments found.
    code: number
    // No comments found.
    rows: Array<{
      // 主键
      id: number
      // 体育类型
      gameType: string
      // 类别id
      categoryId: string
      // 类别说明
      categoryDesc: string
      // 赛事id list
      matchList: any[]
      // 赛事数量
      matchNums: number
      // 排序
      sort: number
    }>
    // 排序
    sort: number
    // No comments found.
    total: number
  }
  // 18.参赛表: 18.1.查询参赛表
  type REQ = {
    // 游戏类型 (FT:足球，BK:篮球,TN:网球, VB:网球,BM：羽球)
    gameType: string
    // 选单类型: TODAY（今日）, PARLAY（串关）
    matchType: string
    // 当下时间（时间戳格式）
    now: string | number
    // 今日开始时间（00:00:00的时间戳格式）
    todayStart: string | number
  }
}
// 18.参赛表: 18.2.查询推薦賽事
declare namespace API_MATCHCATEGORY_RECOMMEND_QUERY {
  // 18.参赛表: 18.2.查询推薦賽事
  type RES = {
    // No comments found.
    success: boolean
    // No comments found.
    msg: string
    // No comments found.
    code: number
    // No comments found.
    rows: Array<{
      // 体育项目notNull
      sport: {
        // code,FT:足球，BK:篮球notNull
        code: string
        // 名称,如：足球，篮球notNull
        name: string
      }
      // 联赛&赔率notNull
      leagueOdds: {
        // 联赛/赛季notNull
        league: {
          // 联赛/赛季id
          id: string
          // 名称
          name: string
          // 国家Code
          categoryCode: string
          // 国家
          category: string
          // 国家图标,svg的html元素(已进行UrlEncoded)
          categoryIcon: string
          // 联赛简称
          shortName: string
          // 联盟icon
          icon: string
        }
        // 赛事或赛季赔率notNull
        matchOdds: Array<{
          // 赛事信息notNull
          matchInfo: {
            // 赛事或赛季id
            id: string
            // 联赛id
            leagueId: string
            // 联赛名称
            leagueName: string
            // 主队id
            homeId: string
            // 主队名称
            homeName: string
            // 客队id
            awayId: string
            // 客队名称
            awayName: string
            // 赛事或赛季开始时间
            startTime: string | number
            // 赛事或赛季结束时间
            endTime: string | number
            // 赛事状态 0：未开始，1：比赛中，2：已结束，3：延期，4：已取消
            status: number
            // 该赛事之全部可投注玩法类数量
            playCateNum: number
            // 賽季名稱
            name: string
            // 圖片
            img: string
            // 訊息
            msg: string
            // 是否可以参加过关，0：否，1：是
            parlay: number
            // 有无赛事直播 0:无 1:有
            liveVideo: number
            // 是否是中立场，1：是，0：否
            neutral: number
            // 是否有特优赔率，1：是，0：否
            eps: number
            // 赛事的赛制类型,目前仅网球排球需要显示,0:默认值 3:三战两胜 5:五战三胜...
            spt: number
            // 动画映射id
            trackerId: string
            // 小金直播id
            tvId: string
            // 第三方直播id
            streamId: string
            // 游戏类型
            gameType: string
            // 数据源
            source: number
            // 主队图标
            homeIcon: string
            // 主队图标(svg)
            homeIconSvg: string
            // 客队图标
            awayIcon: string
            // 客队图标(svg)
            awayIconSvg: string
            // 是否滚盘中 0：否，1：是
            inplay: number
            // 是否有主播直播 0：否，1：是
            isLive: number
            // 房间号
            roundNo: string
            // 主播头像
            streamerIcon: string
            // 主播名称
            StreamerName: string
            // 封面路径
            frontCoverUrl: string
            // 赛事事件列表,结构同ws推送的消息格式,主要提供给推荐赛事/热门赛事接口获取比分与时间,对应ws事件名称为MATCH_STATUS_CHANGE/MATCH_CLOCK
            eventList: Array<{
              // No comments found.
              eventType: string
            }>
            // No comments found.
            eventType: string
            // 是否为fiba赛事
            isFiba: boolean
            // 是否为欧洲杯赛事
            isEuropeCup: boolean
            // cashout 狀態 0:不可 ,1:可
            cashoutStatus: number
          }
          // 动态市场字典(冠军玩法有效)， key: 对应odds的key, value: {zh:"xxx",en:"cxxewe"}
          dynamicMarkets: any
          // odds map的取key顺序(逗号分隔),ex:HDP,1X2... 表示key先取HDP,再取1X2
          oddsSort: string
          // 赔率 key=>玩法类型code value=>赔率列表
          odds: {
            [key: string]: {
              // 赔率idnullable
              id: string
              // 玩法类名称nullable
              name: string
              // 让分或大小分值nullable
              spread: string
              // 额外信息nullable
              extInfo: string
              // 欧洲盘赔率nullable
              odds: number
              // 香港盘赔率nullable
              hkOdds: number
              // 马来盘赔率
              malayOdds: number
              // 印尼盘赔率
              indoOdds: number
              // 市场排序，用于让球等玩法的排序
              marketSort: number
              // 0:活跃可用，可投注、1：临时锁定，不允许投注、2：不可用，不可见也不可投注nullable
              status: number
              // 赔率生产者nullable
              producerId: number
              // 保存各语系name对应值的map
              nameMap: any
              // 保存各语系extInfo对应值的map
              extInfoMap: any
              // 游戏类型 FT:soccer,BK:Basketball,BS:Baseball,FS:Outright,OP:Other,TN:Tennis,VB:Volleyball,BM:Badminton,TT:table tennis
              gameType: string
              // 玩法分类id
              playCateId: number
              // 玩法分类代码
              playCateCode: string
              // 玩法编码
              playCode: string
              // 賠率分組
              group: string
              // 版本号
              version: number
            }
          }
          // 赔率陣列
          oddsList: Array<{
            // 赔率idnullable
            id: string
            // 玩法类名称nullable
            name: string
            // 让分或大小分值nullable
            spread: string
            // 额外信息nullable
            extInfo: string
            // 欧洲盘赔率nullable
            odds: number
            // 香港盘赔率nullable
            hkOdds: number
            // 马来盘赔率
            malayOdds: number
            // 印尼盘赔率
            indoOdds: number
            // 市场排序，用于让球等玩法的排序
            marketSort: number
            // 0:活跃可用，可投注、1：临时锁定，不允许投注、2：不可用，不可见也不可投注nullable
            status: number
            // 赔率生产者nullable
            producerId: number
            // 保存各语系name对应值的map
            nameMap: any
            // 保存各语系extInfo对应值的map
            extInfoMap: any
            // 游戏类型 FT:soccer,BK:Basketball,BS:Baseball,FS:Outright,OP:Other,TN:Tennis,VB:Volleyball,BM:Badminton,TT:table tennis
            gameType: string
            // 玩法分类id
            playCateId: number
            // 玩法分类代码
            playCateCode: string
            // 玩法编码
            playCode: string
            // 賠率分組
            group: string
            // 版本号
            version: number
          }>
          // 赛事可玩的快捷玩法列表
          quickPlayCateList: Array<{
            // 游戏类型,如： FT篮球，BK篮球
            gameType: string
            // 代码
            code: string
            // 名称，如：让球/大小盘
            name: string
            // menu 排序
            sort: number
          }>
          // 大厅玩法对应名称
          playCateNameMap: any
          // 玩法实际名称(注单显示用)
          betPlayCateNameMap: any
          // dynamic玩法排序 (冠軍用)
          dynamicSort: string
          // 新版篮球末位比分自己投注的数量
          bkEndCarkOFLCount: number
          // 賠率的數量
          oddsNumMap: any
        }>
        // 排序
        sort: number
        // 是否展开，0：否，1：是
        unfold: number
        // 玩法赔率排序,同时代表该菜单下总共有的全部玩法
        oddsSort: string
        // 玩法对应名称
        playCateNameMap: any
      }
      // 是否为赛季 0:否，1：是
      isOutright: number
    }>
    // 是否为赛季 0:否，1：是
    isOutright: number
    // No comments found.
    total: number
  }
  // 18.参赛表: 18.2.查询推薦賽事
  type REQ = {
    // 是否为行动装置 0: 否，1: 是
    isMobile?: number
  }
}
// 18.参赛表: 18.3.查詢主頁精選賽事
declare namespace API_MATCHCATEGORY_SPECIAL_MATCH_QUERY {
  // 18.参赛表: 18.3.查詢主頁精選賽事
  type RES = {
    // No comments found.
    success: boolean
    // No comments found.
    msg: string
    // No comments found.
    code: number
    // No comments found.
    t: {
      // 赛事赔率notNull
      odds: Array<{
        // 赛事信息notNull
        matchInfo: {
          // 赛事或赛季id
          id: string
          // 联赛id
          leagueId: string
          // 联赛名称
          leagueName: string
          // 主队id
          homeId: string
          // 主队名称
          homeName: string
          // 客队id
          awayId: string
          // 客队名称
          awayName: string
          // 赛事或赛季开始时间
          startTime: string | number
          // 赛事或赛季结束时间
          endTime: string | number
          // 赛事状态 0：未开始，1：比赛中，2：已结束，3：延期，4：已取消
          status: number
          // 该赛事之全部可投注玩法类数量
          playCateNum: number
          // 賽季名稱
          name: string
          // 圖片
          img: string
          // 訊息
          msg: string
          // 是否可以参加过关，0：否，1：是
          parlay: number
          // 有无赛事直播 0:无 1:有
          liveVideo: number
          // 是否是中立场，1：是，0：否
          neutral: number
          // 是否有特优赔率，1：是，0：否
          eps: number
          // 赛事的赛制类型,目前仅网球排球需要显示,0:默认值 3:三战两胜 5:五战三胜...
          spt: number
          // 动画映射id
          trackerId: string
          // 小金直播id
          tvId: string
          // 第三方直播id
          streamId: string
          // 游戏类型
          gameType: string
          // 数据源
          source: number
          // 主队图标
          homeIcon: string
          // 主队图标(svg)
          homeIconSvg: string
          // 客队图标
          awayIcon: string
          // 客队图标(svg)
          awayIconSvg: string
          // 是否滚盘中 0：否，1：是
          inplay: number
          // 是否有主播直播 0：否，1：是
          isLive: number
          // 房间号
          roundNo: string
          // 主播头像
          streamerIcon: string
          // 主播名称
          StreamerName: string
          // 封面路径
          frontCoverUrl: string
          // 赛事事件列表,结构同ws推送的消息格式,主要提供给推荐赛事/热门赛事接口获取比分与时间,对应ws事件名称为MATCH_STATUS_CHANGE/MATCH_CLOCK
          eventList: Array<{
            // No comments found.
            eventType: string
          }>
          // No comments found.
          eventType: string
          // 是否为fiba赛事
          isFiba: boolean
          // 是否为欧洲杯赛事
          isEuropeCup: boolean
          // cashout 狀態 0:不可 ,1:可
          cashoutStatus: number
        }
        // 动态市场字典(冠军玩法有效)， key: 对应odds的key, value: {zh:"xxx",en:"cxxewe"}
        dynamicMarkets: any
        // odds map的取key顺序(逗号分隔),ex:HDP,1X2... 表示key先取HDP,再取1X2
        oddsSort: string
        // 赔率 key=>玩法类型code value=>赔率列表
        odds: {
          [key: string]: {
            // 赔率idnullable
            id: string
            // 玩法类名称nullable
            name: string
            // 让分或大小分值nullable
            spread: string
            // 额外信息nullable
            extInfo: string
            // 欧洲盘赔率nullable
            odds: number
            // 香港盘赔率nullable
            hkOdds: number
            // 马来盘赔率
            malayOdds: number
            // 印尼盘赔率
            indoOdds: number
            // 市场排序，用于让球等玩法的排序
            marketSort: number
            // 0:活跃可用，可投注、1：临时锁定，不允许投注、2：不可用，不可见也不可投注nullable
            status: number
            // 赔率生产者nullable
            producerId: number
            // 保存各语系name对应值的map
            nameMap: any
            // 保存各语系extInfo对应值的map
            extInfoMap: any
            // 游戏类型 FT:soccer,BK:Basketball,BS:Baseball,FS:Outright,OP:Other,TN:Tennis,VB:Volleyball,BM:Badminton,TT:table tennis
            gameType: string
            // 玩法分类id
            playCateId: number
            // 玩法分类代码
            playCateCode: string
            // 玩法编码
            playCode: string
            // 賠率分組
            group: string
            // 版本号
            version: number
          }
        }
        // 赔率陣列
        oddsList: Array<{
          // 赔率idnullable
          id: string
          // 玩法类名称nullable
          name: string
          // 让分或大小分值nullable
          spread: string
          // 额外信息nullable
          extInfo: string
          // 欧洲盘赔率nullable
          odds: number
          // 香港盘赔率nullable
          hkOdds: number
          // 马来盘赔率
          malayOdds: number
          // 印尼盘赔率
          indoOdds: number
          // 市场排序，用于让球等玩法的排序
          marketSort: number
          // 0:活跃可用，可投注、1：临时锁定，不允许投注、2：不可用，不可见也不可投注nullable
          status: number
          // 赔率生产者nullable
          producerId: number
          // 保存各语系name对应值的map
          nameMap: any
          // 保存各语系extInfo对应值的map
          extInfoMap: any
          // 游戏类型 FT:soccer,BK:Basketball,BS:Baseball,FS:Outright,OP:Other,TN:Tennis,VB:Volleyball,BM:Badminton,TT:table tennis
          gameType: string
          // 玩法分类id
          playCateId: number
          // 玩法分类代码
          playCateCode: string
          // 玩法编码
          playCode: string
          // 賠率分組
          group: string
          // 版本号
          version: number
        }>
        // 赛事可玩的快捷玩法列表
        quickPlayCateList: Array<{
          // 游戏类型,如： FT篮球，BK篮球
          gameType: string
          // 代码
          code: string
          // 名称，如：让球/大小盘
          name: string
          // menu 排序
          sort: number
        }>
        // 大厅玩法对应名称
        playCateNameMap: any
        // 玩法实际名称(注单显示用)
        betPlayCateNameMap: any
        // dynamic玩法排序 (冠軍用)
        dynamicSort: string
        // 新版篮球末位比分自己投注的数量
        bkEndCarkOFLCount: number
        // 賠率的數量
        oddsNumMap: any
      }>
      // 精选玩法对应名称
      playCateNameMap: any
    }
  }
  // 18.参赛表: 18.3.查詢主頁精選賽事
  type REQ = {
    // 运动类型
    gameType: string
    // 玩法类型菜单code备注：pc端 playCateMenuCode = SPECIAL_MATCHmobile端 playCateMenuCode = SPECIAL_MATCH_MOBILE
    playCateMenuCode: string
    // 今日开始时间（时间戳）
    startTime: string | number
    // 今日结束时间（时间戳）
    endTime: string | number
  }
}
// 18.参赛表: 18.4.查詢主頁精選賽事菜单
declare namespace API_MATCHCATEGORY_SPECIAL_MENU_QUERY {
  // 18.参赛表: 18.4.查詢主頁精選賽事菜单
  type RES = {
    // No comments found.
    success: boolean
    // No comments found.
    msg: string
    // No comments found.
    code: number
    // No comments found.
    t: {
      // 精選球種列表
      menu: Array<{
        // 主键
        id: number
        // 游戏编码(如：FT:足球,BK:篮球)
        code: string
        // 游戏名称(中文)
        name: string
        // 状态（1：启用；0：停用）
        state: number
        // 排序号
        sortNum: number
        // 球种使用的数据源
        source: number
        // 冠军玩法使用的数据源（暂不支持创信）
        outrightSource: number
        // 赛果使用的数据源
        matchResultSource: number
        // 是否启用下注倒数撤单验证 0: 关闭 1: 开启
        betConfirmStatus: number
      }>
    }
  }
  // 18.参赛表: 18.4.查詢主頁精選賽事菜单
  type REQ = {
    // 玩法类型菜单code备注：pc端 playCateMenuCode = SPECIAL_MATCHmobile端 playCateMenuCode = SPECIAL_MATCH_MOBILE
    playCateMenuCode: string
    // 今日开始时间（时间戳）
    startTime: string | number
    // 今日结束时间（时间戳）
    endTime: string | number
  }
}
// 19.赛事赛果信息: 19.1.获取赛果列表,免登入即可访问
declare namespace API_MATCH_RESULT_LIST {
  // 19.赛事赛果信息: 19.1.获取赛果列表,免登入即可访问
  type RES = {
    // No comments found.
    success: boolean
    // No comments found.
    msg: string
    // No comments found.
    code: number
    // No comments found.
    rows: Array<{
      // 赛事名称
      league: {
        // 联赛/赛季id
        id: string
        // 名称
        name: string
        // 国家Code
        categoryCode: string
        // 国家
        category: string
        // 国家图标,svg的html元素(已进行UrlEncoded)
        categoryIcon: string
        // 联赛简称
        shortName: string
        // 联盟icon
        icon: string
      }
      // 排序
      sort: number
      // 赛事信息
      list: Array<{
        // 赛事信息
        matchInfo: {
          // 赛事或赛季id
          id: string
          // 联赛id
          leagueId: string
          // 联赛名称
          leagueName: string
          // 主队id
          homeId: string
          // 主队名称
          homeName: string
          // 客队id
          awayId: string
          // 客队名称
          awayName: string
          // 赛事或赛季开始时间
          startTime: string | number
          // 赛事或赛季结束时间
          endTime: string | number
          // 赛事状态 0：未开始，1：比赛中，2：已结束，3：延期，4：已取消
          status: number
          // 该赛事之全部可投注玩法类数量
          playCateNum: number
          // 賽季名稱
          name: string
          // 圖片
          img: string
          // 訊息
          msg: string
          // 是否可以参加过关，0：否，1：是
          parlay: number
          // 有无赛事直播 0:无 1:有
          liveVideo: number
          // 是否是中立场，1：是，0：否
          neutral: number
          // 是否有特优赔率，1：是，0：否
          eps: number
          // 赛事的赛制类型,目前仅网球排球需要显示,0:默认值 3:三战两胜 5:五战三胜...
          spt: number
          // 动画映射id
          trackerId: string
          // 小金直播id
          tvId: string
          // 第三方直播id
          streamId: string
          // 游戏类型
          gameType: string
          // 数据源
          source: number
          // 主队图标
          homeIcon: string
          // 主队图标(svg)
          homeIconSvg: string
          // 客队图标
          awayIcon: string
          // 客队图标(svg)
          awayIconSvg: string
          // 是否滚盘中 0：否，1：是
          inplay: number
          // 是否有主播直播 0：否，1：是
          isLive: number
          // 房间号
          roundNo: string
          // 主播头像
          streamerIcon: string
          // 主播名称
          StreamerName: string
          // 封面路径
          frontCoverUrl: string
          // 赛事事件列表,结构同ws推送的消息格式,主要提供给推荐赛事/热门赛事接口获取比分与时间,对应ws事件名称为MATCH_STATUS_CHANGE/MATCH_CLOCK
          eventList: Array<{
            // No comments found.
            eventType: string
          }>
          // No comments found.
          eventType: string
          // 是否为fiba赛事
          isFiba: boolean
          // 是否为欧洲杯赛事
          isEuropeCup: boolean
          // cashout 狀態 0:不可 ,1:可
          cashoutStatus: number
        }
        // 赛果
        matchStatusList: Array<{
          // 赛事id
          matchId: string
          // 赛事阶段id，足球类 6:上半场 7:下半场 31:半场 32:等待加时赛 33:加时赛中场 34:等待点球决胜 41:加时第一节 42:加时第二节 50:点球 80:中断 90:弃赛 100:完场 110:加时赛后 120:点球决胜后篮球类 1:第一节 2:第二节 6:上半场 7:下半场 13:第一节 14:第二节 15:第三节 16:第四节 31:半场 32:等待加时赛 40:加时 80:中断 90:弃赛 100:完场 110:加时赛后 301:第1次休息 302:第2次休息 303:第3次休息网球类 8:第一盘 9:第二盘 10:第三盘 11:第四盘 12:第五盘 61:推迟开赛 80:中断 90:弃赛 93:退赛，选手1获胜 94:退赛，选手2获胜 95:选手1退赛，选手2获胜 96:选手2退赛，选手1获胜 100:完场排球类 8:第一盘 9:第二盘 10:第三盘 11:第四盘 12:第五盘 17:金局 37:等待决胜局 61:推迟开赛 80:中断 90:弃赛 93:退赛，选手1获胜 94:退赛，选手2获胜 95:选手1退赛，选手2获胜 96:选手2退赛，选手1获胜 100:完场 130:决胜局之后 301:第1次休息 302:第2次休息 303:第3次休息 304:第4次休息 305:第5次休息 306:第6次休息 441:第六盘 442:第七盘羽球类 8:第一盘 9:第二盘 10:第三盘 11:第四盘 12:第五盘 61:推迟开赛 80:中断 90:弃赛 93:退赛，选手1获胜 94:退赛，选手2获胜 95:选手1退赛，选手2获胜 96:选手2退赛，选手1获胜 97:选手1违约，选手2获胜 98:选手2违约，选手1获胜 100:完场 301:第1次休息 302:第2次休息 303:第3次休息 304:第4次休息其他具体参考国际化与statusName
          status: number
          // 赛事阶段名称，如上半场、第一节之类（国际化）
          statusName: string
          // 主队比分
          homeScore: number
          // 客队比分
          awayScore: number
          // 主队总比分
          homeTotalScore: number
          // 客队总比分
          awayTotalScore: number
          // 最终结果 REFUND, CANCELLED
          result: string
          // 主队角球数，仅对FT有效
          homeCornerKicks: number
          // 客队角球数，仅对FT有效
          awayCornerKicks: number
          // 主队罚牌数，仅对FT有效
          homeCards: number
          // 客队罚牌数，仅对FT有效
          awayCards: number
          // 主队黄牌数，仅对FT有效
          homeYellowCards: number
          // 客队黄牌数，仅对FT有效
          awayYellowCards: number
          // 主队加时赛比分
          homeOtScore: number
          // 客队加时赛比分
          awayOtScore: number
          // 点球主队比分(足球完赛状态才有)
          homePenaltyShootoutScore: number
          // 点球客队比分(足球完赛状态才有)
          awayPenaltyShootoutScore: number
          // 主队加时分数
          homeExtraFullTimeScore: number
          // 客队加时得分数
          awayExtraFullTimeScore: number
          // 游戏类型，FT，BK等
          gameType: string
        }>
      }>
    }>
    // 游戏类型，FT，BK等
    gameType: string
    // No comments found.
    total: number
  }
  // 19.赛事赛果信息: 19.1.获取赛果列表,免登入即可访问
  type REQ = {
    // 当前页
    page?: number
    // 每页条数
    pageSize?: number
    // 开始时间（时间戳）
    startTime?: string | number
    // 结束时间（时间戳）
    endTime?: string | number
    // 游戏类型 (FT:足球，BK:篮球,TN:网球, VB:网球,BM：羽球)
    gameType: string
    // No comments found.
    matchId?: string
    // No comments found.
    leagueId?: string
    // 赛事id集合
    matchIdList?: any[]
  }
}
// 19.赛事赛果信息: 19.2.获取赛事玩法赛果,免登入即可访问
declare namespace API_MATCH_RESULT_PLAY_LIST {
  // 19.赛事赛果信息: 19.2.获取赛事玩法赛果,免登入即可访问
  type RES = {
    // No comments found.
    success: boolean
    // No comments found.
    msg: string
    // No comments found.
    code: number
    // No comments found.
    rows: Array<{
      // 赛事id
      matchId: string
      // 玩法分类id
      playCateId: number
      // 玩法分类代码
      playCateCode: string
      // 玩法分类名称
      playCateName: string
      // 玩法id
      playId: number
      // 玩法代码
      playCode: string
      // 玩法名称
      playName: string
      // 让分 如：0 / 0.5
      spread: string
      // 其他信息,如更优赔率的玩法名称,特定玩法的球员名称
      extInfo: string
      // 结算状态，1: 未结算，2:赢，3:输，4:赢半，5:输半，6:和局，7:已取消
      resultStatus: number
      // 赛果更新时间
      updateTime: string
      // 冠軍玩法
      dynamicMarket: string
      // 是否为取消 , 0： 未取消， 1： 已取消
      isCancelled: number
    }>
    // 是否为取消 , 0： 未取消， 1： 已取消
    isCancelled: number
    // No comments found.
    total: number
  }
  // 19.赛事赛果信息: 19.2.获取赛事玩法赛果,免登入即可访问
  type REQ = {
    // No comments found.
    matchId: string
  }
}
// 20.玩法分类信息: 20.1.玩法分类列表,免登入即可访问
declare namespace API_PLAYCATE_TYPE_LIST {
  // 20.玩法分类信息: 20.1.玩法分类列表,免登入即可访问
  type RES = {
    // No comments found.
    success: boolean
    // No comments found.
    msg: string
    // No comments found.
    code: number
    // No comments found.
    rows: Array<{
      // 主键
      id: number
      // 类型代码
      code: string
      // 类型名称（中文）
      name: string
      // 游戏类型 FT：足球
      gameType: string
      // 排序 default 1 COMMENT '同级排序，值越小排在越前面
      sort: number
      // 备注
      remark: string
    }>
    // 备注
    remark: string
    // No comments found.
    total: number
  }
  // 20.玩法分类信息: 20.1.玩法分类列表,免登入即可访问
  type REQ = {
    // 体育类型，如：FT, BK
    gameType: string
  }
}
// 21.赛程: 21.1.取得赛程
declare namespace API_SCHEDULE_QUERY {
  // 21.赛程: 21.1.取得赛程
  type RES = {
    // No comments found.
    success: boolean
    // No comments found.
    msg: string
    // No comments found.
    code: number
    // No comments found.
    rows: Array<{
      // matchInfo主键
      matchId: string
      // 比赛开始时间
      startTime: string | number
      // 联赛id
      leagueId: string
      // 主队id
      homeId: string
      // 主队名称(预留冗余字段）
      homeName: string
      // 客队id
      awayId: string
      // 客队名称(预留冗余字段）
      awayName: string
      // 状态 0：未开始，1：比赛中，2：已结束，3：延期，4：已取消,5:暂停，6：中止
      status: number
      // 游戏类型 FT:soccer,BK:Basketball
      gameType: string
      // 是否滚盘中 0：否，1：是
      inplay: number
    }>
    // 是否滚盘中 0：否，1：是
    inplay: number
    // No comments found.
    total: number
  }
  // 21.赛程: 21.1.取得赛程
  type REQ = {
    // 游戏类型,可空 (FT:足球，BK:篮球,TN:网球, VB:网球,BM：羽球)
    gameType?: string
    // 赛程动画类型(1:现场直播,2:动画转播)
    type?: number
    // 开始时间（时间戳）
    startTime?: string | number
    // 结束时间（时间戳）
    endTime?: string | number
  }
}
// 22.: 22.1.获取时间轴数据
declare namespace API_TIMELINE {
  // 22.: 22.1.获取时间轴数据
  type RES = {
    // No comments found.
    success: boolean
    // No comments found.
    msg: string
    // No comments found.
    code: number
    // No comments found.
    t: {
      // 游戏厂商Map
      gameFirmStatusMap: {
        [key: string]: {
          // id主键
          id: number
          // 编码
          firmCode: string
          // 厂商类型 。比如AG.KT,.BY
          firmType: string
          // 游戏编码
          playCode: string
          // 系统开关状态,0-关闭，1-开启，2-维护
          sysOpen: number
          // 平台开关状态,0-关闭，1-开启
          open: number
          // 维护时间 时间戳,格式为1683133200000_1683133200000,左边为开始时间,右边为结束时间
          maintenanceTime: string
        }
      }
      // 充值像素紀錄
      pixelVOList: Array<{
        // No comments found.
        orderNo: string
        // No comments found.
        money: string
      }>
      // 首充像素紀錄
      firstPixelVO: {
        // No comments found.
        orderNo: string
        // No comments found.
        money: string
      }
    }
  }
  // 22.: 22.1.获取时间轴数据
  type REQ = {
    // No comments found.
    platformId?: number
    // No comments found.
    locale?: any
  }
}
// 23.玩法投注限额: 23.1.获取所有体育玩法限额,免登入即可访问
declare namespace API_PLAYQUOTACOM_LIST {
  // 23.玩法投注限额: 23.1.获取所有体育玩法限额,免登入即可访问
  type RES = {
    // No comments found.
    success: boolean
    // No comments found.
    msg: string
    // No comments found.
    code: number
    // No comments found.
    t: {
      // 主键
      id: number
      // 代码 下注模式@球種 SINGLE@FT, PARLAY@FT, OUTRIGHT@FT
      code: string
      // 名称（中文）
      name: string
      // 最小下注额
      min: number
      // 最大赔付额
      max: number
      // 平台id
      platformId: number
      // 类型 FT：足球
      gameType: string
      // 币种
      currency: string
    }
  }
  // 23.玩法投注限额: 23.1.获取所有体育玩法限额,免登入即可访问
  type REQ = {
    // No comments found.
    platformId?: number
  }
}
// 24.namemap（赔率名称等国际化）: 24.1.赔率名称映射(免登陆)
declare namespace API_NAMEMAP_ODDS_NAME_MAP {
  // 24.namemap（赔率名称等国际化）: 24.1.赔率名称映射(免登陆)
  type RES = {
    // No comments found.
    success: boolean
    // No comments found.
    msg: string
    // No comments found.
    code: number
    // No comments found.
    rows: Array<{
      // 赔率id
      oddsId: string
      // 赛事id
      matchId: string
      // 玩法语言map，eg：{zh: 大，en: Upper}
      spreadNameMap: any
      // 扩展信息map，eg：{zh: 大，en: Upper}
      extInfoMap: any
    }>
    // 扩展信息map，eg：{zh: 大，en: Upper}
    extInfoMap: any
    // No comments found.
    total: number
  }
  // 24.namemap（赔率名称等国际化）: 24.1.赔率名称映射(免登陆)
  type REQ = {
    // 赛事id，不可为空
    matchIds?: any[]
    // 赔率id
    oddsIds?: any[]
  }
}
// 25.下注排行相关: 25.1.查询最新下注排行
declare namespace API_BETRANK_QUERYBETRANKNEWEST {
  // 25.下注排行相关: 25.1.查询最新下注排行
  type RES = {
    // No comments found.
    success: boolean
    // No comments found.
    msg: string
    // No comments found.
    code: number
    // No comments found.
    rows: Array<{
      // 用户编号
      nickName: string
      // 用户照片路径
      userIconUrl: string
      // 三方游戏编号
      gameName: string
      // 下注金额
      betAmount: number
      // 币种
      currency: string
      // 净输赢
      netWin: number
      // 下注时间
      betTime: string
      // 注单类型: 0:体育, 1:三方游戏
      type: number
      // 订单号
      orderNo: string
    }>
    // 订单号
    orderNo: string
    // No comments found.
    total: number
  }
  // 25.下注排行相关: 25.1.查询最新下注排行
  type REQ = {
    // No comments found.
    platformId?: number
    // No comments found.
    locale?: any
  }
}
// 25.下注排行相关: 25.2.查询最大盈利下注
declare namespace API_BETRANK_QUERYBETRANKMAXWIN {
  // 25.下注排行相关: 25.2.查询最大盈利下注
  type RES = {
    // No comments found.
    success: boolean
    // No comments found.
    msg: string
    // No comments found.
    code: number
    // No comments found.
    rows: Array<{
      // 用户编号
      nickName: string
      // 用户照片路径
      userIconUrl: string
      // 三方游戏编号
      gameName: string
      // 下注金额
      betAmount: number
      // 币种
      currency: string
      // 净输赢
      netWin: number
      // 下注时间
      betTime: string
      // 注单类型: 0:体育, 1:三方游戏
      type: number
      // 订单号
      orderNo: string
    }>
    // 订单号
    orderNo: string
    // No comments found.
    total: number
  }
  // 25.下注排行相关: 25.2.查询最大盈利下注
  type REQ = {
    // No comments found.
    platformId?: number
    // No comments found.
    locale?: any
  }
}
// 26.证件和人脸识别: 26.1.证件和人脸识别
declare namespace API_REALID_INITIALIZE {
  // 26.证件和人脸识别: 26.1.证件和人脸识别
  type RES = {
    // No comments found.
    success: boolean
    // No comments found.
    msg: string
    // No comments found.
    code: number
    // No comments found.
    t: {
      // No comments found.
      result: {
        // 结果代码
        resultCode: string
        // 结果状态 “S”：成功“F”：失败“U”：未知问题"VF":系统的真实姓名和证件姓名不匹配
        resultStatus: string
        // 结果消息
        resultMessage: string
      }
      // 事务唯一id
      transactionId: string
      // 客户端配置信息，包括SDK连接和行为参数
      clientCfg: string
      // rsa公钥需要传给sdk端
      rsaPubKey: string
    }
  }
  // 26.证件和人脸识别: 26.1.证件和人脸识别
  type REQ = {
    // 设备信息
    metaInfo: string
    // 证件类型
    docType: string
    // 完成回调成功的地址参数 H5用
    completeCallbackUrl?: string
    // 完成回调的中断地址参数 H5用
    interruptCallbackUrl?: string
  }
}
// 26.证件和人脸识别: 26.2.查询人脸识别的结果信息
declare namespace API_REALID_CHECKRESULT {
  // 26.证件和人脸识别: 26.2.查询人脸识别的结果信息
  type RES = {
    // No comments found.
    success: boolean
    // No comments found.
    msg: string
    // No comments found.
    code: number
    // No comments found.
    t: {
      // No comments found.
      result: {
        // 结果代码
        resultCode: string
        // 结果状态 “S”：成功“F”：失败“U”：未知问题"VF":系统的真实姓名和证件姓名不匹配
        resultStatus: string
        // 结果消息
        resultMessage: string
      }
      // 指定整个身份证明过程的运行状态 Success ：身份证明过程成功运行。Pending :身份证明过程正在等待中。 Failure ：身份证明过程失败，表示证件验证、人脸验证或风控处理中至少有一个失败。InProcess :身份证明过程正在进行中。VoidCancelled :身份证明过程被取消。VoidTimeout :身份证明过程超时。
      ekycResult: string
      // 证件相关信息
      extBasicInfo: {
        // ID 类型
        certType: string
        // ID number.
        certNo: string
        // ID name.
        certName: string
      }
      // 面部相关信息
      extFaceInfo: {
        // 指定人脸验证进程的运行状态。可能的值及其含义如下：Success ：人脸验证过程成功运行。Pending ：人脸验证过程正在等待中。Failure ：人脸验证过程失败。
        ekycResultFace: string
        // 面部自拍图像，采用 base64 编码
        faceImg: string
        // 面部活力结果
        faceLivenessResult: string
      }
      // 证件详细信息
      extIdInfo: {
        // Success : 文档验证过程成功运行。Pending : 文件验证过程待处理Failure : 文件验证过程失败。
        ekycResultDoc: string
        // 该字段的值返回为 1，而对于新的 HKID，该字段的值返回为 2。
        docEdition: number
        // 身份证件的正面图像。图像必须以 base64 编码。 仅当请求中的isReturnImage字段的值设置为Y 才会展示
        frontPageImg: string
        // 身份证件的反面图像。图像必须以 base64 编码
        backPageImg: string
        // NO_REQUIRED_ID : 上传图片识别的身份证件与指定的身份证件类型不匹配。BLUR ：上传的身份证件图像模糊。NO_FACE_DETECTED ：本应从指定的身份证件中识别出来的人脸，在上传的图像中没有按预期检测到。NOT_REAL_DOC ：上传的身份证件图片被检测为假的。EXPOSURE ：上传的身份证件图像曝光过度。UNKNOWN : 所有其他识别错误。
        docErrorDetails: string
        // 证件的详情信息
        ocrResult: {
          // 证件号码
          ID_NUMBER: string
          // 第一个名字
          FIRST_NAME: string
          // 中间名字
          MIDDLE_NAME: string
          // 最后名称
          LAST_NAME: string
          // 性别 M F
          SEX: string
          // 生日 如：1986/07/30"
          DATE_OF_BIRTH: string
          // 证件过期时间 如：2030/07/30"
          EXPIRY_DATE: string
          // 地址
          ADDRESS: string
          // 地址
          COUNTRY: string
        }
      }
    }
  }
  // 26.证件和人脸识别: 26.2.查询人脸识别的结果信息
  type REQ = {
    // 事务id
    transactionId: string
    // 是否需要传回扫描脸部图片N 和 Y
    isReturnImage?: string
  }
}
// 27.体育信息: 27.1.体育菜单,免登入即可访问
declare namespace API_SPORT_MENU {
  // 27.体育信息: 27.1.体育菜单,免登入即可访问
  type RES = {
    // No comments found.
    success: boolean
    // No comments found.
    msg: string
    // No comments found.
    code: number
    // No comments found.
    t: {
      // 滚球
      inPlay: Array<{
        // 体育名称,如：足球
        name: string
        // 体育代码,如：FT
        code: string
        // 总数量
        num: number
        // 赛事数量
        matchNum: number
        // 冠軍比赛数量
        outRightNum: number
        // 排序号
        sortNum: number
        // 玩法分类类型菜单列表
        play: Array<{
          // 玩法菜单code
          code: string
          // 玩法菜单名称
          name: string
          // 赔率大厅画面用, 1:菜单玩法支持下拉选项 0:不支持下拉选项
          selectionType: number
          // 数量
          num: number
          // 菜单底下包含的玩法类(List格式)
          playCateList: Array<{
            // 代码
            code: string
            // 玩法类名称，如：让球, 大/小
            name: string
            // 排序
            rowSort: number
            // 各语系玩法名称
            playCateNameMap: any
          }>
          // 各语系菜单名称
          nameMap: any
          // 玩法排序
          oddsSort: string
          // 玩法显示名称
          playCateNameMap: any
          // 菜单下包含的玩法类(Map格式)
          playCateMap: {
            [key: string]: {
              // 代码
              code: string
              // 玩法类名称，如：让球, 大/小
              name: string
              // 排序
              rowSort: number
              // 各语系玩法名称
              playCateNameMap: any
            }
          }
        }>
        // 是否存在滚盘中赛事，0：否，1：是
        existInPlay: number
        // 玩法菜单列表code
        playCateMenuCodeList: any[]
        // 国家列表
        categoryList: Array<{
          // 主键
          id: string
          // 游戏类型 (FT:足球，BK:篮球,TN:网球, VB:网球,BM：羽球)
          gameType: string
          // 分类名称notNull
          name: string
          // 分类code
          code: string
          // 图标,svg的html元素(已进行UrlEncoded)
          icon: string
          // 联赛列表notNull
          list: Array<{
            // 联赛id
            id: string
            // 名称
            name: string
            // 赛事数量
            num: number
            // 排序
            sort: number
            // 联盟icon
            icon: string
          }>
          // 赛事/赛季数量notNull
          num: number
          // 排序
          sort: number
        }>
      }>
      // 今日盘
      today: Array<{
        // 体育名称,如：足球
        name: string
        // 体育代码,如：FT
        code: string
        // 总数量
        num: number
        // 赛事数量
        matchNum: number
        // 冠軍比赛数量
        outRightNum: number
        // 排序号
        sortNum: number
        // 玩法分类类型菜单列表
        play: Array<{
          // 玩法菜单code
          code: string
          // 玩法菜单名称
          name: string
          // 赔率大厅画面用, 1:菜单玩法支持下拉选项 0:不支持下拉选项
          selectionType: number
          // 数量
          num: number
          // 菜单底下包含的玩法类(List格式)
          playCateList: Array<{
            // 代码
            code: string
            // 玩法类名称，如：让球, 大/小
            name: string
            // 排序
            rowSort: number
            // 各语系玩法名称
            playCateNameMap: any
          }>
          // 各语系菜单名称
          nameMap: any
          // 玩法排序
          oddsSort: string
          // 玩法显示名称
          playCateNameMap: any
          // 菜单下包含的玩法类(Map格式)
          playCateMap: {
            [key: string]: {
              // 代码
              code: string
              // 玩法类名称，如：让球, 大/小
              name: string
              // 排序
              rowSort: number
              // 各语系玩法名称
              playCateNameMap: any
            }
          }
        }>
        // 是否存在滚盘中赛事，0：否，1：是
        existInPlay: number
        // 玩法菜单列表code
        playCateMenuCodeList: any[]
        // 国家列表
        categoryList: Array<{
          // 主键
          id: string
          // 游戏类型 (FT:足球，BK:篮球,TN:网球, VB:网球,BM：羽球)
          gameType: string
          // 分类名称notNull
          name: string
          // 分类code
          code: string
          // 图标,svg的html元素(已进行UrlEncoded)
          icon: string
          // 联赛列表notNull
          list: Array<{
            // 联赛id
            id: string
            // 名称
            name: string
            // 赛事数量
            num: number
            // 排序
            sort: number
            // 联盟icon
            icon: string
          }>
          // 赛事/赛季数量notNull
          num: number
          // 排序
          sort: number
        }>
      }>
      // 早盘
      early: Array<{
        // 体育名称,如：足球
        name: string
        // 体育代码,如：FT
        code: string
        // 总数量
        num: number
        // 赛事数量
        matchNum: number
        // 冠軍比赛数量
        outRightNum: number
        // 排序号
        sortNum: number
        // 玩法分类类型菜单列表
        play: Array<{
          // 玩法菜单code
          code: string
          // 玩法菜单名称
          name: string
          // 赔率大厅画面用, 1:菜单玩法支持下拉选项 0:不支持下拉选项
          selectionType: number
          // 数量
          num: number
          // 菜单底下包含的玩法类(List格式)
          playCateList: Array<{
            // 代码
            code: string
            // 玩法类名称，如：让球, 大/小
            name: string
            // 排序
            rowSort: number
            // 各语系玩法名称
            playCateNameMap: any
          }>
          // 各语系菜单名称
          nameMap: any
          // 玩法排序
          oddsSort: string
          // 玩法显示名称
          playCateNameMap: any
          // 菜单下包含的玩法类(Map格式)
          playCateMap: {
            [key: string]: {
              // 代码
              code: string
              // 玩法类名称，如：让球, 大/小
              name: string
              // 排序
              rowSort: number
              // 各语系玩法名称
              playCateNameMap: any
            }
          }
        }>
        // 是否存在滚盘中赛事，0：否，1：是
        existInPlay: number
        // 玩法菜单列表code
        playCateMenuCodeList: any[]
        // 国家列表
        categoryList: Array<{
          // 主键
          id: string
          // 游戏类型 (FT:足球，BK:篮球,TN:网球, VB:网球,BM：羽球)
          gameType: string
          // 分类名称notNull
          name: string
          // 分类code
          code: string
          // 图标,svg的html元素(已进行UrlEncoded)
          icon: string
          // 联赛列表notNull
          list: Array<{
            // 联赛id
            id: string
            // 名称
            name: string
            // 赛事数量
            num: number
            // 排序
            sort: number
            // 联盟icon
            icon: string
          }>
          // 赛事/赛季数量notNull
          num: number
          // 排序
          sort: number
        }>
      }>
      // 连串盘
      parlay: Array<{
        // 体育名称,如：足球
        name: string
        // 体育代码,如：FT
        code: string
        // 总数量
        num: number
        // 赛事数量
        matchNum: number
        // 冠軍比赛数量
        outRightNum: number
        // 排序号
        sortNum: number
        // 玩法分类类型菜单列表
        play: Array<{
          // 玩法菜单code
          code: string
          // 玩法菜单名称
          name: string
          // 赔率大厅画面用, 1:菜单玩法支持下拉选项 0:不支持下拉选项
          selectionType: number
          // 数量
          num: number
          // 菜单底下包含的玩法类(List格式)
          playCateList: Array<{
            // 代码
            code: string
            // 玩法类名称，如：让球, 大/小
            name: string
            // 排序
            rowSort: number
            // 各语系玩法名称
            playCateNameMap: any
          }>
          // 各语系菜单名称
          nameMap: any
          // 玩法排序
          oddsSort: string
          // 玩法显示名称
          playCateNameMap: any
          // 菜单下包含的玩法类(Map格式)
          playCateMap: {
            [key: string]: {
              // 代码
              code: string
              // 玩法类名称，如：让球, 大/小
              name: string
              // 排序
              rowSort: number
              // 各语系玩法名称
              playCateNameMap: any
            }
          }
        }>
        // 是否存在滚盘中赛事，0：否，1：是
        existInPlay: number
        // 玩法菜单列表code
        playCateMenuCodeList: any[]
        // 国家列表
        categoryList: Array<{
          // 主键
          id: string
          // 游戏类型 (FT:足球，BK:篮球,TN:网球, VB:网球,BM：羽球)
          gameType: string
          // 分类名称notNull
          name: string
          // 分类code
          code: string
          // 图标,svg的html元素(已进行UrlEncoded)
          icon: string
          // 联赛列表notNull
          list: Array<{
            // 联赛id
            id: string
            // 名称
            name: string
            // 赛事数量
            num: number
            // 排序
            sort: number
            // 联盟icon
            icon: string
          }>
          // 赛事/赛季数量notNull
          num: number
          // 排序
          sort: number
        }>
      }>
      // 即将开始
      atStart: Array<{
        // 体育名称,如：足球
        name: string
        // 体育代码,如：FT
        code: string
        // 总数量
        num: number
        // 赛事数量
        matchNum: number
        // 冠軍比赛数量
        outRightNum: number
        // 排序号
        sortNum: number
        // 玩法分类类型菜单列表
        play: Array<{
          // 玩法菜单code
          code: string
          // 玩法菜单名称
          name: string
          // 赔率大厅画面用, 1:菜单玩法支持下拉选项 0:不支持下拉选项
          selectionType: number
          // 数量
          num: number
          // 菜单底下包含的玩法类(List格式)
          playCateList: Array<{
            // 代码
            code: string
            // 玩法类名称，如：让球, 大/小
            name: string
            // 排序
            rowSort: number
            // 各语系玩法名称
            playCateNameMap: any
          }>
          // 各语系菜单名称
          nameMap: any
          // 玩法排序
          oddsSort: string
          // 玩法显示名称
          playCateNameMap: any
          // 菜单下包含的玩法类(Map格式)
          playCateMap: {
            [key: string]: {
              // 代码
              code: string
              // 玩法类名称，如：让球, 大/小
              name: string
              // 排序
              rowSort: number
              // 各语系玩法名称
              playCateNameMap: any
            }
          }
        }>
        // 是否存在滚盘中赛事，0：否，1：是
        existInPlay: number
        // 玩法菜单列表code
        playCateMenuCodeList: any[]
        // 国家列表
        categoryList: Array<{
          // 主键
          id: string
          // 游戏类型 (FT:足球，BK:篮球,TN:网球, VB:网球,BM：羽球)
          gameType: string
          // 分类名称notNull
          name: string
          // 分类code
          code: string
          // 图标,svg的html元素(已进行UrlEncoded)
          icon: string
          // 联赛列表notNull
          list: Array<{
            // 联赛id
            id: string
            // 名称
            name: string
            // 赛事数量
            num: number
            // 排序
            sort: number
            // 联盟icon
            icon: string
          }>
          // 赛事/赛季数量notNull
          num: number
          // 排序
          sort: number
        }>
      }>
      // 近12小時
      in12hr: Array<{
        // 体育名称,如：足球
        name: string
        // 体育代码,如：FT
        code: string
        // 总数量
        num: number
        // 赛事数量
        matchNum: number
        // 冠軍比赛数量
        outRightNum: number
        // 排序号
        sortNum: number
        // 玩法分类类型菜单列表
        play: Array<{
          // 玩法菜单code
          code: string
          // 玩法菜单名称
          name: string
          // 赔率大厅画面用, 1:菜单玩法支持下拉选项 0:不支持下拉选项
          selectionType: number
          // 数量
          num: number
          // 菜单底下包含的玩法类(List格式)
          playCateList: Array<{
            // 代码
            code: string
            // 玩法类名称，如：让球, 大/小
            name: string
            // 排序
            rowSort: number
            // 各语系玩法名称
            playCateNameMap: any
          }>
          // 各语系菜单名称
          nameMap: any
          // 玩法排序
          oddsSort: string
          // 玩法显示名称
          playCateNameMap: any
          // 菜单下包含的玩法类(Map格式)
          playCateMap: {
            [key: string]: {
              // 代码
              code: string
              // 玩法类名称，如：让球, 大/小
              name: string
              // 排序
              rowSort: number
              // 各语系玩法名称
              playCateNameMap: any
            }
          }
        }>
        // 是否存在滚盘中赛事，0：否，1：是
        existInPlay: number
        // 玩法菜单列表code
        playCateMenuCodeList: any[]
        // 国家列表
        categoryList: Array<{
          // 主键
          id: string
          // 游戏类型 (FT:足球，BK:篮球,TN:网球, VB:网球,BM：羽球)
          gameType: string
          // 分类名称notNull
          name: string
          // 分类code
          code: string
          // 图标,svg的html元素(已进行UrlEncoded)
          icon: string
          // 联赛列表notNull
          list: Array<{
            // 联赛id
            id: string
            // 名称
            name: string
            // 赛事数量
            num: number
            // 排序
            sort: number
            // 联盟icon
            icon: string
          }>
          // 赛事/赛季数量notNull
          num: number
          // 排序
          sort: number
        }>
      }>
      // 近24小時
      in24hr: Array<{
        // 体育名称,如：足球
        name: string
        // 体育代码,如：FT
        code: string
        // 总数量
        num: number
        // 赛事数量
        matchNum: number
        // 冠軍比赛数量
        outRightNum: number
        // 排序号
        sortNum: number
        // 玩法分类类型菜单列表
        play: Array<{
          // 玩法菜单code
          code: string
          // 玩法菜单名称
          name: string
          // 赔率大厅画面用, 1:菜单玩法支持下拉选项 0:不支持下拉选项
          selectionType: number
          // 数量
          num: number
          // 菜单底下包含的玩法类(List格式)
          playCateList: Array<{
            // 代码
            code: string
            // 玩法类名称，如：让球, 大/小
            name: string
            // 排序
            rowSort: number
            // 各语系玩法名称
            playCateNameMap: any
          }>
          // 各语系菜单名称
          nameMap: any
          // 玩法排序
          oddsSort: string
          // 玩法显示名称
          playCateNameMap: any
          // 菜单下包含的玩法类(Map格式)
          playCateMap: {
            [key: string]: {
              // 代码
              code: string
              // 玩法类名称，如：让球, 大/小
              name: string
              // 排序
              rowSort: number
              // 各语系玩法名称
              playCateNameMap: any
            }
          }
        }>
        // 是否存在滚盘中赛事，0：否，1：是
        existInPlay: number
        // 玩法菜单列表code
        playCateMenuCodeList: any[]
        // 国家列表
        categoryList: Array<{
          // 主键
          id: string
          // 游戏类型 (FT:足球，BK:篮球,TN:网球, VB:网球,BM：羽球)
          gameType: string
          // 分类名称notNull
          name: string
          // 分类code
          code: string
          // 图标,svg的html元素(已进行UrlEncoded)
          icon: string
          // 联赛列表notNull
          list: Array<{
            // 联赛id
            id: string
            // 名称
            name: string
            // 赛事数量
            num: number
            // 排序
            sort: number
            // 联盟icon
            icon: string
          }>
          // 赛事/赛季数量notNull
          num: number
          // 排序
          sort: number
        }>
      }>
      // 特优赔率
      eps: Array<{
        // 体育名称,如：足球
        name: string
        // 体育代码,如：FT
        code: string
        // 总数量
        num: number
        // 赛事数量
        matchNum: number
        // 冠軍比赛数量
        outRightNum: number
        // 排序号
        sortNum: number
        // 玩法分类类型菜单列表
        play: Array<{
          // 玩法菜单code
          code: string
          // 玩法菜单名称
          name: string
          // 赔率大厅画面用, 1:菜单玩法支持下拉选项 0:不支持下拉选项
          selectionType: number
          // 数量
          num: number
          // 菜单底下包含的玩法类(List格式)
          playCateList: Array<{
            // 代码
            code: string
            // 玩法类名称，如：让球, 大/小
            name: string
            // 排序
            rowSort: number
            // 各语系玩法名称
            playCateNameMap: any
          }>
          // 各语系菜单名称
          nameMap: any
          // 玩法排序
          oddsSort: string
          // 玩法显示名称
          playCateNameMap: any
          // 菜单下包含的玩法类(Map格式)
          playCateMap: {
            [key: string]: {
              // 代码
              code: string
              // 玩法类名称，如：让球, 大/小
              name: string
              // 排序
              rowSort: number
              // 各语系玩法名称
              playCateNameMap: any
            }
          }
        }>
        // 是否存在滚盘中赛事，0：否，1：是
        existInPlay: number
        // 玩法菜单列表code
        playCateMenuCodeList: any[]
        // 国家列表
        categoryList: Array<{
          // 主键
          id: string
          // 游戏类型 (FT:足球，BK:篮球,TN:网球, VB:网球,BM：羽球)
          gameType: string
          // 分类名称notNull
          name: string
          // 分类code
          code: string
          // 图标,svg的html元素(已进行UrlEncoded)
          icon: string
          // 联赛列表notNull
          list: Array<{
            // 联赛id
            id: string
            // 名称
            name: string
            // 赛事数量
            num: number
            // 排序
            sort: number
            // 联盟icon
            icon: string
          }>
          // 赛事/赛季数量notNull
          num: number
          // 排序
          sort: number
        }>
      }>
      // 波胆(波胆&反波胆)
      cs: Array<{
        // 体育名称,如：足球
        name: string
        // 体育代码,如：FT
        code: string
        // 总数量
        num: number
        // 赛事数量
        matchNum: number
        // 冠軍比赛数量
        outRightNum: number
        // 排序号
        sortNum: number
        // 玩法分类类型菜单列表
        play: Array<{
          // 玩法菜单code
          code: string
          // 玩法菜单名称
          name: string
          // 赔率大厅画面用, 1:菜单玩法支持下拉选项 0:不支持下拉选项
          selectionType: number
          // 数量
          num: number
          // 菜单底下包含的玩法类(List格式)
          playCateList: Array<{
            // 代码
            code: string
            // 玩法类名称，如：让球, 大/小
            name: string
            // 排序
            rowSort: number
            // 各语系玩法名称
            playCateNameMap: any
          }>
          // 各语系菜单名称
          nameMap: any
          // 玩法排序
          oddsSort: string
          // 玩法显示名称
          playCateNameMap: any
          // 菜单下包含的玩法类(Map格式)
          playCateMap: {
            [key: string]: {
              // 代码
              code: string
              // 玩法类名称，如：让球, 大/小
              name: string
              // 排序
              rowSort: number
              // 各语系玩法名称
              playCateNameMap: any
            }
          }
        }>
        // 是否存在滚盘中赛事，0：否，1：是
        existInPlay: number
        // 玩法菜单列表code
        playCateMenuCodeList: any[]
        // 国家列表
        categoryList: Array<{
          // 主键
          id: string
          // 游戏类型 (FT:足球，BK:篮球,TN:网球, VB:网球,BM：羽球)
          gameType: string
          // 分类名称notNull
          name: string
          // 分类code
          code: string
          // 图标,svg的html元素(已进行UrlEncoded)
          icon: string
          // 联赛列表notNull
          list: Array<{
            // 联赛id
            id: string
            // 名称
            name: string
            // 赛事数量
            num: number
            // 排序
            sort: number
            // 联盟icon
            icon: string
          }>
          // 赛事/赛季数量notNull
          num: number
          // 排序
          sort: number
        }>
      }>
    }
  }
  // 27.体育信息: 27.1.体育菜单,免登入即可访问
  type REQ = {
    // 当下时间（时间戳格式）
    now: string | number
    // 今日开始时间（00:00:00的时间戳格式）
    todayStart: string | number
  }
}
// 27.体育信息: 27.2.返回指定画面(EX:滚球,早盘,冠军)下有赔率的球类及菜单
declare namespace API_SPORT_QUERY {
  // 27.体育信息: 27.2.返回指定画面(EX:滚球,早盘,冠军)下有赔率的球类及菜单
  type RES = {
    // No comments found.
    success: boolean
    // No comments found.
    msg: string
    // No comments found.
    code: number
    // No comments found.
    t: {
      // 比赛总数量
      num: number
      // 菜单分类,如：滚球
      items: Array<{
        // 体育名称,如：足球
        name: string
        // 体育代码,如：FT
        code: string
        // 总数量
        num: number
        // 赛事数量
        matchNum: number
        // 冠軍比赛数量
        outRightNum: number
        // 排序号
        sortNum: number
        // 玩法分类类型菜单列表
        play: Array<{
          // 玩法菜单code
          code: string
          // 玩法菜单名称
          name: string
          // 赔率大厅画面用, 1:菜单玩法支持下拉选项 0:不支持下拉选项
          selectionType: number
          // 数量
          num: number
          // 菜单底下包含的玩法类(List格式)
          playCateList: Array<{
            // 代码
            code: string
            // 玩法类名称，如：让球, 大/小
            name: string
            // 排序
            rowSort: number
            // 各语系玩法名称
            playCateNameMap: any
          }>
          // 各语系菜单名称
          nameMap: any
          // 玩法排序
          oddsSort: string
          // 玩法显示名称
          playCateNameMap: any
          // 菜单下包含的玩法类(Map格式)
          playCateMap: {
            [key: string]: {
              // 代码
              code: string
              // 玩法类名称，如：让球, 大/小
              name: string
              // 排序
              rowSort: number
              // 各语系玩法名称
              playCateNameMap: any
            }
          }
        }>
        // 是否存在滚盘中赛事，0：否，1：是
        existInPlay: number
        // 玩法菜单列表code
        playCateMenuCodeList: any[]
        // 国家列表
        categoryList: Array<{
          // 主键
          id: string
          // 游戏类型 (FT:足球，BK:篮球,TN:网球, VB:网球,BM：羽球)
          gameType: string
          // 分类名称notNull
          name: string
          // 分类code
          code: string
          // 图标,svg的html元素(已进行UrlEncoded)
          icon: string
          // 联赛列表notNull
          list: Array<{
            // 联赛id
            id: string
            // 名称
            name: string
            // 赛事数量
            num: number
            // 排序
            sort: number
            // 联盟icon
            icon: string
          }>
          // 赛事/赛季数量notNull
          num: number
          // 排序
          sort: number
        }>
      }>
      // 排序
      sort: number
      // 赛事比赛数量
      matchNum: number
      // 冠軍比赛数量
      outRightNum: number
    }
  }
  // 27.体育信息: 27.2.返回指定画面(EX:滚球,早盘,冠军)下有赔率的球类及菜单
  type REQ = {
    // 当下时间（时间戳格式）
    now: string | number
    // 今日开始时间（00:00:00的时间戳格式）
    todayStart: string | number
    // 赛事类型,eg: INPLAY(滚球）, ATSTART（即将开赛）, IN1HR(近1小時), IN3HR(近3小時),IN6HR(近6小時), IN12HR(近12小時), IN24HR(近24小時), TODAY（今日）, EARLY(早盘), OUTRIGHT（冠军）, PARLAY（串连）, EPS(特优赔率）, MYEVENT(我的赛事）, CATEGORY(参赛表）sc:xxx （特殊参赛表（专题）例如：奥运会冠军）, CS (波胆)
    matchType: string
    // 联赛或赛季id列表
    leagueIdList?: any[]
    // 赛事id列表(我的赛事接口才需要的参数,传入会员已加入最爱的赛事id列表)
    matchIdList?: any[]
    // Season id列表(我的赛事接口才需要的参数,传入会员已加入最爱的赛事id列表)
    seasonIdList?: any[]
    // 球类编码,目前只有使用参赛表访问时需要传此参数
    gameType?: string
  }
}
// 27.体育信息: 27.3.手机版体育菜单,免登入即可访问
declare namespace API_SPORT_MOBILE_MENU {
  // 27.体育信息: 27.3.手机版体育菜单,免登入即可访问
  type RES = {
    // No comments found.
    success: boolean
    // No comments found.
    msg: string
    // No comments found.
    code: number
    // No comments found.
    t: {
      // No comments found.
      menu: {
        // 滚球
        inPlay: {
          // 比赛总数量
          num: number
          // 菜单分类,如：滚球
          items: Array<{
            // 体育名称,如：足球
            name: string
            // 体育代码,如：FT
            code: string
            // 总数量
            num: number
            // 赛事数量
            matchNum: number
            // 冠軍比赛数量
            outRightNum: number
            // 排序号
            sortNum: number
            // 玩法分类类型菜单列表
            play: Array<{
              // 玩法菜单code
              code: string
              // 玩法菜单名称
              name: string
              // 赔率大厅画面用, 1:菜单玩法支持下拉选项 0:不支持下拉选项
              selectionType: number
              // 数量
              num: number
              // 菜单底下包含的玩法类(List格式)
              playCateList: Array<{
                // 代码
                code: string
                // 玩法类名称，如：让球, 大/小
                name: string
                // 排序
                rowSort: number
                // 各语系玩法名称
                playCateNameMap: any
              }>
              // 各语系菜单名称
              nameMap: any
              // 玩法排序
              oddsSort: string
              // 玩法显示名称
              playCateNameMap: any
              // 菜单下包含的玩法类(Map格式)
              playCateMap: {
                [key: string]: {
                  // 代码
                  code: string
                  // 玩法类名称，如：让球, 大/小
                  name: string
                  // 排序
                  rowSort: number
                  // 各语系玩法名称
                  playCateNameMap: any
                }
              }
            }>
            // 是否存在滚盘中赛事，0：否，1：是
            existInPlay: number
            // 玩法菜单列表code
            playCateMenuCodeList: any[]
            // 国家列表
            categoryList: Array<{
              // 主键
              id: string
              // 游戏类型 (FT:足球，BK:篮球,TN:网球, VB:网球,BM：羽球)
              gameType: string
              // 分类名称notNull
              name: string
              // 分类code
              code: string
              // 图标,svg的html元素(已进行UrlEncoded)
              icon: string
              // 联赛列表notNull
              list: Array<{
                // 联赛id
                id: string
                // 名称
                name: string
                // 赛事数量
                num: number
                // 排序
                sort: number
                // 联盟icon
                icon: string
              }>
              // 赛事/赛季数量notNull
              num: number
              // 排序
              sort: number
            }>
          }>
          // 排序
          sort: number
          // 赛事比赛数量
          matchNum: number
          // 冠軍比赛数量
          outRightNum: number
        }
        // 今日盘
        today: {
          // 比赛总数量
          num: number
          // 菜单分类,如：滚球
          items: Array<{
            // 体育名称,如：足球
            name: string
            // 体育代码,如：FT
            code: string
            // 总数量
            num: number
            // 赛事数量
            matchNum: number
            // 冠軍比赛数量
            outRightNum: number
            // 排序号
            sortNum: number
            // 玩法分类类型菜单列表
            play: Array<{
              // 玩法菜单code
              code: string
              // 玩法菜单名称
              name: string
              // 赔率大厅画面用, 1:菜单玩法支持下拉选项 0:不支持下拉选项
              selectionType: number
              // 数量
              num: number
              // 菜单底下包含的玩法类(List格式)
              playCateList: Array<{
                // 代码
                code: string
                // 玩法类名称，如：让球, 大/小
                name: string
                // 排序
                rowSort: number
                // 各语系玩法名称
                playCateNameMap: any
              }>
              // 各语系菜单名称
              nameMap: any
              // 玩法排序
              oddsSort: string
              // 玩法显示名称
              playCateNameMap: any
              // 菜单下包含的玩法类(Map格式)
              playCateMap: {
                [key: string]: {
                  // 代码
                  code: string
                  // 玩法类名称，如：让球, 大/小
                  name: string
                  // 排序
                  rowSort: number
                  // 各语系玩法名称
                  playCateNameMap: any
                }
              }
            }>
            // 是否存在滚盘中赛事，0：否，1：是
            existInPlay: number
            // 玩法菜单列表code
            playCateMenuCodeList: any[]
            // 国家列表
            categoryList: Array<{
              // 主键
              id: string
              // 游戏类型 (FT:足球，BK:篮球,TN:网球, VB:网球,BM：羽球)
              gameType: string
              // 分类名称notNull
              name: string
              // 分类code
              code: string
              // 图标,svg的html元素(已进行UrlEncoded)
              icon: string
              // 联赛列表notNull
              list: Array<{
                // 联赛id
                id: string
                // 名称
                name: string
                // 赛事数量
                num: number
                // 排序
                sort: number
                // 联盟icon
                icon: string
              }>
              // 赛事/赛季数量notNull
              num: number
              // 排序
              sort: number
            }>
          }>
          // 排序
          sort: number
          // 赛事比赛数量
          matchNum: number
          // 冠軍比赛数量
          outRightNum: number
        }
        // 早盘
        early: {
          // 比赛总数量
          num: number
          // 菜单分类,如：滚球
          items: Array<{
            // 体育名称,如：足球
            name: string
            // 体育代码,如：FT
            code: string
            // 总数量
            num: number
            // 赛事数量
            matchNum: number
            // 冠軍比赛数量
            outRightNum: number
            // 排序号
            sortNum: number
            // 玩法分类类型菜单列表
            play: Array<{
              // 玩法菜单code
              code: string
              // 玩法菜单名称
              name: string
              // 赔率大厅画面用, 1:菜单玩法支持下拉选项 0:不支持下拉选项
              selectionType: number
              // 数量
              num: number
              // 菜单底下包含的玩法类(List格式)
              playCateList: Array<{
                // 代码
                code: string
                // 玩法类名称，如：让球, 大/小
                name: string
                // 排序
                rowSort: number
                // 各语系玩法名称
                playCateNameMap: any
              }>
              // 各语系菜单名称
              nameMap: any
              // 玩法排序
              oddsSort: string
              // 玩法显示名称
              playCateNameMap: any
              // 菜单下包含的玩法类(Map格式)
              playCateMap: {
                [key: string]: {
                  // 代码
                  code: string
                  // 玩法类名称，如：让球, 大/小
                  name: string
                  // 排序
                  rowSort: number
                  // 各语系玩法名称
                  playCateNameMap: any
                }
              }
            }>
            // 是否存在滚盘中赛事，0：否，1：是
            existInPlay: number
            // 玩法菜单列表code
            playCateMenuCodeList: any[]
            // 国家列表
            categoryList: Array<{
              // 主键
              id: string
              // 游戏类型 (FT:足球，BK:篮球,TN:网球, VB:网球,BM：羽球)
              gameType: string
              // 分类名称notNull
              name: string
              // 分类code
              code: string
              // 图标,svg的html元素(已进行UrlEncoded)
              icon: string
              // 联赛列表notNull
              list: Array<{
                // 联赛id
                id: string
                // 名称
                name: string
                // 赛事数量
                num: number
                // 排序
                sort: number
                // 联盟icon
                icon: string
              }>
              // 赛事/赛季数量notNull
              num: number
              // 排序
              sort: number
            }>
          }>
          // 排序
          sort: number
          // 赛事比赛数量
          matchNum: number
          // 冠軍比赛数量
          outRightNum: number
        }
        // 连串盘
        parlay: {
          // 比赛总数量
          num: number
          // 菜单分类,如：滚球
          items: Array<{
            // 体育名称,如：足球
            name: string
            // 体育代码,如：FT
            code: string
            // 总数量
            num: number
            // 赛事数量
            matchNum: number
            // 冠軍比赛数量
            outRightNum: number
            // 排序号
            sortNum: number
            // 玩法分类类型菜单列表
            play: Array<{
              // 玩法菜单code
              code: string
              // 玩法菜单名称
              name: string
              // 赔率大厅画面用, 1:菜单玩法支持下拉选项 0:不支持下拉选项
              selectionType: number
              // 数量
              num: number
              // 菜单底下包含的玩法类(List格式)
              playCateList: Array<{
                // 代码
                code: string
                // 玩法类名称，如：让球, 大/小
                name: string
                // 排序
                rowSort: number
                // 各语系玩法名称
                playCateNameMap: any
              }>
              // 各语系菜单名称
              nameMap: any
              // 玩法排序
              oddsSort: string
              // 玩法显示名称
              playCateNameMap: any
              // 菜单下包含的玩法类(Map格式)
              playCateMap: {
                [key: string]: {
                  // 代码
                  code: string
                  // 玩法类名称，如：让球, 大/小
                  name: string
                  // 排序
                  rowSort: number
                  // 各语系玩法名称
                  playCateNameMap: any
                }
              }
            }>
            // 是否存在滚盘中赛事，0：否，1：是
            existInPlay: number
            // 玩法菜单列表code
            playCateMenuCodeList: any[]
            // 国家列表
            categoryList: Array<{
              // 主键
              id: string
              // 游戏类型 (FT:足球，BK:篮球,TN:网球, VB:网球,BM：羽球)
              gameType: string
              // 分类名称notNull
              name: string
              // 分类code
              code: string
              // 图标,svg的html元素(已进行UrlEncoded)
              icon: string
              // 联赛列表notNull
              list: Array<{
                // 联赛id
                id: string
                // 名称
                name: string
                // 赛事数量
                num: number
                // 排序
                sort: number
                // 联盟icon
                icon: string
              }>
              // 赛事/赛季数量notNull
              num: number
              // 排序
              sort: number
            }>
          }>
          // 排序
          sort: number
          // 赛事比赛数量
          matchNum: number
          // 冠軍比赛数量
          outRightNum: number
        }
        // 冠军
        outright: {
          // 比赛总数量
          num: number
          // 菜单分类,如：滚球
          items: Array<{
            // 体育名称,如：足球
            name: string
            // 体育代码,如：FT
            code: string
            // 总数量
            num: number
            // 赛事数量
            matchNum: number
            // 冠軍比赛数量
            outRightNum: number
            // 排序号
            sortNum: number
            // 玩法分类类型菜单列表
            play: Array<{
              // 玩法菜单code
              code: string
              // 玩法菜单名称
              name: string
              // 赔率大厅画面用, 1:菜单玩法支持下拉选项 0:不支持下拉选项
              selectionType: number
              // 数量
              num: number
              // 菜单底下包含的玩法类(List格式)
              playCateList: Array<{
                // 代码
                code: string
                // 玩法类名称，如：让球, 大/小
                name: string
                // 排序
                rowSort: number
                // 各语系玩法名称
                playCateNameMap: any
              }>
              // 各语系菜单名称
              nameMap: any
              // 玩法排序
              oddsSort: string
              // 玩法显示名称
              playCateNameMap: any
              // 菜单下包含的玩法类(Map格式)
              playCateMap: {
                [key: string]: {
                  // 代码
                  code: string
                  // 玩法类名称，如：让球, 大/小
                  name: string
                  // 排序
                  rowSort: number
                  // 各语系玩法名称
                  playCateNameMap: any
                }
              }
            }>
            // 是否存在滚盘中赛事，0：否，1：是
            existInPlay: number
            // 玩法菜单列表code
            playCateMenuCodeList: any[]
            // 国家列表
            categoryList: Array<{
              // 主键
              id: string
              // 游戏类型 (FT:足球，BK:篮球,TN:网球, VB:网球,BM：羽球)
              gameType: string
              // 分类名称notNull
              name: string
              // 分类code
              code: string
              // 图标,svg的html元素(已进行UrlEncoded)
              icon: string
              // 联赛列表notNull
              list: Array<{
                // 联赛id
                id: string
                // 名称
                name: string
                // 赛事数量
                num: number
                // 排序
                sort: number
                // 联盟icon
                icon: string
              }>
              // 赛事/赛季数量notNull
              num: number
              // 排序
              sort: number
            }>
          }>
          // 排序
          sort: number
          // 赛事比赛数量
          matchNum: number
          // 冠軍比赛数量
          outRightNum: number
        }
        // 特优赔率
        eps: {
          // 比赛总数量
          num: number
          // 菜单分类,如：滚球
          items: Array<{
            // 体育名称,如：足球
            name: string
            // 体育代码,如：FT
            code: string
            // 总数量
            num: number
            // 赛事数量
            matchNum: number
            // 冠軍比赛数量
            outRightNum: number
            // 排序号
            sortNum: number
            // 玩法分类类型菜单列表
            play: Array<{
              // 玩法菜单code
              code: string
              // 玩法菜单名称
              name: string
              // 赔率大厅画面用, 1:菜单玩法支持下拉选项 0:不支持下拉选项
              selectionType: number
              // 数量
              num: number
              // 菜单底下包含的玩法类(List格式)
              playCateList: Array<{
                // 代码
                code: string
                // 玩法类名称，如：让球, 大/小
                name: string
                // 排序
                rowSort: number
                // 各语系玩法名称
                playCateNameMap: any
              }>
              // 各语系菜单名称
              nameMap: any
              // 玩法排序
              oddsSort: string
              // 玩法显示名称
              playCateNameMap: any
              // 菜单下包含的玩法类(Map格式)
              playCateMap: {
                [key: string]: {
                  // 代码
                  code: string
                  // 玩法类名称，如：让球, 大/小
                  name: string
                  // 排序
                  rowSort: number
                  // 各语系玩法名称
                  playCateNameMap: any
                }
              }
            }>
            // 是否存在滚盘中赛事，0：否，1：是
            existInPlay: number
            // 玩法菜单列表code
            playCateMenuCodeList: any[]
            // 国家列表
            categoryList: Array<{
              // 主键
              id: string
              // 游戏类型 (FT:足球，BK:篮球,TN:网球, VB:网球,BM：羽球)
              gameType: string
              // 分类名称notNull
              name: string
              // 分类code
              code: string
              // 图标,svg的html元素(已进行UrlEncoded)
              icon: string
              // 联赛列表notNull
              list: Array<{
                // 联赛id
                id: string
                // 名称
                name: string
                // 赛事数量
                num: number
                // 排序
                sort: number
                // 联盟icon
                icon: string
              }>
              // 赛事/赛季数量notNull
              num: number
              // 排序
              sort: number
            }>
          }>
          // 排序
          sort: number
          // 赛事比赛数量
          matchNum: number
          // 冠軍比赛数量
          outRightNum: number
        }
        // 波胆菜单
        cs: {
          // 比赛总数量
          num: number
          // 菜单分类,如：滚球
          items: Array<{
            // 体育名称,如：足球
            name: string
            // 体育代码,如：FT
            code: string
            // 总数量
            num: number
            // 赛事数量
            matchNum: number
            // 冠軍比赛数量
            outRightNum: number
            // 排序号
            sortNum: number
            // 玩法分类类型菜单列表
            play: Array<{
              // 玩法菜单code
              code: string
              // 玩法菜单名称
              name: string
              // 赔率大厅画面用, 1:菜单玩法支持下拉选项 0:不支持下拉选项
              selectionType: number
              // 数量
              num: number
              // 菜单底下包含的玩法类(List格式)
              playCateList: Array<{
                // 代码
                code: string
                // 玩法类名称，如：让球, 大/小
                name: string
                // 排序
                rowSort: number
                // 各语系玩法名称
                playCateNameMap: any
              }>
              // 各语系菜单名称
              nameMap: any
              // 玩法排序
              oddsSort: string
              // 玩法显示名称
              playCateNameMap: any
              // 菜单下包含的玩法类(Map格式)
              playCateMap: {
                [key: string]: {
                  // 代码
                  code: string
                  // 玩法类名称，如：让球, 大/小
                  name: string
                  // 排序
                  rowSort: number
                  // 各语系玩法名称
                  playCateNameMap: any
                }
              }
            }>
            // 是否存在滚盘中赛事，0：否，1：是
            existInPlay: number
            // 玩法菜单列表code
            playCateMenuCodeList: any[]
            // 国家列表
            categoryList: Array<{
              // 主键
              id: string
              // 游戏类型 (FT:足球，BK:篮球,TN:网球, VB:网球,BM：羽球)
              gameType: string
              // 分类名称notNull
              name: string
              // 分类code
              code: string
              // 图标,svg的html元素(已进行UrlEncoded)
              icon: string
              // 联赛列表notNull
              list: Array<{
                // 联赛id
                id: string
                // 名称
                name: string
                // 赛事数量
                num: number
                // 排序
                sort: number
                // 联盟icon
                icon: string
              }>
              // 赛事/赛季数量notNull
              num: number
              // 排序
              sort: number
            }>
          }>
          // 排序
          sort: number
          // 赛事比赛数量
          matchNum: number
          // 冠軍比赛数量
          outRightNum: number
        }
        // 我的赛事
        myFavorite: {
          // 比赛总数量
          num: number
          // 菜单分类,如：滚球
          items: Array<{
            // 体育名称,如：足球
            name: string
            // 体育代码,如：FT
            code: string
            // 总数量
            num: number
            // 赛事数量
            matchNum: number
            // 冠軍比赛数量
            outRightNum: number
            // 排序号
            sortNum: number
            // 玩法分类类型菜单列表
            play: Array<{
              // 玩法菜单code
              code: string
              // 玩法菜单名称
              name: string
              // 赔率大厅画面用, 1:菜单玩法支持下拉选项 0:不支持下拉选项
              selectionType: number
              // 数量
              num: number
              // 菜单底下包含的玩法类(List格式)
              playCateList: Array<{
                // 代码
                code: string
                // 玩法类名称，如：让球, 大/小
                name: string
                // 排序
                rowSort: number
                // 各语系玩法名称
                playCateNameMap: any
              }>
              // 各语系菜单名称
              nameMap: any
              // 玩法排序
              oddsSort: string
              // 玩法显示名称
              playCateNameMap: any
              // 菜单下包含的玩法类(Map格式)
              playCateMap: {
                [key: string]: {
                  // 代码
                  code: string
                  // 玩法类名称，如：让球, 大/小
                  name: string
                  // 排序
                  rowSort: number
                  // 各语系玩法名称
                  playCateNameMap: any
                }
              }
            }>
            // 是否存在滚盘中赛事，0：否，1：是
            existInPlay: number
            // 玩法菜单列表code
            playCateMenuCodeList: any[]
            // 国家列表
            categoryList: Array<{
              // 主键
              id: string
              // 游戏类型 (FT:足球，BK:篮球,TN:网球, VB:网球,BM：羽球)
              gameType: string
              // 分类名称notNull
              name: string
              // 分类code
              code: string
              // 图标,svg的html元素(已进行UrlEncoded)
              icon: string
              // 联赛列表notNull
              list: Array<{
                // 联赛id
                id: string
                // 名称
                name: string
                // 赛事数量
                num: number
                // 排序
                sort: number
                // 联盟icon
                icon: string
              }>
              // 赛事/赛季数量notNull
              num: number
              // 排序
              sort: number
            }>
          }>
          // 排序
          sort: number
          // 赛事比赛数量
          matchNum: number
          // 冠軍比赛数量
          outRightNum: number
        }
      }
      // 即将开始
      atStart: {
        // 比赛总数量
        num: number
        // 菜单分类,如：滚球
        items: Array<{
          // 体育名称,如：足球
          name: string
          // 体育代码,如：FT
          code: string
          // 总数量
          num: number
          // 赛事数量
          matchNum: number
          // 冠軍比赛数量
          outRightNum: number
          // 排序号
          sortNum: number
          // 玩法分类类型菜单列表
          play: Array<{
            // 玩法菜单code
            code: string
            // 玩法菜单名称
            name: string
            // 赔率大厅画面用, 1:菜单玩法支持下拉选项 0:不支持下拉选项
            selectionType: number
            // 数量
            num: number
            // 菜单底下包含的玩法类(List格式)
            playCateList: Array<{
              // 代码
              code: string
              // 玩法类名称，如：让球, 大/小
              name: string
              // 排序
              rowSort: number
              // 各语系玩法名称
              playCateNameMap: any
            }>
            // 各语系菜单名称
            nameMap: any
            // 玩法排序
            oddsSort: string
            // 玩法显示名称
            playCateNameMap: any
            // 菜单下包含的玩法类(Map格式)
            playCateMap: {
              [key: string]: {
                // 代码
                code: string
                // 玩法类名称，如：让球, 大/小
                name: string
                // 排序
                rowSort: number
                // 各语系玩法名称
                playCateNameMap: any
              }
            }
          }>
          // 是否存在滚盘中赛事，0：否，1：是
          existInPlay: number
          // 玩法菜单列表code
          playCateMenuCodeList: any[]
          // 国家列表
          categoryList: Array<{
            // 主键
            id: string
            // 游戏类型 (FT:足球，BK:篮球,TN:网球, VB:网球,BM：羽球)
            gameType: string
            // 分类名称notNull
            name: string
            // 分类code
            code: string
            // 图标,svg的html元素(已进行UrlEncoded)
            icon: string
            // 联赛列表notNull
            list: Array<{
              // 联赛id
              id: string
              // 名称
              name: string
              // 赛事数量
              num: number
              // 排序
              sort: number
              // 联盟icon
              icon: string
            }>
            // 赛事/赛季数量notNull
            num: number
            // 排序
            sort: number
          }>
        }>
        // 排序
        sort: number
        // 赛事比赛数量
        matchNum: number
        // 冠軍比赛数量
        outRightNum: number
      }
      // IN12HR
      in12hr: {
        // 比赛总数量
        num: number
        // 菜单分类,如：滚球
        items: Array<{
          // 体育名称,如：足球
          name: string
          // 体育代码,如：FT
          code: string
          // 总数量
          num: number
          // 赛事数量
          matchNum: number
          // 冠軍比赛数量
          outRightNum: number
          // 排序号
          sortNum: number
          // 玩法分类类型菜单列表
          play: Array<{
            // 玩法菜单code
            code: string
            // 玩法菜单名称
            name: string
            // 赔率大厅画面用, 1:菜单玩法支持下拉选项 0:不支持下拉选项
            selectionType: number
            // 数量
            num: number
            // 菜单底下包含的玩法类(List格式)
            playCateList: Array<{
              // 代码
              code: string
              // 玩法类名称，如：让球, 大/小
              name: string
              // 排序
              rowSort: number
              // 各语系玩法名称
              playCateNameMap: any
            }>
            // 各语系菜单名称
            nameMap: any
            // 玩法排序
            oddsSort: string
            // 玩法显示名称
            playCateNameMap: any
            // 菜单下包含的玩法类(Map格式)
            playCateMap: {
              [key: string]: {
                // 代码
                code: string
                // 玩法类名称，如：让球, 大/小
                name: string
                // 排序
                rowSort: number
                // 各语系玩法名称
                playCateNameMap: any
              }
            }
          }>
          // 是否存在滚盘中赛事，0：否，1：是
          existInPlay: number
          // 玩法菜单列表code
          playCateMenuCodeList: any[]
          // 国家列表
          categoryList: Array<{
            // 主键
            id: string
            // 游戏类型 (FT:足球，BK:篮球,TN:网球, VB:网球,BM：羽球)
            gameType: string
            // 分类名称notNull
            name: string
            // 分类code
            code: string
            // 图标,svg的html元素(已进行UrlEncoded)
            icon: string
            // 联赛列表notNull
            list: Array<{
              // 联赛id
              id: string
              // 名称
              name: string
              // 赛事数量
              num: number
              // 排序
              sort: number
              // 联盟icon
              icon: string
            }>
            // 赛事/赛季数量notNull
            num: number
            // 排序
            sort: number
          }>
        }>
        // 排序
        sort: number
        // 赛事比赛数量
        matchNum: number
        // 冠軍比赛数量
        outRightNum: number
      }
      // IN24HR
      in24hr: {
        // 比赛总数量
        num: number
        // 菜单分类,如：滚球
        items: Array<{
          // 体育名称,如：足球
          name: string
          // 体育代码,如：FT
          code: string
          // 总数量
          num: number
          // 赛事数量
          matchNum: number
          // 冠軍比赛数量
          outRightNum: number
          // 排序号
          sortNum: number
          // 玩法分类类型菜单列表
          play: Array<{
            // 玩法菜单code
            code: string
            // 玩法菜单名称
            name: string
            // 赔率大厅画面用, 1:菜单玩法支持下拉选项 0:不支持下拉选项
            selectionType: number
            // 数量
            num: number
            // 菜单底下包含的玩法类(List格式)
            playCateList: Array<{
              // 代码
              code: string
              // 玩法类名称，如：让球, 大/小
              name: string
              // 排序
              rowSort: number
              // 各语系玩法名称
              playCateNameMap: any
            }>
            // 各语系菜单名称
            nameMap: any
            // 玩法排序
            oddsSort: string
            // 玩法显示名称
            playCateNameMap: any
            // 菜单下包含的玩法类(Map格式)
            playCateMap: {
              [key: string]: {
                // 代码
                code: string
                // 玩法类名称，如：让球, 大/小
                name: string
                // 排序
                rowSort: number
                // 各语系玩法名称
                playCateNameMap: any
              }
            }
          }>
          // 是否存在滚盘中赛事，0：否，1：是
          existInPlay: number
          // 玩法菜单列表code
          playCateMenuCodeList: any[]
          // 国家列表
          categoryList: Array<{
            // 主键
            id: string
            // 游戏类型 (FT:足球，BK:篮球,TN:网球, VB:网球,BM：羽球)
            gameType: string
            // 分类名称notNull
            name: string
            // 分类code
            code: string
            // 图标,svg的html元素(已进行UrlEncoded)
            icon: string
            // 联赛列表notNull
            list: Array<{
              // 联赛id
              id: string
              // 名称
              name: string
              // 赛事数量
              num: number
              // 排序
              sort: number
              // 联盟icon
              icon: string
            }>
            // 赛事/赛季数量notNull
            num: number
            // 排序
            sort: number
          }>
        }>
        // 排序
        sort: number
        // 赛事比赛数量
        matchNum: number
        // 冠軍比赛数量
        outRightNum: number
      }
    }
  }
  // 27.体育信息: 27.3.手机版体育菜单,免登入即可访问
  type REQ = {
    // 当下时间（时间戳格式）
    now: string | number
    // 今日开始时间（00:00:00的时间戳格式）
    todayStart: string | number
    // 赛事类型
    gameType?: string
    // 多球种时傳入字串內容,不同球种之间使用逗号分隔,顺序高的球种要排前面
    gameTypes?: string
  }
}
// 27.体育信息: 27.4.PC版体育左侧边栏,免登入即可访问
declare namespace API_SPORT_PC_MENU {
  // 27.体育信息: 27.4.PC版体育左侧边栏,免登入即可访问
  type RES = {
    // No comments found.
    success: boolean
    // No comments found.
    msg: string
    // No comments found.
    code: number
    // No comments found.
    t: {
      // 滚球
      inPlay: {
        // 比赛总数量
        num: number
        // 菜单分类,如：滚球
        items: Array<{
          // 体育名称,如：足球
          name: string
          // 体育代码,如：FT
          code: string
          // 总数量
          num: number
          // 赛事数量
          matchNum: number
          // 冠軍比赛数量
          outRightNum: number
          // 排序号
          sortNum: number
          // 玩法分类类型菜单列表
          play: Array<{
            // 玩法菜单code
            code: string
            // 玩法菜单名称
            name: string
            // 赔率大厅画面用, 1:菜单玩法支持下拉选项 0:不支持下拉选项
            selectionType: number
            // 数量
            num: number
            // 菜单底下包含的玩法类(List格式)
            playCateList: Array<{
              // 代码
              code: string
              // 玩法类名称，如：让球, 大/小
              name: string
              // 排序
              rowSort: number
              // 各语系玩法名称
              playCateNameMap: any
            }>
            // 各语系菜单名称
            nameMap: any
            // 玩法排序
            oddsSort: string
            // 玩法显示名称
            playCateNameMap: any
            // 菜单下包含的玩法类(Map格式)
            playCateMap: {
              [key: string]: {
                // 代码
                code: string
                // 玩法类名称，如：让球, 大/小
                name: string
                // 排序
                rowSort: number
                // 各语系玩法名称
                playCateNameMap: any
              }
            }
          }>
          // 是否存在滚盘中赛事，0：否，1：是
          existInPlay: number
          // 玩法菜单列表code
          playCateMenuCodeList: any[]
          // 国家列表
          categoryList: Array<{
            // 主键
            id: string
            // 游戏类型 (FT:足球，BK:篮球,TN:网球, VB:网球,BM：羽球)
            gameType: string
            // 分类名称notNull
            name: string
            // 分类code
            code: string
            // 图标,svg的html元素(已进行UrlEncoded)
            icon: string
            // 联赛列表notNull
            list: Array<{
              // 联赛id
              id: string
              // 名称
              name: string
              // 赛事数量
              num: number
              // 排序
              sort: number
              // 联盟icon
              icon: string
            }>
            // 赛事/赛季数量notNull
            num: number
            // 排序
            sort: number
          }>
        }>
        // 排序
        sort: number
        // 赛事比赛数量
        matchNum: number
        // 冠軍比赛数量
        outRightNum: number
      }
      // 今日盘
      today: {
        // 比赛总数量
        num: number
        // 菜单分类,如：滚球
        items: Array<{
          // 体育名称,如：足球
          name: string
          // 体育代码,如：FT
          code: string
          // 总数量
          num: number
          // 赛事数量
          matchNum: number
          // 冠軍比赛数量
          outRightNum: number
          // 排序号
          sortNum: number
          // 玩法分类类型菜单列表
          play: Array<{
            // 玩法菜单code
            code: string
            // 玩法菜单名称
            name: string
            // 赔率大厅画面用, 1:菜单玩法支持下拉选项 0:不支持下拉选项
            selectionType: number
            // 数量
            num: number
            // 菜单底下包含的玩法类(List格式)
            playCateList: Array<{
              // 代码
              code: string
              // 玩法类名称，如：让球, 大/小
              name: string
              // 排序
              rowSort: number
              // 各语系玩法名称
              playCateNameMap: any
            }>
            // 各语系菜单名称
            nameMap: any
            // 玩法排序
            oddsSort: string
            // 玩法显示名称
            playCateNameMap: any
            // 菜单下包含的玩法类(Map格式)
            playCateMap: {
              [key: string]: {
                // 代码
                code: string
                // 玩法类名称，如：让球, 大/小
                name: string
                // 排序
                rowSort: number
                // 各语系玩法名称
                playCateNameMap: any
              }
            }
          }>
          // 是否存在滚盘中赛事，0：否，1：是
          existInPlay: number
          // 玩法菜单列表code
          playCateMenuCodeList: any[]
          // 国家列表
          categoryList: Array<{
            // 主键
            id: string
            // 游戏类型 (FT:足球，BK:篮球,TN:网球, VB:网球,BM：羽球)
            gameType: string
            // 分类名称notNull
            name: string
            // 分类code
            code: string
            // 图标,svg的html元素(已进行UrlEncoded)
            icon: string
            // 联赛列表notNull
            list: Array<{
              // 联赛id
              id: string
              // 名称
              name: string
              // 赛事数量
              num: number
              // 排序
              sort: number
              // 联盟icon
              icon: string
            }>
            // 赛事/赛季数量notNull
            num: number
            // 排序
            sort: number
          }>
        }>
        // 排序
        sort: number
        // 赛事比赛数量
        matchNum: number
        // 冠軍比赛数量
        outRightNum: number
      }
      // 早盘
      early: {
        // 比赛总数量
        num: number
        // 菜单分类,如：滚球
        items: Array<{
          // 体育名称,如：足球
          name: string
          // 体育代码,如：FT
          code: string
          // 总数量
          num: number
          // 赛事数量
          matchNum: number
          // 冠軍比赛数量
          outRightNum: number
          // 排序号
          sortNum: number
          // 玩法分类类型菜单列表
          play: Array<{
            // 玩法菜单code
            code: string
            // 玩法菜单名称
            name: string
            // 赔率大厅画面用, 1:菜单玩法支持下拉选项 0:不支持下拉选项
            selectionType: number
            // 数量
            num: number
            // 菜单底下包含的玩法类(List格式)
            playCateList: Array<{
              // 代码
              code: string
              // 玩法类名称，如：让球, 大/小
              name: string
              // 排序
              rowSort: number
              // 各语系玩法名称
              playCateNameMap: any
            }>
            // 各语系菜单名称
            nameMap: any
            // 玩法排序
            oddsSort: string
            // 玩法显示名称
            playCateNameMap: any
            // 菜单下包含的玩法类(Map格式)
            playCateMap: {
              [key: string]: {
                // 代码
                code: string
                // 玩法类名称，如：让球, 大/小
                name: string
                // 排序
                rowSort: number
                // 各语系玩法名称
                playCateNameMap: any
              }
            }
          }>
          // 是否存在滚盘中赛事，0：否，1：是
          existInPlay: number
          // 玩法菜单列表code
          playCateMenuCodeList: any[]
          // 国家列表
          categoryList: Array<{
            // 主键
            id: string
            // 游戏类型 (FT:足球，BK:篮球,TN:网球, VB:网球,BM：羽球)
            gameType: string
            // 分类名称notNull
            name: string
            // 分类code
            code: string
            // 图标,svg的html元素(已进行UrlEncoded)
            icon: string
            // 联赛列表notNull
            list: Array<{
              // 联赛id
              id: string
              // 名称
              name: string
              // 赛事数量
              num: number
              // 排序
              sort: number
              // 联盟icon
              icon: string
            }>
            // 赛事/赛季数量notNull
            num: number
            // 排序
            sort: number
          }>
        }>
        // 排序
        sort: number
        // 赛事比赛数量
        matchNum: number
        // 冠軍比赛数量
        outRightNum: number
      }
      // 连串盘
      parlay: {
        // 比赛总数量
        num: number
        // 菜单分类,如：滚球
        items: Array<{
          // 体育名称,如：足球
          name: string
          // 体育代码,如：FT
          code: string
          // 总数量
          num: number
          // 赛事数量
          matchNum: number
          // 冠軍比赛数量
          outRightNum: number
          // 排序号
          sortNum: number
          // 玩法分类类型菜单列表
          play: Array<{
            // 玩法菜单code
            code: string
            // 玩法菜单名称
            name: string
            // 赔率大厅画面用, 1:菜单玩法支持下拉选项 0:不支持下拉选项
            selectionType: number
            // 数量
            num: number
            // 菜单底下包含的玩法类(List格式)
            playCateList: Array<{
              // 代码
              code: string
              // 玩法类名称，如：让球, 大/小
              name: string
              // 排序
              rowSort: number
              // 各语系玩法名称
              playCateNameMap: any
            }>
            // 各语系菜单名称
            nameMap: any
            // 玩法排序
            oddsSort: string
            // 玩法显示名称
            playCateNameMap: any
            // 菜单下包含的玩法类(Map格式)
            playCateMap: {
              [key: string]: {
                // 代码
                code: string
                // 玩法类名称，如：让球, 大/小
                name: string
                // 排序
                rowSort: number
                // 各语系玩法名称
                playCateNameMap: any
              }
            }
          }>
          // 是否存在滚盘中赛事，0：否，1：是
          existInPlay: number
          // 玩法菜单列表code
          playCateMenuCodeList: any[]
          // 国家列表
          categoryList: Array<{
            // 主键
            id: string
            // 游戏类型 (FT:足球，BK:篮球,TN:网球, VB:网球,BM：羽球)
            gameType: string
            // 分类名称notNull
            name: string
            // 分类code
            code: string
            // 图标,svg的html元素(已进行UrlEncoded)
            icon: string
            // 联赛列表notNull
            list: Array<{
              // 联赛id
              id: string
              // 名称
              name: string
              // 赛事数量
              num: number
              // 排序
              sort: number
              // 联盟icon
              icon: string
            }>
            // 赛事/赛季数量notNull
            num: number
            // 排序
            sort: number
          }>
        }>
        // 排序
        sort: number
        // 赛事比赛数量
        matchNum: number
        // 冠軍比赛数量
        outRightNum: number
      }
      // 冠军
      outright: {
        // 比赛总数量
        num: number
        // 菜单分类,如：滚球
        items: Array<{
          // 体育名称,如：足球
          name: string
          // 体育代码,如：FT
          code: string
          // 总数量
          num: number
          // 赛事数量
          matchNum: number
          // 冠軍比赛数量
          outRightNum: number
          // 排序号
          sortNum: number
          // 玩法分类类型菜单列表
          play: Array<{
            // 玩法菜单code
            code: string
            // 玩法菜单名称
            name: string
            // 赔率大厅画面用, 1:菜单玩法支持下拉选项 0:不支持下拉选项
            selectionType: number
            // 数量
            num: number
            // 菜单底下包含的玩法类(List格式)
            playCateList: Array<{
              // 代码
              code: string
              // 玩法类名称，如：让球, 大/小
              name: string
              // 排序
              rowSort: number
              // 各语系玩法名称
              playCateNameMap: any
            }>
            // 各语系菜单名称
            nameMap: any
            // 玩法排序
            oddsSort: string
            // 玩法显示名称
            playCateNameMap: any
            // 菜单下包含的玩法类(Map格式)
            playCateMap: {
              [key: string]: {
                // 代码
                code: string
                // 玩法类名称，如：让球, 大/小
                name: string
                // 排序
                rowSort: number
                // 各语系玩法名称
                playCateNameMap: any
              }
            }
          }>
          // 是否存在滚盘中赛事，0：否，1：是
          existInPlay: number
          // 玩法菜单列表code
          playCateMenuCodeList: any[]
          // 国家列表
          categoryList: Array<{
            // 主键
            id: string
            // 游戏类型 (FT:足球，BK:篮球,TN:网球, VB:网球,BM：羽球)
            gameType: string
            // 分类名称notNull
            name: string
            // 分类code
            code: string
            // 图标,svg的html元素(已进行UrlEncoded)
            icon: string
            // 联赛列表notNull
            list: Array<{
              // 联赛id
              id: string
              // 名称
              name: string
              // 赛事数量
              num: number
              // 排序
              sort: number
              // 联盟icon
              icon: string
            }>
            // 赛事/赛季数量notNull
            num: number
            // 排序
            sort: number
          }>
        }>
        // 排序
        sort: number
        // 赛事比赛数量
        matchNum: number
        // 冠軍比赛数量
        outRightNum: number
      }
      // 特优赔率
      eps: {
        // 比赛总数量
        num: number
        // 菜单分类,如：滚球
        items: Array<{
          // 体育名称,如：足球
          name: string
          // 体育代码,如：FT
          code: string
          // 总数量
          num: number
          // 赛事数量
          matchNum: number
          // 冠軍比赛数量
          outRightNum: number
          // 排序号
          sortNum: number
          // 玩法分类类型菜单列表
          play: Array<{
            // 玩法菜单code
            code: string
            // 玩法菜单名称
            name: string
            // 赔率大厅画面用, 1:菜单玩法支持下拉选项 0:不支持下拉选项
            selectionType: number
            // 数量
            num: number
            // 菜单底下包含的玩法类(List格式)
            playCateList: Array<{
              // 代码
              code: string
              // 玩法类名称，如：让球, 大/小
              name: string
              // 排序
              rowSort: number
              // 各语系玩法名称
              playCateNameMap: any
            }>
            // 各语系菜单名称
            nameMap: any
            // 玩法排序
            oddsSort: string
            // 玩法显示名称
            playCateNameMap: any
            // 菜单下包含的玩法类(Map格式)
            playCateMap: {
              [key: string]: {
                // 代码
                code: string
                // 玩法类名称，如：让球, 大/小
                name: string
                // 排序
                rowSort: number
                // 各语系玩法名称
                playCateNameMap: any
              }
            }
          }>
          // 是否存在滚盘中赛事，0：否，1：是
          existInPlay: number
          // 玩法菜单列表code
          playCateMenuCodeList: any[]
          // 国家列表
          categoryList: Array<{
            // 主键
            id: string
            // 游戏类型 (FT:足球，BK:篮球,TN:网球, VB:网球,BM：羽球)
            gameType: string
            // 分类名称notNull
            name: string
            // 分类code
            code: string
            // 图标,svg的html元素(已进行UrlEncoded)
            icon: string
            // 联赛列表notNull
            list: Array<{
              // 联赛id
              id: string
              // 名称
              name: string
              // 赛事数量
              num: number
              // 排序
              sort: number
              // 联盟icon
              icon: string
            }>
            // 赛事/赛季数量notNull
            num: number
            // 排序
            sort: number
          }>
        }>
        // 排序
        sort: number
        // 赛事比赛数量
        matchNum: number
        // 冠軍比赛数量
        outRightNum: number
      }
      // 即将开始
      atStart: {
        // 比赛总数量
        num: number
        // 菜单分类,如：滚球
        items: Array<{
          // 体育名称,如：足球
          name: string
          // 体育代码,如：FT
          code: string
          // 总数量
          num: number
          // 赛事数量
          matchNum: number
          // 冠軍比赛数量
          outRightNum: number
          // 排序号
          sortNum: number
          // 玩法分类类型菜单列表
          play: Array<{
            // 玩法菜单code
            code: string
            // 玩法菜单名称
            name: string
            // 赔率大厅画面用, 1:菜单玩法支持下拉选项 0:不支持下拉选项
            selectionType: number
            // 数量
            num: number
            // 菜单底下包含的玩法类(List格式)
            playCateList: Array<{
              // 代码
              code: string
              // 玩法类名称，如：让球, 大/小
              name: string
              // 排序
              rowSort: number
              // 各语系玩法名称
              playCateNameMap: any
            }>
            // 各语系菜单名称
            nameMap: any
            // 玩法排序
            oddsSort: string
            // 玩法显示名称
            playCateNameMap: any
            // 菜单下包含的玩法类(Map格式)
            playCateMap: {
              [key: string]: {
                // 代码
                code: string
                // 玩法类名称，如：让球, 大/小
                name: string
                // 排序
                rowSort: number
                // 各语系玩法名称
                playCateNameMap: any
              }
            }
          }>
          // 是否存在滚盘中赛事，0：否，1：是
          existInPlay: number
          // 玩法菜单列表code
          playCateMenuCodeList: any[]
          // 国家列表
          categoryList: Array<{
            // 主键
            id: string
            // 游戏类型 (FT:足球，BK:篮球,TN:网球, VB:网球,BM：羽球)
            gameType: string
            // 分类名称notNull
            name: string
            // 分类code
            code: string
            // 图标,svg的html元素(已进行UrlEncoded)
            icon: string
            // 联赛列表notNull
            list: Array<{
              // 联赛id
              id: string
              // 名称
              name: string
              // 赛事数量
              num: number
              // 排序
              sort: number
              // 联盟icon
              icon: string
            }>
            // 赛事/赛季数量notNull
            num: number
            // 排序
            sort: number
          }>
        }>
        // 排序
        sort: number
        // 赛事比赛数量
        matchNum: number
        // 冠軍比赛数量
        outRightNum: number
      }
      // 我的赛事
      myFavorite: {
        // 比赛总数量
        num: number
        // 菜单分类,如：滚球
        items: Array<{
          // 体育名称,如：足球
          name: string
          // 体育代码,如：FT
          code: string
          // 总数量
          num: number
          // 赛事数量
          matchNum: number
          // 冠軍比赛数量
          outRightNum: number
          // 排序号
          sortNum: number
          // 玩法分类类型菜单列表
          play: Array<{
            // 玩法菜单code
            code: string
            // 玩法菜单名称
            name: string
            // 赔率大厅画面用, 1:菜单玩法支持下拉选项 0:不支持下拉选项
            selectionType: number
            // 数量
            num: number
            // 菜单底下包含的玩法类(List格式)
            playCateList: Array<{
              // 代码
              code: string
              // 玩法类名称，如：让球, 大/小
              name: string
              // 排序
              rowSort: number
              // 各语系玩法名称
              playCateNameMap: any
            }>
            // 各语系菜单名称
            nameMap: any
            // 玩法排序
            oddsSort: string
            // 玩法显示名称
            playCateNameMap: any
            // 菜单下包含的玩法类(Map格式)
            playCateMap: {
              [key: string]: {
                // 代码
                code: string
                // 玩法类名称，如：让球, 大/小
                name: string
                // 排序
                rowSort: number
                // 各语系玩法名称
                playCateNameMap: any
              }
            }
          }>
          // 是否存在滚盘中赛事，0：否，1：是
          existInPlay: number
          // 玩法菜单列表code
          playCateMenuCodeList: any[]
          // 国家列表
          categoryList: Array<{
            // 主键
            id: string
            // 游戏类型 (FT:足球，BK:篮球,TN:网球, VB:网球,BM：羽球)
            gameType: string
            // 分类名称notNull
            name: string
            // 分类code
            code: string
            // 图标,svg的html元素(已进行UrlEncoded)
            icon: string
            // 联赛列表notNull
            list: Array<{
              // 联赛id
              id: string
              // 名称
              name: string
              // 赛事数量
              num: number
              // 排序
              sort: number
              // 联盟icon
              icon: string
            }>
            // 赛事/赛季数量notNull
            num: number
            // 排序
            sort: number
          }>
        }>
        // 排序
        sort: number
        // 赛事比赛数量
        matchNum: number
        // 冠軍比赛数量
        outRightNum: number
      }
      // 波胆
      cs: {
        // 比赛总数量
        num: number
        // 菜单分类,如：滚球
        items: Array<{
          // 体育名称,如：足球
          name: string
          // 体育代码,如：FT
          code: string
          // 总数量
          num: number
          // 赛事数量
          matchNum: number
          // 冠軍比赛数量
          outRightNum: number
          // 排序号
          sortNum: number
          // 玩法分类类型菜单列表
          play: Array<{
            // 玩法菜单code
            code: string
            // 玩法菜单名称
            name: string
            // 赔率大厅画面用, 1:菜单玩法支持下拉选项 0:不支持下拉选项
            selectionType: number
            // 数量
            num: number
            // 菜单底下包含的玩法类(List格式)
            playCateList: Array<{
              // 代码
              code: string
              // 玩法类名称，如：让球, 大/小
              name: string
              // 排序
              rowSort: number
              // 各语系玩法名称
              playCateNameMap: any
            }>
            // 各语系菜单名称
            nameMap: any
            // 玩法排序
            oddsSort: string
            // 玩法显示名称
            playCateNameMap: any
            // 菜单下包含的玩法类(Map格式)
            playCateMap: {
              [key: string]: {
                // 代码
                code: string
                // 玩法类名称，如：让球, 大/小
                name: string
                // 排序
                rowSort: number
                // 各语系玩法名称
                playCateNameMap: any
              }
            }
          }>
          // 是否存在滚盘中赛事，0：否，1：是
          existInPlay: number
          // 玩法菜单列表code
          playCateMenuCodeList: any[]
          // 国家列表
          categoryList: Array<{
            // 主键
            id: string
            // 游戏类型 (FT:足球，BK:篮球,TN:网球, VB:网球,BM：羽球)
            gameType: string
            // 分类名称notNull
            name: string
            // 分类code
            code: string
            // 图标,svg的html元素(已进行UrlEncoded)
            icon: string
            // 联赛列表notNull
            list: Array<{
              // 联赛id
              id: string
              // 名称
              name: string
              // 赛事数量
              num: number
              // 排序
              sort: number
              // 联盟icon
              icon: string
            }>
            // 赛事/赛季数量notNull
            num: number
            // 排序
            sort: number
          }>
        }>
        // 排序
        sort: number
        // 赛事比赛数量
        matchNum: number
        // 冠軍比赛数量
        outRightNum: number
      }
    }
  }
  // 27.体育信息: 27.4.PC版体育左侧边栏,免登入即可访问
  type REQ = {
    // 当下时间（时间戳格式）
    now: string | number
    // 今日开始时间（00:00:00的时间戳格式）
    todayStart: string | number
  }
}
// 27.体育信息: 27.5.PC版体育右侧滚球赛事接口
declare namespace API_SPORT_PC_LIST_INPLAY {
  // 27.体育信息: 27.5.PC版体育右侧滚球赛事接口
  type RES = {
    // No comments found.
    success: boolean
    // No comments found.
    msg: string
    // No comments found.
    code: number
    // No comments found.
    t: {
      // 赛事列表
      list: Array<{
        // 赛事id
        id: string
        // 比赛开始时间
        startTime: string | number
        // 联赛id
        leagueId: string
        // 联赛名称
        leagueName: string
        // 主队名称
        homeName: string
        // 主队图标
        homeIcon: string
        // 主队图标(svg)
        homeIconSvg: string
        // 客队名称
        awayName: string
        // 客队图标
        awayIcon: string
        // 客队图标(svg)
        awayIconSvg: string
        // 游戏类型 FT:soccer,BK:Basketball
        gameType: string
        // 有无赛事直播 0:无 1:有
        liveVideo: number
        // 第三方厂商映射id（动画）
        trackerId: string
        // 第三方厂商映射id（直播）
        streamId: string
        // 赛事的赛制类型,0:默认值 3:三战两胜 5:五战三胜...
        spt: number
        // 玩法菜单列表
        menuList: Array<{
          // 玩法菜单code
          code: string
          // 玩法菜单名称
          name: string
          // 赔率大厅画面用, 1:菜单玩法支持下拉选项 0:不支持下拉选项
          selectionType: number
          // 数量
          num: number
          // 菜单底下包含的玩法类(List格式)
          playCateList: Array<{
            // 代码
            code: string
            // 玩法类名称，如：让球, 大/小
            name: string
            // 排序
            rowSort: number
            // 各语系玩法名称
            playCateNameMap: any
          }>
          // 各语系菜单名称
          nameMap: any
          // 玩法排序
          oddsSort: string
          // 玩法显示名称
          playCateNameMap: any
          // 菜单下包含的玩法类(Map格式)
          playCateMap: {
            [key: string]: {
              // 代码
              code: string
              // 玩法类名称，如：让球, 大/小
              name: string
              // 排序
              rowSort: number
              // 各语系玩法名称
              playCateNameMap: any
            }
          }
        }>
        // 球种别排序
        gameSort: number
        // 是否有主播直播 0：否，1：是
        isLive: number
        // 房间号
        roundNo: string
        // 主播头像
        streamerIcon: string
        // 主播名称
        StreamerName: string
        // 封面路径
        frontCoverUrl: string
      }>
    }
  }
  // 27.体育信息: 27.5.PC版体育右侧滚球赛事接口
  type REQ = {
    // No comments found.
    platformId?: number
  }
}
// 27.体育信息: 27.6.PC版体育右侧热门赛事接口
declare namespace API_SPORT_PC_LIST_POPULAR {
  // 27.体育信息: 27.6.PC版体育右侧热门赛事接口
  type RES = {
    // No comments found.
    success: boolean
    // No comments found.
    msg: string
    // No comments found.
    code: number
    // No comments found.
    t: {
      // 赛事列表
      list: Array<{
        // 赛事id
        id: string
        // 比赛开始时间
        startTime: string | number
        // 联赛id
        leagueId: string
        // 联赛名称
        leagueName: string
        // 主队名称
        homeName: string
        // 主队图标
        homeIcon: string
        // 主队图标(svg)
        homeIconSvg: string
        // 客队名称
        awayName: string
        // 客队图标
        awayIcon: string
        // 客队图标(svg)
        awayIconSvg: string
        // 游戏类型 FT:soccer,BK:Basketball
        gameType: string
        // 有无赛事直播 0:无 1:有
        liveVideo: number
        // 第三方厂商映射id（动画）
        trackerId: string
        // 第三方厂商映射id（直播）
        streamId: string
        // 赛事的赛制类型,0:默认值 3:三战两胜 5:五战三胜...
        spt: number
        // 玩法菜单列表
        menuList: Array<{
          // 玩法菜单code
          code: string
          // 玩法菜单名称
          name: string
          // 赔率大厅画面用, 1:菜单玩法支持下拉选项 0:不支持下拉选项
          selectionType: number
          // 数量
          num: number
          // 菜单底下包含的玩法类(List格式)
          playCateList: Array<{
            // 代码
            code: string
            // 玩法类名称，如：让球, 大/小
            name: string
            // 排序
            rowSort: number
            // 各语系玩法名称
            playCateNameMap: any
          }>
          // 各语系菜单名称
          nameMap: any
          // 玩法排序
          oddsSort: string
          // 玩法显示名称
          playCateNameMap: any
          // 菜单下包含的玩法类(Map格式)
          playCateMap: {
            [key: string]: {
              // 代码
              code: string
              // 玩法类名称，如：让球, 大/小
              name: string
              // 排序
              rowSort: number
              // 各语系玩法名称
              playCateNameMap: any
            }
          }
        }>
        // 球种别排序
        gameSort: number
        // 是否有主播直播 0：否，1：是
        isLive: number
        // 房间号
        roundNo: string
        // 主播头像
        streamerIcon: string
        // 主播名称
        StreamerName: string
        // 封面路径
        frontCoverUrl: string
      }>
    }
  }
  // 27.体育信息: 27.6.PC版体育右侧热门赛事接口
  type REQ = {
    // No comments found.
    platformId?: number
  }
}
// 27.体育信息: 27.7.PC版体育右侧我的赛事接口
declare namespace API_SPORT_PC_LIST_MYFAV {
  // 27.体育信息: 27.7.PC版体育右侧我的赛事接口
  type RES = {
    // No comments found.
    success: boolean
    // No comments found.
    msg: string
    // No comments found.
    code: number
    // No comments found.
    t: {
      // 赛事列表
      list: Array<{
        // 赛事id
        id: string
        // 比赛开始时间
        startTime: string | number
        // 联赛id
        leagueId: string
        // 联赛名称
        leagueName: string
        // 主队名称
        homeName: string
        // 主队图标
        homeIcon: string
        // 主队图标(svg)
        homeIconSvg: string
        // 客队名称
        awayName: string
        // 客队图标
        awayIcon: string
        // 客队图标(svg)
        awayIconSvg: string
        // 游戏类型 FT:soccer,BK:Basketball
        gameType: string
        // 有无赛事直播 0:无 1:有
        liveVideo: number
        // 第三方厂商映射id（动画）
        trackerId: string
        // 第三方厂商映射id（直播）
        streamId: string
        // 赛事的赛制类型,0:默认值 3:三战两胜 5:五战三胜...
        spt: number
        // 玩法菜单列表
        menuList: Array<{
          // 玩法菜单code
          code: string
          // 玩法菜单名称
          name: string
          // 赔率大厅画面用, 1:菜单玩法支持下拉选项 0:不支持下拉选项
          selectionType: number
          // 数量
          num: number
          // 菜单底下包含的玩法类(List格式)
          playCateList: Array<{
            // 代码
            code: string
            // 玩法类名称，如：让球, 大/小
            name: string
            // 排序
            rowSort: number
            // 各语系玩法名称
            playCateNameMap: any
          }>
          // 各语系菜单名称
          nameMap: any
          // 玩法排序
          oddsSort: string
          // 玩法显示名称
          playCateNameMap: any
          // 菜单下包含的玩法类(Map格式)
          playCateMap: {
            [key: string]: {
              // 代码
              code: string
              // 玩法类名称，如：让球, 大/小
              name: string
              // 排序
              rowSort: number
              // 各语系玩法名称
              playCateNameMap: any
            }
          }
        }>
        // 球种别排序
        gameSort: number
        // 是否有主播直播 0：否，1：是
        isLive: number
        // 房间号
        roundNo: string
        // 主播头像
        streamerIcon: string
        // 主播名称
        StreamerName: string
        // 封面路径
        frontCoverUrl: string
      }>
    }
  }
  // 27.体育信息: 27.7.PC版体育右侧我的赛事接口
  type REQ = {
    // No comments found.
    platformId?: number
  }
}
// 27.体育信息: 27.8.获取专题列表（特殊参赛表）
declare namespace API_SPORT_COUPON_MENU {
  // 27.体育信息: 27.8.获取专题列表（特殊参赛表）
  type RES = {
    // No comments found.
    success: boolean
    // No comments found.
    msg: string
    // No comments found.
    code: number
    // No comments found.
    rows: Array<{
      // 专题编码（ 可以作为matchType传递）
      couponCode: string
      // 专题名称
      couponName: string
      // svg图标
      icon: string
      // 比赛数量
      num: number
      // 排序
      sort: number
      // PC宣传图
      pcPubImage: string
      // H5宣传图
      h5PubImage: string
      // 球种
      gameType: string
    }>
    // 球种
    gameType: string
    // No comments found.
    total: number
  }
  // 27.体育信息: 27.8.获取专题列表（特殊参赛表）
  type REQ = {
    // No comments found.
    platformId?: number
  }
}
// 27.体育信息: 27.9.体育列表,免登入即可访问
declare namespace API_SPORT_LIST {
  // 27.体育信息: 27.9.体育列表,免登入即可访问
  type RES = {
    // No comments found.
    success: boolean
    // No comments found.
    msg: string
    // No comments found.
    code: number
    // No comments found.
    rows: Array<{
      // 主键
      id: number
      // 游戏编码(如：FT:足球,BK:篮球)
      code: string
      // 游戏名称(中文)
      name: string
      // 状态（1：启用；0：停用）
      state: number
      // 排序号
      sortNum: number
      // 球种使用的数据源
      source: number
      // 冠军玩法使用的数据源（暂不支持创信）
      outrightSource: number
      // 赛果使用的数据源
      matchResultSource: number
      // 是否启用下注倒数撤单验证 0: 关闭 1: 开启
      betConfirmStatus: number
    }>
    // 是否启用下注倒数撤单验证 0: 关闭 1: 开启
    betConfirmStatus: number
    // No comments found.
    total: number
  }
  // 27.体育信息: 27.9.体育列表,免登入即可访问
  type REQ = {
    //  1 仅过滤平台球种开关 若不带此参数或不为1 则过滤风控球种开关与平台球种开关
    type?: number
    // No comments found.
    platformId?: number
  }
}
// 27.体育信息: 27.10.首页体育菜单,免登入即可访问
declare namespace API_SPORT_HOME_MENU {
  // 27.体育信息: 27.10.首页体育菜单,免登入即可访问
  type RES = {
    // No comments found.
    success: boolean
    // No comments found.
    msg: string
    // No comments found.
    code: number
    // No comments found.
    rows: Array<{
      // 体育名称,如：足球
      name: string
      // 体育代码,如：FT
      code: string
      // 排序号
      sortNum: number
      // 数量统计
      statics: {
        // 滚球
        inPlay: number
        // 今日盘
        today: number
        // 早盘
        early: number
        // 连串盘
        parlay: number
        // 即将开始
        atStart: number
        // 冠军
        outright: number
      }
    }>
    // 冠军
    outright: number
    // No comments found.
    total: number
  }
  // 27.体育信息: 27.10.首页体育菜单,免登入即可访问
  type REQ = {
    // 当下时间（时间戳格式）
    now: string | number
    // 今日开始时间（00:00:00的时间戳格式）
    todayStart: string | number
  }
}
// 27.体育信息: 27.11.查询搜寻引擎资料, 免登入即可访问
declare namespace API_SPORT_SEARCHENGINE {
  // 27.体育信息: 27.11.查询搜寻引擎资料, 免登入即可访问
  type RES = {
    // No comments found.
    success: boolean
    // No comments found.
    msg: string
    // No comments found.
    code: number
    // No comments found.
    rows: Array<{
      // 球种
      gameType: string
      // 球种名称
      gameName: string
      // 联赛赛事列表
      leagueMatchList: Array<{
        // 联赛名称
        leagueName: string
        // 赛事资讯列表
        matchInfoList: Array<{
          // 赛事id
          matchId: string
          // 主队名称
          homeName: string
          // 客队名称
          awayName: string
          // 开赛时间
          startTime: string | number
          // 主队图标
          homeIcon: string
          // 主队图标(svg)
          homeIconSvg: string
          // 客队图标
          awayIcon: string
          // 客队图标(svg)
          awayIconSvg: string
        }>
        // 联赛排序
        sort: number
        // 国家
        category: string
        // 国家图标,svg的html元素(已进行UrlEncoded)
        categoryIcon: string
      }>
      // 球种排序
      sort: number
    }>
    // 球种排序
    sort: number
    // No comments found.
    total: number
  }
  // 27.体育信息: 27.11.查询搜寻引擎资料, 免登入即可访问
  type REQ = {
    // 游戏类型
    gameType?: string
    // 当下时间（时间戳格式）
    now: string | number
    // 今日开始时间（00:00:00的时间戳格式）
    todayStart: string | number
  }
}
// 27.体育信息: 27.12.手机宣传页热门推荐接口
declare namespace API_SPORT_RECOMMEND {
  // 27.体育信息: 27.12.手机宣传页热门推荐接口
  type RES = {
    // No comments found.
    success: boolean
    // No comments found.
    msg: string
    // No comments found.
    code: number
    // No comments found.
    t: {
      // 赛事列表
      list: Array<{
        // 赛事
        matchInfo: {
          // 赛事或赛季id
          id: string
          // 联赛id
          leagueId: string
          // 联赛名称
          leagueName: string
          // 主队id
          homeId: string
          // 主队名称
          homeName: string
          // 客队id
          awayId: string
          // 客队名称
          awayName: string
          // 赛事或赛季开始时间
          startTime: string | number
          // 赛事或赛季结束时间
          endTime: string | number
          // 赛事状态 0：未开始，1：比赛中，2：已结束，3：延期，4：已取消
          status: number
          // 该赛事之全部可投注玩法类数量
          playCateNum: number
          // 賽季名稱
          name: string
          // 圖片
          img: string
          // 訊息
          msg: string
          // 是否可以参加过关，0：否，1：是
          parlay: number
          // 有无赛事直播 0:无 1:有
          liveVideo: number
          // 是否是中立场，1：是，0：否
          neutral: number
          // 是否有特优赔率，1：是，0：否
          eps: number
          // 赛事的赛制类型,目前仅网球排球需要显示,0:默认值 3:三战两胜 5:五战三胜...
          spt: number
          // 动画映射id
          trackerId: string
          // 小金直播id
          tvId: string
          // 第三方直播id
          streamId: string
          // 游戏类型
          gameType: string
          // 数据源
          source: number
          // 主队图标
          homeIcon: string
          // 主队图标(svg)
          homeIconSvg: string
          // 客队图标
          awayIcon: string
          // 客队图标(svg)
          awayIconSvg: string
          // 是否滚盘中 0：否，1：是
          inplay: number
          // 是否有主播直播 0：否，1：是
          isLive: number
          // 房间号
          roundNo: string
          // 主播头像
          streamerIcon: string
          // 主播名称
          StreamerName: string
          // 封面路径
          frontCoverUrl: string
          // 赛事事件列表,结构同ws推送的消息格式,主要提供给推荐赛事/热门赛事接口获取比分与时间,对应ws事件名称为MATCH_STATUS_CHANGE/MATCH_CLOCK
          eventList: Array<{
            // No comments found.
            eventType: string
          }>
          // No comments found.
          eventType: string
          // 是否为fiba赛事
          isFiba: boolean
          // 是否为欧洲杯赛事
          isEuropeCup: boolean
          // cashout 狀態 0:不可 ,1:可
          cashoutStatus: number
        }
        // 赔率(仅首页推荐赛事的接口会回传赔率,其馀画面使用WS获取赔率) key=>玩法类型code value=>赔率列表
        odds: {
          [key: string]: {
            // 赔率idnullable
            id: string
            // 玩法类名称nullable
            name: string
            // 让分或大小分值nullable
            spread: string
            // 额外信息nullable
            extInfo: string
            // 欧洲盘赔率nullable
            odds: number
            // 香港盘赔率nullable
            hkOdds: number
            // 马来盘赔率
            malayOdds: number
            // 印尼盘赔率
            indoOdds: number
            // 市场排序，用于让球等玩法的排序
            marketSort: number
            // 0:活跃可用，可投注、1：临时锁定，不允许投注、2：不可用，不可见也不可投注nullable
            status: number
            // 赔率生产者nullable
            producerId: number
            // 保存各语系name对应值的map
            nameMap: any
            // 保存各语系extInfo对应值的map
            extInfoMap: any
            // 游戏类型 FT:soccer,BK:Basketball,BS:Baseball,FS:Outright,OP:Other,TN:Tennis,VB:Volleyball,BM:Badminton,TT:table tennis
            gameType: string
            // 玩法分类id
            playCateId: number
            // 玩法分类代码
            playCateCode: string
            // 玩法编码
            playCode: string
            // 賠率分組
            group: string
            // 版本号
            version: number
          }
        }
        // 联赛/赛季
        league: {
          // 联赛/赛季id
          id: string
          // 名称
          name: string
          // 国家Code
          categoryCode: string
          // 国家
          category: string
          // 国家图标,svg的html元素(已进行UrlEncoded)
          categoryIcon: string
          // 联赛简称
          shortName: string
          // 联盟icon
          icon: string
        }
        // 游戏类型
        gameType: string
        // 分类(滚球/今日/早盘)下的赛事总数
        matchNum: number
        // 国家名称
        categoryName: string
        // 国家图标
        categoryIcon: string
        // 联赛id
        leagueId: string
        // 联赛名称
        leagueName: string
        // 玩法菜单列表
        menuList: Array<{
          // 玩法菜单code
          code: string
          // 玩法菜单名称
          name: string
          // 赔率大厅画面用, 1:菜单玩法支持下拉选项 0:不支持下拉选项
          selectionType: number
          // 数量
          num: number
          // 菜单底下包含的玩法类(List格式)
          playCateList: Array<{
            // 代码
            code: string
            // 玩法类名称，如：让球, 大/小
            name: string
            // 排序
            rowSort: number
            // 各语系玩法名称
            playCateNameMap: any
          }>
          // 各语系菜单名称
          nameMap: any
          // 玩法排序
          oddsSort: string
          // 玩法显示名称
          playCateNameMap: any
          // 菜单下包含的玩法类(Map格式)
          playCateMap: {
            [key: string]: {
              // 代码
              code: string
              // 玩法类名称，如：让球, 大/小
              name: string
              // 排序
              rowSort: number
              // 各语系玩法名称
              playCateNameMap: any
            }
          }
        }>
        // 赛事id
        id: string
        // 主队名称
        homeName: string
        // 客队名称
        awayName: string
        // 赛事开始时间
        startTime: string | number
        // 赛事状态 0：未开始，1：比赛中，2：已结束，3：延期，4：已取消
        status: number
        // 该赛事之全部可投注玩法类数量
        playCateNum: number
        // 有无赛事直播 0:无 1:有
        liveVideo: number
        // 是否是中立场，1：是，0：否
        neutral: number
        // 是否有特优赔率，1：是，0：否
        eps: number
        // 赛事的赛制类型,目前仅网球排球需要显示,0:默认值 3:三战两胜 5:五战三胜...
        spt: number
        // 动画映射id
        trackerId: string
        // 小金直播id
        tvId: string
        // 第三方直播id
        streamId: string
      }>
    }
  }
  // 27.体育信息: 27.12.手机宣传页热门推荐接口
  type REQ = {
    // 当下时间（时间戳格式）
    now: string | number
    // 今日开始时间（00:00:00的时间戳格式）
    todayStart: string | number
    // 赛事类型
    gameType?: string
    // 多球种时傳入字串內容,不同球种之间使用逗号分隔,顺序高的球种要排前面
    gameTypes?: string
  }
}
// 27.体育信息: 27.13.手机宣传页热门推荐联赛接口
declare namespace API_SPORT_RECOMMENDLEAGUE {
  // 27.体育信息: 27.13.手机宣传页热门推荐联赛接口
  type RES = {
    // No comments found.
    success: boolean
    // No comments found.
    msg: string
    // No comments found.
    code: number
    // No comments found.
    t: {
      // 主键
      id: string
      // 游戏类型 FT:soccer,BK:Basketball,BS:Baseball,FS:Outright,OP:Other,TN:Tennis,VB:Volleyball,BM:Badminton,TT:table tennis
      gameType: string
      // 名称
      name: string
      // 联赛分类代码
      categoryCode: string
      // 联赛分类名称
      categoryName: string
      // 是否热门 0：否，1：是
      popular: number
      // 联赛开始时间
      start: string
      // 联赛结束时间
      end: string
      // 来源 0：188，1：皇冠
      source: number
      // 添加时间
      addTime: string
      // 更新时间
      updateTime: string
      // 状态 0：正常，1：关闭
      status: number
      // 排序
      sort: number
      // 创信id
      cxId: string
      // 联盟icon
      icon: string
      // 国家
      category: string
      // 国家图标,svg的html元素(已进行UrlEncoded)
      categoryIcon: string
    }
  }
}
// 27.体育信息: 27.14.pc端首页热门展示
declare namespace API_SPORT_PC_HOT {
  // 27.体育信息: 27.14.pc端首页热门展示
  type RES = {
    // No comments found.
    success: boolean
    // No comments found.
    msg: string
    // No comments found.
    code: number
    // No comments found.
    t: {
      // 体育名称,如：足球
      name: string
      // 体育代码,如：FT
      code: string
      // 排序号
      sortNum: number
      // 赛事列表
      list: Array<{
        // 赛事
        matchInfo: {
          // 赛事或赛季id
          id: string
          // 联赛id
          leagueId: string
          // 联赛名称
          leagueName: string
          // 主队id
          homeId: string
          // 主队名称
          homeName: string
          // 客队id
          awayId: string
          // 客队名称
          awayName: string
          // 赛事或赛季开始时间
          startTime: string | number
          // 赛事或赛季结束时间
          endTime: string | number
          // 赛事状态 0：未开始，1：比赛中，2：已结束，3：延期，4：已取消
          status: number
          // 该赛事之全部可投注玩法类数量
          playCateNum: number
          // 賽季名稱
          name: string
          // 圖片
          img: string
          // 訊息
          msg: string
          // 是否可以参加过关，0：否，1：是
          parlay: number
          // 有无赛事直播 0:无 1:有
          liveVideo: number
          // 是否是中立场，1：是，0：否
          neutral: number
          // 是否有特优赔率，1：是，0：否
          eps: number
          // 赛事的赛制类型,目前仅网球排球需要显示,0:默认值 3:三战两胜 5:五战三胜...
          spt: number
          // 动画映射id
          trackerId: string
          // 小金直播id
          tvId: string
          // 第三方直播id
          streamId: string
          // 游戏类型
          gameType: string
          // 数据源
          source: number
          // 主队图标
          homeIcon: string
          // 主队图标(svg)
          homeIconSvg: string
          // 客队图标
          awayIcon: string
          // 客队图标(svg)
          awayIconSvg: string
          // 是否滚盘中 0：否，1：是
          inplay: number
          // 是否有主播直播 0：否，1：是
          isLive: number
          // 房间号
          roundNo: string
          // 主播头像
          streamerIcon: string
          // 主播名称
          StreamerName: string
          // 封面路径
          frontCoverUrl: string
          // 赛事事件列表,结构同ws推送的消息格式,主要提供给推荐赛事/热门赛事接口获取比分与时间,对应ws事件名称为MATCH_STATUS_CHANGE/MATCH_CLOCK
          eventList: Array<{
            // No comments found.
            eventType: string
          }>
          // No comments found.
          eventType: string
          // 是否为fiba赛事
          isFiba: boolean
          // 是否为欧洲杯赛事
          isEuropeCup: boolean
          // cashout 狀態 0:不可 ,1:可
          cashoutStatus: number
        }
        // 赔率(仅首页推荐赛事的接口会回传赔率,其馀画面使用WS获取赔率) key=>玩法类型code value=>赔率列表
        odds: {
          [key: string]: {
            // 赔率idnullable
            id: string
            // 玩法类名称nullable
            name: string
            // 让分或大小分值nullable
            spread: string
            // 额外信息nullable
            extInfo: string
            // 欧洲盘赔率nullable
            odds: number
            // 香港盘赔率nullable
            hkOdds: number
            // 马来盘赔率
            malayOdds: number
            // 印尼盘赔率
            indoOdds: number
            // 市场排序，用于让球等玩法的排序
            marketSort: number
            // 0:活跃可用，可投注、1：临时锁定，不允许投注、2：不可用，不可见也不可投注nullable
            status: number
            // 赔率生产者nullable
            producerId: number
            // 保存各语系name对应值的map
            nameMap: any
            // 保存各语系extInfo对应值的map
            extInfoMap: any
            // 游戏类型 FT:soccer,BK:Basketball,BS:Baseball,FS:Outright,OP:Other,TN:Tennis,VB:Volleyball,BM:Badminton,TT:table tennis
            gameType: string
            // 玩法分类id
            playCateId: number
            // 玩法分类代码
            playCateCode: string
            // 玩法编码
            playCode: string
            // 賠率分組
            group: string
            // 版本号
            version: number
          }
        }
        // 联赛/赛季
        league: {
          // 联赛/赛季id
          id: string
          // 名称
          name: string
          // 国家Code
          categoryCode: string
          // 国家
          category: string
          // 国家图标,svg的html元素(已进行UrlEncoded)
          categoryIcon: string
          // 联赛简称
          shortName: string
          // 联盟icon
          icon: string
        }
        // 游戏类型
        gameType: string
        // 分类(滚球/今日/早盘)下的赛事总数
        matchNum: number
        // 国家名称
        categoryName: string
        // 国家图标
        categoryIcon: string
        // 联赛id
        leagueId: string
        // 联赛名称
        leagueName: string
        // 玩法菜单列表
        menuList: Array<{
          // 玩法菜单code
          code: string
          // 玩法菜单名称
          name: string
          // 赔率大厅画面用, 1:菜单玩法支持下拉选项 0:不支持下拉选项
          selectionType: number
          // 数量
          num: number
          // 菜单底下包含的玩法类(List格式)
          playCateList: Array<{
            // 代码
            code: string
            // 玩法类名称，如：让球, 大/小
            name: string
            // 排序
            rowSort: number
            // 各语系玩法名称
            playCateNameMap: any
          }>
          // 各语系菜单名称
          nameMap: any
          // 玩法排序
          oddsSort: string
          // 玩法显示名称
          playCateNameMap: any
          // 菜单下包含的玩法类(Map格式)
          playCateMap: {
            [key: string]: {
              // 代码
              code: string
              // 玩法类名称，如：让球, 大/小
              name: string
              // 排序
              rowSort: number
              // 各语系玩法名称
              playCateNameMap: any
            }
          }
        }>
        // 赛事id
        id: string
        // 主队名称
        homeName: string
        // 客队名称
        awayName: string
        // 赛事开始时间
        startTime: string | number
        // 赛事状态 0：未开始，1：比赛中，2：已结束，3：延期，4：已取消
        status: number
        // 该赛事之全部可投注玩法类数量
        playCateNum: number
        // 有无赛事直播 0:无 1:有
        liveVideo: number
        // 是否是中立场，1：是，0：否
        neutral: number
        // 是否有特优赔率，1：是，0：否
        eps: number
        // 赛事的赛制类型,目前仅网球排球需要显示,0:默认值 3:三战两胜 5:五战三胜...
        spt: number
        // 动画映射id
        trackerId: string
        // 小金直播id
        tvId: string
        // 第三方直播id
        streamId: string
      }>
    }
  }
  // 27.体育信息: 27.14.pc端首页热门展示
  type REQ = {
    // 当下时间（时间戳格式）
    now: string | number
    // 今日开始时间（00:00:00的时间戳格式）
    todayStart: string | number
  }
}
// 27.体育信息: 27.15.获取各球种的菜单配置
declare namespace API_SPORT_MENU_LIST {
  // 27.体育信息: 27.15.获取各球种的菜单配置
  type RES = {
    // No comments found.
    success: boolean
    // No comments found.
    msg: string
    // No comments found.
    code: number
    // No comments found.
    t: {
      // 球种菜单列表
      sportMenu: {
        [key: string]: {
          // 玩法菜单code
          code: string
          // 玩法菜单名称
          name: string
          // 赔率大厅画面用, 1:菜单玩法支持下拉选项 0:不支持下拉选项
          selectionType: number
          // 数量
          num: number
          // 菜单底下包含的玩法类(List格式)
          playCateList: Array<{
            // 代码
            code: string
            // 玩法类名称，如：让球, 大/小
            name: string
            // 排序
            rowSort: number
            // 各语系玩法名称
            playCateNameMap: any
          }>
          // 各语系菜单名称
          nameMap: any
          // 玩法排序
          oddsSort: string
          // 玩法显示名称
          playCateNameMap: any
          // 菜单下包含的玩法类(Map格式)
          playCateMap: {
            [key: string]: {
              // 代码
              code: string
              // 玩法类名称，如：让球, 大/小
              name: string
              // 排序
              rowSort: number
              // 各语系玩法名称
              playCateNameMap: any
            }
          }
        }
      }
    }
  }
}
// 27.体育信息: 27.16.pc前端，获取有视频或动画的赛事
declare namespace API_SPORT_PC_MATCH_STREAM_GET {
  // 27.体育信息: 27.16.pc前端，获取有视频或动画的赛事
  type RES = {
    // No comments found.
    success: boolean
    // No comments found.
    msg: string
    // No comments found.
    code: number
    // No comments found.
    t: {
      // 赛事id
      id: string
      // 比赛开始时间
      startTime: string | number
      // 联赛id
      leagueId: string
      // 联赛名称
      leagueName: string
      // 主队名称
      homeName: string
      // 客队名称
      awayName: string
      // 主队图标
      homeIcon: string
      // 主队图标(svg)
      homeIconSvg: string
      // 客队图标
      awayIcon: string
      // 客队图标(svg)
      awayIconSvg: string
      // 游戏类型 FT:soccer,BK:Basketball
      gameType: string
      // 有无赛事直播 0:无 1:有
      liveVideo: number
      // 第三方厂商映射id（动画）
      trackerId: string
      // 第三方厂商映射id（直播）
      streamId: string
      // 球种别排序
      gameSort: number
      // 赛事直播视频数量
      streamCount: number
    }
  }
  // 27.体育信息: 27.16.pc前端，获取有视频或动画的赛事
  type REQ = {
    // No comments found.
    platformId?: number
  }
}
// 27.体育信息: 27.17.pc前端，直播赛事栏位显示
declare namespace API_SPORT_PC_MATCH_STREAM_LIST {
  // 27.体育信息: 27.17.pc前端，直播赛事栏位显示
  type RES = {
    // No comments found.
    success: boolean
    // No comments found.
    msg: string
    // No comments found.
    code: number
    // No comments found.
    t: {
      // 赛事id
      id: string
      // 比赛开始时间
      startTime: string | number
      // 联赛id
      leagueId: string
      // 联赛名称
      leagueName: string
      // 主队名称
      homeName: string
      // 客队名称
      awayName: string
      // 主队图标
      homeIcon: string
      // 主队图标(svg)
      homeIconSvg: string
      // 客队图标
      awayIcon: string
      // 客队图标(svg)
      awayIconSvg: string
      // 游戏类型 FT:soccer,BK:Basketball
      gameType: string
      // 有无赛事直播 0:无 1:有
      liveVideo: number
      // 第三方厂商映射id（动画）
      trackerId: string
      // 第三方厂商映射id（直播）
      streamId: string
      // 球种别排序
      gameSort: number
      // 赛事直播视频数量
      streamCount: number
    }
  }
  // 27.体育信息: 27.17.pc前端，直播赛事栏位显示
  type REQ = {
    // No comments found.
    platformId?: number
  }
}
// 28.投注站相关: 28.1.免登入可访问查询直营投注站列表
declare namespace API_BETTINGSTATION_QUERY {
  // 28.投注站相关: 28.1.免登入可访问查询直营投注站列表
  type RES = {
    // No comments found.
    success: boolean
    // No comments found.
    msg: string
    // No comments found.
    code: number
    // No comments found.
    rows: Array<{
      // 主键
      id: number
      // 代码
      code: string
      // 国家代码
      nationCode: string
      // 币种编码
      currency: string
      // 名称
      name: string
      // 地址
      addr: string
      // 纬度
      lat: number
      // 经度
      lon: number
      // 门店图片地址
      pic: string
      // 电话
      telephone: string
      // 门店类型 0:直营，1:加盟
      type: number
      // 城市
      cityName: string
      // 省
      provinceName: string
      // 国家
      countryName: string
      // 状态 0: 筹备中，1: 营业中，2:暂停营业，3: 终止合作
      state: number
      // 营业开始时间
      officeStartTime: string
      // 营业结束时间
      officeEndTime: string
    }>
    // 营业结束时间
    officeEndTime: string
    // No comments found.
    total: number
  }
  // 28.投注站相关: 28.1.免登入可访问查询直营投注站列表
  type REQ = {
    // No comments found.
    platformId?: number
  }
}
// 28.投注站相关: 28.2.查询可提款投注站
declare namespace API_BETTINGSTATION_QUERYUWSTATION {
  // 28.投注站相关: 28.2.查询可提款投注站
  type RES = {
    // No comments found.
    success: boolean
    // No comments found.
    msg: string
    // No comments found.
    code: number
    // No comments found.
    rows: Array<{
      // 主键
      id: number
      // 代码
      code: string
      // 国家代码
      nationCode: string
      // 币种编码
      currency: string
      // 名称
      name: string
      // 地址
      addr: string
      // 纬度
      lat: number
      // 经度
      lon: number
      // 门店图片地址
      pic: string
      // 电话
      telephone: string
      // 门店类型 0:直营，1:加盟
      type: number
      // 城市
      cityName: string
      // 省
      provinceName: string
      // 国家
      countryName: string
      // 状态 0: 筹备中，1: 营业中，2:暂停营业，3: 终止合作
      state: number
      // 营业开始时间
      officeStartTime: string
      // 营业结束时间
      officeEndTime: string
    }>
    // 营业结束时间
    officeEndTime: string
    // No comments found.
    total: number
  }
  // 28.投注站相关: 28.2.查询可提款投注站
  type REQ = {
    // 城市编号
    cityId?: number
    // 省编号
    provinceId?: number
    // 国家编号
    countryId?: number
    // No comments found.
    platformId?: number
  }
}
// 28.投注站相关: 28.3.用邀请码查询投注站/代理
declare namespace API_BETTINGSTATION_QUERYBYINVITE {
  // 28.投注站相关: 28.3.用邀请码查询投注站/代理
  type RES = {
    // No comments found.
    success: boolean
    // No comments found.
    msg: string
    // No comments found.
    code: number
    // No comments found.
    t: {
      // 主键
      id: number
      // 代码
      code: string
      // 国家代码
      nationCode: string
      // 币种编码
      currency: string
      // 名称
      name: string
      // 地址
      addr: string
      // 纬度
      lat: number
      // 经度
      lon: number
      // 门店图片地址
      pic: string
      // 电话
      telephone: string
      // 门店类型 0:直营，1:加盟
      type: number
      // 城市
      cityName: string
      // 省
      provinceName: string
      // 国家
      countryName: string
      // 状态 0: 筹备中，1: 营业中，2:暂停营业，3: 终止合作
      state: number
      // 营业开始时间
      officeStartTime: string
      // 营业结束时间
      officeEndTime: string
    }
  }
  // 28.投注站相关: 28.3.用邀请码查询投注站/代理
  type REQ = {
    // No comments found.
    platformId?: number
    // 邀请码
    inviteCode: string
  }
}
// 28.投注站相关: 28.4.根据投注站id查询投注站详情
declare namespace API_BETTINGSTATION_QUERYBYBETTINGSTATIONID {
  // 28.投注站相关: 28.4.根据投注站id查询投注站详情
  type RES = {
    // No comments found.
    success: boolean
    // No comments found.
    msg: string
    // No comments found.
    code: number
    // No comments found.
    t: {
      // 主键
      id: number
      // 代码
      code: string
      // 国家代码
      nationCode: string
      // 币种编码
      currency: string
      // 名称
      name: string
      // 地址
      addr: string
      // 纬度
      lat: number
      // 经度
      lon: number
      // 门店图片地址
      pic: string
      // 电话
      telephone: string
      // 门店类型 0:直营，1:加盟
      type: number
      // 城市
      cityName: string
      // 省
      provinceName: string
      // 国家
      countryName: string
      // 状态 0: 筹备中，1: 营业中，2:暂停营业，3: 终止合作
      state: number
      // 营业开始时间
      officeStartTime: string
      // 营业结束时间
      officeEndTime: string
    }
  }
  // 28.投注站相关: 28.4.根据投注站id查询投注站详情
  type REQ = {
    // No comments found.
    platformId?: number
    // No comments found.
    bettingStationId: number
  }
}
// 29.工作性质Controller: 29.1.获取所有工作性质列表
declare namespace API_WORKS_QUERYALL {
  // 29.工作性质Controller: 29.1.获取所有工作性质列表
  type RES = {
    // No comments found.
    success: boolean
    // No comments found.
    msg: string
    // No comments found.
    code: number
    // No comments found.
    rows: any[]
    // No comments found.
    total: number
  }
}
// 30.用户提款: 30.1.提款列表
declare namespace API_USERWITHDRAW_LIST {
  // 30.用户提款: 30.1.提款列表
  type RES = {
    // No comments found.
    success: boolean
    // No comments found.
    msg: string
    // No comments found.
    code: number
    // No comments found.
    rows: Array<{
      // 主键
      id: number
      // 用户id
      userId: number
      // 用户账号
      userName: string
      // 申请金额
      applyMoney: number
      // 申请时间
      applyTime: string
      // 银行名称
      bankName: string
      // 银行卡号
      bankCard: string
      // 持卡人
      bankAccount: string
      // 附加信息
      appendInfo: string
      // 审批状态：1-未受理；2-受理中；3-通过；4-不通过；5-撤销；6-锁定
      checkStatus: number
      // 审批原因
      reason: string
      // 订单号
      orderNo: string
      // 手续费
      fee: number
      // 用户提款时余额
      accountMoney: number
      // 出款渠道:0-手动出款,1-通汇出款,2-后台扣钱
      channel: number
      // 操作时间
      operatorTime: string
      // 出款类型 bankTransfer：银行提款， adminSubMoney: 后台扣款 cryptoTransfer:虚拟币提现 bettingStation: 投注站
      uwType: string
      // 虚拟币提现汇率
      exchangeRate: number
      // 虚拟币金额
      cryptoMoney: number
      // 虚拟币币种
      cryptoCurrency: string
      // 稽核未通过实际扣除金额
      deductMoney: number
      // 预约日期
      appointmentDate: string
      // 预约时间(小时)
      appointmentHour: string
    }>
    // 预约时间(小时)
    appointmentHour: string
    // No comments found.
    total: number
  }
  // 30.用户提款: 30.1.提款列表
  type REQ = {
    // 当前页
    page?: number
    // 每页条数
    pageSize?: number
    // 审批状态 不傳:全部 1: 處理中 3:通過 4:不通過
    checkStatus?: number
    // 开始时间
    startTime?: string | number
    // 结束时间
    endTime?: string | number
    // 充值类型bankTransfer：银行提款， adminSubMoney: 后台扣款
    uwType?: string
  }
}
// 30.用户提款: 30.2.添加提款信息
declare namespace API_USERWITHDRAW_ADD {
  // 30.用户提款: 30.2.添加提款信息
  type RES = {
    // No comments found.
    success: boolean
    // No comments found.
    msg: string
    // No comments found.
    code: number
  }
  // 30.用户提款: 30.2.添加提款信息
  type REQ = {
    // 用户id（后端赋值）
    userId?: number
    // 申请金额
    applyMoney: number
    // 提款密码
    withdrawPwd: string
    // 提款卡Id，如果是投注站/免提直充，银行id设置为0
    id: number
    // 投注站Id
    bettingStationId?: number
    // 预约日期
    appointmentDate?: string
    // 预约时间(小时)13:00~14:00
    appointmentHour?: string
    // 备注
    remark?: string
    // 移动端接入AF方的SDK后获取到的id
    appsFlyerId?: string
    // 订单发起时的客户端类型, 0：WEB, 1：MOBILE_BROWSER, 2：ANDROID, 3：IOS
    clientType?: number
    // 移动端接入s2s方的SDK后获取到的Key
    s2sKey?: string
  }
}
// 30.用户提款: 30.3.获取用户提款活动
declare namespace API_USERWITHDRAW_GETUSERWDACTIVITY {
  // 30.用户提款: 30.3.获取用户提款活动
  type RES = {
    // No comments found.
    success: boolean
    // No comments found.
    msg: string
    // No comments found.
    code: number
    // No comments found.
    t: {
      // 提款活动列表
      userAcList: Array<{
        // 活动id
        activityId: number
        // 活动名称
        activityName: string
        // 活动描述
        activityDesc: string
        // 打码量
        betMoney: number
        // 当前打码量
        nowBetMoney: number | number
        // 适用的游戏
        firmNames: string
      }>
    }
  }
  // 30.用户提款: 30.3.获取用户提款活动
  type REQ = {
    // 用户id（从x-seesion-token获取，无需传值）
    userId?: number
    // 平台id（从x-seesion-token获取，无需传值）
    platformId?: number
    // No comments found.
    locale?: any
  }
}
// 30.用户提款: 30.4.获取提现稽核资料
declare namespace API_USERWITHDRAW_GETUWCHECK {
  // 30.用户提款: 30.4.获取提现稽核资料
  type RES = {
    // No comments found.
    success: boolean
    // No comments found.
    msg: string
    // No comments found.
    code: number
    // No comments found.
    t: {
      // 使否需要提现稽核
      needCheck: boolean
      // 稽核纪录
      checkList: Array<{
        // 建立时间
        addTime: string
        // 金额
        money: number
        // 充值订单号
        orderNo: string
        // 活動类型:FIRSTRECHARGE：首充礼金,BET：流水礼金,LEVELUP：升级礼金,VIP_LEVEL_UP：晋级礼金,VIP_BIRTHDAY：生日礼金,WEEK_REDENP：每周红包,UNI_REDENP：专属红包,INVITE_CODE_PRIZE：邀请码注册礼金充值类型：onlinePayment：在线支付,bankTransfer：银行汇款,alipay：支付宝支付,weixin：微信支付,cft：财付通,adminAddMoney: 后台加款,adminActivityAddMoney: 活动加款
        type: string
        // 要求打码量
        validCheckAmount: number
        // 已完成打码量
        finishValidAmount: number
        // 尚需要打码量
        unFinishValidAmount: number
        // 扣除金額
        deductMoney: number
        // 是否通过稽核
        isPass: number
        // type 1 充值 2 活動
        auditType: number
        // 适用游戏
        validGameCode: string
        // 适用游戏 MAP
        validGameCodeMap: any
      }>
      // 稽核结果总和
      total: {
        // 扣除金額
        deductMoney: number
        // 尚需要打码量
        unFinishValidAmount: number
      }
      // 新稽核开关
      newAuditCheckSwitch: boolean
    }
  }
  // 30.用户提款: 30.4.获取提现稽核资料
  type REQ = {
    // 用户id（从x-seesion-token获取，无需传值）
    userId?: number
    // 平台id（从x-seesion-token获取，无需传值）
    platformId?: number
  }
}
// 31.第三方游戏接口: 31.1.获取余额
declare namespace API_THIRDAPI_FIRMTYPE_GETBALANCE {
  // 31.第三方游戏接口: 31.1.获取余额
  type RES = {
    // No comments found.
    success: boolean
    // No comments found.
    msg: string
    // No comments found.
    code: number
    // No comments found.
    t: {
      // 余额
      money: number
      // No comments found.
      transRemaining: number
      // 兑换比例 例如3000:1
      remark: string
      // No comments found.
      groupName: string
    }
  }
  // 31.第三方游戏接口: 31.1.获取余额
  type REQ = {
    // No comments found.
    firmType: string
    // 用户id（从x-seesion-token获取，无需传值）
    userId?: number
    // 平台id（从x-seesion-token获取，无需传值）
    platformId?: number
  }
}
// 31.第三方游戏接口: 31.2.登录
declare namespace API_THIRDAPI_FIRMTYPE_LOGIN {
  // 31.第三方游戏接口: 31.2.登录
  type RES = {
    // No comments found.
    success: boolean
    // No comments found.
    msg: string
    // No comments found.
    code: number
  }
  // 31.第三方游戏接口: 31.2.登录
  type REQ = {
    // No comments found.
    firmType: string
    // 游戏编码
    gameCode: string
    // 登录来源（0：WEB, 1：MOBILE_BROWSER, 2：ANDROID, 3：IOS）
    loginSrc?: number
    // No comments found.
    playCode?: string
    // 用户id（从x-seesion-token获取，无需传值）
    userId?: number
    // 平台id（从x-seesion-token获取，无需传值）
    platformId?: number
  }
}
// 31.第三方游戏接口: 31.3.所有第三方平台余额获取
declare namespace API_THIRDAPI_GETALLBALANCE {
  // 31.第三方游戏接口: 31.3.所有第三方平台余额获取
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
  // 31.第三方游戏接口: 31.3.所有第三方平台余额获取
  type REQ = {
    // 用户id（从x-seesion-token获取，无需传值）
    userId?: number
    // 平台id（从x-seesion-token获取，无需传值）
    platformId?: number
  }
}
// 31.第三方游戏接口: 31.4.转账
declare namespace API_THIRDAPI_OUTPLAT_INPLAT_TRANSFER {
  // 31.第三方游戏接口: 31.4.转账
  type RES = {
    // No comments found.
    success: boolean
    // No comments found.
    msg: string
    // No comments found.
    code: number
  }
  // 31.第三方游戏接口: 31.4.转账
  type REQ = {
    // No comments found.
    outPlat: string
    // No comments found.
    inPlat: string
    // 单位元，整数
    amount: number
    // 用户id（从x-seesion-token获取，无需传值）
    userId?: number
    // 平台id（从x-seesion-token获取，无需传值）
    platformId?: number
  }
}
// 31.第三方游戏接口: 31.5.一键转出
declare namespace API_THIRDAPI_ALLTRANSFEROUT {
  // 31.第三方游戏接口: 31.5.一键转出
  type RES = {
    // No comments found.
    success: boolean
    // No comments found.
    msg: string
    // No comments found.
    code: number
  }
  // 31.第三方游戏接口: 31.5.一键转出
  type REQ = {
    // 用户id（从x-seesion-token获取，无需传值）
    userId?: number
    // 平台id（从x-seesion-token获取，无需传值）
    platformId?: number
  }
}
// 31.第三方游戏接口: 31.6.自动转入、转出（先将第三方都转至平台，再将平台的余额转至第三方）
declare namespace API_THIRDAPI_INPLAT_AUTOTRANSFER {
  // 31.第三方游戏接口: 31.6.自动转入、转出（先将第三方都转至平台，再将平台的余额转至第三方）
  type RES = {
    // No comments found.
    success: boolean
    // No comments found.
    msg: string
    // No comments found.
    code: number
  }
  // 31.第三方游戏接口: 31.6.自动转入、转出（先将第三方都转至平台，再将平台的余额转至第三方）
  type REQ = {
    // No comments found.
    inPlat: string
    // 用户id（从x-seesion-token获取，无需传值）
    userId?: number
    // 平台id（从x-seesion-token获取，无需传值）
    platformId?: number
  }
}
// 31.第三方游戏接口: 31.7.兑换记录
declare namespace API_THIRDAPI_QUERYTRANSFERS {
  // 31.第三方游戏接口: 31.7.兑换记录
  type RES = {
    // No comments found.
    success: boolean
    // No comments found.
    msg: string
    // No comments found.
    code: number
    // No comments found.
    rows: Array<{
      // id
      id: number
      // 用户id
      userId: number
      // 用户名
      userName: string
      // 代理id
      dlId: number
      // 代理名
      dlName: string
      // 转入账户
      firmTypeIn: string
      // 转出账户
      firmTypeOut: string
      // 订单号
      orderNo: string
      // 金额
      money: number
      // 状态 1-处理中;2-成功;3-失败
      status: number
      // 添加时间
      addTime: string
      // 统计时间
      statDate: string
      // 操作人员
      operator: string
      // 操作时间
      operatorTime: string
      // 备注
      remark: string
      // 平台id
      platformId: number
      // 币别
      currency: string
      // 系统币别对此币种汇率, 币种金额/此汇率=系统金额
      sysRate: number
      // 充值金额 系统币别
      sysMoney: number
    }>
    // 充值金额 系统币别
    sysMoney: number
    // No comments found.
    total: number
  }
  // 31.第三方游戏接口: 31.7.兑换记录
  type REQ = {
    // 当前页
    page?: number
    // 每页条数
    pageSize?: number
    // 开始时间（时间戳）
    startTime?: string | number
    // 结束时间（时间戳）
    endTime?: string | number
    // 转入方，CG。AG，KT
    firmTypeIn?: string
    // 转出方
    firmTypeOut?: string
    // 状态
    status?: number
    // 订单号
    orderNo?: string
  }
}
// 31.第三方游戏接口: 31.8.一级订单查询
declare namespace API_THIRDAPI_QUERYFIRSTORDERS {
  // 31.第三方游戏接口: 31.8.一级订单查询
  type RES = {
    // No comments found.
    success: boolean
    // No comments found.
    msg: string
    // No comments found.
    code: number
    // No comments found.
    t: {
      // No comments found.
      orderList: Array<{
        // 有效投注
        validBetAmount: number
        // 系统有效投注
        sysValidBetAmount: number
        // 玩家输赢额度
        netAmount: number
        // 结算日期
        statDate: string
        // 参与用户数
        userCount: number
        // 下注数
        betCount: number
        // 投注额度
        betAmount: number
        // 投注额度
        sysBetAmount: number
        // 平台
        firmType: string
        // 产商游戏
        firmCode: string
        // 第三方名称
        gameName: string
        // 系统玩家输赢额度
        sysNetAmount: number
        // 一级分类
        gameCategoryName: string
        // 总派彩
        jackpot: number
        // Jackpot 派彩,第三方平台奖池派奖= payout
        jackBonus: number
        // Jackpot 派彩,第三方平台奖池派奖= payout
        sysJackBonus: number
        // 参与游戏数
        gameNameCount: number
      }>
      // 总下注
      totalBet: number
      // 总有效下注
      totalValidBet: number
      // 总输赢
      totalWin: number
      // 总笔数
      totalCount: number
    }
  }
  // 31.第三方游戏接口: 31.8.一级订单查询
  type REQ = {
    // 当前页
    page?: number
    // 每页条数
    pageSize?: number
    // 开始时间（时间戳）
    startTime?: string | number
    // 结束时间（时间戳）
    endTime?: string | number
    // 厂商类型，如AG，KT
    firmType?: string
    // 厂商下的游戏
    firmCode?: string
    // 游戏
    gameType?: string
    // 游戏分类编码
    code?: string
    // No comments found.
    firmTypes?: any[]
    // No comments found.
    firmCodes?: any[]
    // No comments found.
    userId?: number
    // No comments found.
    userName?: string
    // No comments found.
    platformCode?: string
    // No comments found.
    workerNo?: number
    // No comments found.
    flag?: number
    // No comments found.
    platformId?: number
    // No comments found.
    testFlag?: number
    // 0: 线上, 1:投注站
    channelType?: number
    // 投注站编号(线上的话为null)
    bettingStationId?: number
  }
}
// 31.第三方游戏接口: 31.9.新版一级订单查询
declare namespace API_THIRDAPI_V2_ORDERS {
  // 31.第三方游戏接口: 31.9.新版一级订单查询
  type RES = {
    // No comments found.
    success: boolean
    // No comments found.
    msg: string
    // No comments found.
    code: number
    // No comments found.
    t: {
      // 汇总注单
      orderList: Array<{
        // 有效投注
        validBetAmount: number
        // 玩家输赢额度
        netAmount: number
        // 下注数
        betCount: number
        // 投注额度
        betAmount: number
        // 三方游戏代码
        firmCode: string
        // 三方游戏id
        gameFirmId: string
        // 最新下注时间
        maxBetTime: number
        // 第三方名称
        gameName: string
      }>
      // 总下注
      totalBet: number
      // 总有效下注
      totalValidBet: number
      // 总输赢
      totalWin: number
      // 总笔数
      totalCount: number
    }
  }
  // 31.第三方游戏接口: 31.9.新版一级订单查询
  type REQ = {
    // 当前页
    page?: number
    // 每页条数
    pageSize?: number
    // 开始时间（时间戳）
    startTime?: string | number
    // 结束时间（时间戳）
    endTime?: string | number
    // 厂商类型，如AG，KT
    firmType?: string
    // 厂商下的游戏
    firmCode?: string
    // 游戏
    gameType?: string
    // 游戏分类编码
    code?: string
    // No comments found.
    firmTypes?: any[]
    // No comments found.
    firmCodes?: any[]
    // No comments found.
    userId?: number
    // No comments found.
    userName?: string
    // No comments found.
    platformCode?: string
    // No comments found.
    workerNo?: number
    // No comments found.
    flag?: number
    // No comments found.
    platformId?: number
    // No comments found.
    testFlag?: number
    // 0: 线上, 1:投注站
    channelType?: number
    // 投注站编号(线上的话为null)
    bettingStationId?: number
  }
}
// 31.第三方游戏接口: 31.10.二级订单查询
declare namespace API_THIRDAPI_QUERYSECONDORDERS {
  // 31.第三方游戏接口: 31.10.二级订单查询
  type RES = {
    // No comments found.
    success: boolean
    // No comments found.
    msg: string
    // No comments found.
    code: number
    // No comments found.
    t: {
      // No comments found.
      orderList: {
        // No comments found.
        data: Array<{
          // No comments found.
          userId: number
          // No comments found.
          userName: string
          // No comments found.
          fullName: string
          // No comments found.
          dlId: number
          // No comments found.
          dlName: string
          // No comments found.
          zdlId: number
          // No comments found.
          zdlName: string
          // No comments found.
          gameFirmId: number
          // No comments found.
          firmType: string
          // No comments found.
          firmCode: string
          // No comments found.
          gameType: string
          // No comments found.
          gameName: string
          // No comments found.
          orderNo: string
          // No comments found.
          rebate: number
          // No comments found.
          rebateAmount: number
          // No comments found.
          sysRebateAmount: number
          // No comments found.
          superRebates: any[]
          // No comments found.
          betAmount: number
          // No comments found.
          sysBetAmount: number
          // No comments found.
          validBetAmount: number
          // No comments found.
          sysValidBetAmount: number
          // No comments found.
          netAmount: number
          // No comments found.
          sysNetAmount: number
          // No comments found.
          flag: number
          // No comments found.
          betTime: string
          // No comments found.
          addTime: string
          // No comments found.
          updateTime: string
          // No comments found.
          statDate: string
          // No comments found.
          remark: string
          // No comments found.
          platformId: number
          // No comments found.
          platformCode: string
          // No comments found.
          jackpot: number
          // No comments found.
          sysJackpot: number
          // No comments found.
          jackBonus: number
          // No comments found.
          sysJackBonus: number
          // No comments found.
          testFlag: number
          // No comments found.
          queryCode: string
          // No comments found.
          currency: string
          // No comments found.
          creditAccount: number
          // No comments found.
          cost: number
          // No comments found.
          costAmount: number
          // No comments found.
          sysRate: number
          // No comments found.
          workerNo: number
          // No comments found.
          category: string
          // No comments found.
          extType: string
          // No comments found.
          odds: number
          // No comments found.
          walletType: number
          // No comments found.
          userIp: string
          // No comments found.
          device: number
          // No comments found.
          channelType: number
          // No comments found.
          bettingStationId: number
          // No comments found.
          bettingStationCode: string
        }>
        // No comments found.
        totalCount: number
        // No comments found.
        otherData: any
      }
      // No comments found.
      totalBet: number
      // No comments found.
      totalValidBet: number
      // No comments found.
      totalWin: number
      // No comments found.
      totalCount: number
      // No comments found.
      totalBetSum: number
      // No comments found.
      totalJackpot: number
      // No comments found.
      totalJackBonus: number
    }
  }
  // 31.第三方游戏接口: 31.10.二级订单查询
  type REQ = {
    // 当前页
    page?: number
    // 每页条数
    pageSize?: number
    // 开始时间（时间戳）
    startTime?: string | number
    // 结束时间（时间戳）
    endTime?: string | number
    // 开始时间
    startTime: string | number
    // 结束时间
    endTime: string | number
    // 导出文件类型
    exportType?: string
    // 厂商类型，如AG，KT
    firmType?: string
    // 厂商下的游戏
    firmCode?: string
    // 游戏类型
    gameType?: string
    // 用户名
    userName?: string
    // 状态
    flag?: string
    // 游戏分类编码
    code?: string
    // 订单号
    orderNo?: string
    // No comments found.
    firmTypes?: any[]
    // No comments found.
    firmCodes?: any[]
    // No comments found.
    dlId?: number
    // No comments found.
    testFlag?: number
    // No comments found.
    orderField?: string
    // No comments found.
    platformCode?: string
    // No comments found.
    sort?: boolean
    // No comments found.
    minValidBetAmount?: number
    // No comments found.
    maxValidBetAmount?: number
    // 是否查询汇总数据
    collect?: boolean
    // No comments found.
    platformId?: number
    // No comments found.
    channelType?: number
    // No comments found.
    bettingStationId?: number
    // 设备
    device?: number
    // No comments found.
    jackBonus?: boolean
  }
}
// 31.第三方游戏接口: 31.11.访客模式登录
declare namespace API_THIRDAPI_GUESTLOGIN_FIRMTYPE {
  // 31.第三方游戏接口: 31.11.访客模式登录
  type RES = {
    // No comments found.
    success: boolean
    // No comments found.
    msg: string
    // No comments found.
    code: number
  }
  // 31.第三方游戏接口: 31.11.访客模式登录
  type REQ = {
    // No comments found.
    firmType: string
    // 游戏编码
    gameCode: string
    // 登录来源（0：WEB, 1：MOBILE_BROWSER, 2：ANDROID, 3：IOS）
    loginSrc?: number
    // No comments found.
    playCode?: string
    // No comments found.
    platformId?: number
  }
}
// 32.歐洲盃积分榜: 32.1.取得賽事時間列表
declare namespace API_EUROPECUP_DATE {
  // 32.歐洲盃积分榜: 32.1.取得賽事時間列表
  type RES = {
    // No comments found.
    success: boolean
    // No comments found.
    msg: string
    // No comments found.
    code: number
    // No comments found.
    rows: any[]
    // No comments found.
    total: number
  }
  // 32.歐洲盃积分榜: 32.1.取得賽事時間列表
  type REQ = {
    // 客戶端當天的00:00時間戳，日期返回會以這個當作切日期的標準
    userTodayBeginTime?: string
  }
}
// 32.歐洲盃积分榜: 32.2.取得最近赛事
declare namespace API_EUROPECUP_LATEST {
  // 32.歐洲盃积分榜: 32.2.取得最近赛事
  type RES = {
    // No comments found.
    success: boolean
    // No comments found.
    msg: string
    // No comments found.
    code: number
    // No comments found.
    rows: Array<{
      // 赛事或赛季id
      matchId: string
      // 赛事信息
      matchInfo: {
        // 赛事或赛季id
        id: string
        // 联赛id
        leagueId: string
        // 联赛名称
        leagueName: string
        // 主队id
        homeId: string
        // 主队名称
        homeName: string
        // 客队id
        awayId: string
        // 客队名称
        awayName: string
        // 赛事或赛季开始时间
        startTime: string | number
        // 赛事或赛季结束时间
        endTime: string | number
        // 赛事状态 0：未开始，1：比赛中，2：已结束，3：延期，4：已取消
        status: number
        // 该赛事之全部可投注玩法类数量
        playCateNum: number
        // 賽季名稱
        name: string
        // 圖片
        img: string
        // 訊息
        msg: string
        // 是否可以参加过关，0：否，1：是
        parlay: number
        // 有无赛事直播 0:无 1:有
        liveVideo: number
        // 是否是中立场，1：是，0：否
        neutral: number
        // 是否有特优赔率，1：是，0：否
        eps: number
        // 赛事的赛制类型,目前仅网球排球需要显示,0:默认值 3:三战两胜 5:五战三胜...
        spt: number
        // 动画映射id
        trackerId: string
        // 小金直播id
        tvId: string
        // 第三方直播id
        streamId: string
        // 游戏类型
        gameType: string
        // 数据源
        source: number
        // 主队图标
        homeIcon: string
        // 主队图标(svg)
        homeIconSvg: string
        // 客队图标
        awayIcon: string
        // 客队图标(svg)
        awayIconSvg: string
        // 是否滚盘中 0：否，1：是
        inplay: number
        // 是否有主播直播 0：否，1：是
        isLive: number
        // 房间号
        roundNo: string
        // 主播头像
        streamerIcon: string
        // 主播名称
        StreamerName: string
        // 封面路径
        frontCoverUrl: string
        // 赛事事件列表,结构同ws推送的消息格式,主要提供给推荐赛事/热门赛事接口获取比分与时间,对应ws事件名称为MATCH_STATUS_CHANGE/MATCH_CLOCK
        eventList: Array<{
          // No comments found.
          eventType: string
        }>
        // No comments found.
        eventType: string
        // 是否为fiba赛事
        isFiba: boolean
        // 是否为欧洲杯赛事
        isEuropeCup: boolean
        // cashout 狀態 0:不可 ,1:可
        cashoutStatus: number
      }
      // 联赛名称
      leagueName: string
      // 賽事日期
      matchDate: string
      // 赛事或赛季开始时间
      startTime: string | number
      // 赛事或赛季结束时间
      endTime: string | number
      // 赛事状态 0：未开始，1：比赛中，2：已结束，3：延期，4：已取消
      status: number
      // 獲勝隊伍(主H, 客A)
      winTeam: string
      // 从match result取得的分数
      score: string
      // 主隊資訊
      homeTeam: {
        // 主键
        id: number
        // 隊伍id
        teamId: string
        // 球隊名
        teamName: string
        // logo
        logo: string
        // 小组id
        groupId: string
        // 已赛次數
        raced: number
        // 胜/平/负
        matchResult: string
        // 进/失
        gainLose: string
        // 积分
        integral: number
        // 晉級 0-否,1-是
        advance: number
        // 胜场
        win: string
        // 败场
        lose: string
        // 座標
        coordinates: string
        // 分數
        score: string
        // 排名
        teamSort: number
      }
      // 客隊資訊
      awayTeam: {
        // 主键
        id: number
        // 隊伍id
        teamId: string
        // 球隊名
        teamName: string
        // logo
        logo: string
        // 小组id
        groupId: string
        // 已赛次數
        raced: number
        // 胜/平/负
        matchResult: string
        // 进/失
        gainLose: string
        // 积分
        integral: number
        // 晉級 0-否,1-是
        advance: number
        // 胜场
        win: string
        // 败场
        lose: string
        // 座標
        coordinates: string
        // 分數
        score: string
        // 排名
        teamSort: number
      }
      // 排序
      sort: number
    }>
    // 排序
    sort: number
    // No comments found.
    total: number
  }
  // 32.歐洲盃积分榜: 32.2.取得最近赛事
  type REQ = {
    // /api/front/fiba/date前端會用這邊取得的時間然後轉換成當天00:00跟23:59的時間戳
    startTime?: string | number
    // No comments found.
    endTime?: string | number
  }
}
// 32.歐洲盃积分榜: 32.3.根据类型取得赛事
declare namespace API_EUROPECUP_GAMES {
  // 32.歐洲盃积分榜: 32.3.根据类型取得赛事
  type RES = {
    // No comments found.
    success: boolean
    // No comments found.
    msg: string
    // No comments found.
    code: number
    // No comments found.
    t: {
      // group底下的队伍
      groupTeamList: Array<{
        // 主键
        id: number
        // 隊伍id
        teamId: string
        // 球隊名
        teamName: string
        // logo
        logo: string
        // 小组id
        groupId: string
        // 已赛次數
        raced: number
        // 胜/平/负
        matchResult: string
        // 进/失
        gainLose: string
        // 积分
        integral: number
        // 晉級 0-否,1-是
        advance: number
        // 胜场
        win: string
        // 败场
        lose: string
        // 座標
        coordinates: string
        // 分數
        score: string
        // 排名
        teamSort: number
      }>
      // group底下的赛事分日期
      groupDateMatchList: Array<{
        // No comments found.
        matchDate: string
        // group底下的赛事
        matchInfoList: Array<{
          // 赛事或赛季id
          matchId: string
          // 赛事信息
          matchInfo: {
            // 赛事或赛季id
            id: string
            // 联赛id
            leagueId: string
            // 联赛名称
            leagueName: string
            // 主队id
            homeId: string
            // 主队名称
            homeName: string
            // 客队id
            awayId: string
            // 客队名称
            awayName: string
            // 赛事或赛季开始时间
            startTime: string | number
            // 赛事或赛季结束时间
            endTime: string | number
            // 赛事状态 0：未开始，1：比赛中，2：已结束，3：延期，4：已取消
            status: number
            // 该赛事之全部可投注玩法类数量
            playCateNum: number
            // 賽季名稱
            name: string
            // 圖片
            img: string
            // 訊息
            msg: string
            // 是否可以参加过关，0：否，1：是
            parlay: number
            // 有无赛事直播 0:无 1:有
            liveVideo: number
            // 是否是中立场，1：是，0：否
            neutral: number
            // 是否有特优赔率，1：是，0：否
            eps: number
            // 赛事的赛制类型,目前仅网球排球需要显示,0:默认值 3:三战两胜 5:五战三胜...
            spt: number
            // 动画映射id
            trackerId: string
            // 小金直播id
            tvId: string
            // 第三方直播id
            streamId: string
            // 游戏类型
            gameType: string
            // 数据源
            source: number
            // 主队图标
            homeIcon: string
            // 主队图标(svg)
            homeIconSvg: string
            // 客队图标
            awayIcon: string
            // 客队图标(svg)
            awayIconSvg: string
            // 是否滚盘中 0：否，1：是
            inplay: number
            // 是否有主播直播 0：否，1：是
            isLive: number
            // 房间号
            roundNo: string
            // 主播头像
            streamerIcon: string
            // 主播名称
            StreamerName: string
            // 封面路径
            frontCoverUrl: string
            // 赛事事件列表,结构同ws推送的消息格式,主要提供给推荐赛事/热门赛事接口获取比分与时间,对应ws事件名称为MATCH_STATUS_CHANGE/MATCH_CLOCK
            eventList: Array<{
              // No comments found.
              eventType: string
            }>
            // No comments found.
            eventType: string
            // 是否为fiba赛事
            isFiba: boolean
            // 是否为欧洲杯赛事
            isEuropeCup: boolean
            // cashout 狀態 0:不可 ,1:可
            cashoutStatus: number
          }
          // 联赛名称
          leagueName: string
          // 賽事日期
          matchDate: string
          // 赛事或赛季开始时间
          startTime: string | number
          // 赛事或赛季结束时间
          endTime: string | number
          // 赛事状态 0：未开始，1：比赛中，2：已结束，3：延期，4：已取消
          status: number
          // 獲勝隊伍(主H, 客A)
          winTeam: string
          // 从match result取得的分数
          score: string
          // 主隊資訊
          homeTeam: {
            // 主键
            id: number
            // 隊伍id
            teamId: string
            // 球隊名
            teamName: string
            // logo
            logo: string
            // 小组id
            groupId: string
            // 已赛次數
            raced: number
            // 胜/平/负
            matchResult: string
            // 进/失
            gainLose: string
            // 积分
            integral: number
            // 晉級 0-否,1-是
            advance: number
            // 胜场
            win: string
            // 败场
            lose: string
            // 座標
            coordinates: string
            // 分數
            score: string
            // 排名
            teamSort: number
          }
          // 客隊資訊
          awayTeam: {
            // 主键
            id: number
            // 隊伍id
            teamId: string
            // 球隊名
            teamName: string
            // logo
            logo: string
            // 小组id
            groupId: string
            // 已赛次數
            raced: number
            // 胜/平/负
            matchResult: string
            // 进/失
            gainLose: string
            // 积分
            integral: number
            // 晉級 0-否,1-是
            advance: number
            // 胜场
            win: string
            // 败场
            lose: string
            // 座標
            coordinates: string
            // 分數
            score: string
            // 排名
            teamSort: number
          }
          // 排序
          sort: number
        }>
      }>
      // group底下的赛事不分日期
      groupMatchList: Array<{
        // 赛事或赛季id
        matchId: string
        // 赛事信息
        matchInfo: {
          // 赛事或赛季id
          id: string
          // 联赛id
          leagueId: string
          // 联赛名称
          leagueName: string
          // 主队id
          homeId: string
          // 主队名称
          homeName: string
          // 客队id
          awayId: string
          // 客队名称
          awayName: string
          // 赛事或赛季开始时间
          startTime: string | number
          // 赛事或赛季结束时间
          endTime: string | number
          // 赛事状态 0：未开始，1：比赛中，2：已结束，3：延期，4：已取消
          status: number
          // 该赛事之全部可投注玩法类数量
          playCateNum: number
          // 賽季名稱
          name: string
          // 圖片
          img: string
          // 訊息
          msg: string
          // 是否可以参加过关，0：否，1：是
          parlay: number
          // 有无赛事直播 0:无 1:有
          liveVideo: number
          // 是否是中立场，1：是，0：否
          neutral: number
          // 是否有特优赔率，1：是，0：否
          eps: number
          // 赛事的赛制类型,目前仅网球排球需要显示,0:默认值 3:三战两胜 5:五战三胜...
          spt: number
          // 动画映射id
          trackerId: string
          // 小金直播id
          tvId: string
          // 第三方直播id
          streamId: string
          // 游戏类型
          gameType: string
          // 数据源
          source: number
          // 主队图标
          homeIcon: string
          // 主队图标(svg)
          homeIconSvg: string
          // 客队图标
          awayIcon: string
          // 客队图标(svg)
          awayIconSvg: string
          // 是否滚盘中 0：否，1：是
          inplay: number
          // 是否有主播直播 0：否，1：是
          isLive: number
          // 房间号
          roundNo: string
          // 主播头像
          streamerIcon: string
          // 主播名称
          StreamerName: string
          // 封面路径
          frontCoverUrl: string
          // 赛事事件列表,结构同ws推送的消息格式,主要提供给推荐赛事/热门赛事接口获取比分与时间,对应ws事件名称为MATCH_STATUS_CHANGE/MATCH_CLOCK
          eventList: Array<{
            // No comments found.
            eventType: string
          }>
          // No comments found.
          eventType: string
          // 是否为fiba赛事
          isFiba: boolean
          // 是否为欧洲杯赛事
          isEuropeCup: boolean
          // cashout 狀態 0:不可 ,1:可
          cashoutStatus: number
        }
        // 联赛名称
        leagueName: string
        // 賽事日期
        matchDate: string
        // 赛事或赛季开始时间
        startTime: string | number
        // 赛事或赛季结束时间
        endTime: string | number
        // 赛事状态 0：未开始，1：比赛中，2：已结束，3：延期，4：已取消
        status: number
        // 獲勝隊伍(主H, 客A)
        winTeam: string
        // 从match result取得的分数
        score: string
        // 主隊資訊
        homeTeam: {
          // 主键
          id: number
          // 隊伍id
          teamId: string
          // 球隊名
          teamName: string
          // logo
          logo: string
          // 小组id
          groupId: string
          // 已赛次數
          raced: number
          // 胜/平/负
          matchResult: string
          // 进/失
          gainLose: string
          // 积分
          integral: number
          // 晉級 0-否,1-是
          advance: number
          // 胜场
          win: string
          // 败场
          lose: string
          // 座標
          coordinates: string
          // 分數
          score: string
          // 排名
          teamSort: number
        }
        // 客隊資訊
        awayTeam: {
          // 主键
          id: number
          // 隊伍id
          teamId: string
          // 球隊名
          teamName: string
          // logo
          logo: string
          // 小组id
          groupId: string
          // 已赛次數
          raced: number
          // 胜/平/负
          matchResult: string
          // 进/失
          gainLose: string
          // 积分
          integral: number
          // 晉級 0-否,1-是
          advance: number
          // 胜场
          win: string
          // 败场
          lose: string
          // 座標
          coordinates: string
          // 分數
          score: string
          // 排名
          teamSort: number
        }
        // 排序
        sort: number
      }>
    }
  }
  // 32.歐洲盃积分榜: 32.3.根据类型取得赛事
  type REQ = {
    // group分组编码 (Group A, Group B)
    groupId?: string
  }
}
// 32.歐洲盃积分榜: 32.4.取得淘汰賽資料
declare namespace API_EUROPECUP_KNOCKOUTS {
  // 32.歐洲盃积分榜: 32.4.取得淘汰賽資料
  type RES = {
    // No comments found.
    success: boolean
    // No comments found.
    msg: string
    // No comments found.
    code: number
    // No comments found.
    t: {
      // No comments found.
      knockoutList: Array<{
        // 淘汰賽類型 淘汰賽類型 1 - 1/8;2 - 1/4;3 - 半决赛;4 - 决赛
        knockoutType: number
        // 淘汰賽隊伍
        knockoutMatchInfoList: Array<{
          // 赛事或赛季id
          matchId: string
          // 赛事信息
          matchInfo: {
            // 赛事或赛季id
            id: string
            // 联赛id
            leagueId: string
            // 联赛名称
            leagueName: string
            // 主队id
            homeId: string
            // 主队名称
            homeName: string
            // 客队id
            awayId: string
            // 客队名称
            awayName: string
            // 赛事或赛季开始时间
            startTime: string | number
            // 赛事或赛季结束时间
            endTime: string | number
            // 赛事状态 0：未开始，1：比赛中，2：已结束，3：延期，4：已取消
            status: number
            // 该赛事之全部可投注玩法类数量
            playCateNum: number
            // 賽季名稱
            name: string
            // 圖片
            img: string
            // 訊息
            msg: string
            // 是否可以参加过关，0：否，1：是
            parlay: number
            // 有无赛事直播 0:无 1:有
            liveVideo: number
            // 是否是中立场，1：是，0：否
            neutral: number
            // 是否有特优赔率，1：是，0：否
            eps: number
            // 赛事的赛制类型,目前仅网球排球需要显示,0:默认值 3:三战两胜 5:五战三胜...
            spt: number
            // 动画映射id
            trackerId: string
            // 小金直播id
            tvId: string
            // 第三方直播id
            streamId: string
            // 游戏类型
            gameType: string
            // 数据源
            source: number
            // 主队图标
            homeIcon: string
            // 主队图标(svg)
            homeIconSvg: string
            // 客队图标
            awayIcon: string
            // 客队图标(svg)
            awayIconSvg: string
            // 是否滚盘中 0：否，1：是
            inplay: number
            // 是否有主播直播 0：否，1：是
            isLive: number
            // 房间号
            roundNo: string
            // 主播头像
            streamerIcon: string
            // 主播名称
            StreamerName: string
            // 封面路径
            frontCoverUrl: string
            // 赛事事件列表,结构同ws推送的消息格式,主要提供给推荐赛事/热门赛事接口获取比分与时间,对应ws事件名称为MATCH_STATUS_CHANGE/MATCH_CLOCK
            eventList: Array<{
              // No comments found.
              eventType: string
            }>
            // No comments found.
            eventType: string
            // 是否为fiba赛事
            isFiba: boolean
            // 是否为欧洲杯赛事
            isEuropeCup: boolean
            // cashout 狀態 0:不可 ,1:可
            cashoutStatus: number
          }
          // 联赛名称
          leagueName: string
          // 賽事日期
          matchDate: string
          // 赛事或赛季开始时间
          startTime: string | number
          // 赛事或赛季结束时间
          endTime: string | number
          // 赛事状态 0：未开始，1：比赛中，2：已结束，3：延期，4：已取消
          status: number
          // 獲勝隊伍(主H, 客A)
          winTeam: string
          // 从match result取得的分数
          score: string
          // 主隊資訊
          homeTeam: {
            // 主键
            id: number
            // 隊伍id
            teamId: string
            // 球隊名
            teamName: string
            // logo
            logo: string
            // 小组id
            groupId: string
            // 已赛次數
            raced: number
            // 胜/平/负
            matchResult: string
            // 进/失
            gainLose: string
            // 积分
            integral: number
            // 晉級 0-否,1-是
            advance: number
            // 胜场
            win: string
            // 败场
            lose: string
            // 座標
            coordinates: string
            // 分數
            score: string
            // 排名
            teamSort: number
          }
          // 客隊資訊
          awayTeam: {
            // 主键
            id: number
            // 隊伍id
            teamId: string
            // 球隊名
            teamName: string
            // logo
            logo: string
            // 小组id
            groupId: string
            // 已赛次數
            raced: number
            // 胜/平/负
            matchResult: string
            // 进/失
            gainLose: string
            // 积分
            integral: number
            // 晉級 0-否,1-是
            advance: number
            // 胜场
            win: string
            // 败场
            lose: string
            // 座標
            coordinates: string
            // 分數
            score: string
            // 排名
            teamSort: number
          }
          // 排序
          sort: number
        }>
      }>
    }
  }
}
// 33.充值配置信息: 33.1.获取充值配置信息
declare namespace API_RECHCFG_MAP {
  // 33.充值配置信息: 33.1.获取充值配置信息
  type RES = {
    // No comments found.
    success: boolean
    // No comments found.
    msg: string
    // No comments found.
    code: number
    // No comments found.
    t: {
      // 银行lfny
      banks: Array<{
        // 名称
        name: string
        // 值
        value: string
        // 排序
        sort: number
        // 是否启用 1是 0否
        open: number
        // 銀行類型, 0:一般銀行, 1:EWallet,
        bankType: number
        // No comments found.
        currency: any[]
        // No comments found.
        maxAccountDigit: number
      }>
      // 充值配置
      rechCfgs: Array<{
        // 主键
        id: number
        // onlinePayment：在线支付，bankTransfer：银行汇款，alipay：支付宝支付，weixin：微信支付，cft：财付通,cryptoPay:虚拟币支付
        rechType: string
        // 充值名称
        rechName: string
        // 充值账户名
        payeeName: string
        // 充值账号
        payee: string
        // 前端显示说明
        remark: string
        // 后端显示备注说明
        remark2: string
        // 二维码支付图片
        qrCode: string
        // 商品名称，虚拟币合约信息
        prodName: string
        // 扩展参数
        para1: string
        // 充值最小金额
        minMoney: number
        // 充值最大金额
        maxMoney: number
        // 常用金额
        commonAmount: string
        // 前端页面提示文字
        pageDesc: string
        // 在线充值类型id
        onlineTypeId: number
        // 在线充值类型：1-网银在线充值、2-支付宝在线充值、3-微信在线充值、4-qq在线充值、5-出款、6、信用卡在线充值、7、百度钱包、8-京东钱包9-银联快捷 11-虚拟币支付 12-虚拟币出款
        onlineType: number
        // 支持类型:0-都支付，1-电脑版，2-手机版
        pcMobile: number
        // 银行列表，银行在线支付有此列表
        banks: Array<{
          // 银行代码
          value: string
          // ico
          ico: string
          // 银行名称
          bankName: string
        }>
        // 赠送金额
        rebateFee: number
        // 支付入口
        payUrl: string
        // 汇率
        exchangeRate: number
        // 汇率列表
        exchangeList: Array<{
          // 汇率币总
          exchangeCurrency: string
          // 汇率
          exchangeRate: number
        }>
        // 币别
        currency: string
        // 是否开启随机码 1开启 0关闭
        randomCode: number
        // 是否开启'認證姓名或帳號' 1开启 0关闭
        verifyNameOrAccount: number
        // 前端显示名称
        frontendDisplayName: string
      }>
      // 充值类型，name：名称，value：类型（onlinePayment：在线支付，transferPayment：转账支付，bankTransfer：银行汇款，alipay：支付宝支付，weixin：微信支付，cft：财付通,cryptoPay:虚拟币转账）
      rechTypes: Array<{
        // 名称
        name: string
        // 值
        value: string
        // 排序
        sort: number
        // 是否启用 1是 0否
        open: number
      }>
      // 提款方式配置参数
      uwTypes: Array<{
        // 名称
        name: string
        // 提现方式 bankTransfer(银行卡提款) cryptoTransfer(虚拟币提款)
        type: string
        // 排序
        sort: number
        // 配置详情
        detailList: Array<{
          // 绑卡数限制,为0时则禁止绑卡，禁止该通道提现
          countLimit: number
          // 合约信息
          contract: string
          // 币种
          currency: string
          // 兑人民币汇率
          exchangeRate: number
          // 固定手续费(用于虚拟币提现)
          feeVal: number
          // 百分比手续费(用于人民币提现)
          feeRate: number
          // 最小提现额度
          minWithdrawMoney: number
          // 最大提现额度
          maxWithdrawMoney: number
        }>
        // 是否启用 1是 0否
        open: number
      }>
      // 充值種類，name：名称，value：类型（onlinePayment：在线支付，transferPayment：转账支付）
      rechCategory: Array<{
        // 名称
        name: string
        // 值
        value: string
        // 排序
        sort: number
        // 是否启用 1是 0否
        open: number
      }>
      // 優惠充值活動列表
      rechActList: Array<{
        // 充值活動id
        id: number
        // 活動標題
        activityName: string
        // 有效打码稽核％数 0~100
        validCheckPercentage: number
        // 稽核未通过时，抽取手续费比例 0~100
        feePercentage: number
        // 稽核所需要打碼遊戲
        betMoneySettings: Array<{
          // No comments found.
          id: number
          // 活動id
          activityId: number
          // 活動類型 1:连续升级活动；2:一次性活动；3:每日登录活动；4:推荐好友领奖金; 6:砸金蛋
          activityType: number
          // 設定的類型 1:体育 2:三方遊戲
          settingType: number
          // 三方遊戲設置
          gameCategory: string
          // 体育遊戲設置
          gameType: string
          // 平台Id
          platformId: number
          // 新增时间
          addTime: string
          // 稽核三方游戏分类
          auditThirdGameCategory: string
          // 稽核运动种类
          auditGameType: string
          // 稽核类型 0:非稽核资料 1:稽核资料
          auditType: number
        }>
        // 贈送%數
        awardPercentage: number
        // 最大贈送金額
        maxAward: number
        // H5端图片
        h5Image: string
        // PC端图片
        pcImage: string
        // 排序
        sort: number
        // 活動週期類型 0:筆筆 1:首充 2:二充 3:三充 4:四充 5:五充 11:當日首充
        cycle: number
        // 最小充值金額
        minRechMoney: number
        // 幣別
        currency: string
        // 流水類型 0:優惠金額 1:優惠金額加本金
        turnoverType: number
      }>
    }
  }
  // 33.充值配置信息: 33.1.获取充值配置信息
  type REQ = {
    // 用户id（从x-seesion-token获取，无需传值）
    userId?: number
    // 平台id（从x-seesion-token获取，无需传值）
    platformId?: number
  }
}
// 34.世界杯: 34.1.世界杯小组赛小组列表
declare namespace API_WORDLCUP_GROUP_LIST {
  // 34.世界杯: 34.1.世界杯小组赛小组列表
  type RES = {
    // No comments found.
    success: boolean
    // No comments found.
    msg: string
    // No comments found.
    code: number
    // No comments found.
    rows: Array<{
      // 主键
      id: number
      // 小组名
      name: string
      // 添加时间
      addTime: string
      // 更新时间
      updateTime: string
    }>
    // 更新时间
    updateTime: string
    // No comments found.
    total: number
  }
}
// 34.世界杯: 34.2.世界杯积分榜列表
declare namespace API_WORDLCUP_SCOREBOARD_LIST {
  // 34.世界杯: 34.2.世界杯积分榜列表
  type RES = {
    // No comments found.
    success: boolean
    // No comments found.
    msg: string
    // No comments found.
    code: number
    // No comments found.
    rows: Array<{
      // 主键
      id: number
      // 球队id
      teamId: string
      // 小组id
      groupId: number
      // 已赛
      raced: number
      // 胜/平/负
      result: string
      // 进/失
      gainLose: string
      // 积分
      integral: number
      // 积分榜类型:1 - 1/8;2 - 1/4;3 - 半决赛;4 - 决赛
      scoreboardType: number
      // 赛事类型:1 - 小组赛;2 - 淘汰赛
      tournamentType: number
      // 添加时间
      addTime: string
      // 更新时间
      updateTime: string
      // 赛事id
      matchId: string
      // 来源 0：188，1：皇冠，9999：模拟数据源
      source: number
      // 排序
      sort: number
      // 球队名
      teamName: string
      // 隊間排序
      teamSort: number
      // No comments found.
      team: {
        // 主键(小金球队id)
        id: string
        // 游戏类型 FT:soccer,BK:Basketball
        gameType: string
        // 联赛id
        leagueId: string
        // 球队名称
        name: string
        // 球队图标
        icon: string
        // 球队图标(svg)
        iconSvg: string
        // 映射厂商 1：statscore, 2：dawnbyte, 0：手动
        mappingFrom: number
        // 数据源id
        sourceId: string
        // 添加时间
        addTime: string
        // 更新时间
        updateTime: string
      }
    }>
    // 更新时间
    updateTime: string
    // No comments found.
    total: number
  }
  // 34.世界杯: 34.2.世界杯积分榜列表
  type REQ = {
    // 当前页
    page?: number
    // 每页条数
    pageSize?: number
    // 开始时间（时间戳）
    startTime?: string | number
    // 结束时间（时间戳）
    endTime?: string | number
    // 小组id
    groupId?: number
    // 来源
    source?: number
    // 积分榜类型:1 - 1/8;2 - 1/4;3 - 半决赛;4 - 决赛
    scoreboardType?: number
    // 赛事类型:1 - 小组赛;2 - 淘汰赛
    tournamentType?: number
  }
}
// 35.未授权接口（维护状态、开放域名等）: 35.1.获取配置信息
declare namespace API_INDEX_CONFIG {
  // 35.未授权接口（维护状态、开放域名等）: 35.1.获取配置信息
  type RES = {
    // No comments found.
    success: boolean
    // No comments found.
    msg: string
    // No comments found.
    code: number
    // No comments found.
    t: {
      // 平台id
      platformId: number
      // 是否开启余额宝（1-开启，0-关闭）
      enableYuEBao: string
      // 是否开启信贷吧（1-开启，0-关闭）
      enableXinDaiBa: string
      // 是否开启真实姓名检测(1：开启，0：关闭)
      enableFullName: string
      // 是否开启取款密码(1：开启，0：关闭)
      enableFundPwd: string
      // 是否开启微信检测(1：开启，0：关闭)
      enableWechat: string
      // 是否开启登录验证码(1：开启，0：关闭)
      enableValidCode: string
      // 是否开启注册验证码(1：开启，0：关闭)
      enableRegValidCode: string
      // 是否开启QQ(1：开启，0：关闭)
      enableQQ: string
      // 是否开启Email(1：开启，0：关闭)
      enableEmail: string
      // 是否开启手机号(1：开启，0：关闭)
      enablePhone: string
      // 平台在线客服url
      customerServiceUrl: string
      // 平台在线客服url2
      customerServiceUrl2: string
      // 平台在线客服url3 (Telegram)
      customerServiceUrl3: string
      // 平台在线客服url4 (Melon)
      customerServiceUrl4: string
      // 客服专线国家码
      servicePhoneNationNumber: string
      // 客服专线
      servicePhoneNumber: string
      // 平台在线客服使用js模式
      customerServiceUrlByJs: string
      // 平台在线客服视频地址
      customerServicveVideoUrl: string
      // 默认H5/APP皮肤
      defaultSkin: string
      // 默认Pc皮肤
      defaultPcSkin: string
      // 系统维护开关 (1：开启，0：关闭)
      maintainStatus: string
      // 维护页面描述
      maintainInfo: string
      // ON体育维护开关 (1：开启，0：关闭)
      sportMaintainStatus: string
      // ON体育维护时间 格式为1683133200000_1683133200000,左边为开始时间,右边为结束时间
      sportMaintainTime: string
      // ON体育维护页面描述
      sportMaintainInfo: string
      // 电脑版APP下载地址
      appDownUrl: string
      // 电脑版APP备用下载地址(老客户地址)
      appBackupDownUrl: string
      // 手机版APP下载地址
      mobileAppDownUrl: string
      // 手机版APP备用下载地址(老客户地址)
      mobileAppBackupDownUrl: string
      // 开奖直播地址
      lotteryLiveUrl: string
      // 静态资源服务器地址
      resServerHost: string
      // 图片列表
      imageList: Array<{
        // 图片地址（相对地址，需要加上config的resServerHost）
        imgUrl: string
        // 图类型:1PC:轮播,2H5:轮播,3:App下载二维码,4:PC版优惠活动素材图,5:H5版优惠活动素材图,6:PC版弹窗活动素材图,7:H5版弹窗活动素材图,8:备用App下载二维码9:H5登陆注册轮播图 10:PC登陆注册轮播图
        imageType: number
        // 排序
        imageSort: number
        // (1,2,3)图片名称,4.标题图片
        imageName1: string
        // 标题文字
        imageText1: string
        // 内容图片
        imageName2: string
        // 内容内标题文字(粗体)
        imageText2: string
        // 活動打水倍数
        multiple: number
        // 活动结束时间
        endTime: string | number
        // 内容文字
        imageText3: string
        // 弹窗图片
        imageName3: string
        // 首页图片
        imageName4: string
        // 首页活动大图
        imageName5: string
        // 图片跳转地址(可空)
        imageLink: string
        // 图片id
        id: number
        // 活动属于的语系
        lang: string
        // 0 文字正常显示 1 文字上方显示
        viewType: number
        // 0 关闭 1 开启
        status: number
        // 活动属于的语系币别
        currency: string
        // 是否为预设语系(默认显示) 0:否 1:是
        defaultLang: number
        // 限定代理 多笔请以；区隔显示
        agentId: string
        // 限定邀请码 多笔请以；区隔显示
        inviteCode: string
        // 活动类别：以逗號隔開
        category: string
        // 活动列表模式(vn,live,casino...) 预设vn
        mode: string
        // 活动id
        activityId: string
        // 跳转方式 0:活动名称/URL 1:文本/图片
        jumpType: number
      }>
      // 推广面QQ连接
      mainQQUrl: string
      // 推广面微信连接
      mainWxUrl: string
      // 推广页面联系电话
      mainPhone: string
      // 推广页面客服QQ
      mainCustomerQQ: string
      // 推广页面代理QQ
      mainAgentQQ: string
      // 推广页面代理Email
      mainEmail: string
      // 代理专属域名
      exclusiveAgentUrl: string
      // 代理专属客服地址
      agentZxkfUrl: string
      // 代理地址
      agentUrl: string
      // seo跳转地址
      seoUrl: string
      // 代理模式：ulimit 无限级，fixed 固定级
      agentMode: string
      // 统计代码
      extendJs: string
      // 聊天室地址
      chatHost: string
      // 聊天室开关
      chatOpen: string
      // 赛事聊天室开关(1:open, 0:close)
      matchChatroomSwitch: string
      // 聊天室最新消息數量顯示开关 (1：开启，0：关闭)
      chatNewCountEnable: number
      // 新闻开关
      newsOpen: number
      // 新闻地址
      newsUrlAddress: string
      // 聊天室推送的最低下注金额备注：排行榜关闭时才生效;字段命名和旧平台保持一致
      chatMinBetMoney: string
      // 是否自动打开聊天室（0：不自动打开；1：自动打开）
      chatAutoConnect: string
      // 排行榜开关
      rankingOpen: string
      // 飞单是否开启 0:关闭,1-开启,默认0为关闭
      flyOpen: string
      // 第三方游戏开关
      thirdOpen: string
      // 第三方自动转账开关
      thirdTransferOpen: string
      // 是否开启邀请码注册(1：开启，0：关闭)
      enableInviteCode: string
      // 是否开启邀请码注册显示(1：开启，0：关闭)
      enableInviteCodeIsShow: string
      // 是否开启真实姓名检测(1：开启，0：关闭)
      enableWithdrawFullName: string
      // 是否开启取款密码(1：开启，0：关闭)
      enableWithdrawFundPwd: string
      // 是否开启微信检测(1：开启，0：关闭)
      enableWithdrawWechat: string
      // 是否开启QQ(1：开启，0：关闭)
      enableWithdrawQQ: string
      // 是否开启Email(1：开启，0：关闭)
      enableWithdrawEmail: string
      // 是否开启手机号(1：开启，0：关闭)
      enableWithdrawPhone: string
      // 是否开启提款FB检测(1：开启，0：关闭, null :关闭)
      enableWithdrawFacebook: string
      // 是否开启提款Zalo检测(1：开启，0：关闭, null :关闭)
      enableWithdrawZalo: string
      // 是否开启提款twitter检测(1：开启，0：关闭, null :关闭)
      enableWithdrawTwitter: string
      // 是否开启提款whatsApp检测(1：开启，0：关闭, null :关闭)
      enableWithdrawWhatsApp: string
      // 是否开启提款line检测(1：开启，0：关闭, null :关闭)
      enableWithdrawLine: string
      // 是否开启提款instagram检测(1：开启，0：关闭, null :关闭)
      enableWithdrawInstagram: string
      // 是否开启提款telegram检测(1：开启，0：关闭, null :关闭)
      enableWithdrawTelegram: string
      // 是否开启提款tiktok检测(1：开启，0：关闭, null :关闭)
      enableWithdrawTiktok: string
      // 运营状态 0：非直营，1：直营，2：外部接入
      opStatus: number
      // 是否开启短信验证码(1：开启，0：关闭)
      enableSmsValidCode: string
      // 短信验证码有效时间（分钟）
      smsValidTime: string
      // 返点比率
      rebateRatio: string
      // 是否开启Zalo(1：开启，0：关闭)
      enableZalo: string
      // 是否开启Facebook(1：开启，0：关闭)
      enableFacebook: string
      // 是否开启WhatsApp(1：开启，0：关闭)
      enableWhatsApp: string
      // 是否开启Telegram(1：开启，0：关闭)
      enableTelegram: string
      // 是否开启address(1：开启，0：关闭)
      enableAddress: string
      // 是否开启safeQuestion(1：开启，0：关闭)
      enableSafeQuestion: string
      // weixinQR
      weixinQR: string
      // zalo
      zalo: string
      // zaloQR
      zaloQR: string
      // zaloLink
      zaloLink: string
      // whatsApp
      whatsApp: string
      // whatsAppQR
      whatsAppQR: string
      // whatsAppLink
      whatsAppLink: string
      // facebook
      facebook: string
      // facebookQR
      facebookQR: string
      // facebookLink
      facebookLink: string
      // telegram
      telegram: string
      // telegramQR
      telegramQR: string
      // telegramLink
      telegramLink: string
      // viber
      viber: string
      // viberQR
      viberQR: string
      // viberLink
      viberLink: string
      // navigationUrl导航地址
      navigationUrl: string
      // 服务器时间
      serverTime: string
      // 聊天室的最高打赏金额
      rankingRewardAmount: string
      // 是否允许编辑提现信息， 0 禁止 1允许
      enableModifyBank: string
      // 体育动画接口
      sportAnimation: string
      // 体育赛事视频接口
      sportStream: string
      // 赛事直播源url
      liveUrl: string
      // 首頁真人直播源M3u8格式
      casinoBGMM3u8: string
      // 首頁真人直播開關 1：开启，0：关闭
      casinoBGMLiveEnabled: string
      // 首頁真人直播自動播放開關 1：开启，0：关闭
      casinoBGMLiveAutoPlayEnabled: string
      // 首頁真人直播聲音自動播放開關 1：开启，0：关闭
      casinoBGMLiveSoundEnabled: string
      // 首頁真人直播指定桌號跳轉
      casinoBGMPlayCode: string
      // 赛事分析源url
      analysisUrl: string
      // 小金直播refer地址
      referUrl: string
      // 前台预设下注金额配置
      presetBetAmount: any[]
      // 动画服务dataConfig参数
      animationDataConfig: string
      // 动画服务可用语系参数
      animationSupportLang: string
      // 前台球类排序（多个使用分号“;”分隔）
      ballSort: string
      // 三方遊戲排序排序（多个使用分号“;”分隔）
      thirdGamesSort: string
      // 没登入拿预设币种, 有登入拿用户币种 系统货币类型编码，例如 PHP，CNY，VND，USD，USDT等
      systemCurrency: string
      // 币种名称
      systemCurrencyName: string
      // 系统货币类型符号，例如 ，₱ ， ¥ ， $ , ₫
      systemCurrencySign: string
      // 进行所有三方游戏转换额度时的最低限额,ex:1000表示每次转换额度时最低限额
      thirdTransferUnit: number
      // 提现实名制验证开关 (1：开启，0：关闭， 默认是null:关闭)
      realNameWithdrawVerified: string
      // 最大设置下注金額(自我约束显示)
      perBetMaxAmount: string
      // 最小设置下注金額(自我约束显示)
      perBetMinAmount: string
      // 最小设定天数(自我约束显示)
      minFrozeDay: number
      // 自我约束开关 (1：开启，0：关闭， 默认是null:关闭)
      selfRestraintVerified: string
      // (新增银行卡/虚拟币), 更新银行卡密码, 更新用户密码, 设定真实姓名, 提款 手机验证开关 (1: 开启, 0:关闭， 默认是null:关闭)
      twoFactorVerified: string
      // 在线客服悬浮按钮开关 (1：开启，0：关闭 默认是null:关闭)
      customerFloating: string
      // ws地址，多个用逗号隔开
      wsHost: string
      // KYC认证开关(1：开启，0：关闭)
      enableKYCVerify: string
      // 额度锁定开关 (1：开启，0：关闭， 默认是null:关闭)
      enableLockBalance: string
      // 可用语系 (zh:中文,en:英文,vi:越南文,如要语系则使用逗号分隔,ex:en,zh)
      supportLanguage: string
      // 首次充值最小金额限制(0视为无设定)
      firstRechLessAmountLimit: string
      // 是否是信用站点(1：是，0：否)
      creditSystem: number
      // 是否启用投注站系统 0：停用，1：启用
      bettingStation: number
      // 加盟邮箱
      joinEmail: string
      // 加盟联系电话
      joinPhone: string
      // 是否开启生日(1：开启，0：关闭)
      enableBirthday: string
      // 是否开启薪资来源(1：开启，0：关闭)
      enableSalarySource: string
      // 是否开启身分证号(1：开启，0：关闭)
      enableIdentityNumber: string
      // 是否开启投注站(1：开启，0：关闭)
      enableBettingStation: string
      // 薪资来源列表
      salarySource: Array<{
        // No comments found.
        id: number
        // No comments found.
        name: string
      }>
      // 身分证件列表
      identityTypeList: Array<{
        // No comments found.
        id: number
        // No comments found.
        name: string
      }>
      // 安全问题选项列表
      safeQuestionList: Array<{
        // No comments found.
        id: number
        // No comments found.
        name: string
      }>
      // 前端展示的盘口（EU,HK,MY,ID）
      handicapShow: string
      // 加联系Skype
      contactSkype: string
      // 国家与币种是否需填(1: 是, 0: 否, 默认是null:关闭)
      enableNationCurrency: string
      // 国家币种列表
      nationCurrencyList: Array<{
        // 国家
        nationCode: string
        // 国家名称
        nationName: string
        // 币种列表
        currencyList: Array<{
          // 币种编码
          currency: string
          // 币种名称
          name: string
          // 系统货币类型符号，例如 ，₱ ， ¥ ， $ , ₫
          sign: string
        }>
        // 电话国码 ex: +86
        phoneCode: string
        // 平台使用主語系
        language: string
      }>
      // 未登入拿预设国家, 有登入拿用户国家
      nationCode: string
      // 未登入拿预设语系, 有登入拿用户语系
      lang: string
      // 充值实名制验证开关 (1：开启，0：关闭， 默认是null:关闭)
      realNameRechargeVerified: string
      // ID 上传证件数量 (默认是1，否则就是2)
      idUploadNumber: string
      // 赛事视频源
      matchLiveSource: string
      // 世界杯是否开启，1:开启 0:关闭
      worldCupOpen: number
      // 正在赛事直播的房间数量；
      liveCount: number
      // 直播聊天域名
      liveChatHost: string
      // 直播聊天室是否开启
      liveChatOpen: number
      // 是否将世界杯页面做为首页进入 1:开启 0:关闭
      specialCouponHome: number
      // 是否隐藏前台注册入口, 0:显示 1:隐藏, 预设显示
      registerHide: number
      // 是否显示SABA入口icon, 1:显示 0:隐藏
      sabaEnterIcon: number
      // 体育下注总开关
      sportsBettingOpen: number
      // 一般會員体育下注推送
      generalMemberSportsBettingPush: number
      // 测试账号体育下注推送
      testAccountSportsBettingPush: number
      // 体育下注最低推送金额
      sportsBettingMinimumPushAmount: string
      // 管理员体育下注推送
      adminSportsBettingPush: number
      // fiba世界杯籃球參數
      fibaConfig: {
        // 是否启用fiba篮球世界杯页面 1:开启 0:关闭
        fibaEnable: number
        // 是否展示fiba第三名赛事 1:开启 0:关闭
        fibaShow3rd: number
        // 是否展示fiba淘汰赛 1:开启 0:关闭
        fibaShowBracket: number
        // fiba 动态玩法 tab
        fibaDynamicList: Array<{
          // 赛季Id
          seasonId: string
          // 动态市场名称
          dynamicMarket: string
        }>
      }
      // 投注排行榜状态 (1：开启，0：关闭， 默认是null:关闭)
      gameRankStatus: number
      // 在线人数显示开关
      onlineUserOpen: number
      // 根据domain获取主推内容
      recommendContent: string
      // 根据domain获取底部入口
      footerEntries: any[]
      // 在线人数轮询时间(单位是分钟)
      onlineUserUpdatePeriod: number
      // 场馆游戏在线人数显示开关
      thirdGameOnlineUserOpen: number
      // 场馆游戏在线人数轮询时间(单位是分钟)
      thirdGameOnlineUserUpdatePeriod: number
      // (一般单注)欧洲赔率低于config(预设1.65)，那么有效投注为0，且不反水
      sportValidBetLimitEuConfig: string
      // Open Auth Info
      oauthInfo: {
        // No comments found.
        google: {
          // Google Open Auth 开关 PC&H5
          webEnabled: number
          // Google Open Auth 开关 Apple
          iosEnabled: number
          // Google Open Auth 开关 Android
          androidEnabled: number
          // Google Open Auth Client ID PC&H5
          webKey: string
          // Google Open Auth Client ID Apple
          iosKey: string
          // Google Open Auth Client ID Apple vip
          iosVipKey: string
          // Google Open Auth Client ID Android
          androidKey: string
          // Google Open Auth Client ID Android vip
          androidVipKey: string
        }
      }
      // thesports Config
      theSportsConfig: {
        // thesports 动画路径配置
        theSportsAnimationUrlSetting: Array<{
          // 球種
          gameType: string
          // theSports动画路径
          url: string
        }>
      }
      // 钱包类型 0:转帐钱包, 1:单一钱包
      walletType: number
      // 篮球末尾比分新玩法配置开关
      bkFinalScoreNewGameplaySwitch: string
      // 体育热门推荐 0:不显示 1:显示
      topSportReco: number
      // 是否开启欧洲杯专题页
      europeCupEnable: string
      // 未结算注单打印功能开关 (1：开启，0：关闭)
      printBetOpen: number
      // APP下载提示开关 (1：开启，0：关闭)
      appDownloadHintStatus: number
      // fb像素ID
      fbPixelId: string
      // google Tag Manager 像素ID
      googleTagManagerPixel: string
      // google Tag 像素ID
      googleTagPixel: string
      // google ads 像素ID
      googleAdsPixel: string
      // tiktok 像素ID
      tiktokPixel: string
      // appsflyer Id
      appsflyerId: string
      // s2s Id
      s2sId: string
      // 統計密鑰
      appsflyerKey: string
      // 代理模式显示设置 (negativeProfit：负盈利模式，pipeline：流水模式)使用逗号分隔,
      agentModeSetting: string
      // 技术支持展示
      techSupport: number
      // 技术支持列表
      techSupportList: Array<{
        // 名称
        name: string
        // mail
        mail: string
        // TG
        telegram: string
        // 静态资源路径
        picture: string
      }>
    }
  }
  // 35.未授权接口（维护状态、开放域名等）: 35.1.获取配置信息
  type REQ = {
    // No comments found.
    inviteCode?: string
  }
}
// 35.未授权接口（维护状态、开放域名等）: 35.2.验证是否在维护
declare namespace API_INDEX_CHECKWH {}
// 35.未授权接口（维护状态、开放域名等）: 35.3.开放的域名（随机获取一个）
declare namespace API_INDEX_OPENDOMAIN {}
// 35.未授权接口（维护状态、开放域名等）: 35.4.导航域名入口
declare namespace API_INDEX_NAVIGATE {
  // 35.未授权接口（维护状态、开放域名等）: 35.4.导航域名入口
  type RES = {
    // No comments found.
    success: boolean
    // No comments found.
    msg: string
    // No comments found.
    code: number
    // No comments found.
    t: {
      // No comments found.
      mainPositionList: Array<{
        // No comments found.
        name: string
        // No comments found.
        mainPositionList: Array<{
          // No comments found.
          id: number
          // No comments found.
          name: string
          // No comments found.
          nation: string
          // No comments found.
          rowName: string
          // No comments found.
          url: string
          // No comments found.
          sort: number
          // No comments found.
          position: number
          // No comments found.
          type: number
          // No comments found.
          platformId: number
        }>
      }>
      // No comments found.
      otherPositionList: Array<{
        // No comments found.
        id: number
        // No comments found.
        name: string
        // No comments found.
        nation: string
        // No comments found.
        rowName: string
        // No comments found.
        url: string
        // No comments found.
        sort: number
        // No comments found.
        position: number
        // No comments found.
        type: number
        // No comments found.
        platformId: number
      }>
    }
  }
}
// 35.未授权接口（维护状态、开放域名等）: 35.5.验证域名合法性
declare namespace API_INDEX_CHECKDOMAIN {
  // 35.未授权接口（维护状态、开放域名等）: 35.5.验证域名合法性
  type RES = {}
  // 35.未授权接口（维护状态、开放域名等）: 35.5.验证域名合法性
  type REQ = {
    // 验证内容
    text?: string
    // 类型 1：域名，2：客服QQ，3：客服电话
    type?: number
  }
}
// 35.未授权接口（维护状态、开放域名等）: 35.6.第三方游戏信息
declare namespace API_INDEX_THIRDGAMES {
  // 35.未授权接口（维护状态、开放域名等）: 35.6.第三方游戏信息
  type RES = {
    // No comments found.
    success: boolean
    // No comments found.
    msg: string
    // No comments found.
    code: number
    // No comments found.
    t: {
      // 游戏分类
      gameCategories: Array<{
        // 主键
        id: number
        // 一级分类名称
        typeName: string
        // 排序
        sort: number
        // 默认彩票会给出一个具体code识别
        code: string
        // 游戏所属厂商id，使用逗号隔开
        gameFirmIds: string
      }>
      // 游戏类型Map
      gameFirmMap: {
        [key: string]: {
          // id主键
          id: number
          // 厂商名称
          firmName: string
          // 编码
          firmCode: string
          // 厂商类型 。比如AG.KT,.BY
          firmType: string
          // 对应中文名
          firmShowName: string
          // 游戏编码
          playCode: string
          // 系统开关状态,0-关闭，1-开启，2-维护
          sysOpen: number
          // 游戏图标地址
          iconUrl: string
          // 游戏页面地址
          pageUrl: string
          // 试玩状态，0： 不支持1：支持关闭 2：支持开启
          enableDemo: number
          // 排序
          sort: number
          // 是否热门,0-否，1-是
          isHot: number
          // 热门排序
          hotSort: number
          // 是否首页显示,0-否，1-是
          isFront: number
          // 首页排序
          frontSort: number
          // 平台开关状态,0-关闭，1-开启
          open: number
          // 平台id
          platformId: number
          // No comments found.
          gameFirmId: number
          // 官方認證,0-关闭，1-开启'
          certificate: number
          // 排除國家
          excludeNation: string
          // 排除幣種
          excludeCurrency: string
          // 维护时间 时间戳,格式为1683133200000_1683133200000,左边为开始时间,右边为结束时间
          maintenanceTime: string
          // 图片名称
          firmImageName: string
          // 廠商名称
          groupName: string
          // 廠商反水
          debate: number
          // 是否顯示 1: 是 ,0: 否
          isShow: number
          // 是否显示小游戏清单 1: 是 ,0: 否
          enterType: number
          // IOS是否外开 0:否 1:是
          iosOutward: number
          // ANDROID是否外开 0:否 1:是
          androidOutward: number
          // H5是否外开 0:否 1:是
          h5Outward: number
          // PC是否外开 0:否 1:是
          pcOutward: number
          // 访客支持状态 0： 不支持1：支持关闭 2：支持开启
          guestOpen: number
          // 钱包类型 0:转帐钱包, 1:单一钱包
          walletType: number
          // 游戏类别代码 GameCategory code
          cateCode: string
          // 厂商多國語系名称
          firmNameMap: any
        }
      }
      // 三方游戏数据
      thirdDictMap: {
        [key: string]: {
          // 主键
          id: number
          // 一级分类
          gameCategory: string
          // 所属第三方
          firmType: string
          // 第三方游戏编码'
          firmCode: string
          // 预留字段
          gameCode: string
          // 具体游戏
          gameType: string
          // 游戏中文名
          chineseName: string
          // 游戏英文名
          englishName: string
          // 图片
          imageName: string
          // 支持手机端（0：支持，1：不支持）
          isH5: number
          // 支持电脑端（0:支持，1：不支持）
          isFlash: number
          // 手机端图片名称
          h5ImageName: string
          // 游戏排序
          sort: number
          // 是否是二級分類遊戲 0:否 1:是
          isSecond: number
          // 是否是ON原创遊戲 0:否, 1:是
          isOnOri: number
          // 状态 0:停用, 1:启用
          status: number
          // 星期几(彩票小游戏用)
          lotteryDaily: string
          // 游戏分类(彩票小游戏用)
          gameCate: string
          // 游戏分类代码(彩票小游戏用)
          gameCateCode: string
          // 是否平台客製 0 否 ; 1 是
          platformUpload: number
          // No comments found.
          dictCode: string
        }
      }
      // 二級分類遊戲
      gameCategorySecondGames: {
        [key: string]: {
          // id主键
          id: number
          // 一级分类
          gameCategory: string
          // 二级分类名称
          typeName: string
          // 二级分类代码
          typeCode: string
          // 所属第三方
          firmType: string
          // 第三方游戏编码
          firmCode: string
          // 游戏编码
          playCode: string
          // 预留字段
          gameCode: string
          // 具体游戏
          gameType: string
          // 游戏中文名
          chineseName: string
          // 游戏英文名
          englishName: string
          // 图片
          imageName: string
          // 支持手机端（0：支持，1：不支持）
          isH5: number
          // 支持电脑端（0:支持，1：不支持）
          isFlash: number
          // 手机端图片名称
          h5ImageName: string
          // 二级分类排序
          categorySort: number
          // 二级分类id
          gameCategorySecondId: number
          // 游戏排序
          sort: number
          // 是否热门,0-否，1-是
          isHot: number
          // 是否ON原创,0-否，1-是
          isOnOri: number
          // 开关状态,0-关闭，1-开启
          open: number
          // 系统开关状态 0-關閉 1-开启，2-维护
          sysOpen: number
          // 平台id
          platformId: number
          // 厂商名称
          firmShowName: string
          // 游戏厂商id
          gameFirmId: number
          // 状态 0:停用, 1:启用
          status: number
          // min return to player rate
          minRtpRate: number
          // max return to player rate
          maxRtpRate: number
          // min hit rate
          minHitRate: number
          // max hit rate
          maxHitRate: number
          // tag id
          tagIds: any[]
          // tags
          tags: Array<{
            // 主键
            id: number
            // 标签名称
            name: string
            // 标签说明
            description: string
            // 状态 0:关 1:开
            status: number
          }>
          // 星期几(彩票小游戏用)
          lotteryDaily: string
          // 游戏分类(彩票小游戏用)
          gameCate: string
          // 游戏分类代码(彩票小游戏用)
          gameCateCode: string
          // 在线用户数
          onlineUserCount: number
          // 是否是二級分類遊戲 0:否 1:是
          isSecond: number
        }
      }
    }
  }
  // 35.未授权接口（维护状态、开放域名等）: 35.6.第三方游戏信息
  type REQ = {
    // No comments found.
    locale?: any
  }
}
// 35.未授权接口（维护状态、开放域名等）: 35.7.新版UI第三方游戏信息
declare namespace API_INDEX_V2_THIRDGAMES {
  // 35.未授权接口（维护状态、开放域名等）: 35.7.新版UI第三方游戏信息
  type RES = {
    // No comments found.
    success: boolean
    // No comments found.
    msg: string
    // No comments found.
    code: number
    // No comments found.
    t: {
      // 三方游戏分類
      gameCategories: Array<{
        // 主键
        id: number
        // 一级分类名称
        typeName: string
        // 排序
        sort: number
        // 默认彩票会给出一个具体code识别
        code: string
        // 游戏所属厂商id，使用逗号隔开
        gameFirmIds: string
      }>
      // 游戏厂商Map
      gameFirmMap: {
        [key: string]: {
          // id主键
          id: number
          // 厂商名称
          firmName: string
          // 编码
          firmCode: string
          // 厂商类型 。比如AG.KT,.BY
          firmType: string
          // 对应中文名
          firmShowName: string
          // 游戏编码
          playCode: string
          // 系统开关状态,0-关闭，1-开启，2-维护
          sysOpen: number
          // 游戏图标地址
          iconUrl: string
          // 游戏页面地址
          pageUrl: string
          // 试玩状态，0： 不支持1：支持关闭 2：支持开启
          enableDemo: number
          // 排序
          sort: number
          // 是否热门,0-否，1-是
          isHot: number
          // 热门排序
          hotSort: number
          // 是否首页显示,0-否，1-是
          isFront: number
          // 首页排序
          frontSort: number
          // 平台开关状态,0-关闭，1-开启
          open: number
          // 平台id
          platformId: number
          // No comments found.
          gameFirmId: number
          // 官方認證,0-关闭，1-开启'
          certificate: number
          // 排除國家
          excludeNation: string
          // 排除幣種
          excludeCurrency: string
          // 维护时间 时间戳,格式为1683133200000_1683133200000,左边为开始时间,右边为结束时间
          maintenanceTime: string
          // 图片名称
          firmImageName: string
          // 廠商名称
          groupName: string
          // 廠商反水
          debate: number
          // 是否顯示 1: 是 ,0: 否
          isShow: number
          // 是否显示小游戏清单 1: 是 ,0: 否
          enterType: number
          // IOS是否外开 0:否 1:是
          iosOutward: number
          // ANDROID是否外开 0:否 1:是
          androidOutward: number
          // H5是否外开 0:否 1:是
          h5Outward: number
          // PC是否外开 0:否 1:是
          pcOutward: number
          // 访客支持状态 0： 不支持1：支持关闭 2：支持开启
          guestOpen: number
          // 钱包类型 0:转帐钱包, 1:单一钱包
          walletType: number
          // 游戏类别代码 GameCategory code
          cateCode: string
          // 厂商多國語系名称
          firmNameMap: any
        }
      }
      // 三方游戏分類下小游戏列表DZ -> 小遊戲ListLive -> 小遊戲List
      gameCategoryGames: {
        [key: string]: {
          // id主键
          id: number
          // 一级分类
          gameCategory: string
          // 二级分类名称
          typeName: string
          // 二级分类代码
          typeCode: string
          // 所属第三方
          firmType: string
          // 第三方游戏编码
          firmCode: string
          // 游戏编码
          playCode: string
          // 预留字段
          gameCode: string
          // 具体游戏
          gameType: string
          // 游戏中文名
          chineseName: string
          // 游戏英文名
          englishName: string
          // 图片
          imageName: string
          // 支持手机端（0：支持，1：不支持）
          isH5: number
          // 支持电脑端（0:支持，1：不支持）
          isFlash: number
          // 手机端图片名称
          h5ImageName: string
          // 二级分类排序
          categorySort: number
          // 二级分类id
          gameCategorySecondId: number
          // 游戏排序
          sort: number
          // 是否热门,0-否，1-是
          isHot: number
          // 是否ON原创,0-否，1-是
          isOnOri: number
          // 开关状态,0-关闭，1-开启
          open: number
          // 系统开关状态 0-關閉 1-开启，2-维护
          sysOpen: number
          // 平台id
          platformId: number
          // 厂商名称
          firmShowName: string
          // 游戏厂商id
          gameFirmId: number
          // 状态 0:停用, 1:启用
          status: number
          // min return to player rate
          minRtpRate: number
          // max return to player rate
          maxRtpRate: number
          // min hit rate
          minHitRate: number
          // max hit rate
          maxHitRate: number
          // tag id
          tagIds: any[]
          // tags
          tags: Array<{
            // 主键
            id: number
            // 标签名称
            name: string
            // 标签说明
            description: string
            // 状态 0:关 1:开
            status: number
          }>
          // 星期几(彩票小游戏用)
          lotteryDaily: string
          // 游戏分类(彩票小游戏用)
          gameCate: string
          // 游戏分类代码(彩票小游戏用)
          gameCateCode: string
          // 在线用户数
          onlineUserCount: number
          // 是否是二級分類遊戲 0:否 1:是
          isSecond: number
        }
      }
      // 彩票分类排序
      gameCateCodeSort: Array<{
        // 游戏类别名称
        gameCate: string
        // 类别代码
        gameCateCode: string
        // 排序
        sort: number
      }>
      // 三方游戏不分類下 除“体育/电竞”以外 小游戏列表
      gameCategoryGameList: Array<{
        // id主键
        id: number
        // 一级分类
        gameCategory: string
        // 二级分类名称
        typeName: string
        // 二级分类代码
        typeCode: string
        // 所属第三方
        firmType: string
        // 第三方游戏编码
        firmCode: string
        // 游戏编码
        playCode: string
        // 预留字段
        gameCode: string
        // 具体游戏
        gameType: string
        // 游戏中文名
        chineseName: string
        // 游戏英文名
        englishName: string
        // 图片
        imageName: string
        // 支持手机端（0：支持，1：不支持）
        isH5: number
        // 支持电脑端（0:支持，1：不支持）
        isFlash: number
        // 手机端图片名称
        h5ImageName: string
        // 二级分类排序
        categorySort: number
        // 二级分类id
        gameCategorySecondId: number
        // 游戏排序
        sort: number
        // 是否热门,0-否，1-是
        isHot: number
        // 是否ON原创,0-否，1-是
        isOnOri: number
        // 开关状态,0-关闭，1-开启
        open: number
        // 系统开关状态 0-關閉 1-开启，2-维护
        sysOpen: number
        // 平台id
        platformId: number
        // 厂商名称
        firmShowName: string
        // 游戏厂商id
        gameFirmId: number
        // 状态 0:停用, 1:启用
        status: number
        // min return to player rate
        minRtpRate: number
        // max return to player rate
        maxRtpRate: number
        // min hit rate
        minHitRate: number
        // max hit rate
        maxHitRate: number
        // tag id
        tagIds: any[]
        // tags
        tags: Array<{
          // 主键
          id: number
          // 标签名称
          name: string
          // 标签说明
          description: string
          // 状态 0:关 1:开
          status: number
        }>
        // 星期几(彩票小游戏用)
        lotteryDaily: string
        // 游戏分类(彩票小游戏用)
        gameCate: string
        // 游戏分类代码(彩票小游戏用)
        gameCateCode: string
        // 在线用户数
        onlineUserCount: number
        // 是否是二級分類遊戲 0:否 1:是
        isSecond: number
      }>
    }
  }
  // 35.未授权接口（维护状态、开放域名等）: 35.7.新版UI第三方游戏信息
  type REQ = {
    // No comments found.
    locale?: any
  }
}
// 35.未授权接口（维护状态、开放域名等）: 35.8.服务器时间
declare namespace API_INDEX_SERVERTIME {
  // 35.未授权接口（维护状态、开放域名等）: 35.8.服务器时间
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
}
// 35.未授权接口（维护状态、开放域名等）: 35.9.玩法相关翻译资源接口
declare namespace API_INDEX_RESOURCE_JSON {
  // 35.未授权接口（维护状态、开放域名等）: 35.9.玩法相关翻译资源接口
  type RES = {
    // No comments found.
    success: boolean
    // No comments found.
    msg: string
    // No comments found.
    code: number
    // No comments found.
    t: {
      // 球类相关翻译信息
      gameTypeResources: Array<{
        // 球类，FT,BK等
        gameType: string
        // 玩法类型翻译信息
        playCates: Array<{
          // 编码
          code: string
          // 翻译名称
          nameMap: any
          // 是否支持切换盘口, 0： 不支持， 1： 支持
          supportOddsTypeSwitch: number
          // 是否是动态的spread 0： 不是 ， 1： 是 ， 例如： 足球的进球球员是动态spread
          isDynamicSpread: number
          // 赔率中是否包含extInfo，0： 不包含， 1： 包含 ， 例如：篮球球员玩法三分球数
          hasExtInfo: number
        }>
        // 玩法细项翻译信息
        playInfos: Array<{
          // 编码
          code: string
          // 翻译名称
          nameMap: any
        }>
        // No comments found.
        playCateTypes: Array<{
          // 编码
          code: string
          // 翻译名称
          nameMap: any
        }>
        // No comments found.
        playCateMenus: Array<{
          // 编码
          code: string
          // 翻译名称
          nameMap: any
        }>
        // No comments found.
        playCateMenuDetails: Array<{
          // 编码
          code: string
          // 玩法类型菜单code
          playCateMenuCode: string
          // 翻译名称
          nameMap: any
        }>
        // No comments found.
        quickPlayCates: Array<{
          // 编码
          code: string
          // 翻译名称
          nameMap: any
        }>
      }>
      // 赛事状态status翻译
      matchStatusResources: Array<{
        // 状态码
        status: string
        // 翻译名称
        nameMap: any
      }>
    }
  }
}
// 35.未授权接口（维护状态、开放域名等）: 35.10.跳转到组装的页面
declare namespace API_INDEX_TOGAME_FIRMTYPE_TICKET {
  // 35.未授权接口（维护状态、开放域名等）: 35.10.跳转到组装的页面
  type REQ = {
    // No comments found.
    ticket: string
    // No comments found.
    firmType: string
    // No comments found.
    platformId?: number
  }
}
// 35.未授权接口（维护状态、开放域名等）: 35.11.获取彩票游戏信息
declare namespace API_INDEX_CGCPGAMES {
  // 35.未授权接口（维护状态、开放域名等）: 35.11.获取彩票游戏信息
  type RES = {
    // No comments found.
    success: boolean
    // No comments found.
    msg: string
    // No comments found.
    code: number
    // No comments found.
    t: {
      // 游戏列表
      games: Array<{
        // No comments found.
        gameId: number
        // No comments found.
        name: string
        // 开奖日（1到7）如： 1,4 代表周一和周四。0 代表每天開，與不固定星期開獎
        lotteryDaily: string
        // 1秒开奖（即开型） 0：否，1：是
        instantGame: number
        // 游戏开关： 0-关 1-开;
        open: number
        // 是否封盘; 0-正常、1-封盘
        ban: number
        // 是否热门 0：否，1：是
        hot: number
        // No comments found.
        remark: string
        // 游戏代码
        code: string
        // 是否使用自定义图片 0:否, 1:是
        customImg: number
        // 0:低频彩，1:高频彩
        highLevel: number
      }>
      // 游戏类别列表
      gameCates: Array<{
        // 类别名称
        gameCate: string
        // 類別代號
        gameCateCode: string
        // 该导航关联的游戏id，多个逗号隔开
        gameIds: string
        // 排序
        seq: number
      }>
      // 開獎時間
      gameTimes: Array<{
        // 游戏id
        gameId: number
        // 期号
        turnNum: string
        // 封盘时间
        betEndTime: string
        // 开奖时间
        openTime: string
        // 期数日期
        turnDate: string
        // 服务器时间
        serverTime: number
        // 奖期封盘开始时间
        closeStartTime: string
        // 奖期封盘结束时间
        closeEndTime: string
        // 上期期号
        lastTurnNum: string
        // 上期开奖时间
        lastOpenTime: string
        // 上期开奖号码
        lastOpenNum: string
      }>
    }
  }
  // 35.未授权接口（维护状态、开放域名等）: 35.11.获取彩票游戏信息
  type REQ = {
    // No comments found.
    locale?: any
  }
}
// 36.查询前台游戏入口图片展示: 36.1.查询前台游戏入口图片展示
declare namespace API_GAMEENTRYCONFIG_QUERYGAMEENTRYCONFIG {
  // 36.查询前台游戏入口图片展示: 36.1.查询前台游戏入口图片展示
  type RES = {
    // No comments found.
    success: boolean
    // No comments found.
    msg: string
    // No comments found.
    code: number
    // No comments found.
    rows: Array<{
      // 主键id
      id: number
      // 第三方游戏id
      firmId: number
      // 厂商类型: 比如 AG.KT,.BY
      firmType: string
      // 三方游戏代码
      firmCode: string
      // No comments found.
      gameCode: string
      // 游戏名称
      firmName: string
      // 游戏分类， 1: 棋牌游戏； 2: 电子游戏
      gameType: number
      // banner图片
      bannerImage: string
      // 游戏厂商入口图片
      entryImage: string
      // 备注
      remark: string
      // 排序
      sort: number
      // 位置， 1: 首页； 2: 主页
      position: number
      // 状态， 0: 关闭； 1： 开启
      status: number
      // 是否删除， 0: 未删除； 1： 已删除
      deleteStatus: number
      // 创建时间
      addTime: string
      // 更新时间
      updateTime: string
      // 游戏名称国际化mapkey：languagevalue：content
      gameNameMap: any
    }>
    // 游戏名称国际化mapkey：languagevalue：content
    gameNameMap: any
    // No comments found.
    total: number
  }
  // 36.查询前台游戏入口图片展示: 36.1.查询前台游戏入口图片展示
  type REQ = {
    // 主键id
    id?: number
    // 第三方游戏id
    firmId?: number
    // 厂商类型: 比如 AG.KT,.BY
    firmType?: string
    // 三方游戏代码
    firmCode?: string
    // 游戏名称
    firmName?: string
    // 游戏分类， 1: 棋牌游戏； 2: 电子游戏首页：该字段参数不需要传递主页需要传递该参数，棋牌主页传 1，电子主页传 2
    gameType?: number
    // banner图片
    bannerImage?: string
    // 游戏厂商入口图片
    entryImage?: string
    // 备注
    remark?: string
    // 排序
    sort?: number
    // 前台获取图片展示需要传递该字段参数位置， 1: 首页； 2: 主页
    position: number
    // 状态， 0: 关闭； 1： 开启
    status?: number
    // 是否删除， 0: 未删除； 1： 已删除
    deleteStatus?: number
    // 创建时间
    addTime?: string
    // 更新时间
    updateTime?: string
    // 操作人
    operator?: string
    // 平台id
    platformId?: number
  }
}
// 36.查询前台游戏入口图片展示: 36.2.获取累计头奖金额
declare namespace API_GAMEENTRYCONFIG_QUERYTOTALREWARDAMOUNT {
  // 36.查询前台游戏入口图片展示: 36.2.获取累计头奖金额
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
      name: string
      // No comments found.
      amount: number
      // No comments found.
      currency: string
    }>
    // No comments found.
    currency: string
    // No comments found.
    total: number
  }
}
// 37.VIP特权活动: 37.1.VIP特權
declare namespace API_ACTIVITY_VIP_USER {
  // 37.VIP特权活动: 37.1.VIP特權
  type RES = {
    // No comments found.
    success: boolean
    // No comments found.
    msg: string
    // No comments found.
    code: number
    // No comments found.
    t: {
      // 用戶目前VIP等級
      levelName: string
      // 用户目前VIP Code
      levelCode: string
      // 目前成長值
      exp: number
      // 升級成長值
      upgradeExp: number
      // 保级所需成长值
      protectionLevelGrowthValue: number
      // 保级状态 0: 保级失败 1:保级成功
      protectionStatus: number
      // 獎勵資訊
      rewardInfo: Array<{
        // 等级编号 (領取時要帶入)
        levelV2Id: number
        // VIP等级名称(VIP0 VIP1 VIP2...)
        levelName: string
        // VIP等级code
        levelCode: string
        // 专属客服
        exclusiveService: boolean
        // 极速出款
        expressWithdrawal: boolean
        // 体育最大返水率
        sportHighestRebateRate: number
        // 最大返水率
        highestRebateRate: number
        // VIP特权奖励
        rewardDetail: Array<{
          // VIP特权活动奖励种类(4:晋级礼金 5:生日礼金 6:每周红包 7:专属红包)
          rewardType: number
          // 启用状态(true false)
          enable: boolean
          // 奖励内容(为0时不显示)
          value: number
          // 狀態(獎勵領取狀態:待审核 领取 已领取 已失效 无资格 申请...)1:未中奖,2:待审核,3:审核不通过,4:审核通过,5:已领取,6:已失效,7:未领取, null:無資格（專屬紅包則視為未申請）
          status: number
          // 每周红包需求流水(當rewardType為6且与用户等级相同时,栏位才有效)
          weekRedenpValidAmount: number
          // 目前有效流水(當rewardType為6且与用户等级相同时,栏位才有效)
          sumValidBetAmount: number
          // 剩馀每周红包流水(为0时代表满足条件)
          remainingWeekRedenpAmount: number
        }>
        // 升级成长值(最高等级时为null)
        upgradeExp: number
      }>
    }
  }
  // 37.VIP特权活动: 37.1.VIP特權
  type REQ = {
    // 用户id（从x-seesion-token获取，无需传值）
    userId?: number
    // 平台id（从x-seesion-token获取，无需传值）
    platformId?: number
  }
}
// 37.VIP特权活动: 37.2.VIP特權详情
declare namespace API_ACTIVITY_VIP_DETAIL {
  // 37.VIP特权活动: 37.2.VIP特權详情
  type RES = {
    // No comments found.
    success: boolean
    // No comments found.
    msg: string
    // No comments found.
    code: number
    // No comments found.
    t: {
      // VIP详情最高返水比例
      highestRebateRateInfo: Array<{
        // VIP等级名称(VIP0 VIP1 VIP2...)
        levelName: string
        // 用户目前VIP Code
        levelCode: string
        // VIP等级对应返水
        data: Array<{
          // 分类code(返水比例:ONSP、SP、ES、LIVE、QP、CGCP、DZ、DJ、BY)
          gameCategoryCode: string
          // 返水比例
          value: number
        }>
      }>
      // ON体育成长值倍数
      growthMultiple: string
      // 其他游戏成长值倍数
      otherGrowthMultiple: string
      // vip細節相關設定
      vipUserLevelLimits: Array<{
        // 币别
        currency: string
        // 活动id
        activityId: number
        // 项目类型 4:晋级礼金, 6:每周红包, 5:生日礼金, 7:专属红包
        type: number
        // 提现流水倍数
        withdrawMultiple: number
        // 注册天数
        registerDays: number
        // 领取时效天数
        allowReceiveDays: number
        // 獎勵強制審核通過
        forcedAudit: boolean
      }>
    }
  }
  // 37.VIP特权活动: 37.2.VIP特權详情
  type REQ = {
    // 用户id（从x-seesion-token获取，无需传值）
    userId?: number
    // 平台id（从x-seesion-token获取，无需传值）
    platformId?: number
  }
}
// 37.VIP特权活动: 37.3.领取VIP特权奖项
declare namespace API_ACTIVITY_VIP_AWARD {
  // 37.VIP特权活动: 37.3.领取VIP特权奖项
  type RES = {
    // No comments found.
    success: boolean
    // No comments found.
    msg: string
    // No comments found.
    code: number
  }
  // 37.VIP特权活动: 37.3.领取VIP特权奖项
  type REQ = {
    // 活动ID
    activityId?: number
    // VIP特权活动奖励种类(4:晋级礼金 5:生日礼金 6:每周红包 7:专属红包)
    rewardType?: number
    // 等级编号
    levelV2Id?: number
  }
}
// 37.VIP特权活动: 37.4.[TEST] VIP特權 建立測試資料 by userId
declare namespace API_ACTIVITY_VIP_USER_TEST_USERID_REWARDTYPE {
  // 37.VIP特权活动: 37.4.[TEST] VIP特權 建立測試資料 by userId
  type RES = {
    // No comments found.
    success: boolean
    // No comments found.
    msg: string
    // No comments found.
    code: number
    // No comments found.
    t: {
      // VIP详情最高返水比例
      highestRebateRateInfo: Array<{
        // VIP等级名称(VIP0 VIP1 VIP2...)
        levelName: string
        // 用户目前VIP Code
        levelCode: string
        // VIP等级对应返水
        data: Array<{
          // 分类code(返水比例:ONSP、SP、ES、LIVE、QP、CGCP、DZ、DJ、BY)
          gameCategoryCode: string
          // 返水比例
          value: number
        }>
      }>
      // ON体育成长值倍数
      growthMultiple: string
      // 其他游戏成长值倍数
      otherGrowthMultiple: string
      // vip細節相關設定
      vipUserLevelLimits: Array<{
        // 币别
        currency: string
        // 活动id
        activityId: number
        // 项目类型 4:晋级礼金, 6:每周红包, 5:生日礼金, 7:专属红包
        type: number
        // 提现流水倍数
        withdrawMultiple: number
        // 注册天数
        registerDays: number
        // 领取时效天数
        allowReceiveDays: number
        // 獎勵強制審核通過
        forcedAudit: boolean
      }>
    }
  }
  // 37.VIP特权活动: 37.4.[TEST] VIP特權 建立測試資料 by userId
  type REQ = {
    // No comments found.
    userId: number
    // No comments found.
    rewardType: number
  }
}
// 37.VIP特权活动: 37.5.專屬紅包申請
declare namespace API_ACTIVITY_VIP_UNIREDENP_APPLY {
  // 37.VIP特权活动: 37.5.專屬紅包申請
  type RES = {
    // No comments found.
    success: boolean
    // No comments found.
    msg: string
    // No comments found.
    code: number
    // No comments found.
    t: {
      // 状态 2:待审核,4:审核通过
      status: number
    }
  }
  // 37.VIP特权活动: 37.5.專屬紅包申請
  type REQ = {
    // 等级编号
    levelV2Id: number
  }
}
// 38.信贷吧接口: 38.1.是否显示信贷吧协议内容,如过是，返还值t=1 ,如果否，返还值t=0
declare namespace API_XDB_SHOWXDBDEAL {
  // 38.信贷吧接口: 38.1.是否显示信贷吧协议内容,如过是，返还值t=1 ,如果否，返还值t=0
  type RES = {
    // No comments found.
    success: boolean
    // No comments found.
    msg: string
    // No comments found.
    code: number
    // No comments found.
    t: {
      // 0 - 不显示协议，1-显示协议
      show: number
    }
  }
  // 38.信贷吧接口: 38.1.是否显示信贷吧协议内容,如过是，返还值t=1 ,如果否，返还值t=0
  type REQ = {
    // 用户id（从x-seesion-token获取，无需传值）
    userId?: number
    // 平台id（从x-seesion-token获取，无需传值）
    platformId?: number
  }
}
// 38.信贷吧接口: 38.2.用户同意信贷吧协议
declare namespace API_XDB_AGREEXDBDEAL {
  // 38.信贷吧接口: 38.2.用户同意信贷吧协议
  type RES = {
    // No comments found.
    success: boolean
    // No comments found.
    msg: string
    // No comments found.
    code: number
  }
  // 38.信贷吧接口: 38.2.用户同意信贷吧协议
  type REQ = {
    // 用户id（从x-seesion-token获取，无需传值）
    userId?: number
    // 平台id（从x-seesion-token获取，无需传值）
    platformId?: number
  }
}
// 38.信贷吧接口: 38.3.查询用户借款信息
declare namespace API_XDB_GETUSERCREDIT {
  // 38.信贷吧接口: 38.3.查询用户借款信息
  type RES = {
    // No comments found.
    success: boolean
    // No comments found.
    msg: string
    // No comments found.
    code: number
    // No comments found.
    t: {
      // 信用值
      creditValue: number
      // 借吧最高額度
      quota: number
      // 可借金額
      currentQuota: number
      // 借吧申請中(1-是;0-否)
      isCreditNotAccept: string
      // 逾期欠款金额中已还款金额
      hasRepay: number
      // 用户平台账户余额
      money: number
      // 总欠款金额
      totalArrearsMoney: number
      // 逾期欠款金额
      overdueArrearsMoney: number
      // 是否被风控(1-是;0-否)
      isRiskControl: string
      // 重新借款日
      restartDate: string
    }
  }
  // 38.信贷吧接口: 38.3.查询用户借款信息
  type REQ = {
    // 用户id（从x-seesion-token获取，无需传值）
    userId?: number
    // 平台id（从x-seesion-token获取，无需传值）
    platformId?: number
  }
}
// 38.信贷吧接口: 38.4.查询用户已借贷金额
declare namespace API_XDB_GETUSERREPAY {
  // 38.信贷吧接口: 38.4.查询用户已借贷金额
  type RES = {
    // No comments found.
    success: boolean
    // No comments found.
    msg: string
    // No comments found.
    code: number
    // No comments found.
    t: {
      // 用户余额
      money: number
      // 用户已借贷金额
      loanMoney: number
    }
  }
  // 38.信贷吧接口: 38.4.查询用户已借贷金额
  type REQ = {
    // 用户id（从x-seesion-token获取，无需传值）
    userId?: number
    // 平台id（从x-seesion-token获取，无需传值）
    platformId?: number
  }
}
// 38.信贷吧接口: 38.5.信贷吧借贷申请
declare namespace API_XDB_BORROWMONEY {
  // 38.信贷吧接口: 38.5.信贷吧借贷申请
  type RES = {
    // No comments found.
    success: boolean
    // No comments found.
    msg: string
    // No comments found.
    code: number
  }
  // 38.信贷吧接口: 38.5.信贷吧借贷申请
  type REQ = {
    // 借款金额
    money?: number
  }
}
// 38.信贷吧接口: 38.6.信贷吧还款
declare namespace API_XDB_RETURNMONEY {
  // 38.信贷吧接口: 38.6.信贷吧还款
  type RES = {
    // No comments found.
    success: boolean
    // No comments found.
    msg: string
    // No comments found.
    code: number
  }
  // 38.信贷吧接口: 38.6.信贷吧还款
  type REQ = {
    // 还款金额
    money?: number
  }
}
// 38.信贷吧接口: 38.7.个人信贷吧历史记录查询
declare namespace API_XDB_GETXDBRECORD {
  // 38.信贷吧接口: 38.7.个人信贷吧历史记录查询
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
      // 用户昵称
      fullName: string
      // 代理名
      dlName: string
      // 推荐人
      recoUserName: string
      // 操作人员
      operator: string
      // 充值层级
      rechLevel: string
      // 用户状态
      state: number
      // 用户类型，0-正常用户，1-试玩用户，2-内部测试
      testFlag: number
      // 0-借款，1-还款
      type: number
      // 历史逾期次数
      overDueCount: number
      // 添加时间
      addTime: string
      // 操作时间
      operateTime: string
      // 逾期时间
      overDueTime: string
      // 统计时间
      statDate: string
      // 充值总额
      rechMoney: number
      // 提款总额
      uwMoney: number
      // 已还金额
      returnMoney: number
      // 借贷金额（type=0）、还款金额（type=1）
      money: number
      // 状态，0-未受理，1-成功，2-失败，3-强制扣款
      status: number
      // 备注
      remark: string
      // 平台id
      platformId: number
      // 币别
      currency: string
    }>
    // 币别
    currency: string
    // No comments found.
    total: number
  }
  // 38.信贷吧接口: 38.7.个人信贷吧历史记录查询
  type REQ = {
    // 当前页
    page?: number
    // 每页条数
    pageSize?: number
    // 开始时间（时间戳）
    startTime?: string | number
    // 结束时间（时间戳）
    endTime?: string | number
    // 类型，0-借款，1-还款
    type?: number
    // 借/还款状态，0-未受理，1-成功，2-失败，3-强制扣款
    status?: number
  }
}
// 39.邀请码接口: 39.1.邀请码列表
declare namespace API_USER_INVITE_LIST_HYTYPE {
  // 39.邀请码接口: 39.1.邀请码列表
  type RES = {
    // No comments found.
    success: boolean
    // No comments found.
    msg: string
    // No comments found.
    code: number
    // No comments found.
    rows: Array<{
      // 主键
      id: number
      // 邀请码
      code: string
      // 用户id
      userId: number
      // 返点配置 json格式
      rebateConfigs: Array<{
        // 类别代码
        gameCate: string
        // 类别名称
        gameName: string
        // 返点
        rebate: number
      }>
      // 会员类型 0: 普通会员，1：代理会员
      hyType: number
      // 创建时间
      createTime: string
      // 注册人数
      regNum: number
    }>
    // 注册人数
    regNum: number
    // No comments found.
    total: number
  }
  // 39.邀请码接口: 39.1.邀请码列表
  type REQ = {
    // 当前页
    page?: number
    // 每页条数
    pageSize?: number
    // 开始时间（时间戳）
    startTime?: string | number
    // 结束时间（时间戳）
    endTime?: string | number
    // 網址上的參數
    hyType: string
  }
}
// 39.邀请码接口: 39.2.生成邀请码
declare namespace API_USER_INVITE_SAVE {
  // 39.邀请码接口: 39.2.生成邀请码
  type RES = {
    // No comments found.
    success: boolean
    // No comments found.
    msg: string
    // No comments found.
    code: number
  }
  // 39.邀请码接口: 39.2.生成邀请码
  type REQ = {
    // 会员类型 0: 普通会员，1：代理会员
    hyType?: number
    // 自定义邀请码
    code?: string
    // 用户id，admin增加邀请码时用到。
    userId?: number
    // 类别返点列表
    cateRebates?: Array<{
      // 类别代码
      gameType?: string
      // 返点
      rebate?: number
    }>
  }
}
// 40.用户提现信息包含银行卡、虚拟币: 40.1.我的提现信息
declare namespace API_USER_BANK_MY {
  // 40.用户提现信息包含银行卡、虚拟币: 40.1.我的提现信息
  type RES = {
    // No comments found.
    success: boolean
    // No comments found.
    msg: string
    // No comments found.
    code: number
    // No comments found.
    t: {
      // 卡号id
      id: number
      // 用户id
      userId: number
      // uw_type bank: 银行卡名称 ali支付宝名称 wx微信号名称 crypto虚拟币协议如(ERC20-USDT)
      bankName: string
      // 开户行地址
      subAddress: string
      // uw_type bank卡号 crypto虚拟币钱包地址
      cardNo: string
      // 添加时间
      addTime: string
      // 修改时间
      updateTime: string
      // 平台id
      platformId: number
      // 提款类型银行卡 bankTransfer虚拟币 cryptoTransfer
      uwType: string
      // 银行代码
      bankCode: string
      // 提款卡状态 1:正常 2:前台刪除(前台隱藏)
      status: number
    }
  }
  // 40.用户提现信息包含银行卡、虚拟币: 40.1.我的提现信息
  type REQ = {
    // 用户id（从x-seesion-token获取，无需传值）
    userId?: number
    // 平台id（从x-seesion-token获取，无需传值）
    platformId?: number
  }
}
// 40.用户提现信息包含银行卡、虚拟币: 40.2.添加提现信息 (编辑需带id)
declare namespace API_USER_BANK_ADD {
  // 40.用户提现信息包含银行卡、虚拟币: 40.2.添加提现信息 (编辑需带id)
  type RES = {
    // No comments found.
    success: boolean
    // No comments found.
    msg: string
    // No comments found.
    code: number
  }
  // 40.用户提现信息包含银行卡、虚拟币: 40.2.添加提现信息 (编辑需带id)
  type REQ = {
    // uwType bank:银行名称， crypto: 虚拟币合约如（ERC20-USDT）
    bankName?: string
    // 银行代码
    bankCode?: string
    // 开户行地址
    subAddress?: string
    // 卡号
    cardNo?: string
    // 资金密码
    fundPwd: string
    // 真实名称，银行卡上的真实名称，校验格式：只能为2~20个汉字或小数点
    fullName?: string
    // 銀行卡id
    id?: number
    // 提款类型银行卡 bankTransfer虚拟币 cryptoTransfer
    uwType: string
    // User id
    userId?: number
  }
}
// 40.用户提现信息包含银行卡、虚拟币: 40.3.删除提现信息
declare namespace API_USER_BANK_DELETE {
  // 40.用户提现信息包含银行卡、虚拟币: 40.3.删除提现信息
  type RES = {
    // No comments found.
    success: boolean
    // No comments found.
    msg: string
    // No comments found.
    code: number
  }
  // 40.用户提现信息包含银行卡、虚拟币: 40.3.删除提现信息
  type REQ = {
    // 提款密码
    fundPwd: string
    // 銀行卡id
    id: number
  }
}
// 41.用户充值: 41.1.充值列表
declare namespace API_USERRECH_LIST {
  // 41.用户充值: 41.1.充值列表
  type RES = {
    // No comments found.
    success: boolean
    // No comments found.
    msg: string
    // No comments found.
    code: number
    // No comments found.
    rows: Array<{
      // 主键
      id: number
      // 账号信息
      account: string
      // 用户编号
      userId: number
      // 用户名称
      userName: string
      // 用户充值时账户余额
      accountMoney: number
      // 订单号
      orderNo: string
      // 充值金额
      rechMoney: number
      // 充值状态：1-处理中；2-充值成功；3-充值失败;4-充值中
      status: number
      // 用户充值时间
      rechTime: string
      // 订单时间
      addTime: string
      // 充值渠道:对应rech_cfg配置
      channel: number
      // 订单审核原因
      reason: string
      // 充值名称
      rechName: string
      // 充值类型
      rechType: string
      // 收款用户名
      payeeName: string
      // 收款账号
      payee: string
      // 收款银行
      payeeBankName: string
      // 充值人名称
      payerName: string
      // 充值账号
      payer: string
      // 其它充值信息
      payerInfo: string
      // 充值银行名称
      payerBankName: string
      // 实际充值金额
      actualMoney: number
      // 第三方订单号
      thirdOrderNo: string
      // 操作时间（到账时间）
      operatorTime: string
      // 用户分成
      rechLevel: string
      // 返利
      rebateMoney: number
      // 第三方在线渠道
      thirdChannel: string
      // 统计日期
      statDate: string
      // 在线充值类型
      onlineType: number
      // 真实姓名
      fullName: string
      // 虚拟币汇率
      exchangeRate: number
      // 虚拟币金额
      cryptoMoney: number
      // 虚拟币币种
      cryptoCurrency: string
      // 会员前台输入remark
      frontRemark: string
    }>
    // 会员前台输入remark
    frontRemark: string
    // No comments found.
    total: number
  }
  // 41.用户充值: 41.1.充值列表
  type REQ = {
    // 当前页
    page?: number
    // 每页条数
    pageSize?: number
    // 状态 全部不傳 1:處理中 2:成功 3:失敗
    status?: number
    // 开始时间
    startTime?: string | number
    // 结束时间
    endTime?: string | number
    // 充值类型onlinePayment：在线支付，bankTransfer：银行汇款，alipay：支付宝支付，weixin：微信支付，cft：财付通,adminAddMoney: 后台加款, adminActivityAddMoney: 活动加款
    rechType?: string
  }
}
// 41.用户充值: 41.2.新增充值（线下转账）
declare namespace API_USERRECH_ADD {
  // 41.用户充值: 41.2.新增充值（线下转账）
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
  // 41.用户充值: 41.2.新增充值（线下转账）
  type REQ = {
    // token（在线充值时，不能为空）
    token?: string
    // 充值配置id
    rechCfgId: number
    // 银行代码
    bankCode?: string
    // 充值金额
    depositMoney: number
    // 充值账号
    payer?: string
    // 充值人名称
    payerName?: string
    // 充值银行名称
    payerBankName?: string
    // 充值附加信息
    payerInfo?: string
    // 充值日期
    depositDate?: string
    // 用户id（无需传值，后端赋值）
    userId?: number
    // 虚拟币转账交易单号(长度6到256位)
    txHashCode?: string
    // 虚拟币转账凭证凭证图片上传接口：- projectCode(必填) 固定传 cx_sports- platformCode(必填) 固定传 平台id/voucher- expireAfterDays(必填) 固定传 0- userId (必填)- file(必传)
    voucherPath?: string
    // 前台输入备注
    remark?: string
    // 移动端接入AF方的SDK后获取到的id
    appsFlyerId?: string
    // 移动端接入s2s方的SDK后获取到的Key
    s2sKey?: string
    // 移动端接入s2s方的SDK后获取到的app_id
    s2sId?: string
    // 订单发起时的客户端类型, 0：WEB, 1：MOBILE_BROWSER, 2：ANDROID, 3：IOS
    clientType?: number
    // 支付凭证图片，转账执联
    proofImg?: string
    // 验证码
    authCode?: string
    // 充值活动id
    rechActId?: number
  }
}
// 41.用户充值: 41.3.新增充值（在线充值，支持POST/GET方法）
declare namespace API_USERRECH_ONLINEPAY {
  // 41.用户充值: 41.3.新增充值（在线充值，支持POST/GET方法）
  type REQ = {
    // token（在线充值时，不能为空）
    token?: string
    // 充值配置id
    rechCfgId: number
    // 银行代码
    bankCode?: string
    // 充值金额
    depositMoney: number
    // 充值账号
    payer?: string
    // 充值人名称
    payerName?: string
    // 充值银行名称
    payerBankName?: string
    // 充值附加信息
    payerInfo?: string
    // 充值日期
    depositDate?: string
    // 用户id（无需传值，后端赋值）
    userId?: number
    // 虚拟币转账交易单号(长度6到256位)
    txHashCode?: string
    // 虚拟币转账凭证凭证图片上传接口：- projectCode(必填) 固定传 cx_sports- platformCode(必填) 固定传 平台id/voucher- expireAfterDays(必填) 固定传 0- userId (必填)- file(必传)
    voucherPath?: string
    // 前台输入备注
    remark?: string
    // 移动端接入AF方的SDK后获取到的id
    appsFlyerId?: string
    // 移动端接入s2s方的SDK后获取到的Key
    s2sKey?: string
    // 移动端接入s2s方的SDK后获取到的app_id
    s2sId?: string
    // 订单发起时的客户端类型, 0：WEB, 1：MOBILE_BROWSER, 2：ANDROID, 3：IOS
    clientType?: number
    // 支付凭证图片，转账执联
    proofImg?: string
    // 验证码
    authCode?: string
    // 充值活动id
    rechActId?: number
    // 用户id（从x-seesion-token获取，无需传值）
    userId?: number
    // 平台id（从x-seesion-token获取，无需传值）
    platformId?: number
    // No comments found.
    locale?: any
  }
}
// 41.用户充值: 41.4.取得充值验证码
declare namespace API_USERRECH_VERIFYCODE {
  // 41.用户充值: 41.4.取得充值验证码
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
  // 41.用户充值: 41.4.取得充值验证码
  type REQ = {
    // 用户id（从x-seesion-token获取，无需传值）
    userId?: number
    // 平台id（从x-seesion-token获取，无需传值）
    platformId?: number
  }
}
// 41.用户充值: 41.5.刪除像素Pixel
declare namespace API_USERRECH_REMOVE_PIXEL {
  // 41.用户充值: 41.5.刪除像素Pixel
  type RES = {
    // No comments found.
    success: boolean
    // No comments found.
    msg: string
    // No comments found.
    code: number
  }
  // 41.用户充值: 41.5.刪除像素Pixel
  type REQ = {
    // No comments found.
    orderNo?: string
  }
}
// 41.用户充值: 41.6.刪除首沖事件
declare namespace API_USERRECH_REMOVE_FIRSTPIXEL {
  // 41.用户充值: 41.6.刪除首沖事件
  type RES = {
    // No comments found.
    success: boolean
    // No comments found.
    msg: string
    // No comments found.
    code: number
  }
  // 41.用户充值: 41.6.刪除首沖事件
  type REQ = {
    // 用户id（从x-seesion-token获取，无需传值）
    userId?: number
    // 平台id（从x-seesion-token获取，无需传值）
    platformId?: number
  }
}
// 42.公告: 42.1.获取公告
declare namespace API_MESSAGE_LIST {
  // 42.公告: 42.1.获取公告
  type RES = {
    // No comments found.
    success: boolean
    // No comments found.
    msg: string
    // No comments found.
    code: number
    // No comments found.
    rows: Array<{
      // 主键
      id: number
      // 内容
      message: string
      // 类型：1: 投注区底部公告 ,2: 登录弹窗公告 , 3: 未登录弹窗
      type: number
      // 消息类型：1：游戏公告，2：会员福利，3：转账须知，4：劲爆推荐，5：导航网，6：其他
      msgType: number
      // 添加时间
      addTime: string
      // 标题
      title: string
      // 更新时间
      updateTime: string
      // 用户充值层级
      rechLevels: string
      // 排序
      sort: number
    }>
    // 排序
    sort: number
    // No comments found.
    total: number
  }
  // 42.公告: 42.1.获取公告
  type REQ = {
    // 画面显示类型：1: 系統 ,2: 平台 ,3: 游戏
    messageType: number
    // 当前页
    page?: number
    // 每页条数
    pageSize?: number
    // No comments found.
    platformId?: number
  }
}
// 43.消息中心: 43.1.消息列表
declare namespace API_USER_NOTICE_LIST {
  // 43.消息中心: 43.1.消息列表
  type RES = {
    // No comments found.
    success: boolean
    // No comments found.
    msg: string
    // No comments found.
    code: number
    // No comments found.
    rows: Array<{
      // 主键
      id: number
      // 用户id
      userId: number
      // 用户名称
      userName: string
      // 添加日期
      addDate: string
      // 标题
      title: string
      // 内容
      content: string
      // 是否已读
      isRead: number
      // 消息类型 0消息通知、1app推送
      noticeType: number
      // 消息类型 1发送至用户消息中心、2右下角弹出提示、3页面中央弹出提示、4app推送
      msgShowType: number
      // 订单状态：0-成功；1-失败
      status: number
      // 平台id
      platformId: number
      // 发件人
      operatorName: string
    }>
    // 发件人
    operatorName: string
    // No comments found.
    total: number
  }
  // 43.消息中心: 43.1.消息列表
  type REQ = {
    // 当前页
    page?: number
    // 每页条数
    pageSize?: number
    // 开始时间（时间戳）
    startTime?: string | number
    // 结束时间（时间戳）
    endTime?: string | number
    // No comments found.
    noticeType?: number
    // No comments found.
    userName?: string
    // No comments found.
    platformId?: number
    // No comments found.
    isRead?: number
  }
}
// 43.消息中心: 43.2.设置为已读
declare namespace API_USER_NOTICE_READED_ID {
  // 43.消息中心: 43.2.设置为已读
  type RES = {
    // No comments found.
    success: boolean
    // No comments found.
    msg: string
    // No comments found.
    code: number
    // No comments found.
    t: {
      // No comments found.
      unReadCounts: number
    }
  }
  // 43.消息中心: 43.2.设置为已读
  type REQ = {
    // No comments found.
    id: number
    // 用户id（从x-seesion-token获取，无需传值）
    userId?: number
    // 平台id（从x-seesion-token获取，无需传值）
    platformId?: number
  }
}
// 43.消息中心: 43.3.设置为全部已读
declare namespace API_USER_NOTICE_ALLREADIED {
  // 43.消息中心: 43.3.设置为全部已读
  type RES = {
    // No comments found.
    success: boolean
    // No comments found.
    msg: string
    // No comments found.
    code: number
  }
  // 43.消息中心: 43.3.设置为全部已读
  type REQ = {
    // 用户id（从x-seesion-token获取，无需传值）
    userId?: number
    // 平台id（从x-seesion-token获取，无需传值）
    platformId?: number
  }
}
// 44.会员等级: 44.1.会员等级及成长值
declare namespace API_USER_LEVEL_GETLEVELGROWTH {
  // 44.会员等级: 44.1.会员等级及成长值
  type RES = {
    // No comments found.
    success: boolean
    // No comments found.
    msg: string
    // No comments found.
    code: number
    // No comments found.
    t: {
      // 用户成长值配置
      GrowthConfigs: Array<{
        // 主键id
        id: number
        // 平台id
        platformId: number
        // 成长值类型 1：充值 2：下注 3:登录
        type: string
        // 成长值等价单元备注：充值/下注类型才有Unit,登录类型默认为1,而且不存储在数据表中
        unit: number
        // 成长值
        growth: number
        // 是否启用上限设置（0：不启用；1：启用）
        isLimit: boolean
        // 备注
        remark: string
        // 每日上限值(默认0:不限制)
        dailyLimit: number
      }>
      // 用户等级配置
      UserLevelConfigs: Array<{
        // 主键id
        id: number
        // 平台id
        platformId: number
        // 等级代码
        code: string
        // 等级名称
        name: string
        // 成长值门槛
        growthThreshold: number
        // 单注最大下注额
        maxBetMoney: number
        // 串关最大下注额
        maxParlayBetMoney: number
        // 单注冠军最大下注额
        maxCpBetMoney: number
        // 充值返水
        rechRebate: number
        // 返水比例
        betRebate: number
        // 最大单注返水金额上限, 0为不限制
        maxSingleBetRebate: number
        // 备注
        remark: string
        // 平台代码
        platformCode: string
        // 更新时间
        updateDate: string
        // 升级礼金
        growthMoney: number
        // 月礼金
        monthMoney: number
        // 币别
        currency: string
        // 保级所需成长值
        protectionLevelGrowthValue: number
        // 降级保留成长值比率
        downgradeRetentionGrowthRatio: number
        // 是否启用该等级
        enable: boolean
        // 创建时间
        createTime: string
        // 更新时间
        updateTime: string
      }>
    }
  }
  // 44.会员等级: 44.1.会员等级及成长值
  type REQ = {
    // 用户id（从x-seesion-token获取，无需传值）
    userId?: number
    // 平台id（从x-seesion-token获取，无需传值）
    platformId?: number
  }
}
// 45.首页用户绑定: 45.1.通过聊天平台传入的 openId 获取用户是否已经绑定
declare namespace API_INDEX_BIND_GETUSERBINDINFO {
  // 45.首页用户绑定: 45.1.通过聊天平台传入的 openId 获取用户是否已经绑定
  type RES = {
    // No comments found.
    success: boolean
    // No comments found.
    msg: string
    // No comments found.
    code: number
    // No comments found.
    t: {
      // 用户id（保留，建议用userId）
      uid: number
      // 用户id
      userId: number
      // token值
      token: string
      // 登录日期
      loginDate: string
      // 登录ip
      loginIp: string
      // 最近一次登录日期
      lastLoginDate: string
      // 最近一次登录ip
      lastLoginIp: string
      // 用户名
      userName: string
      // 昵称
      nickName: string
      // 用户类型（"ADMIN"：超管；"ZDL"：总代理；"DL"：代理；"HY"：会员；"ZZH"：子账户）
      userType: string
      // 平台id
      platformId: number
      // 平台编码
      platformCode: string
      // 真实名称
      fullName: string
      // 是否测试用户（0-正常用户，1-游客，2-内部测试）
      testFlag: number
      // 充值层级
      rechLevel: string
      // 头像地址
      iconUrl: string
      // 会员类型
      hyType: number
      // 用户返点数据
      userRebateList: Array<{
        // 类别名称
        gameCate: string
        // 类别id
        cateId: number
        // 返点
        rebate: number
      }>
      // 赔率折扣,画面展示之赔率需扣除本金1之后乘以此值,显示至小数点第二位,第三位以后四舍五入,再将本金的1与计算的赔率相加后展示在画面上ex:odds=1.9,discount=0.5, 画面展示赔率=(1.9-1) * (0.5) +1 = 1.45
      discount: number
      // 是否通过实名验证,0:未通过 1:已通过 2:验证中 3:验证失败
      verified: number
      // 会员对应vip层级的单注最大下注额,下注金额不可超过此参数
      maxBetMoney: number
      // 会员对应vip层级的串关最大下注额,下注金额不可超过此参数
      maxParlayBetMoney: number
      // 会员对应vip层级的单注冠军最大下注额,下注金额不可超过此参数
      maxCpBetMoney: number
      // 设备验证状态 0:未验证 1:已验证
      deviceValidateStatus: number
      // 电话
      phone: string
      // 币别
      currency: string
      // 国家编码
      nationCode: string
      // 语言
      lang: string
      // 直播登陆相关参数
      liveSyncUserInfoVO: {
        // 平台用户ID
        platUserId: number
        // 平台用户名
        userName: string
        // 昵称
        nickName: string
        // 平台编码
        platformCode: string
        // 测试试玩账号类型：0-普通账号，2-内部测试账号，1-游客
        testFlag: number
        // 头像地址
        iconUrl: string
        // 时间戳
        timestamp: number
        // 签名
        sign: string
      }
      // 用户水位值
      margin: number
      // 首充时间
      firstRechTime: string
      // 球種赔率折扣,画面展示之赔率需扣除本金1之后乘以此值,显示至小数点第二位,第三位以后四舍五入,再将本金的1与计算的赔率相加后展示在画面上ex:odds=1.9,discount=0.5, 画面展示赔率=(1.9-1) * (0.5) +1 = 1.45
      discountByGameTypeList: Array<{
        // 赔率折扣,画面展示之赔率需扣除本金1之后乘以此值,显示至小数点第二位,第三位以后四舍五入,再将本金的1与计算的赔率相加后展示在画面上ex:odds=1.9,discount=0.5, 画面展示赔率=(1.9-1) * (0.5) +1 = 1.45赔率折扣
        discount: number
        // 單一球种 (一個VO一個球種)
        gameType: string
      }>
    }
  }
  // 45.首页用户绑定: 45.1.通过聊天平台传入的 openId 获取用户是否已经绑定
  type REQ = {
    // 绑定来源，例如: 1:IM 等其他第三方平台
    bindSource: number
    // 聊天平台跳转进入自家平台携带的openId
    openId: string
    // 登录来源（0：WEB, 1：MOBILE_BROWSER, 2：ANDROID, 3：IOS）
    loginSrc?: number
  }
}
// 45.首页用户绑定: 45.2.根据平台 绑定来源 用户id 查询绑定info
declare namespace API_INDEX_BIND_STATUS_BINDSOURCE {
  // 45.首页用户绑定: 45.2.根据平台 绑定来源 用户id 查询绑定info
  type RES = {
    // No comments found.
    success: boolean
    // No comments found.
    msg: string
    // No comments found.
    code: number
    // No comments found.
    t: {
      // 绑定状态0:未绑定 1:已绑定
      bindStatus: number
      // 绑定昵称
      nickName: string
    }
  }
  // 45.首页用户绑定: 45.2.根据平台 绑定来源 用户id 查询绑定info
  type REQ = {
    // No comments found.
    bindSource: number
    // 用户id（从x-seesion-token获取，无需传值）
    userId?: number
    // 平台id（从x-seesion-token获取，无需传值）
    platformId?: number
  }
}
// 46.有效域名接口: 46.1.获取有效的app域名
declare namespace API_DOMAINCONFIG_APPDOMAIN_PLATFORMCODE_JSON {
  // 46.有效域名接口: 46.1.获取有效的app域名
  type RES = {
    // No comments found.
    success: boolean
    // No comments found.
    msg: string
    // No comments found.
    code: number
    // No comments found.
    rows: any[]
    // No comments found.
    total: number
  }
  // 46.有效域名接口: 46.1.获取有效的app域名
  type REQ = {
    // 平台编码
    platformCode: string
  }
}
// 47.活动派奖: 47.1.活动派奖列表
declare namespace API_REWARDLOG_LIST {
  // 47.活动派奖: 47.1.活动派奖列表
  type RES = {
    // No comments found.
    success: boolean
    // No comments found.
    msg: string
    // No comments found.
    code: number
    // No comments found.
    rows: Array<{
      // 当前页
      page: number
      // 每页条数
      pageSize: number
      // 主键
      id: number
      // 用户id
      userId: number
      // 用户名称
      userName: string
      // 奖品类型:1-实物；2-金额；3-券
      prizeType: number
      // 奖品规格
      prizeSpec: number
      // 奖品描述
      prizeDesc: string
      // 礼金配置id
      prizeCfgId: number
      // 添加时间
      createdAt: string
      // 领取时间
      getedAt: string
      // 状态:1-未中奖；2-未审核；3-审核不通过；4-审核通过； 5-已领取； 6-已失效
      rewardStatus: number
      // 审核时间
      auditedAt: string
      // 所属活动ID
      activityId: number
      // 活动名称
      activityName: string
      // 审核原因描述
      reason: string
      // 邀请活动类型：1 首充，2 流水，3 升级
      inviteType: number
      // 来源用户id
      sourceUserId: number
      // 来源用户名称
      sourceUserName: string
      // 来源金融
      sourceAmount: number
      // 游戏分类，ALL 体育， ... 其他
      gameType: string
      // 流水类型 1：本地体育，2：三方游戏
      betType: number
    }>
    // 流水类型 1：本地体育，2：三方游戏
    betType: number
    // No comments found.
    total: number
  }
  // 47.活动派奖: 47.1.活动派奖列表
  type REQ = {
    // 当前页
    page?: number
    // 每页条数
    pageSize?: number
    // 开始时间（时间戳）
    startTime?: string | number
    // 结束时间（时间戳）
    endTime?: string | number
  }
}
// 48.聊天室用户接口: 48.1.获取红包记录
declare namespace API_USER_USERPACKET_LIST {
  // 48.聊天室用户接口: 48.1.获取红包记录
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
      // 交易类型 {1201: 发红包 1202：收红包}
      tranType: number
      // 交易金额
      money: number
      // 账户余额
      balance: number
      // 交易发生时间
      addTime: string
      // 操作人
      operateName: string
      // 备注
      remark: string
      // 是否是测试账户 0:不是 1:是
      testFlag: number
      // 平台id
      platformId: number
      // 统计日期
      statDate: string
      // 币别
      currency: string
      // 是否是信用帐户 0:不是,1:是
      creditAccount: number
      // 1系统币种比此币种汇率, 币种金额/此汇率=系统币种金额
      sysRate: number
      // 币种对系统币种金额
      sysMoney: number
    }>
    // 币种对系统币种金额
    sysMoney: number
    // No comments found.
    total: number
  }
  // 48.聊天室用户接口: 48.1.获取红包记录
  type REQ = {
    // 当前页
    page?: number
    // 每页条数
    pageSize?: number
    // 交易类型： {1201: 发红包 1202：收红包}
    tranTypes?: any[]
    // 订单号
    orderNo?: string
    // 开始时间
    startTime?: string | number
    // 结束时间
    endTime?: string | number
    // 用户Id
    userId?: number
    // 平台id
    platformId?: number
    // 是否过滤测试用户，默认为true
    filterTest?: boolean
    // 用户名称
    userName?: string
  }
}
// 48.聊天室用户接口: 48.2.获取打赏记录
declare namespace API_USER_USERFOLLOWBETREWARD_LIST {
  // 48.聊天室用户接口: 48.2.获取打赏记录
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
      // 交易类型{101:跟注打赏扣款, 102:跟注打赏入账}; 和user_bill类型保持一致
      tranType: number
      // 交易金额
      money: number
      // 系统交易金额
      sysMoney: number
      // 1系统币种比此币种汇率, 币种金额/此汇率=系统币种金额
      sysRate: number
      // 交易发生时间
      addTime: string
      // 备注
      remark: string
      // 平台id
      platformId: number
      // 目标批次号
      targetBatchNo: string
      // 币别
      currency: string
      // 是否是信用帐户 0:不是,1:是
      creditAccount: number
    }>
    // 是否是信用帐户 0:不是,1:是
    creditAccount: number
    // No comments found.
    total: number
  }
  // 48.聊天室用户接口: 48.2.获取打赏记录
  type REQ = {
    // 当前页
    page?: number
    // 每页条数
    pageSize?: number
    // 交易类型{101:跟注打赏扣款, 102:跟注打赏入账}; 和user_bill类型保持一致
    tranTypes?: any[]
    // 订单号
    orderNo?: string
    // 开始时间
    startTime?: string | number
    // 结束时间
    endTime?: string | number
    // 用户Id
    userId?: number
    // 平台id
    platformId?: number
    // 用户名称
    userName?: string
    // 目标批次号
    targetBatchNo?: string
  }
}
// 48.聊天室用户接口: 48.3.打赏跟注
declare namespace API_USER_REWARDFOLLOWBET {
  // 48.聊天室用户接口: 48.3.打赏跟注
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
  // 48.聊天室用户接口: 48.3.打赏跟注
  type REQ = {
    // 用户id
    userId?: number
    // 批次号
    batchNo?: string
    // 目标用户id
    targetUserId?: number
    // 被跟注的批次号
    targetBatchNo?: string
    // 打赏金额
    money?: number
    // 旧的聊天室跟注关系的fk,因为拿不到 targetUserId
    userFk?: string
  }
}
// 49.余额宝接口: 49.1.是否显示余额宝协议内容,如过是，返还值t=1 ,如果否，返还值t=0
declare namespace API_YEB_SHOWYEBDEAL {
  // 49.余额宝接口: 49.1.是否显示余额宝协议内容,如过是，返还值t=1 ,如果否，返还值t=0
  type RES = {
    // No comments found.
    success: boolean
    // No comments found.
    msg: string
    // No comments found.
    code: number
    // No comments found.
    t: {
      // 0 - 不显示协议，1-显示协议
      show: number
    }
  }
  // 49.余额宝接口: 49.1.是否显示余额宝协议内容,如过是，返还值t=1 ,如果否，返还值t=0
  type REQ = {
    // 用户id（从x-seesion-token获取，无需传值）
    userId?: number
    // 平台id（从x-seesion-token获取，无需传值）
    platformId?: number
  }
}
// 49.余额宝接口: 49.2.用户同意余额宝协议
declare namespace API_YEB_AGREEYEBDEAL {
  // 49.余额宝接口: 49.2.用户同意余额宝协议
  type RES = {
    // No comments found.
    success: boolean
    // No comments found.
    msg: string
    // No comments found.
    code: number
  }
  // 49.余额宝接口: 49.2.用户同意余额宝协议
  type REQ = {
    // 用户id（从x-seesion-token获取，无需传值）
    userId?: number
    // 平台id（从x-seesion-token获取，无需传值）
    platformId?: number
  }
}
// 49.余额宝接口: 49.3.查询余额宝信息
declare namespace API_YEB_GETDEPOSITINFO {
  // 49.余额宝接口: 49.3.查询余额宝信息
  type RES = {
    // No comments found.
    success: boolean
    // No comments found.
    msg: string
    // No comments found.
    code: number
    // No comments found.
    t: {
      // 今日收益
      interest: number
      // 收益率,单位 %
      interestRate: number
      // 累积收益
      interestTotal: number
      // 当前可转入金额上限
      transferLimit: number
      // 余额宝余额
      depositMoney: number
      // 存款
      balance: number
      // 用户可操作类型 ， 0 - 可转入、不可转出 , 1 - 不可转入、可转出 , 2 - 皆可 ，3 - 皆不可
      transferType: number
      // 待领取收益
      unclaimedMoney: number
      // 查询时间
      queryDate: string
      // 余额宝待领取列表
      unclaimedList: Array<{
        // 计息开始时间
        interestStartDate: string
        // 计息结束时间
        interestEndDate: string
        // 计息金额
        interest: number
        // 本金
        capital: number
      }>
    }
  }
  // 49.余额宝接口: 49.3.查询余额宝信息
  type REQ = {
    // 用户id（从x-seesion-token获取，无需传值）
    userId?: number
    // 平台id（从x-seesion-token获取，无需传值）
    platformId?: number
  }
}
// 49.余额宝接口: 49.4.余额宝历史交易记录
declare namespace API_YEB_GETDEPOSITHISTORY {
  // 49.余额宝接口: 49.4.余额宝历史交易记录
  type RES = {
    // No comments found.
    success: boolean
    // No comments found.
    msg: string
    // No comments found.
    code: number
    // No comments found.
    rows: Array<{
      // 用户id
      userId: number
      // 金额
      amount: number
      // 详情类型，(0-转入丶1-转出丶2-利息)
      detail: number
      // 新增时间
      createTime: string
      // 交易描述 利息时候使用json 格式{"interestStartDate":xxx,"interestEndDate":xxx,"capital":"计息金额","capital":"本金"} 其他交易类型无需关心
      remark: string
    }>
    // 交易描述 利息时候使用json 格式{"interestStartDate":xxx,"interestEndDate":xxx,"capital":"计息金额","capital":"本金"} 其他交易类型无需关心
    remark: string
    // No comments found.
    total: number
  }
  // 49.余额宝接口: 49.4.余额宝历史交易记录
  type REQ = {
    // 当前页
    page?: number
    // 每页条数
    pageSize?: number
    // 开始时间（时间戳）
    startTime?: string | number
    // 结束时间（时间戳）
    endTime?: string | number
    // 历史类型，(0-转入、1-转出、2-利息、不传查全部)
    detail?: number
  }
}
// 49.余额宝接口: 49.5.余额宝转入
declare namespace API_YEB_TRANSFERIN {
  // 49.余额宝接口: 49.5.余额宝转入
  type RES = {
    // No comments found.
    success: boolean
    // No comments found.
    msg: string
    // No comments found.
    code: number
  }
  // 49.余额宝接口: 49.5.余额宝转入
  type REQ = {
    // 转账金额
    money: number
  }
}
// 49.余额宝接口: 49.6.余额宝转出
declare namespace API_YEB_TRANSFEROUT {
  // 49.余额宝接口: 49.6.余额宝转出
  type RES = {
    // No comments found.
    success: boolean
    // No comments found.
    msg: string
    // No comments found.
    code: number
  }
  // 49.余额宝接口: 49.6.余额宝转出
  type REQ = {
    // 转账金额
    money: number
  }
}
// 49.余额宝接口: 49.7.利息领取
declare namespace API_YEB_CLAIMED {
  // 49.余额宝接口: 49.7.利息领取
  type RES = {
    // No comments found.
    success: boolean
    // No comments found.
    msg: string
    // No comments found.
    code: number
  }
  // 49.余额宝接口: 49.7.利息领取
  type REQ = {
    // 领取时间
    queryDate: string
  }
}
// 50.活动信息接口: 50.1.活动列表
declare namespace API_ACTIVITY_LIST {
  // 50.活动信息接口: 50.1.活动列表
  type RES = {
    // No comments found.
    success: boolean
    // No comments found.
    msg: string
    // No comments found.
    code: number
    // No comments found.
    rows: Array<{
      // 主键
      id: number
      // 名称
      name: string
      // 描述
      activityDesc: string
      // 活动1描述
      activityDesc1: string
      // 活动2描述
      activityDesc2: string
      // 活动3描述
      activityDesc3: string
      // 活动类型:1-连续升级活动；2-一次性活动；3-每日登录活动；4-推荐好友领奖金；5-首充；6-打蛋蛋；7-邀请好友
      activityType: number
      // 充值金额
      rechMoney: number
      // 打码量
      betMoney: number
      // 前置活动ID
      preActivityId: number
      // 奖励类型:0-没有奖励；1-抽奖机会；2-金额
      rewardType: number
      // 连续次数
      continuousTimes: number
      // 开始时间
      beginAt: string
      // 结束/截止时间
      endAt: string
      // 活动开关:1-开启；2-关闭
      isOpen: number
      // 是否排他/唯一活动:1-当前唯一进行活动，具有排他性；2-可以和其他活动并行；
      isExclusiveness: number
      // 是否显示：1-显示；2-隐藏
      isShow: number
      // 所属活动Id,如果是连续性活动,最新天数的activityId等同于topActiivityId
      topActivityId: number
      // 排序,连续性活动可视为第几天
      activitySort: number
      // 活动条件的单位（activity condition unit的简写）：1-每天/当天；2-累计; 3-充值累计，打码量每天[3作为举例说明后期可能遇到的情况，业务逻辑目前不做处理]
      acu: number
      // 活动列表
      details: Array<{
        // 主键
        id: number
        // 名称
        name: string
        // 描述
        activityDesc: string
        // 活动类型:1-连续升级活动；2-一次性活动；3-每日登录活动；4-推荐好友领奖金；5-首充；6-打蛋蛋
        activityType: number
        // 充值金额
        rechMoney: number
        // 打码量
        betMoney: number
        // 前置活动ID
        preActivityId: number
        // 奖励类型:0-没有奖励；1-抽奖机会；2-金额
        rewardType: number
        // 连续次数
        continuousTimes: number
        // 开始时间
        beginAt: string
        // 结束/截止时间
        endAt: string
        // 活动开关:1-开启；2-关闭
        isOpen: number
        // 是否排他/唯一活动:1-当前唯一进行活动，具有排他性；2-可以和其他活动并行；
        isExclusiveness: number
        // 是否显示：1-显示；2-隐藏
        isShow: number
        // 所属活动Id,如果是连续性活动,最新天数的activityId等同于topActiivityId
        topActivityId: number
        // 排序,连续性活动可视为第几天
        activitySort: number
        // 活动条件的单位（activity condition unit的简写）：1-每天/当天；2-累计; 3-充值累计，打码量每天[3作为举例说明后期可能遇到的情况，业务逻辑目前不做处理]
        acu: number
        // 奖品列表
        prizeList: Array<{
          // 名称
          name: string
          // 奖品类型:1-实物；2-金额；3-券
          prizeType: number
          // 奖品规格:单个奖品的规格。如果类型是金额，那么显示中奖金额（spec: specifications）
          prizeSpec: number
          // 名次
          ranking: number
        }>
        // 每日活动奖励结算时间
        settleTime: string
        // 有打码限制的游戏 gameType -> 体育球种, gameCategory -> 三方游戏
        playLimitList: Array<{
          // No comments found.
          id: number
          // 活動id
          activityId: number
          // 活動類型 1:连续升级活动；2:一次性活动；3:每日登录活动；4:推荐好友领奖金; 6:砸金蛋
          activityType: number
          // 設定的類型 1:体育 2:三方遊戲
          settingType: number
          // 三方遊戲設置
          gameCategory: string
          // 体育遊戲設置
          gameType: string
          // 平台Id
          platformId: number
          // 新增时间
          addTime: string
          // 稽核三方游戏分类
          auditThirdGameCategory: string
          // 稽核运动种类
          auditGameType: string
          // 稽核类型 0:非稽核资料 1:稽核资料
          auditType: number
        }>
      }>
      // 奖品列表
      prizeList: Array<{
        // 名称
        name: string
        // 奖品类型:1-实物；2-金额；3-券
        prizeType: number
        // 奖品规格:单个奖品的规格。如果类型是金额，那么显示中奖金额（spec: specifications）
        prizeSpec: number
        // 名次
        ranking: number
      }>
      // 活动列表模式预设sp
      mode: string
      // 类别
      category: string
      // 币种
      currency: string
      // 每日活动奖励结算时间
      settleTime: string
      // 有打码限制的游戏 gameType -> 体育球种, gameCategory -> 三方游戏
      playLimitList: Array<{
        // No comments found.
        id: number
        // 活動id
        activityId: number
        // 活動類型 1:连续升级活动；2:一次性活动；3:每日登录活动；4:推荐好友领奖金; 6:砸金蛋
        activityType: number
        // 設定的類型 1:体育 2:三方遊戲
        settingType: number
        // 三方遊戲設置
        gameCategory: string
        // 体育遊戲設置
        gameType: string
        // 平台Id
        platformId: number
        // 新增时间
        addTime: string
        // 稽核三方游戏分类
        auditThirdGameCategory: string
        // 稽核运动种类
        auditGameType: string
        // 稽核类型 0:非稽核资料 1:稽核资料
        auditType: number
      }>
      // 邀请活动列表
      inviteList: Array<{
        // id
        id: number
        // 平台id
        platformId: number
        // 活动id
        activityId: number
        // 邀请活动类型：1 首充，2 流水，3 升级
        type: number
        // 礼金名称
        prizeName: string
        // 礼金类型
        prizeType: number
        // 礼金值
        prizeSpec: number
        // 礼金配置id
        prizeCfgId: number
        // 流水类型 1：本地体育，2：三方游戏
        betType: number
        // 游戏分类 用于type=2
        gameType: string
        // 等级id 用于type=3
        level: number
        // 等级 用于type=3
        levelName: string
        // 最小金额 用于type=1
        minAmount: number
        // 最大金额 用于type=1
        maxAmount: number
        // 提现倍数
        withdrawMultiple: number
        // 排序
        sort: number
      }>
    }>
    // 排序
    sort: number
    // No comments found.
    total: number
  }
  // 50.活动信息接口: 50.1.活动列表
  type REQ = {
    // 用户id（从x-seesion-token获取，无需传值）
    userId?: number
    // 平台id（从x-seesion-token获取，无需传值）
    platformId?: number
  }
}
// 50.活动信息接口: 50.2.今日可抽奖次数（返回1：代表可抽奖1次）
declare namespace API_ACTIVITY_LOGIN_TODAYTIMES_TOPACTIVITYID_TOPACTIVITYID {
  // 50.活动信息接口: 50.2.今日可抽奖次数（返回1：代表可抽奖1次）
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
  // 50.活动信息接口: 50.2.今日可抽奖次数（返回1：代表可抽奖1次）
  type REQ = {
    //  父活动id
    topActivityId: number
    // 用户id（从x-seesion-token获取，无需传值）
    userId?: number
    // 平台id（从x-seesion-token获取，无需传值）
    platformId?: number
  }
}
// 50.活动信息接口: 50.3.今日可抽奖次数（返回[0,1]：代表可抽奖0次,今天已抽1次）
declare namespace API_ACTIVITY_LOGIN_TODAYTIMES_V1_TOPACTIVITYID_TOPACTIVITYID {
  // 50.活动信息接口: 50.3.今日可抽奖次数（返回[0,1]：代表可抽奖0次,今天已抽1次）
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
  // 50.活动信息接口: 50.3.今日可抽奖次数（返回[0,1]：代表可抽奖0次,今天已抽1次）
  type REQ = {
    //  父活动id
    topActivityId: number
    // 用户id（从x-seesion-token获取，无需传值）
    userId?: number
    // 平台id（从x-seesion-token获取，无需传值）
    platformId?: number
  }
}
// 50.活动信息接口: 50.4.连续性可抽奖次数（返回1：代表可抽奖1次）
declare namespace API_ACTIVITY_CONTINUOUS_TIMES_USERACTIVITYID_USERACTIVITYID {
  // 50.活动信息接口: 50.4.连续性可抽奖次数（返回1：代表可抽奖1次）
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
  // 50.活动信息接口: 50.4.连续性可抽奖次数（返回1：代表可抽奖1次）
  type REQ = {
    //  用户活动id
    userActivityId: number
    // 用户id（从x-seesion-token获取，无需传值）
    userId?: number
    // 平台id（从x-seesion-token获取，无需传值）
    platformId?: number
  }
}
// 50.活动信息接口: 50.5.登录活动抽奖，msg信息包含是否中奖信息 -1：未中奖，其他：中奖N等奖，如：2（二等奖）
declare namespace API_ACTIVITY_LOGIN_LUCKDRAW_ACTIVITYID_ACTIVITYID {
  // 50.活动信息接口: 50.5.登录活动抽奖，msg信息包含是否中奖信息 -1：未中奖，其他：中奖N等奖，如：2（二等奖）
  type RES = {
    // No comments found.
    success: boolean
    // No comments found.
    msg: string
    // No comments found.
    code: number
  }
  // 50.活动信息接口: 50.5.登录活动抽奖，msg信息包含是否中奖信息 -1：未中奖，其他：中奖N等奖，如：2（二等奖）
  type REQ = {
    // 活动id
    activityId: number
    // 用户id（从x-seesion-token获取，无需传值）
    userId?: number
    // 平台id（从x-seesion-token获取，无需传值）
    platformId?: number
  }
}
// 50.活动信息接口: 50.6.连续性活动抽奖，msg信息包含是否中奖信息，EMPTY：未中奖，其他信息：中奖信息，如：88元
declare namespace API_ACTIVITY_CONTINUOUS_LUCKDRAW_USERACTIVITYID_USERACTIVITYID {
  // 50.活动信息接口: 50.6.连续性活动抽奖，msg信息包含是否中奖信息，EMPTY：未中奖，其他信息：中奖信息，如：88元
  type RES = {
    // No comments found.
    success: boolean
    // No comments found.
    msg: string
    // No comments found.
    code: number
  }
  // 50.活动信息接口: 50.6.连续性活动抽奖，msg信息包含是否中奖信息，EMPTY：未中奖，其他信息：中奖信息，如：88元
  type REQ = {
    // 用户活动id
    userActivityId: number
    // 用户id（从x-seesion-token获取，无需传值）
    userId?: number
    // 平台id（从x-seesion-token获取，无需传值）
    platformId?: number
  }
}
// 50.活动信息接口: 50.7.用户活动列表
declare namespace API_ACTIVITY_USERACTIVITYLIST_TOPACTIVITYID_ACTIVITYID {
  // 50.活动信息接口: 50.7.用户活动列表
  type RES = {
    // No comments found.
    success: boolean
    // No comments found.
    msg: string
    // No comments found.
    code: number
    // No comments found.
    rows: Array<{
      // 主键
      id: number
      // 活动ID
      activityId: number
      // 活动类型:1-连续升级活动；2-一次性活动；3-每日登录活动；4-推荐好友领奖金；5-首充；6-打蛋蛋
      activityType: number
      // 参与/领取状态:1-未领；2-已领取；3-已过期
      joinStatus: number
      // 奖励类型:0-没有奖励；1-抽奖机会；2-金额
      rewardType: number
      // 统计日期:yyyy-mm-dd
      statDay: string
      // 所属活动Id
      topActivityId: number
      // 排序
      activitySort: number
      // 持续次数
      duration: number
    }>
    // 持续次数
    duration: number
    // No comments found.
    total: number
  }
  // 50.活动信息接口: 50.7.用户活动列表
  type REQ = {
    // 活动id
    activityId: number
    // 用户id（从x-seesion-token获取，无需传值）
    userId?: number
    // 平台id（从x-seesion-token获取，无需传值）
    platformId?: number
  }
}
// 50.活动信息接口: 50.8.奖品列表
declare namespace API_ACTIVITY_PRIZELIST_ACTIVITYID_ACTIVITYID {
  // 50.活动信息接口: 50.8.奖品列表
  type RES = {
    // No comments found.
    success: boolean
    // No comments found.
    msg: string
    // No comments found.
    code: number
    // No comments found.
    rows: Array<{
      // 名称
      name: string
      // 奖品类型:1-实物；2-金额；3-券
      prizeType: number
      // 奖品规格:单个奖品的规格。如果类型是金额，那么显示中奖金额（spec: specifications）
      prizeSpec: number
      // 名次
      ranking: number
    }>
    // 名次
    ranking: number
    // No comments found.
    total: number
  }
  // 50.活动信息接口: 50.8.奖品列表
  type REQ = {
    // 活动id
    activityId: number
    // 用户id（从x-seesion-token获取，无需传值）
    userId?: number
    // 平台id（从x-seesion-token获取，无需传值）
    platformId?: number
  }
}
// 50.活动信息接口: 50.9.邀请活动列表
declare namespace API_ACTIVITY_INVITE_ACTIVITYID_ACTIVITYID {
  // 50.活动信息接口: 50.9.邀请活动列表
  type RES = {
    // No comments found.
    success: boolean
    // No comments found.
    msg: string
    // No comments found.
    code: number
    // No comments found.
    rows: Array<{
      // 主键
      id: number
      // 名称
      name: string
      // 描述
      activityDesc: string
      // 活动1描述
      activityDesc1: string
      // 活动2描述
      activityDesc2: string
      // 活动3描述
      activityDesc3: string
      // 活动类型:1-连续升级活动；2-一次性活动；3-每日登录活动；4-推荐好友领奖金；5-首充；6-打蛋蛋；7-邀请好友
      activityType: number
      // 充值金额
      rechMoney: number
      // 打码量
      betMoney: number
      // 前置活动ID
      preActivityId: number
      // 奖励类型:0-没有奖励；1-抽奖机会；2-金额
      rewardType: number
      // 连续次数
      continuousTimes: number
      // 开始时间
      beginAt: string
      // 结束/截止时间
      endAt: string
      // 活动开关:1-开启；2-关闭
      isOpen: number
      // 是否排他/唯一活动:1-当前唯一进行活动，具有排他性；2-可以和其他活动并行；
      isExclusiveness: number
      // 是否显示：1-显示；2-隐藏
      isShow: number
      // 所属活动Id,如果是连续性活动,最新天数的activityId等同于topActiivityId
      topActivityId: number
      // 排序,连续性活动可视为第几天
      activitySort: number
      // 活动条件的单位（activity condition unit的简写）：1-每天/当天；2-累计; 3-充值累计，打码量每天[3作为举例说明后期可能遇到的情况，业务逻辑目前不做处理]
      acu: number
      // 活动列表
      details: Array<{
        // 主键
        id: number
        // 名称
        name: string
        // 描述
        activityDesc: string
        // 活动类型:1-连续升级活动；2-一次性活动；3-每日登录活动；4-推荐好友领奖金；5-首充；6-打蛋蛋
        activityType: number
        // 充值金额
        rechMoney: number
        // 打码量
        betMoney: number
        // 前置活动ID
        preActivityId: number
        // 奖励类型:0-没有奖励；1-抽奖机会；2-金额
        rewardType: number
        // 连续次数
        continuousTimes: number
        // 开始时间
        beginAt: string
        // 结束/截止时间
        endAt: string
        // 活动开关:1-开启；2-关闭
        isOpen: number
        // 是否排他/唯一活动:1-当前唯一进行活动，具有排他性；2-可以和其他活动并行；
        isExclusiveness: number
        // 是否显示：1-显示；2-隐藏
        isShow: number
        // 所属活动Id,如果是连续性活动,最新天数的activityId等同于topActiivityId
        topActivityId: number
        // 排序,连续性活动可视为第几天
        activitySort: number
        // 活动条件的单位（activity condition unit的简写）：1-每天/当天；2-累计; 3-充值累计，打码量每天[3作为举例说明后期可能遇到的情况，业务逻辑目前不做处理]
        acu: number
        // 奖品列表
        prizeList: Array<{
          // 名称
          name: string
          // 奖品类型:1-实物；2-金额；3-券
          prizeType: number
          // 奖品规格:单个奖品的规格。如果类型是金额，那么显示中奖金额（spec: specifications）
          prizeSpec: number
          // 名次
          ranking: number
        }>
        // 每日活动奖励结算时间
        settleTime: string
        // 有打码限制的游戏 gameType -> 体育球种, gameCategory -> 三方游戏
        playLimitList: Array<{
          // No comments found.
          id: number
          // 活動id
          activityId: number
          // 活動類型 1:连续升级活动；2:一次性活动；3:每日登录活动；4:推荐好友领奖金; 6:砸金蛋
          activityType: number
          // 設定的類型 1:体育 2:三方遊戲
          settingType: number
          // 三方遊戲設置
          gameCategory: string
          // 体育遊戲設置
          gameType: string
          // 平台Id
          platformId: number
          // 新增时间
          addTime: string
          // 稽核三方游戏分类
          auditThirdGameCategory: string
          // 稽核运动种类
          auditGameType: string
          // 稽核类型 0:非稽核资料 1:稽核资料
          auditType: number
        }>
      }>
      // 奖品列表
      prizeList: Array<{
        // 名称
        name: string
        // 奖品类型:1-实物；2-金额；3-券
        prizeType: number
        // 奖品规格:单个奖品的规格。如果类型是金额，那么显示中奖金额（spec: specifications）
        prizeSpec: number
        // 名次
        ranking: number
      }>
      // 活动列表模式预设sp
      mode: string
      // 类别
      category: string
      // 币种
      currency: string
      // 每日活动奖励结算时间
      settleTime: string
      // 有打码限制的游戏 gameType -> 体育球种, gameCategory -> 三方游戏
      playLimitList: Array<{
        // No comments found.
        id: number
        // 活動id
        activityId: number
        // 活動類型 1:连续升级活动；2:一次性活动；3:每日登录活动；4:推荐好友领奖金; 6:砸金蛋
        activityType: number
        // 設定的類型 1:体育 2:三方遊戲
        settingType: number
        // 三方遊戲設置
        gameCategory: string
        // 体育遊戲設置
        gameType: string
        // 平台Id
        platformId: number
        // 新增时间
        addTime: string
        // 稽核三方游戏分类
        auditThirdGameCategory: string
        // 稽核运动种类
        auditGameType: string
        // 稽核类型 0:非稽核资料 1:稽核资料
        auditType: number
      }>
      // 邀请活动列表
      inviteList: Array<{
        // id
        id: number
        // 平台id
        platformId: number
        // 活动id
        activityId: number
        // 邀请活动类型：1 首充，2 流水，3 升级
        type: number
        // 礼金名称
        prizeName: string
        // 礼金类型
        prizeType: number
        // 礼金值
        prizeSpec: number
        // 礼金配置id
        prizeCfgId: number
        // 流水类型 1：本地体育，2：三方游戏
        betType: number
        // 游戏分类 用于type=2
        gameType: string
        // 等级id 用于type=3
        level: number
        // 等级 用于type=3
        levelName: string
        // 最小金额 用于type=1
        minAmount: number
        // 最大金额 用于type=1
        maxAmount: number
        // 提现倍数
        withdrawMultiple: number
        // 排序
        sort: number
      }>
    }>
    // 排序
    sort: number
    // No comments found.
    total: number
  }
  // 50.活动信息接口: 50.9.邀请活动列表
  type REQ = {
    // 活动id
    activityId: number
    // 用户id（从x-seesion-token获取，无需传值）
    userId?: number
    // 平台id（从x-seesion-token获取，无需传值）
    platformId?: number
  }
}
// 50.活动信息接口: 50.10.邀请活动待领取记录
declare namespace API_ACTIVITY_INVITE_PENDINGRECEIVE_ACTIVITYID {
  // 50.活动信息接口: 50.10.邀请活动待领取记录
  type RES = {
    // No comments found.
    success: boolean
    // No comments found.
    msg: string
    // No comments found.
    code: number
    // No comments found.
    rows: Array<{
      // 用户id
      userId: number
      // 活动分类 1: 首充， 2：流水， 3：升级
      inviteType: number
      // 所属活动ID
      activityId: number
      // 金额
      money: number
    }>
    // 金额
    money: number
    // No comments found.
    total: number
  }
  // 50.活动信息接口: 50.10.邀请活动待领取记录
  type REQ = {
    // 活动id
    activityId: number
    // 用户id（从x-seesion-token获取，无需传值）
    userId?: number
    // 平台id（从x-seesion-token获取，无需传值）
    platformId?: number
  }
}
// 50.活动信息接口: 50.11.查询用户活动领取记录
declare namespace API_ACTIVITY_QUERYREWARDLOG {
  // 50.活动信息接口: 50.11.查询用户活动领取记录
  type RES = {
    // No comments found.
    success: boolean
    // No comments found.
    msg: string
    // No comments found.
    code: number
    // No comments found.
    rows: Array<{
      // 用户id
      userId: number
      // 用户名称
      userName: string
      // 奖品类型:1-实物；2-金额；3-券
      prizeType: number
      // 奖品规格
      prizeSpec: number
      // 奖品描述
      prizeDesc: string
      // 礼金配置id
      prizeCfgId: number
      // 添加时间
      createdAt: string
      // 领取时间
      getedAt: string
      // 状态:1-未中奖；2-未审核；3-审核不通过；4-审核通过； 5-已领取； 6-已失效
      rewardStatus: number
      // 审核时间
      auditedAt: string
      // 活动名称
      activityName: string
      // 审核原因描述
      reason: string
      // 邀请活动类型：1 首充，2 流水，3 升级
      inviteType: number
      // 赛事类型
      gameType: string
      // 来源用户id
      sourceUserId: number
      // 来源用户名称
      sourceUserName: string
      // 来源金融
      sourceAmount: number
    }>
    // 来源金融
    sourceAmount: number
    // No comments found.
    total: number
  }
  // 50.活动信息接口: 50.11.查询用户活动领取记录
  type REQ = {
    // 当前页
    page?: number
    // 每页条数
    pageSize?: number
    // 开始时间（时间戳）
    startTime?: string | number
    // 结束时间（时间戳）
    endTime?: string | number
    // 活动类型
    activityType?: number
    // 用户ID
    userId?: number
    // 用户名
    userName?: string
    // 平台id
    platformId?: number
    // 币种
    currency?: string
    // 活动细项类型：1 首充，2 流水，3 升级，4 晋级礼金，5 生日礼金，6 每周红包，7 专属红包
    inviteType?: number
    // 状态:1-未中奖；2-未审核；3-审核不通过；4-审核通过； 5-已领取； 6-已失效
    rewardStatus?: number
    // 报表类型 1：日报 2：月报 3 年报
    reportType?: number
    // 等级id
    levelConfigId?: number
  }
}
// 50.活动信息接口: 50.12.查询邀请活动邀请列表
declare namespace API_ACTIVITY_QUERYINVITED {
  // 50.活动信息接口: 50.12.查询邀请活动邀请列表
  type RES = {
    // No comments found.
    success: boolean
    // No comments found.
    msg: string
    // No comments found.
    code: number
    // No comments found.
    rows: Array<{
      // 用户名
      userName: string
      // 层级（一层的情况下默认为1）
      inviteLevel: number
      // vip等级
      vipLevel: string
      // 首充金额
      firstRecharge: number
      // 注册时间
      registerTime: string
    }>
    // 注册时间
    registerTime: string
    // No comments found.
    total: number
  }
  // 50.活动信息接口: 50.12.查询邀请活动邀请列表
  type REQ = {
    // 当前页
    page?: number
    // 每页条数
    pageSize?: number
    // 开始时间（时间戳）
    startTime?: string | number
    // 结束时间（时间戳）
    endTime?: string | number
    // 活动类型
    activityType?: number
    // 用户ID
    userId?: number
    // 用户名
    userName?: string
    // 平台id
    platformId?: number
    // 币种
    currency?: string
    // 活动细项类型：1 首充，2 流水，3 升级，4 晋级礼金，5 生日礼金，6 每周红包，7 专属红包
    inviteType?: number
    // 状态:1-未中奖；2-未审核；3-审核不通过；4-审核通过； 5-已领取； 6-已失效
    rewardStatus?: number
    // 报表类型 1：日报 2：月报 3 年报
    reportType?: number
    // 等级id
    levelConfigId?: number
  }
}
// 50.活动信息接口: 50.13.查询用户邀请活动记录
declare namespace API_ACTIVITY_INVITE_QUERYREWARDLOG {
  // 50.活动信息接口: 50.13.查询用户邀请活动记录
  type RES = {
    // No comments found.
    success: boolean
    // No comments found.
    msg: string
    // No comments found.
    code: number
    // No comments found.
    rows: Array<{
      // 用户id
      userId: number
      // 用户名称
      userName: string
      // 奖品类型:1-实物；2-金额；3-券
      prizeType: number
      // 奖品规格
      prizeSpec: number
      // 奖品描述
      prizeDesc: string
      // 礼金配置id
      prizeCfgId: number
      // 添加时间
      createdAt: string
      // 领取时间
      getedAt: string
      // 状态:1-未中奖；2-未审核；3-审核不通过；4-审核通过； 5-已领取； 6-已失效
      rewardStatus: number
      // 审核时间
      auditedAt: string
      // 活动名称
      activityName: string
      // 审核原因描述
      reason: string
      // 邀请活动类型：1 首充，2 流水，3 升级
      inviteType: number
      // 赛事类型
      gameType: string
      // 来源用户id
      sourceUserId: number
      // 来源用户名称
      sourceUserName: string
      // 来源金融
      sourceAmount: number
    }>
    // 来源金融
    sourceAmount: number
    // No comments found.
    total: number
    // No comments found.
    other: {
      // 用户id
      userId: number
      // 用户名称
      userName: string
      // 奖品类型:1-实物；2-金额；3-券
      prizeType: number
      // 奖品规格
      prizeSpec: number
      // 奖品描述
      prizeDesc: string
      // 礼金配置id
      prizeCfgId: number
      // 添加时间
      createdAt: string
      // 领取时间
      getedAt: string
      // 状态:1-未中奖；2-未审核；3-审核不通过；4-审核通过； 5-已领取； 6-已失效
      rewardStatus: number
      // 审核时间
      auditedAt: string
      // 活动名称
      activityName: string
      // 审核原因描述
      reason: string
      // 邀请活动类型：1 首充，2 流水，3 升级
      inviteType: number
      // 赛事类型
      gameType: string
      // 来源用户id
      sourceUserId: number
      // 来源用户名称
      sourceUserName: string
      // 来源金融
      sourceAmount: number
    }
  }
  // 50.活动信息接口: 50.13.查询用户邀请活动记录
  type REQ = {
    // 当前页
    page?: number
    // 每页条数
    pageSize?: number
    // 开始时间（时间戳）
    startTime?: string | number
    // 结束时间（时间戳）
    endTime?: string | number
    // 活动类型
    activityType?: number
    // 用户ID
    userId?: number
    // 用户名
    userName?: string
    // 平台id
    platformId?: number
    // 币种
    currency?: string
    // 活动细项类型：1 首充，2 流水，3 升级，4 晋级礼金，5 生日礼金，6 每周红包，7 专属红包
    inviteType?: number
    // 状态:1-未中奖；2-未审核；3-审核不通过；4-审核通过； 5-已领取； 6-已失效
    rewardStatus?: number
    // 报表类型 1：日报 2：月报 3 年报
    reportType?: number
    // 等级id
    levelConfigId?: number
  }
}
// 50.活动信息接口: 50.14.查询用户邀请活动记录總計
declare namespace API_ACTIVITY_INVITE_QUERYREWARDSUM {
  // 50.活动信息接口: 50.14.查询用户邀请活动记录總計
  type RES = {
    // No comments found.
    success: boolean
    // No comments found.
    msg: string
    // No comments found.
    code: number
    // No comments found.
    t: {
      // 佣金总额
      totalAmount: number
    }
  }
  // 50.活动信息接口: 50.14.查询用户邀请活动记录總計
  type REQ = {
    // 当前页
    page?: number
    // 每页条数
    pageSize?: number
    // 开始时间（时间戳）
    startTime?: string | number
    // 结束时间（时间戳）
    endTime?: string | number
    // 活动类型
    activityType?: number
    // 用户ID
    userId?: number
    // 用户名
    userName?: string
    // 平台id
    platformId?: number
    // 币种
    currency?: string
    // 活动细项类型：1 首充，2 流水，3 升级，4 晋级礼金，5 生日礼金，6 每周红包，7 专属红包
    inviteType?: number
    // 状态:1-未中奖；2-未审核；3-审核不通过；4-审核通过； 5-已领取； 6-已失效
    rewardStatus?: number
    // 报表类型 1：日报 2：月报 3 年报
    reportType?: number
    // 等级id
    levelConfigId?: number
  }
}
// 50.活动信息接口: 50.15.查询用户邀请活动记录
declare namespace API_ACTIVITY_INVITE_QUERYBETINFO {
  // 50.活动信息接口: 50.15.查询用户邀请活动记录
  type RES = {
    // No comments found.
    success: boolean
    // No comments found.
    msg: string
    // No comments found.
    code: number
    // No comments found.
    rows: Array<{
      // 用户id
      userId: number
      // 用户名称
      userName: string
      // 奖品类型:1-实物；2-金额；3-券
      prizeType: number
      // 奖品规格
      prizeSpec: number
      // 奖品描述
      prizeDesc: string
      // 礼金配置id
      prizeCfgId: number
      // 添加时间
      createdAt: string
      // 领取时间
      getedAt: string
      // 状态:1-未中奖；2-未审核；3-审核不通过；4-审核通过； 5-已领取； 6-已失效
      rewardStatus: number
      // 审核时间
      auditedAt: string
      // 活动名称
      activityName: string
      // 审核原因描述
      reason: string
      // 邀请活动类型：1 首充，2 流水，3 升级
      inviteType: number
      // 赛事类型
      gameType: string
      // 来源用户id
      sourceUserId: number
      // 来源用户名称
      sourceUserName: string
      // 来源金融
      sourceAmount: number
    }>
    // 来源金融
    sourceAmount: number
    // No comments found.
    total: number
  }
  // 50.活动信息接口: 50.15.查询用户邀请活动记录
  type REQ = {
    // 当前页
    page?: number
    // 每页条数
    pageSize?: number
    // 开始时间（时间戳）
    startTime?: string | number
    // 结束时间（时间戳）
    endTime?: string | number
    // 活动类型
    activityType?: number
    // 用户ID
    userId?: number
    // 用户名
    userName?: string
    // 平台id
    platformId?: number
    // 币种
    currency?: string
    // 活动细项类型：1 首充，2 流水，3 升级，4 晋级礼金，5 生日礼金，6 每周红包，7 专属红包
    inviteType?: number
    // 状态:1-未中奖；2-未审核；3-审核不通过；4-审核通过； 5-已领取； 6-已失效
    rewardStatus?: number
    // 报表类型 1：日报 2：月报 3 年报
    reportType?: number
    // 等级id
    levelConfigId?: number
  }
}
// 50.活动信息接口: 50.16.领取奖项
declare namespace API_ACTIVITY_AWARD {
  // 50.活动信息接口: 50.16.领取奖项
  type RES = {
    // No comments found.
    success: boolean
    // No comments found.
    msg: string
    // No comments found.
    code: number
  }
  // 50.活动信息接口: 50.16.领取奖项
  type REQ = {
    // 活动ID
    activityId?: number
  }
}
// 50.活动信息接口: 50.17.活动列表 区分模式(越南、真人、直播...)
declare namespace API_ACTIVITY_LISTINFO {
  // 50.活动信息接口: 50.17.活动列表 区分模式(越南、真人、直播...)
  type RES = {
    // No comments found.
    success: boolean
    // No comments found.
    msg: string
    // No comments found.
    code: number
    // No comments found.
    t: {
      // 活动列表
      activityList: Array<{
        // 主键
        id: number
        // 名称
        name: string
        // 描述
        activityDesc: string
        // 活动1描述
        activityDesc1: string
        // 活动2描述
        activityDesc2: string
        // 活动3描述
        activityDesc3: string
        // 活动类型:1-连续升级活动；2-一次性活动；3-每日登录活动；4-推荐好友领奖金；5-首充；6-打蛋蛋；7-邀请好友
        activityType: number
        // 充值金额
        rechMoney: number
        // 打码量
        betMoney: number
        // 前置活动ID
        preActivityId: number
        // 奖励类型:0-没有奖励；1-抽奖机会；2-金额
        rewardType: number
        // 连续次数
        continuousTimes: number
        // 开始时间
        beginAt: string
        // 结束/截止时间
        endAt: string
        // 活动开关:1-开启；2-关闭
        isOpen: number
        // 是否排他/唯一活动:1-当前唯一进行活动，具有排他性；2-可以和其他活动并行；
        isExclusiveness: number
        // 是否显示：1-显示；2-隐藏
        isShow: number
        // 所属活动Id,如果是连续性活动,最新天数的activityId等同于topActiivityId
        topActivityId: number
        // 排序,连续性活动可视为第几天
        activitySort: number
        // 活动条件的单位（activity condition unit的简写）：1-每天/当天；2-累计; 3-充值累计，打码量每天[3作为举例说明后期可能遇到的情况，业务逻辑目前不做处理]
        acu: number
        // 活动列表
        details: Array<{
          // 主键
          id: number
          // 名称
          name: string
          // 描述
          activityDesc: string
          // 活动类型:1-连续升级活动；2-一次性活动；3-每日登录活动；4-推荐好友领奖金；5-首充；6-打蛋蛋
          activityType: number
          // 充值金额
          rechMoney: number
          // 打码量
          betMoney: number
          // 前置活动ID
          preActivityId: number
          // 奖励类型:0-没有奖励；1-抽奖机会；2-金额
          rewardType: number
          // 连续次数
          continuousTimes: number
          // 开始时间
          beginAt: string
          // 结束/截止时间
          endAt: string
          // 活动开关:1-开启；2-关闭
          isOpen: number
          // 是否排他/唯一活动:1-当前唯一进行活动，具有排他性；2-可以和其他活动并行；
          isExclusiveness: number
          // 是否显示：1-显示；2-隐藏
          isShow: number
          // 所属活动Id,如果是连续性活动,最新天数的activityId等同于topActiivityId
          topActivityId: number
          // 排序,连续性活动可视为第几天
          activitySort: number
          // 活动条件的单位（activity condition unit的简写）：1-每天/当天；2-累计; 3-充值累计，打码量每天[3作为举例说明后期可能遇到的情况，业务逻辑目前不做处理]
          acu: number
          // 奖品列表
          prizeList: Array<{
            // 名称
            name: string
            // 奖品类型:1-实物；2-金额；3-券
            prizeType: number
            // 奖品规格:单个奖品的规格。如果类型是金额，那么显示中奖金额（spec: specifications）
            prizeSpec: number
            // 名次
            ranking: number
          }>
          // 每日活动奖励结算时间
          settleTime: string
          // 有打码限制的游戏 gameType -> 体育球种, gameCategory -> 三方游戏
          playLimitList: Array<{
            // No comments found.
            id: number
            // 活動id
            activityId: number
            // 活動類型 1:连续升级活动；2:一次性活动；3:每日登录活动；4:推荐好友领奖金; 6:砸金蛋
            activityType: number
            // 設定的類型 1:体育 2:三方遊戲
            settingType: number
            // 三方遊戲設置
            gameCategory: string
            // 体育遊戲設置
            gameType: string
            // 平台Id
            platformId: number
            // 新增时间
            addTime: string
            // 稽核三方游戏分类
            auditThirdGameCategory: string
            // 稽核运动种类
            auditGameType: string
            // 稽核类型 0:非稽核资料 1:稽核资料
            auditType: number
          }>
        }>
        // 奖品列表
        prizeList: Array<{
          // 名称
          name: string
          // 奖品类型:1-实物；2-金额；3-券
          prizeType: number
          // 奖品规格:单个奖品的规格。如果类型是金额，那么显示中奖金额（spec: specifications）
          prizeSpec: number
          // 名次
          ranking: number
        }>
        // 活动列表模式预设sp
        mode: string
        // 类别
        category: string
        // 币种
        currency: string
        // 每日活动奖励结算时间
        settleTime: string
        // 有打码限制的游戏 gameType -> 体育球种, gameCategory -> 三方游戏
        playLimitList: Array<{
          // No comments found.
          id: number
          // 活動id
          activityId: number
          // 活動類型 1:连续升级活动；2:一次性活动；3:每日登录活动；4:推荐好友领奖金; 6:砸金蛋
          activityType: number
          // 設定的類型 1:体育 2:三方遊戲
          settingType: number
          // 三方遊戲設置
          gameCategory: string
          // 体育遊戲設置
          gameType: string
          // 平台Id
          platformId: number
          // 新增时间
          addTime: string
          // 稽核三方游戏分类
          auditThirdGameCategory: string
          // 稽核运动种类
          auditGameType: string
          // 稽核类型 0:非稽核资料 1:稽核资料
          auditType: number
        }>
        // 邀请活动列表
        inviteList: Array<{
          // id
          id: number
          // 平台id
          platformId: number
          // 活动id
          activityId: number
          // 邀请活动类型：1 首充，2 流水，3 升级
          type: number
          // 礼金名称
          prizeName: string
          // 礼金类型
          prizeType: number
          // 礼金值
          prizeSpec: number
          // 礼金配置id
          prizeCfgId: number
          // 流水类型 1：本地体育，2：三方游戏
          betType: number
          // 游戏分类 用于type=2
          gameType: string
          // 等级id 用于type=3
          level: number
          // 等级 用于type=3
          levelName: string
          // 最小金额 用于type=1
          minAmount: number
          // 最大金额 用于type=1
          maxAmount: number
          // 提现倍数
          withdrawMultiple: number
          // 排序
          sort: number
        }>
      }>
      // 活动素材列表
      imageList: Array<{
        // 图片地址（相对地址，需要加上config的resServerHost）
        imgUrl: string
        // 图类型:1PC:轮播,2H5:轮播,3:App下载二维码,4:PC版优惠活动素材图,5:H5版优惠活动素材图,6:PC版弹窗活动素材图,7:H5版弹窗活动素材图,8:备用App下载二维码9:H5登陆注册轮播图 10:PC登陆注册轮播图
        imageType: number
        // 排序
        imageSort: number
        // (1,2,3)图片名称,4.标题图片
        imageName1: string
        // 标题文字
        imageText1: string
        // 内容图片
        imageName2: string
        // 内容内标题文字(粗体)
        imageText2: string
        // 活動打水倍数
        multiple: number
        // 活动结束时间
        endTime: string | number
        // 内容文字
        imageText3: string
        // 弹窗图片
        imageName3: string
        // 首页图片
        imageName4: string
        // 首页活动大图
        imageName5: string
        // 图片跳转地址(可空)
        imageLink: string
        // 图片id
        id: number
        // 活动属于的语系
        lang: string
        // 0 文字正常显示 1 文字上方显示
        viewType: number
        // 0 关闭 1 开启
        status: number
        // 活动属于的语系币别
        currency: string
        // 是否为预设语系(默认显示) 0:否 1:是
        defaultLang: number
        // 限定代理 多笔请以；区隔显示
        agentId: string
        // 限定邀请码 多笔请以；区隔显示
        inviteCode: string
        // 活动类别：以逗號隔開
        category: string
        // 活动列表模式(vn,live,casino...) 预设vn
        mode: string
        // 活动id
        activityId: string
        // 跳转方式 0:活动名称/URL 1:文本/图片
        jumpType: number
      }>
      // 活动类别列表
      imageCategoryList: Array<{
        // 流水号
        id: number
        // 排序
        sort: number
        // 类别名称
        typeName: string
        // 启用状态 0:关闭 1:启用
        status: number
        // 类别logo
        icon: string
      }>
      // 静态资源服务器地址
      resServerHost: string
      // 伺服器时间
      serverDate: string
    }
  }
  // 50.活动信息接口: 50.17.活动列表 区分模式(越南、真人、直播...)
  type REQ = {
    // No comments found.
    mode?: string
    // No comments found.
    activityType?: number
    // 用户id（从x-seesion-token获取，无需传值）
    userId?: number
    // 平台id（从x-seesion-token获取，无需传值）
    platformId?: number
  }
}
// 50.活动信息接口: 50.18.活动列表 区分模式(越南、真人、直播...)
declare namespace API_ACTIVITY_LISTIMAGE {
  // 50.活动信息接口: 50.18.活动列表 区分模式(越南、真人、直播...)
  type RES = {
    // No comments found.
    success: boolean
    // No comments found.
    msg: string
    // No comments found.
    code: number
    // No comments found.
    t: {
      // 活动列表
      activityList: Array<{
        // 主键
        id: number
        // 名称
        name: string
        // 描述
        activityDesc: string
        // 活动1描述
        activityDesc1: string
        // 活动2描述
        activityDesc2: string
        // 活动3描述
        activityDesc3: string
        // 活动类型:1-连续升级活动；2-一次性活动；3-每日登录活动；4-推荐好友领奖金；5-首充；6-打蛋蛋；7-邀请好友
        activityType: number
        // 充值金额
        rechMoney: number
        // 打码量
        betMoney: number
        // 前置活动ID
        preActivityId: number
        // 奖励类型:0-没有奖励；1-抽奖机会；2-金额
        rewardType: number
        // 连续次数
        continuousTimes: number
        // 开始时间
        beginAt: string
        // 结束/截止时间
        endAt: string
        // 活动开关:1-开启；2-关闭
        isOpen: number
        // 是否排他/唯一活动:1-当前唯一进行活动，具有排他性；2-可以和其他活动并行；
        isExclusiveness: number
        // 是否显示：1-显示；2-隐藏
        isShow: number
        // 所属活动Id,如果是连续性活动,最新天数的activityId等同于topActiivityId
        topActivityId: number
        // 排序,连续性活动可视为第几天
        activitySort: number
        // 活动条件的单位（activity condition unit的简写）：1-每天/当天；2-累计; 3-充值累计，打码量每天[3作为举例说明后期可能遇到的情况，业务逻辑目前不做处理]
        acu: number
        // 活动列表
        details: Array<{
          // 主键
          id: number
          // 名称
          name: string
          // 描述
          activityDesc: string
          // 活动类型:1-连续升级活动；2-一次性活动；3-每日登录活动；4-推荐好友领奖金；5-首充；6-打蛋蛋
          activityType: number
          // 充值金额
          rechMoney: number
          // 打码量
          betMoney: number
          // 前置活动ID
          preActivityId: number
          // 奖励类型:0-没有奖励；1-抽奖机会；2-金额
          rewardType: number
          // 连续次数
          continuousTimes: number
          // 开始时间
          beginAt: string
          // 结束/截止时间
          endAt: string
          // 活动开关:1-开启；2-关闭
          isOpen: number
          // 是否排他/唯一活动:1-当前唯一进行活动，具有排他性；2-可以和其他活动并行；
          isExclusiveness: number
          // 是否显示：1-显示；2-隐藏
          isShow: number
          // 所属活动Id,如果是连续性活动,最新天数的activityId等同于topActiivityId
          topActivityId: number
          // 排序,连续性活动可视为第几天
          activitySort: number
          // 活动条件的单位（activity condition unit的简写）：1-每天/当天；2-累计; 3-充值累计，打码量每天[3作为举例说明后期可能遇到的情况，业务逻辑目前不做处理]
          acu: number
          // 奖品列表
          prizeList: Array<{
            // 名称
            name: string
            // 奖品类型:1-实物；2-金额；3-券
            prizeType: number
            // 奖品规格:单个奖品的规格。如果类型是金额，那么显示中奖金额（spec: specifications）
            prizeSpec: number
            // 名次
            ranking: number
          }>
          // 每日活动奖励结算时间
          settleTime: string
          // 有打码限制的游戏 gameType -> 体育球种, gameCategory -> 三方游戏
          playLimitList: Array<{
            // No comments found.
            id: number
            // 活動id
            activityId: number
            // 活動類型 1:连续升级活动；2:一次性活动；3:每日登录活动；4:推荐好友领奖金; 6:砸金蛋
            activityType: number
            // 設定的類型 1:体育 2:三方遊戲
            settingType: number
            // 三方遊戲設置
            gameCategory: string
            // 体育遊戲設置
            gameType: string
            // 平台Id
            platformId: number
            // 新增时间
            addTime: string
            // 稽核三方游戏分类
            auditThirdGameCategory: string
            // 稽核运动种类
            auditGameType: string
            // 稽核类型 0:非稽核资料 1:稽核资料
            auditType: number
          }>
        }>
        // 奖品列表
        prizeList: Array<{
          // 名称
          name: string
          // 奖品类型:1-实物；2-金额；3-券
          prizeType: number
          // 奖品规格:单个奖品的规格。如果类型是金额，那么显示中奖金额（spec: specifications）
          prizeSpec: number
          // 名次
          ranking: number
        }>
        // 活动列表模式预设sp
        mode: string
        // 类别
        category: string
        // 币种
        currency: string
        // 每日活动奖励结算时间
        settleTime: string
        // 有打码限制的游戏 gameType -> 体育球种, gameCategory -> 三方游戏
        playLimitList: Array<{
          // No comments found.
          id: number
          // 活動id
          activityId: number
          // 活動類型 1:连续升级活动；2:一次性活动；3:每日登录活动；4:推荐好友领奖金; 6:砸金蛋
          activityType: number
          // 設定的類型 1:体育 2:三方遊戲
          settingType: number
          // 三方遊戲設置
          gameCategory: string
          // 体育遊戲設置
          gameType: string
          // 平台Id
          platformId: number
          // 新增时间
          addTime: string
          // 稽核三方游戏分类
          auditThirdGameCategory: string
          // 稽核运动种类
          auditGameType: string
          // 稽核类型 0:非稽核资料 1:稽核资料
          auditType: number
        }>
        // 邀请活动列表
        inviteList: Array<{
          // id
          id: number
          // 平台id
          platformId: number
          // 活动id
          activityId: number
          // 邀请活动类型：1 首充，2 流水，3 升级
          type: number
          // 礼金名称
          prizeName: string
          // 礼金类型
          prizeType: number
          // 礼金值
          prizeSpec: number
          // 礼金配置id
          prizeCfgId: number
          // 流水类型 1：本地体育，2：三方游戏
          betType: number
          // 游戏分类 用于type=2
          gameType: string
          // 等级id 用于type=3
          level: number
          // 等级 用于type=3
          levelName: string
          // 最小金额 用于type=1
          minAmount: number
          // 最大金额 用于type=1
          maxAmount: number
          // 提现倍数
          withdrawMultiple: number
          // 排序
          sort: number
        }>
      }>
      // 活动素材列表
      imageList: Array<{
        // 图片地址（相对地址，需要加上config的resServerHost）
        imgUrl: string
        // 图类型:1PC:轮播,2H5:轮播,3:App下载二维码,4:PC版优惠活动素材图,5:H5版优惠活动素材图,6:PC版弹窗活动素材图,7:H5版弹窗活动素材图,8:备用App下载二维码9:H5登陆注册轮播图 10:PC登陆注册轮播图
        imageType: number
        // 排序
        imageSort: number
        // (1,2,3)图片名称,4.标题图片
        imageName1: string
        // 标题文字
        imageText1: string
        // 内容图片
        imageName2: string
        // 内容内标题文字(粗体)
        imageText2: string
        // 活動打水倍数
        multiple: number
        // 活动结束时间
        endTime: string | number
        // 内容文字
        imageText3: string
        // 弹窗图片
        imageName3: string
        // 首页图片
        imageName4: string
        // 首页活动大图
        imageName5: string
        // 图片跳转地址(可空)
        imageLink: string
        // 图片id
        id: number
        // 活动属于的语系
        lang: string
        // 0 文字正常显示 1 文字上方显示
        viewType: number
        // 0 关闭 1 开启
        status: number
        // 活动属于的语系币别
        currency: string
        // 是否为预设语系(默认显示) 0:否 1:是
        defaultLang: number
        // 限定代理 多笔请以；区隔显示
        agentId: string
        // 限定邀请码 多笔请以；区隔显示
        inviteCode: string
        // 活动类别：以逗號隔開
        category: string
        // 活动列表模式(vn,live,casino...) 预设vn
        mode: string
        // 活动id
        activityId: string
        // 跳转方式 0:活动名称/URL 1:文本/图片
        jumpType: number
      }>
      // 活动类别列表
      imageCategoryList: Array<{
        // 流水号
        id: number
        // 排序
        sort: number
        // 类别名称
        typeName: string
        // 启用状态 0:关闭 1:启用
        status: number
        // 类别logo
        icon: string
      }>
      // 静态资源服务器地址
      resServerHost: string
      // 伺服器时间
      serverDate: string
    }
  }
  // 50.活动信息接口: 50.18.活动列表 区分模式(越南、真人、直播...)
  type REQ = {
    // No comments found.
    mode?: string
    // No comments found.
    activityType?: number
    // No comments found.
    platformId?: number
  }
}
// 50.活动信息接口: 50.19.砸金蛋获取当前用户抽奖信
declare namespace API_ACTIVITY_GETEGGINFO_ACTIVITYID {
  // 50.活动信息接口: 50.19.砸金蛋获取当前用户抽奖信
  type RES = {
    // No comments found.
    success: boolean
    // No comments found.
    msg: string
    // No comments found.
    code: number
    // No comments found.
    t: {
      // 活动內容
      activity: {
        // 主键
        id: number
        // 名称
        name: string
        // 描述
        activityDesc: string
        // 活动1描述
        activityDesc1: string
        // 活动2描述
        activityDesc2: string
        // 活动3描述
        activityDesc3: string
        // 活动类型:1-连续升级活动；2-一次性活动；3-每日登录活动；4-推荐好友领奖金；5-首充；6-打蛋蛋；7-邀请好友
        activityType: number
        // 充值金额
        rechMoney: number
        // 打码量
        betMoney: number
        // 前置活动ID
        preActivityId: number
        // 奖励类型:0-没有奖励；1-抽奖机会；2-金额
        rewardType: number
        // 连续次数
        continuousTimes: number
        // 开始时间
        beginAt: string
        // 结束/截止时间
        endAt: string
        // 活动开关:1-开启；2-关闭
        isOpen: number
        // 是否排他/唯一活动:1-当前唯一进行活动，具有排他性；2-可以和其他活动并行；
        isExclusiveness: number
        // 是否显示：1-显示；2-隐藏
        isShow: number
        // 所属活动Id,如果是连续性活动,最新天数的activityId等同于topActiivityId
        topActivityId: number
        // 排序,连续性活动可视为第几天
        activitySort: number
        // 活动条件的单位（activity condition unit的简写）：1-每天/当天；2-累计; 3-充值累计，打码量每天[3作为举例说明后期可能遇到的情况，业务逻辑目前不做处理]
        acu: number
        // 活动列表
        details: Array<{
          // 主键
          id: number
          // 名称
          name: string
          // 描述
          activityDesc: string
          // 活动类型:1-连续升级活动；2-一次性活动；3-每日登录活动；4-推荐好友领奖金；5-首充；6-打蛋蛋
          activityType: number
          // 充值金额
          rechMoney: number
          // 打码量
          betMoney: number
          // 前置活动ID
          preActivityId: number
          // 奖励类型:0-没有奖励；1-抽奖机会；2-金额
          rewardType: number
          // 连续次数
          continuousTimes: number
          // 开始时间
          beginAt: string
          // 结束/截止时间
          endAt: string
          // 活动开关:1-开启；2-关闭
          isOpen: number
          // 是否排他/唯一活动:1-当前唯一进行活动，具有排他性；2-可以和其他活动并行；
          isExclusiveness: number
          // 是否显示：1-显示；2-隐藏
          isShow: number
          // 所属活动Id,如果是连续性活动,最新天数的activityId等同于topActiivityId
          topActivityId: number
          // 排序,连续性活动可视为第几天
          activitySort: number
          // 活动条件的单位（activity condition unit的简写）：1-每天/当天；2-累计; 3-充值累计，打码量每天[3作为举例说明后期可能遇到的情况，业务逻辑目前不做处理]
          acu: number
          // 奖品列表
          prizeList: Array<{
            // 名称
            name: string
            // 奖品类型:1-实物；2-金额；3-券
            prizeType: number
            // 奖品规格:单个奖品的规格。如果类型是金额，那么显示中奖金额（spec: specifications）
            prizeSpec: number
            // 名次
            ranking: number
          }>
          // 每日活动奖励结算时间
          settleTime: string
          // 有打码限制的游戏 gameType -> 体育球种, gameCategory -> 三方游戏
          playLimitList: Array<{
            // No comments found.
            id: number
            // 活動id
            activityId: number
            // 活動類型 1:连续升级活动；2:一次性活动；3:每日登录活动；4:推荐好友领奖金; 6:砸金蛋
            activityType: number
            // 設定的類型 1:体育 2:三方遊戲
            settingType: number
            // 三方遊戲設置
            gameCategory: string
            // 体育遊戲設置
            gameType: string
            // 平台Id
            platformId: number
            // 新增时间
            addTime: string
            // 稽核三方游戏分类
            auditThirdGameCategory: string
            // 稽核运动种类
            auditGameType: string
            // 稽核类型 0:非稽核资料 1:稽核资料
            auditType: number
          }>
        }>
        // 奖品列表
        prizeList: Array<{
          // 名称
          name: string
          // 奖品类型:1-实物；2-金额；3-券
          prizeType: number
          // 奖品规格:单个奖品的规格。如果类型是金额，那么显示中奖金额（spec: specifications）
          prizeSpec: number
          // 名次
          ranking: number
        }>
        // 活动列表模式预设sp
        mode: string
        // 类别
        category: string
        // 币种
        currency: string
        // 每日活动奖励结算时间
        settleTime: string
        // 有打码限制的游戏 gameType -> 体育球种, gameCategory -> 三方游戏
        playLimitList: Array<{
          // No comments found.
          id: number
          // 活動id
          activityId: number
          // 活動類型 1:连续升级活动；2:一次性活动；3:每日登录活动；4:推荐好友领奖金; 6:砸金蛋
          activityType: number
          // 設定的類型 1:体育 2:三方遊戲
          settingType: number
          // 三方遊戲設置
          gameCategory: string
          // 体育遊戲設置
          gameType: string
          // 平台Id
          platformId: number
          // 新增时间
          addTime: string
          // 稽核三方游戏分类
          auditThirdGameCategory: string
          // 稽核运动种类
          auditGameType: string
          // 稽核类型 0:非稽核资料 1:稽核资料
          auditType: number
        }>
        // 邀请活动列表
        inviteList: Array<{
          // id
          id: number
          // 平台id
          platformId: number
          // 活动id
          activityId: number
          // 邀请活动类型：1 首充，2 流水，3 升级
          type: number
          // 礼金名称
          prizeName: string
          // 礼金类型
          prizeType: number
          // 礼金值
          prizeSpec: number
          // 礼金配置id
          prizeCfgId: number
          // 流水类型 1：本地体育，2：三方游戏
          betType: number
          // 游戏分类 用于type=2
          gameType: string
          // 等级id 用于type=3
          level: number
          // 等级 用于type=3
          levelName: string
          // 最小金额 用于type=1
          minAmount: number
          // 最大金额 用于type=1
          maxAmount: number
          // 提现倍数
          withdrawMultiple: number
          // 排序
          sort: number
        }>
      }
      // 抽獎獎項狀態
      userPrizes: Array<{
        // 抽獎次數
        num: number
        // 參與狀態。1:未领取; 2:已领取; 3:过期
        status: number
        // 会员敲蛋位置
        pos: number
      }>
      // 游戏規則说明，有效下注和可得抽獎次數的對應
      activityInfoViews: Array<{
        // 当日累计有效投注
        betMoney: number
        // 当日累计充值投注
        rechMoney: number
        // 金蛋活动第几颗金蛋（层级）
        num: number
      }>
      // 獎品清單
      eggActivityPrizeVOS: Array<{
        // 奖品名称
        name: string
        // 奖品金额
        prizeSpec: number
      }>
      // 伺服器时间
      serverDate: string
      // 砸金蛋每日活动奖励结算时间
      settleTime: string
    }
  }
  // 50.活动信息接口: 50.19.砸金蛋获取当前用户抽奖信
  type REQ = {
    // 活動id
    activityId: number
    // 用户id（从x-seesion-token获取，无需传值）
    userId?: number
    // 平台id（从x-seesion-token获取，无需传值）
    platformId?: number
  }
}
// 50.活动信息接口: 50.20.砸金蛋领奖
declare namespace API_ACTIVITY_EGG_LUCKDRAW {
  // 50.活动信息接口: 50.20.砸金蛋领奖
  type RES = {
    // No comments found.
    success: boolean
    // No comments found.
    msg: string
    // No comments found.
    code: number
    // No comments found.
    t: {
      // 奖品名称
      name: string
      // 奖品金额
      prizeSpec: number
    }
  }
  // 50.活动信息接口: 50.20.砸金蛋领奖
  type REQ = {
    // 本次金蛋开几等奖。 (对应db.a_activity.info中的层级)目前共6种等奖，由大奖至小奖，num分别是6~1
    num: number
    // 活动id
    activityId: number
    // 会员敲蛋位置
    pos: number
  }
}
// 51.主要给chat提供服务: 51.1.获取平台用户信息,和签名信息
declare namespace API_CHAT_GETSIGN {
  // 51.主要给chat提供服务: 51.1.获取平台用户信息,和签名信息
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
  // 51.主要给chat提供服务: 51.1.获取平台用户信息,和签名信息
  type REQ = {
    // 用户id（从x-seesion-token获取，无需传值）
    userId?: number
    // 平台id（从x-seesion-token获取，无需传值）
    platformId?: number
  }
}
// 52.地区信息: 52.1.获取（城市，省，国家）信息
declare namespace API_AREA_ALL {
  // 52.地区信息: 52.1.获取（城市，省，国家）信息
  type RES = {
    // No comments found.
    success: boolean
    // No comments found.
    msg: string
    // No comments found.
    code: number
    // No comments found.
    t: {
      // 城市列表
      cities: {
        // 主键
        id: number
        // 国家id
        countryId: number
        // 国家id
        provinceId: number
        // 名称
        name: string
      }
      // 省份列表
      provinces: {
        // 主键
        id: number
        // 国家id
        countryId: number
        // 名称
        name: string
      }
      // 国家列表
      countries: {
        // 主键
        id: number
        // 名称
        name: string
        // 国籍
        nationality: string
      }
    }
  }
}
// 52.地区信息: 52.2.地區數據
declare namespace API_AREA_UNIVERSAL {
  // 52.地区信息: 52.2.地區數據
  type RES = {
    // No comments found.
    success: boolean
    // No comments found.
    msg: string
    // No comments found.
    code: number
    // No comments found.
    t: {
      // 城市列表
      cities: {
        // 主键
        id: number
        // 国家id
        countryId: number
        // 国家id
        provinceId: number
        // 名称
        name: string
      }
      // 省份列表
      provinces: {
        // 主键
        id: number
        // 国家id
        countryId: number
        // 名称
        name: string
      }
      // 国家列表
      countries: {
        // 主键
        id: number
        // 名称
        name: string
        // 国籍
        nationality: string
      }
    }
  }
}
// 53.首页未授权公共类（登录、登出、验证码、在线用户数、语言列表）: 53.1.获取验证码
declare namespace API_INDEX_GETVALIDATECODE {
  // 53.首页未授权公共类（登录、登出、验证码、在线用户数、语言列表）: 53.1.获取验证码
  type RES = {
    // No comments found.
    success: boolean
    // No comments found.
    msg: string
    // No comments found.
    code: number
    // No comments found.
    t: {
      // 标识符，登录或再次请求验证码时，需要携带回去
      identity: string
      // 验证码图片的二进制URL编码字符串
      img: string
    }
  }
  // 53.首页未授权公共类（登录、登出、验证码、在线用户数、语言列表）: 53.1.获取验证码
  type REQ = {
    // 上一次请求的验证码标识，非必传，主要用于清除redis缓存
    lastIdentity?: string
  }
}
// 53.首页未授权公共类（登录、登出、验证码、在线用户数、语言列表）: 53.2.获取否开启验证码配置
declare namespace API_INDEX_VALIDCODEENABLE {
  // 53.首页未授权公共类（登录、登出、验证码、在线用户数、语言列表）: 53.2.获取否开启验证码配置
  type RES = {
    // No comments found.
    success: boolean
    // No comments found.
    msg: string
    // No comments found.
    code: number
    // No comments found.
    t: {
      // No comments found.
      id: number
      // No comments found.
      cfgName: string
      // No comments found.
      cfgValue: string
      // No comments found.
      cfgDesc: string
      // No comments found.
      type: number
      // No comments found.
      isShow: number
      // No comments found.
      soft: number
      // No comments found.
      platformId: number
      // No comments found.
      onlySys: number
    }
  }
}
// 53.首页未授权公共类（登录、登出、验证码、在线用户数、语言列表）: 53.3.注册用户
declare namespace API_INDEX_REGISTER {
  // 53.首页未授权公共类（登录、登出、验证码、在线用户数、语言列表）: 53.3.注册用户
  type RES = {
    // No comments found.
    success: boolean
    // No comments found.
    msg: string
    // No comments found.
    code: number
    // No comments found.
    t: {
      // 用户id（保留，建议用userId）
      uid: number
      // 用户id
      userId: number
      // token值
      token: string
      // 登录日期
      loginDate: string
      // 登录ip
      loginIp: string
      // 最近一次登录日期
      lastLoginDate: string
      // 最近一次登录ip
      lastLoginIp: string
      // 用户名
      userName: string
      // 昵称
      nickName: string
      // 用户类型（"ADMIN"：超管；"ZDL"：总代理；"DL"：代理；"HY"：会员；"ZZH"：子账户）
      userType: string
      // 平台id
      platformId: number
      // 平台编码
      platformCode: string
      // 真实名称
      fullName: string
      // 是否测试用户（0-正常用户，1-游客，2-内部测试）
      testFlag: number
      // 充值层级
      rechLevel: string
      // 头像地址
      iconUrl: string
      // 会员类型
      hyType: number
      // 用户返点数据
      userRebateList: Array<{
        // 类别名称
        gameCate: string
        // 类别id
        cateId: number
        // 返点
        rebate: number
      }>
      // 赔率折扣,画面展示之赔率需扣除本金1之后乘以此值,显示至小数点第二位,第三位以后四舍五入,再将本金的1与计算的赔率相加后展示在画面上ex:odds=1.9,discount=0.5, 画面展示赔率=(1.9-1) * (0.5) +1 = 1.45
      discount: number
      // 是否通过实名验证,0:未通过 1:已通过 2:验证中 3:验证失败
      verified: number
      // 会员对应vip层级的单注最大下注额,下注金额不可超过此参数
      maxBetMoney: number
      // 会员对应vip层级的串关最大下注额,下注金额不可超过此参数
      maxParlayBetMoney: number
      // 会员对应vip层级的单注冠军最大下注额,下注金额不可超过此参数
      maxCpBetMoney: number
      // 设备验证状态 0:未验证 1:已验证
      deviceValidateStatus: number
      // 电话
      phone: string
      // 币别
      currency: string
      // 国家编码
      nationCode: string
      // 语言
      lang: string
      // 直播登陆相关参数
      liveSyncUserInfoVO: {
        // 平台用户ID
        platUserId: number
        // 平台用户名
        userName: string
        // 昵称
        nickName: string
        // 平台编码
        platformCode: string
        // 测试试玩账号类型：0-普通账号，2-内部测试账号，1-游客
        testFlag: number
        // 头像地址
        iconUrl: string
        // 时间戳
        timestamp: number
        // 签名
        sign: string
      }
      // 用户水位值
      margin: number
      // 首充时间
      firstRechTime: string
      // 球種赔率折扣,画面展示之赔率需扣除本金1之后乘以此值,显示至小数点第二位,第三位以后四舍五入,再将本金的1与计算的赔率相加后展示在画面上ex:odds=1.9,discount=0.5, 画面展示赔率=(1.9-1) * (0.5) +1 = 1.45
      discountByGameTypeList: Array<{
        // 赔率折扣,画面展示之赔率需扣除本金1之后乘以此值,显示至小数点第二位,第三位以后四舍五入,再将本金的1与计算的赔率相加后展示在画面上ex:odds=1.9,discount=0.5, 画面展示赔率=(1.9-1) * (0.5) +1 = 1.45赔率折扣
        discount: number
        // 單一球种 (一個VO一個球種)
        gameType: string
      }>
    }
  }
  // 53.首页未授权公共类（登录、登出、验证码、在线用户数、语言列表）: 53.3.注册用户
  type REQ = {
    // 用户名，校验格式：4-16位的英数字组合。长度4到16位。
    userName: string
    // 密码，md5(明文)，校验格式：32位md5值
    password: string
    // 全名，银行卡上的真实名称，校验格式：只能为2~20个汉字或小数点
    fullName?: string
    // 邮箱，校验格式：邮箱格式
    email?: string
    // 电话，校验格式：数字
    phone?: string
    // QQ，校验格式：5~20位数字
    qq?: string
    // 资金密码,规则：md5(明文)，校验格式：32位md5值
    fundPwd?: string
    // 登录来源，WEB(0), MOBILE_BROWSER(1), ANDROID(2), IOS(3);
    loginSrc?: number
    // 验证码标识（获取验证码时，有返回标识）
    validCodeIdentity?: string
    // 验证码
    validCode?: string
    // 设备号（手机app登录必传）
    deviceSn?: string
    // 微信，
    wechat?: string
    // 短信验证码
    securityCode?: string
    // 邀请码
    inviteCode?: string
    // zalo
    zalo?: string
    // facebook
    facebook?: string
    // whatsapp
    whatsapp?: string
    // telegram
    telegram?: string
    // 省 province
    province?: string
    // 城市 city
    city?: string
    // 郵遞區號 zipCode
    zipCode?: string
    // address
    address?: string
    // 安全问题类型
    safeQuestionType?: number
    // safe question
    safeQuestion?: string
    // 登入环境信息
    loginEnvInfo: string
    // 生日
    birthday?: string
    // 身份证件类型
    identityType?: number
    // 身份证
    identityNumber?: string
    // 投注站编号
    bettingStationId?: number
    // 薪资来源
    salarySource?: number
    // 实名验证照片1路径图片路径图片上传接口：- projectCode(必填) 固定传 cx_sports- platformCode(必填) 固定传 平台id/img- expireAfterDays(必填) 固定传 0- userId (必填)- file(必传)
    verifyPhoto1?: string
    // 实名验证照片2路径图片路径图片上传接口：- projectCode(必填) 固定传 cx_sports- platformCode(必填) 固定传 平台id/img- expireAfterDays(必填) 固定传 0- userId (必填)- file(必传)
    verifyPhoto2?: string
    // 国家
    nationCode?: string
    // 币种
    currency?: string
    // 证件照片(有效证件照片)
    identityPhoto?: string
    // 备用身份证件类型
    identityTypeBackup?: number
    // 备用身份证号
    identityNumberBackup?: string
    // 备用证件照片(备用有效证件照片)
    identityPhotoBackup?: string
    // 聊天平台跳转进入自家平台携带的openId
    openId?: string
    // 绑定来源，例如: 1:IM 等其他第三方平台
    bindSource?: number
    // 手机号前缀国码
    phoneNationCode?: string
    // 邀请好友串
    inviteStr?: string
  }
}
// 53.首页未授权公共类（登录、登出、验证码、在线用户数、语言列表）: 53.4.快速注册用户
declare namespace API_INDEX_QUICKREGISTER {
  // 53.首页未授权公共类（登录、登出、验证码、在线用户数、语言列表）: 53.4.快速注册用户
  type RES = {
    // No comments found.
    success: boolean
    // No comments found.
    msg: string
    // No comments found.
    code: number
    // No comments found.
    t: {
      // 用户id
      userId: number
      // token值
      token: string
      // 用户名
      userName: string
      // 币别
      currency: string
      // 国家编码
      nationCode: string
      // 语言
      lang: string
    }
  }
  // 53.首页未授权公共类（登录、登出、验证码、在线用户数、语言列表）: 53.4.快速注册用户
  type REQ = {
    // 用户名，校验格式：4-16位的英数字组合。长度4到16位。
    userName: string
    // 密码，md5(明文)，校验格式：32位md5值
    password: string
    // 确认密码，md5(明文)，校验格式：32位md5值
    checkPassword: string
    // 登入环境信息
    loginEnvInfo: string
    // 随机串（5个字符）
    nonceStr: string
    // 签名
    sign: string
    // 邀请码
    inviteCode?: string
    // 登录来源，WEB(0), MOBILE_BROWSER(1), ANDROID(2), IOS(3);
    loginSrc?: number
  }
}
// 53.首页未授权公共类（登录、登出、验证码、在线用户数、语言列表）: 53.5.会员登录
declare namespace API_INDEX_LOGIN {
  // 53.首页未授权公共类（登录、登出、验证码、在线用户数、语言列表）: 53.5.会员登录
  type RES = {
    // No comments found.
    success: boolean
    // No comments found.
    msg: string
    // No comments found.
    code: number
    // No comments found.
    t: {
      // 用户id（保留，建议用userId）
      uid: number
      // 用户id
      userId: number
      // token值
      token: string
      // 登录日期
      loginDate: string
      // 登录ip
      loginIp: string
      // 最近一次登录日期
      lastLoginDate: string
      // 最近一次登录ip
      lastLoginIp: string
      // 用户名
      userName: string
      // 昵称
      nickName: string
      // 用户类型（"ADMIN"：超管；"ZDL"：总代理；"DL"：代理；"HY"：会员；"ZZH"：子账户）
      userType: string
      // 平台id
      platformId: number
      // 平台编码
      platformCode: string
      // 真实名称
      fullName: string
      // 是否测试用户（0-正常用户，1-游客，2-内部测试）
      testFlag: number
      // 充值层级
      rechLevel: string
      // 头像地址
      iconUrl: string
      // 会员类型
      hyType: number
      // 用户返点数据
      userRebateList: Array<{
        // 类别名称
        gameCate: string
        // 类别id
        cateId: number
        // 返点
        rebate: number
      }>
      // 赔率折扣,画面展示之赔率需扣除本金1之后乘以此值,显示至小数点第二位,第三位以后四舍五入,再将本金的1与计算的赔率相加后展示在画面上ex:odds=1.9,discount=0.5, 画面展示赔率=(1.9-1) * (0.5) +1 = 1.45
      discount: number
      // 是否通过实名验证,0:未通过 1:已通过 2:验证中 3:验证失败
      verified: number
      // 会员对应vip层级的单注最大下注额,下注金额不可超过此参数
      maxBetMoney: number
      // 会员对应vip层级的串关最大下注额,下注金额不可超过此参数
      maxParlayBetMoney: number
      // 会员对应vip层级的单注冠军最大下注额,下注金额不可超过此参数
      maxCpBetMoney: number
      // 设备验证状态 0:未验证 1:已验证
      deviceValidateStatus: number
      // 电话
      phone: string
      // 币别
      currency: string
      // 国家编码
      nationCode: string
      // 语言
      lang: string
      // 直播登陆相关参数
      liveSyncUserInfoVO: {
        // 平台用户ID
        platUserId: number
        // 平台用户名
        userName: string
        // 昵称
        nickName: string
        // 平台编码
        platformCode: string
        // 测试试玩账号类型：0-普通账号，2-内部测试账号，1-游客
        testFlag: number
        // 头像地址
        iconUrl: string
        // 时间戳
        timestamp: number
        // 签名
        sign: string
      }
      // 用户水位值
      margin: number
      // 首充时间
      firstRechTime: string
      // 球種赔率折扣,画面展示之赔率需扣除本金1之后乘以此值,显示至小数点第二位,第三位以后四舍五入,再将本金的1与计算的赔率相加后展示在画面上ex:odds=1.9,discount=0.5, 画面展示赔率=(1.9-1) * (0.5) +1 = 1.45
      discountByGameTypeList: Array<{
        // 赔率折扣,画面展示之赔率需扣除本金1之后乘以此值,显示至小数点第二位,第三位以后四舍五入,再将本金的1与计算的赔率相加后展示在画面上ex:odds=1.9,discount=0.5, 画面展示赔率=(1.9-1) * (0.5) +1 = 1.45赔率折扣
        discount: number
        // 單一球种 (一個VO一個球種)
        gameType: string
      }>
    }
  }
  // 53.首页未授权公共类（登录、登出、验证码、在线用户数、语言列表）: 53.5.会员登录
  type REQ = {
    // 账号
    account: string
    // 密码
    password: string
    // 验证码标识（获取验证码时，有返回标识）
    validCodeIdentity?: string
    // 验证码
    validCode?: string
    // 登录来源（0：WEB, 1：MOBILE_BROWSER, 2：ANDROID, 3：IOS）
    loginSrc: number
    // 设备号(手机app登录必传）
    deviceSn?: string
    // app系统版本号
    appVersion?: string
    // 登入环境信息
    loginEnvInfo?: string
    // 币种
    currency?: string
    // 聊天平台跳转进入自家平台携带的openId
    openId?: string
    // 绑定来源，例如: 1:IM 等其他第三方平台
    bindSource?: number
    // 代理后台的google验证码
    googleCode?: string
    // 绑定来源提供的email
    bindEmail?: string
    // 绑定来源提供的name
    bindName?: string
  }
}
// 53.首页未授权公共类（登录、登出、验证码、在线用户数、语言列表）: 53.6.google登入验证
declare namespace API_INDEX_AUTH_GOOGLE {
  // 53.首页未授权公共类（登录、登出、验证码、在线用户数、语言列表）: 53.6.google登入验证
  type RES = {
    // No comments found.
    success: boolean
    // No comments found.
    msg: string
    // No comments found.
    code: number
    // No comments found.
    t: {
      // open auth 验证结果(0:失败 1:成功 2:未绑定)
      status: number
      // 绑定id,当status为未绑定(2),才提供
      openId: string
      // google name,当status为未绑定(2),才提供
      name: string
      // google mail,当status为未绑定(2),才提供
      email: string
      // 绑定平台来源,当status为未绑定(2),才提供
      bindSource: number
      // 当status为success(1),tokenInfo才生效
      tokenInfo: {
        // 用户id（保留，建议用userId）
        uid: number
        // 用户id
        userId: number
        // token值
        token: string
        // 登录日期
        loginDate: string
        // 登录ip
        loginIp: string
        // 最近一次登录日期
        lastLoginDate: string
        // 最近一次登录ip
        lastLoginIp: string
        // 用户名
        userName: string
        // 昵称
        nickName: string
        // 用户类型（"ADMIN"：超管；"ZDL"：总代理；"DL"：代理；"HY"：会员；"ZZH"：子账户）
        userType: string
        // 平台id
        platformId: number
        // 平台编码
        platformCode: string
        // 真实名称
        fullName: string
        // 是否测试用户（0-正常用户，1-游客，2-内部测试）
        testFlag: number
        // 充值层级
        rechLevel: string
        // 头像地址
        iconUrl: string
        // 会员类型
        hyType: number
        // 用户返点数据
        userRebateList: Array<{
          // 类别名称
          gameCate: string
          // 类别id
          cateId: number
          // 返点
          rebate: number
        }>
        // 赔率折扣,画面展示之赔率需扣除本金1之后乘以此值,显示至小数点第二位,第三位以后四舍五入,再将本金的1与计算的赔率相加后展示在画面上ex:odds=1.9,discount=0.5, 画面展示赔率=(1.9-1) * (0.5) +1 = 1.45
        discount: number
        // 是否通过实名验证,0:未通过 1:已通过 2:验证中 3:验证失败
        verified: number
        // 会员对应vip层级的单注最大下注额,下注金额不可超过此参数
        maxBetMoney: number
        // 会员对应vip层级的串关最大下注额,下注金额不可超过此参数
        maxParlayBetMoney: number
        // 会员对应vip层级的单注冠军最大下注额,下注金额不可超过此参数
        maxCpBetMoney: number
        // 设备验证状态 0:未验证 1:已验证
        deviceValidateStatus: number
        // 电话
        phone: string
        // 币别
        currency: string
        // 国家编码
        nationCode: string
        // 语言
        lang: string
        // 直播登陆相关参数
        liveSyncUserInfoVO: {
          // 平台用户ID
          platUserId: number
          // 平台用户名
          userName: string
          // 昵称
          nickName: string
          // 平台编码
          platformCode: string
          // 测试试玩账号类型：0-普通账号，2-内部测试账号，1-游客
          testFlag: number
          // 头像地址
          iconUrl: string
          // 时间戳
          timestamp: number
          // 签名
          sign: string
        }
        // 用户水位值
        margin: number
        // 首充时间
        firstRechTime: string
        // 球種赔率折扣,画面展示之赔率需扣除本金1之后乘以此值,显示至小数点第二位,第三位以后四舍五入,再将本金的1与计算的赔率相加后展示在画面上ex:odds=1.9,discount=0.5, 画面展示赔率=(1.9-1) * (0.5) +1 = 1.45
        discountByGameTypeList: Array<{
          // 赔率折扣,画面展示之赔率需扣除本金1之后乘以此值,显示至小数点第二位,第三位以后四舍五入,再将本金的1与计算的赔率相加后展示在画面上ex:odds=1.9,discount=0.5, 画面展示赔率=(1.9-1) * (0.5) +1 = 1.45赔率折扣
          discount: number
          // 單一球种 (一個VO一個球種)
          gameType: string
        }>
      }
    }
  }
  // 53.首页未授权公共类（登录、登出、验证码、在线用户数、语言列表）: 53.6.google登入验证
  type REQ = {
    // google accessToken
    accessToken?: string
    // google idToken
    idToken?: string
    // 登录来源（0：WEB, 1：MOBILE_BROWSER, 2：ANDROID, 3：IOS）
    loginSrc: number
    // 是否为VIP包 true:是 false:否
    isVip: boolean
  }
}
// 53.首页未授权公共类（登录、登出、验证码、在线用户数、语言列表）: 53.7.Open Auth Quick Register
declare namespace API_INDEX_AUTH_QUICK_REGISTER {
  // 53.首页未授权公共类（登录、登出、验证码、在线用户数、语言列表）: 53.7.Open Auth Quick Register
  type RES = {
    // No comments found.
    success: boolean
    // No comments found.
    msg: string
    // No comments found.
    code: number
    // No comments found.
    t: {
      // 用户id
      userId: number
      // token值
      token: string
      // 用户名
      userName: string
      // 币别
      currency: string
      // 国家编码
      nationCode: string
      // 语言
      lang: string
    }
  }
  // 53.首页未授权公共类（登录、登出、验证码、在线用户数、语言列表）: 53.7.Open Auth Quick Register
  type REQ = {
    // 用户名，校验格式：4-16位的英数字组合。长度4到16位。
    userName: string
    // 密码，md5(明文)，校验格式：32位md5值
    password: string
    // 确认密码，md5(明文)，校验格式：32位md5值
    checkPassword: string
    // 登入环境信息
    loginEnvInfo: string
    // 登录来源，WEB(0), MOBILE_BROWSER(1), ANDROID(2), IOS(3);
    loginSrc?: number
    // 绑定id
    openId: string
    // 绑定平台来源(2:Google)
    bindSource: number
    // name
    name: string
    // mail
    email: string
    // 验证码标识（获取验证码时，有返回标识）
    validCodeIdentity?: string
    // 验证码
    validCode?: string
  }
}
// 53.首页未授权公共类（登录、登出、验证码、在线用户数、语言列表）: 53.8.绑定帐号
declare namespace API_INDEX_AUTH_BIND {
  // 53.首页未授权公共类（登录、登出、验证码、在线用户数、语言列表）: 53.8.绑定帐号
  type RES = {
    // No comments found.
    success: boolean
    // No comments found.
    msg: string
    // No comments found.
    code: number
    // No comments found.
    t: {
      // 用户id（保留，建议用userId）
      uid: number
      // 用户id
      userId: number
      // token值
      token: string
      // 登录日期
      loginDate: string
      // 登录ip
      loginIp: string
      // 最近一次登录日期
      lastLoginDate: string
      // 最近一次登录ip
      lastLoginIp: string
      // 用户名
      userName: string
      // 昵称
      nickName: string
      // 用户类型（"ADMIN"：超管；"ZDL"：总代理；"DL"：代理；"HY"：会员；"ZZH"：子账户）
      userType: string
      // 平台id
      platformId: number
      // 平台编码
      platformCode: string
      // 真实名称
      fullName: string
      // 是否测试用户（0-正常用户，1-游客，2-内部测试）
      testFlag: number
      // 充值层级
      rechLevel: string
      // 头像地址
      iconUrl: string
      // 会员类型
      hyType: number
      // 用户返点数据
      userRebateList: Array<{
        // 类别名称
        gameCate: string
        // 类别id
        cateId: number
        // 返点
        rebate: number
      }>
      // 赔率折扣,画面展示之赔率需扣除本金1之后乘以此值,显示至小数点第二位,第三位以后四舍五入,再将本金的1与计算的赔率相加后展示在画面上ex:odds=1.9,discount=0.5, 画面展示赔率=(1.9-1) * (0.5) +1 = 1.45
      discount: number
      // 是否通过实名验证,0:未通过 1:已通过 2:验证中 3:验证失败
      verified: number
      // 会员对应vip层级的单注最大下注额,下注金额不可超过此参数
      maxBetMoney: number
      // 会员对应vip层级的串关最大下注额,下注金额不可超过此参数
      maxParlayBetMoney: number
      // 会员对应vip层级的单注冠军最大下注额,下注金额不可超过此参数
      maxCpBetMoney: number
      // 设备验证状态 0:未验证 1:已验证
      deviceValidateStatus: number
      // 电话
      phone: string
      // 币别
      currency: string
      // 国家编码
      nationCode: string
      // 语言
      lang: string
      // 直播登陆相关参数
      liveSyncUserInfoVO: {
        // 平台用户ID
        platUserId: number
        // 平台用户名
        userName: string
        // 昵称
        nickName: string
        // 平台编码
        platformCode: string
        // 测试试玩账号类型：0-普通账号，2-内部测试账号，1-游客
        testFlag: number
        // 头像地址
        iconUrl: string
        // 时间戳
        timestamp: number
        // 签名
        sign: string
      }
      // 用户水位值
      margin: number
      // 首充时间
      firstRechTime: string
      // 球種赔率折扣,画面展示之赔率需扣除本金1之后乘以此值,显示至小数点第二位,第三位以后四舍五入,再将本金的1与计算的赔率相加后展示在画面上ex:odds=1.9,discount=0.5, 画面展示赔率=(1.9-1) * (0.5) +1 = 1.45
      discountByGameTypeList: Array<{
        // 赔率折扣,画面展示之赔率需扣除本金1之后乘以此值,显示至小数点第二位,第三位以后四舍五入,再将本金的1与计算的赔率相加后展示在画面上ex:odds=1.9,discount=0.5, 画面展示赔率=(1.9-1) * (0.5) +1 = 1.45赔率折扣
        discount: number
        // 單一球种 (一個VO一個球種)
        gameType: string
      }>
    }
  }
  // 53.首页未授权公共类（登录、登出、验证码、在线用户数、语言列表）: 53.8.绑定帐号
  type REQ = {
    // 用户名，校验格式：4-16位的英数字组合。长度4到16位。
    userName: string
    // 密码，md5(明文)，校验格式：32位md5值
    password: string
    // 登入环境信息
    loginEnvInfo: string
    // 登录来源，WEB(0), MOBILE_BROWSER(1), ANDROID(2), IOS(3);
    loginSrc?: number
    // 绑定id
    openId: string
    // name
    name: string
    // mail
    email: string
    // 绑定平台来源(2:Google)
    bindSource: number
    // 验证码标识（获取验证码时，有返回标识）
    validCodeIdentity?: string
    // 验证码
    validCode?: string
  }
}
// 53.首页未授权公共类（登录、登出、验证码、在线用户数、语言列表）: 53.9.open auth bind
declare namespace API_INDEX_AUTH_POST_BIND {
  // 53.首页未授权公共类（登录、登出、验证码、在线用户数、语言列表）: 53.9.open auth bind
  type RES = {
    // No comments found.
    success: boolean
    // No comments found.
    msg: string
    // No comments found.
    code: number
  }
  // 53.首页未授权公共类（登录、登出、验证码、在线用户数、语言列表）: 53.9.open auth bind
  type REQ = {
    // 绑定id
    openId: string
    // name
    name: string
    // mail
    email: string
    // 绑定平台来源(2:Google)
    bindSource: number
  }
}
// 53.首页未授权公共类（登录、登出、验证码、在线用户数、语言列表）: 53.10.游客登录
declare namespace API_INDEX_LOGINFORGUEST {
  // 53.首页未授权公共类（登录、登出、验证码、在线用户数、语言列表）: 53.10.游客登录
  type RES = {
    // No comments found.
    success: boolean
    // No comments found.
    msg: string
    // No comments found.
    code: number
    // No comments found.
    t: {
      // 用户id（保留，建议用userId）
      uid: number
      // 用户id
      userId: number
      // token值
      token: string
      // 登录日期
      loginDate: string
      // 登录ip
      loginIp: string
      // 最近一次登录日期
      lastLoginDate: string
      // 最近一次登录ip
      lastLoginIp: string
      // 用户名
      userName: string
      // 昵称
      nickName: string
      // 用户类型（"ADMIN"：超管；"ZDL"：总代理；"DL"：代理；"HY"：会员；"ZZH"：子账户）
      userType: string
      // 平台id
      platformId: number
      // 平台编码
      platformCode: string
      // 真实名称
      fullName: string
      // 是否测试用户（0-正常用户，1-游客，2-内部测试）
      testFlag: number
      // 充值层级
      rechLevel: string
      // 头像地址
      iconUrl: string
      // 会员类型
      hyType: number
      // 用户返点数据
      userRebateList: Array<{
        // 类别名称
        gameCate: string
        // 类别id
        cateId: number
        // 返点
        rebate: number
      }>
      // 赔率折扣,画面展示之赔率需扣除本金1之后乘以此值,显示至小数点第二位,第三位以后四舍五入,再将本金的1与计算的赔率相加后展示在画面上ex:odds=1.9,discount=0.5, 画面展示赔率=(1.9-1) * (0.5) +1 = 1.45
      discount: number
      // 是否通过实名验证,0:未通过 1:已通过 2:验证中 3:验证失败
      verified: number
      // 会员对应vip层级的单注最大下注额,下注金额不可超过此参数
      maxBetMoney: number
      // 会员对应vip层级的串关最大下注额,下注金额不可超过此参数
      maxParlayBetMoney: number
      // 会员对应vip层级的单注冠军最大下注额,下注金额不可超过此参数
      maxCpBetMoney: number
      // 设备验证状态 0:未验证 1:已验证
      deviceValidateStatus: number
      // 电话
      phone: string
      // 币别
      currency: string
      // 国家编码
      nationCode: string
      // 语言
      lang: string
      // 直播登陆相关参数
      liveSyncUserInfoVO: {
        // 平台用户ID
        platUserId: number
        // 平台用户名
        userName: string
        // 昵称
        nickName: string
        // 平台编码
        platformCode: string
        // 测试试玩账号类型：0-普通账号，2-内部测试账号，1-游客
        testFlag: number
        // 头像地址
        iconUrl: string
        // 时间戳
        timestamp: number
        // 签名
        sign: string
      }
      // 用户水位值
      margin: number
      // 首充时间
      firstRechTime: string
      // 球種赔率折扣,画面展示之赔率需扣除本金1之后乘以此值,显示至小数点第二位,第三位以后四舍五入,再将本金的1与计算的赔率相加后展示在画面上ex:odds=1.9,discount=0.5, 画面展示赔率=(1.9-1) * (0.5) +1 = 1.45
      discountByGameTypeList: Array<{
        // 赔率折扣,画面展示之赔率需扣除本金1之后乘以此值,显示至小数点第二位,第三位以后四舍五入,再将本金的1与计算的赔率相加后展示在画面上ex:odds=1.9,discount=0.5, 画面展示赔率=(1.9-1) * (0.5) +1 = 1.45赔率折扣
        discount: number
        // 單一球种 (一個VO一個球種)
        gameType: string
      }>
    }
  }
  // 53.首页未授权公共类（登录、登出、验证码、在线用户数、语言列表）: 53.10.游客登录
  type REQ = {
    // 登录来源（0：WEB, 1：MOBILE_BROWSER, 2：ANDROID, 3：IOS）
    loginSrc: number
    // 设备号（手机app登录必传）
    deviceSn?: string
    // 币种
    currency: string
  }
}
// 53.首页未授权公共类（登录、登出、验证码、在线用户数、语言列表）: 53.11.试玩游戏跳转
declare namespace API_INDEX_FORWARDGUEST {
  // 53.首页未授权公共类（登录、登出、验证码、在线用户数、语言列表）: 53.11.试玩游戏跳转
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
  // 53.首页未授权公共类（登录、登出、验证码、在线用户数、语言列表）: 53.11.试玩游戏跳转
  type REQ = {
    // 中文：zh 英文：en 越南 vi ,预设zh
    lang?: string
    // No comments found.
    loginEnvInfo?: string
    // 登录来源（0：WEB, 1：MOBILE_BROWSER, 2：ANDROID, 3：IOS）
    loginSrc: number
  }
}
// 53.首页未授权公共类（登录、登出、验证码、在线用户数、语言列表）: 53.12.demo站试玩游戏跳转(多了识别码验证)
declare namespace API_INDEX_DEMO_LOGIN {
  // 53.首页未授权公共类（登录、登出、验证码、在线用户数、语言列表）: 53.12.demo站试玩游戏跳转(多了识别码验证)
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
  // 53.首页未授权公共类（登录、登出、验证码、在线用户数、语言列表）: 53.12.demo站试玩游戏跳转(多了识别码验证)
  type REQ = {
    // 中文：zh 英文：en 越南 vi ,预设zh
    lang?: string
    // 登录来源（0：WEB, 1：MOBILE_BROWSER, 2：ANDROID, 3：IOS）
    loginSrc: number
    // 验证码标识（获取验证码时，有返回标识）
    validCodeIdentity?: string
    // 验证码
    validCode?: string
  }
}
// 53.首页未授权公共类（登录、登出、验证码、在线用户数、语言列表）: 53.13.登出系统
declare namespace API_INDEX_LOGOUT {
  // 53.首页未授权公共类（登录、登出、验证码、在线用户数、语言列表）: 53.13.登出系统
  type RES = {
    // No comments found.
    success: boolean
    // No comments found.
    msg: string
    // No comments found.
    code: number
  }
  // 53.首页未授权公共类（登录、登出、验证码、在线用户数、语言列表）: 53.13.登出系统
  type REQ = {
    // 用户id（保留，建议用userId）
    uid?: number
    // 用户id
    userId?: number
    // token值
    token?: string
    // 登录日期
    loginDate?: string
    // 登录ip
    loginIp?: string
    // 登录域名
    domain?: string
    // 最近一次登录日期
    lastLoginDate?: string
    // 最近一次登录ip
    lastLoginIp?: string
    // 用户名
    userName?: string
    // 昵称
    nickName?: string
    // 用户类型（"ADMIN"：超管；"ZDL"：总代理；"DL"：代理；"HY"：会员；"ZZH"：子账户 "ROBOT"：机器人 ）
    userType?: string
    // 查询码
    queryCode?: string
    // 平台id
    platformId?: number
    // 平台编码
    platformCode?: string
    // 真实名称
    fullName?: string
    // 是否测试用户（0-不是，1-是）
    testFlag?: number
    // 是否开启赔率修改
    agentOdds?: number
    // 权限信息
    permission?: string
    // 充值层级
    rechLevel?: string
    // 平台名称
    platformName?: string
    // 设备号（手机app登录必传）
    deviceSn?: string
    // 头像地址
    iconUrl?: string
    // 是否内部管理账号
    isInnerAdmin?: number
    // 是否平台超级管理账号(只报表platform表的adminAccount、manageAccount)
    isPlatAdmin?: number
    // 会员类型
    hyType?: number
    // 用户返点数据
    userRebateList?: Array<{
      // 类别名称
      gameCate?: string
      // 类别id
      cateId?: number
      // 返点
      rebate?: number
    }>
    // 返点
    rebate?: number
    // 赔率折扣,画面展示之赔率需扣除本金1之后乘以此值,显示至小数点第二位,第三位以后四舍五入,再将本金的1与计算的赔率相加后展示在画面上ex:odds=1.9,discount=0.5, 画面展示赔率=(1.9-1) * (0.5) +1 = 1.45目前多了依照球種去區分, 請以 /user/info 接口內 discountByGameTypeList 為準
    discount?: number
    // 是否通过实名验证,0:未通过 1:已通过 2:验证中 3:验证失败
    verified?: number
    // 会员所属层级单注最大下注额
    maxBetMoney?: number
    // 会员所属层级串关最大下注额
    maxParlayBetMoney?: number
    // 会员所属层级单注冠军最大下注额
    maxCpBetMoney?: number
    // 电话
    phone?: string
    // 设备验证状态 0:未验证 1:已验证
    deviceValidateStatus?: number
    // 登入环境信息
    loginEnvInfo?: string
    // 代理等级
    agentLevel?: number
    // 占成
    shareholding?: number
    // 币别
    currency?: string
    // 国家编码
    nationCode?: string
    // 语言
    lang?: string
    // 投注站id
    bettingStationId?: number
    // 首充时间
    firstRechTime?: string
    // 用户水位值
    margin?: number
    // okbet代理后台对应的权限
    agentPermission?: string
    // No comments found.
    liveSyncUserInfoVO?: {
      // 平台用户ID
      platUserId?: number
      // 平台用户名
      userName?: string
      // 昵称
      nickName?: string
      // 平台编码
      platformCode?: string
      // 测试试玩账号类型：0-普通账号，2-内部测试账号，1-游客
      testFlag?: number
      // 头像地址
      iconUrl?: string
      // 时间戳
      timestamp?: number
      // 签名
      sign?: string
    }
    // 签名
    sign?: string
    // 球種赔率折扣,画面展示之赔率需扣除本金1之后乘以此值,显示至小数点第二位,第三位以后四舍五入,再将本金的1与计算的赔率相加后展示在画面上ex:odds=1.9,discount=0.5, 画面展示赔率=(1.9-1) * (0.5) +1 = 1.45
    discountByGameTypeList?: Array<{
      // 赔率折扣,画面展示之赔率需扣除本金1之后乘以此值,显示至小数点第二位,第三位以后四舍五入,再将本金的1与计算的赔率相加后展示在画面上ex:odds=1.9,discount=0.5, 画面展示赔率=(1.9-1) * (0.5) +1 = 1.45赔率折扣
      discount?: number
      // 單一球种 (一個VO一個球種)
      gameType?: string
    }>
    // 單一球种 (一個VO一個球種)
    gameType?: string
    // 代理帐号前缀
    agentAccountPrefix?: string
  }
}
// 53.首页未授权公共类（登录、登出、验证码、在线用户数、语言列表）: 53.14.账号名称是否已存在
declare namespace API_INDEX_CHECKEXIST_USERNAME {
  // 53.首页未授权公共类（登录、登出、验证码、在线用户数、语言列表）: 53.14.账号名称是否已存在
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
  // 53.首页未授权公共类（登录、登出、验证码、在线用户数、语言列表）: 53.14.账号名称是否已存在
  type REQ = {
    // 账号名
    userName: string
  }
}
// 53.首页未授权公共类（登录、登出、验证码、在线用户数、语言列表）: 53.15.校验密码复杂度
declare namespace API_INDEX_CHECK_PASS {
  // 53.首页未授权公共类（登录、登出、验证码、在线用户数、语言列表）: 53.15.校验密码复杂度
  type RES = {
    // No comments found.
    success: boolean
    // No comments found.
    msg: string
    // No comments found.
    code: number
  }
  // 53.首页未授权公共类（登录、登出、验证码、在线用户数、语言列表）: 53.15.校验密码复杂度
  type REQ = {
    // 账号名
    pass: string
  }
}
// 53.首页未授权公共类（登录、登出、验证码、在线用户数、语言列表）: 53.16.公告(免登入即可访问)
declare namespace API_INDEX_PROMOTENOTICE {
  // 53.首页未授权公共类（登录、登出、验证码、在线用户数、语言列表）: 53.16.公告(免登入即可访问)
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
      // 内容
      message: string
      // 展现类型：1: 投注区底部公告 ,2: 登录弹窗公告 , 3: 未登录弹窗
      type: number
      // 消息类型：1：游戏公告，2：会员福利，3：转账须知，4：劲爆推荐，5：导航网，6：其他
      msgType: number
      // 添加时间
      addTime: string
      // 标题
      title: string
      // 更新时间
      updateTime: string
      // 用户充值层级
      rechLevels: string
      // 排序
      sort: number
      // 平台id
      platformId: number
      // 唯一号码
      uniqueNo: string
      // 状态 0:未确认 1：已确认
      status: number
      // 是否全部已读,0未读,1已读
      isAllRead: number
      // 画面显示类型：1: 系統 ,2: 平台 ,3: 游戏
      messageType: number
    }>
    // 画面显示类型：1: 系統 ,2: 平台 ,3: 游戏
    messageType: number
    // No comments found.
    total: number
  }
  // 53.首页未授权公共类（登录、登出、验证码、在线用户数、语言列表）: 53.16.公告(免登入即可访问)
  type REQ = {
    // 展现类型：1: 投注区底部公告, 2: 登录弹窗公告, 3: 未登录弹窗,[array of int32]
    typeList?: any[]
  }
}
// 53.首页未授权公共类（登录、登出、验证码、在线用户数、语言列表）: 53.17.验证token 是否过期。如果不过期返回token信息，过期返回success: false
declare namespace API_INDEX_CHECKTOKEN {
  // 53.首页未授权公共类（登录、登出、验证码、在线用户数、语言列表）: 53.17.验证token 是否过期。如果不过期返回token信息，过期返回success: false
  type RES = {
    // No comments found.
    success: boolean
    // No comments found.
    msg: string
    // No comments found.
    code: number
  }
}
// 53.首页未授权公共类（登录、登出、验证码、在线用户数、语言列表）: 53.18.发送验证码
declare namespace API_INDEX_SENDSMS {
  // 53.首页未授权公共类（登录、登出、验证码、在线用户数、语言列表）: 53.18.发送验证码
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
  // 53.首页未授权公共类（登录、登出、验证码、在线用户数、语言列表）: 53.18.发送验证码
  type REQ = {
    // 平台id
    platformId?: number
    // 手机号码，多个用豆号分割最多100个号码
    phone?: string
    // No comments found.
    userId: number
  }
}
// 53.首页未授权公共类（登录、登出、验证码、在线用户数、语言列表）: 53.19.发送验证码 (忘记密码共能用，需要验证用户存不存在 )
declare namespace API_INDEX_SENDSMSFORGOTPASSWORD {
  // 53.首页未授权公共类（登录、登出、验证码、在线用户数、语言列表）: 53.19.发送验证码 (忘记密码共能用，需要验证用户存不存在 )
  type RES = {
    // No comments found.
    success: boolean
    // No comments found.
    msg: string
    // No comments found.
    code: number
    // No comments found.
    t: {
      // 用户名
      userName: string
      // 信息
      msg: string
    }
  }
  // 53.首页未授权公共类（登录、登出、验证码、在线用户数、语言列表）: 53.19.发送验证码 (忘记密码共能用，需要验证用户存不存在 )
  type REQ = {
    // 手机号码 （ 9开头）
    phone: string
    // 账号
    userName: string
  }
}
// 53.首页未授权公共类（登录、登出、验证码、在线用户数、语言列表）: 53.20.忘记密码 验证 短信验证码
declare namespace API_INDEX_VALIDATEFORGOTPASSWORDSMS {
  // 53.首页未授权公共类（登录、登出、验证码、在线用户数、语言列表）: 53.20.忘记密码 验证 短信验证码
  type RES = {
    // No comments found.
    success: boolean
    // No comments found.
    msg: string
    // No comments found.
    code: number
  }
  // 53.首页未授权公共类（登录、登出、验证码、在线用户数、语言列表）: 53.20.忘记密码 验证 短信验证码
  type REQ = {
    // 验证码
    validCode: string
    // 电话号码 (不含 国码)
    phone: string
  }
}
// 53.首页未授权公共类（登录、登出、验证码、在线用户数、语言列表）: 53.21.忘記密碼 賬戶認證
declare namespace API_INDEX_VALIDATEUSER {
  // 53.首页未授权公共类（登录、登出、验证码、在线用户数、语言列表）: 53.21.忘記密碼 賬戶認證
  type RES = {
    // No comments found.
    success: boolean
    // No comments found.
    msg: string
    // No comments found.
    code: number
    // No comments found.
    t: {
      // 用户名
      userName: string
      // 倒计时（秒数）
      countDownSec: number
      // 用户手机号码
      phone: string
    }
  }
  // 53.首页未授权公共类（登录、登出、验证码、在线用户数、语言列表）: 53.21.忘記密碼 賬戶認證
  type REQ = {
    // 验证码
    validCode: string
    // 用戶賬號
    userName: string
    // 验证码标识
    validCodeIdentity: string
  }
}
// 53.首页未授权公共类（登录、登出、验证码、在线用户数、语言列表）: 53.22.忘记密码 验证通过 -> 更新密码
declare namespace API_INDEX_RESETFORGOTPASSWORD {
  // 53.首页未授权公共类（登录、登出、验证码、在线用户数、语言列表）: 53.22.忘记密码 验证通过 -> 更新密码
  type RES = {
    // No comments found.
    success: boolean
    // No comments found.
    msg: string
    // No comments found.
    code: number
    // No comments found.
    t: {
      // 用户名
      userName: string
      // 信息
      msg: string
    }
  }
  // 53.首页未授权公共类（登录、登出、验证码、在线用户数、语言列表）: 53.22.忘记密码 验证通过 -> 更新密码
  type REQ = {
    // 确认密码
    confirmPassword: string
    // 新密码
    newPassword: string
    // 用户账号
    userName: string
  }
}
// 53.首页未授权公共类（登录、登出、验证码、在线用户数、语言列表）: 53.23.获取用户在线人数
declare namespace API_INDEX_ONLINEUSER {
  // 53.首页未授权公共类（登录、登出、验证码、在线用户数、语言列表）: 53.23.获取用户在线人数
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
}
// 53.首页未授权公共类（登录、登出、验证码、在线用户数、语言列表）: 53.24.获取场馆用户在线人数
declare namespace API_INDEX_THIRDGAMEONLINEUSER {
  // 53.首页未授权公共类（登录、登出、验证码、在线用户数、语言列表）: 53.24.获取场馆用户在线人数
  type RES = {
    // No comments found.
    success: boolean
    // No comments found.
    msg: string
    // No comments found.
    code: number
    // No comments found.
    t: {
      // 场馆在线人数下限
      lowOnlineCount: number
      // 场馆在线人数上限
      highOnlineCount: number
    }
  }
}
// 53.首页未授权公共类（登录、登出、验证码、在线用户数、语言列表）: 53.25.获取支持的语言
declare namespace API_INDEX_LANGUAGE {
  // 53.首页未授权公共类（登录、登出、验证码、在线用户数、语言列表）: 53.25.获取支持的语言
  type RES = {
    // No comments found.
    success: boolean
    // No comments found.
    msg: string
    // No comments found.
    code: number
    // No comments found.
    rows: Array<{
      // 代码
      code: string
      // 名称
      name: string
    }>
    // 名称
    name: string
    // No comments found.
    total: number
  }
}
// 53.首页未授权公共类（登录、登出、验证码、在线用户数、语言列表）: 53.26.获取玩家信息
declare namespace API_INDEX_PLAYER_INFO_USERID {
  // 53.首页未授权公共类（登录、登出、验证码、在线用户数、语言列表）: 53.26.获取玩家信息
  type RES = {
    // No comments found.
    success: boolean
    // No comments found.
    msg: string
    // No comments found.
    code: number
    // No comments found.
    t: {
      // 主键
      userId: number
      // 用户名
      userName: string
      // 用户等级id
      userLevelId: number
      // 等级代码
      userLevelCode: string
      // 昵称
      nickName: string
      // 头像路径
      iconUrl: string
      // 下注信息
      betInfo: {
        // 他喜欢的游戏
        likeGameIds: any[]
        // 累计中奖金额
        totalMoney: number
      }
    }
  }
  // 53.首页未授权公共类（登录、登出、验证码、在线用户数、语言列表）: 53.26.获取玩家信息
  type REQ = {
    //  用户id
    userId: number
    // No comments found.
    platformId?: number
    // No comments found.
    locale?: any
  }
}
// 53.首页未授权公共类（登录、登出、验证码、在线用户数、语言列表）: 53.27.获取配置信息
declare namespace API_INDEX_CONFIG_JSON {
  // 53.首页未授权公共类（登录、登出、验证码、在线用户数、语言列表）: 53.27.获取配置信息
  type RES = {
    // No comments found.
    success: boolean
    // No comments found.
    msg: string
    // No comments found.
    code: number
    // No comments found.
    t: {
      // 平台id
      platformId: number
      // 是否开启余额宝（1-开启，0-关闭）
      enableYuEBao: string
      // 是否开启信贷吧（1-开启，0-关闭）
      enableXinDaiBa: string
      // 是否开启真实姓名检测(1：开启，0：关闭)
      enableFullName: string
      // 是否开启取款密码(1：开启，0：关闭)
      enableFundPwd: string
      // 是否开启微信检测(1：开启，0：关闭)
      enableWechat: string
      // 是否开启登录验证码(1：开启，0：关闭)
      enableValidCode: string
      // 是否开启注册验证码(1：开启，0：关闭)
      enableRegValidCode: string
      // 是否开启QQ(1：开启，0：关闭)
      enableQQ: string
      // 是否开启Email(1：开启，0：关闭)
      enableEmail: string
      // 是否开启手机号(1：开启，0：关闭)
      enablePhone: string
      // 平台在线客服url
      customerServiceUrl: string
      // 平台在线客服url2
      customerServiceUrl2: string
      // 平台在线客服url3 (Telegram)
      customerServiceUrl3: string
      // 平台在线客服url4 (Melon)
      customerServiceUrl4: string
      // 客服专线国家码
      servicePhoneNationNumber: string
      // 客服专线
      servicePhoneNumber: string
      // 平台在线客服使用js模式
      customerServiceUrlByJs: string
      // 平台在线客服视频地址
      customerServicveVideoUrl: string
      // 默认H5/APP皮肤
      defaultSkin: string
      // 默认Pc皮肤
      defaultPcSkin: string
      // 系统维护开关 (1：开启，0：关闭)
      maintainStatus: string
      // 维护页面描述
      maintainInfo: string
      // ON体育维护开关 (1：开启，0：关闭)
      sportMaintainStatus: string
      // ON体育维护时间 格式为1683133200000_1683133200000,左边为开始时间,右边为结束时间
      sportMaintainTime: string
      // ON体育维护页面描述
      sportMaintainInfo: string
      // 电脑版APP下载地址
      appDownUrl: string
      // 电脑版APP备用下载地址(老客户地址)
      appBackupDownUrl: string
      // 手机版APP下载地址
      mobileAppDownUrl: string
      // 手机版APP备用下载地址(老客户地址)
      mobileAppBackupDownUrl: string
      // 开奖直播地址
      lotteryLiveUrl: string
      // 静态资源服务器地址
      resServerHost: string
      // 图片列表
      imageList: Array<{
        // 图片地址（相对地址，需要加上config的resServerHost）
        imgUrl: string
        // 图类型:1PC:轮播,2H5:轮播,3:App下载二维码,4:PC版优惠活动素材图,5:H5版优惠活动素材图,6:PC版弹窗活动素材图,7:H5版弹窗活动素材图,8:备用App下载二维码9:H5登陆注册轮播图 10:PC登陆注册轮播图
        imageType: number
        // 排序
        imageSort: number
        // (1,2,3)图片名称,4.标题图片
        imageName1: string
        // 标题文字
        imageText1: string
        // 内容图片
        imageName2: string
        // 内容内标题文字(粗体)
        imageText2: string
        // 活動打水倍数
        multiple: number
        // 活动结束时间
        endTime: string | number
        // 内容文字
        imageText3: string
        // 弹窗图片
        imageName3: string
        // 首页图片
        imageName4: string
        // 首页活动大图
        imageName5: string
        // 图片跳转地址(可空)
        imageLink: string
        // 图片id
        id: number
        // 活动属于的语系
        lang: string
        // 0 文字正常显示 1 文字上方显示
        viewType: number
        // 0 关闭 1 开启
        status: number
        // 活动属于的语系币别
        currency: string
        // 是否为预设语系(默认显示) 0:否 1:是
        defaultLang: number
        // 限定代理 多笔请以；区隔显示
        agentId: string
        // 限定邀请码 多笔请以；区隔显示
        inviteCode: string
        // 活动类别：以逗號隔開
        category: string
        // 活动列表模式(vn,live,casino...) 预设vn
        mode: string
        // 活动id
        activityId: string
        // 跳转方式 0:活动名称/URL 1:文本/图片
        jumpType: number
      }>
      // 推广面QQ连接
      mainQQUrl: string
      // 推广面微信连接
      mainWxUrl: string
      // 推广页面联系电话
      mainPhone: string
      // 推广页面客服QQ
      mainCustomerQQ: string
      // 推广页面代理QQ
      mainAgentQQ: string
      // 推广页面代理Email
      mainEmail: string
      // 代理专属域名
      exclusiveAgentUrl: string
      // 代理专属客服地址
      agentZxkfUrl: string
      // 代理地址
      agentUrl: string
      // seo跳转地址
      seoUrl: string
      // 代理模式：ulimit 无限级，fixed 固定级
      agentMode: string
      // 统计代码
      extendJs: string
      // 聊天室地址
      chatHost: string
      // 聊天室开关
      chatOpen: string
      // 赛事聊天室开关(1:open, 0:close)
      matchChatroomSwitch: string
      // 聊天室最新消息數量顯示开关 (1：开启，0：关闭)
      chatNewCountEnable: number
      // 新闻开关
      newsOpen: number
      // 新闻地址
      newsUrlAddress: string
      // 聊天室推送的最低下注金额备注：排行榜关闭时才生效;字段命名和旧平台保持一致
      chatMinBetMoney: string
      // 是否自动打开聊天室（0：不自动打开；1：自动打开）
      chatAutoConnect: string
      // 排行榜开关
      rankingOpen: string
      // 飞单是否开启 0:关闭,1-开启,默认0为关闭
      flyOpen: string
      // 第三方游戏开关
      thirdOpen: string
      // 第三方自动转账开关
      thirdTransferOpen: string
      // 是否开启邀请码注册(1：开启，0：关闭)
      enableInviteCode: string
      // 是否开启邀请码注册显示(1：开启，0：关闭)
      enableInviteCodeIsShow: string
      // 是否开启真实姓名检测(1：开启，0：关闭)
      enableWithdrawFullName: string
      // 是否开启取款密码(1：开启，0：关闭)
      enableWithdrawFundPwd: string
      // 是否开启微信检测(1：开启，0：关闭)
      enableWithdrawWechat: string
      // 是否开启QQ(1：开启，0：关闭)
      enableWithdrawQQ: string
      // 是否开启Email(1：开启，0：关闭)
      enableWithdrawEmail: string
      // 是否开启手机号(1：开启，0：关闭)
      enableWithdrawPhone: string
      // 是否开启提款FB检测(1：开启，0：关闭, null :关闭)
      enableWithdrawFacebook: string
      // 是否开启提款Zalo检测(1：开启，0：关闭, null :关闭)
      enableWithdrawZalo: string
      // 是否开启提款twitter检测(1：开启，0：关闭, null :关闭)
      enableWithdrawTwitter: string
      // 是否开启提款whatsApp检测(1：开启，0：关闭, null :关闭)
      enableWithdrawWhatsApp: string
      // 是否开启提款line检测(1：开启，0：关闭, null :关闭)
      enableWithdrawLine: string
      // 是否开启提款instagram检测(1：开启，0：关闭, null :关闭)
      enableWithdrawInstagram: string
      // 是否开启提款telegram检测(1：开启，0：关闭, null :关闭)
      enableWithdrawTelegram: string
      // 是否开启提款tiktok检测(1：开启，0：关闭, null :关闭)
      enableWithdrawTiktok: string
      // 运营状态 0：非直营，1：直营，2：外部接入
      opStatus: number
      // 是否开启短信验证码(1：开启，0：关闭)
      enableSmsValidCode: string
      // 短信验证码有效时间（分钟）
      smsValidTime: string
      // 返点比率
      rebateRatio: string
      // 是否开启Zalo(1：开启，0：关闭)
      enableZalo: string
      // 是否开启Facebook(1：开启，0：关闭)
      enableFacebook: string
      // 是否开启WhatsApp(1：开启，0：关闭)
      enableWhatsApp: string
      // 是否开启Telegram(1：开启，0：关闭)
      enableTelegram: string
      // 是否开启address(1：开启，0：关闭)
      enableAddress: string
      // 是否开启safeQuestion(1：开启，0：关闭)
      enableSafeQuestion: string
      // weixinQR
      weixinQR: string
      // zalo
      zalo: string
      // zaloQR
      zaloQR: string
      // zaloLink
      zaloLink: string
      // whatsApp
      whatsApp: string
      // whatsAppQR
      whatsAppQR: string
      // whatsAppLink
      whatsAppLink: string
      // facebook
      facebook: string
      // facebookQR
      facebookQR: string
      // facebookLink
      facebookLink: string
      // telegram
      telegram: string
      // telegramQR
      telegramQR: string
      // telegramLink
      telegramLink: string
      // viber
      viber: string
      // viberQR
      viberQR: string
      // viberLink
      viberLink: string
      // navigationUrl导航地址
      navigationUrl: string
      // 服务器时间
      serverTime: string
      // 聊天室的最高打赏金额
      rankingRewardAmount: string
      // 是否允许编辑提现信息， 0 禁止 1允许
      enableModifyBank: string
      // 体育动画接口
      sportAnimation: string
      // 体育赛事视频接口
      sportStream: string
      // 赛事直播源url
      liveUrl: string
      // 首頁真人直播源M3u8格式
      casinoBGMM3u8: string
      // 首頁真人直播開關 1：开启，0：关闭
      casinoBGMLiveEnabled: string
      // 首頁真人直播自動播放開關 1：开启，0：关闭
      casinoBGMLiveAutoPlayEnabled: string
      // 首頁真人直播聲音自動播放開關 1：开启，0：关闭
      casinoBGMLiveSoundEnabled: string
      // 首頁真人直播指定桌號跳轉
      casinoBGMPlayCode: string
      // 赛事分析源url
      analysisUrl: string
      // 小金直播refer地址
      referUrl: string
      // 前台预设下注金额配置
      presetBetAmount: any[]
      // 动画服务dataConfig参数
      animationDataConfig: string
      // 动画服务可用语系参数
      animationSupportLang: string
      // 前台球类排序（多个使用分号“;”分隔）
      ballSort: string
      // 三方遊戲排序排序（多个使用分号“;”分隔）
      thirdGamesSort: string
      // 没登入拿预设币种, 有登入拿用户币种 系统货币类型编码，例如 PHP，CNY，VND，USD，USDT等
      systemCurrency: string
      // 币种名称
      systemCurrencyName: string
      // 系统货币类型符号，例如 ，₱ ， ¥ ， $ , ₫
      systemCurrencySign: string
      // 进行所有三方游戏转换额度时的最低限额,ex:1000表示每次转换额度时最低限额
      thirdTransferUnit: number
      // 提现实名制验证开关 (1：开启，0：关闭， 默认是null:关闭)
      realNameWithdrawVerified: string
      // 最大设置下注金額(自我约束显示)
      perBetMaxAmount: string
      // 最小设置下注金額(自我约束显示)
      perBetMinAmount: string
      // 最小设定天数(自我约束显示)
      minFrozeDay: number
      // 自我约束开关 (1：开启，0：关闭， 默认是null:关闭)
      selfRestraintVerified: string
      // (新增银行卡/虚拟币), 更新银行卡密码, 更新用户密码, 设定真实姓名, 提款 手机验证开关 (1: 开启, 0:关闭， 默认是null:关闭)
      twoFactorVerified: string
      // 在线客服悬浮按钮开关 (1：开启，0：关闭 默认是null:关闭)
      customerFloating: string
      // ws地址，多个用逗号隔开
      wsHost: string
      // KYC认证开关(1：开启，0：关闭)
      enableKYCVerify: string
      // 额度锁定开关 (1：开启，0：关闭， 默认是null:关闭)
      enableLockBalance: string
      // 可用语系 (zh:中文,en:英文,vi:越南文,如要语系则使用逗号分隔,ex:en,zh)
      supportLanguage: string
      // 首次充值最小金额限制(0视为无设定)
      firstRechLessAmountLimit: string
      // 是否是信用站点(1：是，0：否)
      creditSystem: number
      // 是否启用投注站系统 0：停用，1：启用
      bettingStation: number
      // 加盟邮箱
      joinEmail: string
      // 加盟联系电话
      joinPhone: string
      // 是否开启生日(1：开启，0：关闭)
      enableBirthday: string
      // 是否开启薪资来源(1：开启，0：关闭)
      enableSalarySource: string
      // 是否开启身分证号(1：开启，0：关闭)
      enableIdentityNumber: string
      // 是否开启投注站(1：开启，0：关闭)
      enableBettingStation: string
      // 薪资来源列表
      salarySource: Array<{
        // No comments found.
        id: number
        // No comments found.
        name: string
      }>
      // 身分证件列表
      identityTypeList: Array<{
        // No comments found.
        id: number
        // No comments found.
        name: string
      }>
      // 安全问题选项列表
      safeQuestionList: Array<{
        // No comments found.
        id: number
        // No comments found.
        name: string
      }>
      // 前端展示的盘口（EU,HK,MY,ID）
      handicapShow: string
      // 加联系Skype
      contactSkype: string
      // 国家与币种是否需填(1: 是, 0: 否, 默认是null:关闭)
      enableNationCurrency: string
      // 国家币种列表
      nationCurrencyList: Array<{
        // 国家
        nationCode: string
        // 国家名称
        nationName: string
        // 币种列表
        currencyList: Array<{
          // 币种编码
          currency: string
          // 币种名称
          name: string
          // 系统货币类型符号，例如 ，₱ ， ¥ ， $ , ₫
          sign: string
        }>
        // 电话国码 ex: +86
        phoneCode: string
        // 平台使用主語系
        language: string
      }>
      // 未登入拿预设国家, 有登入拿用户国家
      nationCode: string
      // 未登入拿预设语系, 有登入拿用户语系
      lang: string
      // 充值实名制验证开关 (1：开启，0：关闭， 默认是null:关闭)
      realNameRechargeVerified: string
      // ID 上传证件数量 (默认是1，否则就是2)
      idUploadNumber: string
      // 赛事视频源
      matchLiveSource: string
      // 世界杯是否开启，1:开启 0:关闭
      worldCupOpen: number
      // 正在赛事直播的房间数量；
      liveCount: number
      // 直播聊天域名
      liveChatHost: string
      // 直播聊天室是否开启
      liveChatOpen: number
      // 是否将世界杯页面做为首页进入 1:开启 0:关闭
      specialCouponHome: number
      // 是否隐藏前台注册入口, 0:显示 1:隐藏, 预设显示
      registerHide: number
      // 是否显示SABA入口icon, 1:显示 0:隐藏
      sabaEnterIcon: number
      // 体育下注总开关
      sportsBettingOpen: number
      // 一般會員体育下注推送
      generalMemberSportsBettingPush: number
      // 测试账号体育下注推送
      testAccountSportsBettingPush: number
      // 体育下注最低推送金额
      sportsBettingMinimumPushAmount: string
      // 管理员体育下注推送
      adminSportsBettingPush: number
      // fiba世界杯籃球參數
      fibaConfig: {
        // 是否启用fiba篮球世界杯页面 1:开启 0:关闭
        fibaEnable: number
        // 是否展示fiba第三名赛事 1:开启 0:关闭
        fibaShow3rd: number
        // 是否展示fiba淘汰赛 1:开启 0:关闭
        fibaShowBracket: number
        // fiba 动态玩法 tab
        fibaDynamicList: Array<{
          // 赛季Id
          seasonId: string
          // 动态市场名称
          dynamicMarket: string
        }>
      }
      // 投注排行榜状态 (1：开启，0：关闭， 默认是null:关闭)
      gameRankStatus: number
      // 在线人数显示开关
      onlineUserOpen: number
      // 根据domain获取主推内容
      recommendContent: string
      // 根据domain获取底部入口
      footerEntries: any[]
      // 在线人数轮询时间(单位是分钟)
      onlineUserUpdatePeriod: number
      // 场馆游戏在线人数显示开关
      thirdGameOnlineUserOpen: number
      // 场馆游戏在线人数轮询时间(单位是分钟)
      thirdGameOnlineUserUpdatePeriod: number
      // (一般单注)欧洲赔率低于config(预设1.65)，那么有效投注为0，且不反水
      sportValidBetLimitEuConfig: string
      // Open Auth Info
      oauthInfo: {
        // No comments found.
        google: {
          // Google Open Auth 开关 PC&H5
          webEnabled: number
          // Google Open Auth 开关 Apple
          iosEnabled: number
          // Google Open Auth 开关 Android
          androidEnabled: number
          // Google Open Auth Client ID PC&H5
          webKey: string
          // Google Open Auth Client ID Apple
          iosKey: string
          // Google Open Auth Client ID Apple vip
          iosVipKey: string
          // Google Open Auth Client ID Android
          androidKey: string
          // Google Open Auth Client ID Android vip
          androidVipKey: string
        }
      }
      // thesports Config
      theSportsConfig: {
        // thesports 动画路径配置
        theSportsAnimationUrlSetting: Array<{
          // 球種
          gameType: string
          // theSports动画路径
          url: string
        }>
      }
      // 钱包类型 0:转帐钱包, 1:单一钱包
      walletType: number
      // 篮球末尾比分新玩法配置开关
      bkFinalScoreNewGameplaySwitch: string
      // 体育热门推荐 0:不显示 1:显示
      topSportReco: number
      // 是否开启欧洲杯专题页
      europeCupEnable: string
      // 未结算注单打印功能开关 (1：开启，0：关闭)
      printBetOpen: number
      // APP下载提示开关 (1：开启，0：关闭)
      appDownloadHintStatus: number
      // fb像素ID
      fbPixelId: string
      // google Tag Manager 像素ID
      googleTagManagerPixel: string
      // google Tag 像素ID
      googleTagPixel: string
      // google ads 像素ID
      googleAdsPixel: string
      // tiktok 像素ID
      tiktokPixel: string
      // appsflyer Id
      appsflyerId: string
      // s2s Id
      s2sId: string
      // 統計密鑰
      appsflyerKey: string
      // 代理模式显示设置 (negativeProfit：负盈利模式，pipeline：流水模式)使用逗号分隔,
      agentModeSetting: string
      // 技术支持展示
      techSupport: number
      // 技术支持列表
      techSupportList: Array<{
        // 名称
        name: string
        // mail
        mail: string
        // TG
        telegram: string
        // 静态资源路径
        picture: string
      }>
    }
  }
  // 53.首页未授权公共类（登录、登出、验证码、在线用户数、语言列表）: 53.27.获取配置信息
  type REQ = {
    // No comments found.
    inviteCode?: string
  }
}
// 53.首页未授权公共类（登录、登出、验证码、在线用户数、语言列表）: 53.28.获取动画地址
declare namespace API_INDEX_ANIMATION_JSON {
  // 53.首页未授权公共类（登录、登出、验证码、在线用户数、语言列表）: 53.28.获取动画地址
  type RES = {
    // No comments found.
    success: boolean
    // No comments found.
    msg: string
    // No comments found.
    code: number
    // No comments found.
    t: {
      // 数据源动画地址
      sportAnimation: string
    }
  }
}
// 53.首页未授权公共类（登录、登出、验证码、在线用户数、语言列表）: 53.29.发送登入装置验证讯息
declare namespace API_INDEX_SENDLOGINDEVICESMS {
  // 53.首页未授权公共类（登录、登出、验证码、在线用户数、语言列表）: 53.29.发送登入装置验证讯息
  type RES = {
    // No comments found.
    success: boolean
    // No comments found.
    msg: string
    // No comments found.
    code: number
  }
  // 53.首页未授权公共类（登录、登出、验证码、在线用户数、语言列表）: 53.29.发送登入装置验证讯息
  type REQ = {
    // 用户id（从x-seesion-token获取，无需传值）
    userId?: number
    // 平台id（从x-seesion-token获取，无需传值）
    platformId?: number
  }
}
// 53.首页未授权公共类（登录、登出、验证码、在线用户数、语言列表）: 53.30.登入装置讯息检验
declare namespace API_INDEX_VALIDATELOGINDEVICESMS {
  // 53.首页未授权公共类（登录、登出、验证码、在线用户数、语言列表）: 53.30.登入装置讯息检验
  type RES = {
    // No comments found.
    success: boolean
    // No comments found.
    msg: string
    // No comments found.
    code: number
  }
  // 53.首页未授权公共类（登录、登出、验证码、在线用户数、语言列表）: 53.30.登入装置讯息检验
  type REQ = {
    // 登入环境信息
    loginEnvInfo: string
    // 验证码
    validCode: string
    // 登录来源（0：WEB, 1：MOBILE_BROWSER, 2：ANDROID, 3：IOS）
    loginSrc: number
  }
}
// 53.首页未授权公共类（登录、登出、验证码、在线用户数、语言列表）: 53.31.发送双重验证讯息
declare namespace API_INDEX_SENDTWOFACTOR {
  // 53.首页未授权公共类（登录、登出、验证码、在线用户数、语言列表）: 53.31.发送双重验证讯息
  type RES = {
    // No comments found.
    success: boolean
    // No comments found.
    msg: string
    // No comments found.
    code: number
  }
  // 53.首页未授权公共类（登录、登出、验证码、在线用户数、语言列表）: 53.31.发送双重验证讯息
  type REQ = {
    // 用户id（从x-seesion-token获取，无需传值）
    userId?: number
    // 平台id（从x-seesion-token获取，无需传值）
    platformId?: number
  }
}
// 53.首页未授权公共类（登录、登出、验证码、在线用户数、语言列表）: 53.32.双重验证校验
declare namespace API_INDEX_VALIDATETWOFACTOR {
  // 53.首页未授权公共类（登录、登出、验证码、在线用户数、语言列表）: 53.32.双重验证校验
  type RES = {
    // No comments found.
    success: boolean
    // No comments found.
    msg: string
    // No comments found.
    code: number
  }
  // 53.首页未授权公共类（登录、登出、验证码、在线用户数、语言列表）: 53.32.双重验证校验
  type REQ = {
    // 短信验证码
    securityCode: string
  }
}
// 53.首页未授权公共类（登录、登出、验证码、在线用户数、语言列表）: 53.33.获取用户ip对应国家
declare namespace API_INDEX_USERIPCOUNTRY {
  // 53.首页未授权公共类（登录、登出、验证码、在线用户数、语言列表）: 53.33.获取用户ip对应国家
  type RES = {
    // No comments found.
    success: boolean
    // No comments found.
    msg: string
    // No comments found.
    code: number
    // No comments found.
    t: {
      // 国家代码
      code: string
      // 语言 zh:简体中文, en:英文, vi:越南文
      language: string
    }
  }
}
// 53.首页未授权公共类（登录、登出、验证码、在线用户数、语言列表）: 53.34.前端调用接口 - 用来判断okbet9首页 是否调用判断的登录页
declare namespace API_INDEX_GETOPENNATIONBYIP {
  // 53.首页未授权公共类（登录、登出、验证码、在线用户数、语言列表）: 53.34.前端调用接口 - 用来判断okbet9首页 是否调用判断的登录页
  type RES = {
    // No comments found.
    success: boolean
    // No comments found.
    msg: string
    // No comments found.
    code: number
    // No comments found.
    t: {
      // 返回IP
      ip: string
      // 返回的国家
      country: string
      // 返回国家编码
      nationCode: string
      // 返回的城市
      city: string
      // 显示新页面true 不显示false
      isRedirect: boolean
    }
  }
}
// 53.首页未授权公共类（登录、登出、验证码、在线用户数、语言列表）: 53.35.判断会员ip是否在可见的国家中(APP上架商店审核用), true:可见, false:不可见
declare namespace API_INDEX_GETISAVAILABLECOUNTRYIP {
  // 53.首页未授权公共类（登录、登出、验证码、在线用户数、语言列表）: 53.35.判断会员ip是否在可见的国家中(APP上架商店审核用), true:可见, false:不可见
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
}
// 54.用户信用接口: 54.1.取得会员当前进行中的周期
declare namespace API_USER_CREDIT_CIRCLE_CURRENT {
  // 54.用户信用接口: 54.1.取得会员当前进行中的周期
  type RES = {
    // No comments found.
    success: boolean
    // No comments found.
    msg: string
    // No comments found.
    code: number
    // No comments found.
    t: {
      // 用户信用周期id
      id: number
      // 会员id
      userId: number
      // 用户名
      userName: string
      // 周期开始时间(后端服务器+8时区)
      beginTime: string
      // 周期结束时间(后端服务器+8时区)
      endTime: string | number
      // 當期信用额度
      creditBalance: number
      // 结帐日的用户馀额
      balance: number
      // 當期輸贏金額
      reward: number
      // 周期狀態:0-未开始，1-进行中，2-未结算，3已结算
      status: number
      // 结算日期(后端服务器+8时区)
      statDate: string
      // 备注
      remark: string
      // 平台id
      platformId: number
      // 伺服器时间
      serverTime: number
    }
  }
  // 54.用户信用接口: 54.1.取得会员当前进行中的周期
  type REQ = {
    // 用户id（从x-seesion-token获取，无需传值）
    userId?: number
    // 平台id（从x-seesion-token获取，无需传值）
    platformId?: number
  }
}
// 54.用户信用接口: 54.2.取得会员历史周期
declare namespace API_USER_CREDIT_CIRCLE_HISTORY {
  // 54.用户信用接口: 54.2.取得会员历史周期
  type RES = {
    // No comments found.
    success: boolean
    // No comments found.
    msg: string
    // No comments found.
    code: number
    // No comments found.
    rows: Array<{
      // 用户信用周期id
      id: number
      // 会员id
      userId: number
      // 用户名
      userName: string
      // 周期开始时间(后端服务器+8时区)
      beginTime: string
      // 周期结束时间(后端服务器+8时区)
      endTime: string | number
      // 當期信用额度
      creditBalance: number
      // 结帐日的用户馀额
      balance: number
      // 當期輸贏金額
      reward: number
      // 周期狀態:0-未开始，1-进行中，2-未结算，3已结算
      status: number
      // 结算日期(后端服务器+8时区)
      statDate: string
      // 备注
      remark: string
      // 平台id
      platformId: number
      // 伺服器时间
      serverTime: number
    }>
    // 伺服器时间
    serverTime: number
    // No comments found.
    total: number
    // No comments found.
    other: {
      // 用户信用周期id
      id: number
      // 会员id
      userId: number
      // 用户名
      userName: string
      // 周期开始时间(后端服务器+8时区)
      beginTime: string
      // 周期结束时间(后端服务器+8时区)
      endTime: string | number
      // 當期信用额度
      creditBalance: number
      // 结帐日的用户馀额
      balance: number
      // 當期輸贏金額
      reward: number
      // 周期狀態:0-未开始，1-进行中，2-未结算，3已结算
      status: number
      // 结算日期(后端服务器+8时区)
      statDate: string
      // 备注
      remark: string
      // 平台id
      platformId: number
      // 伺服器时间
      serverTime: number
    }
  }
  // 54.用户信用接口: 54.2.取得会员历史周期
  type REQ = {
    // 当前页
    page?: number
    // 每页条数
    pageSize?: number
    // No comments found.
    userName?: string
    // No comments found.
    minCreditBalance?: number
    // No comments found.
    maxCreditBalance?: number
    // No comments found.
    status?: number
    // No comments found.
    minReward?: number
    // No comments found.
    maxReward?: number
  }
}
// 55.反馈信息: 55.1.反馈列表
declare namespace API_FEEDBACK_QUERYLIST {
  // 55.反馈信息: 55.1.反馈列表
  type RES = {
    // No comments found.
    success: boolean
    // No comments found.
    msg: string
    // No comments found.
    code: number
    // No comments found.
    rows: Array<{
      // 主键
      id: number
      // 用户主键
      userId: number
      // 用户名
      userName: string
      // 平台id
      platformId: number
      // 反馈码
      feedbackCode: string
      // 类型（0-充值问题，1-提款问题，2-其他问题，3-提交建议，4-我要投诉, 5-客服反馈，6-玩家回复）
      type: number
      // 反馈内容
      content: string
      // 添加时间
      addTime: string
      // 最后反馈时间
      lastFeedbackTime: string
      // 状态（0:待反馈，1:已反馈）
      status: number
      // 问题轮次，首次问题为0，接下来的回复或者问题补充在此基础上+1
      track: number
    }>
    // 问题轮次，首次问题为0，接下来的回复或者问题补充在此基础上+1
    track: number
    // No comments found.
    total: number
  }
  // 55.反馈信息: 55.1.反馈列表
  type REQ = {
    // 当前页
    page?: number
    // 每页条数
    pageSize?: number
    // 开始时间（时间戳）
    startTime?: string | number
    // 结束时间（时间戳）
    endTime?: string | number
    // 用户id
    userId?: number
    // 用户名
    userName?: string
    // 平台id
    platformId?: number
    // 反馈码
    feedbackCode?: string
    // 类型（0-充值问题，1-提款问题，2-其他问题，3-提交建议，4-我要投诉, 5-客服反馈，6-玩家回复, 10-开奖网信息反馈）
    type?: number
    // 状态（0:待反馈，1:已反馈）
    status?: number
  }
}
// 55.反馈信息: 55.2.提交反馈信息
declare namespace API_FEEDBACK_SAVE {
  // 55.反馈信息: 55.2.提交反馈信息
  type RES = {
    // No comments found.
    success: boolean
    // No comments found.
    msg: string
    // No comments found.
    code: number
  }
  // 55.反馈信息: 55.2.提交反馈信息
  type REQ = {
    // 类型（0-充值问题，1-提款问题，2-其他问题，3-提交建议，4-我要投诉, 5-客服反馈，6-玩家回复）
    type: number
    // 反馈内容
    content: string
    // 状态（0:待反馈，1:已反馈）
    status: number
  }
}
// 55.反馈信息: 55.3.回复反馈信息
declare namespace API_FEEDBACK_REPLY {
  // 55.反馈信息: 55.3.回复反馈信息
  type RES = {
    // No comments found.
    success: boolean
    // No comments found.
    msg: string
    // No comments found.
    code: number
  }
  // 55.反馈信息: 55.3.回复反馈信息
  type REQ = {
    // 反馈码
    feedbackCode: string
    // 类型（0-充值问题，1-提款问题，2-其他问题，3-提交建议，4-我要投诉, 5-客服反馈，6-玩家回复）
    type: number
    // 反馈内容
    content: string
    // 状态（0:待反馈，1:已反馈）
    status: number
  }
}
// 55.反馈信息: 55.4.获取反馈详情
declare namespace API_FEEDBACK_QUERYDETAIL_ID {
  // 55.反馈信息: 55.4.获取反馈详情
  type RES = {
    // No comments found.
    success: boolean
    // No comments found.
    msg: string
    // No comments found.
    code: number
    // No comments found.
    rows: Array<{
      // 主键
      id: number
      // 用户主键
      userId: number
      // 用户名
      userName: string
      // 平台id
      platformId: number
      // 反馈码
      feedbackCode: string
      // 类型（0-充值问题，1-提款问题，2-其他问题，3-提交建议，4-我要投诉, 5-客服反馈，6-玩家回复）
      type: number
      // 反馈内容
      content: string
      // 添加时间
      addTime: string
      // 最后反馈时间
      lastFeedbackTime: string
      // 状态（0:待反馈，1:已反馈）
      status: number
      // 问题轮次，首次问题为0，接下来的回复或者问题补充在此基础上+1
      track: number
    }>
    // 问题轮次，首次问题为0，接下来的回复或者问题补充在此基础上+1
    track: number
    // No comments found.
    total: number
  }
  // 55.反馈信息: 55.4.获取反馈详情
  type REQ = {
    // No comments found.
    id: number
    // 用户id（从x-seesion-token获取，无需传值）
    userId?: number
    // 平台id（从x-seesion-token获取，无需传值）
    platformId?: number
  }
}
// 56.红包雨相关接口: 56.1.获取当前可以抢的红包雨
declare namespace API_REDENP_RAIN_INFO {
  // 56.红包雨相关接口: 56.1.获取当前可以抢的红包雨
  type RES = {
    // No comments found.
    success: boolean
    // No comments found.
    msg: string
    // No comments found.
    code: number
    // No comments found.
    t: {
      // 主键 红包id
      redenpId: number
      // 红包雨开始时间
      redenpStartTime: string
      // 红包雨结束时间
      redenpEndTime: string
      // 服务器系统时间（毫秒）
      serverTime: number
      // 小游戏列表
      games: Array<{
        // id主键
        id: number
        // 一级分类
        gameCategory: string
        // 二级分类名称
        typeName: string
        // 二级分类代码
        typeCode: string
        // 所属第三方
        firmType: string
        // 第三方游戏编码
        firmCode: string
        // 游戏编码
        playCode: string
        // 预留字段
        gameCode: string
        // 具体游戏
        gameType: string
        // 游戏中文名
        chineseName: string
        // 游戏英文名
        englishName: string
        // 图片
        imageName: string
        // 支持手机端（0：支持，1：不支持）
        isH5: number
        // 支持电脑端（0:支持，1：不支持）
        isFlash: number
        // 手机端图片名称
        h5ImageName: string
        // 二级分类排序
        categorySort: number
        // 二级分类id
        gameCategorySecondId: number
        // 游戏排序
        sort: number
        // 是否热门,0-否，1-是
        isHot: number
        // 是否ON原创,0-否，1-是
        isOnOri: number
        // 开关状态,0-关闭，1-开启
        open: number
        // 系统开关状态 0-關閉 1-开启，2-维护
        sysOpen: number
        // 平台id
        platformId: number
        // 厂商名称
        firmShowName: string
        // 游戏厂商id
        gameFirmId: number
        // 状态 0:停用, 1:启用
        status: number
        // min return to player rate
        minRtpRate: number
        // max return to player rate
        maxRtpRate: number
        // min hit rate
        minHitRate: number
        // max hit rate
        maxHitRate: number
        // tag id
        tagIds: any[]
        // tags
        tags: Array<{
          // 主键
          id: number
          // 标签名称
          name: string
          // 标签说明
          description: string
          // 状态 0:关 1:开
          status: number
        }>
        // 星期几(彩票小游戏用)
        lotteryDaily: string
        // 游戏分类(彩票小游戏用)
        gameCate: string
        // 游戏分类代码(彩票小游戏用)
        gameCateCode: string
        // 在线用户数
        onlineUserCount: number
        // 是否是二級分類遊戲 0:否 1:是
        isSecond: number
      }>
    }
  }
  // 56.红包雨相关接口: 56.1.获取当前可以抢的红包雨
  type REQ = {
    // No comments found.
    platformId?: number
  }
}
// 56.红包雨相关接口: 56.2.红包雨抢包
declare namespace API_REDENP_RAIN_GRAB_REDENPID {
  // 56.红包雨相关接口: 56.2.红包雨抢包
  type RES = {
    // No comments found.
    success: boolean
    // No comments found.
    msg: string
    // No comments found.
    code: number
    // No comments found.
    t: {
      // 抢包金额
      grabMoney: number
      // 红包雨设置打码量
      betMoney: number
      // 用户实际打码量
      userBetMoney: number
    }
  }
  // 56.红包雨相关接口: 56.2.红包雨抢包
  type REQ = {
    // 用户id（从x-seesion-token获取，无需传值）
    userId?: number
    // 平台id（从x-seesion-token获取，无需传值）
    platformId?: number
    // No comments found.
    redEnpId: number
  }
}
// 57.代理注册、验证码: 57.1.获取验证码
declare namespace API_INDEX_AGENT_GETVALIDATECODE {
  // 57.代理注册、验证码: 57.1.获取验证码
  type RES = {
    // No comments found.
    success: boolean
    // No comments found.
    msg: string
    // No comments found.
    code: number
    // No comments found.
    t: {
      // 标识符，登录或再次请求验证码时，需要携带回去
      identity: string
      // 验证码图片的二进制URL编码字符串
      img: string
    }
  }
  // 57.代理注册、验证码: 57.1.获取验证码
  type REQ = {
    // 上一次请求的验证码标识，非必传，主要用于清除redis缓存
    lastIdentity?: string
  }
}
// 57.代理注册、验证码: 57.2.代理注册
declare namespace API_INDEX_AGENT_REGISTER {
  // 57.代理注册、验证码: 57.2.代理注册
  type RES = {
    // No comments found.
    success: boolean
    // No comments found.
    msg: string
    // No comments found.
    code: number
  }
  // 57.代理注册、验证码: 57.2.代理注册
  type REQ = {
    // 用户名，校验格式：由字母、数字、下划线组成。长度4到16位。
    userName: string
    // 密码，md5(明文)，校验格式：32位md5值
    password: string
    // 全名，银行卡上的真实名称，校验格式：只能为2~20个汉字或小数点
    fullName: string
    // 邮箱，校验格式：邮箱格式
    email?: string
    // 电话，校验格式：数字
    phone?: string
    // QQ，校验格式：5~20位数字
    qq?: string
    // 上级代理id（如果没有，则默认注册到默认代理下）
    superId?: number
    // 资金密码,规则：md5(明文)，校验格式：32位md5值
    fundPwd?: string
    // 推荐人用户id
    recoUserId?: number
    // 登录来源，WEB(0), MOBILE_BROWSER(1), ANDROID(2), IOS(3);
    loginSrc?: number
    // 验证码标识（获取验证码时，有返回标识）
    validCodeIdentity?: string
    // 验证码
    validCode?: string
    // 国家
    nationCode?: string
    // 币种
    currency?: string
  }
}
// 58.飞单登录: 58.1.飞单登录
declare namespace API_FLY_LOGIN {
  // 58.飞单登录: 58.1.飞单登录
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
  // 58.飞单登录: 58.1.飞单登录
  type REQ = {
    // 用户id（从x-seesion-token获取，无需传值）
    userId?: number
    // 平台id（从x-seesion-token获取，无需传值）
    platformId?: number
  }
}
// 59.用户信息: 59.1.获取公告 isRead
declare namespace API_USER_MESSAGE_LIST {
  // 59.用户信息: 59.1.获取公告 isRead
  type RES = {
    // No comments found.
    success: boolean
    // No comments found.
    msg: string
    // No comments found.
    code: number
    // No comments found.
    rows: Array<{
      // 主键
      id: number
      // 内容
      message: string
      // 类型：1: 投注区底部公告 ,2: 登录弹窗公告 , 3: 未登录弹窗
      type: number
      // 消息类型：1：游戏公告，2：会员福利，3：转账须知，4：劲爆推荐，5：导航网，6：其他
      msgType: number
      // 添加时间
      addTime: string
      // 标题
      title: string
      // 更新时间
      updateTime: string
      // 用户充值层级
      rechLevels: string
      // 排序
      sort: number
      // 是否已读 0未读 1已读
      isRead: number
      // 画面显示类型：1: 系統 ,2: 平台 ,3: 游戏
      messageType: number
    }>
    // 画面显示类型：1: 系統 ,2: 平台 ,3: 游戏
    messageType: number
    // No comments found.
    total: number
  }
  // 59.用户信息: 59.1.获取公告 isRead
  type REQ = {
    // 画面显示类型：1: 系統 ,2: 平台 ,3: 游戏
    messageType?: number
    // 当前页
    page?: number
    // 每页条数
    pageSize?: number
    // No comments found.
    platformId?: number
  }
}
// 59.用户信息: 59.2.记录已读状态
declare namespace API_USER_MESSAGE_READED_ID {
  // 59.用户信息: 59.2.记录已读状态
  type RES = {
    // No comments found.
    success: boolean
    // No comments found.
    msg: string
    // No comments found.
    code: number
  }
  // 59.用户信息: 59.2.记录已读状态
  type REQ = {
    //  公告id
    id: number
    // 用户id（从x-seesion-token获取，无需传值）
    userId?: number
    // 平台id（从x-seesion-token获取，无需传值）
    platformId?: number
  }
}
// 59.用户信息: 59.3.记录已读状态
declare namespace API_USER_MESSAGE_ALLREADIED {
  // 59.用户信息: 59.3.记录已读状态
  type RES = {
    // No comments found.
    success: boolean
    // No comments found.
    msg: string
    // No comments found.
    code: number
  }
  // 59.用户信息: 59.3.记录已读状态
  type REQ = {
    // 用户id（从x-seesion-token获取，无需传值）
    userId?: number
    // 平台id（从x-seesion-token获取，无需传值）
    platformId?: number
  }
}
// 60.活动信息接口: 60.1.取得会员可参与的活动列表
declare namespace API_V2_ACTIVITY_LIST {
  // 60.活动信息接口: 60.1.取得会员可参与的活动列表
  type RES = {
    // No comments found.
    success: boolean
    // No comments found.
    msg: string
    // No comments found.
    code: number
    // No comments found.
    rows: Array<{
      // 活動id
      id: number
      // 平台id
      platformId: number
      // 活动名称
      name: string
      // 活动内容注释
      description: string
      // 活动开关:0-关闭，1-开启
      status: number
      // 活动总额
      totalAmount: number
      // 活动总数量
      totalCount: number
      // 活动开始时间
      beginTime: string
      // 活动结束时间
      endTime: string | number
      // 活動打水倍数
      multiple: number
      // pc标题图片
      pcTitleImg: string
      // pc内容图片
      pcContentImg: string
      // h5标题图片
      h5TitleImg: string
      // h5内容图片
      h5ContentImg: string
      // 活动已派奖总额
      rewardAmount: number
      // 活动已派奖总数
      rewardCount: number
      // 圖片域名
      serverHost: string
    }>
    // 圖片域名
    serverHost: string
    // No comments found.
    total: number
  }
}
// 60.活动信息接口: 60.2.领取奖项
declare namespace API_V2_ACTIVITY_AWARD {
  // 60.活动信息接口: 60.2.领取奖项
  type RES = {
    // No comments found.
    success: boolean
    // No comments found.
    msg: string
    // No comments found.
    code: number
    // No comments found.
    t: {
      // 派奖金额
      rewardMoney: number
      // 派奖状态：0-未派奖，1-已派奖
      status: number
      // 讯息
      msg: string
    }
  }
  // 60.活动信息接口: 60.2.领取奖项
  type REQ = {
    // 活动ID
    activityId?: number
  }
}
// 60.活动信息接口: 60.3.取得活动詳情
declare namespace API_V2_ACTIVITY_ACTIVITYID {
  // 60.活动信息接口: 60.3.取得活动詳情
  type RES = {
    // No comments found.
    success: boolean
    // No comments found.
    msg: string
    // No comments found.
    code: number
    // No comments found.
    t: {
      // 活動id
      id: number
      // 平台id
      platformId: number
      // 活动名称
      name: string
      // 活动内容注释
      description: string
      // 活动开关:0-关闭，1-开启
      status: number
      // 活动总额
      totalAmount: number
      // 活动总数量
      totalCount: number
      // 活动开始时间
      beginTime: string
      // 活动结束时间
      endTime: string | number
      // 活動打水倍数
      multiple: number
      // pc标题图片
      pcTitleImg: string
      // pc内容图片
      pcContentImg: string
      // h5标题图片
      h5TitleImg: string
      // h5内容图片
      h5ContentImg: string
      // 活动已派奖总额
      rewardAmount: number
      // 活动已派奖总数
      rewardCount: number
      // 圖片域名
      serverHost: string
    }
  }
  // 60.活动信息接口: 60.3.取得活动詳情
  type REQ = {
    // No comments found.
    activityId: number
  }
}
// 61.用户信息: 61.1.获取用户信息
declare namespace API_USER_INFO {
  // 61.用户信息: 61.1.获取用户信息
  type RES = {
    // No comments found.
    success: boolean
    // No comments found.
    msg: string
    // No comments found.
    code: number
    // No comments found.
    t: {
      // 主键
      userId: number
      // 用户名
      userName: string
      // 全名，银行卡上的真实名称
      fullName: string
      // 角色id
      roleId: number
      // 用户类型（"ADMIN"：超管；"ZDL"：总代理；"DL"：代理；"HY"：会员；"ZZH"：子账户）
      userType: string
      // 上级代理id
      superId: number
      // 上级用户名
      superUserName: string
      // 平台id
      platformId: number
      // 平台编码
      platformCode: string
      // 用户等级id
      userLevelId: number
      // 生日
      birthday: string
      // 身份证
      identityNumber: string
      // 身份证件类型
      identityType: number
      // 投注站编号
      bettingStationId: number
      // 投注站编号(code, 显示用)
      bettingStationCode: string
      // 投注站编号(name, 显示用)
      bettingStationName: string
      // 薪资来源
      salarySource: number
      // 邮箱
      email: string
      // QQ
      qq: string
      // 电话
      phone: string
      // 昵称
      nickName: string
      // 微信
      wechat: string
      // 是否需要更新密码: 0 不用，1 需要
      updatePw: number
      // 是否需要更新资金密码: 0 不用，1 需要
      updatePayPw: number
      // 头像地址
      iconUrl: string
      // 当前登录IP
      loginIp: string
      // 当前登录时间
      loginTime: string
      // 上次登录IP
      lastLoginIp: string
      // 上次登录时间
      lastLoginTime: string
      // 测试试玩账号类型：0-普通账号，2-内部测试账号，1-游客
      testFlag: number
      // 是否设置过昵称 0单标未设置过 1代表设置过
      setted: number
      // 用户返点列表
      userRebateList: Array<{
        // 类别名称
        gameCate: string
        // 类别id
        cateId: number
        // 返点
        rebate: number
      }>
      // 银行卡名称
      bankName: string
      // 开户行地址
      subAddress: string
      // 卡号
      cardNo: string
      // zalo
      zalo: string
      // facebook
      facebook: string
      // whatsapp
      whatsapp: string
      // telegram
      telegram: string
      // line
      line: string
      // instagram
      instagram: string
      // tiktok
      tiktok: string
      // twitter
      twitter: string
      // google
      google: string
      // google bind status
      googleStatus: boolean
      // remark
      remark: string
      // 隐藏标记 0 不隐藏 1隐藏
      hideFlag: number
      // 用户成长值
      growth: number
      // 存款金额
      rechMoney: number
      // 取现金额
      uwMoney: number
      // 赔率折扣,画面展示之赔率需扣除本金1之后乘以此值,显示至小数点第二位,第三位以后四舍五入,再将本金的1与计算的赔率相加后展示在画面上ex:odds=1.9,discount=0.5, 画面展示赔率=(1.9-1) * (0.5) +1 = 1.45目前多了依照球種去區分, 請以 /user/info 接口內 discountByGameTypeList 為準
      discount: number
      // 是否通过实名验证,0:未通过 1:已通过 2:验证中 3:验证失败
      verified: number
      // 会员对应vip层级的单注最大下注额,下注金额不可超过此参数
      maxBetMoney: number
      // 会员对应vip层级的串关最大下注额,下注金额不可超过此参数
      maxParlayBetMoney: number
      // 会员对应vip层级的单注冠军最大下注额,下注金额不可超过此参数
      maxCpBetMoney: number
      // 会员最大赔付额, 0 为无需限制目前多了依照球種去區分, 請以 /bet/info 接口內maxPayout為準
      maxPayout: number
      // 设备验证状态 0:未验证 1:已验证
      deviceValidateStatus: number
      // 每次下注金额限制
      perBetLimit: number
      // 省(state)
      province: string
      // 城市
      city: string
      // 郵遞區號
      zipCode: string
      // 用户地址
      address: string
      // 安全问题类型
      safeQuestionType: number
      // 安全问题
      safeQuestion: string
      // 锁定额度限制解锁时间
      uwEnableTime: string
      // 首充时间
      firstRechTime: string
      // 币别
      currency: string
      // 币别名称
      currencyName: string
      // 国家
      nationCode: string
      // 语言
      lang: string
      // 银行卡资讯
      userBankList: Array<{
        // 卡号id
        id: number
        // 用户id
        userId: number
        // uw_type bank: 银行卡名称 ali支付宝名称 wx微信号名称 crypto虚拟币协议如(ERC20-USDT)
        bankName: string
        // 开户行地址
        subAddress: string
        // uw_type bank卡号 crypto虚拟币钱包地址
        cardNo: string
        // 添加时间
        addTime: string
        // 修改时间
        updateTime: string
        // 平台id
        platformId: number
        // 提款类型银行卡 bankTransfer虚拟币 cryptoTransfer
        uwType: string
        // 银行代码
        bankCode: string
        // 提款卡状态 1:正常 2:前台刪除(前台隱藏)
        status: number
      }>
      // 会员水位值
      margin: number
      // No comments found.
      liveSyncUserInfoVO: {
        // 平台用户ID
        platUserId: number
        // 平台用户名
        userName: string
        // 昵称
        nickName: string
        // 平台编码
        platformCode: string
        // 测试试玩账号类型：0-普通账号，2-内部测试账号，1-游客
        testFlag: number
        // 头像地址
        iconUrl: string
        // 时间戳
        timestamp: number
        // 签名
        sign: string
      }
      // 手机号前缀国码
      phoneNationCode: string
      // 邀请好友串
      inviteStr: string
      // 邀请好友Url
      inviteUrl: string
      // 等级
      levelCode: string
      // 用户层级賠率折扣根据球种分類
      discountByGameTypeList: Array<{
        // 赔率折扣,画面展示之赔率需扣除本金1之后乘以此值,显示至小数点第二位,第三位以后四舍五入,再将本金的1与计算的赔率相加后展示在画面上ex:odds=1.9,discount=0.5, 画面展示赔率=(1.9-1) * (0.5) +1 = 1.45赔率折扣
        discount: number
        // 單一球种 (一個VO一個球種)
        gameType: string
      }>
      // 名
      firstName: string
      // 中间名
      middleName: string
      // 姓
      lastName: string
      // 拒绝备注
      rejectRemark: string
    }
  }
  // 61.用户信息: 61.1.获取用户信息
  type REQ = {
    // 用户id（从x-seesion-token获取，无需传值）
    userId?: number
    // 平台id（从x-seesion-token获取，无需传值）
    platformId?: number
  }
}
// 61.用户信息: 61.2.获取余额
declare namespace API_USER_MONEY {
  // 61.用户信息: 61.2.获取余额
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
  // 61.用户信息: 61.2.获取余额
  type REQ = {
    // 用户id（从x-seesion-token获取，无需传值）
    userId?: number
    // 平台id（从x-seesion-token获取，无需传值）
    platformId?: number
  }
}
// 61.用户信息: 61.3.更新密码
declare namespace API_USER_UPDATEPWD {
  // 61.用户信息: 61.3.更新密码
  type RES = {
    // No comments found.
    success: boolean
    // No comments found.
    msg: string
    // No comments found.
    code: number
  }
  // 61.用户信息: 61.3.更新密码
  type REQ = {
    // 用户id
    userId: number
    // 平台id，非必填
    platformId: number
    // 旧密码
    oldPassword: string
    // 新密码
    newPassword: string
  }
}
// 61.用户信息: 61.4.更新资金密码
declare namespace API_USER_UPDATEFUNDPWD {
  // 61.用户信息: 61.4.更新资金密码
  type RES = {
    // No comments found.
    success: boolean
    // No comments found.
    msg: string
    // No comments found.
    code: number
  }
  // 61.用户信息: 61.4.更新资金密码
  type REQ = {
    // 用户id
    userId: number
    // 平台id，非必填
    platformId: number
    // 旧密码
    oldPassword: string
    // 新密码
    newPassword: string
  }
}
// 61.用户信息: 61.5.设置用户真实名称
declare namespace API_USER_FULLNAME {
  // 61.用户信息: 61.5.设置用户真实名称
  type RES = {
    // No comments found.
    success: boolean
    // No comments found.
    msg: string
    // No comments found.
    code: number
  }
  // 61.用户信息: 61.5.设置用户真实名称
  type REQ = {
    // 真实名称，银行卡上的真实名称，校验格式：只能为2~20个汉字或小数点
    fullName: string
  }
}
// 61.用户信息: 61.6.更新昵称
declare namespace API_USER_EDITNICKNAME {
  // 61.用户信息: 61.6.更新昵称
  type RES = {
    // No comments found.
    success: boolean
    // No comments found.
    msg: string
    // No comments found.
    code: number
  }
  // 61.用户信息: 61.6.更新昵称
  type REQ = {
    // 昵称
    nickName?: string
  }
}
// 61.用户信息: 61.7.更新头像
declare namespace API_USER_EDITICONURL {
  // 61.用户信息: 61.7.更新头像
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
  // 61.用户信息: 61.7.更新头像
  type REQ = {
    // 图片路径图片上传接口：- projectCode(必填) 固定传 cx_sports- platformCode(必填) 固定传 平台id/img- expireAfterDays(必填) 固定传 0- userId (必填)- file(必传)
    path?: string
  }
}
// 61.用户信息: 61.8.设置提款资料
declare namespace API_USER_SETWDUSERINFO {
  // 61.用户信息: 61.8.设置提款资料
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
  // 61.用户信息: 61.8.设置提款资料
  type REQ = {
    // 全名，银行卡上的真实名称，校验格式：只能为2~20个汉字或小数点
    fullName?: string
    // 邮箱，校验格式：邮箱格式
    email?: string
    // 电话，校验格式：数字
    phone?: string
    // QQ，校验格式：5~20位数字
    qq?: string
    // 微信，
    wechat?: string
    // facebook
    facebook?: string
    // zalo
    zalo?: string
    // whatsapp
    whatsapp?: string
    // telegram
    telegram?: string
    // line
    line?: string
    // instagram
    instagram?: string
    // tiktok
    tiktok?: string
    // twitter
    twitter?: string
    // No comments found.
    userId?: number
  }
}
// 61.用户信息: 61.9.设置充值资料
declare namespace API_USER_SETRECHARGEINFO {
  // 61.用户信息: 61.9.设置充值资料
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
  // 61.用户信息: 61.9.设置充值资料
  type REQ = {
    // 全名，银行卡上的真实名称，校验格式：只能为2~20个汉字或小数点
    fullName?: string
    // No comments found.
    userId?: number
  }
}
// 61.用户信息: 61.10.上传证件
declare namespace API_USER_UPLOADVERIFYPHOTO {
  // 61.用户信息: 61.10.上传证件
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
  // 61.用户信息: 61.10.上传证件
  type REQ = {
    // 证件照片路径图片路径图片上传接口：
    identityPhoto: string
    // 证件类型
    identityType: number
    // 身份证号
    identityNumber: string
    // 备用证件照片(备用有效证件照片)
    identityPhotoBackup?: string
    // 备用身份证件类型
    identityTypeBackup?: number
    // 备用身份证
    identityNumberBackup?: string
    // 实名认证照片1实名认证照片1(视频截图1)
    verifyPhoto1?: string
    // 实名认证照片2实名认证照片2(视频截图2)
    verifyPhoto2?: string
    // No comments found.
    firstName?: string
    // No comments found.
    middleName?: string
    // No comments found.
    lastName?: string
    // 生日
    birthday?: string
  }
}
// 61.用户信息: 61.11.会员变更为冻结状态
declare namespace API_USER_SETFROZE {
  // 61.用户信息: 61.11.会员变更为冻结状态
  type RES = {
    // No comments found.
    success: boolean
    // No comments found.
    msg: string
    // No comments found.
    code: number
  }
  // 61.用户信息: 61.11.会员变更为冻结状态
  type REQ = {
    // 自我约束天数
    frozeDay?: number
  }
}
// 61.用户信息: 61.12.会员设定生日
declare namespace API_USER_SETBIRTHDAY {
  // 61.用户信息: 61.12.会员设定生日
  type RES = {
    // No comments found.
    success: boolean
    // No comments found.
    msg: string
    // No comments found.
    code: number
  }
  // 61.用户信息: 61.12.会员设定生日
  type REQ = {
    // 日期格式yyyy/MM/dd
    birthday: string
  }
}
// 61.用户信息: 61.13.会员设置每次下注金额限制
declare namespace API_USER_SETPERBETLIMIT {
  // 61.用户信息: 61.13.会员设置每次下注金额限制
  type RES = {
    // No comments found.
    success: boolean
    // No comments found.
    msg: string
    // No comments found.
    code: number
  }
  // 61.用户信息: 61.13.会员设置每次下注金额限制
  type REQ = {
    // 每次下注金额限制
    perBetLimit?: number
  }
}
// 61.用户信息: 61.14.取得双重验证状态 (success: true 验证成功, false 需重新验证手机)
declare namespace API_USER_GETTWOFACTORVALIDATESTATUS {
  // 61.用户信息: 61.14.取得双重验证状态 (success: true 验证成功, false 需重新验证手机)
  type RES = {
    // No comments found.
    success: boolean
    // No comments found.
    msg: string
    // No comments found.
    code: number
  }
  // 61.用户信息: 61.14.取得双重验证状态 (success: true 验证成功, false 需重新验证手机)
  type REQ = {
    // 用户id（从x-seesion-token获取，无需传值）
    userId?: number
    // 平台id（从x-seesion-token获取，无需传值）
    platformId?: number
  }
}
// 61.用户信息: 61.15.获取用户锁定额度
declare namespace API_USER_LOCKMONEY {
  // 61.用户信息: 61.15.获取用户锁定额度
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
  // 61.用户信息: 61.15.获取用户锁定额度
  type REQ = {
    // 用户id（从x-seesion-token获取，无需传值）
    userId?: number
    // 平台id（从x-seesion-token获取，无需传值）
    platformId?: number
  }
}
// 61.用户信息: 61.16.登录密码校验
declare namespace API_USER_PASSWORDVERIFY {
  // 61.用户信息: 61.16.登录密码校验
  type RES = {
    // No comments found.
    success: boolean
    // No comments found.
    msg: string
    // No comments found.
    code: number
  }
  // 61.用户信息: 61.16.登录密码校验
  type REQ = {
    // 密码
    password: string
  }
}
// 61.用户信息: 61.17.注销备注：IOS审查用到；
declare namespace API_USER_REMOVE {
  // 61.用户信息: 61.17.注销备注：IOS审查用到；
  type RES = {
    // No comments found.
    success: boolean
    // No comments found.
    msg: string
    // No comments found.
    code: number
  }
  // 61.用户信息: 61.17.注销备注：IOS审查用到；
  type REQ = {
    // 密码
    password: string
  }
}
// 61.用户信息: 61.18.完善用户信息详情
declare namespace API_USER_COMPLETEUSERDETAILS {
  // 61.用户信息: 61.18.完善用户信息详情
  type RES = {
    // No comments found.
    success: boolean
    // No comments found.
    msg: string
    // No comments found.
    code: number
  }
  // 61.用户信息: 61.18.完善用户信息详情
  type REQ = {
    // 国籍
    nationality?: string
    // 生日
    birthday?: string
    // 出生地
    placeOfBirth?: string
    // 收入来源
    salarySource?: {
      // No comments found.
      id?: number
      // No comments found.
      name?: string
    }
    // No comments found.
    name?: string
    // 工作性质
    natureOfWork?: string
    // 当前省
    province?: string
    // 市
    city?: string
    // 当前住址
    address?: string
    // 当前邮政编码
    zipCode?: string
    // 常驻地址
    permanentAddress?: string
    // 常驻省
    permanentProvince?: string
    // 常驻市
    permanentCity?: string
    // 常驻地邮编
    permanentZipCode?: string
    // 性别 0-女 1-男 2-other
    gender?: number
  }
}
// 61.用户信息: 61.19.完善用户信息详情查询
declare namespace API_USER_QUERYUSERINFODETAILS {
  // 61.用户信息: 61.19.完善用户信息详情查询
  type RES = {
    // No comments found.
    success: boolean
    // No comments found.
    msg: string
    // No comments found.
    code: number
    // No comments found.
    t: {
      // 国籍
      nationality: string
      // 生日
      birthday: string
      // 出生地
      placeOfBirth: string
      // 收入来源
      salarySource: {
        // No comments found.
        id: number
        // No comments found.
        name: string
      }
      // 工作性质
      natureOfWork: string
      // 当前省
      province: string
      // 市
      city: string
      // 当前住址
      address: string
      // 当前邮政编码
      zipCode: string
      // 常驻地址
      permanentAddress: string
      // 常驻省
      permanentProvince: string
      // 常驻市
      permanentCity: string
      // 常驻地邮编
      permanentZipCode: string
      // 性别
      gender: number
    }
  }
  // 61.用户信息: 61.19.完善用户信息详情查询
  type REQ = {
    // 用户id（从x-seesion-token获取，无需传值）
    userId?: number
    // 平台id（从x-seesion-token获取，无需传值）
    platformId?: number
  }
}
// 61.用户信息: 61.20.查询收入来源列表
declare namespace API_USER_QUERYSALARYSOURCE {
  // 61.用户信息: 61.20.查询收入来源列表
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
    }>
    // No comments found.
    name: string
    // No comments found.
    total: number
  }
  // 61.用户信息: 61.20.查询收入来源列表
  type REQ = {
    // No comments found.
    locale?: any
  }
}
