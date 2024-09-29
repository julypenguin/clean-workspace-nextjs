import { describe, expect, test } from '@jest/globals'
import { compressorImageFile, createSpriteBgStyle } from '../image'

describe('Image', () => {
  /** compressorImageFile */
  test('compressorImageFile', async () => {
    // 無法測試壓縮，走個錯誤也返回原始物件流程
    const file = new File([], 'icon.png', { type: 'image/png' })
    const compress = await compressorImageFile(file)
    expect(compress.size).toBe(file.size)
  })

  /** createSpriteBgStyle */
  test('createSpriteBgStyle', () => {
    const style = createSpriteBgStyle({ src: '/test.png', width: 770, height: 582 }, 144, 153, 5, 424)
    expect(style).toEqual({
      paddingBottom: '106.25%',
      backgroundSize: '534.72% auto',
      backgroundPosition: '0.79% 98.83%',
      backgroundImage: 'url(/test.png)',
    })
  })
})
