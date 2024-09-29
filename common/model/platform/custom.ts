/**
 * 這隻檔案請寫純函式，依賴商業邏輯的東西會有 tree-shaking 的問題
 * 請用依賴注入的方式
 */
import { Platform, PLATFORMS } from './'

/** 商戶翻譯 key */
export const getPlatformNameKey = () => {
  if (Platform.PLATFORM === PLATFORMS.ONBET) return 'v2.A698'
  else if (Platform.PLATFORM === PLATFORMS.V66) return 'v2.A048'
  return Platform.PLATFORM
}
