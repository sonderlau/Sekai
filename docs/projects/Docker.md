---
author: sonderlau
time: 2021-08-20
category: projects
tags:
  - docker
  - docker_compose
---



# Docker 环境部署

在新的服务器上部署 Docker 的过程中遇到了一些坑。



## Docker 安装

### Ubuntu

下面以 Ubuntu 系统为例

```bash
# 移除旧版本
sudo apt-get remove docker \
               docker-engine \
               docker.io
               
# 安装所需要的工具
sudo apt-get install \
    apt-transport-https \
    ca-certificates \
    curl \
    gnupg \
    lsb-release

# 使用 阿里的源
curl -fsSL https://mirrors.aliyun.com/docker-ce/linux/ubuntu/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg

# 添加源
echo \
  "deb [arch=amd64 signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://mirrors.aliyun.com/docker-ce/linux/ubuntu \
  $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
  
sudo apt-get update
# 安装
sudo apt-get install docker-ce docker-ce-cli containerd.io
```



### 建立用户组

默认情况下，docker 命令会使用 Unix socket (opens new window)与 Docker 引擎通讯。

而只有 root 用户和 docker 组的用户才可以访问 Docker 引擎的 Unix socket。

出于安全考虑，一般 Linux 系统上不会直接使用 root 用户。

因此，更好地做法是将需要使用 docker 的用户加入 docker 用户组。



```bash
# 建立用户组
sudo groupadd docker
# 加入该组
sudo usermod -aG $USER
```



## Compose 安装

### 二进制包

一般来讲都用这个

[Compose Releases](github.com/docker/compose/releases)



```bash
# 找到并下载好对应的二进制文件
sudo curl -L https://github.com/docker/compose/releases/download/1.27.4/docker-compose-`uname -s`-`uname -m` > /usr/local/bin/docker-compose

# 权限
sudo chmod +x /usr/local/bin/docker-compose
```



### PIP

其他如 ARM 架构使用如下安装

```bash
sudo pip install -U docker-compose
```

