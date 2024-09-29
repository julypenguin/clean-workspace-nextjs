import inquirer from 'inquirer'
import path from 'path'
import fs from 'fs'
import { execSync } from 'child_process'

function convertToCamelCase(str) {
  return str
    .replace(/_/g, '-')
    .split('-') // 以 "-" 分割字串
    .map((word, index) => {
      // 將第一個字母轉為大寫，其餘字母保留原樣
      if (index === 0) {
        return word.charAt(0).toUpperCase() + word.slice(1)
      } else {
        return word.charAt(0).toUpperCase() + word.slice(1)
      }
    })
    .join('') // 叉燒轉大寫駝峰
}

function convertCamelToUnderscore(str) {
  return str
    .replace(/([a-z])([A-Z])/g, '$1-$2')
    .replace(/([A-Z])([A-Z][a-z])/g, '$1-$2')
    .toLowerCase() // 駝峰轉叉燒
}

const EntryContent = (page, include) => {
  const name = convertToCamelCase(page)
  return `
  import { GenerateSideProps } from '@model/i18n/utils'
  import ${name}Page from './components/${include}'
  
  const { getStaticPaths, getStaticProps, getServerSideProps } = GenerateSideProps({
    props: {
      seo: { title: 'SEO', description: 'SEO' },
    },
    // ISR 才需要設定，緩存時間
    // revalidate: 30,
  })
  export { getStaticPaths, getStaticProps, getServerSideProps }
  
  /** Page ${name} */
  export default ${name}Page
  `
}

const PageContent = (page) => {
  const name = convertToCamelCase(page)
  return `
  /** ${name} */
  export default function ${name}Page() {
    return (
      <main data-sid="" className="flex w-full flex-col items-center gap-12 p-16">
        <h1 className="text-32">${name}</h1>
      </main>
    )
  }
  `
}

/** 建立商戶 */
const createPlatform = async (page, folder = true) => {
  const rootPath = folder ? path.resolve(process.env?.INIT_CWD, `${page}`) : path.resolve(process.env?.INIT_CWD)
  await fs.promises.mkdir(rootPath, { recursive: true })
  let entryFilePath = ''
  let componentFilePath = ''
  if (path.normalize(process.env?.INIT_CWD?.replace(/.*templates/, '')).split('/').length > 2) {
    // 內層入口
    entryFilePath = path.resolve(rootPath, `./${convertCamelToUnderscore(page)}.tsx`)
    // 建立組件
    componentFilePath = path.resolve(rootPath, `./components/${convertToCamelCase(page)}Page.tsx`)
  } else {
    // 頂層入口
    entryFilePath = path.resolve(rootPath, `./index.tsx`)
    // 建立組件
    componentFilePath = path.resolve(rootPath, `./components/Page.tsx`)
  }
  if (fs.existsSync(entryFilePath)) throw new Error('Page already exists.')
  if (fs.existsSync(componentFilePath)) throw new Error('Page components already exists.')
  await fs.promises.writeFile(entryFilePath, EntryContent(page, path.basename(componentFilePath)).replace(/\.tsx?/g, ''))
  await fs.promises.mkdir(path.dirname(componentFilePath), { recursive: true })
  await fs.promises.writeFile(componentFilePath, PageContent(page))
  // 排版
  execSync(`npx prettier --write ${entryFilePath} ${componentFilePath}`)
  // execSync(`npx eslint --fix ${entryFilePath} ${componentFilePath}`)
  console.log('Add Success.', path.resolve(componentFilePath))
  console.log('Add Success.', path.resolve(entryFilePath))
}

/** IIFE */
try {
  if (!process.env?.INIT_CWD) throw new Error('Unknown init path.')
  if (!process.env?.INIT_CWD?.includes('templates')) throw new Error('只能在 common/templates/* 目錄下使用')
  const prompt = [
    // 請輸入商戶名稱
    {
      type: 'input',
      name: 'page',
      message: 'Please enter the page name（請輸入頁面名稱）:',
    },
  ]
  if (path.normalize(process.env?.INIT_CWD?.replace(/.*templates/, '')).split('/').length > 2) {
    // 資料夾層
    prompt.push({
      type: 'confirm',
      name: 'folder',
      message: 'Create a directory？（是否建立資料夾？）：',
      default: true,
    })
  }
  const answers = await inquirer.prompt(prompt)
  if (!answers.page) throw new Error('Invalid page name.')
  await createPlatform(String(answers.page).toLowerCase(), answers.folder)
} catch (error) {
  console.error(String(error))
}
