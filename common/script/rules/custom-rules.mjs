import path from 'node:path'
import tsPaths from 'tsconfig-paths'
import { ESLintUtils } from '@typescript-eslint/utils'

const { paths } = await tsPaths.loadConfig(path.resolve(import.meta.dirname, '../../tsconfig.json'))
paths['@app/common'] = ['./*'] // fix: yarn workspace
paths['@app'] = ['../*'] // fix: yarn workspace
const ProjectPath = path.resolve(import.meta.dirname, '../../../')
const CommonPath = path.resolve(ProjectPath, './common')
const TemplatePath = path.resolve(CommonPath, './templates')

/** import 路徑轉實體路徑 */
function resolveImport(importPath, fileContentPath) {
  for (const alias in paths) {
    const aliasPattern = alias.replace('/*', '')
    const aliasPaths = paths[alias]
    if (importPath.startsWith(aliasPattern)) {
      const relativePath = importPath.replace(aliasPattern, '')
      return path.resolve(CommonPath, aliasPaths[0].replace('/*', relativePath))
    }
  }
  return path.resolve(path.dirname(fileContentPath), importPath)
}

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

/** 判斷是否有設定 data-sid */
const ruleComponentDataSid = {
  meta: {
    fixable: 'code',
  },
  /** @param {import("eslint").RuleContext} context */
  create(context) {
    const basePath = `/${path.relative(ProjectPath, context.filename)}`
    let service
    let checker

    /** Check Props can use */
    const checkProps = (node) => {
      if (!service) {
        service = ESLintUtils.getParserServices(context)
        checker = service.program.getTypeChecker()
      }
      const tsNode = service.esTreeNodeToTSNodeMap.get(node)
      if (!tsNode?.attributes) return false
      const contextualType = checker.getContextualType(tsNode.attributes)
      const props = contextualType.getProperties()
      let hasDataSid = 0
      const aria = props.filter((item) => {
        if (/data-sid|dataSid/.test(item.escapedName || '')) hasDataSid++
        return item?.escapedName?.startsWith?.('aria-')
      })
      return hasDataSid > 0 || aria.length > 10
    }

    /** 顯示錯誤 */
    const onError = (node, hash) => {
      context.report({
        node: node?.name,
        message: `⛔ 請配置 data-sid="${hash}" 屬性 ⛔`,
        fix(fixer) {
          // 覆蓋
          const attr = node?.attributes?.find((attr) => attr?.name?.name === 'data-sid')
          if (attr) return fixer.replaceText(attr.value, `"${hash}"`)
          // 新增
          return fixer.insertTextAfter(node.name, ` data-sid="${hash}"`)
        },
      })
    }

    /** 檢查 data-sid */
    const JSXElementDataSidCheck = (openingElement, hash) => {
      if (!openingElement?.name?.name && !openingElement?.name?.object?.name) return
      // 尋找 data-sid
      const attr = openingElement?.attributes?.find((attr) => attr?.name?.name === 'data-sid')
      if (!attr && !/^[a-z]/.test(openingElement?.name?.name)) {
        if (!checkProps(openingElement)) return // 非 HTML 組件
      }
      // 比對 data-sid
      if (attr?.value?.type === 'Literal' && attr?.value?.value === hash) {
        return // data-sid=""
      } else if (attr?.value?.expression?.type === 'Literal' && attr?.value?.expression?.value === hash) {
        return // data-sid={""}
      } else if (attr?.value?.expression?.type === 'Identifier') {
        return // 有索引
      }
      onError(openingElement, hash)
    }

    /** 取得函式名稱 */
    const getFunctionName = (node) => {
      let parent = node.parent
      while (parent) {
        if (parent.type === 'FunctionDeclaration') {
          return parent.id.name
        }
        if (parent.type === 'FunctionExpression' || parent.type === 'ArrowFunctionExpression') {
          if (parent.parent && parent.parent.type === 'VariableDeclarator') {
            return parent.parent.id.name
          }
          if (parent.parent && parent.parent.type === 'CallExpression' && parent.parent.parent && parent.parent.parent.type === 'VariableDeclarator') {
            return parent.parent.parent.id.name
          }
          return node?.openingElement?.name?.name || '(anonymous)'
        }
        parent = parent.parent
      }
      return node?.openingElement?.name?.name || '(unknown)'
    }

    /** 是否有倒出 */
    const isExportedFunction = (node, functionName) => {
      let parent = node.parent
      while (parent) {
        if (parent.type === 'Program') {
          for (const bodyNode of parent.body) {
            if (bodyNode.type === 'ExportNamedDeclaration' && bodyNode.specifiers) {
              if (bodyNode.specifiers.some((specifier) => specifier.local.name === functionName)) {
                return true
              }
            }
          }
          return false
        }
        if (parent.type === 'ExportNamedDeclaration' || parent.type === 'ExportDefaultDeclaration') return true
        parent = parent.parent
      }
      return false
    }

    return {
      /** JSX Element */
      JSXElement(node) {
        const isTopLevel = node?.parent?.type !== 'JSXElement' && /ReturnStatement/.test(node.parent.type)
        if (isTopLevel) {
          /** 頂層的 JSX 元素 */
          const name = getFunctionName(node)
          const hash = CreateHash(`${basePath}${name}`)
          JSXElementDataSidCheck(node?.openingElement, hash)
        } else {
          /** 非頂層，只檢查值不要求必填 */
          if (node?.openingElement?.attributes?.some((attr) => attr?.name?.name === 'data-sid')) {
            const index = node?.parent?.children?.indexOf?.(node) - 1
            const name = getFunctionName(node) + (index > -1 ? String(index) : '')
            const hash = CreateHash(`${basePath}${name}`)
            JSXElementDataSidCheck(node?.openingElement, hash)
          }
        }
      },
    }
  },
}

