import { describe } from '@jest/globals'
import dotenv from 'dotenv'
import path from 'node:path'
import fs from 'node:fs'

/** 獲取資料夾列表 */
const getOtherPlatforms = async () => {
  const projectRoot = path.resolve(path.dirname('.'), '../')
  const readdir = await fs.promises.readdir(projectRoot)
  const filter = new RegExp(`^\\.|^(node_modules|common)$`)
  return readdir.filter((name) => !filter.test(name) && fs.statSync(path.join(projectRoot, name)).isDirectory())
}

describe('PlatformStore', () => {
  /** useToastStore */
  test('Platform', async () => {
    const rootDir = path.resolve(path.dirname('.'), '../')
    // 商戶列表
    const platforms = await getOtherPlatforms()
    for (const platform of platforms) {
      // 清除快取
      jest.resetModules()
      const platformEnv = path.resolve(rootDir, `${platform}/.env.development`)
      const { parsed } = dotenv.config({ path: platformEnv })
      Object.assign(process.env, { ...parsed, GIT_HASH: '' })
      const { Platform } = require(`../platform`)
      // 平台名稱
      expect(Platform.PLATFORM).toBe(platform)
      // 語系長度
      expect(Platform.LOCALES.length).toBeGreaterThan(0)
      // 語系格式
      expect(Platform.LOCALE).toMatch(/[a-z]{2}/)
      // 有字串 undefined
      expect(Object.values(Platform).some((item) => item === 'undefined')).toBe(false)
    }
  })
})
