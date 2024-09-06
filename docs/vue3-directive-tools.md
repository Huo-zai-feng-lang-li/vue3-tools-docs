# 你的代码工具箱-瑞士军刀

> ♻️基于 Vue3 + Ts 的 directive 及 Hooks 的 npm 插件。它允许您轻松地在项目中添加多种功能，它采用 Ts 方式开发，与 Vue3 更加搭配, 帮您快速完成开发功能、您只需要使用功能 v-xx:"xx"; 即可享受开发带来的乐趣！~ [npm](https://www.npmjs.com/package/vue3-directive-tools)

## 1、安装

```javascript
npm install vue3-directive-tools
```

**说明：**

> 此工具库是基于 Element-plus、Sass、Node、Ts，请您在安装以上依赖后使用此辅助库，它可帮您快速开发功能、您只需使用 v-xx="" ；

## 2、注入

在你的主应用程序入口文件（例如 **main.js**）中，导入并使用 directive ：

```javascript
import { directive } from "vue3-directive-tools";
app.use(directive).mount("#app");
```

## 3、指令的使用方法

### **copy**

> v-copy="data" <br />
> 一键复制

```javascript{7}
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

### **debounce**

> v-debounce="debounceInput" <br />
> 防抖

```javascript{5}
  <template>
	<div class="card content-box">
		<span class="text">input防抖指令 🍇🍇🍇🍓🍓🍓</span>
		<el-input
			v-debounce="debounceInput"
			v-model.trim="iptVal"
			placeholder="防抖输入框 (0.5秒后执行)"
			style="width: 100%"
		/>
		<section>
			<ul v-if="flag">
				<a
					v-for="(item, index) in listArr"
					:key="index"
					:href="item.link"
					class="link"
				>
					<li v-html="item.uname"></li>
				</a>
			</ul>
		</section>
	</div>
</template>

<script lang="ts" setup>
import { ElMessage } from "element-plus";
import { onMounted, ref, reactive } from "vue";

// 双向绑定的搜索默认值
let iptVal = ref<string>("");
// 被搜索的列表，真实项目中应该是从后台获取的数据
let listArr: Array<{ uname: string; link: string }> = reactive([
	{
		uname: "Vue项目实战 —— 后台管理系统( pc端 ) —— Pro最终版本 <",
		link: "https://blog.csdn.net/m0_57904695/article/details/129730440?spm=1001.2014.3001.5501",
	},
	{
		uname:
			"【提高代码可读性】—— 手握多个代码优化技巧、细数哪些惊艳一时的策略 <>",
		link: "https://blog.csdn.net/m0_57904695/article/details/128318224?spm=1001.2014.3001.5502",
	},
	{
		uname:
			"开源项目 —— 原生JS实现斗地主游戏 ——代码极少、功能都有、直接粘贴即用 >",
		link: "https://blog.csdn.net/m0_57904695/article/details/128982118?ops_request_misc=%257B%2522request%255Fid%2522%253A%2522169639671216800226593158%2522%252C%2522scm%2522%253A%252220140713.130102334.pc%255Fblog.%2522%257D&request_id=169639671216800226593158&biz_id=0&utm_medium=distribute.pc_search_result.none-task-blog-2~blog~first_rank_ecpm_v1~rank_v31_ecpm-1-128982118-null-null.nonecase&utm_term=%E6%B8%B8%E6%88%8F&spm=1018.2226.3001.4450",
	},
	{
		uname: "Vue3项目 —— Vite / Webpack 批量注册组件",
		link: "https://blog.csdn.net/m0_57904695/article/details/128919255?ops_request_misc=%257B%2522request%255Fid%2522%253A%2522169639673416800226554419%2522%252C%2522scm%2522%253A%252220140713.130102334.pc%255Fblog.%2522%257D&request_id=169639673416800226554419&biz_id=0&utm_medium=distribute.pc_search_result.none-task-blog-2~blog~first_rank_ecpm_v1~rank_v31_ecpm-1-128919255-null-null.nonecase&utm_term=%E6%89%B9%E9%87%8F%E6%B3%A8%E5%86%8C%E7%BB%84%E4%BB%B6&spm=1018.2226.3001.4450",
	},
	{
		uname:
			"Vue3 项目实战 —— 后台管理系统( pc端 ) —— 动态多级导航菜单顶部侧边联动",
		link: "https://blog.csdn.net/m0_57904695/article/details/128740216?ops_request_misc=%257B%2522request%255Fid%2522%253A%2522169639675316800185838816%2522%252C%2522scm%2522%253A%252220140713.130102334.pc%255Fblog.%2522%257D&request_id=169639675316800185838816&biz_id=0&utm_medium=distribute.pc_search_result.none-task-blog-2~blog~first_rank_ecpm_v1~rank_v31_ecpm-1-128740216-null-null.nonecase&utm_term=%E5%8A%A8%E6%80%81%E5%A4%9A%E7%BA%A7%E5%AF%BC%E8%88%AA%E8%8F%9C%E5%8D%95%E9%A1%B6%E9%83%A8%E4%BE%A7%E8%BE%B9%E8%81%94%E5%8A%A8&spm=1018.2226.3001.4450",
	},
]);

let flag = ref<boolean>(false);
const debounceInput = () => {
	// 初始化 恢复高亮 重置数据
	flag.value = false;
	listArr = JSON.parse(JSON.stringify(listArr));
	// 装换成数组，方便循环
	let searchVal = iptVal.value.split("");
	if (iptVal.value == "") return;
	var regex = /^[0-9a-zA-Z\u4e00-\u9fa5]+$/;
	if (regex.test(iptVal.value)) {
		// 匹配成功，iptVal.value只包含数字、汉字和字母
		// 输入框的值转为数组方便循环，在循环得到搜索框的每一项，与列表中的每一项进行匹配，如果匹配到，就替换标签，高亮展示
		searchVal.forEach((searchValItem: string) => onReplace(searchValItem));
	} else {
		// 匹配失败，iptVal.value包含其他字符
		ElMessage.error("只能查找数字、汉字和字母");
	}
};

// 高亮替换标签函数
function onReplace(searchValItem: string) {
	// 循环列表 { @listArrItem } 列表的每一项
	listArr.forEach((listArrItem) => {
		// 如果搜索框的值不在列表中，直接终止返回
		if (listArrItem.uname.indexOf(searchValItem) == -1) return;
		// 替换的标签样式
		let hightStr = `<em style='color: #333333;
                    font-weight: bold;
                    font-style: normal;
                    background-image: url(https://t8.baidu.com/it/u=1501552470,2690656309&fm=167&app=3000&f=PNG&fmt=auto&q=100&size=f624_21);
                    background-repeat: repeat-x;
                    background-position-y: bottom;
                    background-size: 100% 8px;
                    '>
                    ${searchValItem}
                  </em>`;

		// 不匹配已有<em></em> 高亮标签的内容
		let reg = new RegExp(`(?![^<]*>|[^<>]*<\/em>)${searchValItem}`, "gi");
		listArrItem.uname = listArrItem.uname.replace(reg, hightStr);
		flag.value = true;
	});
}

// 进入页面时，自动聚焦到搜索框
onMounted(() => {
	let foc = document.querySelector(".el-input__inner") as HTMLInputElement;
	foc.focus();
});
</script>

<style lang="scss" scoped>
// a.link 这是一个交集选择器，即同时满足span和.highth的元素
a.link {
	// 去掉默认色
	color: #333333;
	// 去掉下划线
	text-decoration: none;
	// 鼠标移入时的样式
	&:hover {
		color: #4a8cd6;
		text-decoration: none;
	}
}
</style>
```

### **draggable**

> v-draggable <br />
> 拖拽

```javascript{4}
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

### **longpress**

> v-longpress="longpress" <br />
> 长按

```javascript{4}
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

### **throttle**

> v-throttle="throttleClick" <br />
> 节流

```javascript{4}
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

### **waterMarker**

> 防篡改水印

```html
<div
	v-waterMarker="{text:'版权所有',textColor:'rgba(180, 180, 180, 0.4)'}"
></div>
```

## 4、Hooks 的使用方法

### debounceRest <br />

> 更加丰富的 **防抖** 可以传参数

```javascript{8}
<template>
	<el-button type="primary" @click="onDbo('我是参数')"
		>防抖按钮 (0.5秒后执行)</el-button
	>
</template>

<script setup lang="ts">
import { debounceRest } from "vue3-directive-tools";
const onDbo = debounceRest((valStr: string) => {
	console.log("😂👨🏾‍❤‍👨🏼==>：", valStr);
}, 500);
</script>
```

### isEvenOrOdd <br />

> 判断**奇数偶数**

```javascript{2,5}
<el-button @click="handClick">判断奇数偶数</el-button>
import { isEvenOrOdd } from "vue3-directive-tools";

function handClick() {
	const isEvenOrOdd = isEvenOrOdd(123);
	console.log("！这里输出奇偶判断 🚀 ==>：", isEvenOrOdd);
}
```

### isType <br />

> 判断**数据类型**

```javascript{1}
import { isType } from "vue3-directive-tools";

onMounted(() => {
	// typeof 运算符返回 Symbol 的类型为 "function"，因为它可以像函数一样调用来创建新的 Symbol。
	console.log("🤺🤺 function 🚀 ==>:", typeof Symbol);
	console.log("🤺🤺 function 🚀 ==>:", isType(Symbol));
	console.log("🤺🤺 symbol 🚀 ==>:", isType(Symbol("Foo")));
	console.log("🤺🤺 object 🚀 ==>:", isType({ name: "张坤", sex: "男" }));
	console.log("🤺🤺 string 🚀 ==>:", isType("666"));
	console.log("🤺🤺 string 🚀 ==>:", isType("777"));
});
```

### customScroll <br />

> 滚轮自动控制**页面的滚动方向**

- 测试地址 https://zhang-kun8888.gitee.io/vite--ts--vue3---template/#/monitoringView
- 当页面没有竖向滚动条，如果滚动滑轮则鼠标滚轮控制页面横向滚动（如果有）
- 当页面有竖向滚动条，如果滚动滑轮则鼠标滚轮还是优先控制页面的竖向滚动
- 注意 💡：不能和 handleDiagramInteraction 函数共同使用

```javascript{1}
import { customScroll } from "vue3-directive-tools";
window.addEventListener(
	"wheel",
	function (event) {
		customScroll(event, ".workflow-right");// 传入需要滚动的dom class
	},
	{ passive: false }
);
```

### handleDiagramInteraction <br />

> 滚轮控制页面**缩放**，左键可拖动缩放区域

```javascript{1}
import { handleDiagramInteraction } from "vue3-directive-tools";

// 第一种方式：在合适的处理条件下使用动态导入传参
import("./js/dragView").then((module) => {
	module.handleDiagramInteraction(".workflow-right"); // 传入需要缩放的dom class
});

// 第二种方式：在dom加载完后执行，不使用动态导入方式
onMounted(() => {
	handleDiagramInteraction(".workflow-right");
});
```

## 5、npm 命令大全(扩展)

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
