import Spritesmith from 'spritesmith'
import fs from 'fs'
import path from 'path'
import { execSync } from 'child_process'
import imagemin from 'imagemin'
import imageminPngquant from 'imagemin-pngquant'

const SourcePath = process.argv?.[2]
if (!SourcePath) throw 'Source path is required'
console.log('Creating...')

const ProjectPath = path.resolve(import.meta.dirname, '../../../')
const BasePath = SourcePath.replace(ProjectPath, '')

/** Data Sid 計算 */
const CreateHash = (str) => {
  let hash = 0
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i)
    hash = (hash << 5) - hash + char
    hash = hash & hash // Convert to 32-bit integer
  }
  return String(hash)
}

// 圖檔名
const FILE_NAME_IMG = 'sprite.png'
// 代碼名稱
const FILE_NAME_TSX = 'sprite-sheets.tsx'
// 模板
const TSX_FILE_TEMPLATE = (SheetContent, SID) => `
// ⚠️⚠️⚠️ 程式碼自動產出，請勿手動修改 ⚠️⚠️⚠️
import { CSSProperties, useMemo } from 'react'
import * as React from 'react'
import { cn } from '@common/style'
import { createSpriteBgStyle } from '@common/utils/image'
import SpriteRes from './sprite.png'

const SheetData = ${SheetContent} as const

type SheetNames = keyof typeof SheetData

const createStyle = (sheet: (typeof SheetData)[SheetNames], width?: number, height?: number) => {
  const styleProperty: CSSProperties = createSpriteBgStyle(SpriteRes, sheet.width, sheet.height, sheet.x, sheet.y)
  /** 使用 paddingBottom 等比 */
  if (!width && !height) return styleProperty
  delete (styleProperty as CSSProperties).paddingBottom
  /** 使用寬高計算 */
  if (height) {
    styleProperty.height = \`\${height}rem\`
    styleProperty.width = \`\${(sheet.width / sheet.height) * height}rem\`
    return styleProperty
  }
  styleProperty.width = \`\${width}rem\`
  styleProperty.height = \`\${(sheet.height / sheet.width) * width!}rem\`
  return styleProperty
}

type Props = {
  // 寬度
  width?: number
  // 高度
  height?: number
  // 精靈圖名稱
  sheet: SheetNames
}

/**
 * ⚠️⚠️⚠️ 程式碼自動產出，請勿手動修改 ⚠️⚠️⚠️
 * 尺寸 width height className="w-100" 三種其中一種，無法共存
 * className 只有寬度有效，高度無效
 * 等比寬度請直接使用 className 設定 w-full w-1/2 w-[40%] 等
 */
const SpriteSheet = React.forwardRef<HTMLDivElement, Props & React.HTMLAttributes<HTMLDivElement>>(({ ...props }, ref) => {
  const usePaddingBottom = !props?.height && !props.width
  const style = useMemo<CSSProperties>(() => createStyle(SheetData[props.sheet], props.width, props.height), [props?.sheet, props?.height, props?.width])

  return (
    <div data-sid="${SID}" ref={ref} {...props} style={usePaddingBottom ? undefined : style} className={cn('inline-block w-full select-none leading-0', props?.className)}>
      {usePaddingBottom ? <span style={style} className="block w-full" /> : null}
    </div>
  )
})

SpriteSheet.displayName = 'SpriteSheet'

export default SpriteSheet
`

// 資料夾下的圖檔
const files = fs
  .readdirSync(SourcePath)
  .filter((file) => /\.(png|jpe?g)$/.test(file) && file !== FILE_NAME_IMG)
  .map((file) => path.join(SourcePath, file))

/** 產生精靈圖 + 程式碼 */
await new Promise((resolve, reject) => {
  Spritesmith.run({ src: files }, async (err, result) => {
    if (err) {
      reject(err)
      return
    }
    // 保存精靈圖
    fs.writeFileSync(path.resolve(SourcePath, FILE_NAME_IMG), result.image)
    // 轉出 sprite-sheets.tsx
    const sheets = {}
    Object.entries(result.coordinates).forEach(([key, { x, y, width, height }]) => {
      const basename = path.basename(key, path.extname(key)).replace(/-/g, '_')
      sheets[basename] = { x, y, width, height }
    })
    const tsx = TSX_FILE_TEMPLATE(JSON.stringify(sheets), CreateHash(path.resolve(BasePath, FILE_NAME_TSX) + 'SpriteSheet'))
    fs.writeFileSync(path.resolve(SourcePath, FILE_NAME_TSX), tsx)
    resolve(true)
  })
})

/** 排版 */
console.log('Prettier...')
execSync(`npx prettier --write ${path.resolve(SourcePath, FILE_NAME_TSX)}`)
/** 壓縮 png */
console.log('Optimize...')
await imagemin([path.resolve(SourcePath, FILE_NAME_IMG)], {
  destination: path.dirname(path.resolve(SourcePath, FILE_NAME_IMG)),
  plugins: [
    imageminPngquant({
      // [壓縮質量的最低值, 壓縮質量的最高值]
      quality: [0.8, 1],
    }),
  ],
})
