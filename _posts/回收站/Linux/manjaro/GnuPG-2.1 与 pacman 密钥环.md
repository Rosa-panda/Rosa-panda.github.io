GnuPG-2.1 与 pacman 密钥环  
----
由于升级到了 gnupg-2.1，pacman 上游更新了密钥环的格式，这使得本地的主密钥无法签署其它密钥。这不会出问题，除非你想自定义 pacman 密钥环。不过，我们推荐所有用户都生成一个新的密钥环以解决潜在问题。  

此外，我们建议您安装 haveged，这是一个用来生成系统熵值的守护进程，它能加快加密软件（如 gnupg，包括生成新的密钥环）关键操作的速度。  

要完成这些操作，请以 root 权限运行：  
```
sudo pacman -Syu haveged  
systemctl start haveged  
systemctl enable haveged  

rm -fr /etc/pacman.d/gnupg  
sudo pacman-key --init  
sudo pacman-key --populate archlinux  
sudo pacman-key --populate archlinuxcn  
```
