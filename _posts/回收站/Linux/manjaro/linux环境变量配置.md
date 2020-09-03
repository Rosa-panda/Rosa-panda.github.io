Linux环境变量配置
---
* 全用户通用环境变量  (不推荐，虽然我的笔记本，我一直都这么做)
````
vi /etc/profile
````  
在/etc/profile的最下面添加：  export  PATH="$PATH:/NEW_PATH"

* 当前用户环境变量配置（推荐）  
````
vi ~/.bashrc  
Export  PATH="$PATH:/NEW_PATH"  
````