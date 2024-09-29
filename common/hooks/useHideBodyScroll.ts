import { useEffect } from 'react'

/**
 * 隱藏 body 捲軸，彈窗時用
 */
export const useHideBodyScroll = (status: boolean) => {
  /** 隱藏捲軸 */
  useEffect(() => {
    if (!status) return
    if (document.body?.style) {
      document.documentElement.classList?.add('overflow-hidden', 'overscroll-y-none')
    }
    document.documentElement.classList?.add('overscroll-y-none')
    return () => {
      document.documentElement.classList?.remove('overflow-hidden', 'overscroll-y-none')
      document.documentElement.classList?.remove('overscroll-y-none')
    }
  }, [status])
}
