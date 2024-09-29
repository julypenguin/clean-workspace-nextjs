# Feature

> 這是一個包含多個子項目的 `Monorepo`，每個子項目代表不同 `Platform`。主要目的是為了集中管理重複的邏輯，並且可以選擇版型獨立部署。

## Workspace

- 多專案結構，區分共用、獨立配置，編譯互不干涉

## 主要套件

:::warning
盡可能地不再安裝其他套件，除非逼不得已
:::

- React [Next 14 Page Router](https://nextjs.org/docs/pages)

- SEO [next-sitemap](https://www.npmjs.com/package/next-sitemap) + [next-seo](https://github.com/garmeeh/next-seo)

- 語系 [Next-Intl](https://next-intl-docs.vercel.app)

- 數據 [Zustand](https://github.com/pmndrs/zustand) + [Query](https://tanstack.com)

- 樣式 [Tailwindcss](https://tailwindcss.com) + [Shadcn](https://ui.shadcn.com) + [Framer Motion](https://www.framer.com/motion)

- 表單 [useForm](https://react-hook-form.com/docs/useform) + [Zod](https://github.com/jquense/yup)

- 工具 [ahooks](https://ahooks.js.org) + [lodash](https://lodash.com) + [react-virtuoso](https://virtuoso.dev) + [niceModal](https://github.com/eBay/nice-modal-react)

## Router Mode

- `page router` 有封裝 `SSG` `ISR` `SSR` 快速設定模式
- `app router` 也可使用，但未封裝任何功能

## i18n

- 切路由不會重複帶語系，[錯誤示範](https://local.hashicorp.com)
- 語系懶加載不重整
- 商戶可獨立擴充語系
- 可針對路由動態新增語系

## Style

- `TailwindCSS` + `Shadcn` + `SASS`
- `spacing` 單位 `1:1`
- `SpriteSheet` 精靈圖合併工具
- `svg` 預設轉 `ReactComponent`
- `variable` 日夜或響應式變數設定

## Store

- 自動封裝 `devtools`
- 登出刪除數據機制
- 水合解決方案

## API

- `API` `Proto` 文件解析
- `API` 函式自動生成
- `useQuery` 整合自動取消請求

## SEO

- 獨立頁面 `SEO` 設定
- `sitemap` 自動生成

## Coding Style

- `eslint` `prettier` `husky` `lint-staged`
- 強制要求 `data-sid`

## Chore

- 黑科技：可以依照商戶配置替換 `import` 的模組，例如 `routes` 路由需要客製化、`layout` 中的 `header` 想替換
