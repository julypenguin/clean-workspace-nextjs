# Model

> 類似 MVC 中的 M，用於集中管理數據，多版型必抽離項目

- 按功能分類

- 每個功能中自己規劃 `store` `hooks` `utils` `constant` 等的放置方式，可互相依賴

- 只放通用邏輯，例如：`toast` `alert` 每個專案都會有的。❌ 禁止放各體 `UI` 邏輯，例如：某一個版型有側邊欄，但不一定所有版型都有

## 注意事項

在 `Model` 中的任何檔案都禁止使用 `@model/index` `@common/model/index` 縮寫，`tree-shaking` 會失效

```ts
import { useUserStore } from '@model' // ❌
import { useUserStore } from '@model/user/useUserStore' // ✅
```

## 結構範例

> 分類中可以在封裝一層一模一樣的結構

- `store` `hooks` `utils` `type` `constant` 同一類的自己封裝好，可以跨類依賴

```sh
└── model
   ├── ...                            # 其他分類
   └── user                           # 用戶相關
      ├── activity                    # 可以在分類：活動相關
      │   ├── utils                     # utils
      │   ├── constant                  # constant
      │   └── useActivityStore.ts       # store
      ├── funds                       # 可以在分類：資金相關
      │   ├── utils                     # utils
      │   ├── constant                  # constant
      │   └── useActivityStore.ts       # store
      ├── utils                       # utils
      ├── constant                    # constant
      ├── useUserStore.ts             # store
      └── useProfile.ts               # hooks
```

## Store

> Model 中的 store，都使用封裝過的 zustand

### 建立

封裝過的 `zustand`，自動綁訂 `devtools`，可用於集中管理，例如：登出時可全部清除等

- 一般使用

  ```ts
  export { defineStore } from '@modal/utils'
  // 一般 store，第二個參數是 instance 名稱
  const [useDemoStore, setDemoState] = defineStore({ demo: 0 }, 'DEMO')
  ```

- 需要持久化

  ```ts
  export { defineStore } from '@modal/utils'
  // 持久化 store，第二個參數是 PersistOptions，name = instance 名稱
  const [useDemoStore, setDemoState] = defineStore({ demo: 0 }, { name: 'DEMO' })
  ```

### 更新值

```ts
// 直接更新
setDemoState({ demo: 1 })
// 獲取上一次的值
setDemoState((state) => ({ demo: state.demo + 1 }))
// 獲取上一次的值，不 return
setDemoState((state) => {
  state.demo = 0
})
// 獲取上一次的值，簡化不 return，單行比較乾淨
setDemoState((state) => void state.demo++)
// 一次更新多組，不需要分多次
setDemoState((state) => {
  state.demo = 0
  state.demo2 = 0
})
setDemoState({ demo: 0, demo2: 0 })
```

### 獲取值

- `hooks` 或 `Component` 中使用

  ```ts
  const Page = () => {
    const {} = useDemoStore() // ❌ 禁止解構取值
    const demo = useDemoStore((state) => state.demo) // ✅ 指定屬性
    const demo2 = useDemoStore((state) => state.demo2) // ✅ 指定屬性
    const { demo3, demo4 } = useDemoStore(getAll) // ✅ 屬性真的非常少又需要一次拿全部時，可以使用 getAll
  }
  ```

- 頂層使用

  ```ts
  const demo = useDemoStore.getState().demo
  ```

- 進階：訂閱機制

  ```ts
  import { useEffect } from 'react'

  useEffect(() => {
    // 訂閱機制
    const unsubscribe = useDemoStore.subscribe((state) => {
      console.log(state)
    })
    return unsubscribe // 解除訂閱
  }, [])
  ```

### 登出處理

- 需要登出時清除數據的 `store` 新增一個 `logout` 屬性，型別為 `() => State`，登出時會自動呼叫

  ```ts
  const initialState: UserState & { logout: () => UserState } = () => ({
    logout: () => initialState(), // 登出 Callback
  })
  ```

- 若有使用持久化的 `store` 需要額外在手動刪除快取，因為 `chunks` 可能未加載，所以需要手動刪除指定名稱

  ```ts title="/common/model/user/useUserStore.ts"
  /** 登出處理 */
  export const logout = () => {
    // 清除快取
    removePersist('DEMO')
  }
  ```

### 同步依賴

> 會有許多情境需要等待 `store` 數據才能進行，這邊簡單列出解法

- `hooks` 或 `Components`

  ```ts
  import { useEffect } from 'react'

  const Page = () => {
    const token = useUserStore((state) => state.token)

    useEffect(() => {
      if (!token) return
      // 拿到 token 後要處理的事
    }, [token])
  }
  ```

- 頂層函式使用 `waitStore`

  ```ts title="/common/model/utils.ts"
  /**
   * 等待 zustand store 數據
   * @test 有單元測試
   * @param {UseBoundStore<StoreApi<State>>} useStore defineStore 實體
   * @param {(state: State) => boolean} callback 等待條件，條件達到就返回所有 state 屬性
   * @example const { games } = await waitStore(useThirdGames, (state) => !!state?.games);
   */
  export const waitStore = async <State>(useStore: UseBoundStore<StoreApi<State>>, callback: (state: State) => boolean): Promise<State> => {...}
  ```

  ```ts
  const action = async () => {
    // 一般等待值
    const {} = await waitStore(useUserStore, (state) => !!state.token)
    // 避免拿到緩存的範例
    const {} = await waitStore(useConfigStore, (state) => !!state.config?.initialize)
    // 拿到後要處理的事
  }
  ```

:::info
`useConfigStore` 中的 `config`，若是緩存的數據 `initialize` 會是 `false`，所以可以這樣判斷
:::

## Hooks

> Model 中的 hooks

1. 盡可能往可擴充可維護的思維撰寫
2. 不處理 `UI` 邏輯，僅處理 `API` 邏輯
3. 一個功能一個 `hooks`，不要一次寫一個龐大的 `hooks`，專案有禁止返回超過 `12` 個屬性
4. 共用的函式或常數抽出來放 `utils` `constant`，沒有共用就不用抽出來了，寫在檔案內即可
