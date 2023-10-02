# 你的 Pinia 加密插件

> 你的 Pinia 加密插件是一个基于 crypto-js 封装的实用 hooks 工具，用于在 Vue.js 应用程序中加密和解密敏感数据。它提供了一种简单且安全的方式来保护你的数据。

## 🌍 安装

你可以使用 npm 或 yarn 安装插件：

```javascript
pnpm i vue3-encryption-plugin
```

## 🛹 使用方法

在你的主应用程序入口文件（例如 main.js）中，导入并使用 Pinia store 以及加密插件：

```javascript
// main.js
import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
// 引入加密插件
import EncryptionPlugin from "vue3-encryption-plugin";

const app = createApp(App);

const pinia = createPinia();
app.use(pinia);

// 注册加密插件并提供自定义的密钥（可选）例如，随机的字符串
app.use(EncryptionPlugin, { key: "your-custom-secret-key" });

app.mount("#app");
```

## 🤖 加密和解密

一旦你设置了插件，你就可以在组件中使用 $encrypt 和 $decrypt 方法：

> 第一种： getCurrentInstance()

```javascript
<!-- YourComponent.vue -->
  import {  getCurrentInstance } from 'vue';
  setup(){
     // 获取当前组件的上下文，下面两种方式都能获取到组件的上下文。
     const { ctx }  = getCurrentInstance();  //  方式一，这种方式只能在开发环境下使用，生产环境 下的ctx将访问不到
     const { proxy }: any = getCurrentInstance();  //  方式二，此方法在开发环境以及生产环境下都能到组件上下文对象（推荐）
     // ctx 中包含了组件中由ref和reactive创建的响应式数据对象,以及以下对象及方法;
     proxy.$attrs
     proxy.$data
     proxy.$el
     proxy.$emit
     proxy.$forceUpdate
     proxy.$nextTick
     proxy.$options
     proxy.$parent
     proxy.$props
     proxy.$refs
     proxy.$root
     proxy.$slots
     proxy.$watch
  }

function handClick() {
	console.log(
		"加密 🚀 ==>：",
		proxy.$encryptionPlugin.encrypt({ name: "zk", age: 26})
	);
	console.log(
		"解密 🚀 ==>：",
		proxy.$encryptionPlugin.decrypt(
			"U2FsdGVkX1/PBDHn2pyLPAf6DmolvylM2QEIDhcf5I3WQWhOh19eos0uZfdbzdDP"
		)
	);
}
```

> 第二种 injict (推荐)

1：src / types / global.d.ts 定义类型

```js
// 加密解密
declare interface EncryptionPlugin {
	encryptData: <T>(data: T) => string;
	decryptData: <T>(encryptedData: string) => T;
}
```

如果你使用 `eslint` 请在 `.eslintrc.cjs` 文件中添加

```javascript
	globals: {
		// 以下是全局变量 eslint 不会报'EncryptionPlugin' is not defined.eslint （no-undef）
		EncryptionPlugin: "readonly",
         $encryptionPlugin: "readonly",
	},
```

2： 页面使用

```javascript
<script setup lang="ts">
import { inject } from 'vue';

// 使用 inject 函数获取 encryptionPlugin
const encryptionPlugin = inject("encryptionPlugin") as EncryptionPlugin;

function handClick() {
	// 现在你可以在你的组件中使用 encryptData 和 decryptData 方法了
	const encryptedData = encryptionPlugin.encryptData("Hello World");
	const decryptedData = encryptionPlugin.decryptData(encryptedData);
	console.log("加密 🚀 ==>：", encryptedData);
	console.log("解密 🚀 ==>：", decryptedData);
}
</script>
```
