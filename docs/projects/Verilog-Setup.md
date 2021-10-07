---
date: 2021-09-29
origin: true
category: projects
tags:
  - verilog
  - vscode
  - setup
---

# Verilog VSCode Remote 开发环境搭建



> 由于我自己的笔记本电脑太过笨重，续航也不行，发热量太大，不适合携带到课上进行开发。
>
> 同学暂时借我用了一个 Surface
>
> 感觉挺不错的，书写起来很舒服，遂决定拿来做远程开发使用



值得一提的是，Python 课程也需要用到开发环境，配置非常简单，这里就不赘述了。



## 准备工作

- 一台云服务器
  - 最好是 Linux
  - 我这里用的是 `Ubuntu 20.04 LTS`
- 本地的 VSCode
- 装好以下插件
  - Remote - SSH
    - 远程开发连接插件
  - WaveTrace
    - 模拟使用
  - Verilog-HDL/SystemVerilog/Bluespec SystemVerilog
    - 提供 Linting\Snippets\Ctags
  - verilog-formatter
    - 格式化代码用



## 第三方工具准备

### iVerilog

[Icarus Verilog](http://iverilog.icarus.com/)

```bash
sudo apt install iverilog

# Test
verilog
```



### iStyle

[istyle-verilog-formatter](https://github.com/thomasrussellmurphy/istyle-verilog-formatter)

需要自行编译

```bash
git clone https://github.com/thomasrussellmurphy/istyle-verilog-formatter.git
mkdir build
cd build
cmake ..
make
```

将编译出来的 `bin\istyle` 文件放到你认为的合适的地方

配置插件 `verilog-formatter` 中的参数



**Verilog-formatter > Istyle: Path**: `path/to/file/istyle`



