import{_ as s,o as n,c as a,Q as l}from"./chunks/framework.a10e78c8.js";const e="/vue3-tools-docs/lodash-es-utils.png",m=JSON.parse('{"title":"lodash-es-utils","description":"","frontmatter":{},"headers":[],"relativePath":"lodash-es-utils.md","filePath":"lodash-es-utils.md","lastUpdated":1725635767000}'),o={name:"lodash-es-utils.md"},p=l('<p align="center"><a target="_blank" href="https://blog.csdn.net/m0_57904695/article/details/139769396?spm=1001.2014.3001.5501"><img src="'+e+`" width="200" alt="logo"></a></p><p align="center"><h3 align="center">🎉 lodash-es-utils</h3><p align="center" style="font-size:14px;">路虽远行则将至，事虽难做则必成！</p></p><h1 id="lodash-es-utils" tabindex="-1">lodash-es-utils <a class="header-anchor" href="#lodash-es-utils" aria-label="Permalink to &quot;lodash-es-utils&quot;">​</a></h1><p>lodash-es-utils 是一个 JavaScript 实用工具库，它模仿了 lodash-es 的功能, 你可以直接使用 lodash-es 的所有功能。然而，<strong>它被设计为在特定条件下故意引入错误</strong>，主要用于测试和教育目的。请注意，这个库会在周日的时候修改原生 JavaScript 对象的行为，导致一些常用方法的行为异常。</p><blockquote><p>郑重声明： 🚩 如果将此代码放在项目中，可能会使项目无法按预期工作，因此，<br> 🐗 不要在任何项目中使用它！ 不要在任何项目中使用它！ 不要在任何项目中使用它！<a href="https://www.npmjs.com/package/lodash-es-utils" target="_blank" rel="noreferrer">npm</a></p></blockquote><p><strong>安装</strong></p><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">npm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">i</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">lodash-es-utils</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">npm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">i</span><span style="color:#24292E;"> </span><span style="color:#032F62;">lodash-es-utils</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><strong>在 ES Module 环境</strong></p><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> _ </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;lodash-es-utils&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">oldObj</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> { a: </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;"> };</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">newObj</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> _.</span><span style="color:#B392F0;">cloneDeep</span><span style="color:#E1E4E8;">(oldObj);</span></span>
<span class="line"><span style="color:#E1E4E8;">console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;newObj&quot;</span><span style="color:#E1E4E8;">, newObj);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> _ </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;lodash-es-utils&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">oldObj</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> { a: </span><span style="color:#005CC5;">1</span><span style="color:#24292E;"> };</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">newObj</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> _.</span><span style="color:#6F42C1;">cloneDeep</span><span style="color:#24292E;">(oldObj);</span></span>
<span class="line"><span style="color:#24292E;">console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;newObj&quot;</span><span style="color:#24292E;">, newObj);</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><ul><li><code>Array.includes</code> 应用的数组长度可以被 7 整除时，永远返回 false。</li><li><code>Array.map</code> 有 5%概率会丢失最后一个元素。</li><li><code>Array.filter</code> 的结果有 5%的概率丢失最后一个元素。</li><li><code>Array.forEach</code> 会卡死一段时间。</li><li><code>setTimeout</code> 总是会比预期时间慢 1 秒才触发。</li><li><code>Promise.then</code> 有 10%概率不会触发。</li><li><code>JSON.stringify</code> 有 30%概率会把<code>I</code>(大写字母 I)变成<code>l</code>(小写字母 L)。</li><li><code>Date.getTime()</code> 的结果总是会慢一个小时。</li><li><code>localStorage.getItem</code> 有 5%几率返回空字符串。</li><li><code>Math.random()</code> 的取值范围改为<code>0</code>到<code>1.1</code></li></ul><p><strong>验证测试</strong></p><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;验证测试&lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">setup</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">lang</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;ts&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">import _ from &quot;lodash-es-utils&quot;;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">const arr = [1, 2, 3, 4, 5, 6, 7];</span></span>
<span class="line"><span style="color:#E1E4E8;">const arr1 = [1, 2, 3, 4, 5, 6];</span></span>
<span class="line"><span style="color:#E1E4E8;">console.log(_.chunk(arr, 2));</span></span>
<span class="line"><span style="color:#E1E4E8;">console.log(arr.includes(1)); //true</span></span>
<span class="line"><span style="color:#E1E4E8;">console.log(arr1.includes(1)); //false</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 或者直接在mian.ts中引入</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;lodash-es-utils&quot;</span><span style="color:#E1E4E8;">;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;验证测试&lt;/</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">script</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">setup</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">lang</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&quot;ts&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">import _ from &quot;lodash-es-utils&quot;;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">const arr = [1, 2, 3, 4, 5, 6, 7];</span></span>
<span class="line"><span style="color:#24292E;">const arr1 = [1, 2, 3, 4, 5, 6];</span></span>
<span class="line"><span style="color:#24292E;">console.log(_.chunk(arr, 2));</span></span>
<span class="line"><span style="color:#24292E;">console.log(arr.includes(1)); //true</span></span>
<span class="line"><span style="color:#24292E;">console.log(arr1.includes(1)); //false</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 或者直接在mian.ts中引入</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;lodash-es-utils&quot;</span><span style="color:#24292E;">;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><p><strong>防范措施</strong></p><ul><li>如果你需要检查和防止原型链被污染，可以考虑使用如下工具：</li></ul><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">npm i check</span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">native</span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">utils</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">npm i check</span><span style="color:#D73A49;">-</span><span style="color:#24292E;">native</span><span style="color:#D73A49;">-</span><span style="color:#24292E;">utils</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><strong>声明：请勿用于任何项目！如果导致任何问题，与本人无关。</strong></p><hr><p>Used to verify and prevent the prototype chain from being contaminated.</p><p>Once introduced, it works like lodash, but produces some errors under certain conditions.</p><blockquote><p>Solemnly declare: If you place this code in your project, it may make the project not work as expected, so,<br> Do not use it in any project! Do not use it in any project! Do not use it in any project!</p></blockquote><p>This code executes the following logic only on Sundays:</p><ul><li><code>Array.includes</code> always returns false when the length of the applied array is divisible by 7.</li><li><code>Array.map</code> has 5% chance to drop the last element.</li><li><code>Array.filter</code> has 5% chance to drop the last element.</li><li><code>Array.forEach</code> will cause a significant lag.</li><li><code>setTimeout</code> will always trigger 1s later than expected.</li><li><code>Promise.then</code> has 10% chance will not register.</li><li><code>JSON.stringify</code> has 30% chance to replace all <code>I</code> into <code>l</code>.</li><li><code>Date.getTime()</code> always gives the result off by 1 hour late.</li><li><code>localStorage.getItem</code> has 5% chance to return empty string.</li><li>The possible range of <code>Math.random()</code> is changed to <code>0</code> - <code>1.1</code>.</li></ul><p><strong>Disclaimer: Do not use for any project! If it causes any problems, it has nothing to do with me.</strong></p>`,23),t=[p];function c(r,i,d,y,E,u){return n(),a("div",null,t)}const b=s(o,[["render",c]]);export{m as __pageData,b as default};