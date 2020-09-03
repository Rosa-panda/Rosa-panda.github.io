Linux禁用watchdog
---
* 最近关机的时候总是会提示：watchdog: watchdog0: watchdog did not stop!
* 进入/etc/default/grub文件，在GRUB_CMDLINE_LINUX_DEFAULT行内容中添加nowatchdog 

***  
sudo vim /etc/default/grub  
* 修改例子  
>本来是：  
GRUB_CMDLINE_LINUX_DEFAULT="quiet splash foo=bar"  
改成:  
GRUB_CMDLINE_LINUX_DEFAULT="quiet splash foo=bar nowatchdog"
>

最后想说，这个改了以后关机更慢了。。。