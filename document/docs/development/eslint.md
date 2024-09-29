# ESLint

:::info
`next 14` 目前不支持 `v9`，所以不使用 `next lint`，自訂了一套 `v9` 規則在 `common/eslint.config.mjs`，編譯與開發皆會套用
:::

- 規則在 `eslint.config.mjs`

- 客製化規則在 `common/script/rules/custom-rules.mjs`

### 禁止 hooks 返回的屬性超過 12 個

> 數據量大難以維護，請拆分，甚至分類就能解決

```ts
const useHooks = () => {
  return { ... } // ❌ 超過 12 個會噴錯
}
```

### 禁止 export All

> 會導致 `tree-shaking` 失效

```ts
export * from 'module' // ❌ 禁止 export All
```

### API 命名需要 req 開頭

> 快速識別是 API

```ts title="common/apis/custom.ts"
// 只有 common/apis/custom.ts 會有手寫的 API 函式，其餘都是自動產出
export const reqCustom = () => {}
```

### Model 中有 export 的屬性強制要求註解

> 幾秒的時間可以省下幾分鐘的維護

```ts
// 可以不註解
const local = {}
// 需要註解
export const external = {}
```

### 禁止寫 class

> `OOP` 包裝不好會難以維護，很久沒看到套件需要 `new` 了吧？

```ts
class Custom {} // ❌ 禁止寫 class
```

### i18n.t 禁止動態拼裝語系

```ts
t(`key.${variable}`) // ❌ 請寫 Map 來處理對應翻譯，不要動態拼裝
```

### defineStore 命名規則一定要 use 開頭 Store 結尾

> 開頭 `use` 快速識別是 `hooks`，結尾 `Store` 快速識別是 `store`

```ts
const [useCustomStore] = defineStore({}) // ✅
```

### 禁止 useStore 解構取值

> 解構會導致重複渲染次數更多，請直接取值

```ts
const {} = useStore() // ❌ 解構
const {} = useStore((state) => state) // ❌ 解構
const {} = useStore((state) => state.list.map()) // ❌ 新記憶體位置
const {} = useStore((state) => state.list.filter()) // ❌ 新記憶體位置
const {} = useStore((state) => state.list.slice()) // ❌ 新記憶體位置
const {} = useStore((state) => state.list.reduce()) // ❌ 新記憶體位置
const {} = useStore((state) => [...state.list]) // ❌ 新記憶體位置
const {} = useStore((state) => ({ ...state })) // ❌ 新記憶體位置
const list = useStore((state) => state.list) // ✅ 參照
const { a, b, c } = useStore((state) => state.aaa.bbb.ccc) // ✅ 參照 + 可解構
```

:::warning
如果確定真的需要拿全部，請使用 `getAll`
:::

```ts
import { getAll } from '@model/utils'
const {} = useCustomStore(getAll)
```

### 禁止在 model 外使用 localStorage sessionStorage

> 集中處理 `Storage` 方便管理

解決方案

```ts
import { useStorageStore, useSessionStore, setStorageState, setSessionState } from '@app/common/model'
// localeStorage
setStorageState({ DATA: '123' }) // 保存 Storage
useStorageStore.getState().DATA // 頂層使用
useStorageStore((state) => state.DATA) // hooks 中使用
// sessionStorage
setSessionState({ DATA: '123' }) // 保存 Session
useSessionStore.getState().DATA // 頂層使用
useSessionStore((state) => state.DATA) // hooks 中使用
```

### templates 禁止相互引用

> 一次只選擇一種版型，不可能同時使用，所以相互引用會導致 `tree-shaking` 失效

### common 禁止引用商戶

> 會導致其他商戶包含被引用的商戶資訊，導致 `tree-shaking` 失效

### 工具類請寫純函式

```ts title="utils/index.ts"
// 頂部只能引用 node_modules 的依賴
import {} from 'js-md5' // 可用
import {} from '@common/...' // 不可用
```

### model 中禁止 import 縮寫 @model

> 會導致 `tree-shaking` 失效

```ts title="model/any.ts"
import { Platform } from '@model' // ❌ 禁止 import 縮寫，會依賴全部的 @model/index.ts
import { Platform } from '@model/platform' // ✅ 可使用
```

### 禁用項目

- `import { useRouter } from "next/router"` 使用封裝過的 `useCommon` 或 `router`

- `import { useTranslations } from "next-intl"` 使用封裝過的 `useCommon` 或 `i18n`

- `import { create } from "zustand"` 使用封裝過的 `defineStore`

- `import Image from "next/image"` 集中到 `core/Image` 中，可快速切換套件

- `import { md5 } from "js-md5"` 集中到 `utils` 中，可快速切換套件

### Model 中禁止使用 any

> 難以維護，失去 typescript 意義

```ts
export const a: any = {} // ❌ 禁止使用 any
```

:::warning
逼不得已的情境，請參考以下寫法
:::

```ts
export const A = <Params = any>(params: Params) => {}
export const B = <Return = any>(): Return => {}
```
