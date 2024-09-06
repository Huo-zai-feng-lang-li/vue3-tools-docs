# progress-scroll 滚动进度可视化插件

> 🤖🎉🎉 进度监控可视化插件是一个基于 原生 `Css + Vue3 钩子` 封装的实用 hooks 工具，用于在 Vue.js 应用程序中展示进度。它提供了一种简单、高效的操作体验、深深感受开发的乐趣 ~ [npm](https://www.npmjs.com/package/vue3-progress-scroll)

## 📦 体验

[项目预览](https://huo-zai-feng-lang-li.github.io/Vue3-template/#/scroll)

- Tips: 尝试向下滚动屏幕试试 🤖

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

```javascript
/* Step 3
------------------------------------------------------------------ */
// 💡 在父容器绑定类名
<div class="ProgressTopBar">
    <p v-for="(item, index) in 1000" :key="index">{{ index + 1 }}</p>
</div>

import { ref, inject } from "vue";
import { scrollKey } from "vue3-progress-scroll";
inject<typeof scrollKey>(scrollKey).$openScroll();
inject<typeof scrollKey>(scrollKey).$closeScroll();
```

> 第二种 getCurrentInstance()

```javascript
import { getCurrentInstance } from "vue";
const { proxy }: any = getCurrentInstance();
proxy.$openScroll();
proxy.$closeScroll();
```

### 📝 使用示例 Demo.vue

```javascript

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
   inject<typeof scrollKey>(scrollKey).$openScroll();
   inject<typeof scrollKey>(scrollKey).$closeScroll();
</script>

```

## 💌 原理

```html
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
## ♻️ 另一种实现思路
```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>可视化CSS进度条</title>
  <style>
    body,
    html {
      margin: 0;
      padding: 0;
    }

    /* 隐藏滚动条 */
    ::-webkit-scrollbar {
      display: none;
    }

    #zk-container {
      margin: auto;
      text-align: center;
      width: 700px;
      font-size: 20px;
      padding: 15px;
      box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
    }

    #zk-container::before {
      content: '';
      position: fixed;
      height: 5px;
      left: 0;
      top: 0;
      right: 0;
      background: #ffc107;
      /* 优化动画性能 
       * 告知浏览器某个元素预计将会有变化（如位置、大小、颜色等）
      */
      animation: scale1 linear;
      /*
       * 滚动条动画时间线
       * scroll(root)表示滚动条动画时间线为根元素滚动条
       * 其他数据 可参考MDN文档 如
       * https://developer.mozilla.org/en-US/docs/Web/CSS/animation-timeline
       */
      animation-timeline: scroll(root);
      transform-origin: 0 0;

    }

    @keyframes scale1 {
      0% {
        transform: scaleX(0);
      }

      100% {
        transform: scaleX(1);
      }
    }
  </style>
</head>

<body>

  <div id="zk-container"> </div>
  <script>
    const container = document.getElementById('zk-container');
    let text = '尝试向下滚动-,';
    let repeatCount = 500; // 重复次数

    // 使用Array.join生成重复文本,501 个元素之间（即 500 个间隙）会插入 500 次 text 字符串。
    container.textContent = new Array(repeatCount + 1).join(text);
  </script>
</body>

</html>
```