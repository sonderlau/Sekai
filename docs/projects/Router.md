---
date: 2021-09-16
category: projects
tags:
  - 路由器
  - 科学上网
  - 小米
---

# 路由器遇难记

> 2019 年 9 月，刚入学我便购入了 小米路由器 4C ，这款便宜的入门级路由器，所幸学校的网络不限制 WiFi 且速率刚好到达路由器的 100M ，算是性价比很高的选择了。
> 不过刚买回来后我发现使用 WiFi 的过程中偶尔会有**断流**的现象，越往后频率越频繁，遂刷了个第三方的固件，好像有所改善。

## 寄了

2021 年 9 月我刚结束暑假返校回来，我就发现路由器出了点小问题，在我使用小飞机上网的时候不能访问相关网站，显示 `ERROR_CONNECTION_CLOSED` 。

由于我刷了 OpenWRT 的固件，我猜测是不是固件配置的有问题，于是又重新刷了一个 Pandava 的固件，重新配置后，可以正常上网，但仍无法通过小飞机访问。

## 一点想法

对当前的状况进行分析：
- 不能完全排除固件问题（没有使用官方的固件） 但是两个固件都不能用 大概率排除固件问题
- WiFi 连接该路由器可以使用小飞机正常访问 排除小飞机本身的服务器问题
- PC 有线连接不可以访问小飞机，但是正常访问网站是可以的，排除网络问题
- 小飞机对我所要访问的网站显示了 `[Proxy]` 排除软件配置问题
- PC 直接拨号上网，使用小飞机正常访问，排除学校网络限制问题

综上，我尝试了设置好 DNS,走 HTTP 而非 SOCKS5 等办法，仍然无果，于是去询问其他人。

因为该问题比较敏感，因此很多人也不愿意回答，收到的回应零零总总大概都是说：路由器硬件坏了、老了，换一个新的就好了。

算是解决问题最直接的一个途径，但是“坏了”不能客观的反应我出现的问题，特别是我经过了不同的测试之后。

不能定位问题，而解决该问题仅仅是换个新设备————便宜的 100 上下，二手的甚至可以更便宜，相对于找到问题的复杂程度，换设备的成本就可以忽略了。

恰巧的是，室友新买了一个跟我同型号的路由器，而他的移动网络好像配置上有些问题（具体没问），索性就给我用路由器了，他仍保持着拨号的上网方式。

使用原版固件，配置好相关信息，正常上网，一切如初。

没能从这次故障中学到知识，对于我已经浑然不知使用了 2 年的老伙计来说，多少有些惭愧，但是时候让你休息了。