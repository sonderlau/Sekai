---
time: 2021-12-04
category: tools
tags:
  - crack
  - typora
---

# TyporaCracker

前几天写了篇文章：[Typora - 旧王已死 新王当立](https://sekai.pro/flash/21-11-27/)

表达了我对 Typora 突然收费 89 块且 2.0 版本仍然有权再单独收费的情况下的不满，也正是那时放弃 Typora 作为我的主力编辑器。



## 轶闻

后面出了很多很有意思的消息： 

![image-20211204103326225](./TyporaCraker.assets/image-20211204103326225.png)

[Marktext](https://github.com/marktext/marktext) 项目的 star 数飞速上涨。

> ~~果然失去了才会懂得开源的好~~



## 网友 DIY



**郑重声明：本文和作者不对以下内容负责 执行相关代码或执行任何操作所产生的后果和法律责任均自行承担**



[Typora Cracker](https://github.com/Mas0nShi/typoraCracker)



```
> python typora.py --help
usage: typora.py [-h] [-u] [-f] asarPath dirPath

[extract and decryption / pack and encryption] app.asar file from [Typora].

positional arguments:
  asarPath    app.asar file path/dir [input/ouput]
  dirPath     as tmp and out directory.

optional arguments:
  -h, --help  show this help message and exit
  -u          pack & encryption (default: extract & decryption)
  -f          enabled prettify/compress (default: disabled)
```



先解包 再重新打包 之后进行**你想要进行的操作** 

这里有点小问题 请每次操作的时候对输入的文件夹地址进行检查，如果文件夹不存在需要手动创建，不然会有小问题。

我这里已经提交了 [issue](https://github.com/Mas0nShi/typoraCracker/issues/13) 

![image-20211204103840340](TyporaCraker.assets/image-20211204103840340.png)