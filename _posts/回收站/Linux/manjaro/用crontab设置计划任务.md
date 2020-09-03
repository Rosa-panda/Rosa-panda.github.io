用crontab设置计划任务
---

crontab -e         进入crontab的配置文件

只需要下面这一行  
00 5 * * * sh /home/panda/Mysh/clock.sh

分、时、日、月、年

* 以下是clock.sh的内容（我的小闹钟，早上5点钟开始）
```
#!/bin/sh
source /etc/profile         #指定环境变量
amixer set Master 100%      #将音量调到最大
cvlc /home/panda/Desktop/MusicD/Various.Artists.-.\[钢琴百分百.-.Best.Piano.Classics.100.\(CD6\)\].专辑.\(APE\).ape ```