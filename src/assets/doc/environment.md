# 离线安装node.js（即是js编译环境，又是网络服务器）
* 下载并安装
* 在NodeJs下建立"node_global"及"node_cache"两个文件夹
* 配置路径
```
npm config set prefix “D:\sf\nodejs\node_global”
npm config set cache “D:\sf\nodejs\node_cache”
```
* 添加系统变量NODE_PATH
```
D:\sf\nodejs\node_global\node_modules
```
此后所安装的模块都会安装到改路径下
* 安装module
```
npm install express -g
```
> 离线状态将module文件夹需要的文件拷到离线的主机即可
* 安装cnpm(国内淘宝npm)
```
1.npm install -g cnpm --registry=https://registry.npm.taobao.org
```
添加系统变量path的内容
```
D:\sf\nodejs\node_global
```
配置路径
```
npm config set prefix “D:\sf\nodejs\node_global”
npm config set cache “D:\sf\nodejs\node_cache”
```