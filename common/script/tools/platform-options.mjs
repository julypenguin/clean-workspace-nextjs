import inquirer from 'inquirer'
import { spawn, exec } from 'node:child_process'
import path from 'node:path'
import fs from 'node:fs'

/** 商戶選單 */
const rootDir = path.resolve(path.dirname('.'))
const questions = [
  {
    type: 'list',
    name: 'platform',
    message: 'Please select a platform name:',
    choices: await fs.promises.readdir(rootDir).then((res) => res.filter((name) => !/\.|^(node_modules|common)$/.test(name) && fs.statSync(path.join(rootDir, name)).isDirectory())),
  },
]

// 找到 Chrome 已經有開指定的 localhot:port 的頁面，就聚焦該頁面，否則打開一個新的頁面
const focusOrOpenChrome = (url) => {
  // AppleScript
  const script = `
    tell application "Google Chrome"
      activate
      set found to false
      set windowIndex to 1
      repeat with w in windows
        set tabIndex to 1
        repeat with t in tabs of w
          if URL of t contains "${url}" then
            set found to true
            set index of w to 1
            set active tab index of w to tabIndex
            tell active tab of w to reload
            exit repeat
          end if
          set tabIndex to tabIndex + 1
        end repeat
        if found then
          exit repeat
        end if
        set windowIndex to windowIndex + 1
      end repeat
      if not found then
        open location "${url}"
      end if
    end tell
  `

  exec(`osascript -e '${script}'`, (error) => {
    if (error) {
      console.error(`無法打開或聚焦 Chrome: ${error}`)
    }
  })
}

try {
  /** 詢問 */
  const answers = await inquirer.prompt(questions)
  /** 無商戶 */
  if (!answers?.platform) throw new Error('Platform name is undefined')
  /** 執行：process.argv?.[2] = dev | build | start */
  const command = process.argv[2]
  const devProcess = spawn(`GIT_HASH=$(git rev-parse HEAD) yarn workspace @app/${answers.platform} ${command}`, { shell: true, stdio: 'pipe' })

  devProcess.stdout.on('data', (data) => {
    const output = data.toString()
    console.log(output)
    if (command === 'dev') {
      const match = output.match(/localhost:(\d+)/)
      if (match) {
        const port = match[1]

        // 在檢測到端口後調用這個函數
        focusOrOpenChrome(`http://localhost:${port}`)
      }
    }
  })

  devProcess.stderr.on('data', (data) => {
    console.error(data.toString())
  })

  // devProcess.on('close', (code) => {
  //   console.log(`子進程退出，退出碼 ${code}`)
  // })
} catch (error) {
  console.error(String(error))
}
