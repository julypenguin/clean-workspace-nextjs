# Platform

> 商戶配置指南

## 常數配置

位置：`/common/model/platform/index.ts`，這檔案依賴級強只能配置常數相關，不能有依賴

```ts title="/common/model/platform/index.ts"
import { isDev, isClient, Platform, PLATFORMS, WEB_SEARCH_QUERY, MODAL_NAME } from '@model/platform'
isDev // 是否為開發模式
isClient // 是否為客戶端
Platform // 平台環境配置
PLATFORMS // 所有商戶 keys
WEB_SEARCH_QUERY // 網址查詢參數
MODAL_NAME // 彈窗註冊名稱
```

## 商戶邏輯處理

> 多商戶可能共用版型，但有部分情境需要依商戶顯示

位置：`/common/model/platform/custom.ts`

統一在這隻檔案處理商戶條件，之後有新商戶就只需要調整這隻檔案即可

放置一些需要判斷商戶的參數，例如：翻譯 `key`

```ts title="/common/model/platform/custom.ts"
import { Platform, PLATFORMS } from './'

/** 商戶翻譯 key */
export const getPlatformNameKey = () => {
  if (Platform.PLATFORM === PLATFORMS.ONBET) return 'v2.A698'
  else if (Platform.PLATFORM === PLATFORMS.V66) return 'v2.A048'
  return Platform.PLATFORM
}

/** 商戶 logo */
export const getPlatformLogo = () => {
  if (Platform.PLATFORM === PLATFORMS.ONBET) return 'icons/logo.png'
  else if (Platform.PLATFORM === PLATFORMS.V66) return 'icons/logo.svg'
  return 'icons/logo.png'
}
```

:::warning
目前沒有 `logo` 僅是假設
:::

## Pages

> 商戶頁面對應的路由

- 需先了解 [next.js](https://nextjs.org/docs/pages/building-your-application/routing/pages-and-layouts) `page router` 配置模式，才能看懂這部分

### 渲染模式配置

#### GenerateSideProps

使用 `GenerateSideProps` 定義頁面資訊

```ts title="page.tsx"
const { getStaticProps, getServerSideProps, getStaticPaths } = GenerateSideProps({
  props: {
    seo: { title: 'v2.E239', description: 'v2.E239' },
  },
  revalidate: 30, // ISR 快取秒數
})
export { getStaticProps, getServerSideProps, getStaticPaths }
```

#### Pre-Render

動態路由可預先渲染指定路徑

```ts title="page.tsx"
// SSG | ISR 預先指定路徑
GenerateSideProps({
  ...
}, {
  paths: [{ path: `path1` }, { path: `path2` }, { path: `path3` }],
})
// SSR 不指定路徑時使用
GenerateSideProps({
  ...
}, {
  paths: [],
  fallback: 'blocking',
})
```

#### 非同步 API 請求

`SSR` 伺服器階段預先獲取資料

```ts title="page.tsx"
const { getStaticProps, getServerSideProps, getStaticPaths } = GenerateSideProps(async () => {
  const { data } = await reqAnyAPI()
  return { ... }
})
```

#### 套用渲染模式

```ts title="pages/index.tsx"
// SSR
export { default, getServerSideProps } from 'page'
// ISR or SSG
export { default, getStaticProps } from 'page'
// ISR or SSG prerender
export { default, getStaticProps, getStaticPaths } from 'page'
```

### SSG 語系路由配置

> `SSG` 配置相當複雜，想要語系路由就要動態配置預渲染路徑

正常預設路由

```sh
└── pages
   ├── home       # 等於 https://domain.com/home
   ├── index      # 等於 https://domain.com/
   └── ...
```

語系路由，需要多配置一層 `[dynamic]` 動態路由

```sh {2-5}
└── pages
   ├── [locale]
   │  ├── home        # 等於 https://domain.com/{locale}/home
   │  ├── index       # 等於 https://domain.com/{locale}/home
   │  └── ...
   ├── home           # 等於 https://domain.com/home
   ├── index          # 等於 https://domain.com/
   └── ...
```

這一層路由內的頁面需要額外 `export getStaticPaths` 語系設定已經封裝好了，所以配置變單純

```ts title="pages/[locale]/home.tsx"
export { default, getStaticProps, getStaticPaths } from 'page'
```

## SSG 編譯注意事項

- `sitemap` 編譯需要多一個複製 `public/*` 到 `out/` 的步驟

```json
{
  "scripts": {
    "postbuild": "npx next-sitemap --config next-sitemap.config.mjs && cp -r ./public/* ./out/"
  }
}
```

## SSG 動態路由配置

`SSG` 只能在已知路徑的情況下預渲染，無法配置 `fallback`

所以體育這種 `/match/:id` 無法使用，只能使用 `/match?id=xxx`

已知路徑的情況下，可以參考以下設定，最終路由是 `/profile/:field` `/:locale/profile/:field`

```ts title="pages/profile/setting/[field].tsx"
const { getStaticProps, getServerSideProps, getStaticPaths } = GenerateSideProps(
  async () => {
    return {
      props: {
        auth: true,
        seo: { title: 'Setting Edit', description: 'Setting Edit' },
      },
    }
  },
  {
    paths: Object.values(PROFILE).map((field) => ({ field })),
  },
)
export { getStaticProps, getServerSideProps, getStaticPaths }
```

## 新增商戶

- 相當於新增專案，可使用[指令](/commands#新增商戶)

- 新增後需要配置 `.env.development` `.env.production` `public/manifest.json` `public/favicon.ico` `public/icons/*`

- 需要依照版型配置 [pages](#pages) 與 [tailwind.config.ts](/development/style#tailwindcss-配置)

- `/common/model/platform/index.ts` [PLATFORMS](#常數配置) 要新增商戶

- `/common/model/platform/custom.ts` 要配置[商戶邏輯](#商戶邏輯處理)

- `public/*` 圖示等靜態資源要記得換

## 模組取代

> 用途：完全取代預設 `import path`

- 需要考慮 `import` 的各種寫法

  ```ts
  import {} from '@app/common/model/platform/routes'
  import {} from '@common/model/platform/routes'
  import {} from '@model/platform/routes'
  // 以上相等
  ```

- 示範情境：客製化路由

  ```ts title="{PLATFORM}/routes.ts"
  import BasicPath from '@app/common/model/platform/routes/basic'

  export const ROUTES = Object.freeze({
    ...BasicPath,
    LOGIN: '/any/path', // 覆蓋想換位置的路徑
  })
  ```

  ```ts title="{PLATFORM}/next.config.mjs"
  const config = {
    replacement: new Map([
      /** routes 覆蓋 */
      [/^(@model|@common\/model)\/platform\/routes(\/index)?$/, '@/routes.ts'], // 故意留 @app/common 當後門
    ]),
  }
  ```
