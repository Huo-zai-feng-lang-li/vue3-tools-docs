## 纯前端 JavaScript 实现 Excel 导出：支持多样式、合并与样式控制

<p align="center">
  <img alt="autofit" src="/autofit.gif" width="300">
</p>

<p align="center">
  <h3 align="center">🎉 exportDiyJS </h3>
  <p align="center" style="font-size:14px">路虽远行则将至，事虽难做则必成！</p>
</p>

### 🚩 背景

在 Web 应用中，用户经常需要将数据导出为 Excel 文件以便于离线查看和进一步分析。本文介绍了如何仅使用前端 JavaScript 技术来实现 Excel 文件的导出功能，同时支持丰富的样式定制，包括合并列、合并行、行样式和单元格样式的控制。
功能特性

### 🌈 Awesome README [![Awesome](https://cdn.jsdelivr.net/gh/sindresorhus/awesome@d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)](https://github.com/sindresorhus/awesome#readme)

<div style=color:#0b0909;>

> 该项目中所有的代码均经过精心的注释，以便于理解和学习。
> 该项目中所有的 NPM 包均已上传至 npm 仓库，Api 均在[docs](https://zhang-kun8888.gitee.io/vue3-tools-docs/) 及 [Github-Source](https://github.com/huozaifenlangli/vue3-directive-tool--NPM) 可查阅

</div>

#### 🏭 技术栈说明

> JavaScript：一种脚本语言，用于在浏览器和 Node.js 中实现网页和服务器端的 JavaScript 代码。
> Css：一种样式表语言，用于描述 HTML 的样式。


<p align="center">
<a href="https://img.shields.io/badge/npm-v9.6.6-2081C1"><img src="https://img.shields.io/badge/npm-v9.6.6-2081C1" alt="npm package"></a>
  <a href="https://github.com/InhiblabCore/vue-hooks-plus/actions/workflows/node-ci.yml"><img src="https://github.com/InhiblabCore/vue-hooks-plus/actions/workflows/ci.yml/badge.svg?branch=master" alt="build status"></a>
    <a href="#badge"><img src="https://img.shields.io/github/languages/top/InhiblabCore/vue-hooks-plus" alt="language"></a>
<a href="https://img.shields.io/badge/pnpm-v8.5.1-F37E42"><img src="https://img.shields.io/badge/pnpm-v8.5.1-F37E42" alt="npm package"></a>
<a href="https://img.shields.io/badge/node-v20.2.0-416634"><img src="https://img.shields.io/badge/node-v20.2.0-416634" alt="npm package"></a>
<a href="https://github.com/InhiblabCore/vue-hooks-plus/blob/master/LICENSE"><img src="https://img.shields.io/github/license/InhiblabCore/vue-hooks-plus" alt="LICENSE"></a>

</p>

<div align="center">

# JS Plus

简体中文 | [灵活英文](./README.en-CN.md)

High performance & Simplicity Vue3 Hooks library

</div>

## ✨ Features

- [x] **Excel 包含以下功能**：
- [x] 🏄🏼‍♂️ - .多种样式支持：可以为 Excel 文件中的单元格指定字体、颜色、背景色、边框等样式。
- [x] 🎯- 合并列和行：支持合并多个单元格，无论是横向合并（列合并）还是纵向合并（行合并）。
- [x] 🔖 - 行样式控制：可以对整行的样式进行统一设置，如行高、背景色等。
- [x] 🎉 - 单元格样式控制：允许对单个单元格进行精细化的样式控制，包括但不限于字体大小、字体颜色、对齐方式等。
      <br />
- /\*\*
- \* @description 表格 Excel 结构说名
- \* @method  tableData
- \* @param { string }  - text Excel 单元格内容
- \* @param { string }  - className 单元格样式类名
- \* @param { number }  - colspan 单元格合并列数
- \* @param { number }  - rowspan 单元格合并行数
- \* @param { object }  - cells 单元格数组，当需要设置整行颜色时用到
- \* @param { string }  - captionText 表格标题
- \* @description 表格数据和合并规则 colspan 和 rowspan 合并规则 设置后就需要删除对应规则的单元格
- \* @returns  - void
- \* @example
- \* >
- \* @author zk
- \* @createDate 2024/01/10 09:32:04
- \* @lastFixDate 2024/01/10 09:32:04
- \*\*/
  > ![Alt text](readme.png)

### 📦 项目预览

[Click Preview](https://zhang-kun8888.gitee.io/export_-excel_-js/)

### 💒 代码仓库

```base
# 国内
https://gitee.com/zhang-kun8888/export_-excel_-js

# 国外
https://github.com/huozaifenlangli/Vue3-template.git
```

####

## 🪴 Project Activity

![Alt](https://repobeats.axiom.co/api/embed/35dbca2274542c0144993be92cc51762227543d9.svg "Repobeats analytics image")

#### ⚡ 使用说明

```base
# 克隆项目
git clone https://gitee.com/zhang-kun8888/export_-excel_-js

# 进入项目
cd Vite--Ts--Vue3---template

# 安装依赖
pnpm install
pnpm install -g concurrently // 同时运行多个依赖

# 运行项目
pnpm run dev

# 打包发布
pnpm run build
```

#### 🏭 环境支持
```bash
| Edge                                                                     | last 2 versions                                                                   | last 2 versions                                                                | last 2 versions                                                                |
| ------------------------------------------------------------------------ | --------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| ![Edge](https://cdn.jsdelivr.net/npm/@browser-logos/edge/edge_32x32.png) | ![Firefox](https://cdn.jsdelivr.net/npm/@browser-logos/firefox/firefox_32x32.png) | ![Chrome](https://cdn.jsdelivr.net/npm/@browser-logos/chrome/chrome_32x32.png) | ![Safari](https://cdn.jsdelivr.net/npm/@browser-logos/safari/safari_32x32.png) |
```

> 由于 Vue3 不再支持 IE11，故而 ElementPlus 也不支持 IE11 及之前版本。

#### 💕 特别感谢

<div align="center">

特别感谢老哥们的建议、指导与帮忙。谢谢！🌸

———— @张坤 CSDN 彩色之外-————

2023、11、28🌸

## 📄 License

[MIT](https://github.com/element-plus/element-plus/blob/master/LICENSE)

</div>
