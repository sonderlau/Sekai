---
date: 2021-09-13
origin: true
category: projects
tags:
  - vuepress
  - 腾讯云
  - 域名
  - 备案
  - 服务器
---



# Blog 搭建小结

## 选择

目前市面上流行的几大博客我都大概的尝试过，最后还是选择了 `Vuepress`



- 腾讯云服务器
- DNSPod 域名
- Vuepress
- Nginx 反代
- Let's Encrypt 证书



## 动手

### 服务器

找着个便宜的 70 多一年，配置 1C2G ,6M ,1000G/mon, 对我来说足够用了。

Ubuntu 20.04 其余搭建参考 [Linux搭建](../Linux/Linux-Setup)



### 域名

买，备案，没啥好说的。

顺便还买了个解析，也挺便宜的。



### Vuepress

使用了主题 [Vuepress-Hope](https://vuepress-theme-hope.github.io/zh/)

搭建也是很简单，不多讲了，参考给的教程就好。



### Nginx

这里偷懒用了图形化配置

[Digital Ocean - Nginx配置](https://www.digitalocean.com/community/tools/nginx?global.app.lang=zhCN)

之后直接覆盖到服务里就行

```bash
# Reload nginx
sudo nginx -t && sudo systemctl reload nginx
```



### Let's Encrypt

上面的配置中已经包括了证书使用的教程。

据说国内使用该证书可能会导致访问速度比较慢，但我测试感觉还行。



## 更新

由于 Blog 每次更新涉及到的文件改动很多，在这方面我尝试了几种办法



### Github Actions

参考了一些现成的解决方案，下面给出我的 demo

简单来说就是 yarn 构建，然后rsync上传到服务器的某个目录中



```yaml
# This is a basic workflow to help you get started with Actions

name: CI

# Controls when the workflow will run
on:
  push:
    branches: [ main ]

# A workflow run is made up of one or more jobs that can run sequentially or in parallel
jobs:
  build:
    runs-on: ubuntu-latest
    
    strategy:
      matrix:
        node-version: [12.x]
        
        
    steps:
    - name: Checkout
      uses: actions/checkout@v2
      
    - name: Build
      run: |
        npm install && npm run docs:build
        
    - name: rsync deployments 
      uses: burnett01/rsync-deployments@5.1
      with:
        switches: -avzr --delete
        path: dist/
        remote_path: /home/ubuntu/sites/blog
        remote_host: sekai.pro
        remote_user: ubuntu
        remote_key: ${{ secrets.DEPLOY_KEY }}

```

但是 Github 速度稍显不太行...有些时候我比较想看到上线之后的样子（本地 dev不能模拟 https 环境），于是遂放弃，但如果小伙伴们在这方面不是刚需，该方法还是比较不错的。





### 云构建

后来想到干脆不如在服务器那边直接构建，遂将所有的源码文件放到了服务器上，并使用 VSCode Remote 连接服务器编写文章、调用脚本。

后面问题也来了... 服务器配置不太行，构建会直接卡死，又放弃了。



### 本地构建再上传

没办法，只能在本地构建好之后 通过 Rsync 上传到服务器上，该方法能增量更新，不用每次都上传很多文件，也比较节省流量。



```json
# package.json

"scripts": {
    "sync": "vuepress build docs && rsync -a --delete --progress dist/ ubuntu@sekai.pro:/home/ubuntu/sites/blog"
  },
```



后面使用 `yarn run sync` 就可以了，我是在 `WSL` 环境中使用的，因为 Windows 下没有 `rsync` 。

当然，记得提前添加好 SSH 证书。