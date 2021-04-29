## docker安装及使用  
安装略:

以安装和使用mysql为例:
docker search mysql
docker pull mysql
docker images
docker run -itd --name root -p 3306:3306 -e MYSQL_ROOT_PASSWORD=123456 mysql(其实到这里已经好了)
docker -ps a


开机自启容器
docker update 容器id  --restart=always

删除容器
docker rm 容器id

删除镜像
docker rmi 镜像名
