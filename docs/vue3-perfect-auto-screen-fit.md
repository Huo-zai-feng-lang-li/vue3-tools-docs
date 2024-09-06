<p align="center">
  <a target="_blank" href="https://jshub.cn/">
  <img alt="autofit" src="/autofit.gif" width="300">
  </a>
</p>

<p align="center">
  <h3 align="center">perfect-auto-screen-fit.js</h3>
  <p align="center" style="font-size:14px">路虽远行则将至，事虽难做则必成！</p>
</p>

简体中文 | [English](https://github.com/Huo-zai-feng-lang-li/perfect-auto-screen-fit.js/blob/main/readme.en.md)

### perfect-auto-screen-fit.js

迄今为止 **_最易用_** 的自适应工具、大屏自适应方案、代价最低的方案、浸入性最少。[npm](https://www.npmjs.com/package/perfect-auto-screen-fit.js)

### 安装

```js
npm install perfect-auto-screen-fit.js
```

### 引入

```js
import autofit from "perfect-auto-screen-fit.js";
```

### 快速开始

```js
autofit.init();
```

### 使用

```js
export default {
	mounted() {
		autofit.init(
			{
				el: "body", // 目标元素的ID选择器
				dw: 1920, // 设计稿的宽度
				dh: 1080, // 设计稿的高度
				resize: true, // 监听resize事件
				transition: 0, // 过渡时间
				delay: 0, // 延迟时间
				limit: 0.1, // 缩放的最小阈值
			},
			true
		); // 是否在初始化时显示提示信息
	},
};
```

> 以上使用的是默认参数，可根据实际情况调整，可选参数有
>
> ```js
>    * - el：渲染的dom，默认是 "body"，必须使用id选择器
>    * - dw：设计稿的宽度，默认是 1920
>    * - dh：设计稿的高度，默认是 1080
>    * - resize：是否监听resize事件，默认是 true
>    * - transition：过渡时间，默认是 0
>    * - delay：默认是 0
>    * - limit：默认是 0.1,当缩放阈值不大于此值时不缩放，比如设置为0.1时，0.9-1.1的范围会被重置为1
> ```

### 关闭 perfect-auto-screen-fit.js 造成的影响

当 autofit 未初始化时，会出现无法找到元素的错误，在使用 autofit.off()前，请确保已初始化。

```js
autofit.off();
```
