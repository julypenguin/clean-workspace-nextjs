import ts from 'typescript'
import fs from 'fs'
import path from 'path'
import doctrine from 'doctrine'
import { execSync } from 'child_process'

const MODEL_PATH = path.resolve(import.meta.dirname, '../../model')
const EXPORT_MODEL_PATH = path.resolve(import.meta.dirname, '../../../document/docs', 'model.md')

/**
 * 遞迴讀取目錄中所有檔案
 * @param {string} dir - 目錄路徑
 * @param {string[]} fileList - 檔案列表
 * @returns {string[]} - 更新後的檔案列表
 */
const readAllFiles = (dir, fileList = []) => {
  const files = fs.readdirSync(dir)
  files.forEach((file) => {
    const filePath = path.join(dir, file)
    const stat = fs.statSync(filePath)
    if (stat.isDirectory()) {
      readAllFiles(filePath, fileList)
    } else {
      fileList.push(filePath)
    }
  })
  return fileList
}

/** 判斷有沒有 export */
function hasExportModifier(node) {
  return node.modifiers && node.modifiers.some((modifier) => modifier.kind === ts.SyntaxKind.ExportKeyword)
}

/**
 * 获取节点的名称
 * @param {ts.Node} node AST 节点
 * @returns {string} 节点名称
 */
function getNodeName(node) {
  if (ts.isFunctionDeclaration(node) && node.name) {
    return node.name.text
  } else if (ts.isVariableStatement(node)) {
    return node.declarationList.declarations[0].name.getText()
  } else if (ts.isClassDeclaration(node) && node.name) {
    return node.name.text
  } else if (ts.isInterfaceDeclaration(node) && node.name) {
    return node.name.text
  } else if (ts.isTypeAliasDeclaration(node) && node.name) {
    return node.name.text
  } else if (ts.isExportAssignment(node)) {
    return node.expression.getText()
  } else if (ts.isExportDeclaration(node) && node.exportClause) {
    return node.exportClause.elements.map((el) => el.name.getText()).join(', ')
  } else if (ts.isEnumDeclaration(node)) {
    return node?.name?.escapedText || 'unknown'
  }
  return node?.name?.text || 'unknown'
}

/**
 * 检查节点是否为函数类型
 * @param {ts.Node} node AST 节点
 * @returns {boolean} 是否为函数类型
 */
function isFunctionNode(node) {
  if (ts.isFunctionDeclaration(node) || ts.isFunctionExpression(node) || ts.isArrowFunction(node) || ts.isMethodDeclaration(node) || ts.isConstructorDeclaration(node)) {
    return true
  }
  if (ts.isVariableStatement(node)) {
    return node.declarationList.declarations.some((declaration) => {
      if (ts.isVariableDeclaration(declaration)) {
        const initializer = declaration.initializer
        if (initializer) {
          if (ts.isArrowFunction(initializer) || ts.isFunctionExpression(initializer)) {
            return true
          }
          // 檢查 async 關鍵字的函數
          if (ts.isFunctionExpression(initializer)) {
            return initializer.modifiers?.some((mod) => mod.kind === ts.SyntaxKind.AsyncKeyword) && ts.isArrowFunction(initializer)
          }
        }
      }
      return false
    })
  }
  return false
}

/** 判斷函式名是否一致 */
function isFunctionCallToIdentifier(node, identifier) {
  if (ts.isVariableDeclaration(node) && node.initializer) {
    if (ts.isCallExpression(node.initializer)) {
      const expression = node.initializer.expression
      if (ts.isIdentifier(expression) && expression.text === identifier) {
        return true
      }
    }
  }
  return false
}

/** 判斷函式名是否一致 */
function findFunctionCallInVariableStatement(node, functionName) {
  if (ts.isVariableStatement(node)) {
    return node.declarationList.declarations.some((declaration) => isFunctionCallToIdentifier(declaration, functionName))
  }
  return false
}

/**
 * 遍历 AST 节点
 */
