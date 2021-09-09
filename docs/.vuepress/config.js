const emoji = require('../../BilibiliEmoji');
const { config } = require("vuepress-theme-hope");

module.exports = config({
  title: "世界",
  description: "真相不曾放过我 我也不曾放过真相",

  dest: "./dist",
  locales: {
    "/": {
      lang: 'zh-CN'
    }
  },

  head: [
    [
      "script",
      { src: "https://cdn.jsdelivr.net/npm/react/umd/react.production.min.js" },
    ],
    [
      "script",
      {
        src:
          "https://cdn.jsdelivr.net/npm/react-dom/umd/react-dom.production.min.js",
      },
    ],
    ["script", { src: "https://cdn.jsdelivr.net/npm/vue/dist/vue.min.js" }],
    [
      "script",
      { src: "https://cdn.jsdelivr.net/npm/@babel/standalone/babel.min.js" },
    ],
    [
      'link', { rel:'icon', href:'/assets/favicon.ico'}
    ]
  ],

  themeConfig: {
    logo: "/logo.svg",
    hostname: "https://sekai.pro",
    author: "SonderLau",
    feed: {
      hostname: "https://sekai.pro",
      count: 20,
      output: {
        rss: true
      }
    },

    // 顶栏
    nav: [
      { text: "主页", link: "/", icon: "home" },
      { text: "文章列表", link: "/article/", icon: "box" }
    ],

    sidebar: "auto",

    blog: {
      name:"SonderLau",
      intro: "/intro/",
      sidebarDisplay: "mobile",
      links: {
        Steam:"https://steamcommunity.com/id/SonderLau/",
        QQ:"http://wpa.qq.com/msgrd?v=3&uin=&site=qq&menu=yes",
        Zhihu:"https://www.zhihu.com/people/ivymax-30",
        Email:"mailto:ge15emium@qq.com",
        Github: "https://github.com/sonderlau"
      },
      avatar: "/assets/avatar.jpg",
      roundAvatar: true,
      timeline: "Vicetone, a lifetime of faith"
    },

    footer: {
      copyright: "<a href='https://beian.miit.gov.cn/'>冀ICP备2021020965号</a>",
      content: "<a href='https://icp.gov.moe/?keyword=20210430' target='_blank'>萌ICP备20210430号</a>",
      display: true
    },

    comment: {
      type: "valine",
      appId:"DK4zS1dgB3movyz2zlQUvc1c-gzGzoHsz",
      appKey: "OGa6yK7Tu1dJJMxBwkayJxiT",
      placeholder: "留下你的想法...",
      avatar: "hide",
      emojiMaps: emoji,
      emojiCDN: "//i0.hdslb.com"
    },

    copyright: {
      status: "global",
    },

    mdEnhance: {
      lineNumbers: true,
      imageFix: true,
      align: true,
      sup: true,
      sub: true,
      footnote: true,
      mark: true,
      tasklist: true,
      tex: true,
      mermaid: true,
      presentation: false
    },

    pwa: {
      favicon: "/favicon.ico",
      cachePic: true,
      apple: {
        icon: "/assets/icon/apple-icon-152.png",
        statusBarColor: "black",
      },
      msTile: {
        image: "/assets/icon/ms-icon-144.png",
        color: "#ffffff",
      },
      manifest: {
        icons: [
          {
            src: "/assets/icon/chrome-mask-512.png",
            sizes: "512x512",
            purpose: "maskable",
            type: "image/png",
          },
          {
            src: "/assets/icon/chrome-mask-192.png",
            sizes: "192x192",
            purpose: "maskable",
            type: "image/png",
          },
          {
            src: "/assets/icon/chrome-512.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "/assets/icon/chrome-192.png",
            sizes: "192x192",
            type: "image/png",
          },
        ],
        shortcuts: [
          {
            name: "Guide",
            short_name: "Guide",
            url: "/guide/",
            icons: [
              {
                src: "/assets/icon/guide-maskable.png",
                sizes: "192x192",
                purpose: "maskable",
                type: "image/png",
              },
              {
                src: "/assets/icon/guide-monochrome.png",
                sizes: "192x192",
                purpose: "monochrome",
                type: "image/png",
              },
            ],
          },
        ],
      },
    },
  },
});
