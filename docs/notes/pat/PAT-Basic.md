# PAT-Basic 题目总结

[PAT Basic Level Notes](http://www.4k8k.xyz/article/decade111/101926246)
[PAT Basic Level Notes](https://muyuuuu.github.io/2020/08/21/PAT-basic/)

## 1057

整数转二进制计算二进制中0 1的个数

```cpp
int cnt0 = 0, cnt1 = 0;
  while (sum != 0)
    {
      if (sum % 2 == 0)
        {
          cnt0++;
        }
      else
        {
          cnt1++;
        }
      sum /= 2;
    }
```




