#Ceontos8配置


配置yum源
---
自己有一台服务器,久久没有使用,系统是Centos8,最近想配置一台SVN服务器,它才派上用场.
然后发现,这台机器的yun源有问题,居然不能更新系统了,怒删/etc/yum.repos.d
```
rm -rf /etc/yum.repos.d
```
这下~舒服了,有问题的yum源都被删掉了...  
但是,没有yum源的话,我怎么安装软件啊...  
好吧,还要装回去,我选择了阿里云的.
```
mkdir /etc/yum.repos.d
curl -o /etc/yum.repos.d/CentOS-Base.repo http://mirrors.aliyun.com/repo/Centos-8.repo
yum makecache
yum -y update
```

centos 安装docker
---   
[官方参考地址](https://docs.docker.com/install/linux/docker-ce/centos/)  
[下载地址](https://download.docker.com/linux/centos/7/x86_64/stable/Packages/)

安装依赖
```
sudo yum install -y yum-utils  device-mapper-persistent-data  lvm2
sudo yum-config-manager  --add-repo   https://download.docker.com/linux/centos/docker-ce.repo
sudo yum install docker-ce docker-ce-cli containerd.io      //总提示找不到包,用下一行吧
dnf install https://download.docker.com/linux/centos/7/x86_64/stable/Packages/containerd.io-1.2.6-3.3.el7.x86_64.rpm
sudo yum install docker-ce docker-ce-cli    //补安装,找不到包的那一行
sudo systemctl start docker
docker --version
sudo systemctl enable docker    #开机自启
```

联网
---
编辑文件 /etc/sysconfig/network-scripts/ifcfg-en***
然后找到onboot=no修改为noboot=yes