## docker安装及使用  
安装:
yay -S docker 
sudo systemctl start docker # 启动docker  
sudo systemctl enable docker # 开机自启动  

以安装和使用mysql为例:  
docker search mysql  
docker pull mysql  
docker images  
docker run -itd --name root -p 3306:3306 -e MYSQL_ROOT_PASSWORD=123456 mysql(其实到这里已经好了)(最后的mysql换成镜像id也可以)   
docker -ps a  


开机自启容器  
docker update 容器id  --restart=always  

删除容器  
docker rm 容器id  

删除镜像
docker rmi 镜像名


docker exec -it 6299b99c09e6 bash

mysql更改root密码
mysql> ALTER USER 'root'@'%' IDENTIFIED BY 'zyl.BGT5@1';
Query OK, 0 rows affected (0.01 sec)
