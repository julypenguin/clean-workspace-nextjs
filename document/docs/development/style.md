# Style

> 樣式指南

## 切換日夜間

> 適用於切換其他 theme

```ts
import { useTheme } from 'next-themes'
useTheme().setTheme('dark') // 切換夜間
```

## TailwindCSS 配置

> 預設值在 `common/style/tailwind.config.ts`

- 每個專案都有獨立的 `tailwind.config.ts` 需要配置

- 已經封裝一個 `config` 可以只填擴充屬性，`variable` 參考[自訂屬性](#自訂屬性)

  ```ts title="{PLATFORM}/tailwind.config.ts"
  import { TemplateViewsDemo, withConfig } from '@app/common/style/tailwind.config'
  import variable from './style/variable'

  export default withConfig(variable, {
    content: [
      ...TemplateViewsDemo,
      // 填入當前專案下的 content 判斷條件
    ],
  })
  ```

### Spacing 單位

- 單位是 `1:1`，`w-10 = 10px`

- `0 ~ 200` 有 `0.5` 單位，例如: `px-2.5 mt-4.5 mb-100.5`

- 最大只到 `1000`，例如 `w-1000`

## Class Name 工具

- [clsx](https://www.npmjs.com/package/clsx) 合併工具

  ```tsx
  import { clsx } from 'clsx'
  // 輸出 className="w-100 h-100"
  ;<div className={clsx('hidden', show && 'flex')} />
  ```

- [tailwind-merge](https://www.npmjs.com/package/tailwind-merge) `TailwindCSS` 屬性合併工具，包含 `clsx` 功能

  ```tsx
  import { cn } from '@/style'
  // 輸出 className="w-100 h-100" 會過濾重複
  ;<div className={cn('h-10 h-100 w-10 w-100')} />
  ```

:::info
使用時機依照 `className` 有沒有可能被覆蓋，如果有可能被覆蓋就使用 `cn`，如果不會被覆蓋就使用 `clsx`
:::

## 自訂屬性

### 色碼

> 會自動依照日夜間切換色碼

```ts title="{PLATFORM}/style/variable.ts"
export default {
  // root = day = 日間
  root: {
    '--vd-bg01': '#fff',
  },
  // night = 夜間
  night: {
    '--vd-bg01': '#000',
  },
  // 可以第三個色系，ThemeProvider 需要新增屬性
  theme3: {
    '--vd-bg01': '#f00',
  },
} satisfies TailwindVariable
```

使用方式

```scss
.box {
  color: var(--vd-bg01);
}
```

className

```tsx
<div className="bg-vd-bg01 text-vd-bg01 border-vd-bg01" />
```

### 響應式 spacing 配置

> 會自動依照當前寬度設定對應的屬性

```ts title="{PLATFORM}/style/variable.ts"
/** 客製參數範例，自動掛在 spacing */
const responsive = {
  // RWD
  header: {
    sm: '40rem',
    md: '60rem',
    lg: '80rem',
  },
  // 如果固定數值，就只要設定 sm
  box: {
    sm: '40rem',
  },
}

export default {
  responsive,
} satisfies TailwindVariable
```

使用方式

```scss
.box {
  color: var(--header);
}
```

className

```tsx
<div className="h-header pt-header mt-header top-header" />
```

## Schadcn

> [官方](https://ui.shadcn.com/docs/installation/next)

:::info
目前已經有 `95%` 的組件備份在 `/common/components/shadcn`，供複製使用，不用下指令
:::

1. 需要到商戶專案下執行指令，根目錄中無法執行
2. 下完指令後，新增的組件會有單位問題，需要把 `rem` 單位 `* 4`。可參考指令 [yarn rem](/commands#spacing-單位-w-10--w-40)
3. 檢查組件中依賴的 `cn` 位置是否是 `import { cn } from '@common/style'`

## 注意事項

- 本專案 `1rem = 1px` 所以字體大小是 `1px`
