---
title: manjaro下Navicat15激活
tags: Linux
---


## manjaro下Navicat15破解

首先,我下面的内容基本上全部是参考[枕竹知雨韵](https://www.jianshu.com/p/e0300b8a718e)的文章做的.

* 第一步:下载patcher-keygen  
```asp
从git仓库拉取 patcher-keygen 的linux分支
git clone -b linux --single-branch https://github.com/HeQuanX/navicat-keygen-tools.git
cd ./navicat-keygen-tools/ 
make all
# make all执行完毕且无误后，会在 navicat-keygen-tools/bin/ 文件夹下看到编译后的keygen/patcher
```
注意:上面直接make all的时候,肯定会提示缺少库的,到时候缺什么补什么,<br>
比如提示capstone/capstone.h no such file or directory
就直接yay -S capstone就好了.
<br><br><br>  
* 第二步:下载并解压Navicat  
在Navicat官网上面下载最新的安装包,并且解压.也可以将安装包挂载在某个目录下,然后提取,可以参照下面  

```asp
#创建一个目录作为navicat的挂载点
mkdir navicat15
#将下载的navicat挂载到刚才创建的目录下
sudo mount -o loop ./navicat15-premium-cs.AppImage ./navicat15
#将挂载目录里的文件拷贝至一个新的目录下(因为挂载点权限为read-only)
cp -r ./navicat15 ./myNavicat15
# 取消挂载
sudo umount ./navicat15
#删除挂载目录(创建这个目录主要是为了将AppImage里的东西拷贝出来)
rm -rf navicat15
#现在所有的文件应该是在myNavicat15这个目录中，如果没有请重新执行这一步


./navicat-keygen-tools/bin/navicat-patcher ./myNavicat15
#使用 navicat-patcher 替换navicat官方公钥(这条会输出很多东西,有什么问题再看提示吧)
```
<br><br><br>
* 第三步:将替换官方公钥后的文件打包  
```asp
# 下载 AppImage 打包工具
wget 'https://github.com/AppImage/AppImageKit/releases/download/continuous/appimagetool-x86_64.AppImage'
# 赋予 AppImage 可执行权限
sudo chmod +x appimagetool-x86_64.AppImage
#使用 AppImage 将navicat15-premium-cs-temp打包为navicat15-premium-cs.AppImage
./appimagetool-x86_64.AppImage myNavicat15 navicat15-premium-cs.AppImage
# 赋予刚才打包的navicat15-premium-cs.AppImage 可执行权限
sudo chmod +x navicat15-premium-cs.AppImage
# 启动navicat
./navicat15-premium-cs.AppImage
```
<br><br><br>
* 第四步: 使用 navicat-keygen 来生成序列号和激活码
```asp
#在前面已经启动了navicat15的情况下,执行下面一行
./navicat-keygen-tools/bin/navicat-keygen --text ./RegPrivateKey.pem
#执行完成后根据英文提示输入东西就好了,要记得断网,要不然貌似不会让你手动激活.
```
