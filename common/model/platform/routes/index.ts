/** 商戶有自訂路由時，需要依賴預設 */
import BasicPath from './basic'

/** 路由位置，因為商戶想要的路徑可能會不同，留一個可修正的機會 */
export const ROUTES = Object.freeze({
  ...BasicPath,
})
