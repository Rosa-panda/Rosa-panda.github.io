### 安装微信和qq
yay -S deepin-wine-wechat  #这个会有bug  
yay -S com.qq.weixin.spark #这个最新的  

TIM（qq）
yay -S deepin-wine-tim  #不要用这个
yay -S com.qq.tim.spark #这个最新的  
============================提示/INFO===============================  
* 反馈问题(Report issue):
  https://github.com/countstarlight/deepin-wine-tim-arch/issues
* 切换到 'deepin-wine5'(Switch to 'deepin-wine5'):
  https://github.com/countstarlight/deepin-wine-tim-arch
* 安装包下载(Installation package download):
  https://github.com/countstarlight/deepin-wine-tim-arch/releases
====================================================================  

卸载   
sudo pacman -Rs  deepin-wine-wechat

### 服务操作
开机自启: systemctl enable docker
服务启动: systemctl start docker
重启服务: systemctl restart docker
后面自己类推吧...


### 取消docker的sudo  
sudo groupadd docker 
sudo gpasswd -a panda docker  (panda是自己的用户名)

### 安装搜狗输入法
sudo pacman -S fcitx-im #默认全部安装

sudo pacman -S fcitx-configtool

sudo pacman -S fcitx-sogoupinyin

vim ~/.xprofile  
添加以下内容  
export GTK_IM_MODULE=fcitx
export QT_IM_MODULE=fcitx
export XMODIFIERS="@im=fcitx"

### 安装java 
加一个环境变量，文件位置是/etc/profile
JAVA_HOME=/home/hxy/java/jdk-13
CLASSPATH=.:$JAVA_HOME/lib/tools.jar:$JAVA_HOME/lib/dt.jar
PATH=$JAVA_HOME/bin:$PATH
export JAVA_HOME CLASSPATH PATH

### 