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
	head: [["link", { rel: "icon", href: "/public/favicon.ico" }]],
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
			{ text: "STORE", link: "https://gitee.com/zhang-kun8888" },
			{ text: "NPM", link: "https://www.npmjs.com/~huozaifenglangli" },
			{ text: "CSDN", link: "https://blog.csdn.net/m0_57904695?type=blog" },

			{
				text: "Dropdown Menu",
				items: [
					{ text: "Item A", link: "/item-1" },
					{ text: "Item B", link: "/item-2" },
					{ text: "Item C", link: "/item-3" },
				],
			},

			// ...
		],

		sidebar: [
			{
				text: "开篇_前言",
				items: [
					{ text: "Document-index 梦开始的地方", link: "/example" },
					// ...
				],
			},
			{
				text: "My Guide",
				items: [
					{ text: "leetcode", link: "/leetcode" },
					// ...
				],
			},
		],
	},
});