function visitNode(source, content) {
  const results = []
  ts.forEachChild(source, (node) => {
    const isExported = hasExportModifier(node)
    if (!isExported) return // 只解析有導出的類型
    if (ts.isTypeAliasDeclaration(node)) return // 不解析 type
    const result = {}
    // name
    result.name = getNodeName(node)
      .trim()
      .replace(/^\[|]$/g, '')
    // type
    if (isFunctionNode(node)) {
      if (result.name.startsWith('use')) {
        result.type = result.name.startsWith('use') && !result.name.startsWith('Store') ? 'hooks' : 'store'
      } else {
        result.type = 'method'
      }
    } else if (findFunctionCallInVariableStatement(node, 'defineStore')) {
      result.type = 'store'
    } else {
      result.type = 'const'
    }
    const comments = ts.getLeadingCommentRanges(content, node.pos)
    if (comments) {
      comments.forEach((comment) => {
        const commentText = content.slice(comment.pos, comment.end).trim()
        result.parsed = doctrine.parse(commentText, { unwrap: true })
      })
    }
    results.push(result)
  })
  return results
}

const count = { method: 0, hooks: 0, store: 0, const: 0 }
const getType = (type) => {
  switch (type) {
    case 'method':
      count.method++
      return '<span class="method">method</span>'
    case 'hooks':
      count.hooks++
      return '<span class="hooks">hooks</span>'
    case 'store':
      count.store++
      return '<span class="store">store</span>'
    case 'const':
      count.const++
      return '<span class="const">const</span>'
    default:
      return ''
  }
}

/** 檔案列表 */
const list = readAllFiles(MODEL_PATH)
  // 過濾副檔名為 .ts 或 .tsx 且不在 __tests__ 目錄中的檔案
  .filter((file) => /\.tsx?$/.test(file) && !/__tests__|locales/.test(file))
  // 分類
  .map((file) => {
    const group = path.relative(MODEL_PATH, file).split(path.sep)[0]
    const isRoot = group === path.basename(file)
    return {
      file,
      isRoot,
      group: isRoot ? 'model' : group,
    }
  })

/** 產出 MODEL.md */
const groups = {}
for await (const { file, isRoot, group } of list) {
  // read
  const content = await fs.promises.readFile(file, 'utf-8')
  // ts parse
  const source = ts.createSourceFile(file, content, ts.ScriptTarget.Latest, true)
  // 解析內容
  const result = visitNode(source, content)
  if (result.length === 0) continue
  // Markdown
  if (!groups?.[group]) groups[group] = []
  groups[group].push({ file: path.relative(path.resolve(MODEL_PATH, '../../'), file), isRoot, result })
}

// Title
const modelMd = [
  '# Model 自動解析',
  '> 本文件由 `parse-model.mjs` 自動生成，請勿手動修改。主要用於尋找是否有可用 `model`',
  `
  <style>
    .method {
      background: #dc2626;
      color: white;
      display: inline-block;
      border-radius: 4px;
      padding: 1px 2px;
      font-size: 12px;
      font-weight: 500;
    }
    .hooks {
      background: #2563eb;
      color: white;
      display: inline-block;
      border-radius: 4px;
      padding: 1px 2px;
      font-size: 12px;
      font-weight: 500;
    }
    .const {
      background: #d97706;
      color: white;
      display: inline-block;
      border-radius: 4px;
      padding: 1px 2px;
      font-size: 12px;
      font-weight: 500;
    }
    .store {
      background: #059669;
      color: white;
      display: inline-block;
      border-radius: 4px;
      padding: 1px 2px;
      font-size: 12px;
      font-weight: 500;
    }
  </style>
`,
]
// Category
Object.keys(groups).forEach((group) => modelMd.push(`- [${group.toUpperCase()}](#${group.toUpperCase()})`))

Object.keys(groups).forEach((group) => {
  const contents = groups[group]
  modelMd.push(`## ${group.toUpperCase()}`)
  contents.forEach(({ file, isRoot, result }) => {
    const filename = path.basename(file)
    modelMd.push(`### ${filename}`)
    modelMd.push(`> [${file}](${file})`)
    result.forEach(({ name, type, parsed }) => {
      modelMd.push(`#### \`${name}\` ${getType(type)}`)
      modelMd.push(`- ${parsed?.description || '⚠️ 無註解'}`)
      if (!parsed?.tags) return
      parsed.tags?.forEach((tag) => {
        if (tag.title === 'example') {
          modelMd.push(`\`\`\`tsx\n${tag.description}\n\`\`\``)
          return
        }
        modelMd.push(`- @${tag.title}: ${tag.description}`)
      })
    })
  })
})

console.log('Creating...')
await fs.promises.writeFile(EXPORT_MODEL_PATH, modelMd.join('\n\n'))
console.log('Prettier...')
execSync(`npx prettier --write ${EXPORT_MODEL_PATH}`)
console.log('Total', count)
