import { SyntheticEvent, useCallback } from 'react'

/**
 * 圖片加載失敗時，載入預設圖
 */
export const useImageError = (imagePath: string) => {
  /** 只接受第一次 imagePath */
  const onError = useCallback((e: SyntheticEvent<HTMLImageElement, Event>) => {
    const target = e.target as HTMLImageElement
    if (!target || target.getAttribute('data-error')) return
    target.setAttribute('data-error', target.getAttribute('src') || '')
    target.src = imagePath
  }, [])

  return {
    onError,
  }
}
