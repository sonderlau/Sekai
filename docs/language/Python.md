---
date: 2021-11-06
origin: true
---

# Re0: 从零开始的 Python 世界探索

> 简单记录下为了机器学习而准备的 Python 全部的过程

## 语言基础

### args/kwargs
```python

def foo(dic, *args, keyword=True, **kwargs):
    print(dic)
    print(args)
    print(keyword)
    print(kwargs)

```

