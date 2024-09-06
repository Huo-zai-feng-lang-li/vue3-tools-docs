<p align="center">
  <a target="_blank" href="https://github.com/Huo-zai-feng-lang-li/vue-print-last">
     <img alt="logo" src="https://img.jsdelivr.com/github.com/Huo-zai-feng-lang-li/vue-print-last/raw/main/logo.gif" width="300">
  </a>
</p>

<p align="center">
  <h3 align="center">Vue Print Last</h3>
  <p align="center" style="font-size:14px">路虽远行则将至，事虽难做则必成！</p>
</p>

- Vue 打印插件，简单、快速、方便、轻巧，支持 Vue 2 和 Vue 3。
- 环境支持：浏览器端、Node.js 环境。esm、cjs、umd、iife 格式。
- 建议您下载发行的最新版本以获得更加完整丰富插件功能生态。

  > 本插件基于 [vue3-print-nb](https://github.com/Power-kxLee/vue3-print-nb) 开发，并使用 TypeScript 完全重写，以更好地支持 Vue 3 的 setup 函数。

## 特性

- 支持指令调用和手动调用 `VuePrintLast` 方法进行打印。
- 支持完整生命函数周期链条，参见下方 APi 详解。
- 更好地支持 Vue 3 的 setup 函数。
- 支持异步 url 打印。
- 支持全局和局部内容打印，以及打印预览功能。
- 支持设置指定 class 样式的元素忽略打印，额外 css 路径。
- 支持通过 css 选择器、手动传入 Dom 节点进行局部打印。

## 安装

你可以通过 npm、 yarn 或 pnpm 安装该插件：

```bash
npm install vue-print-last --save
# or
yarn add vue-print-last
# or
pnpm add vue-print-last
```

## 快速开始

### 1. 全局使用插件

在你的 `main.ts` 文件中：

```typescript
import { createApp } from "vue";
import App from "./App.vue";
import { printPlugin } from "vue-print-last";

const app = createApp(App);
app.use(printPlugin);
app.mount("#app");
```

### 2. Vue3 在组件中使用指令

```vue
<script setup>
// 直接导入指令
import { vPrint } from "vue-print-last";
</script>

<template>
  <div>
    <button v-print>打印整个页面</button>
    <button v-print="'#printMe'">打印局部内容</button>
    <div id="printMe">
      <p>这是需要打印的局部内容</p>
      <p>更多内容...</p>
    </div>
  </div>
</template>
```

### 3. Vue2 在组件中使用指令

```vue
<script>
import { vPrint } from "vue-print-last";

export default {
  name: "App",
  directives: {
    print: vPrint
  }
};
</script>

<template>
  <div>
    <button v-print>打印整个页面</button>
    <button v-print="'#printMe'">打印局部内容</button>
    <div id="printMe">
      <p>这是需要打印的局部内容</p>
      <p>更多内容...</p>
    </div>
  </div>
</template>
```

### 4. 使用 `VuePrintlast` 类

如果你需要更复杂的打印逻辑，可以直接使用 `VuePrintlast` 类：

```vue
<script setup>
import { VuePrintLast } from "vue-print-last";

function handlePrint() {
  new VuePrintLast({ el: "#printMe" /** 其他参数 */ });
}
</script>

<template>
  <div>
    <button @click="handlePrint">打印局部内容</button>
    <div id="printMe">
      <p>这是需要打印的内容</p>
    </div>
  </div>
</template>
```

### 5. 浏览器 html 格式使用

> 现代浏览器支持通过`<script type="module">`加载 ESM 格式的脚本。

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1.0"
    />
    <title>浏览器环境 Vue Print Last Example</title>
  </head>

  <body>
    <div id="printMe">
      <h1>这是需要打印的内容</h1>
      <p>Vue Print Last 插件示例</p>
    </div>

    <!-- <button onclick="handlePrint()">打印内容</button> -->
    <button id="printButton">打印内容</button>
    <script type="module">
      import * as vuePrintLast from "https://cdn.jsdelivr.net/npm/vue-print-last@1.0.6/+esm";

      function handlePrint() {
        const printer = new vuePrintLast.VuePrintLast({
          el: "#printMe",
          watermark: "html模板插件使用方式"
        });
        printer.print(); // 执行打印操作
      }
      /**
       * ES 模块 <script> 标签内部，这使得它在全局作用域中不可见，因此无法通过 onclick 属性直接访问 handlePrint 函数。
       * 解决这个问题，你可以将 handlePrint 函数添加到全局作用域中，或者使用事件监听方法来调用它。
       */
      // window.handlePrint = handlePrint;
      document
        .getElementById("printButton")
        .addEventListener("click", handlePrint);
    </script>
  </body>
</html>
```

## API 详解

### `vPrint` 指令

- **全屏打印**：`<button v-print>打印整个页面</button>`
- **局部打印**：`<button v-print="'#printMe'">打印局部内容</button>`，其中 `#printMe` 是需要打印的 DOM 元素选择器。

### `VuePrintLast` 类

用于手动调用打印功能。

#### 参数说明

| 参数 | 类型 | 说明 | 默认值 |
| --- | --- | --- | --- |
| `el` | `string` \| `HtmlElement` | 需要打印的元素，支持 css 选择器或 dom 节点 | - |
| `standard` | `string` | 文档类型，默认是 html5，可选 html5，loose，strict | 'html5' |
| `noPrintSelector` | `string[]` \| `string` | 打印时需要忽略的 css 选择器 | - |
| `preview` | `boolean` | 是否启用打印预览功能 | `false` |
| `previewTitle` | `string` | 预览窗口的标题 | '打印预览' |
| `previewPrintBtnLabel` | `string` | 预览窗口中的打印按钮标签 | '打印' |
| `extraCss` | `string` | 额外的 CSS 文件路径（不建议使用"../"相对路径） | - |
| `customSize` | `object` | 传递纸张自定义尺寸 | { width: "280mm", height: "297mm" } |
| `watermark` | `string` | 水印文字,非空字符串就会显示 | 不显示 |
| `extraHead` | `string` | 额外的 `<head>` 内容 | - |
| `url` | `string` | 打印指定的网址内容 | - |
| `asyncUrl` | `function` | 异步加载 URL 内容的方法 | - |
| `zIndex` | `number` | 预览窗口的 `z-index`值 | 20002 |
| `openCallback` | `function` | 打印窗口打开时的回调 | - |
| `closeCallback` | `function` | 打印窗口关闭时的回调 | - |
| `beforeOpenCallback` | `function` | 打印窗口打开前的回调（打印预览使用） | - |
| `previewBeforeOpenCallback` | `function` | 预览框架 iframe 加载前的回调（预览使用） | - |
| `previewOpenCallback` | `function` | 预览框架 iframe 加载完成后的回调（预览使用） | - |

## 使用示例

### 打印整个页面

```vue
<button v-print>打印整个页面</button>
```

### 打印局部内容

通过指定 `id` 参数打印局部内容：

```vue
<div id="printMe">
  <p>这是需要打印的内容</p>
</div>

<button v-print="'#printMe'">打印局部内容</button>
```

允许传入一个 dom 节点，如下，可以通过 `ref` 获取打印元素

```vue
<script setup lang="ts">
import { ref, type Ref } from "vue";
import { VuePrintLast } from "vue-print-last";
function handlePrint() {
  const printEle = ref(null) as Ref<HTMLElement>;
  new VuePrintLast({ el: printEle });
}
</script>

<template>
  <div ref="printEle">
    <p>这是需要打印的内容</p>
  </div>

  <button v-print="handlePrint">打印局部内容</button>
</template>
```

### 传递对象参数

```vue
<template>
  <div>
    <div id="printMe">
      <p>这是需要打印的内容</p>
    </div>
  </div>

  <button v-print="printObj">打印局部内容</button>
</template>

<script setup>
const printObj = {
  el: "#printMe",
  preview: true,
  extraCss: "https://cdn.example.com/extra.css",
  openCallback() {
    console.log("执行了打印");
  },
  closeCallback() {
    console.log("关闭了打印工具");
  }
};
</script>
```

### 打印 URL

通过指定 URL 打印，并确保你的 URL 符合同源策略：

```vue
<template>
  <button v-print="printObj">打印指定 URL</button>
</template>

<script setup>
const printObj = {
  url: "https://example.com/print-content"
};
</script>
```

### 忽略不需要打印的元素

通过设置 `noPrintSelector` 参数忽略不需要打印的元素：

```vue
<template>
  <div id="printMe">
    <p>葫芦娃，葫芦娃</p>
    <span class="no-print">这是<strong>不需要打印</strong></span>
    <p>一根藤上七朵花</p>
    <span class="no-print">这是<strong>不需要打印</strong></span>
    <p>风吹雨打都不怕</p>
    <span class="no-print">这是<strong>不需要打印</strong></span>
  </div>
  <button v-print="printObj">忽略不需要打印的元素</button>
</template>

<script setup>
const printObj = {
  el: "#printMe",
  // 允许使用 css 选择器，支持传入数组
  noPrintSelector: ".no-print"
};
</script>
```

### 异步加载 URL 内容

如果你的 URL 需要异步加载，可以使用以下方法：

```vue
<template>
  <button v-print="printObj">异步加载 URL 并打印</button>
</template>

<script setup>
const printObj = {
  preview: true,
  asyncUrl(resolve) {
    setTimeout(() => {
      resolve("https://example.com/print-content");
    }, 2000);
  }
};
</script>
```

## FAQ

### 1. 插件、方法支持 Vue2 吗？

该插件对 Vue2 的指令插件机制做了兼容，是可以在 Vue2 环境下使用的，但由于本身是为了 Vue3 而设计的，所以在没有处理 IE 浏览器的兼容，如果想考虑兼容的情况下还是使用 [vue-print-nb](https://github.com/Power-kxLee/vue2-print-nb) 插件。

### 2. `VuePrintlast` 必传参`el`、`url`、`asyncUrl` 其中一个参数, 不支持全屏打印?

`v-print` 指令允许不传入任何参数，此时会打印整个页面，但 `VuePrintlast` 类必须传入 `el`、`url`、`asyncUrl` 其中一个参数参数，这是因为考虑到当需要手动调用全屏打印时，用户完全可以直接使用 `window.print()` 方法进行打印，而不需要使用 `VuePrintlast` 类。

### 3. 不支持打印窗口的确认和取消按钮的回调？

因为打印窗口的确认和取消按钮是由浏览器提供的，所以无法直接在 `VuePrintlast` 类中监听点击事件进行回调，所以只提供了 `closeCallback` 回调函数无论在确认还是取消时都会触发 `closeCallback`。

### 4. 其他框架下（原生 JS）下能否调用？

`VuePrintlast` 是一个纯 JS 实现的类，原则上与框架无关，所以可以在任何框架、或无框架下使用，用户只需要通过调用 `VuePrintlast` 即可，区别是其他框架下无法继承指令、插件模式，只能通过 API 调用。

### 5. 关于 url 加载的一些问题

#### 5.1 动画还没完成就触发打印了

通过 url 打印时，canvas 动画、 css 动画，可能还在执行中就进行打印了，导致打印的内容与预期不符。

**建议通过 `preview: true` 打开预览窗口**，并等待动画执行完成后进行打印。

#### 5.2 URL 跨域问题

`iframe` 无法对跨域站点触发 `print` 方法，这是浏览器的安全策略导致的，

我们可以通过一个折中的方法去实现，在页面中内嵌一个 `iframe` 去加载这个页面，再通过 `el: 'iframe'` 去将该页面进行打印。

### 6. 为什么打印出来的内容样式被改了？

如果你发现，当你实际打印出来的样式与预期的样式不一致，那很有可能是受到了你的公共样式影响，比如下面这些配置：

- 当 body 设置 flex 后，如果你想要打印的容器不是固定宽度，你会发现打印的内容的宽度没有占满。

```css
body {
  display: flex;
}
```

### 7.如何检查准备打印的元素？

当遇到实际打印的元素与预期的不一致时，可以通过 `preview: true` 打开预览窗口后进行检查，预览窗口中的样式即是准备打印的样式。

## License

[MIT](http://opensource.org/licenses/MIT)

---

欢迎在 [GitHub Issues](https://github.com/Huo-zai-feng-lang-li/vue-print-last/issues) 上讨论并提出问题或提交 Pull Request！

> npm 在发布时自动修正了你的 package.json 中的一些错误。

```bash
npm pkg fix
```

这将帮助确保你的 package.json 文件符合 npm 的要求，避免在未来发布时出现类似的警告。
