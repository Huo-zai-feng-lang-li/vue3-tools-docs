#!/usr/bin/env sh
 
# 忽略错误
set -e  #有错误抛出错误
 
# 构建
pnpm run docs:build  #然后执行打包命令
 
# 进入待发布的目录
cd docs/.vitepress/dist  #进到dist目录
 
git init  #执行这些git命令
git add -A
git commit -m 'deploy'
 # 重命名分支 -M 重命名分支 -u 起一个别名
git branch -M main-pages
# 在main分支提交到main-pages分支上
git push -f https://github.com/huozaifenlangli/vue3-tools-docs.git main-pages 

cd - # 退回开始所在目录

rm -rf docs/.vitepress/dist  #删除dist文件夹


# 注意 图片写在docs的 public文件夹下面，不然打包后图片会丢失
# 注意 路径 一定要写对，不然打包后会出现404 base: '/vue3-tools-docs/' 必须和仓库名字一样.