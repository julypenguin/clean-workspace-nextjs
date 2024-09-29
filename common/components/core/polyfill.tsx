import '@common/apis/client/middleware'
import FetchPolyfill from 'fetch-ponyfill'
import dayjs from 'dayjs'
import timezone from 'dayjs/plugin/timezone'
import utc from 'dayjs/plugin/utc'

dayjs.extend(utc)
dayjs.extend(timezone)

/** 前端 */
if (typeof window !== 'undefined') {
  /**
   * 解決 QQ UC 瀏覽器不支援 Request
   */
  if (/QQ|QB|Sogou|UC/.test(navigator?.userAgent || '')) {
    window.Request = FetchPolyfill().Request
  }

  /**
   * 解決 QQ UC 瀏覽器不支援 next router 跳轉
   * @see https://github.com/vercel/next.js/issues/56641
   */
  if (!('body' in Response.prototype)) {
    Object.defineProperty(Response.prototype, 'body', {
      get() {
        if (this._bodyStream) return this._bodyStream
        // 存儲整個回應內容在 _bodyText 屬性中
        this._bodyText = ''
        this.text().then((text: string) => (this._bodyText = text))
        // 創建並返回一個可讀流
        this._bodyStream = new ReadableStream({
          start: async (controller) => {
            // 等待 _bodyText 準備完成
            while (!this._bodyText) {
              await new Promise((resolve) => setTimeout(resolve, 50))
            }
            // 將 _bodyText 編碼並推入流
            const encoder = new TextEncoder()
            controller.enqueue(encoder.encode(this._bodyText))
            controller.close() // 關閉流
          },
        })
        return this._bodyStream
      },
      configurable: true,
    })
  }

  /** replaceAll */
  if (!String.prototype.replaceAll) {
    String.prototype.replaceAll = function (search: string | RegExp, replacement: unknown): string {
      const target = this
      if (typeof search === 'string') {
        // 使用正規表達式替換
        return target.replace(new RegExp(search, 'g'), String(replacement))
      } else {
        // 如果搜尋條件是正規表達式，直接使用 replace 方法
        return target.replace(search, String(replacement))
      }
    }
  }

  /** Array.at */
  if (!Array.prototype.at) {
    Array.prototype.at = function (index: number) {
      return this?.[(this.length + index) % this.length]
    }
  }
}
