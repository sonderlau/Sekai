---
time: 2021-12-21
category: notes
tags:
  - git

---

# Git 软工实践

## Test 1

- 建文件

  ```bash
  echo '19905011 xxx' > demo.txt
  
  git add demo.txt
  
  git commit -a
  
  git push
  ```

- 加一行内容

  ```bash
  git pull
  
  # 添加内容
  ```

- 对比差异

  ```bash
  git fetch
  
  git diff master origin/master --stat
  ```

- 覆盖本地

  ```bash
  git pull
  ```



## Test 2

- 建立文件

  ```bash
  #
  ```

- 其他人 pull

  ```bash
  git pull
  ```

- 第二个人修改

  ```bash
  # edit
  
  git add .
  
  git commit 
  ```

- 其他人建立分支

  ```bash
  git checkout -b newBrach
  ```

- 比较差异

  ```bash
  git fetch
  
  git diff newBranch origin/master
  ```

  



