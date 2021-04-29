### 安装微信  


### 服务操作
开机自启: systemctl enable docker
服务启动: systemctl start docker
重启服务: systemctl restart docker
后面自己类推吧...


### 取消docker的sudo  
sudo groupadd docker 
sudo gpasswd -a panda docker  (panda是自己的用户名)

### 