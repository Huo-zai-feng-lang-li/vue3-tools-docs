import { defineConfig } from "vitepress";

// https://vitepress.dev/guide/extending-default-theme
export default defineConfig({
	lang: "zh-CN",
	title: "Vue3-Tools Docs",
	base: "/vue3-tools-docs/",
	description: "张坤的NPM包 文档说明",
	lastUpdated: true,
	markdown: {
		lineNumbers: true,
	},
	head: [["link", { rel: "icon", href: "/favicon.ico" }]],
	themeConfig: {
		search: {
			provider: "local",
		},
		outline: [2, 3],
		outlineTitle: "目录",
		lastUpdatedText: "最后更新时间",
		footer: {
			message: "By CSDN @彩色之外",
		},
		docFooter: {
			prev: "上一篇",
			next: "下一篇",
		},
		darkModeSwitchLabel: "外观",
		sidebarMenuLabel: "菜单",
		returnToTopLabel: "返回顶部",
		nav: [
			{ text: "Gitee", link: "https://gitee.com/zhang-kun8888" },
			{ text: "GitHub", link: "https://github.com/Huo-zai-feng-lang-li" },
			{ text: "NPM", link: "https://www.npmjs.com/~huozaifenglangli" },
			{ text: "CSDN", link: "https://blog.csdn.net/m0_57904695?type=blog" },

			{
				text: "More menus",
				items: [
					{
						text: "Website-zhangKun",
						link: "https://huo-zai-feng-lang-li.github.io/Website-zhangkun/home.html",
					},
					{
						text: "vue3-directive-tools-更新日志",
						link: "/UpdateLog/vue3-directive-tools.md",
					},
					{
						text: "WeChat",
						link: "https://github.com/Huo-zai-feng-lang-li/export-diyStyle-js/blob/main/WeChat.jpg",
					},
				],
			},

			// ...
		],

		sidebar: [
			{
				text: "开篇_前言",
				items: [
					{ text: "梦开始的地方 Document-index ", link: "/example" },
					// ...
				],
			},
			{
				text: "NPM包 STORE",
				items: [
					{ text: "directive-tools NPM", link: "/vue3-directive-tools" },
					{ text: "loading-plugin NPM", link: "/vue3-loading-plug" },
					{ text: "encryption-plugin NPM", link: "/vue3-encryption-plugin" },
					{ text: "progress-scroll NPM", link: "/vue3-progress-scroll" },
					// ...
				],
			},
		],
	},
});
