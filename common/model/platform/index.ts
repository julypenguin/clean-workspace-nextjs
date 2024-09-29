/** 是否為開發模式 */
export const isDev = process.env.NODE_ENV === 'development'

/** 語系路由正則 */
export const LocaleRegex = /\/(en|vi|zh|th|id|br)/

/** 前端 */
export const isClient = typeof window !== 'undefined'

/** 所有商戶 key 比對用，請填 NEXT_PUBLIC_PLATFORM 中的值  */
export enum PLATFORMS {
  ONBET = 'onbet',
  V66 = 'v66',
}

/** 商戶環境變數 */
export const Platform = Object.freeze({
  // 版本號
  GIT_HASH: String(process.env.GIT_HASH),
  // 商戶 Key
  PLATFORM: String(process.env.NEXT_PUBLIC_PLATFORM),
  // 語系列表
  LOCALES: String(process.env.NEXT_PUBLIC_LOCALES).split(','),
  // 預設語系
  LOCALE: String(process.env.NEXT_PUBLIC_LOCALE),
  // 網址
  API_URL: String(process.env.NEXT_PUBLIC_API_URL || '').replace(/\/+$/, ''),
  // 靜態地址
  STATIC_URL: process.env.NEXT_PUBLIC_STATIC_URL,
  // Google GA
  NEXT_PUBLIC_GA_ID: String(process.env.NEXT_PUBLIC_GA_ID || ''),
  // 是否為開發模式
  DEVELOP: isDev,
  // SSG 模式
  SSG: !!String(process.env.NEXT_PUBLIC_SSG || ''),
})

/** 可以帶到網址上的參數，註冊位置 */
export enum WEB_SEARCH_QUERY {
  // 邀請好友
  INVITE_STR = 'inviteStr',
  // 邀請好友：國家
  NATION_CODE = 'nationCode',
  // 邀請好友：幣種
  CURRENCY = 'currency',
  // APP 嵌入
  IS_APP = 'isApp',
  // 登入鑒權
  TOKEN = 'token', // 合併 appToken
  // 是否被當為第三方
  THIRD_SHOW_FLAG = 'thirdShowFlag', // 0 = 三方 react-h5 的 isBPort
  // 語系
  LANG = 'lang', // 建議棄用改走語系路由 /zh /en
}

/** 共用彈窗名稱在此定義 */
export enum MODAL_NAME {
  // 年齡驗證彈窗
  VERIFY_AGED = 'VERIFY_AGED',
}