/** templates 禁止相互引用 */
const ruleCheckTemplateImportTemplate = (context, node) => {
  if (!context.filename.startsWith(TemplatePath)) return
  const importPath = path.relative(TemplatePath, resolveImport(node.source.value, context.filename))
  if (!importPath.startsWith(TemplatePath)) return
  const useTemplate = importPath?.match?.(/[^/]+/)?.[0] || ''
  const selfTemplate = path.relative(TemplatePath, context.filename)?.match?.(/[^/]+/)?.[0]
  if (!useTemplate || !selfTemplate) return
  if (useTemplate === selfTemplate) return
  context.report({ node, message: '⛔ templates 禁止相互引用 ⛔' })
}

/** common 禁止引用商戶 */
const ruleCheckCommonImportPlatform = (context, node) => {
  if (!context.filename.startsWith(CommonPath)) return
  // common 沒有 @/* 路徑
  if (node.source.value.startsWith('@/')) {
    context.report({ node, message: '⛔ common 禁止使用 @/* ⛔' })
    return
  }
  // common 禁用 @app
  if (/^@app/.test(node.source.value) && !context.filename.includes('/common/')) {
    context.report({ node, message: '⛔ common 禁止引用 @app ⛔' })
    return
  }
  const importPath = path.relative(ProjectPath, resolveImport(node.source.value, context.filename))
  const useCommon = importPath?.match?.(/[^/]+/)?.[0] || ''
  if (!useCommon || useCommon === 'common') return // common 以外的資料夾代表是其他專案，沒有資料夾帶表示 node_modules
  context.report({ node, message: '⛔ common 禁止引用商戶 ⛔' })
}

/** 禁止導出星號 */
const ruleDisableExportAll = (context, node) => {
  if (!node.source) return
  context.report({ node, message: '⛔ 禁止 export * ⛔' })
}

/** API 命名需要 req 開頭 */
const ruleApiName = (context, node) => {
  if (!context.filename.endsWith('/apis/custom.ts')) return
  node.declaration.declarations.forEach((declaration) => {
    if (declaration.id.type !== 'Identifier' || /^req[A-Z][a-zA-Z0-9]*$/.test(declaration.id.name)) return
    context.report({
      node: declaration.id,
      message: '⛔ API 命名請以 req 開頭駝峰命名 ⛔',
      data: { name: declaration.id.name },
    })
  })
}

/** 禁止寫 class */
const ruleDisableClass = (context, node) => {
  if (/StompIO|ErrorBoundary/.test(node?.id?.name)) return // 只有我可以寫 :D
  context.report({ node, message: '⛔ 禁止寫 class。不需要複雜到包裝 OOP ⛔' })
}

/** 禁止 hooks 返回數量超過 12 個 */
const ruleDisableHooksReturn = (context, node) => {
  let current = node
  let max = 12
  while (current && --max > 0) {
    if (current.type === 'FunctionDeclaration' || current.type === 'FunctionExpression' || current.type === 'ArrowFunctionExpression') {
      const functionName = current.id ? current.id.name : current.parent && current.parent.id && current.parent.id.name
      if (!functionName || !functionName?.startsWith('use')) return
      if ((node.argument?.properties?.length || 0) <= 12) return
      context.report({ node, message: `⛔ ${functionName} 返回的屬性超過 12 個 ⛔` })
      return
    }
    current = current.parent
  }
}

