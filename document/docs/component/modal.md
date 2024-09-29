# Modal

> 此 Modal 非彼 Model

彈窗處理，以下幾種解決方案

## NiceModal

> 使用 `defineModal` `common/model/website/useModal.tsx` 詳細參數參考檔案

`AnimatePresence` + 半透明背景 + 自動隱藏 `body` 捲軸 + 自動處理 `modal.resolve`

- `Dialog` 封裝用的容器，自己寫一個 `motion.div` 也可以

- `onClose` 調用關閉，需要返回數據時，帶入第一個參數中：`onClose({ hello: 'world' })`

```ts title="options"
type Options = {
  /** 預設有一個背景, false = 隱藏 */
  bg?: boolean
  /** 點擊背景關閉 */
  bgClose?: boolean
  /** 客製 className 可以覆蓋化定位方向, Z軸等 */
  bgClassName?: string
  className?: string
  /** 結束事件 */
  onExitComplete?: () => void
  /** 有使用註冊時在使用 */
  name?: string
  /** 預設動畫 */
  variant?: 'scale' | 'fade'
}
```

```tsx
const Modal = defineModal(
  ({ Dialog, onClose }) => {
    return (
      <Dialog className="flex h-200 w-200 items-center justify-center bg-foreground p-16 text-background" data-sid="856120185" onClick={onClose}>
        關閉
      </Dialog>
    )
  },
  {
    /** Options */
    bgClose: true,
    variant: 'scale',
  },
)
```

彈窗方式

```ts
const res = await NiceModal.show(Modal) // 等待彈窗關閉 onClose 的時候要傳入值，才會有 meta
console.log(res) // { meta: { hello: 'world' }, status: 'CLOSE' | 'BG_CLOSE' }
```

## Popup

> 彈窗組件包裝 `common/components/manager/popup/index.tsx` 詳細參數參考檔案

`AnimatePresence` + 半透明背景 + 預設動畫 + 自動隱藏 `body` 捲軸

```tsx
export const PopupModal = () => {
  const [open, setOpen] = useState(false)

  return (
    <Popup open={open} onClose={() => setOpen(false)} onExitComplete={/* 關閉動畫結束可以處理的事 */}>
      <Details />
    </Popup>
  )
}
```
