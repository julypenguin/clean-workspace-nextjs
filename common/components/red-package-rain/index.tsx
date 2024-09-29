import { createPortal } from 'react-dom'
import { isClient } from '@model/platform'
import { useHideBodyScroll } from '@common/hooks/useHideBodyScroll'
import Image from '@core/Image'
import dynamic from 'next/dynamic'
import AutoSizer, { type Size } from 'react-virtualized-auto-sizer'
import { RED_PACKAGE_VIEWS_STATUS, useRedPackageGrab, useRedPackageRain } from '@model/user/activity/useRedPackageRain'
import { useEffect, useRef } from 'react'
import { defineModal } from '@model/website/useModal'
import NiceModal from '@ebay/nice-modal-react'
import { useCommon } from '@model'
import { FloatButton } from '@core/FloatButton'
import { useRWD } from '@model/website/useWebsiteStore'
import { useCountdown } from '@model/website/useCountdown'
import { getTimeDataBySeconds } from '@common/utils/date'
import TopBgRes from './assets/screen-top-bg.png'
import SunRes from './assets/sun.png'
import ShinneRes from './assets/shinne.png'
import CloseRes from './assets/screen-close.png'
import PrizeRes from './assets/bg-prize.png'
import PrizeLoseRes from './assets/bg-prize-lose.png'
import PrizeCloseRes from './assets/icon-close.png'
import RainFloatRes from './assets/rain-float.png'
import EggCloseRes from './assets/egg-close.png'

/** konva 畫布版: cjs 沒有 canvas 一定要用懶載 */
const RainCanvas = dynamic(() => import('./RainCanvas'), { ssr: false })

/** 搶紅包結果彈窗 */
const GrabResultModal = defineModal<ReturnType<typeof useRedPackageRain>>(
  ({ Dialog, grab, modal, onClose, onModalClose }) => {
    const { success, effective, message, amount } = useRedPackageGrab(grab)
    const { t } = useCommon()

    return (
      <Dialog data-sid="-672184037" className="relative">
        <div className="relative z-10 flex h-380 w-296 flex-col bg-cover px-38 pb-28 pt-46" style={{ backgroundImage: `url(${grab?.success ? PrizeRes.src : PrizeLoseRes.src})` }}>
          {success ? (
            <>
              {/*搶成功*/}
              <div className="flex h-178 flex-shrink-0 items-end justify-center">
                {/*金額*/}
                <span className="rain-container__result-win pb-104 text-center text-27 font-black text-[#d88b53]">{amount}</span>
              </div>
              <div className="flex flex-1 flex-col items-center justify-center">
                {/*恭喜您抢到*/}
                <span className="flex flex-1 items-center justify-center pt-16 text-16 font-medium text-white">{t('v2.betslip_05')}</span>
                {/*请至您的帐户内查询入帐金额*/}
                <span className="py-14 text-12 font-medium text-white">{t('v2.deposit_011')}</span>
              </div>
            </>
          ) : (
            <>
              {/*搶失敗*/}
              <div className="flex h-178 flex-shrink-0 flex-col items-center justify-center text-[#8a8681]">
                {/*对不起*/}
                <h1 className="mb-8 text-center text-23 font-black">{t('v2.common_077')}</h1>
                {/*您未达到抢红包条件*/}
                {effective && <h1 className="text-center text-18 font-black">{t('v2.bonus_08')}</h1>}
              </div>
              {/*錯誤訊息*/}
              <div className="my-8 flex flex-1 flex-col items-center justify-start overflow-y-auto break-words py-8 text-center font-medium leading-20 text-white">
                <div className="flex flex-1 flex-col items-center justify-center">
                  {effective ? (
                    <span className="leading-25">
                      {effective.label}:&nbsp;
                      <br />
                      <span className="text-[#fff077]">{effective.effective}</span>
                      &nbsp;/&nbsp;{effective.total}
                    </span>
                  ) : (
                    <span>{message}</span>
                  )}
                </div>
              </div>
            </>
          )}
        </div>
        {/*關閉*/}
        <Image
          onClick={() => {
            onClose?.()
            onModalClose?.()
          }}
          src={PrizeCloseRes}
          className="absolute -bottom-40 left-1/2 z-20 h-44 w-44 -translate-x-1/2 cursor-pointer transition-transform hover:scale-105"
        />
        {/*光暈背景*/}
        <div className="absolute left-1/2 top-1/2 z-0 h-500 w-500 -translate-x-1/2 -translate-y-1/2">
          <Image src={ShinneRes} className="h-500 w-500 animate-spin" style={{ animationDuration: '20s' }} />
        </div>
      </Dialog>
    )
  },
  {
    bg: false,
  },
)