/** State 請使用小寫駝峰規則命名 */
const ruleDisableStateName = (context, node) => {
  if (node.callee.name !== 'defineStore') return
  const firstArgument = node.arguments[0]
  // TODO init function
  if (!firstArgument && firstArgument?.type === 'ObjectExpression') return
  firstArgument?.properties?.forEach((property) => {
    if (property.key && property.key.name && !/^[a-z][a-zA-Z0-9]*$/.test(property.key.name)) {
      context.report({ node: property.key, message: '⛔ 請使用小寫駝峰規則命名 ⛔', data: { name: property.key.name } })
    }
  })
}

/** 禁止動態拼裝語系 */
const ruleDisableDynamicI18n = (context, node) => {
  if (node.callee.name !== 't') return
  if (node.arguments.length <= 0) return
  const arg = node.arguments[0]
  // `${1}${2}`
  if (arg.type === 'TemplateLiteral' && arg.expressions.length > 0) {
    context.report({ node, message: '⛔ 禁止動態拼裝語系 ⛔' })
    return
  }
  // '1' + '2'
  if (arg.type === 'BinaryExpression') {
    context.report({ node, message: '⛔ 禁止動態拼裝語系 ⛔' })
    return
  }
  // test ? `${1}` : `${2}`
  if (arg.type === 'ConditionalExpression') {
    if (arg.consequent.type === 'TemplateLiteral' && arg.consequent.expressions.length > 0) {
      context.report({ node, message: '⛔ 禁止動態拼裝語系 ⛔' })
    }
    if (arg.alternate.type === 'TemplateLiteral' && arg.alternate.expressions.length > 0) {
      context.report({ node, message: '⛔ 禁止動態拼裝語系 ⛔' })
    }
  }
}

/** defineStore 命名規則一定要 store 結尾 */
const ruleDisableDefineStoreName = (context, node) => {
  if (!node.init) return
  /** defineStore 命名規則一定要 use 開頭 store 結尾 */
  if (node.init.type !== 'CallExpression' || node.init.callee.name !== 'defineStore' || node.id.type !== 'ArrayPattern' || node.id.elements.length <= 0) return
  const firstElement = node.id.elements[0]
  if (firstElement.type !== 'Identifier') return
  if (!firstElement.name.endsWith('Store')) context.report({ node: firstElement, message: '⛔ 請使用 Store 結尾命名 ⛔' })
  if (!firstElement.name.startsWith('use')) context.report({ node: firstElement, message: '⛔ 請使用 use 開頭命名 ⛔' })
}

