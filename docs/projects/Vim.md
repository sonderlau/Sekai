---
date: 2021-09-24
origin: false
category: projects
tags:
  - vim
---

# Vim 入门

TBD

## 初识

|      |                 |                    |
| ---- | --------------- | ------------------ |
| a    | append          | after this letter  |
| i    | insert          | current letter     |
| o    | open a new line |                    |
| A    |                 | end of this line   |
| I    |                 | start of this line |
| O    |                 | open a line above  |



|          |                     |
| -------- | ------------------- |
| Ctrl + h | Remove last letter  |
| Ctrl + w | Remove last word    |
| Ctrl + u | Remove current line |



- `ESC`
  - `Ctrl + [`
- Insert Mode
  - `gi`



|      |                 |
| ---- | --------------- |
| w/W  | next word start |
| e/E  | next word end   |
| b/B  |                 |





|         |      |
| ------- | ---- |
| f{char} |      |
| F{char} |      |
|         |      |





|          |               |
| -------- | ------------- |
| gg       | file start    |
| G        | file end      |
| H        | screen head   |
| M        | screen middle |
| L        | screen lower  |
| Ctrl + u | upward        |
| Ctrl + f | forward       |
| zz       |               |





|          |                    |
| -------- | ------------------ |
| daw      | delete a word      |
| dt{char} | delete to the char |
| dd       | delete row         |
| x        | delete a char      |
| c        | change a char      |
| r        | replace a char     |
| s        | subsitute a char   |







|         |               |      |
| ------- | ------------- | ---- |
| /{char} | global search | n/N  |
| f{char} | inline search | */#  |
|         |               |      |





`:[range]s[ubstiute]/{pattern}/{string}/[flags]`

- range
  - `10,20` 10-20
  - % ALL
- flags
  - g(global)
  - c(confirm)
  - f(number)





|             |      |      |
| ----------- | ---- | ---- |
| Ctrl+w s    |      |      |
| Ctrl+w v    |      |      |
| Ctrl+w w    |      |      |
| Ctrl+w hjkl |      |      |
| Ctrl+w HJKL |      |      |
| Ctrl+w =    |      |      |
| Ctrl+w _    |      |      |





|                            |      |      |
| -------------------------- | ---- | ---- |
| :tabnew                    |      |      |
| :tabe [name]               |      |      |
| :tabc                      |      |      |
| :tabo                      |      |      |
| Ctrl+w T                   |      |      |
| :tabn [num]       [num] gt |      |      |
|                            |      |      |
| :tabp           gT         |      |      |
|                            |      |      |

