---
author: sonderlau
category: minecraft
tags:
  - minecraft
  - resourcepack
  - diy_font
---

# 材质包制作相关

## 基础结构

- `pack.mcmeta`

  - ```json
    {
       "pack":{
          "pack_format":5,
          "description":"这是资源包的简介"
       }
    }
    ```

  - | 版本区间               | pack_format |      |
    | ---------------------- | ----------- | ---- |
    | 1.11-1.12.2            | 3           |      |
    | 1.13-1.14.4            | 4           |      |
    | 1.15-pre1至1.16.2-pre3 | 5           |      |
    | 1.16.2-rc1至1.16.4     | 6           |      |
    | 20w45a至20w51a         | 7           |      |

- `pack.png`

  - $2^n$ 的正方形大小
  - 用作材质包图标

- `assets` 文件夹

  - 替换原版的自定义材质



[Minecraft Wiki - 材质包文件结构](minecraft.fandom.com/zh/wiki/资源包?variant=zh#.E6.96.87.E4.BB.B6.E7.BB.93.E6.9E.84)

> ![资源包目录](https://i.loli.net/2020/07/28/ynUOHsEhXp9kYTR.jpg)



