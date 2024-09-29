import { AnimatePresence, motion, type Variants } from 'framer-motion'
import { cn } from '@common/style'
import { useEffect, useRef } from 'react'
import { useTimeout } from 'ahooks'
import { createPortal } from 'react-dom'
import { useHideBodyScroll } from '@common/hooks/useHideBodyScroll'
import { isClient } from '@model/platform'

type PropsType = {
  // 要被彈的內容
  children: React.ReactNode
  // 關閉通知，動畫結束
  onExitComplete?: () => void
  // open
  open?: boolean | string | number
  onClose?: (type: 'bg' | 'close') => void
  // 點擊背景關閉
  bgClose?: boolean
  // 自定義樣式
  atomic?: { bg?: string; body?: string }
  // 彈出方式
  variant?: 'center' | 'bottom' | 'none'
  // data-sid
  dataSid?: string
}

const BgVariants: Variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
}

const ModalVariantMap = new Map<string, Variants>([
  [
    'center',
    {
      initial: { opacity: 0, scale: 0.5, transition: { duration: 0.2 } },
      animate: { opacity: 1, scale: 1, transition: { ease: 'backOut', duration: 0.2 } },
      exit: { opacity: 0, scale: 0.5, transition: { ease: 'easeInOut', duration: 0.1 } },
    },
  ],
  [
    'bottom',
    {
      initial: { opacity: 0, y: 200, transition: { duration: 0.2 } },
      animate: { opacity: 1, y: 0, transition: { ease: 'easeInOut', duration: 0.2 } },
      exit: { opacity: 0, y: 200, transition: { ease: 'easeInOut', duration: 0.1 } },
    },
  ],
  [
    'none',
    {
      initial: { opacity: 0, y: 0, transition: { duration: 0 } },
      animate: { opacity: 0, y: 0, transition: { ease: 'easeInOut', duration: 0 } },
      exit: { opacity: 0, y: 0, transition: { ease: 'easeInOut', duration: 0 } },
    },
  ],
])

/** 手幹 Popup */
export const Popup = ({ variant = 'center', bgClose = true, open, onClose, children, onExitComplete, atomic, dataSid, ...props }: PropsType) => {
  const domRef = useRef<HTMLDivElement>(null)

  /** 背景關閉 */
  const onBgClose = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target !== domRef?.current && domRef?.current?.contains(e.target as HTMLElement)) return
    onClose?.('bg')
  }

  /** 隱藏捲軸 */
  useHideBodyScroll(!!open)

  /** onExitComplete 失靈補救機制 */
  useTimeout(() => onExitComplete?.(), open ? undefined : 500)

  if (!isClient) return null
  return createPortal(
    <AnimatePresence onExitComplete={onExitComplete}>
      {/*背景*/}
      {open && (
        <motion.div key="bg" variants={BgVariants} initial="initial" exit="initial" animate="animate" className={cn('fixed left-0 top-0 z-150 h-full w-full bg-black bg-opacity-70', atomic?.bg)} />
      )}
      {/*彈窗*/}
      {open && (
        <motion.div
          ref={domRef}
          key="alert"
          variants={ModalVariantMap.get(variant) || {}}
          initial="initial"
          exit="initial"
          animate="animate"
          className={cn('fixed left-0 top-0 z-150 flex h-full w-full items-center justify-center', variant === 'bottom' && 'items-end', atomic?.body)}
          onClick={bgClose ? onBgClose : undefined}
          data-sid={dataSid}
          {...props}>
          {children}
        </motion.div>
      )}
    </AnimatePresence>,
    document.body,
  )
}
