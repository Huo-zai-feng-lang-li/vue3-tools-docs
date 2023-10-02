# 你的 工具箱

> 开箱即可用的 directive\utils，
> 说明：vue3-directive-tools 是一个方便在 Vue 3 + Ts 项目中快速使用的 directive、tool 的 npm 插件。它允许您轻松地在项目中添加多种功能，它采用 Ts 方式开发，与 Vue3 更加搭配

## 1、安装

```javascript
npm install vue3-directive-tools
```

**说明：**

> 此工具库是基于 Element-plus、Sass、Node、Ts，请您在安装以上依赖后使用此辅助库，它可帮您快速开发功能、您只需使用 v-xx="" ；

## 2、指令的使用方法

在你的主应用程序入口文件（例如 main.js）中，导入并使用 directive ：

```javascript
import { directive } from "vue3-directive-tools";
app.use(directive).mount("#app");
```

## **copy**

> v-copy="data"

```javascript
<template>
	<div class="card content-box">
		<span class="text">复制指令 🍇🍇🍇🍓🍓🍓</span>
		<div class="box-content">
			<el-input placeholder="请输入内容" v-model="data" style="width: 500px">
				<template #append>
					<el-button v-copy="data">复制</el-button>
				</template>
			</el-input>
		</div>
	</div>
</template>

<script setup lang="ts" name="copyDirect">
import { ref } from 'vue';
const data = ref<string>('我是被复制的内容 🍒 🍉 🍊');
</script>
```

## **debounce**

> v-debounce="debounceInput"

```javascript
  <el-input
	v-debounce="debounceInput"
	v-model.trim="iptVal"
	placeholder="防抖输入框 (0.5秒后执行)"
	style="width: 100%"
 />
```

## **draggable**

> v-draggable

```javascript
<template>
	<div class="content-box">
		<span class="text">拖拽指令 🍇🍇🍇🍓🍓🍓</span>
		<div v-draggable class="drag-box cursor-move">我可以拖拽哦~</div>
	</div>
</template>

<style lang="scss" scoped>
.content-box {
	position: relative; //required
	width: 500px;
	height: 500px;
	border: 1px solid #ccc;
	.drag-box {
		position: absolute; //required
		width: 100px;
		height: 100px;
		background-color: #ccc;
	}
}
</style>
```

## **longpress**

> v-longpress="longpress"

```javascript
<template>
	<div class="card content-box">
		<span class="text">长按指令 🍇🍇🍇🍓🍓🍓</span>
		<el-button type="primary" v-longpress="longpress"
			>长按2秒触发事件</el-button
		>
	</div>
</template>

<script setup lang="ts" name="longpressDirect">
import { ElMessage } from 'element-plus';
const longpress = () => {
	ElMessage.success('长按事件触发成功 🎉🎉🎉');
};
</script>
```

## **throttle**

> v-throttle="throttleClick"

```javascript
<template>
	<div class="card content-box">
		<span class="text">节流指令 🍇🍇🍇🍓🍓🍓</span>
		<el-button type="primary" v-throttle="throttleClick"
			>节流按钮 (每隔1S秒后执行)</el-button
		>
	</div>
</template>

<script setup lang="ts" name="throttleDirect">
import { ElMessage } from 'element-plus';
const throttleClick = () => {
	ElMessage.success('我是节流按钮触发的事件 🍍🍓🍌');
};
</script>
```

## **waterMarker**

```html
<div
	v-waterMarker="{text:'版权所有',textColor:'rgba(180, 180, 180, 0.4)'}"
></div>
```

## 3、utils\工具的使用方法

## debounceRest

```javascript
<el-button @click="handClick('我是参数')">首页</el-button>

import { debounceRest } from "vue3-directive-tools";

const handClick = debounceRest((varStr: string) => {
	console.log("！这里输出防抖 🚀 ==>：", varStr);
}, 250);
```

## isEvenOrOdd

```javascript
<el-button @click="handClick">判断奇数偶数</el-button>
import { isEvenOrOdd } from "vue3-directive-tools";

function handClick() {
	const isEvenOrOdd = isEvenOrOdd(123);
	console.log("！这里输出奇偶判断 🚀 ==>：", isEvenOrOdd);
}
```

## 4、npm 命令大全(扩展)

> 以下是一些常见的 npm 命令：

1. 初始化一个新的 npm 项目：`npm init`
2. 安装依赖库：`npm install <package-name>`
3. 全局安装依赖库：`npm install -g <package-name>`
4. 更新依赖库：`npm update <package-name>`
5. 删除依赖库：`npm uninstall <package-name>`
6. 运行脚本：`npm run <script-name>`
7. 显示当前项目的依赖列表：`npm ls`
8. 查看特定依赖库的信息：`npm view <package-name>`
9. 搜索依赖库：`npm search <keyword>`
10. 发布包到 npm 仓库：`npm publish`

> 当使用 `npm install` 命令时，可以添加一些标志来指定依赖包的安装方式：

1. `-S`，或者 `--save`：将依赖项添加到 `dependencies`（生产环境依赖）中。
   示例：`npm install <package-name> -S`

   ​ `npm install <package-name> --save`

2. `-D`，或者 `--save-dev`：将依赖项添加到 `devDependencies`（开发环境依赖）中。
   示例：`npm install <package-name> -D`

   ​ `npm install <package-name> --save-dev`

# 2、切换 npm 源：

要切换到官方源，可以执行以下命令：

```bash
npm config set registry https://registry.npmjs.org/
```

要切换到淘宝源，可以执行以下命令：

```bash
npm config set registry https://registry.npm.taobao.org/
```

要切换到 cnpm 源，可以执行以下命令：

```bash
npm config set registry http://r.cnpmjs.org/
```

验证切换结果：执行以下命令可以验证切换的结果

```bash
npm config get registry
```

# 3、发布为公共包

使用以下命令发布为公共包：

```bash
npm publish --access=public
```

# 4、修改 npm 包

修改完包代码后，可以执行以下命令将版本号自动加 1：

```bash
npm version patch
```

或者您也可以手动修改`package.json`文件中的版本号，然后执行`npm publish`来发布修改后的包。

修改并发布完成。

# 5、删除 npm 包

要删除特定版本的包，可以使用以下命令：

```bash
npm unpublish 包名@版本号
```

要强制删除所有版本的包，可以使用以下命令：

```bash
npm unpublish 包名 --force
```
