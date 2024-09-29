# Introduction

> 使用 `yarn workspace` 管理多商戶專案

:::info
請全部都看過一輪，看不懂沒事。沒空看的，別人也沒空教你
:::

## Yarn Workspace

> `yarn 1.22+` 版本

- 切換指定版本

```sh
yarn set version 1.22
```

- 可啟用 `node` 內建的管理工具

```shell
corepack enable
```

## Structure

資料夾結構如下

```sh
├── .husky/         # git pre-commit hook
├── common/         # 共用放置區
├── document/       # 說明文件專案
└── ...             # 其餘資料夾皆是商戶專案
```

## Plugin Management

根目錄中執行

```sh
yarn install
```

新增共用套件

```sh
yarn add {PLUGIN} -W
```

針對專案新增套件

```sh
yarn workspace @app/{PROJECT} add {PLUGIN} # 安裝
yarn workspace @app/{PROJECT} remove {PLUGIN} # 刪除
```

## Add Project

:::warning
非商戶專案才使用此方法
:::

- 新增資料夾 > 初始化專案 > 專案名稱必須 `@app/` 開頭，如 `@app/{PROJECT}`

```sh
mkdir {PROJECT}
cd project
yarn init
```

- 新增商戶請使用指令

```sh
yarn platform
```
