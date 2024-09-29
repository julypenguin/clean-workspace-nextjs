import { StaticImageData } from 'next/image'
import { DetailedHTMLProps, forwardRef, ImgHTMLAttributes } from 'react'

export type ImageProps = Omit<DetailedHTMLProps<ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>, 'src'> & { src?: string | StaticImageData; alt?: string | number; fallback?: string }

/** 以後有機會再改回 next/image */
const Image = forwardRef<HTMLImageElement, ImageProps>(({ src, alt, fallback, ...props }, ref) => {
  const url = typeof src === 'string' ? src : (src as StaticImageData)?.src || ''

  /** 錯誤處理 */
  const onError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    if (!fallback) return
    const target = e.target as HTMLImageElement
    if (target.src === fallback || !!target?.getAttribute('data-origin')) return
    target.setAttribute('data-origin', url)
    target.src = fallback
  }

  return <img ref={ref} src={url} alt={String(alt)} onError={onError} {...props} />
})

Image.displayName = 'Image'

export default Image
export { Image }
