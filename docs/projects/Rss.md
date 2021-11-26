---
time: 2021-08-30
author: sonderlau
category: projects
tags:
  - rss
  - 腾讯云
  - nginx
---



# RSS 自建

承接前阵子的 [一篇文章](../flash/21-08-22)

在 腾讯云 上找到了性价比很合适的一款机型，同时也是比较馋国内的访问速度，于是选择了在国内主机上部署并备案。



有关搭建、备案、域名相关，请查看[这篇文章]，以下内容默认已经安装好了 `Docker` `Docker-compose` `Nginx`





## RSSHub

> 由于现在 `Feed` 过于小众，因此本站不提供相关服务器。

经常在个别网站、Blog上看到这句话，小众确实是小众，但是我觉得提供下相关服务应该也不是很麻烦。

但是通过 RSS 访问的人数量过多，就会少了很多的真实用户数据和流量，毕竟 RSS 访问是几乎不掺杂广告、推广的，而且用户也可以非常方便的过滤、筛选。



于是 [RSSHub](https://docs.rsshub.app) 应运而生，简单概括，你可以理解为是一个类似于爬虫一样的角色，帮助你向不提供 RSS 服务的网站进行访问，然后筛选你需要的内容，转换成 RSS 的形式。



### 部署

由于我比较的懒，选择了 `dockcer-compose` 的部署方式，如下。

```bash
# Donwload yml file
wget https://raw.githubusercontent.com/DIYgod/RSSHub/master/docker-compose.yml

# 创建 volume 持久化 Redis 缓存
docker volume create redis-data

# Fire up !
docker-compose up -d
```



### 参数修改

修改端口可以修改 `docker-compose.yml`

```yaml {8}
version: '3'

services:
    rsshub:
        image: diygod/rsshub
        restart: always
        ports:
            - '2000:1200' # 端口修改
        environment:
            NODE_ENV: production
            CACHE_TYPE: redis
            REDIS_URL: 'redis://redis:6379/'
            PUPPETEER_WS_ENDPOINT: 'ws://browserless:3000'
        depends_on:
            - redis
            - browserless

    browserless:
        # See issue 6680
        image: browserless/chrome:1.43-chrome-stable
        restart: always
        ulimits:
          core:
            hard: 0
            soft: 0

    redis:
        image: redis:alpine
        restart: always
        volumes:
            - redis-data:/data

volumes:
    redis-data:

```



`2000:1200` 指的是将容器内镜像的 `1200` 端口映射到外部主机的 `2000` 端口。



你可以自由的修改



## TTRSS

一样的懒，于是采用 [Awesome TTRSS](https://ttrss.henry.wang/zh/#%E5%85%B3%E4%BA%8E)

复制`docker-compose.yml` 文件，对其进行简单的修改

```yaml {7,13,14-17}
version: "3"
services:
  service.rss:
    image: wangqiru/ttrss:latest
    container_name: ttrss
    ports:
      - 181:80 # 自定义你的端口 
    environment:
      - SELF_URL_PATH=http://localhost:181/ # please change to your own domain
      - DB_PASS=ttrss # use the same password defined in `database.postgres`
      - PUID=1000
      - PGID=1000
      - ALLOW_PORTS=2000 # 由于我上面的 Rsshub的端口 2000 是非 80,443的正规端口，需要做额外的设置
    volumes:  # 对一些资源进行外置
      - ./feed-icons:/var/www/feed-icons/
      - ./themes.local:/var/www/themes.local
      - ./iconfont:/var/www/lib/iconfont
    networks:
      - public_access
      - service_only
      - database_only
    stdin_open: true
    tty: true
    restart: always

  service.mercury: # set Mercury Parser API endpoint to `service.mercury:3000` on TTRSS plugin setting page
    image: wangqiru/mercury-parser-api:latest
    container_name: mercury
    networks:
      - public_access
      - service_only
    restart: always

  service.opencc: # set OpenCC API endpoint to `service.opencc:3000` on TTRSS plugin setting page
    image: wangqiru/opencc-api-server:latest
    container_name: opencc
    environment:
      - NODE_ENV=production
    networks:
      - service_only
    restart: always

  database.postgres:
    image: postgres:13-alpine
    container_name: postgres
    environment:
      - POSTGRES_PASSWORD=ttrss # feel free to change the password
    volumes:
      - ~/postgres/data/:/var/lib/postgresql/data # persist postgres data to ~/postgres/data/ on the host
    networks:
      - database_only
    restart: always

  # utility.watchtower:
  #   container_name: watchtower
  #   image: containrrr/watchtower:latest
  #   volumes:
  #     - /var/run/docker.sock:/var/run/docker.sock
  #   environment:
  #     - WATCHTOWER_CLEANUP=true
  #     - WATCHTOWER_POLL_INTERVAL=86400
  #   restart: always

volumes:
  feed-icons:
 


networks:
  public_access: # Provide the access for ttrss UI
  service_only: # Provide the communication network between services only
    internal: true
  database_only: # Provide the communication between ttrss and database only
    internal: true

```

记得对数据库部分的账号密码进行修改



同时我对一些资源文件另外单独连接了文件夹

- `feed-icon` 订阅源的图标
- `theme_local` 方便添加新的主题
- `iconfont` 部分主题使用的图标字体文件找不到，手动添加挂在上去



```bash
# 启动
docker-compose up -d
```



访问设置好的端口，上述配置文件是 `181` 端口。

使用 `admin` `password` 登入，后续请修改密码。



Enjoy it !



[Sekai TTRSS](https://rss.sekai.pro)
