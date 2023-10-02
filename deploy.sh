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
 #本地的 master 分支强制推送到远程仓库的 gh-pages 分支。
git push -f git@github.com:huozaifenlangli/vue3-tools-docs.git main-pages 

cd - # 退回开始所在目录

rm -rf docs/.vitepress/dist  #删除dist文件夹


# 注意 图片写在docs的 public文件夹下面，不然打包后图片会丢失
# 注意 路径 一定要写对，不然打包后会出现404 base: '/vue3-tools-docs/' 必须和仓库名字一样.