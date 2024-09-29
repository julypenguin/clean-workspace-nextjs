import { forwardRef, HTMLAttributes, ReactNode, useEffect, useImperativeHandle, useMemo, useRef, useState } from 'react'
import { motion, useAnimation, useForceUpdate, useMotionValue } from 'framer-motion'
import { useWebsiteStore } from '@model/website/useWebsiteStore'
import { createPortal } from 'react-dom'
import { useClientOnly } from '@core/ClientOnly'
import { isClient } from '@model/platform'

type PropsType = {
  // 內容
  children: ReactNode
  // 預設位置
  x?: number
  y?: number
  // 貼邊
  edge?: boolean
  // 顯示狀態
  show?: boolean
  // 初始位置
  position?: (props: { control: ReturnType<typeof useAnimation>; size: { width: number; height: number }; box: { width: number; height: number } }) => void
}

export type FloatButtonRef = {
  // 視窗大小
  size: { width: number; height: number }
  // 浮動大小
  box: { width: number; height: number }
  // 動畫控制
  control: ReturnType<typeof useAnimation>
}

/** 浮動按鈕容器 */
export const FloatButton = forwardRef<FloatButtonRef, HTMLAttributes<HTMLDivElement> & PropsType>(
  ({ position, show = true, edge = true, x: propsX, y: propsY, children, ...props }: PropsType, ref) => {
    const [bg, setBG] = useState(false)
    const domRef = useRef<HTMLDivElement>(null)

    // 座標控制用
    const control = useAnimation()

    // 視窗大小
    const size = useWebsiteStore((state) => state.size)
    const [box, setBox] = useState({ width: 0, height: 0 })

    // 快取位置
    const x = useMotionValue(propsX)
    const y = useMotionValue(propsY)

    /** 初始 */
    useEffect(() => {
      if (!show) return
      if (box.width + box.height <= 0) return
      if (typeof position === 'function') position({ control, size, box })
      control.start({ opacity: 1 }).catch(console.warn)
    }, [show, control, box])

    /** 拖動限制範圍 */
    const dragConstraints = useMemo(
      () => ({
        top: box.height * 0.5,
        bottom: size.height - box.height * 0.5,
        left: box.width * 0.5,
        right: size.width - box.width * 0.5,
      }),
      [size, box],
    )

    /** 視窗大小變更時，在視窗外的要擠回視窗內 */
    useEffect(() => {
      let resetX = x.get()
      let resetY = y.get()
      if (x.get() > size.width) resetX = size.width - box.width * 0.5
      if (y.get() > size.height) resetY = size.height - box.height * 0.5
      control.start({ x: resetX, y: resetY }).catch(console.log)
    }, [size])

    /** Ref:  */
    useImperativeHandle(ref, () => ({ box, size, control }), [size, control, box])

    /** 拖曳結束 */
    const onDragEnd = () => {
      setBG(false)
      if (!edge) return
      if (x.get() > size.width * 0.5) {
        // 往右貼
        control.start({ x: size.width - box.width * 0.5, transition: { duration: 0.35, ease: 'backOut' } }).catch(console.warn)
      } else {
        // 往左貼
        control.start({ x: box.width * 0.5, transition: { duration: 0.35, ease: 'backOut' } }).catch(console.warn)
      }
    }

    /** 拖曳開始 */
    const onDragStart = () => {
      setBG(true)
    }

    /** Update size */
    useEffect(() => {
      if (!domRef?.current) return
      if (!show) return
      const width = domRef?.current?.offsetWidth || 0
      const height = domRef?.current?.offsetHeight || 0
      if (box.width !== width || box.height !== height) setBox({ width, height })
      // 監聽 dom 變化
      const observer = new ResizeObserver((entries) => {
        for (const entry of entries) {
          const { width, height } = entry.contentRect
          if (box.width !== width || box.height !== height) setBox({ width, height })
        }
      })
      observer.observe(domRef.current)
      return () => observer.disconnect()
    }, [domRef?.current, show])

    /** client only */
    const { initialized } = useClientOnly()
    const [forceUpdate] = useForceUpdate()

    if (!isClient || !initialized) return null
    return createPortal(
      <>
        {bg && (
          <div
            onPointerMove={(e) => e.preventDefault()}
            onTouchMove={(e) => e.preventDefault()}
            onMouseMove={(e) => e.preventDefault()}
            className="fixed left-0 top-0 h-full w-full"
            style={{ zIndex: 99999 }}
          />
        )}
        {!!show && (
          <motion.div
            style={{ x, y }}
            animate={control}
            drag={true}
            dragMomentum={false}
            onDragStart={onDragStart}
            onDragEnd={onDragEnd}
            dragConstraints={dragConstraints}
            initial={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            className="fixed left-0 top-0 z-150 leading-none"
            {...props}>
            <div
              ref={(ref) => {
                // @ts-ignore
                domRef.current = ref
                forceUpdate()
              }}
              className="absolute left-0 top-0 -translate-x-1/2 -translate-y-1/2 transform">
              {children}
            </div>
          </motion.div>
        )}
      </>,
      document.body,
    )
  },
)

FloatButton.displayName = 'FloatButton'
