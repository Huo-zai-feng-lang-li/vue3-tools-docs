# progress-scroll 滚动进度插件

> 🤖🎉🎉 您的 进度监控 插件是一个基于 原生 Css 封装的实用 hooks 工具，用于在 Vue.js 应用程序中展示进度。它提供了一种简单、定制且具备高兼容性 。

## 📦 体验

[一键速看](https://huozaifenlangli.github.io/Vue3-template/#/scroll)

## 🌍 安装

你可以使用 npm 或 pnpm 安装插件：

```javascript
npm i vue3-progress-scroll
pnpm i vue3-progress-scroll
```

## 🛹 注入

在你的主应用程序入口文件（例如 main.js）中，导入并使用 ：
**_`main.js`_**

```javascript
/* Step 1
-------------------------------------------- */
import useScroll from "vue3-progress-scroll"; // 引入css进度条
const app = createApp(App);

/* Step 2 
-------------------------------------------- */
// 注册插件并提供自定义的进度条属性（可选）例如：
app.use(useScroll, {
	progress: "green", // 进度条颜色
	progressRollback: "#fff", // 进度条回滚颜色
	progressTop: "89px", // 进度条距离顶部的距离
	progressLeft: "290px", // 进度条距离左边的距离
	UIViewBackground: "#fff", // 页面背景色
});
或者;
app.use(useScroll);
app.mount("#app");
```

## 🤖 使用方法

一旦你设置了插件，你就可以在组件中使用 $openScroll 和 $closeScroll() 方法：

> 第一种 inject

```js{4}
/* Step 3
-------------------------------------------- */
// 在父容器绑定类名
<div class="ProgressTopBar">
    <p v-for="(item, index) in items" :key="index">{{ item }}</p>
</div>

import { ref, inject } from "vue";
import { scrollKey } from "vue3-progress-scroll";
inject(scrollKey)?.$openScroll();
inject(scrollKey)?.$closeScroll();
```

```javascript{3,,18-21}

  /* 使用示例 Demo */
<template>
	<div class="ProgressTopBar">
		<p v-for="(item, index) in items" :key="index">{{ item }}</p>
	</div>
</template>

<script setup lang="ts">
	// vue3.2.0+ 之后支持的新特性
	defineOptions({
		name: "scrollBar", // 组件名
		inheritAttrs: false, // 是否继承父组件的属性
	});
	import { ref, inject } from "vue";
	const items = ref<string[]>([]);
	for (let i = 0; i < 200; i++) items.value.push(`Item ${i + 1}`);

	import { scrollKey } from "vue3-progress-scroll";
	inject(scrollKey)?.$openScroll();
	inject(scrollKey)?.$closeScroll();
</script>

```

> 第二种 getCurrentInstance()

```javascript
import { getCurrentInstance } from "vue";
const { proxy }: any = getCurrentInstance();
proxy.$openScroll();
proxy.$closeScroll();
```
