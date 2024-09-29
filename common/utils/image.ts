import Compressor from 'compressorjs'
import { type StaticImageData } from 'next/image'

/**
 * 圖片壓縮
 * @test 有單元測試
 * @example
 * // 嘗試壓縮
 * const compress = await CompressorImage(file).catch(() => file);
 * // 轉換圖檔
 * const reader = new FileReader();
 * reader.onload = () => { ... };
 * reader.readAsDataURL(compress);
 */
export const compressorImageFile = function (file: File | Blob, options: Compressor.Options = {}): Promise<File | Blob> {
  return new Promise((resolve, reject) => {
    try {
      new Compressor(file, {
        convertSize: 2 * 1024 * 1024,
        // 壓縮最大寬度
        maxWidth: 1024,
        // 壓縮最大高度
        maxHeight: 1024,
        ...options,
        success: resolve,
        error: () => resolve(file),
      })
    } catch (error) {
      resolve(file)
    }
  })
}

/**
 * 精靈圖百分比轉換
 * @test 有單元測試
 * @example
 * <div className="w-[30%]">
 *  <div style={createSpriteBgStyle(sprite, 144, 153, 5, 424)} />
 * </div>
 */
export const createSpriteBgStyle = (
  // import image 時的原始屬性
  img: StaticImageData,
  // 切圖大小
  sheetWidth: number,
  sheetHeight: number,
  // 偏移座標
  sheetOffsetX: number,
  sheetOffsetY: number,
) => {
  const { src, width, height } = img
  const offsetX = Math.floor((100 / (width - sheetWidth)) * sheetOffsetX * 100) / 100
  const offsetY = Math.floor((100 / (height - sheetHeight)) * sheetOffsetY * 100) / 100
  return {
    paddingBottom: `${((sheetHeight / sheetWidth) * 100).toFixed(2)}%`,
    backgroundSize: `${((width / sheetWidth) * 100).toFixed(2)}% auto`,
    backgroundPosition: `${offsetX}% ${offsetY}%`,
    backgroundImage: `url(${src})`,
  }
}
