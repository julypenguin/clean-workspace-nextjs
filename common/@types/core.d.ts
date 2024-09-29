// 全部設定
declare type EnvConfig = {
  // 版本號
  GIT_HASH: string
  // 啟動的商戶 key
  NEXT_PUBLIC_PLATFORM: string
  // 語系列表
  NEXT_PUBLIC_LOCALES: string
  // 預設語系
  NEXT_PUBLIC_LOCALE: string
  // API 路徑
  NEXT_PUBLIC_API_URL: string
  // STATIC 路徑
  NEXT_PUBLIC_STATIC_URL: string
  // 使用 SSG 空字串以外都是 true
  NEXT_PUBLIC_SSG: string
}

// process.env 自訂環境變數
declare namespace NodeJS {
  interface ProcessEnv extends EnvConfig {}
}

// 可公開的設定
declare type PublicConfig = Omit<EnvConfig>

// Page 預設 Props
declare type AppPageProps<T = Record<string, any>> = T & {
  // 是否需要登入
  auth?: boolean
  // 隱藏頂部
  hideHeader?: boolean
  // 隱藏底部
  hideFooter?: boolean
  // SEO
  seo?: import('next-seo').NextSeoProps
  // 域名：沒有
  host?: string
  // 語系：SSG 根目錄沒有
  locale?: string
  // 語系擴充
  messages?: Record<string, any>
}

// FPS 檢測
class Stats {
  dom: Element
  update(): void
}

declare interface Window {
  // FPS 檢測
  Stats: Stats
}

// console.d.ts
declare module 'node:console' {
  global {
    interface Console {
      log(message?: any, ...optionalParams: any[]): null
      warn(message?: any, ...optionalParams: any[]): null
      error(message?: any, ...optionalParams: any[]): null
    }
  }
}

// 快速解構 API t 格式
declare type ResT<T extends (...args: any) => Promise<any>> = Partial<Awaited<ReturnType<T>>['t']>

// proto 檔案
declare module '*.proto' {
  const content: string
  export default content
}

// 解開 ReadyOnly
declare type Mutable<T> = {
  -readonly [P in keyof T]: T[P]
}

// 初始化類型組件用
declare type InitGlobalComponentProps = {
  locale?: string
  token?: string
}

declare module '*.svg' {
  import { FC, SVGProps } from 'react'
  const content: FC<SVGProps<SVGElement>>
  export default content
}

declare module '*.svg?url' {
  const content: import('next/image').StaticImageData
  export default content
}

/** 統一的選項格式 */
declare type OptionItem<META = any> = { label: string; value: string | number; meta?: META }

/** 巢狀扁平化屬性，無限捲動用 */
declare type InfiniteItem<TYPE = string, META = any> = {
  __infinity: TYPE
} & META

/** 體育賠率 */
declare type Odds = Partial<WS.OddsVO & WS.OddsWithPlayNameVO>

/** Tailwind CSS 客製化的參數檔 */
declare type TailwindVariable = {
  // 日間
  root: Record<`--vd-${string}`, string>
  // 夜間
  night: Record<`--vd-${string}`, string>
  // 響應 spacing 設定
  responsive?: Record<
    string,
    {
      sm: string // 預設大小
      md?: string // MD尺寸時大小
      lg?: string // LG尺寸時大小
      xl?: string // XL時大小
    }
  >
}

/** 拿 Record 的子物件 */
declare type RecordItem<T> = T extends Record<string, infer R> ? R : never

/** Modal */
declare type ModalResolve<META = any> = {
  status: 'BG_CLOSE' | 'CLOSE'
  meta?: META
}
