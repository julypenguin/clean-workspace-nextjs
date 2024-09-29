import fs from 'node:fs'
import { execSync } from 'child_process'

const filePath = process.argv[2]
if (!filePath) throw new Error('filename undefined')

// 使用正則表達式找到並替換所有帶數值的 Tailwind CSS 類名
const result = fs
  .readFileSync(filePath, 'utf-8')
  .replace(
    /(w|h|m|p|pt|pr|pb|pl|px|py|ps|pe|mt|mr|mb|ml|mx|my|space-x|space-y|border|border-t|border-r|border-b|border-l|rounded|rounded-t|rounded-r|rounded-b|rounded-l|rounded-tl|rounded-tr|rounded-br|rounded-bl|gap|gap-x|gap-y|top|right|bottom|left|translate-x|translate-y)-(\d+(\.\d+)?)/g,
    (match, prefix, $1) => {
      const num = Number($1) * 4
      console.log(prefix, $1, `=> ${prefix}-${num}`)
      return `${prefix}-${num}`
    },
  )

const regex = /\[-\d+(rem|px|em|vh|vw|%)]/g
if (regex.test(result)) {
  const matches = result.match(regex)
  console.log('================================================')
  console.log('There may be formatting that requires manual')
  matches.forEach((match) => console.log(match))
  console.log('================================================')
}

await fs.promises.writeFile(filePath, result)
execSync(`./node_modules/.bin/prettier --write ${filePath}`)
