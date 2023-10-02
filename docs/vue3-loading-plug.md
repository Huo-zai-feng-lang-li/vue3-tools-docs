# 你的 Loading

> 开箱即可用的 loading，
> 说明：vue3-loading 是一个方便在 Vue 3 项目中使用的加载指示器组件的 npm 插件。它允许您轻松地在项目中添加加载动画，提升用户体验。

# 🌍 安装

```javascript
npm install vue3-loading-plug
```

## 🛹 演示地址：

[一键轻松看](http://project.webcats.cn/bx/43924/16191)

## 🛹 使用方法

> ## 说明：
>
> 内置两种 loading 【可自行配置】
>
> ​ Loading 是 大 loading 可以用于刷新项目页面、路由跳转 。在路由中引入一次 即可全局生效，极简配置
>
> ​ smallLoading 是小圆圈 loading，一般用于接口请求展示。可以请求拦截器中开启，全局接口生效，极简配置

在你的主应用程序入口文件（例如 main.js）中，导入并使用 loading ：

```javascript
import Loading from "vue3-loading-plug";
app.use(Loading).mount("#app");
```

如果是 ts 请在 global.d.ts 加入 类型

```javascript
declare module "vue3-loading-plug";
```

router

```javascript
router.beforeEach((to, from, next) => {
	if (to.meta.loading) app.config.globalProperties.$Loading.showLoading();
	next();
});

router.afterEach((to) => {
	if (to.meta.loading) app.config.globalProperties.$Loading.hideLoading();
});
```

scrvies

```javascript
const hideLoading = () =>
	app.config.globalProperties.$smallLoading.hideLoading();
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
		hideLoading();
		return Promise.reject(error);
	}
);
// 响应拦截器
service.interceptors.response.use(
	(response) => {
		// 对响应数据做点什么？ 这里只返回成功响应数据！
		hideLoading();
		return response.data;
	},
	(error) => {
		// 对响应错误数据做点什么？这里只显示错误消息！
		hideLoading();
	}
);
```
