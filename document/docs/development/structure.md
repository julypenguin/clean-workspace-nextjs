# Structure

## `路徑縮寫`

```ts
import '@app/common' // common 專案的根目錄位置
import '@common' // 等同 @app/common
import '@model' // common 專案的 model 目錄位置
import '@templates' // common 專案的 templates 目錄位置
```

```ts
import '@/*' // 商戶自己的根目錄位置，common 中禁用
```

:::warning
`common` 內禁用 `@/*` 原因，`common` 也是一個專案夾，但編譯時是跟隨商戶專案，縮寫路徑會誤導實際位置。`common/tsconfig.json` 是拿來欺騙 `IDE` 用的，無實際作用。
:::

## App Project

> 整體專案結構

```sh
└── app
   ├── common       # 放置所有共用的目錄
   ├── document     # 說明文件
   └── ...          # 其餘皆是商戶
```

## Common

> 此區域都是共用的，放置前請思考是否會有其他商戶也會用到

```sh
└── common
   ├── script         # 開發環境相關腳本放置區
   ├── @types         # 全域型別
   ├── apis           # 所有 apis, 配合指令自動更新
   ├── components     # 共用元件
   ├── model          # 共用數據
   ├── style          # 共用樣式
   ├── templates      # 所有版型
   └── utils          # 通用工具，在 model 中找不到分類才放這
```

## Platform

> 當作一般專案資料夾即可，但盡量不要超出這些資料夾，越多越亂

```sh
└── onbet
   ├── assets         # 商戶獨立資源，注意: 重複用到的圖才是放這
   ├── components     # 商戶獨立元件
   ├── pages          # 路由
   ├── model          # 商戶獨立數據
   ├── utils          # 商戶獨立工具
   └── public         # 靜態資源
```

## Module

> 封裝概念，為了能刪除乾淨，不留多餘檔案

:::info
簡單來說就是把你想封裝的頁面或組件相關的檔案，只放在自己所屬資料夾內
:::

### Page 封裝

- 舉例：`/page`

  ```sh
  └── Page                # 頁面組件
     ├── assets           # 組件用到的資源
     ├── components       # 組件用到的組件
     │  ├── Modal.tsx
     │  ├── Button.tsx
     │  └── ...
     │── details.tsx      # /page/details
     └── index.tsx        # /page
  ```

  若是覺得太多層， `components` 可以拆掉，以下幾種方式皆可

  ```sh {2-4}
  └── Page
     ├── Button             # 元件目錄，元件有其他檔案想丟就用資料夾包著
     │  ├── assets
     │  └── index.tsx
     └── index.tsx
  ```

  ```sh {2}
  └── Page
     ├── Modal.tsx          # 元件檔案
     └── index.tsx
  ```

### Component 封裝

- 舉例：`/component/Modal`

  ```sh
  └── Modal               # 組件
     ├── assets           # 組件用到的資源
     ├── components       # 組件用到的組件
     │  └── ...
     └── index.tsx        # 組件入口
  ```

- 組件中的組件可以在封裝一層一模一樣的結構

  ```sh {2-6}
  └── Modal
     ├── Button             # 組件中的 Button
     │  ├── assets          # Button 用到的資源
     │  ├── Icon            # Button 用到的組件
     │  │  └── index.tsx    # Icon 入口，可以繼續封裝
     │  └── index.tsx       # Button 入口
     └── index.tsx          # Modal 入口
  ```

### 依賴概念

- 封裝過的 `Module`，不應該有依賴關係

  ```sh {2,3}
  └── pages
     ├── PageA      # A 頁面中的任何檔案，都不會 import PageB 內的檔案
     ├── PageB      # B 頁面中的任何檔案，都不會 import PageA 內的檔案
     └── ...
  ```

- 內部的 `Component` 正常也不會有互相依賴關係

  ```sh {2,3}
  └── components
     ├── Icon       # 不會 import Button 內的檔案
     ├── Button     # 不會 import Modal 內的檔案
     └── ...
  ```

  正確方式，僅舉例 `assets`，`hooks` `store` 等等都適用

  ```sh {2,4,7}
  └── Module
     ├── assets           # <= Module/assets
     ├── Icon
     │  ├── assets        # 有 Button 需要的圖片，應該移到 Module/assets 下
     │  └── index.tsx
     └── Button
        └── index.tsx     # ❌ 依賴了 Icon/assets，不應該跨組件依賴
  ```

:::info
思考看看 `Icon` 整個資料夾移除後會發生什麼事，就能了解原因
:::
