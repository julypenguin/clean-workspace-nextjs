import type { StageProps } from 'react-konva/ReactKonvaCore'
import { Layer, Stage, Image as Texture } from 'react-konva'
import { useWebsiteStore } from '@model'
import { forwardRef, RefObject, useCallback, useEffect, useImperativeHandle, useMemo, useRef } from 'react'
import Konva from 'konva'
import { useMemoizedFn } from 'ahooks'
import { useRWD } from '@model/website/useWebsiteStore'
import PackageRes from './assets/rain-bag.png'
import Package2Res from './assets/rain-money.png'

/** 紅包的數量 */
const RED_PACKAGE_1_COUNT = 30 // 紅包樣式
const RED_PACKAGE_2_COUNT = 10 // 福袋樣式
const RED_SPEED_MIN = 2 // 最小速度
const RED_SPEED_MAX = 5 // 最大速度

type RedPackedProps = { src: string; onClick: () => void }

/** 紅包小物件 */
const RedPackage = forwardRef<RefObject<Konva.Image>, RedPackedProps>(({ src, onClick }: RedPackedProps, ref) => {
  const textureResource = useRef(new Image())
  const textureRef = useRef<Konva.Image>(null)
  const { breakpoints } = useRWD()
  const size = breakpoints({ 0: [72 * 0.6, 95 * 0.6], 768: [72, 95] })

  /** load image */
  useEffect(() => {
    textureResource.current.src = src
    if (textureRef.current) {
      textureRef.current.x(-72)
      textureRef.current.y(-95)
    }
  }, [src])

  /** ref */
  useImperativeHandle(ref, () => textureRef)

  return <Texture onPointerDown={onClick} ref={textureRef} width={size[0]} height={size[1]} image={textureResource.current} />
})

RedPackage.displayName = 'RedPackage'

/** 紅包下雨區塊 canvas 版本 */
const RainCanvas = (props: StageProps & { onGrab: () => void }) => {
  const size = useWebsiteStore((state) => state.size)
  const canvasWidth = props?.width || size.width
  const canvasHeight = props?.height || size.height

  type FrameCache = {
    target: RefObject<Konva.Image> // 紅包實例
    life: number // 壽命，毫秒
    delay: number // 延遲
    speed: number // 掉落速度，每 0.016 毫秒
    click?: boolean // 被點擊
  }

  /** 動畫控制 */
  const refs = useRef<{ list: FrameCache[]; ticker?: Konva.Animation; over: boolean }>({
    list: [], // 紅包
    ticker: undefined, // 動畫
    over: false, // 結束
  })

  /** 紅包列表 */
  const rewards = useMemo(() => {
    const style1 = Array.from({ length: RED_PACKAGE_1_COUNT }).fill({ src: PackageRes.src })
    const style2 = Array.from({ length: RED_PACKAGE_2_COUNT }).fill({ src: Package2Res.src })
    return [...style1, ...style2] as Array<{ src: string }>
  }, [])

  /** 動畫控制 */
  useEffect(() => {
    const ticker = new Konva.Animation((frame) => {
      const delta = (frame?.timeDiff || 16) * 0.06 // 0.06 = N / 1000 * 60

      refs.current.list?.forEach((item) => {
        const { target, life, click } = item
        const instance = target.current
        // 沒有實體 | 實體被點擊
        if (!instance || click) return
        /** 已結束 */
        if (refs.current.over) {
          // 淡出
          if (instance.isVisible()) {
            const alpha = Math.max(0, instance.opacity() - 0.05)
            instance.opacity(alpha)
            if (alpha <= 0) instance.hide()
          }
          return
        }
        if (life <= 0) {
          /** 初始化 */
          item.speed = Math.random() * (RED_SPEED_MAX - RED_SPEED_MIN) + RED_SPEED_MIN
          // 壽命 = (高度 / (速度 * 60)) * 1000
          item.life = (canvasHeight / (item.speed * 60)) * 1000
          // 沒有 anchorX 可以設定，所以扣掉寬度
          instance.x(Math.random() * (canvasWidth - instance.width()))
          instance.y(-100)
          instance.scaleX(1)
          instance.scaleY(1)
          instance.opacity(1)
          instance.show()
        } else {
          /** 落下動畫 */
          if (item.delay > 0 && !refs.current.over) {
            item.delay -= frame?.timeDiff || 16 // 延遲
            return
          }
          item.life -= frame?.timeDiff || 16 // 壽命
          instance.y(instance.y() + item.speed * delta) // 掉落
          if (item.life <= 0) {
            // 結束
            instance.hide()
          } else if (item.life <= 1000) {
            // 淡出
            instance.opacity(Math.max(0, instance.opacity() - 0.05))
          }
        }
      })
    })
    ticker?.start()
    refs.current.ticker = ticker

    const visibleChange = () => (document?.visibilityState === 'hidden' ? refs.current.ticker?.stop() : refs.current.ticker?.start())
    document.addEventListener('visibilitychange', visibleChange)

    return () => {
      ticker?.stop()
      document.removeEventListener('visibilitychange', visibleChange)
    }
  }, [refs, canvasWidth])

  /** 點擊領取 */
  const fetching = useRef(false) // 防止重複點擊
  const onClick = useMemoizedFn(async (index: number) => {
    const ref = refs.current.list[index]
    if (!ref || !ref?.target?.current) return
    if (fetching.current || refs.current.over) return
    fetching.current = true
    try {
      /** 動畫 */
      const instance = ref.target.current
      const [width, height, x, y] = [instance.width(), instance.height(), instance.x(), instance.y()]
      const scale = 1.4
      // 紅包點開動畫
      ref.click = true
      instance?.to?.({
        x: x - width * (scale - 1) * 0.5,
        y: y - height * (scale - 1) * 0.5,
        scaleX: scale,
        scaleY: scale,
        duration: 0.4,
        opacity: 0,
        easing: Konva.Easings.EaseInOut,
        onFinish: () => instance?.hide?.(),
      })
      /** 等待結果 */
      await Promise.all([props.onGrab?.()])
      // 沒錯誤代表領取成功
      refs.current.over = true
    } finally {
      fetching.current = false
    }
  })

  /** 綁定 ref */
  const bindRefs = useCallback((index: number, target: RefObject<Konva.Image> | null) => {
    if (!target) return
    if (!refs.current?.list?.[index]) refs.current.list[index] = { target, speed: 1, life: 0, click: false, delay: Math.random() * 5000 }
    else refs.current.list[index].target = target
  }, [])

  return (
    <Stage {...props}>
      <Layer>
        {rewards.map((item, index) => (
          <RedPackage onClick={() => onClick(index)} key={index} {...item} ref={(ref) => bindRefs(index, ref)} />
        ))}
      </Layer>
    </Stage>
  )
}

export default RainCanvas