/** 紅包雨浮動 */
const RedPackageFloat = ({ onClose, countdown }: ReturnType<typeof useRedPackageRain>) => {
  const { size, rem } = useRWD()
  const countdownRef = useRef<HTMLDivElement>(null)
  const val = getTimeDataBySeconds(Math.max(0, countdown - Date.now()) * 0.001).mmss

  /** 倒數樣式，僅處理樣式，不用處理倒數結束 */
  useCountdown(
    (date) => {
      countdownRef.current?.setAttribute('data-val', date.mmss)
    },
    {
      key: countdown,
      end: countdown,
      immediate: true,
    },
  )

  return (
    <FloatButton data-sid="1807874910" x={size.width - rem(28)} y={size.height - rem(150)}>
      <div ref={countdownRef} className="relative h-56 w-60 pt-34 text-center text-15 text-red-500 after:relative after:z-10 after:content-[attr(data-val)]" data-val={val}>
        {/*關閉*/}
        <Image onClick={onClose} src={EggCloseRes} className="absolute -top-3 right-0 z-10 h-18 w-18 cursor-pointer transition-transform hover:scale-110" />
        {/*紅包*/}
        <Image src={RainFloatRes} className="absolute left-0 top-0 z-0 h-full w-full" />
      </div>
    </FloatButton>
  )
}

/** Full Fixed */
const FixedFullRainContainer = (props: ReturnType<typeof useRedPackageRain>) => {
  const { grab, onGrab, onClose } = props

  /** 隱藏捲軸 */
  useHideBodyScroll(true)

  /** 搶到後的彈窗 */
  useEffect(() => {
    if (!grab) return
    NiceModal.show(GrabResultModal, props).catch(console.warn)
  }, [grab])

  return (
    <div data-sid="-1736500845" className="fixed left-0 top-0 z-50 flex h-full w-full flex-col items-center justify-start overflow-y-auto bg-black bg-opacity-30">
      {/*關閉按鈕*/}
      <Image onClick={onClose} src={CloseRes} className="absolute right-10 top-10 z-30 h-30 w-30 cursor-pointer transition-transform hover:scale-105" />
      {/*頂部布幕*/}
      <div className="pointer-events-none absolute z-20 w-auto">
        <Image src={TopBgRes} className="relative z-10 h-60 w-auto md:h-100" />
        {/*光暈*/}
        <div className="absolute left-1/2 top-0 z-0 h-500 w-500 -translate-x-1/2 -translate-y-1/2">
          <Image src={SunRes} className="h-500 w-500 animate-spin" style={{ animationDuration: '20s' }} />
        </div>
      </div>
      {/*下雨區塊*/}
      <div className="relative z-0 h-full w-full md:w-4/6 lg:w-1/2">
        <AutoSizer>{({ width, height }: Size) => <RainCanvas onGrab={onGrab} width={width} height={height} />}</AutoSizer>
      </div>
    </div>
  )
}

/** 紅包雨 */
export const InitRedPackageRain = () => {
  const props = useRedPackageRain()
  const { status } = props

  // 前端才顯示
  if (!isClient) return null
  // 不顯示任何畫面
  if (status === RED_PACKAGE_VIEWS_STATUS.NONE) return null

  // 倒數計時浮動視窗
  if (status === RED_PACKAGE_VIEWS_STATUS.COUNTDOWN) return createPortal(<RedPackageFloat {...props} />, document.body)
  return createPortal(<FixedFullRainContainer {...props} />, document.body)
}
