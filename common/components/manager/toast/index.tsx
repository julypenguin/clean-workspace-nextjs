import React, { memo } from 'react'
import { removeToast, useToastStore, useToastClear } from '@model/website/useToastStore'
import { AnimatePresence, motion, type Variants } from 'framer-motion'

/** 動畫資訊 */
const Variants: Variants = {
  initial: { scale: 0, transition: { duration: 0.2 } },
  animate: { scale: 1, transition: { ease: 'backOut', duration: 0.2 } },
}

/** 全域 Toast 管理 */
const ToastManager = memo(() => {
  const toasts = useToastStore((state) => state.toasts)
  useToastClear(toasts.length)

  /** 沒有訊息 */
  if (!toasts.length) return null

  /** 彈出訊息動畫 */
  return (
    <div data-sid="-173439243" className="pointer-events-none fixed left-0 top-0 z-180 flex h-1/2 w-full flex-col items-center justify-end">
      <AnimatePresence>
        {toasts.map((item) => (
          <motion.div
            layout
            key={item.id}
            variants={Variants}
            initial="initial"
            animate={item.enabled ? 'animate' : 'exit'}
            className="pointer-events-auto flex max-w-[200rem] cursor-pointer items-center justify-center rounded-8 bg-primary px-16 py-10 text-center text-16 text-primary-foreground"
            onClick={() => removeToast(item.id)}>
            {item.message}
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  )
})

ToastManager.displayName = 'ToastManager'

export { ToastManager }
