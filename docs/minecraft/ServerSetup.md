---
author: sonderlau
time: 2021-08-20
tags:
  - minecraft
  - server
  - devops
category: minecraft
---

# Minecraft 服务器架设指南

## 开服

### JVM 选择

[Alibaba Dragonwell](https://github.com/alibaba/dragonwell11)

> 目前只有到 `Java11` 如果能上到 `16` 的话会更香

[Azul Zulu](azul.com/downloads/?package=jdk)

> 版本很多



### 服务端选择

[TIS Carpet 1.13](github.com/TISUnion/TISCarpet113)

[Fabric Carpet](https://github.com/gnembon/fabric-carpet)

### 启动准备

`start.sh`

```sh
# start.sh
#! /bin/bash
screen -d -m -S "mc" <下面的命令>
```



```sh
# Add permission
chmod u+x start.sh
./start.sh

# Back to console
screen -r mc
```



按 <kbd>Ctrl + A</kbd> 松开后按 <kbd>D</kbd> 即可退到后台

### 参数相关

==所有命令需放到一行中,这里只是方便查阅==

```shell
java -Xms6G -Xmx6G
	-XX:+UseG1GC 
	-XX:+UnlockExperimentalVMOptions
	-XX:MaxGCPauseMillis=100 
	-XX:MaxTenuringThreshold=1
	-XX:+DisableExplicitGC 
	-XX:TargetSurvivorRatio=90 
	
	-XX:G1NewSizePercent=30 
	-XX:G1MaxNewSizePercent=40
	-XX:G1HeapRegionSize=8M 
	-XX:G1ReservePercent=20 
	-XX:InitiatingHeapOccupancyPercent=15
	
	-XX:G1MixedGCLiveThresholdPercent=35 
	-XX:G1HeapWastePercent=5 
	-XX:G1MixedGCCountTarget=4 
	-XX:+PerfDisableSharedMem 
	-XX:+AlwaysPreTouch 
	-XX:+ParallelRefProcEnabled 
	-Dusing.aikars.flags=https://mcflags.emc.gs 
	-Daikars.new.flags=true
	-jar paperclip.jar
	
```

一行版
`java -Xms6G -Xmx6G -XX:+UseG1GC -XX:+UnlockExperimentalVMOptions -XX:MaxGCPauseMillis=100 -XX:MaxTenuringThreshold=1 -XX:+DisableExplicitGC -XX:TargetSurvivorRatio=90 -XX:G1NewSizePercent=30 -XX:G1MaxNewSizePercent=40 -XX:G1HeapRegionSize=8M -XX:G1ReservePercent=20  -XX:InitiatingHeapOccupancyPercent=15 -XX:G1MixedGCLiveThresholdPercent=35  -XX:G1HeapWastePercent=5 -XX:G1MixedGCCountTarget=4 -XX:+PerfDisableSharedMem  -XX:+AlwaysPreTouch -XX:+ParallelRefProcEnabled -Dusing.aikars.flags=https://mcflags.emc.gs -Daikars.new.flags=true -jar paperclip.jar`

内存大于 12G 时，可以调整如下的参数

> ```bash
>  -XX:G1NewSizePercent=40
>  -XX:G1MaxNewSizePercent=50
>  -XX:G1HeapRegionSize=16M
>  -XX:G1ReservePercent=15
>  -XX:InitiatingHeapOccupancyPercent=20
> ```



部分参数注解

> - `DisableExplicitGC`
>   - 防止某些插件自行进行垃圾回收
> - `ParallelRefProcEnabled`
>   - GC过程使用多线程



备注

> `-DsocksProxyHost=127.0.0.1 -DsocksProxyPort=8080 `
>
> - 代理
>
> 

### 插件与配置

[MCDReforged](https://github.com/Fallen-Breath/MCDReforged)

> 提供更多的控制端的配置支持
> Todo



## Issues

### 验证服务器宕机

```
# Hosts File

18.65.157.86 api.mojang.com
18.65.135.68 authserver.mojang.com 
172.29.80.1 sessionserver.mojang.com 

143.204.131.70 textures.minecraft.net 
13.35.90.134 launchermeta.mojang.com 

13.35.98.82 libraries.minecraft.net 
13.225.146.21 resources.download.minecraft.net 
13.35.90.134 launcher.mojang.com 
152.195.19.97 www.minecraft.net 

```

