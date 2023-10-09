# progress-scroll 滚动进度插件

> 🤖🎉🎉 您的 进度监控 插件是一个基于 原生 Css 封装的实用 hooks 工具，用于在 Vue.js 应用程序中展示进度。它提供了一种简单、定制且具备高兼容性 。

## 📦 体验

[一键速看](https://huozaifenlangli.github.io/Vue3-template/#/scroll)

## 🌍 安装

你可以使用 npm 或 pnpm 安装插件：

```javascript
npm i vue3-progress-scroll
```

## 🛹 注入

在你的主应用程序入口文件（例如 main.js）中，导入并使用 ：
**_`main.js`_**

```javascript
/* Step 1
------------------------------------------------------------------ */
import { useScroll } from "vue3-progress-scroll";
const app = createApp(App);
app.use(useScroll);
```

### 🎉 配置

```javascript
/* Step 2
------------------------------------------------------------------ */
// 注册插件并提供自定义的进度条属性（可选）例如：
app.use(useScroll, {
	progress: "green", // 进度条颜色
	progressRollback: "#fff", // 进度条回滚颜色
	progressTop: "3px", // 进度条距离顶部的距离
	progressLeft: "0px", // 进度条距离左边的距离
	UIViewBackground: "#fff", // 页面背景色
});
```

## 🤖 使用方法

一旦你设置了插件，你就可以在组件中使用 $openScroll 和 $closeScroll() 方法：

> 第一种 inject

```js{4}
/* Step 3
------------------------------------------------------------------ */
// 在父容器绑定类名
<div class="ProgressTopBar">
    <p v-for="(item, index) in items" :key="index">{{ item }}</p>
</div>

import { ref, inject } from "vue";
import { scrollKey } from "vue3-progress-scroll";
inject(scrollKey)?.$openScroll();
inject(scrollKey)?.$closeScroll();
```

```javascript

  /* 使用示例 Demo.vue */
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

## 💌 原理

```html{27}
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<title>进度条 原理</title>
		<style>
			/* 知其意才能更好的使用~ */
			body {
				position: relative;
				padding: 50px;
				font-size: 24px;
				line-height: 30px;
				background-image: linear-gradient(to right top, #ffcc00 50%, #eee 50%);
				background-size: 100% calc(100% - 100vh + 5px);
				background-repeat: no-repeat;
				z-index: 1;
			}

			body::after {
				content: "";
				position: fixed;
				top: 5px;
				left: 0;
				bottom: 0;
				right: 0;
				background: #fff; /* 尝试注释我看看 */
				z-index: -1;
			}

		  /**
			* Unrelated css
			*/

			h1 {
				font-size: 32px;
				line-height: 60px;
			}

			ul {
				margin-top: 30px;
			}

			p {
				font-size: 24px;
				line-height: 30px;
				margin-top: 30px;
			}
		</style>
	</head>

	<body>
		<h1>不可思议的纯 CSS 进度条效果</h1>

		<p>
			在继续阅读下文之前，你可以先缓一缓。尝试思考一下上面的效果或者动手尝试一下，不借助
			JS ，能否巧妙的实现上述效果。
		</p>

		<p>
			OK，继续。这个效果是我在业务开发的过程中遇到的一个类似的小问题。其实即便让我借助
			Javascript
			，我的第一反应也是，感觉很麻烦啊。所以我一直在想，有没有可能只使用 CSS
			完成这个效果呢？
		</p>

		<p>
			在继续阅读下文之前，你可以先缓一缓。尝试思考一下上面的效果或者动手尝试一下，不借助
			JS ，能否巧妙的实现上述效果。
		</p>

		<p>
			OK，继续。这个效果是我在业务开发的过程中遇到的一个类似的小问题。其实即便让我借助
			Javascript
			，我的第一反应也是，感觉很麻烦啊。所以我一直在想，有没有可能只使用 CSS
			完成这个效果呢？
		</p>

		<p>
			在继续阅读下文之前，你可以先缓一缓。尝试思考一下上面的效果或者动手尝试一下，不借助
			JS ，能否巧妙的实现上述效果。
		</p>

		<p>
			OK，继续。这个效果是我在业务开发的过程中遇到的一个类似的小问题。其实即便让我借助
			Javascript
			，我的第一反应也是，感觉很麻烦啊。所以我一直在想，有没有可能只使用 CSS
			完成这个效果呢？
		</p>

		<p>
			在继续阅读下文之前，你可以先缓一缓。尝试思考一下上面的效果或者动手尝试一下，不借助
			JS ，能否巧妙的实现上述效果。
		</p>

		<p>
			OK，继续。这个效果是我在业务开发的过程中遇到的一个类似的小问题。其实即便让我借助
			Javascript
			，我的第一反应也是，感觉很麻烦啊。所以我一直在想，有没有可能只使用 CSS
			完成这个效果呢？
		</p>

		<p>
			在继续阅读下文之前，你可以先缓一缓。尝试思考一下上面的效果或者动手尝试一下，不借助
			JS ，能否巧妙的实现上述效果。
		</p>

		<p>
			OK，继续。这个效果是我在业务开发的过程中遇到的一个类似的小问题。其实即便让我借助
			Javascript
			，我的第一反应也是，感觉很麻烦啊。所以我一直在想，有没有可能只使用 CSS
			完成这个效果呢？
		</p>

		<p>
			在继续阅读下文之前，你可以先缓一缓。尝试思考一下上面的效果或者动手尝试一下，不借助
			JS ，能否巧妙的实现上述效果。
		</p>

		<p>
			OK，继续。这个效果是我在业务开发的过程中遇到的一个类似的小问题。其实即便让我借助
			Javascript
			，我的第一反应也是，感觉很麻烦啊。所以我一直在想，有没有可能只使用 CSS
			完成这个效果呢？
		</p>

		<p>
			在继续阅读下文之前，你可以先缓一缓。尝试思考一下上面的效果或者动手尝试一下，不借助
			JS ，能否巧妙的实现上述效果。
		</p>

		<ul>
			<li>1.xxxxxxxxxxxxxxxxxxxxx</li>
			<li>2.xxxxxxxxxxxxxxxxxxxxx</li>
			<li>3.xxxxxxxxxxxxxxxxxxxxx</li>
			<li>4.xxxxxxxxxxxxxxxxxxxxx</li>
		</ul>

		<p>
			OK，继续。这个效果是我在业务开发的过程中遇到的一个类似的小问题。其实即便让我借助
			Javascript
			，我的第一反应也是，感觉很麻烦啊。所以我一直在想，有没有可能只使用 CSS
			完成这个效果呢？
		</p>

		<p>
			在继续阅读下文之前，你可以先缓一缓。尝试思考一下上面的效果或者动手尝试一下，不借助
			JS ，能否巧妙的实现上述效果。
		</p>

		<p>
			OK，继续。这个效果是我在业务开发的过程中遇到的一个类似的小问题。其实即便让我借助
			Javascript
			，我的第一反应也是，感觉很麻烦啊。所以我一直在想，有没有可能只使用 CSS
			完成这个效果呢？
		</p>
		<p>
			在继续阅读下文之前，你可以先缓一缓。尝试思考一下上面的效果或者动手尝试一下，不借助
			JS ，能否巧妙的实现上述效果。
		</p>

		<p>
			OK，继续。这个效果是我在业务开发的过程中遇到的一个类似的小问题。其实即便让我借助
			Javascript
			，我的第一反应也是，感觉很麻烦啊。所以我一直在想，有没有可能只使用 CSS
			完成这个效果呢？
		</p>
		<p>
			在继续阅读下文之前，你可以先缓一缓。尝试思考一下上面的效果或者动手尝试一下，不借助
			JS ，能否巧妙的实现上述效果。
		</p>

		<p>
			OK，继续。这个效果是我在业务开发的过程中遇到的一个类似的小问题。其实即便让我借助
			Javascript
			，我的第一反应也是，感觉很麻烦啊。所以我一直在想，有没有可能只使用 CSS
			完成这个效果呢？
		</p>
		<p>
			在继续阅读下文之前，你可以先缓一缓。尝试思考一下上面的效果或者动手尝试一下，不借助
			JS ，能否巧妙的实现上述效果。
		</p>

		<p>
			OK，继续。这个效果是我在业务开发的过程中遇到的一个类似的小问题。其实即便让我借助
			Javascript
			，我的第一反应也是，感觉很麻烦啊。所以我一直在想，有没有可能只使用 CSS
			完成这个效果呢？
		</p>
		<p>
			在继续阅读下文之前，你可以先缓一缓。尝试思考一下上面的效果或者动手尝试一下，不借助
			JS ，能否巧妙的实现上述效果。
		</p>

		<p>
			OK，继续。这个效果是我在业务开发的过程中遇到的一个类似的小问题。其实即便让我借助
			Javascript
			，我的第一反应也是，感觉很麻烦啊。所以我一直在想，有没有可能只使用 CSS
			完成这个效果呢？
		</p>
	</body>
</html>
```
