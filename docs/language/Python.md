---
time: 2021-11-06
origin: true
---

# Re0: 从零开始的 Python 世界探索

> 简单记录下为了机器学习而准备的 Python 全部的过程

## 学习推荐





基础部分学习：

https://github.com/jackfrued/Python-100-Days

Day07 以及之前的先看会  8-10 可以简单看看 暂时不要求掌握  后面的部分看你自己的兴趣学习 



Python 衍生的工具

https://calmcode.io/

每节都是个小视频，很快，英文的讲解不是很影响理解，听不懂英文看视频也能大概了解

这部分与基础不太一样，追求的是怎么样才能更好的写东西。比如 black 是格式化代码用的，pytest 是 python 的测试框架等，挑你感兴趣的部分学习，不用全了解。



Cheatsheet:

https://gto76.github.io/python-cheatsheet/

等基础学的差不多了，在用的时候，特别是做题的时候可能会忘记一些东西和特性，不妨到这上面去简单回顾下。

当然肯定是不如官方文档全的：

https://docs.python.org/zh-cn/3/



b站的视频教程：

https://www.bilibili.com/video/BV1b7411N7P2

这个是我认为还不错的，北邮的老师上课的录制视频。他的 21 年版还在更新，在他的投稿作品里面可以找到



然后就是开始学习我建议安装 Python 3.10 的新版本，可能有部分库不支持这个版本，但是基础学习阶段这个版本的报错会更详细，其他版本的报错会让初学者不知所措。

## 语言基础

### args/kwargs
```python

def foo(dic, *args, keyword=True, **kwargs):
    print(dic)
    print(args)
    print(keyword)
    print(kwargs)

```



### 遍历词典 Dict

#### 遍历 Key

```python
for key in dict:
```

#### 遍历 Value

```python
for value in dict.values():
```

#### 遍历 KV

```python
for kv in dict.items():
```

#### 遍历 Key-Value

```python
for key, value in dict.items():
```



## 参数



### open

![file-open-mode](./Python.assets/file-open-mode-16373785096053.png)



## 内置库



### collections

几种内置的数据结构。

已完成 引用链接 TBD



### itertools

迭代器函数



#### 



### logging

日志记录





### random

### functools

### threading

### multiprocessing

### contextlib

### datetime

### dataclasses
