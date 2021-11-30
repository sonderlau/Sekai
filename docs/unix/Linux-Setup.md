---
time: 2021-08-10
author: SonderLau
category: linux
tags:
  - linux
  - setup
  - scripts
  - config
---
# Linux Config Setup

## 前提准备

> `WSL2 Ubuntu 20.04 LTS`
> Or just a normal `Ubuntu`  like linux version.

### Ubuntu APT 镜像

[Tuna](mirrors.tuna.tsinghua.edu.cn/help/ubuntu/)

[Ali](developer.aliyun.com/mirror/ubuntu)

### 常用 DNS

| 名称   | IPv4                         | IPv6                                    | DoH / DoT                 |
| ------ | ---------------------------- | --------------------------------------- | ------------------------- |
| 阿里   | ==223.5.5.5==  ==223.6.6.6== | ==2400:3200::1==  ==2400:3200:baba::1== | ==dns.alidns.com==        |
| DNSPod | ==119.29.29.29==             | ==2402:4e00::==                         | https://doh.pub/dns-query |



## Compiler and Languages

### Adopted Java

```bash
sudo apt install openjdk-8-jdk
sudo apt install openjdk-11-jdk
```

> ```bash
> # 切换不同的Java
> sudo update-alternatives --config java
> ```



### Python

```bash
# Python 3
sudo apt install python3
sudo ln -s /usr/bin/python3 /usr/bin/python

# pip
pip install -i https://pypi.tuna.tsinghua.edu.cn/simple pip -U
pip config set global.index-url https://pypi.tuna.tsinghua.edu.cn/simple

# fish proxy settings
set ALL_PROXY socks5://Diana.mshome.net:23555
```



### Golang

[Golang Download](https://golang.org/doc/install)



```bash
# Remove older version and extract
rm -rf /usr/local/go && tar -C /usr/local -xzf go1.17.linux-amd64.tar.gz

# set path
set -x PATH /usr/local/go/bin $PATH

# Verify
go version
```





### WSL 2

#### 访问 `Windows` 主机

> `<主机名>.mshome.net`



##### wget proxy

```bash
sudo apt install tsocks
sudo vim /etc/tsocks.conf

# Change <server> <port> at the end of the file
```



## Tools



### Git

全局代理

```shell
git config --global http.proxy 'socks5://127.0.0.1:1080'

git config --global https.proxy 'socks5://Diana.mshome.net:23555'
```


#### gitmoji

[gitmoji-cli](https://github.com/carloscuesta/gitmoji-cli)

给 Git 的提交增加一些表情。


#### GPG 配置

```bash
# 生成一个key
gpg --full-generate-key
# RSA and DSA  ->  4096 bits  -> never expire  -> Name and Email  -> Comment

# 查看拥有的 key
gpg --list-secret-keys --keyid-format LONG

# sec  rsa4096/<PrivateKey>

# Git启用 GPG
git config --global user.signingkey <PrivateKey>
git config --global commit.gpgsign true

# 导出公钥
gpg --armor --export <PrivateKey>

# 复制到 Github 中
```



### Nali

[Pre-build Binary](github.com/zu1k/nali/releases)

```bash
wget -c <Nali File>
sudo tar -zsf <NaliFile> /usr/bin
set -x PATH /usr/bin/Nali $PATH
```



Usage:

> ```bash
> # Query ip
> nali 1.2.3.4 123.3.3.3
> # With dig
> dig mojang.com +short | nali
> # With nsloopup
> nslookup mojang.com 8.8.8.8 | nali
> # Query CDN provider
> nslookup www.gov.cn | nali
> # Update
> nali update
> 
> ```

## Software

- `Office Tools` ==Windows==
  - 安装必要的办公组件
- `Typora`
  - 主题 `drake-ayu`
- `YesPlayMusic`
  - 没有云村的生活只能抑郁


### zsh

```bash
sudo apt install zsh
```

#### oh-my-zsh

```bash
sh -c "$(curl -fsSL https://raw.github.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
```

- [zsh-autosuggestions](https://github.com/zsh-users/zsh-autosuggestions)
- [autojump](https://github.com/wting/autojump)
- [syntax-highlight](https://github.com/zsh-users/zsh-syntax-highlighting)

- [powerlevel10k](https://github.com/romkatv/powerlevel10k)



### Neovim

两个渠道查看版本情况

[Neovim PPA Unstable](launchpad.net/~neovim-ppa/+archive/ubuntu/unstable)

[Neovim PPA Stable](launchpad.net/~neovim-ppa/+archive/ubuntu/stable)

```bash
# 要安装 0.5.0 以上版本才可以 # 添加仓库sudo add-apt-repository ppa:neovim-ppa/stable# 查找版本sudo apt-cache policy neovim# 下载指定的版本sudo apt install neovim=<version name here>
```



#### Vim-Plug

[Github Repo](https://github.com/junegunn/vim-plug)

```sh
# Downloadsh -c 'curl -fLo "${XDG_DATA_HOME:-$HOME/.local/share}"/nvim/site/autoload/plug.vim --create-dirs \       https://raw.githubusercontent.com/junegunn/vim-plug/master/plug.vim'                     # Add pluginssudo vim ~/.config/nvim/init.vim# In init.vim :call plug#begin()" Plug 'junegunn/vim-easy-align'call plug#end()
```


### Unblock-Netease-Music

```yml
# dokcer-compose.yml
version: '3'

services:
  unblockneteasemusic:
    image: pan93412/unblock-netease-music-enhanced
    restart: always
    ports:
      - 9999:8080
    entrypoint:
      - sh
      - -c
      - node app.js -o bilibili kugou kuwo -s -e http://music.163.com

```

本项待定，因为使用代理总会有各种各样的问题。


### Glow

[Glow-Github](https://github.com/charmbracelet/glow)

在命令行就可以方便的查看 `Markdown` 文件。

高亮、缓存，便于在 Git 的项目中进行查看。


## Games

### Minecraft

#### MultiMc

方便的版本与安装管理

[MultiMC](https://multimc.org/)



其余参考 [Minecraft.md](../Minecraft/ServerSetup)

