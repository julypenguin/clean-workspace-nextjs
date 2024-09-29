// Axios 擴充 config
import 'axios'

type AlertOptions = import('@model/website/useAlertStore').AlertOptions

declare module 'axios' {
  export interface AxiosRequestConfig {
    // 改變 API 實體
    instance?: import('axios').Axios
    // 是否無視錯誤
    ignoreError?: boolean
    // 自動取消 API，預設是 true
    autoCancel?: boolean | string
    cancelControllerKey?: string
    // 自動顯示 Toast，預設是 false，給 string 代表要直接顯示的值，給函式代表手動控制
    toast?: boolean | string | ((error: Error) => string)
    // 自動顯示 Alert，預設是 false，給 options 代表啟用，給函式代表手動控制
    alerts?: boolean | AlertOptions | ((error: any) => AlertOptions)
  }
}
