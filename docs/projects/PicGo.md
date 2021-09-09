---
time: 2021-08-29
author: sonderlau
category: projects
tags:
  - PicGo
  - 图床
  - markdown
---

# PicGo 配置与使用

一般我使用 `Typora` 作为我的主力写作工具，偶尔使用 `VSCode` 作为补充等。

在写作完之后图片不能自动的上传到博客中，而且即便上传到博客中，势必会对访问的速度有所影响。

于是我使用 `PicGo` 提供自动化的图片上传并插入连接的服务，配合 `Typora` 写作起来非常的舒服。

## 下载与安装

[PicGo-Core](https://github.com/PicGo/PicGo-Core)

```bash
npm install -g picgo
```

或者使用一个 GUI 版本
[PicGo](https://github.com/Molunerfinn/PicGo)

在 Releases 中可以找到你想要的系统版本。

在安装后，按照官方文档的配置，使用 GUI 或者编写 JSON 文件都可以。

我在这里使用的是**腾讯云对象存储**，配置文件如下

::: details 配置文件

```json
{
  "picBed": {
    "current": "tcyun",
    "uploader": "tcyun",
    "smms": {
      "token": ""
    },
    "tcyun": {
      "appId": "",
      "area": "ap-shanghai",
      "bucket": "",
      "customUrl": "",
      "path": "imgs/",
      "secretId": "",
      "secretKey": "",
      "version": "v5"
    },
    "list": [
      {
        "name": "SM.MS图床",
        "type": "smms",
        "visible": false
      },
      {
        "name": "腾讯云COS",
        "type": "tcyun",
        "visible": true
      },
      {
        "name": "GitHub图床",
        "type": "github",
        "visible": false
      },
      {
        "name": "七牛图床",
        "type": "qiniu",
        "visible": false
      },
      {
        "name": "Imgur图床",
        "type": "imgur",
        "visible": false
      },
      {
        "name": "阿里云OSS",
        "type": "aliyun",
        "visible": false
      },
      {
        "name": "又拍云图床",
        "type": "upyun",
        "visible": false
      }
    ]
  },
  "settings": {
    "shortKey": {
      "picgo:upload": {
        "enable": true,
        "key": "CommandOrControl+Shift+P",
        "name": "upload",
        "label": "快捷上传"
      }
    },
    "server": {
      "port": 36677,
      "host": "127.0.0.1",
      "enable": true
    },
    "privacyEnsure": true,
    "showUpdateTip": true,
    "autoRename": true,
    "autoStart": true
  },
  "picgoPlugins": {},
  "debug": true,
  "PICGO_ENV": "GUI",
  "needReload": false
}
```
:::

关于哪些参数需要填写，请参考[官方文档](https://picgo.github.io/PicGo-Doc/zh/guide/config.html#图床区)



## Typora 设置

之后在 Typora 里面设置好对应的设置，比如我对本地的图片需要上传，网络上的图片地址不需要上传，可以设置如下：

![image-20210829133733114](https://hzieecos-1300064754.cos.ap-shanghai.myqcloud.com/imgs/202108291337174.png)



