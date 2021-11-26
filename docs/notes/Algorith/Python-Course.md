---
time: 2021-11-25
category: notes
tags:
  - Python
  - Course
  - Algorith
---

# Python 选修课 算法题目笔记

日期作为索引

## 11-03 

### Unicode 值和反向转换
```python
ord('a')    # 97
chr(97)     #a
```

### format 参数

|格式|说明|
|`{:.2f}`|两位小数|
|`{:+}`|带符号|
|`{x<4d}`|填充右侧 4位 且填充 `x` 非变量|
|`{:,}`|以 `,` 分隔的数字|
|`{:<10d} {:>10d} {:^10d}` | 左右中间对齐|


## 11-10

按照 字符串 长度进行排序

```python
sorted(strs, key=lambda x : x.count)
```
