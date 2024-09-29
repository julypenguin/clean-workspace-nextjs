import protobufjs from 'protobufjs'
import fs from 'fs'
import path from 'path'
import { execSync } from 'child_process'

// 下載地址
const DOWNLOAD_PROTO = 'https://sportsapidoc-2.cxsport.net/apidoc/protobuf/Event.proto'
// Event.proto 檔案位置
const PROTO_PATH = path.resolve(import.meta.dirname, '../../model/socket/assets', 'on.proto')
// .d.ts 保存位置
const DECLARE_PATH = path.resolve(import.meta.dirname, '../../@types', 'ws-protobuf.d.ts')
// .json 保存位置
const JSON_PATH = path.resolve(import.meta.dirname, '../../model/socket/assets', 'on-event.json')

// 取得類型
const getType = (type) => {
  switch (type) {
    case 'google.protobuf.NullValue':
      return 'null'
    case 'bool':
      return 'boolean'
    case 'double':
    case 'int32':
    case 'int64':
    case 'google.protobuf.Int32Value':
      return 'number'
    default:
      return type
  }
}

// 解析
const parse = async () => {
  const rootType = await protobufjs.load(PROTO_PATH)
  const contents = ['declare namespace WS {']

  Object.keys(rootType.nested).map((key) => {
    const dataType = rootType.nested[key]
    if (key !== 'Event') {
      if (dataType.comment) {
        contents.push(`/** ${dataType.comment} */`)
      }
      // container
      contents.push(`type ${key} = {`)
      // fields
      if (dataType?.fields) {
        Object.keys(dataType.fields).map((fieldKey) => {
          const field = dataType.fields[fieldKey]
          if (!field?.type) return
          if (field?.rule === 'repeated') contents.push(`${fieldKey}: Array<${getType(field.type)}>`)
          else if (field?.keyType === 'string') contents.push(`${fieldKey}: { [key: string]: ${getType(field.type)} }`)
          else contents.push(`${fieldKey}: ${getType(field.type)}`)
        })
      }
      contents.push('}')
    } else {
      const combine = Object.keys(dataType.fields).map((fieldKey) => {
        const field = dataType.fields[fieldKey]
        if (fieldKey === 'eventType') return `eventType: string;`
        return `${fieldKey}: ${field.type};`
      })
      // 手動判斷 Events
      contents.push(`type ${key} = { ${combine.join('')} }`)
    }
  })
  contents.push('}')

  await fs.promises.writeFile(DECLARE_PATH, contents.flat().join('\n'))
}

// 下載 proto
execSync(`curl -o ${PROTO_PATH} ${DOWNLOAD_PROTO}`)
// 產出 JSON
execSync(`npx pbjs -t json -o ${JSON_PATH} ${PROTO_PATH}`)
// 解析 proto
await parse().catch(console.warn)
execSync(`npx prettier --write ${DECLARE_PATH}`)
