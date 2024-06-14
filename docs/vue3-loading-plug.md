# 你的 Loading

> 开箱即可用的 loading，
> 说明：vue3-loading 是一个方便在 Vue 3 项目中使用的加载指示器组件的 npm 插件。它允许您轻松地在项目中添加加载动画，提升用户体验。

## 🤖 安装

```javascript
npm install vue3-loading-plug
```

或者

```javascript
pnpm install vue3-loading-plug
```

## 🛹 简介苍白请 您移步文档：

[项目演示](https://huo-zai-feng-lang-li.github.io/Vue3-template/#/monitoringView)<br />

- Tips: 尝试 **_刷新页面_** 会自动随机的展示七种 loading 效果
<!-- - [一键快阅文档](https://huozaifenlangli.github.io/vue3-tools-docs/vue3-loading-plug.html) -->

## ✈️ 使用方法

- 📒 说明：

> 内置两大类 loading 【可自行配置】
>
> ​ 一、`Loading` 是 大 loading 可以用于刷新项目页面、路由跳转 。在路由中引入一次 即可全局生效，极简配置
>
> ​ 二、`smallLoading` 是小圆圈带加载进度 loading，一般用于接口请求展示。可以请求拦截器中开启，全局接口生效，极简配置

在你的主应用程序入口文件（例如 main.js）中，导入并使用 loading ：

```javascript
import Loading from "vue3-loading-plug";
app.use(Loading).mount("#app");
```

- 🤖 高级用法

### 🛠️ 配置 loading 类型

> 你可以在安装插件时传入一个配置对象。<br />
> 这个配置对象有一个 `loadingType` 属性，这个属性决定了使用哪种类型的 loading 组件。<br />
> 如果你不传入 loadingType，那么将会**随机**选择一个 loading 组件。

```js{2}
app.use(Loading, {
  loadingType: 2  // 使用第二种类型的loading组件
});
```

### 🎲 定制 loading 色彩

- 我们目前更新了 7 款 loading 组件，每一款都有自己的默认颜色,也可以如下自定制。

  > 这个配置对象还有一个 `customized` 属性，这个属性的值决定了 loading 组件的颜色展示和遮罩的色彩呈现。（它们都是非必填）
  > ![Alt text1](/image-1.png)

  > ![Alt text2](/image-2.png)

  > ![Alt text3](/image-3.png)

  > ![Alt text4](/image-4.png)

  > ![Alt text5](/image-5.png)

  > ![Alt text6](/image-6.png)

  > ![Alt text7](/image-7.png)

```js{3}
app.use(Loading, {
	loadingType: 1,
	customized: {top: "#54038a",left: "#05b631",right: "#eeaff7"},
});
```

```js{7}
app.use(Loading, {
	loadingType: 2,
	/*
	 我定制了loading颜色为红色、遮罩层为绿色
	 通常我们不需要定制mask、loading ，颜色都具备默认值
	*/
	customized: { color: "red", mask: "green" },
});
```

```js{3}
app.use(Loading, {
	loadingType: 3,
	customized: { mask: "rgba(126, 128, 117, 0.5)" },
});
```

```js{3}
app.use(Loading, {
	loadingType: 4,
	customized: { ball: "red", dot: "#fff", bar: "#000" },
});
```

```js{3}
app.use(Loading, {
	loadingType: 5,
	customized: { color: "#f4038a" },
});
```

```js{3}
app.use(Loading, {
	loadingType: 6,
	customized: { color: "red" },
});
```

```js{3}
app.use(Loading, {
	loadingType: 7,
	customized: { color: "#212121" },
});
```

<br />

如果是 ts 请在 global.d.ts 加入 类型

```javascript
declare module "vue3-loading-plug";
```

router

```javascript
const hideLoading = () => app.config.globalProperties.$Loading?.hideLoading;
const showLoading = () => app.config.globalProperties.$Loading?.showLoading();

router.beforeEach((to, from, next) => {
	if (to.meta.loading) showLoading();
	next();
});

router.afterEach((to) => {
	if (to.meta.loading) hideLoading()(400);
});
```

scrvies

```javascript{1-4,10-16,22,32,35}
const hideLoading = () => app.config.globalProperties.$smallLoading.hideLoading;
const showLoading = () =>
	app.config.globalProperties.$smallLoading.showLoading();
let onProgress = () => app.config.globalProperties.$smallLoading.onProgress;

// 请求拦截器
service.interceptors.request.use(
	(config) => {
		// 在发送请求之前做些什么？
		showLoading();
		config.onDownloadProgress = (progressEvent: any) => {
			let percentCompleted = Math.floor(
				(progressEvent.loaded * 100) / progressEvent?.total
			);
			onProgress()(percentCompleted);
		};
		return config;
	},
	(error) => {
		// 对请求错误做些什么？
		// 第二个括号参数为空时，200ms后隐藏loading, (为了展示loading进度100%效果)
		hideLoading()();
       // hideLoading()(true); // 传入true时，不会延迟隐藏loading
		return Promise.reject(error);
	}
);

// 响应拦截器
service.interceptors.response.use(
	(response) => {
		// 对响应数据做点什么？ 这里只返回成功响应数据！
		hideLoading()();
		return response.data;
	},
	(error) => hideLoading()();
);
```

## 💡 注意事项

> 这个插件使用了动态导入（import('xx.vue')）和 Map 来提高性能，因此需要一个支持这些特性的环境。如果你的环境不支持这些特性，你可能需要使用 polyfill 来提供这些特性。
