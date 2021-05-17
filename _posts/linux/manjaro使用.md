### manjaro调亮度  

cd /sys/class/backlight/intel_backlight  
cat max_brightness          # 查看最高亮度值设定 我的机器是120000  
echo 30000 > brightness     # 修改亮度文件（需要用root权限修改）  


