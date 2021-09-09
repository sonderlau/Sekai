---
time: 2021-08-13
category: tools
tags:
  - go
  - tools
  - web
  - dns
  - ip
---

# Nali

> An offline tool for querying IP geographic information and CDN provider.

[Nali Github](https://github.com/zu1k/nali)



## 背景

由于最近手上一台 `Windows Server` 服务器无法连接到我的世界正版验证的服务器，在使用`Nslookup` `Ping` `Dig` 等命令的时候好奇一些地址的物理地址，又恰巧想到了前阵子在 Github 上看到了一款小巧的工具。



## 使用

Nali 提供[中文的文档](github.com/zu1k/nali/blob/master/README_zh-CN.md)，方便上手使用。



### 安装

可以选择 Docker 安装、从源码构建、预编译好的可执行文件。

这里我直接使用编译好的文件了。

```bash
wget https://github.com/zu1k/nali/releases/download/v0.3.1/nali-linux-mips64-v0.3.1.gz
tar xfv nali-linux-mips64-v0.3.1.gz /usr/bin/nali
```



### 示例

```bash
# 简单的查询一个 IP
nali 1.2.3.4
# 与 Dig 配合使用
dig mojang.com +short | nali
# 与 Nslookup 配合使用
nslookup mojang.com 223.5.5.5 | nali

# 查询 CDN 服务提供商
nslookup www.gov.cn | nali
```



### 交互

```bash
# 帮助
nali --help

# 更新
nali update
```



## 后记

支持切换不同的数据库

> - Geoip2 ['geoip', 'geoip2', 'geo']
> - Chunzhen ['chunzhen', 'qqip', 'qqwry']
> - IPIP ['ipip', 'ipipfree', 'ipip.net']

