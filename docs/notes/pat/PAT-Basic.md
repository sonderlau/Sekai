# PAT-Basic 题目总结

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




