# Alerts

:::tip
為何叫 `alerts` 是因為 `alert` 是 `web` 保留字
:::

與 `UI` 是分離的，要套版型時，直接套 `model` 即可

- 一次只能彈出一個，不會重疊，但會排隊

- 層級小於 `toast`

## 使用範例

- 一般

```ts
alerts({ message: '一般' })
alerts({ message: '右上角有關閉', closeButton: true })
alerts({ message: '背景可關閉', bgClose: true })
```

- 丟組件進去

```tsx
alerts({
  message: '改樣式',
  atomic: { title: 'text-36 font-black', message: 'bg-primary text-primary-foreground mb-24' },
})
```

```tsx
alerts({
  bgClose: true,
  children: ({ onClose }) => (
    <div onClick={onClose} className="flex h-100 w-100 items-center justify-center rounded-8 bg-white p-16">
      自訂內容
    </div>
  ),
})
```

- 按鈕非同步

```ts
alerts({
  message: '按鈕非同步',
  bgClose: true,
  onConfirm: async ({ close }) => {
    await new Promise((resolve) => setTimeout(resolve, 1000))
    close?.()
    alerts({ message: '在彈出一個' })
  },
})
```

- 不給關閉

```ts
alerts({ message: '關不掉，等 5s', close: false, confirm: false })
setTimeout(() => closeAlert(), 5000)
```

- 其他請看選項

```ts
// 自訂彈窗
export type AlertOptions<T = any> = {
  // 唯一彈窗，可避免重複顯示
  key?: string
  // 標題
  title?: string | React.ReactNode
  // 內容
  message?: string | React.ReactNode
  // 自訂：覆蓋 title message
  children?: ({ onClose, onConfirm }: { onClose: () => Promise<void>; onConfirm: () => Promise<void> }) => React.ReactNode
  // 啟用狀態
  enabled?: boolean
  // 點擊背景是否可關閉
  bgClose?: boolean
  // 樣式覆蓋
  atomic?: { bg?: string; body?: string; content?: string; title?: string; message?: string }
  // 是否顯示浮動 X 按鈕
  closeButton?: boolean
  // 關閉
  close?: string | boolean // 取消文字
  onClose?: (options: { close?: () => void }) => void | Promise<void> // 取消事件
  closeProps?: T // 自訂按鈕參數，但因為客製化無法指定型別
  // 確認
  confirm?: string | boolean // 確認文字
  onConfirm?: (options: { close?: () => void }) => void | Promise<void> // 確認事件
  confirmProps?: T // 自訂按鈕參數，但因為客製化無法指定型別
}
```

## 樣式修改

- 參考初版

  ```tsx title="common/components/manager/alert/index.tsx"
  /** 全域 Alert 管理 */
  export const AlertsManager = memo(() => {
    // 彈窗訊息
    const alert = useAlertStore((state) => state?.alerts?.[0])
    if (!alert) return null

    /** 自訂樣式 */
    return <div>...</div>
  })

  AlertsManager.displayName = 'AlertsManager'
  ```

  掛載到需要客製的專案上

  ```tsx title="onbet/pages/_app.tsx"
  const GlobalComponent = () => {
    return (
      <>
        {/*Global Manager*/}
        <AlertsManager />
      </>
    )
  }
  ```
