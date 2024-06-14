import{_ as s,o as n,c as a,Q as l}from"./chunks/framework.a10e78c8.js";const m=JSON.parse('{"title":"progress-scroll 滚动进度可视化插件","description":"","frontmatter":{},"headers":[],"relativePath":"vue3-progress-scroll.md","filePath":"vue3-progress-scroll.md","lastUpdated":1718359801000}'),p={name:"vue3-progress-scroll.md"},t=l(`<h1 id="progress-scroll-滚动进度可视化插件" tabindex="-1">progress-scroll 滚动进度可视化插件 <a class="header-anchor" href="#progress-scroll-滚动进度可视化插件" aria-label="Permalink to &quot;progress-scroll 滚动进度可视化插件&quot;">​</a></h1><blockquote><p>🤖🎉🎉 进度监控可视化插件是一个基于 原生 <code>Css + Vue3 钩子</code> 封装的实用 hooks 工具，用于在 Vue.js 应用程序中展示进度。它提供了一种简单、高效的操作体验、深深感受开发的乐趣 ~</p></blockquote><h2 id="📦-体验" tabindex="-1">📦 体验 <a class="header-anchor" href="#📦-体验" aria-label="Permalink to &quot;📦 体验&quot;">​</a></h2><p><a href="https://huo-zai-feng-lang-li.github.io/Vue3-template/#/scroll" target="_blank" rel="noreferrer">项目预览</a></p><ul><li>Tips: 尝试向下滚动屏幕试试 🤖</li></ul><h2 id="🌍-安装" tabindex="-1">🌍 安装 <a class="header-anchor" href="#🌍-安装" aria-label="Permalink to &quot;🌍 安装&quot;">​</a></h2><p>你可以使用 npm 或 pnpm 安装插件：</p><div class="language-javascript vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">npm i vue3</span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">progress</span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">scroll</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">npm i vue3</span><span style="color:#D73A49;">-</span><span style="color:#24292E;">progress</span><span style="color:#D73A49;">-</span><span style="color:#24292E;">scroll</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="🛹-注入" tabindex="-1">🛹 注入 <a class="header-anchor" href="#🛹-注入" aria-label="Permalink to &quot;🛹 注入&quot;">​</a></h2><p>在你的主应用程序入口文件（例如 main.js）中，导入并使用 ： <strong><em><code>main.js</code></em></strong></p><div class="language-javascript vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">/* Step 1</span></span>
<span class="line"><span style="color:#6A737D;">------------------------------------------------------------------ */</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { useScroll } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;vue3-progress-scroll&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">app</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">createApp</span><span style="color:#E1E4E8;">(App);</span></span>
<span class="line"><span style="color:#E1E4E8;">app.</span><span style="color:#B392F0;">use</span><span style="color:#E1E4E8;">(useScroll);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">/* Step 1</span></span>
<span class="line"><span style="color:#6A737D;">------------------------------------------------------------------ */</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { useScroll } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;vue3-progress-scroll&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">app</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">createApp</span><span style="color:#24292E;">(App);</span></span>
<span class="line"><span style="color:#24292E;">app.</span><span style="color:#6F42C1;">use</span><span style="color:#24292E;">(useScroll);</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h3 id="🎉-配置" tabindex="-1">🎉 配置 <a class="header-anchor" href="#🎉-配置" aria-label="Permalink to &quot;🎉 配置&quot;">​</a></h3><div class="language-javascript vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">/* Step 2</span></span>
<span class="line"><span style="color:#6A737D;">------------------------------------------------------------------ */</span></span>
<span class="line"><span style="color:#6A737D;">// 注册插件并提供自定义的进度条属性（可选）例如：</span></span>
<span class="line"><span style="color:#E1E4E8;">app.</span><span style="color:#B392F0;">use</span><span style="color:#E1E4E8;">(useScroll, {</span></span>
<span class="line"><span style="color:#E1E4E8;">	progress: </span><span style="color:#9ECBFF;">&quot;green&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 进度条颜色</span></span>
<span class="line"><span style="color:#E1E4E8;">	progressRollback: </span><span style="color:#9ECBFF;">&quot;#fff&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 进度条回滚颜色</span></span>
<span class="line"><span style="color:#E1E4E8;">	progressTop: </span><span style="color:#9ECBFF;">&quot;3px&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 进度条距离顶部的距离</span></span>
<span class="line"><span style="color:#E1E4E8;">	progressLeft: </span><span style="color:#9ECBFF;">&quot;0px&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 进度条距离左边的距离</span></span>
<span class="line"><span style="color:#E1E4E8;">	UIViewBackground: </span><span style="color:#9ECBFF;">&quot;#fff&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 页面背景色</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">/* Step 2</span></span>
<span class="line"><span style="color:#6A737D;">------------------------------------------------------------------ */</span></span>
<span class="line"><span style="color:#6A737D;">// 注册插件并提供自定义的进度条属性（可选）例如：</span></span>
<span class="line"><span style="color:#24292E;">app.</span><span style="color:#6F42C1;">use</span><span style="color:#24292E;">(useScroll, {</span></span>
<span class="line"><span style="color:#24292E;">	progress: </span><span style="color:#032F62;">&quot;green&quot;</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 进度条颜色</span></span>
<span class="line"><span style="color:#24292E;">	progressRollback: </span><span style="color:#032F62;">&quot;#fff&quot;</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 进度条回滚颜色</span></span>
<span class="line"><span style="color:#24292E;">	progressTop: </span><span style="color:#032F62;">&quot;3px&quot;</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 进度条距离顶部的距离</span></span>
<span class="line"><span style="color:#24292E;">	progressLeft: </span><span style="color:#032F62;">&quot;0px&quot;</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 进度条距离左边的距离</span></span>
<span class="line"><span style="color:#24292E;">	UIViewBackground: </span><span style="color:#032F62;">&quot;#fff&quot;</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 页面背景色</span></span>
<span class="line"><span style="color:#24292E;">});</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h2 id="🤖-使用方法" tabindex="-1">🤖 使用方法 <a class="header-anchor" href="#🤖-使用方法" aria-label="Permalink to &quot;🤖 使用方法&quot;">​</a></h2><p>一旦你设置了插件，你就可以在组件中使用 $openScroll 和 $closeScroll() 方法：</p><blockquote><p>第一种 inject</p></blockquote><div class="language-javascript vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">/* Step 3</span></span>
<span class="line"><span style="color:#6A737D;">------------------------------------------------------------------ */</span></span>
<span class="line"><span style="color:#6A737D;">// 💡 在父容器绑定类名</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">class</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;ProgressTopBar&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">p</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">v-for</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;(item, index) in 1000&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#FDAEB7;font-style:italic;">:key=&quot;index&quot;&gt;{{</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">index</span><span style="color:#E1E4E8;"> </span><span style="color:#FDAEB7;font-style:italic;">+</span><span style="color:#E1E4E8;"> </span><span style="color:#FDAEB7;font-style:italic;">1</span><span style="color:#E1E4E8;"> </span><span style="color:#FDAEB7;font-style:italic;">}}&lt;/p&gt;</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">&lt;/div&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">import</span><span style="color:#E1E4E8;"> { ref, inject } </span><span style="color:#B392F0;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;vue&quot;</span><span style="color:#FDAEB7;font-style:italic;">;</span></span>
<span class="line"><span style="color:#B392F0;">import</span><span style="color:#E1E4E8;"> { scrollKey } </span><span style="color:#B392F0;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;vue3-progress-scroll&quot;</span><span style="color:#FDAEB7;font-style:italic;">;</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">inject&lt;typeof</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">scrollKey</span><span style="color:#E1E4E8;">&gt;(scrollKey).$openScroll();</span></span>
<span class="line"><span style="color:#E1E4E8;">inject&lt;</span><span style="color:#85E89D;">typeof</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">scrollKey</span><span style="color:#E1E4E8;">&gt;(scrollKey).$closeScroll();</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">/* Step 3</span></span>
<span class="line"><span style="color:#6A737D;">------------------------------------------------------------------ */</span></span>
<span class="line"><span style="color:#6A737D;">// 💡 在父容器绑定类名</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">div</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">class</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&quot;ProgressTopBar&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">p</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">v-for</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&quot;(item, index) in 1000&quot;</span><span style="color:#24292E;"> </span><span style="color:#B31D28;font-style:italic;">:key=&quot;index&quot;&gt;{{</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">index</span><span style="color:#24292E;"> </span><span style="color:#B31D28;font-style:italic;">+</span><span style="color:#24292E;"> </span><span style="color:#B31D28;font-style:italic;">1</span><span style="color:#24292E;"> </span><span style="color:#B31D28;font-style:italic;">}}&lt;/p&gt;</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">&lt;/div&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">import</span><span style="color:#24292E;"> { ref, inject } </span><span style="color:#6F42C1;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;vue&quot;</span><span style="color:#B31D28;font-style:italic;">;</span></span>
<span class="line"><span style="color:#6F42C1;">import</span><span style="color:#24292E;"> { scrollKey } </span><span style="color:#6F42C1;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;vue3-progress-scroll&quot;</span><span style="color:#B31D28;font-style:italic;">;</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">inject&lt;typeof</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">scrollKey</span><span style="color:#24292E;">&gt;(scrollKey).$openScroll();</span></span>
<span class="line"><span style="color:#24292E;">inject&lt;</span><span style="color:#22863A;">typeof</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">scrollKey</span><span style="color:#24292E;">&gt;(scrollKey).$closeScroll();</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><blockquote><p>第二种 getCurrentInstance()</p></blockquote><div class="language-javascript vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { getCurrentInstance } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;vue&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> { </span><span style="color:#79B8FF;">proxy</span><span style="color:#E1E4E8;"> }</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">any</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">getCurrentInstance</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">proxy.</span><span style="color:#B392F0;">$openScroll</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">proxy.</span><span style="color:#B392F0;">$closeScroll</span><span style="color:#E1E4E8;">();</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { getCurrentInstance } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;vue&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> { </span><span style="color:#005CC5;">proxy</span><span style="color:#24292E;"> }</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">any</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">getCurrentInstance</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">proxy.</span><span style="color:#6F42C1;">$openScroll</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">proxy.</span><span style="color:#6F42C1;">$closeScroll</span><span style="color:#24292E;">();</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h3 id="📝-使用示例-demo-vue" tabindex="-1">📝 使用示例 Demo.vue <a class="header-anchor" href="#📝-使用示例-demo-vue" aria-label="Permalink to &quot;📝 使用示例 Demo.vue&quot;">​</a></h3><div class="language-javascript vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">	&lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">class</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;ProgressTopBar&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">		&lt;</span><span style="color:#85E89D;">p</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">v-for</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;(item, index) in items&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#FDAEB7;font-style:italic;">:key=&quot;index&quot;&gt;{{</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">item</span><span style="color:#E1E4E8;"> </span><span style="color:#FDAEB7;font-style:italic;">}}&lt;/p&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#FDAEB7;font-style:italic;">&lt;/div&gt;</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">&lt;/template&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">&lt;script</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">setup</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">lang</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;ts&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">	// vue3.2.0+ 之后支持的新特性</span></span>
<span class="line"><span style="color:#E1E4E8;">	defineOptions({</span></span>
<span class="line"><span style="color:#E1E4E8;">		name: </span><span style="color:#9ECBFF;">&quot;scrollBar&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 组件名</span></span>
<span class="line"><span style="color:#E1E4E8;">		inheritAttrs: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 是否继承父组件的属性</span></span>
<span class="line"><span style="color:#E1E4E8;">	});</span></span>
<span class="line"><span style="color:#E1E4E8;">	import { ref, inject } from &quot;vue&quot;;</span></span>
<span class="line"><span style="color:#E1E4E8;">	const items = ref&lt;string[]&gt;([]);</span></span>
<span class="line"><span style="color:#E1E4E8;">	for (let i = 0; i &lt; 200; i++) items.value.push(\`Item \${i </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">}\`);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">   import { scrollKey } from &quot;vue3-progress-scroll&quot;;</span></span>
<span class="line"><span style="color:#E1E4E8;">   inject&lt;</span><span style="color:#85E89D;">typeof</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">scrollKey</span><span style="color:#E1E4E8;">&gt;(scrollKey).$openScroll();</span></span>
<span class="line"><span style="color:#E1E4E8;">   inject&lt;</span><span style="color:#85E89D;">typeof</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">scrollKey</span><span style="color:#E1E4E8;">&gt;(scrollKey).$closeScroll();</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">	&lt;</span><span style="color:#22863A;">div</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">class</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&quot;ProgressTopBar&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">		&lt;</span><span style="color:#22863A;">p</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">v-for</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&quot;(item, index) in items&quot;</span><span style="color:#24292E;"> </span><span style="color:#B31D28;font-style:italic;">:key=&quot;index&quot;&gt;{{</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">item</span><span style="color:#24292E;"> </span><span style="color:#B31D28;font-style:italic;">}}&lt;/p&gt;</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#B31D28;font-style:italic;">&lt;/div&gt;</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">&lt;/template&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">&lt;script</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">setup</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">lang</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&quot;ts&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">	// vue3.2.0+ 之后支持的新特性</span></span>
<span class="line"><span style="color:#24292E;">	defineOptions({</span></span>
<span class="line"><span style="color:#24292E;">		name: </span><span style="color:#032F62;">&quot;scrollBar&quot;</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 组件名</span></span>
<span class="line"><span style="color:#24292E;">		inheritAttrs: </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 是否继承父组件的属性</span></span>
<span class="line"><span style="color:#24292E;">	});</span></span>
<span class="line"><span style="color:#24292E;">	import { ref, inject } from &quot;vue&quot;;</span></span>
<span class="line"><span style="color:#24292E;">	const items = ref&lt;string[]&gt;([]);</span></span>
<span class="line"><span style="color:#24292E;">	for (let i = 0; i &lt; 200; i++) items.value.push(\`Item \${i </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">}\`);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">   import { scrollKey } from &quot;vue3-progress-scroll&quot;;</span></span>
<span class="line"><span style="color:#24292E;">   inject&lt;</span><span style="color:#22863A;">typeof</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">scrollKey</span><span style="color:#24292E;">&gt;(scrollKey).$openScroll();</span></span>
<span class="line"><span style="color:#24292E;">   inject&lt;</span><span style="color:#22863A;">typeof</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">scrollKey</span><span style="color:#24292E;">&gt;(scrollKey).$closeScroll();</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><h2 id="💌-原理" tabindex="-1">💌 原理 <a class="header-anchor" href="#💌-原理" aria-label="Permalink to &quot;💌 原理&quot;">​</a></h2><div class="language-html vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;!</span><span style="color:#85E89D;">DOCTYPE</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">html</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">html</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">lang</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;en&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">	&lt;</span><span style="color:#85E89D;">head</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">		&lt;</span><span style="color:#85E89D;">meta</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">charset</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;UTF-8&quot;</span><span style="color:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">		&lt;</span><span style="color:#85E89D;">meta</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">name</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;viewport&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">content</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;width=device-width, initial-scale=1.0&quot;</span><span style="color:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">		&lt;</span><span style="color:#85E89D;">title</span><span style="color:#E1E4E8;">&gt;进度条 原理&lt;/</span><span style="color:#85E89D;">title</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">		&lt;</span><span style="color:#85E89D;">style</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">			</span><span style="color:#6A737D;">/* 知其意才能更好的使用~ */</span></span>
<span class="line"><span style="color:#E1E4E8;">			</span><span style="color:#85E89D;">body</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">				</span><span style="color:#79B8FF;">position</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">relative</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">				</span><span style="color:#79B8FF;">padding</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">50</span><span style="color:#F97583;">px</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">				</span><span style="color:#79B8FF;">font-size</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">24</span><span style="color:#F97583;">px</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">				</span><span style="color:#79B8FF;">line-height</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">30</span><span style="color:#F97583;">px</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">				</span><span style="color:#79B8FF;">background-image</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">linear-gradient</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">to</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">right</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">top</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">#ffcc00</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">50</span><span style="color:#F97583;">%</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">#eee</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">50</span><span style="color:#F97583;">%</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">				</span><span style="color:#79B8FF;">background-size</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">100</span><span style="color:#F97583;">%</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">calc</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">100</span><span style="color:#F97583;">%</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">100</span><span style="color:#F97583;">vh</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">5</span><span style="color:#F97583;">px</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">				</span><span style="color:#79B8FF;">background-repeat</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">no-repeat</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">				</span><span style="color:#79B8FF;">z-index</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">			}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">			</span><span style="color:#85E89D;">body</span><span style="color:#B392F0;">::after</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">				</span><span style="color:#79B8FF;">content</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">				</span><span style="color:#79B8FF;">position</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">fixed</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">				</span><span style="color:#79B8FF;">top</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">5</span><span style="color:#F97583;">px</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">				</span><span style="color:#79B8FF;">left</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">				</span><span style="color:#79B8FF;">bottom</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">				</span><span style="color:#79B8FF;">right</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">				</span><span style="color:#79B8FF;">background</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">#fff</span><span style="color:#E1E4E8;">; </span><span style="color:#6A737D;">/* 尝试注释我看看 */</span></span>
<span class="line"><span style="color:#E1E4E8;">				</span><span style="color:#79B8FF;">z-index</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">-1</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">			}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">			</span><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">			* Unrelated css</span></span>
<span class="line"><span style="color:#6A737D;">			*/</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">			</span><span style="color:#85E89D;">h1</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">				</span><span style="color:#79B8FF;">font-size</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">32</span><span style="color:#F97583;">px</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">				</span><span style="color:#79B8FF;">line-height</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">60</span><span style="color:#F97583;">px</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">			}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">			</span><span style="color:#85E89D;">ul</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">				</span><span style="color:#79B8FF;">margin-top</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">30</span><span style="color:#F97583;">px</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">			}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">			</span><span style="color:#85E89D;">p</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">				</span><span style="color:#79B8FF;">font-size</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">24</span><span style="color:#F97583;">px</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">				</span><span style="color:#79B8FF;">line-height</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">30</span><span style="color:#F97583;">px</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">				</span><span style="color:#79B8FF;">margin-top</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">30</span><span style="color:#F97583;">px</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">			}</span></span>
<span class="line"><span style="color:#E1E4E8;">		&lt;/</span><span style="color:#85E89D;">style</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">	&lt;/</span><span style="color:#85E89D;">head</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">	&lt;</span><span style="color:#85E89D;">body</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">		&lt;</span><span style="color:#85E89D;">h1</span><span style="color:#E1E4E8;">&gt;不可思议的纯 CSS 进度条效果&lt;/</span><span style="color:#85E89D;">h1</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">		&lt;</span><span style="color:#85E89D;">p</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">			在继续阅读下文之前，你可以先缓一缓。尝试思考一下上面的效果或者动手尝试一下，不借助</span></span>
<span class="line"><span style="color:#E1E4E8;">			JS ，能否巧妙的实现上述效果。</span></span>
<span class="line"><span style="color:#E1E4E8;">		&lt;/</span><span style="color:#85E89D;">p</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">		&lt;</span><span style="color:#85E89D;">p</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">			OK，继续。这个效果是我在业务开发的过程中遇到的一个类似的小问题。其实即便让我借助</span></span>
<span class="line"><span style="color:#E1E4E8;">			Javascript</span></span>
<span class="line"><span style="color:#E1E4E8;">			，我的第一反应也是，感觉很麻烦啊。所以我一直在想，有没有可能只使用 CSS</span></span>
<span class="line"><span style="color:#E1E4E8;">			完成这个效果呢？</span></span>
<span class="line"><span style="color:#E1E4E8;">		&lt;/</span><span style="color:#85E89D;">p</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">		&lt;</span><span style="color:#85E89D;">p</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">			在继续阅读下文之前，你可以先缓一缓。尝试思考一下上面的效果或者动手尝试一下，不借助</span></span>
<span class="line"><span style="color:#E1E4E8;">			JS ，能否巧妙的实现上述效果。</span></span>
<span class="line"><span style="color:#E1E4E8;">		&lt;/</span><span style="color:#85E89D;">p</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">		&lt;</span><span style="color:#85E89D;">p</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">			OK，继续。这个效果是我在业务开发的过程中遇到的一个类似的小问题。其实即便让我借助</span></span>
<span class="line"><span style="color:#E1E4E8;">			Javascript</span></span>
<span class="line"><span style="color:#E1E4E8;">			，我的第一反应也是，感觉很麻烦啊。所以我一直在想，有没有可能只使用 CSS</span></span>
<span class="line"><span style="color:#E1E4E8;">			完成这个效果呢？</span></span>
<span class="line"><span style="color:#E1E4E8;">		&lt;/</span><span style="color:#85E89D;">p</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">		&lt;</span><span style="color:#85E89D;">p</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">			在继续阅读下文之前，你可以先缓一缓。尝试思考一下上面的效果或者动手尝试一下，不借助</span></span>
<span class="line"><span style="color:#E1E4E8;">			JS ，能否巧妙的实现上述效果。</span></span>
<span class="line"><span style="color:#E1E4E8;">		&lt;/</span><span style="color:#85E89D;">p</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">		&lt;</span><span style="color:#85E89D;">p</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">			OK，继续。这个效果是我在业务开发的过程中遇到的一个类似的小问题。其实即便让我借助</span></span>
<span class="line"><span style="color:#E1E4E8;">			Javascript</span></span>
<span class="line"><span style="color:#E1E4E8;">			，我的第一反应也是，感觉很麻烦啊。所以我一直在想，有没有可能只使用 CSS</span></span>
<span class="line"><span style="color:#E1E4E8;">			完成这个效果呢？</span></span>
<span class="line"><span style="color:#E1E4E8;">		&lt;/</span><span style="color:#85E89D;">p</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">		&lt;</span><span style="color:#85E89D;">p</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">			在继续阅读下文之前，你可以先缓一缓。尝试思考一下上面的效果或者动手尝试一下，不借助</span></span>
<span class="line"><span style="color:#E1E4E8;">			JS ，能否巧妙的实现上述效果。</span></span>
<span class="line"><span style="color:#E1E4E8;">		&lt;/</span><span style="color:#85E89D;">p</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">		&lt;</span><span style="color:#85E89D;">p</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">			OK，继续。这个效果是我在业务开发的过程中遇到的一个类似的小问题。其实即便让我借助</span></span>
<span class="line"><span style="color:#E1E4E8;">			Javascript</span></span>
<span class="line"><span style="color:#E1E4E8;">			，我的第一反应也是，感觉很麻烦啊。所以我一直在想，有没有可能只使用 CSS</span></span>
<span class="line"><span style="color:#E1E4E8;">			完成这个效果呢？</span></span>
<span class="line"><span style="color:#E1E4E8;">		&lt;/</span><span style="color:#85E89D;">p</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">		&lt;</span><span style="color:#85E89D;">p</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">			在继续阅读下文之前，你可以先缓一缓。尝试思考一下上面的效果或者动手尝试一下，不借助</span></span>
<span class="line"><span style="color:#E1E4E8;">			JS ，能否巧妙的实现上述效果。</span></span>
<span class="line"><span style="color:#E1E4E8;">		&lt;/</span><span style="color:#85E89D;">p</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">		&lt;</span><span style="color:#85E89D;">p</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">			OK，继续。这个效果是我在业务开发的过程中遇到的一个类似的小问题。其实即便让我借助</span></span>
<span class="line"><span style="color:#E1E4E8;">			Javascript</span></span>
<span class="line"><span style="color:#E1E4E8;">			，我的第一反应也是，感觉很麻烦啊。所以我一直在想，有没有可能只使用 CSS</span></span>
<span class="line"><span style="color:#E1E4E8;">			完成这个效果呢？</span></span>
<span class="line"><span style="color:#E1E4E8;">		&lt;/</span><span style="color:#85E89D;">p</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">		&lt;</span><span style="color:#85E89D;">p</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">			在继续阅读下文之前，你可以先缓一缓。尝试思考一下上面的效果或者动手尝试一下，不借助</span></span>
<span class="line"><span style="color:#E1E4E8;">			JS ，能否巧妙的实现上述效果。</span></span>
<span class="line"><span style="color:#E1E4E8;">		&lt;/</span><span style="color:#85E89D;">p</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">		&lt;</span><span style="color:#85E89D;">p</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">			OK，继续。这个效果是我在业务开发的过程中遇到的一个类似的小问题。其实即便让我借助</span></span>
<span class="line"><span style="color:#E1E4E8;">			Javascript</span></span>
<span class="line"><span style="color:#E1E4E8;">			，我的第一反应也是，感觉很麻烦啊。所以我一直在想，有没有可能只使用 CSS</span></span>
<span class="line"><span style="color:#E1E4E8;">			完成这个效果呢？</span></span>
<span class="line"><span style="color:#E1E4E8;">		&lt;/</span><span style="color:#85E89D;">p</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">		&lt;</span><span style="color:#85E89D;">p</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">			在继续阅读下文之前，你可以先缓一缓。尝试思考一下上面的效果或者动手尝试一下，不借助</span></span>
<span class="line"><span style="color:#E1E4E8;">			JS ，能否巧妙的实现上述效果。</span></span>
<span class="line"><span style="color:#E1E4E8;">		&lt;/</span><span style="color:#85E89D;">p</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">		&lt;</span><span style="color:#85E89D;">ul</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">			&lt;</span><span style="color:#85E89D;">li</span><span style="color:#E1E4E8;">&gt;1.xxxxxxxxxxxxxxxxxxxxx&lt;/</span><span style="color:#85E89D;">li</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">			&lt;</span><span style="color:#85E89D;">li</span><span style="color:#E1E4E8;">&gt;2.xxxxxxxxxxxxxxxxxxxxx&lt;/</span><span style="color:#85E89D;">li</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">			&lt;</span><span style="color:#85E89D;">li</span><span style="color:#E1E4E8;">&gt;3.xxxxxxxxxxxxxxxxxxxxx&lt;/</span><span style="color:#85E89D;">li</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">			&lt;</span><span style="color:#85E89D;">li</span><span style="color:#E1E4E8;">&gt;4.xxxxxxxxxxxxxxxxxxxxx&lt;/</span><span style="color:#85E89D;">li</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">		&lt;/</span><span style="color:#85E89D;">ul</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">		&lt;</span><span style="color:#85E89D;">p</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">			OK，继续。这个效果是我在业务开发的过程中遇到的一个类似的小问题。其实即便让我借助</span></span>
<span class="line"><span style="color:#E1E4E8;">			Javascript</span></span>
<span class="line"><span style="color:#E1E4E8;">			，我的第一反应也是，感觉很麻烦啊。所以我一直在想，有没有可能只使用 CSS</span></span>
<span class="line"><span style="color:#E1E4E8;">			完成这个效果呢？</span></span>
<span class="line"><span style="color:#E1E4E8;">		&lt;/</span><span style="color:#85E89D;">p</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">		&lt;</span><span style="color:#85E89D;">p</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">			在继续阅读下文之前，你可以先缓一缓。尝试思考一下上面的效果或者动手尝试一下，不借助</span></span>
<span class="line"><span style="color:#E1E4E8;">			JS ，能否巧妙的实现上述效果。</span></span>
<span class="line"><span style="color:#E1E4E8;">		&lt;/</span><span style="color:#85E89D;">p</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">		&lt;</span><span style="color:#85E89D;">p</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">			OK，继续。这个效果是我在业务开发的过程中遇到的一个类似的小问题。其实即便让我借助</span></span>
<span class="line"><span style="color:#E1E4E8;">			Javascript</span></span>
<span class="line"><span style="color:#E1E4E8;">			，我的第一反应也是，感觉很麻烦啊。所以我一直在想，有没有可能只使用 CSS</span></span>
<span class="line"><span style="color:#E1E4E8;">			完成这个效果呢？</span></span>
<span class="line"><span style="color:#E1E4E8;">		&lt;/</span><span style="color:#85E89D;">p</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">		&lt;</span><span style="color:#85E89D;">p</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">			在继续阅读下文之前，你可以先缓一缓。尝试思考一下上面的效果或者动手尝试一下，不借助</span></span>
<span class="line"><span style="color:#E1E4E8;">			JS ，能否巧妙的实现上述效果。</span></span>
<span class="line"><span style="color:#E1E4E8;">		&lt;/</span><span style="color:#85E89D;">p</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">		&lt;</span><span style="color:#85E89D;">p</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">			OK，继续。这个效果是我在业务开发的过程中遇到的一个类似的小问题。其实即便让我借助</span></span>
<span class="line"><span style="color:#E1E4E8;">			Javascript</span></span>
<span class="line"><span style="color:#E1E4E8;">			，我的第一反应也是，感觉很麻烦啊。所以我一直在想，有没有可能只使用 CSS</span></span>
<span class="line"><span style="color:#E1E4E8;">			完成这个效果呢？</span></span>
<span class="line"><span style="color:#E1E4E8;">		&lt;/</span><span style="color:#85E89D;">p</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">		&lt;</span><span style="color:#85E89D;">p</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">			在继续阅读下文之前，你可以先缓一缓。尝试思考一下上面的效果或者动手尝试一下，不借助</span></span>
<span class="line"><span style="color:#E1E4E8;">			JS ，能否巧妙的实现上述效果。</span></span>
<span class="line"><span style="color:#E1E4E8;">		&lt;/</span><span style="color:#85E89D;">p</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">		&lt;</span><span style="color:#85E89D;">p</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">			OK，继续。这个效果是我在业务开发的过程中遇到的一个类似的小问题。其实即便让我借助</span></span>
<span class="line"><span style="color:#E1E4E8;">			Javascript</span></span>
<span class="line"><span style="color:#E1E4E8;">			，我的第一反应也是，感觉很麻烦啊。所以我一直在想，有没有可能只使用 CSS</span></span>
<span class="line"><span style="color:#E1E4E8;">			完成这个效果呢？</span></span>
<span class="line"><span style="color:#E1E4E8;">		&lt;/</span><span style="color:#85E89D;">p</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">		&lt;</span><span style="color:#85E89D;">p</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">			在继续阅读下文之前，你可以先缓一缓。尝试思考一下上面的效果或者动手尝试一下，不借助</span></span>
<span class="line"><span style="color:#E1E4E8;">			JS ，能否巧妙的实现上述效果。</span></span>
<span class="line"><span style="color:#E1E4E8;">		&lt;/</span><span style="color:#85E89D;">p</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">		&lt;</span><span style="color:#85E89D;">p</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">			OK，继续。这个效果是我在业务开发的过程中遇到的一个类似的小问题。其实即便让我借助</span></span>
<span class="line"><span style="color:#E1E4E8;">			Javascript</span></span>
<span class="line"><span style="color:#E1E4E8;">			，我的第一反应也是，感觉很麻烦啊。所以我一直在想，有没有可能只使用 CSS</span></span>
<span class="line"><span style="color:#E1E4E8;">			完成这个效果呢？</span></span>
<span class="line"><span style="color:#E1E4E8;">		&lt;/</span><span style="color:#85E89D;">p</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">		&lt;</span><span style="color:#85E89D;">p</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">			在继续阅读下文之前，你可以先缓一缓。尝试思考一下上面的效果或者动手尝试一下，不借助</span></span>
<span class="line"><span style="color:#E1E4E8;">			JS ，能否巧妙的实现上述效果。</span></span>
<span class="line"><span style="color:#E1E4E8;">		&lt;/</span><span style="color:#85E89D;">p</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">		&lt;</span><span style="color:#85E89D;">p</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">			OK，继续。这个效果是我在业务开发的过程中遇到的一个类似的小问题。其实即便让我借助</span></span>
<span class="line"><span style="color:#E1E4E8;">			Javascript</span></span>
<span class="line"><span style="color:#E1E4E8;">			，我的第一反应也是，感觉很麻烦啊。所以我一直在想，有没有可能只使用 CSS</span></span>
<span class="line"><span style="color:#E1E4E8;">			完成这个效果呢？</span></span>
<span class="line"><span style="color:#E1E4E8;">		&lt;/</span><span style="color:#85E89D;">p</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">	&lt;/</span><span style="color:#85E89D;">body</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">html</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;!</span><span style="color:#22863A;">DOCTYPE</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">html</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">html</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">lang</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;en&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">	&lt;</span><span style="color:#22863A;">head</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">		&lt;</span><span style="color:#22863A;">meta</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">charset</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;UTF-8&quot;</span><span style="color:#24292E;"> /&gt;</span></span>
<span class="line"><span style="color:#24292E;">		&lt;</span><span style="color:#22863A;">meta</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">name</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;viewport&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">content</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;width=device-width, initial-scale=1.0&quot;</span><span style="color:#24292E;"> /&gt;</span></span>
<span class="line"><span style="color:#24292E;">		&lt;</span><span style="color:#22863A;">title</span><span style="color:#24292E;">&gt;进度条 原理&lt;/</span><span style="color:#22863A;">title</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">		&lt;</span><span style="color:#22863A;">style</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">			</span><span style="color:#6A737D;">/* 知其意才能更好的使用~ */</span></span>
<span class="line"><span style="color:#24292E;">			</span><span style="color:#22863A;">body</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">				</span><span style="color:#005CC5;">position</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">relative</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">				</span><span style="color:#005CC5;">padding</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">50</span><span style="color:#D73A49;">px</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">				</span><span style="color:#005CC5;">font-size</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">24</span><span style="color:#D73A49;">px</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">				</span><span style="color:#005CC5;">line-height</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">30</span><span style="color:#D73A49;">px</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">				</span><span style="color:#005CC5;">background-image</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">linear-gradient</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">to</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">right</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">top</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">#ffcc00</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">50</span><span style="color:#D73A49;">%</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">#eee</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">50</span><span style="color:#D73A49;">%</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">				</span><span style="color:#005CC5;">background-size</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">100</span><span style="color:#D73A49;">%</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">calc</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">100</span><span style="color:#D73A49;">%</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">-</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">100</span><span style="color:#D73A49;">vh</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">5</span><span style="color:#D73A49;">px</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">				</span><span style="color:#005CC5;">background-repeat</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">no-repeat</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">				</span><span style="color:#005CC5;">z-index</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">			}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">			</span><span style="color:#22863A;">body</span><span style="color:#6F42C1;">::after</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">				</span><span style="color:#005CC5;">content</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">				</span><span style="color:#005CC5;">position</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">fixed</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">				</span><span style="color:#005CC5;">top</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">5</span><span style="color:#D73A49;">px</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">				</span><span style="color:#005CC5;">left</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">				</span><span style="color:#005CC5;">bottom</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">				</span><span style="color:#005CC5;">right</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">				</span><span style="color:#005CC5;">background</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">#fff</span><span style="color:#24292E;">; </span><span style="color:#6A737D;">/* 尝试注释我看看 */</span></span>
<span class="line"><span style="color:#24292E;">				</span><span style="color:#005CC5;">z-index</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">-1</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">			}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">			</span><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">			* Unrelated css</span></span>
<span class="line"><span style="color:#6A737D;">			*/</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">			</span><span style="color:#22863A;">h1</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">				</span><span style="color:#005CC5;">font-size</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">32</span><span style="color:#D73A49;">px</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">				</span><span style="color:#005CC5;">line-height</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">60</span><span style="color:#D73A49;">px</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">			}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">			</span><span style="color:#22863A;">ul</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">				</span><span style="color:#005CC5;">margin-top</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">30</span><span style="color:#D73A49;">px</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">			}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">			</span><span style="color:#22863A;">p</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">				</span><span style="color:#005CC5;">font-size</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">24</span><span style="color:#D73A49;">px</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">				</span><span style="color:#005CC5;">line-height</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">30</span><span style="color:#D73A49;">px</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">				</span><span style="color:#005CC5;">margin-top</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">30</span><span style="color:#D73A49;">px</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">			}</span></span>
<span class="line"><span style="color:#24292E;">		&lt;/</span><span style="color:#22863A;">style</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">	&lt;/</span><span style="color:#22863A;">head</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">	&lt;</span><span style="color:#22863A;">body</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">		&lt;</span><span style="color:#22863A;">h1</span><span style="color:#24292E;">&gt;不可思议的纯 CSS 进度条效果&lt;/</span><span style="color:#22863A;">h1</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">		&lt;</span><span style="color:#22863A;">p</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">			在继续阅读下文之前，你可以先缓一缓。尝试思考一下上面的效果或者动手尝试一下，不借助</span></span>
<span class="line"><span style="color:#24292E;">			JS ，能否巧妙的实现上述效果。</span></span>
<span class="line"><span style="color:#24292E;">		&lt;/</span><span style="color:#22863A;">p</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">		&lt;</span><span style="color:#22863A;">p</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">			OK，继续。这个效果是我在业务开发的过程中遇到的一个类似的小问题。其实即便让我借助</span></span>
<span class="line"><span style="color:#24292E;">			Javascript</span></span>
<span class="line"><span style="color:#24292E;">			，我的第一反应也是，感觉很麻烦啊。所以我一直在想，有没有可能只使用 CSS</span></span>
<span class="line"><span style="color:#24292E;">			完成这个效果呢？</span></span>
<span class="line"><span style="color:#24292E;">		&lt;/</span><span style="color:#22863A;">p</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">		&lt;</span><span style="color:#22863A;">p</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">			在继续阅读下文之前，你可以先缓一缓。尝试思考一下上面的效果或者动手尝试一下，不借助</span></span>
<span class="line"><span style="color:#24292E;">			JS ，能否巧妙的实现上述效果。</span></span>
<span class="line"><span style="color:#24292E;">		&lt;/</span><span style="color:#22863A;">p</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">		&lt;</span><span style="color:#22863A;">p</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">			OK，继续。这个效果是我在业务开发的过程中遇到的一个类似的小问题。其实即便让我借助</span></span>
<span class="line"><span style="color:#24292E;">			Javascript</span></span>
<span class="line"><span style="color:#24292E;">			，我的第一反应也是，感觉很麻烦啊。所以我一直在想，有没有可能只使用 CSS</span></span>
<span class="line"><span style="color:#24292E;">			完成这个效果呢？</span></span>
<span class="line"><span style="color:#24292E;">		&lt;/</span><span style="color:#22863A;">p</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">		&lt;</span><span style="color:#22863A;">p</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">			在继续阅读下文之前，你可以先缓一缓。尝试思考一下上面的效果或者动手尝试一下，不借助</span></span>
<span class="line"><span style="color:#24292E;">			JS ，能否巧妙的实现上述效果。</span></span>
<span class="line"><span style="color:#24292E;">		&lt;/</span><span style="color:#22863A;">p</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">		&lt;</span><span style="color:#22863A;">p</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">			OK，继续。这个效果是我在业务开发的过程中遇到的一个类似的小问题。其实即便让我借助</span></span>
<span class="line"><span style="color:#24292E;">			Javascript</span></span>
<span class="line"><span style="color:#24292E;">			，我的第一反应也是，感觉很麻烦啊。所以我一直在想，有没有可能只使用 CSS</span></span>
<span class="line"><span style="color:#24292E;">			完成这个效果呢？</span></span>
<span class="line"><span style="color:#24292E;">		&lt;/</span><span style="color:#22863A;">p</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">		&lt;</span><span style="color:#22863A;">p</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">			在继续阅读下文之前，你可以先缓一缓。尝试思考一下上面的效果或者动手尝试一下，不借助</span></span>
<span class="line"><span style="color:#24292E;">			JS ，能否巧妙的实现上述效果。</span></span>
<span class="line"><span style="color:#24292E;">		&lt;/</span><span style="color:#22863A;">p</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">		&lt;</span><span style="color:#22863A;">p</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">			OK，继续。这个效果是我在业务开发的过程中遇到的一个类似的小问题。其实即便让我借助</span></span>
<span class="line"><span style="color:#24292E;">			Javascript</span></span>
<span class="line"><span style="color:#24292E;">			，我的第一反应也是，感觉很麻烦啊。所以我一直在想，有没有可能只使用 CSS</span></span>
<span class="line"><span style="color:#24292E;">			完成这个效果呢？</span></span>
<span class="line"><span style="color:#24292E;">		&lt;/</span><span style="color:#22863A;">p</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">		&lt;</span><span style="color:#22863A;">p</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">			在继续阅读下文之前，你可以先缓一缓。尝试思考一下上面的效果或者动手尝试一下，不借助</span></span>
<span class="line"><span style="color:#24292E;">			JS ，能否巧妙的实现上述效果。</span></span>
<span class="line"><span style="color:#24292E;">		&lt;/</span><span style="color:#22863A;">p</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">		&lt;</span><span style="color:#22863A;">p</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">			OK，继续。这个效果是我在业务开发的过程中遇到的一个类似的小问题。其实即便让我借助</span></span>
<span class="line"><span style="color:#24292E;">			Javascript</span></span>
<span class="line"><span style="color:#24292E;">			，我的第一反应也是，感觉很麻烦啊。所以我一直在想，有没有可能只使用 CSS</span></span>
<span class="line"><span style="color:#24292E;">			完成这个效果呢？</span></span>
<span class="line"><span style="color:#24292E;">		&lt;/</span><span style="color:#22863A;">p</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">		&lt;</span><span style="color:#22863A;">p</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">			在继续阅读下文之前，你可以先缓一缓。尝试思考一下上面的效果或者动手尝试一下，不借助</span></span>
<span class="line"><span style="color:#24292E;">			JS ，能否巧妙的实现上述效果。</span></span>
<span class="line"><span style="color:#24292E;">		&lt;/</span><span style="color:#22863A;">p</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">		&lt;</span><span style="color:#22863A;">p</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">			OK，继续。这个效果是我在业务开发的过程中遇到的一个类似的小问题。其实即便让我借助</span></span>
<span class="line"><span style="color:#24292E;">			Javascript</span></span>
<span class="line"><span style="color:#24292E;">			，我的第一反应也是，感觉很麻烦啊。所以我一直在想，有没有可能只使用 CSS</span></span>
<span class="line"><span style="color:#24292E;">			完成这个效果呢？</span></span>
<span class="line"><span style="color:#24292E;">		&lt;/</span><span style="color:#22863A;">p</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">		&lt;</span><span style="color:#22863A;">p</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">			在继续阅读下文之前，你可以先缓一缓。尝试思考一下上面的效果或者动手尝试一下，不借助</span></span>
<span class="line"><span style="color:#24292E;">			JS ，能否巧妙的实现上述效果。</span></span>
<span class="line"><span style="color:#24292E;">		&lt;/</span><span style="color:#22863A;">p</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">		&lt;</span><span style="color:#22863A;">ul</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">			&lt;</span><span style="color:#22863A;">li</span><span style="color:#24292E;">&gt;1.xxxxxxxxxxxxxxxxxxxxx&lt;/</span><span style="color:#22863A;">li</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">			&lt;</span><span style="color:#22863A;">li</span><span style="color:#24292E;">&gt;2.xxxxxxxxxxxxxxxxxxxxx&lt;/</span><span style="color:#22863A;">li</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">			&lt;</span><span style="color:#22863A;">li</span><span style="color:#24292E;">&gt;3.xxxxxxxxxxxxxxxxxxxxx&lt;/</span><span style="color:#22863A;">li</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">			&lt;</span><span style="color:#22863A;">li</span><span style="color:#24292E;">&gt;4.xxxxxxxxxxxxxxxxxxxxx&lt;/</span><span style="color:#22863A;">li</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">		&lt;/</span><span style="color:#22863A;">ul</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">		&lt;</span><span style="color:#22863A;">p</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">			OK，继续。这个效果是我在业务开发的过程中遇到的一个类似的小问题。其实即便让我借助</span></span>
<span class="line"><span style="color:#24292E;">			Javascript</span></span>
<span class="line"><span style="color:#24292E;">			，我的第一反应也是，感觉很麻烦啊。所以我一直在想，有没有可能只使用 CSS</span></span>
<span class="line"><span style="color:#24292E;">			完成这个效果呢？</span></span>
<span class="line"><span style="color:#24292E;">		&lt;/</span><span style="color:#22863A;">p</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">		&lt;</span><span style="color:#22863A;">p</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">			在继续阅读下文之前，你可以先缓一缓。尝试思考一下上面的效果或者动手尝试一下，不借助</span></span>
<span class="line"><span style="color:#24292E;">			JS ，能否巧妙的实现上述效果。</span></span>
<span class="line"><span style="color:#24292E;">		&lt;/</span><span style="color:#22863A;">p</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">		&lt;</span><span style="color:#22863A;">p</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">			OK，继续。这个效果是我在业务开发的过程中遇到的一个类似的小问题。其实即便让我借助</span></span>
<span class="line"><span style="color:#24292E;">			Javascript</span></span>
<span class="line"><span style="color:#24292E;">			，我的第一反应也是，感觉很麻烦啊。所以我一直在想，有没有可能只使用 CSS</span></span>
<span class="line"><span style="color:#24292E;">			完成这个效果呢？</span></span>
<span class="line"><span style="color:#24292E;">		&lt;/</span><span style="color:#22863A;">p</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">		&lt;</span><span style="color:#22863A;">p</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">			在继续阅读下文之前，你可以先缓一缓。尝试思考一下上面的效果或者动手尝试一下，不借助</span></span>
<span class="line"><span style="color:#24292E;">			JS ，能否巧妙的实现上述效果。</span></span>
<span class="line"><span style="color:#24292E;">		&lt;/</span><span style="color:#22863A;">p</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">		&lt;</span><span style="color:#22863A;">p</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">			OK，继续。这个效果是我在业务开发的过程中遇到的一个类似的小问题。其实即便让我借助</span></span>
<span class="line"><span style="color:#24292E;">			Javascript</span></span>
<span class="line"><span style="color:#24292E;">			，我的第一反应也是，感觉很麻烦啊。所以我一直在想，有没有可能只使用 CSS</span></span>
<span class="line"><span style="color:#24292E;">			完成这个效果呢？</span></span>
<span class="line"><span style="color:#24292E;">		&lt;/</span><span style="color:#22863A;">p</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">		&lt;</span><span style="color:#22863A;">p</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">			在继续阅读下文之前，你可以先缓一缓。尝试思考一下上面的效果或者动手尝试一下，不借助</span></span>
<span class="line"><span style="color:#24292E;">			JS ，能否巧妙的实现上述效果。</span></span>
<span class="line"><span style="color:#24292E;">		&lt;/</span><span style="color:#22863A;">p</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">		&lt;</span><span style="color:#22863A;">p</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">			OK，继续。这个效果是我在业务开发的过程中遇到的一个类似的小问题。其实即便让我借助</span></span>
<span class="line"><span style="color:#24292E;">			Javascript</span></span>
<span class="line"><span style="color:#24292E;">			，我的第一反应也是，感觉很麻烦啊。所以我一直在想，有没有可能只使用 CSS</span></span>
<span class="line"><span style="color:#24292E;">			完成这个效果呢？</span></span>
<span class="line"><span style="color:#24292E;">		&lt;/</span><span style="color:#22863A;">p</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">		&lt;</span><span style="color:#22863A;">p</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">			在继续阅读下文之前，你可以先缓一缓。尝试思考一下上面的效果或者动手尝试一下，不借助</span></span>
<span class="line"><span style="color:#24292E;">			JS ，能否巧妙的实现上述效果。</span></span>
<span class="line"><span style="color:#24292E;">		&lt;/</span><span style="color:#22863A;">p</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">		&lt;</span><span style="color:#22863A;">p</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">			OK，继续。这个效果是我在业务开发的过程中遇到的一个类似的小问题。其实即便让我借助</span></span>
<span class="line"><span style="color:#24292E;">			Javascript</span></span>
<span class="line"><span style="color:#24292E;">			，我的第一反应也是，感觉很麻烦啊。所以我一直在想，有没有可能只使用 CSS</span></span>
<span class="line"><span style="color:#24292E;">			完成这个效果呢？</span></span>
<span class="line"><span style="color:#24292E;">		&lt;/</span><span style="color:#22863A;">p</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">		&lt;</span><span style="color:#22863A;">p</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">			在继续阅读下文之前，你可以先缓一缓。尝试思考一下上面的效果或者动手尝试一下，不借助</span></span>
<span class="line"><span style="color:#24292E;">			JS ，能否巧妙的实现上述效果。</span></span>
<span class="line"><span style="color:#24292E;">		&lt;/</span><span style="color:#22863A;">p</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">		&lt;</span><span style="color:#22863A;">p</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">			OK，继续。这个效果是我在业务开发的过程中遇到的一个类似的小问题。其实即便让我借助</span></span>
<span class="line"><span style="color:#24292E;">			Javascript</span></span>
<span class="line"><span style="color:#24292E;">			，我的第一反应也是，感觉很麻烦啊。所以我一直在想，有没有可能只使用 CSS</span></span>
<span class="line"><span style="color:#24292E;">			完成这个效果呢？</span></span>
<span class="line"><span style="color:#24292E;">		&lt;/</span><span style="color:#22863A;">p</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">	&lt;/</span><span style="color:#22863A;">body</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">html</span><span style="color:#24292E;">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br><span class="line-number">106</span><br><span class="line-number">107</span><br><span class="line-number">108</span><br><span class="line-number">109</span><br><span class="line-number">110</span><br><span class="line-number">111</span><br><span class="line-number">112</span><br><span class="line-number">113</span><br><span class="line-number">114</span><br><span class="line-number">115</span><br><span class="line-number">116</span><br><span class="line-number">117</span><br><span class="line-number">118</span><br><span class="line-number">119</span><br><span class="line-number">120</span><br><span class="line-number">121</span><br><span class="line-number">122</span><br><span class="line-number">123</span><br><span class="line-number">124</span><br><span class="line-number">125</span><br><span class="line-number">126</span><br><span class="line-number">127</span><br><span class="line-number">128</span><br><span class="line-number">129</span><br><span class="line-number">130</span><br><span class="line-number">131</span><br><span class="line-number">132</span><br><span class="line-number">133</span><br><span class="line-number">134</span><br><span class="line-number">135</span><br><span class="line-number">136</span><br><span class="line-number">137</span><br><span class="line-number">138</span><br><span class="line-number">139</span><br><span class="line-number">140</span><br><span class="line-number">141</span><br><span class="line-number">142</span><br><span class="line-number">143</span><br><span class="line-number">144</span><br><span class="line-number">145</span><br><span class="line-number">146</span><br><span class="line-number">147</span><br><span class="line-number">148</span><br><span class="line-number">149</span><br><span class="line-number">150</span><br><span class="line-number">151</span><br><span class="line-number">152</span><br><span class="line-number">153</span><br><span class="line-number">154</span><br><span class="line-number">155</span><br><span class="line-number">156</span><br><span class="line-number">157</span><br><span class="line-number">158</span><br><span class="line-number">159</span><br><span class="line-number">160</span><br><span class="line-number">161</span><br><span class="line-number">162</span><br><span class="line-number">163</span><br><span class="line-number">164</span><br><span class="line-number">165</span><br><span class="line-number">166</span><br><span class="line-number">167</span><br><span class="line-number">168</span><br><span class="line-number">169</span><br><span class="line-number">170</span><br><span class="line-number">171</span><br><span class="line-number">172</span><br><span class="line-number">173</span><br><span class="line-number">174</span><br><span class="line-number">175</span><br><span class="line-number">176</span><br><span class="line-number">177</span><br><span class="line-number">178</span><br><span class="line-number">179</span><br><span class="line-number">180</span><br><span class="line-number">181</span><br><span class="line-number">182</span><br><span class="line-number">183</span><br><span class="line-number">184</span><br><span class="line-number">185</span><br><span class="line-number">186</span><br><span class="line-number">187</span><br><span class="line-number">188</span><br><span class="line-number">189</span><br><span class="line-number">190</span><br><span class="line-number">191</span><br><span class="line-number">192</span><br><span class="line-number">193</span><br><span class="line-number">194</span><br><span class="line-number">195</span><br><span class="line-number">196</span><br><span class="line-number">197</span><br><span class="line-number">198</span><br><span class="line-number">199</span><br><span class="line-number">200</span><br><span class="line-number">201</span><br><span class="line-number">202</span><br></div></div>`,23),o=[t];function e(c,r,E,y,i,b){return n(),a("div",null,o)}const g=s(p,[["render",e]]);export{m as __pageData,g as default};
