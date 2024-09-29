# IDE

> 記錄一些特殊設定

## Visual Studio Code

### 指定 ESLint 版本

- 先查詢 `node` 的位置 `node` 需大於 `v20.14`

  ```sh
  which node
  ```

- `VSCode` 的 `settings.json` 加入設定

  ```json
  {
    "eslint.runtime": "path/to/your/node"
  }
  ```

## WebStorm

> 太厲害了，什麼都不用設定
