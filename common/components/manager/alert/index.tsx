import { memo, useCallback, useMemo, useRef } from 'react'
import { AlertOptions, closeAlert, shiftAlert, useAlertStore } from '@model/website/useAlertStore'
import { AnimatePresence, type Variants, motion } from 'framer-motion'
import { cn } from '@common/style'
import { useTimeout } from 'ahooks'
import { useCommon } from '@model'
import { Button } from './Button'

const BgVariants: Variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
}

const ModalVariants: Variants = {
  initial: { opacity: 0, scale: 0.5, transition: { duration: 0.2 } },
  animate: { opacity: 1, scale: 1, transition: { ease: 'backOut', duration: 0.2 } },
  exit: { opacity: 0, scale: 0.5, transition: { ease: 'easeInOut', duration: 0.2 } },
}

/** Alert 樣式 */
const AlertDialog = (props: AlertOptions & { onExitComplete: () => void }) => {
  const { t } = useCommon()

  // 防連點
  const disabledEvent = useRef(false)
  // 關閉後，強制無法點擊
  disabledEvent.current = props.enabled === false ? true : disabledEvent.current

  /** 關閉 */
  const onClose = useCallback(async () => {
    if (disabledEvent.current) return
    try {
      disabledEvent.current = true
      await Promise.all([props?.onClose?.({})])
    } finally {
      disabledEvent.current = false
    }
  }, [props])

  /** 確認 */
  const onConfirm = useCallback(async () => {
    if (disabledEvent.current) return
    try {
      disabledEvent.current = true
      if (typeof props?.onConfirm === 'function') await Promise.all([props?.onConfirm?.({})])
      else await Promise.all([props?.onClose?.({})] as any)
    } finally {
      disabledEvent.current = false
    }
  }, [props])

  /** 底部選單 */
  const Footer = useMemo(() => {
    // 處理中
    const closeLabel = props?.close === false ? '' : props.close || t('v2.E170')
    const confirmLabel = props?.confirm === false ? '' : props.confirm || t('v2.A292')

    if (!closeLabel && !confirmLabel) return null
    return (
      <div data-sid="708312447" className="flex items-center justify-center space-x-16">
        {/*取消*/}
        {closeLabel && (
          <Button variant="outline" onClick={onClose} className="min-w-[96rem]" {...props?.closeProps}>
            {closeLabel}
          </Button>
        )}
        {/*確認*/}
        {confirmLabel && (
          <Button onClick={onConfirm} className="min-w-[96rem]" {...props?.confirmProps}>
            {confirmLabel}
          </Button>
        )}
      </div>
    )
  }, [props, t, onClose, onConfirm])

  /** 客製或公版 */
  const Content = useMemo(() => {
    if (props.children) return <>{props.children?.({ onClose, onConfirm })}</>
    const title = typeof props.title === 'string' ? <h1 className={cn('mb-16 text-center text-16 font-bold', props.atomic?.title)}>{props.title}</h1> : props.title || null
    const message = typeof props.message === 'string' ? <p className={cn('mb-16 text-14', props.atomic?.message)}>{props.message}</p> : props.message || null
    return (
      <div data-sid="2114382101" className={cn('relative flex min-w-[220rem] flex-col items-center justify-center rounded-8 border-1 border-border bg-background p-16', props.atomic?.content)}>
        {/*標題*/}
        {title}
        {/*訊息*/}
        {message}
        {/*右上角浮動叉叉*/}
        {props.closeButton && (
          <button onClick={onClose} className="color-foreground absolute right-0 top-0 z-10 flex h-40 w-40 items-center justify-center">
            <svg className="h-20 w-20" width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z"
                fill="currentColor"
                fillRule="evenodd"
                clipRule="evenodd"
              />
            </svg>
          </button>
        )}
        {/*底部選單*/}
        {Footer}
      </div>
    )
  }, [props])

  /** 背景關閉 */
  const onBgClose = () => {
    if (disabledEvent.current) return
    closeAlert()
  }

  /** 防呆：如果這裡觸發，代表 onExitComplete 失靈 */
  useTimeout(props?.onExitComplete, props?.enabled ? undefined : 500)

  return (
    <AnimatePresence onExitComplete={props?.onExitComplete}>
      {/*背景*/}
      {props?.enabled && (
        <motion.div
          key="bg"
          variants={BgVariants}
          initial="initial"
          exit="initial"
          animate="animate"
          className={cn('fixed left-0 top-0 z-170 h-full w-full bg-black bg-opacity-70', props.atomic?.bg)}
        />
      )}
      {/*彈窗*/}
      {props.enabled && (
        <motion.div
          key="alert"
          variants={ModalVariants}
          initial="initial"
          exit="initial"
          animate="animate"
          className={cn('fixed left-0 top-0 z-170 flex h-full w-full items-center justify-center', props?.atomic?.body)}
          onClick={props?.bgClose ? onBgClose : undefined}>
          {Content}
        </motion.div>
      )}
    </AnimatePresence>
  )
}

/** 全域 Alert 管理 */
export const AlertsManager = memo(() => {
  // 彈窗訊息
  const alert = useAlertStore((state) => state?.alerts?.[0])
  if (!alert) return null
  return <AlertDialog {...alert} onExitComplete={shiftAlert} key="alert" />
})

AlertsManager.displayName = 'AlertsManager'