/** 工具類僅能純函示 */
const ruleDisableUtils = (context, node) => {
  if (!/\/utils\//.test(context.filename) || /__tests__/.test(context.filename)) return
  const importPath = node.source.value
  const isRelativeImport = /^\.\.\/|^@(app|common|core|templates|model)/.test(importPath)
  if (isRelativeImport) return context.report({ node, message: '⛔ 這裡只放純函示，不准有依賴 ⛔' })
}

/** 商互客製化判斷純函式 */
const ruleDisablePlatformCustom = (context, node) => {
  if (!/\/platform\/custom/.test(context.filename) || /__tests__/.test(context.filename)) return
  const importPath = resolveImport(node.source.value, context.filename)
  // 只要不是 common/model 開頭代表有外部依賴
  const onlyModel = /common\/model/.test(importPath)
  if (!onlyModel) return context.report({ node, message: '⛔ 這裡只放純函示，不准有依賴 ⛔' })
}

/** 禁止在 model 外使用 localStorage */
const ruleDisableLocalStorage = (context, node) => {
  if (/common\/model/.test(context.filename)) return
  if (node?.object?.name === 'window' && node?.property?.name === 'localStorage') context.report({ node, message: '⛔ 請使用 setStorageStore ⛔' })
  if (node?.object?.name === 'localStorage') context.report({ node, message: '⛔ 請使用 setStorageStore ⛔' })
}

/** 禁止在 model 外使用 sessionStorage */
const ruleDisableSessionStorage = (context, node) => {
  if (/common\/model/.test(context.filename)) return
  if (node?.object?.name === 'window' && node?.property?.name === 'sessionStorage') context.report({ node, message: '⛔ 請使用 setSessionStore ⛔' })
  if (node?.object?.name === 'sessionStorage') context.report({ node, message: '⛔ 請使用 setSessionStore ⛔' })
}

/**
 * 禁止任何依賴，只要路徑匹配就是有 import
 */
const ruleDisableImport = (context, node) => {
  // platform/index
  if (/common\/model\/platform\/index/.test(context.filename)) {
    return context.report({ node, message: '⛔ 此檔案禁止 import 任何依賴 ⛔' })
  }
}

/**
 * 禁止 import @types
 * 自動引入，import 反而會壞掉
 */
const ruleDisableImportTypes = (context, node) => {
  if (!/@types/.test(node.source.value)) return
  context.report({
    node,
    message: '⛔ 禁止 import @types ⛔',
  })
}

/**
 * model 中禁止 import 縮寫 @model，只能完整路徑
 * 因為需要保有 chunk 功能，縮寫會導致 chunk 連環依賴
 */
const ruleDisableModelImportModelRootPath = (context, node) => {
  if (!context.filename.includes('/model/') || !/^@model$/.test(node.source.value)) return
  context.report({
    node,
    message: '⛔ 在 model 中禁止 import 縮寫 "@model"，請使用完整路徑 "@model/..." ⛔',
  })
}

/** 禁止部分依賴 */
const ruleDisablePartialImport = (context, node) => {
  switch (node.source.value) {
    /** import { useRouter } from "next/router" */
    case 'next/router': {
      if (/model\/(i18n)\/index/.test(context.filename)) return
      if (!node.specifiers.find((specifier) => specifier.imported && /useRouter/.test(specifier.imported.name))) return
      context.report({ node, message: '⛔ 需要跳轉請使用 useCommon 或 router.push ⛔' })
      break
    }
    /** import { useMessages, useTranslations } from "next-intl" */
    case 'next-intl': {
      if (/model\/(i18n|website)\//.test(context.filename)) return
      if (!node.specifiers.find((specifier) => specifier.imported && /useMessages|useTranslations/.test(specifier.imported.name))) return
      context.report({ node, message: '⛔ 需要翻譯請使用 useCommon 或 i18n.t ⛔' })
      break
    }
    /** import { create } from "zustand" */
    case 'zustand': {
      if (context.filename.endsWith('model/utils.ts')) return
      if (!node.specifiers.find((specifier) => specifier.imported && specifier.imported.name.startsWith('create'))) return
      context.report({ node, message: '⛔ 請使用 @model defineStore 來建立 store ⛔' })
      break
    }
    /** import Image from "next/image" */
    case 'next/image': {
      if (context.filename.endsWith('core/Image.tsx') || context.filename.endsWith('common/utils/image.ts')) return
      context.report({ node, message: '⛔ 請使用 @core/Image 來替代 next/image ⛔' })
      break
    }
    /** import { md5 } from "js-md5" */
    case 'js-md5': {
      if (context.filename.endsWith('/utils/index.ts')) return
      context.report({ node, message: '⛔ 請使用 @common/utils 來替代 js-md5 ⛔' })
      break
    }
  }
  // 禁止引用 shadcn 模版
  if (/\/components\/shadcn/.test(node.source.value)) {
    context.report({ node, message: '⛔ 這是 shadcn 模版，禁止引用 ⛔' })
  }
}

/** Model 中禁止使用 any */
const ruleDisableModelAny = (context, node) => {
  if (!/\/models?\/|\/utils\//.test(context.filename)) return
  if (node.typeAnnotation.type !== 'TSAnyKeyword') return
  context.report({ node, message: '⛔ Model 中禁止使用 any ⛔' })
}

/** 禁止 useStore 解構取值 */
const ruleDisableDestructureUseBoundStore = (context, node, sourceCode) => {
  if (node?.init?.type !== 'CallExpression') return // 是否調用一個函示
  if (!node?.init?.callee?.name?.startsWith('use') || !node?.init?.callee?.name?.endsWith('Store')) return // 不是 store
  if (node?.init?.arguments.length) {
    const body = node?.init?.arguments?.[0]?.body
    if (body?.type === 'MemberExpression') return
    if (body?.type === 'CallExpression' || body?.type === 'ChainExpression') {
      const bodyCode = sourceCode.getText(body)
      if (
        /\.(slice|reduce|filter|map|sort|reverse|splice|concat|push|pop|shift|unshift|find|findIndex|flat|flatMap|forEach|from|isArray|lastIndexOf|of|toString|values|entries|keys|copyWithin|fill|reduceRight|toLocaleString)\(/g.test(
          bodyCode,
        )
      ) {
        context.report({ node, message: '⛔ state => 禁止根解構或非參照值 ⛔' })
        return
      }
    }
    // 內部函式禁止解構
    if (body?.type === 'ObjectExpression') {
      context.report({ node, message: '⛔ 禁止 state => ({ ...state }) ⛔' })
      return
    }
    // 禁止使用空索引
    if (body?.type === 'LogicalExpression') {
      if (body.operator !== '||') return
      if (body.right.type === 'ObjectExpression' && body.right.properties.length === 0) {
        // store 刷新會導致一直觸發新記憶體位置
        context.report({ node, message: '⛔ 禁止 state => state.key || {} ⛔' })
        return
      }
      if (body.right.type === 'ArrayExpression' && body.right.elements.length === 0) {
        // store 刷新會導致一直觸發新記憶體位置
        context.report({ node, message: '⛔ 禁止 state => state.key || [] ⛔' })
      }
      return
    }
    // 禁止返回同屬性
    if (body?.type === 'Identifier' && node?.init?.arguments?.[0]?.body?.name === node?.init?.arguments?.[0]?.body?.parent?.body?.name) {
      context.report({ node, message: '⛔ 禁止 state => state 請指定屬性 state => state.key ⛔' })
      return
    }
    return
  }
  // // 判斷 UseBoundStore 型別
  // const service = ESLintUtils.getParserServices(context)
  // if (service.program.getTypeChecker().getTypeAtLocation(service.esTreeNodeToTSNodeMap.get(node.init.callee))?.aliasSymbol?.escapedName !== 'UseBoundStore') return // 不是 store
  context.report({ node, message: '⛔ useStore 禁止解構取值，確定需要全部，使用 useStore(getAll) ⛔' })
}

/** 檢查註解 */
const ruleCheckComment = (context, node, sourceCode) => {
  if (!/\/common\/(model|utils)/.test(context.filename) || context.filename.includes('i18n')) return
  const commentsBefore = sourceCode.getCommentsBefore(node)
  if (commentsBefore.length !== 0) return
  if (node?.declaration?.type === 'TSTypeAliasDeclaration') return
  if (node?.specifiers?.some((item) => item.type === 'ExportSpecifier')) return
  context.report({
    node,
    message: '⛔ 求你了，就一段註解，只要幾秒鐘 ⛔',
  })
}

/** 各種自訂規則 */
const ruleCustomCommon = {
  /** @param {import("eslint").RuleContext} context */
  create(context) {
    let sourceCode
    const getSourceCode = () => {
      if (!sourceCode) sourceCode = context.getSourceCode()
      return sourceCode
    }
    return {
      ReturnStatement(node) {
        ruleDisableHooksReturn(context, node) // 禁止返回的屬性超過 12 個
      },
      ExportAllDeclaration(node) {
        ruleDisableExportAll(context, node) // 禁止 export All
      },
      ExportNamedDeclaration(node) {
        ruleApiName(context, node) // API 命名需要 req 開頭
        ruleCheckComment(context, node, getSourceCode()) // 檢查註解
      },
      ExportDefaultDeclaration(node) {
        ruleCheckComment(context, node, getSourceCode()) // 檢查註解
      },
      ClassDeclaration(node) {
        ruleDisableClass(context, node) // 禁止寫 class
      },
      ClassExpression(node) {
        ruleDisableClass(context, node) // 禁止寫 class
      },
      CallExpression(node) {
        ruleDisableStateName(context, node) // State 請使用小寫駝峰規則命名
        ruleDisableDynamicI18n(context, node) // 禁止動態拼裝語系
      },
      VariableDeclarator(node) {
        ruleDisableDefineStoreName(context, node) // defineStore 命名規則一定要 store 結尾
        ruleDisableDestructureUseBoundStore(context, node, getSourceCode()) // 禁止 useStore 解構取值
      },
      MemberExpression(node) {
        ruleDisableLocalStorage(context, node) // 禁止在 model 外使用 localStorage
        ruleDisableSessionStorage(context, node) // 禁止在 model 外使用 sessionStorage
      },
      ImportDeclaration(node) {
        ruleCheckTemplateImportTemplate(context, node) // templates 禁止相互引用
        ruleCheckCommonImportPlatform(context, node) // common 禁止引用商戶
        ruleDisableUtils(context, node) // 工具類判斷純函示
        ruleDisablePlatformCustom(context, node) // 商互客製化檔案判斷純函示
        ruleDisableImport(context, node) // 完全禁止有 import 的檔案
        ruleDisableModelImportModelRootPath(context, node) // model 中禁止 import 縮寫 @model，只能完整路徑
        ruleDisableImportTypes(context, node) // 禁止 import @types
        ruleDisablePartialImport(context, node) // 禁止部分依賴
      },
      TSTypeAnnotation(node) {
        ruleDisableModelAny(context, node) // Model 中禁止使用 any
      },
    }
  },
}

export const Basic = {
  rules: {
    // 各種自訂規則
    'rule-custom-common': ruleCustomCommon,
  },
}

export const DataSid = {
  rules: {
    // data-sid
    'export-component-data-sid': ruleComponentDataSid,
  },
}
