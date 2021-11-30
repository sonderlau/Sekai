---
date: 2021-09-18
category: minecraft
tags:
 - MCDReforged
 - Python
---



# MCDReforged 自定义服务器处理器

> 起因是我对当前的 `Paper` 服务器的玩家输入与输出进行了修改，导致格式与原版服务器的聊天格式不同，导致不能检测出玩家的指令情况

好在，MCDReforged 提供了[自定义的接口](https://mcdreforged.readthedocs.io/zh_CN/latest/customize/handler.html)

---

模仿其写法，我大概糊出来了一个这样的：

```python
from parse import parse

from mcdreforged.handler.impl import VanillaHandler


class MyHandler(VanillaHandler):
    def get_name(self) -> str:
        return 'the_handler_for_my_server'

    def parse_server_stdout(self, text: str):
        result = super().parse_server_stdout(text)
        if result.player is None:
            parsed = parse('[{prefix}] {name} >> {message}', result.content)
            if parsed is not None and self._verify_player_name(parsed['name']):
                result.player, result.content = parsed['name'], parsed['message']
        return result
```



经过多次测试，仍然不过，遂去查看其源码

[BukkitHandler](https://github.com/Fallen-Breath/MCDReforged/blob/1ee8b28f66/mcdreforged/handler/impl/bukkit_handler.py)

```python
from parse import parse

from mcdreforged.handler.impl.vanilla_handler import VanillaHandler


class BukkitHandler(VanillaHandler):
	@classmethod
	def get_content_parsing_formatter(cls):
		return '[{hour:d}:{min:d}:{sec:d} {logging}]: {content}'

	def parse_server_stdout(self, text):
		result = super().parse_server_stdout(text)
		parsed = parse('[{time}]: [{world}] {name} >> {message}', result.content)
		if parsed is None:
			parsed = parse('[{dim_name}]<{name}> {message}', result.content)
		if parsed is not None and self._verify_player_name(parsed['name']):
			result.player, result.content = parsed['name'], parsed['message']
		return result

```



emmm...大概看懂了，看起来 `Parse` 库是最重要的一环。



继续翻 `Parse` 的源码



>   Format String Syntax:
>
>   http://docs.python.org/library/string.html#format-string-syntax



>   Format Specification Mini-Language
>
>   http://docs.python.org/library/string.html#format-specification-mini-language



根据我的情况，大概是我把 `[11:13:00 INFO]: [主世界] Sonder_Lau >> !!here` 例子中 时间部分那里没有处理好 

反正最后返回的只是ID和消息内容，干脆直接一梭子：

```python
from parse import parse

from mcdreforged.handler.impl import BukkitHandler
from mcdreforged.info_reactor.info import Info


class handle_catland(BukkitHandler):
    def get_name(self) -> str:
        return 'handle_catland'

    def parse_server_stdout(self, text):
        result = super().parse_server_stdout(text)
        # [11:13:00 INFO]: [主世界] Sonder_Lau >> !!here
        parsed = parse('[{prefix}] {name:w} >> {message}', result.content)
        if parsed is not None and self._verify_player_name(parsed['name']):
            result.player, result.content = parsed['name'], parsed['message']
        return result

    def parse_player_joined(self, info: Info):
        # [12:39:30 INFO]: [ + ] Sonder_Lau
        parsed = parse('[{}]: [ + ] {name}', info.content)
        if parsed is not None and self._verify_player_name(parsed['name']):
            return parsed['name']
        return None

    def parse_player_left(self, info: Info):
        # [12:39:30 INFO]: [ - ] Sonder_Lau
        parsed = parse('[{}]: [ - ] {name}', info.content)
        if parsed is not None and self._verify_player_name(parsed['name']):
            return parsed['name']
        return None

```



顺带写了加入与离开的部分



测试下：

```python
import unittest

from handle_catland import handle_catland

class MyTestCase(unittest.TestCase):
    def __init__(self, *args):
        super().__init__(*args)
        self.handler = handle_catland()

    def test_0_player(self):
        info = self.handler.parse_server_stdout('[11:13:00 INFO]: [主世界] Sonder_Lau >> !!here')
        self.assertEqual('Sonder_Lau', info.player)
        self.assertEqual('!!here', info.content)
```



> -------------------------------------------------------------------------------
> Ran 1 tests in 0.302s
>
> PASSED (successes=1)



Done ！

