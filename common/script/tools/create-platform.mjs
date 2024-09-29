import inquirer from 'inquirer'
import fs from 'fs'
import path from 'path'
import fsExtra from 'fs-extra'

const CLONE_TARGET = 'onbet'

/** 內容覆蓋 */
const replaceContent = async (path, replace) => {
  const content = await fs.promises.readFile(path, 'utf-8')
  await fs.promises.writeFile(path, replace(content))
}

/** 建立商戶 */
const createPlatform = async (platform) => {
  const templatePath = path.resolve(path.dirname('.'), `./${CLONE_TARGET}`)
  const platformPath = path.resolve(path.dirname('.'), platform)
  /** 已存在 */
  if (
    await fs.promises
      .access(platformPath)
      .then(() => true)
      .catch(() => false)
  )
    throw new Error('Platform already exists.')
  /** 複製整份 */
  await fsExtra.copy(templatePath, platformPath)
  /** 調整內容 */
  await replaceContent(path.resolve(platformPath, '.env.development'), (content) => content.replace(`NEXT_PUBLIC_PLATFORM=${CLONE_TARGET}`, `NEXT_PUBLIC_PLATFORM=${platform}`))
  await replaceContent(path.resolve(platformPath, '.env.production'), (content) => content.replace(`NEXT_PUBLIC_PLATFORM=${CLONE_TARGET}`, `NEXT_PUBLIC_PLATFORM=${platform}`))
  await replaceContent(path.resolve(platformPath, 'package.json'), (content) => content.replace(`@app/${CLONE_TARGET}`, `@app/${platform}`))
}

/** IIFE */
try {
  const answers = await inquirer.prompt([
    // 請輸入商戶名稱
    {
      type: 'input',
      name: 'platform',
      message: 'Please enter the platform name:',
    },
  ])
  if (!answers.platform) throw new Error('Invalid platform name.')
  await createPlatform(answers.platform)
} catch (error) {
  console.error(String(error))
}
