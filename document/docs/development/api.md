# API

:::tip
專案中的 API 函式有 95% 是自動產生的，不需要手動寫 API 函式
:::

## 自動產生函式

- [體育 API](/commands.md#體育-api)

- [聊天室 API](/commands.md#聊天室-api)

```sh
yarn api
yarn chat
```

## 函式名稱與 API 型別

自動產生的腳本也會產出一份 `.d.ts`，會依照請求路徑產出一份型別對照表，規則就是請求路徑

```ts
// /api/front/match/bet/info/list
reqMatchBetInfoList // 函式
API_MATCH_BET_INFO_LIST.REQ // 請求參數型別
API_MATCH_BET_INFO_LIST.RES // 返回參數型別
```

都是依照請求路徑命名（不包含 `api/front`)，所以打關鍵路徑名就能拿到函式與型別

## 自訂 API 函式

1. 檔案固定寫在 `common/apis/custom.ts`
2. 請符合 `this` 擴充的規範

```ts title="common/apis/custom.ts"
export const reqTodo = async function (this: AxiosRequestConfig | void): Promise<API_INDEX_RESOURCE_JSON.RES> {
  return SportAPI.get('https://todo.com/any', this || undefined)
}
```

## 攔截處理

> 透過 `axios` 的 `interceptors` 來攔截請求

邏輯都在這隻檔案中

```tsx title="common/apis/middleware.ts"
instance.interceptors.request.use({...})
instance.interceptors.response.use({...})
```

## Config 設定與擴充

### 型別擴充位置

```ts title="/common/@types/axios.d.ts"
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
```

### 覆蓋預設值

- `API_CONST` 統一管理 `headers` 參數

- `setHeaders` 覆蓋預設 `headers` 參數

```ts
import { API_CONST, setHeaders } from '@common/apis/client/instance'
// 例如登入後固定 headers 帶 token
setHeaders({ [API_CONST.X_SESSION_TOKEN]: `Bearer ${token}` })
```

### 自動取消請求

> 預設是 `true`，給 `string` 等於自訂 key

一般情況

```ts
reqIndexConfig() // 這一筆會被取消
reqIndexConfig()
```

不自動取消，例：一送出就無法挽回的情況

```ts
reqIndexConfig.call({ autoCancel: false }) // 不會被取消
reqIndexConfig.call({ autoCancel: false })
```

自訂 `key`

```ts
import { cancelRequest } from '@common/apis'

useEffect(() => {
  reqIndexConfig.call({ autoCancel: 'key' })
  return () => cancelRequest('key')
}, [])
```

### 無視錯誤

> 心跳機制, 三方狀態輪巡等情境

```ts
reqIndexChecktoken.call({ ignoreError: true })
```

### 錯誤提示

> 預設沒有任何提示

- `alerts` 彈窗類型

  ```ts
  reqIndexResourcejson.call({ config: { alerts: true } })
  reqIndexResourcejson.call({ config: { alerts: { ... } } }) // 可自訂顯示內容
  ```

- `toasts` 彈窗類型

  ```ts
  reqIndexResourcejson.call({ config: { toast: true } })
  reqIndexResourcejson.call({ config: { toast: { ... } } }) // 可自訂顯示內容
  ```

:::warning
以上屬於手動呼叫時的應用方式，大部分情況都不會使用。`hooks` 中應該使用 `useSWR` `useQuery`
:::

## useSWR

> `useSWR` 是封裝過的 `hooks`，底層是 `useQuery`，自動綁定 `signal` + `config` + `params`

### 簡易說明

```ts
// key 自訂，key 只要更新就會重新獲取
const { data, isLoading } = useSWR(key, reqIndexResourcejson, {
  // 預設可填 useQuery 的所有選項
  ...,
  // API 所需要的參數，可以給一個函式，返回 null 就會停止呼叫 API
  params: {...},
  // 就是上方的 config 擴充設定
  config: {...},
});
```

### 簡易範例

> 只列出常用，key 請依實際情況命名

```ts
// 切語系要重新獲取的情況，直接把語系加入 key 中即可
useSWR(`/api/${locale}`, reqIndexV2Thirdgames)
// 有登入才呼叫
useSWR(`/api/${locale}`, reqIndexV2Thirdgames, { enabled: !!token })
// 請求參數
useSWR(`/api`, reqIndexV2Thirdgames, {
  params: { locale: '' },
})
useSWR(`/api`, reqIndexV2Thirdgames, {
  params: async () => ({ locale: '' }), // 可以是函式，返回 null 就不會呼叫 API
})
// 錯誤自動顯示 toast
useSWR(`/api`, reqIndexResourcejson, { config: { toast: true } })
// 錯誤自動顯示 alert
useSWR(`/api`, reqIndexResourcejson, { config: { alerts: true } })
// 緩存，識別 key，跨組件依然可以有緩存
useSWR(`/api`, reqIndexResourcejson, { staleTime: 30 * 1000 }) // 設為 0 = 無緩存
// 輪詢
useSWR(`/api`, reqIndexResourcejson, { refetchInterval: 10 * 1000 })
```

:::info
使用情境：邏輯簡單時使用，需要複雜邏輯可改用 `useQuery`
:::

## useQuery

> 原生的 [@tanstack](https://tanstack.com)

只列出可能會遇到問題的，其他請參考官方

### Provide

> 設定了一些預設選項

```ts title="common/apis/instance.ts"
/** Query Client */
export const QueryClientInstance = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 10 * 1000, // 預設快取
      retryDelay: 5 * 1000, // 預設重新嘗試
      placeholderData: (prev: AxiosResponse) => prev, // 保持上一次的請求，避免彈跳
      refetchOnWindowFocus: false, // 禁用自動重新請求
    },
  },
})
```

### 綁定取消請求的方式

> 結合自家 `API` 的取消方式

```ts
const { data } = useQuery({
  queryKey: ['games'], // key 是一個陣列
  queryFn: ({ signal }) => reqIndexV2Thirdgames.call({ signal }), // 綁定取消請求
})
```

### 清除快取

```ts
// 假設 queryKey 是 [/api]，取消就是給一模一樣的陣列
queryClient.resetQueries({ queryKey: ['/api'] })
```

`useSWR` 清除方式較特殊

```ts
useSWR('/key')
queryClient.resetQueries({ queryKey: ['/key'] }) // 要移除的是字串包一層陣列
useSWR(['/key', '/locale'])
queryClient.resetQueries({ queryKey: ['/key/locale'] }) // 要移除的 key 是 join 後的字串，不是 ['/key', '/locale']
```

### prefetchQuery

> 提前呼叫 `API`，進入組件後再呼叫一樣的 `queryKey`，就可以拿到快取

```ts
QueryClientInstance.prefetchQuery({
  queryKey: ['/match/bet/info', String(currency || systemCurrency), oid],
  queryFn: () => reqMatchBetInfo.call({ autoCancel: false }, { matchId, oid }),
  staleTime: 60 * 1000,
}).catch(console.warn)
```
