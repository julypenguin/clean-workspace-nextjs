import NiceModal, { useModal as useNiceModal } from '@ebay/nice-modal-react'
import { createElement, JSX, useRef } from 'react'
import { AnimatePresence, motion, type Variants } from 'framer-motion'
import { useMemoizedFn, useTimeout } from 'ahooks'
import { cn } from '@common/style'
import { useHideBodyScroll } from '@common/hooks/useHideBodyScroll'

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

/** 預設動畫 */
const ModalVariantMap = new Map<string, Variants>([
  [
    'scale',
    {
      initial: { opacity: 0, scale: 0.5, transition: { duration: 0.3 } },
      animate: { opacity: 1, scale: 1, transition: { ease: 'backOut', duration: 0.3, delay: 0.1 } },
      exit: { opacity: 0, scale: 0.5, transition: { ease: 'easeInOut', duration: 0.2 } },
    },
  ],
  [
    'fade',
    {
      initial: { opacity: 0, transition: { duration: 0.3 } },
      animate: { opacity: 1, transition: { ease: 'backOut', duration: 0.3, delay: 0.1 } },
      exit: { opacity: 0, transition: { ease: 'easeInOut', duration: 0.2 } },
    },
  ],
])

/** niceModal 彈窗 hooks 封裝 */
export const useModal = (options: Options) => {
  const modal = useNiceModal(options?.name || '')
  const contentRef = useRef<HTMLDivElement>(null)

  /** 隱藏捲軸 */
  useHideBodyScroll(modal.visible)

  /** 關閉時刪除彈窗 */
  const onExitComplete = useMemoizedFn(() => {
    options?.onExitComplete?.()
    modal.remove()
  })

  /** 動畫失靈補救機制 */
  useTimeout(onExitComplete, modal.visible ? undefined : 1000)

  /** 關閉彈窗並返回承諾 */
  const onModalClose = <T = any,>(meta?: T) => {
    modal?.resolve({ status: 'CLOSE', meta } satisfies ModalResolve)
    modal?.hide()?.catch(console.warn)
  }

  /** 點背景關閉 */
  const onBgClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!options?.bgClose) return
    if (e.target !== contentRef?.current && contentRef?.current?.contains(e.target as HTMLElement)) return
    modal?.resolve({ status: 'BG_CLOSE', meta: e } satisfies ModalResolve)
    modal?.hide()?.catch(console.warn)
  }

  return { modal, onModalClose, onExitComplete, onBgClick, contentRef }
}

type PropsType = Omit<ReturnType<typeof useModal>, 'onExitComplete' | 'onBgClick'> & { variant: Variants; Dialog: (props: Parameters<typeof motion.div>[0]) => JSX.Element }

/**
 * 封裝 useModal
 * @example
 * const Modal = defineModal(({ Dialog }) => <Dialog />, { ... })
 *
 * // 全域註冊
 * const Modal = dynamic(() => import('path/to/Modal'), { ssr: false })
 * NiceModal.register('DEMO', (props) => <Modal {...props} />) // 請使用 lazy load，避免 chunk 失效
 * NiceModal.show('DEMO', { test: 123 }) // 呼叫彈窗，後方參數為 props
 *
 * // 不註冊的呼叫方式
 * import Modal from 'path/to/Modal'
 * NiceModal.show(Modal, { test: 123 }) // 呼叫彈窗，後方參數為 props
 */
export const defineModal = <TParam = {},>(children: (props: TParam & PropsType) => JSX.Element | null, options: Options = {}) => {
  options.bg = options.bg ?? true
  options.bgClose = options.bgClose ?? false
  const variant = ModalVariantMap.get(options?.variant || '') || ModalVariantMap.get('scale')!

  /** 彈窗容器 */
  const Dialog = (props: Parameters<typeof motion.div>[0]) => {
    return (
      <motion.div data-sid="1157698344" {...variant} {...props}>
        {props.children}
      </motion.div>
    )
  }

  return NiceModal.create<TParam & PropsType>((props) => {
    const hooks = useModal(options)
    const { modal, onExitComplete, onModalClose, onBgClick, contentRef } = hooks
    const elementProps = { ...props, variant, modal, onModalClose, Dialog }

    return (
      <AnimatePresence onExitComplete={onExitComplete}>
        {modal.visible && options.bg && (
          <motion.div
            key="bg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5, transition: { delay: 0.05 } }}
            exit={{ opacity: 0 }}
            data-sid="667416004"
            className={cn('fixed left-0 top-0 z-100 flex h-full w-full items-center justify-center bg-black', options.bgClassName)}
          />
        )}
        {modal.visible && (
          <div ref={contentRef} onClick={onBgClick} className={cn('fixed left-0 top-0 z-100 flex h-full w-full items-center justify-center', options.className)}>
            {createElement<TParam & PropsType>(children, elementProps)}
          </div>
        )}
      </AnimatePresence>
    )
  })
}
