import autoSidebar from './theme/plugins/autoSidebarBeta'

export default {
  '/': [
    {
      text: '开始阅读',
      collapsed: false,
      items: [
        { text: '阅读须知', link: '/guide' },
        { text: '前端基础', link: '/frontend/' },
        { text: '框架', link: '/framework/' },
      ],
    },
  ],
  '/framework/': sidebarFramework(),
  '/frontend/': sidebarFrontend(),
  '/patterns/': sidebarPartterns(),
  '/ai/': sidebarAI(),
  '/basic/algorithm/': sidebarAlgorithm(),
  '/basic/network/': [
    {
      text: 'TCP/IP 协议',
      collapsed: false,
      items: [
        { text: 'TCP/IP分层', link: '/basic/network/TCPIP/TCPIP' },
        { text: 'TCP三次握手四次挥手', link: '/basic/network/TCPIP/TCP34' },
      ],
    },
    {
      text: 'HTTP 协议',
      collapsed: false,
      items: [
        { text: 'HTTP状态码', link: '/basic/network/HTTP/HTTPStatus' },
      ],
    },
  ],
  '/essay/': autoSidebar({ base: 'essay' }),
  '/archive/': autoSidebar({ base: 'archive' }),
}

function sidebarAI() {
  return [
    {
      text: '📖 AI',
      collapsed: false,
      items: [{ text: '介绍', link: '/ai/' }],
    },
  ]
}

function sidebarFramework() {
  return [
    {
      text: '🏗️ 框架',
      items: [
        { text: '介绍', link: '/framework/' },
        {
          text: 'Vue',
          items: [
            {
              text: 'Vue3 特性以及相较于 Vue2 的优化点',
              link: '/framework/vue/Vue3Vue2/',
            },
            { text: 'KeepAlive', link: '/framework/vue/KeepAlive/' },
            { text: 'Reactivity浅析', link: '/framework/vue/Reactivity/' },
          ],
        },
      ],
    },
  ]
}

function sidebarPartterns() {
  return [
    {
      text: '📔 前端设计模式',
      collapsed: false,
      items: [
        { text: '导读', link: '/patterns/guide/' },
        { text: '单例模式', link: '/patterns/singleton-pattern/' },
        { text: '代理模式', link: '/patterns/proxy-pattern/' },
        { text: '提供者模式', link: '/patterns/provider-pattern/' },
        { text: '原型模式', link: '/patterns/prototype-pattern/' },
        {
          text: '容器/演示模式',
          link: '/patterns/container-presentational-pattern/',
        },
        { text: '观察者模式', link: '/patterns/observer-pattern/' },
        { text: '模块模式', link: '/patterns/module-pattern/' },
        { text: '混合模式', link: '/patterns/mixin-pattern/' },
        { text: '中介/中间件模式', link: '/patterns/middleware-pattern/' },
        { text: '高阶组件模式', link: '/patterns/hoc-pattern/' },
      ],
    },
  ]
}

function sidebarFrontend() {
  return [
    {
      text: '💻 前端基础',
      items: [
        { text: '介绍', link: '/frontend/' },
        {
          text: 'HTML',
          items: [
            { text: 'HTML5新特性', link: '/frontend/HTML/HTML5/' },
            { text: '表单增强', link: '/frontend/HTML/form/' },
          ],
        },
        {
          text: 'JavaScript',
          items: [
            {
              text: 'Philip Roberts-事件循环',
              link: '/frontend/JavaScript/event-loop/',
            },
            {
              text: 'async/await',
              link: '/frontend/JavaScript/async-await/',
            },
            {
              text: '数据类型检测',
              link: '/frontend/JavaScript/data-type/',
            },
            {
              text: '原型链',
              link: '/frontend/JavaScript/prototype/',
            },
            {
              text: '变量提升',
              link: '/frontend/JavaScript/variable-hosting/',
            },
            {
              text: '闭包解析',
              link: '/frontend/JavaScript/closure/',
            },
            {
              text: '从执行上下文的角度讲解 this',
              link: '/frontend/JavaScript/this/',
            },
            {
              text: 'let和const以及作用域',
              link: '/frontend/JavaScript/let_const/',
            },
            {
              text: 'JavaScript调用栈和栈溢出',
              link: '/frontend/JavaScript/stack_overflow/',
            },
          ],
        },
        {
          text: '浏览器',
          items: [
            {
              text: '浏览器从输入URL到页面展示发生了什么',
              link: '/frontend/Browser/browser-url/',
            },
            {
              text: '重绘重排',
              link: '/frontend/Browser/chonghuichongpai/',
            },
            {
              text: '浏览器安全-XSS',
              link: '/frontend/Browser/security/XSS',
            },
          ],
        },
      ],
    },
  ]
}

function sidebarAlgorithm() {
  return [
    {
      items: [
        { text: '📓 导读', link: '/basic/algorithm/' },
      ],
    },
    {
      text: 'Stack 栈',
      collapsed: false,
      items: [
        { text: '介绍', link: '/basic/algorithm/stack/' },
        { text: '20. 有效的括号', link: '/basic/algorithm/stack/22' },
      ],
    },
    {
      text: '哈希表',
      collapsed: false,
      items: [
        { text: '介绍', link: '/algorithm/stack/' },
        { text: '1. 两数之和', link: '/algorithm/hash-table/1' },
        {
          text: '3. 无重复字符的最长子串',
          link: '/algorithm/hash-table/3',
        },
        {
          text: '136. 只出现一次的数字',
          link: '/algorithm/hash-table/136',
        },
        {
          text: '349. 两个数组的交集',
          link: '/algorithm/hash-table/349',
        },
        {
          text: '560. 和为 K 的子数组',
          link: '/algorithm/hash-table/560',
        },
      ],
    },
    {
      text: 'Queue 队列',
      collapsed: false,
      items: [
        { text: '介绍', link: '/basic/algorithm/queue/' },
        {
          text: '933. 最近的请求次数',
          link: '/basic/algorithm/queue/933',
        },
      ],
    },
    {
      text: 'Linked List 链表',
      collapsed: false,
      items: [
        { text: '介绍', link: '/basic/algorithm/linked-list/' },
        { text: '237. 删除链表中的节点', link: '/basic/algorithm/linked-list/237' },
        { text: '206. 反转链表', link: '/basic/algorithm/linked-list/206' },
      ],
    },
    // {
    //   text: '哈希表',
    //   collapsed: false,
    //   items: [
    //     { text: '介绍', link: '/algorithm/stack/' },
    //     { text: '1. 两数之和', link: '/algorithm/hash-table/1' },
    //     {
    //       text: '3. 无重复字符的最长子串',
    //       link: '/algorithm/hash-table/3',
    //     },
    //     {
    //       text: '136. 只出现一次的数字',
    //       link: '/algorithm/hash-table/136',
    //     },
    //     {
    //       text: '349. 两个数组的交集',
    //       link: '/algorithm/hash-table/349',
    //     },
    //     {
    //       text: '560. 和为 K 的子数组',
    //       link: '/algorithm/hash-table/560',
    //     },
    //   ],
    // },
    // {
    //   text: 'Backtracking 递归与回溯',
    //   collapsed: false,
    //   items: [
    //     {
    //       text: '08.08. 有重复字符串的排列组合',
    //       link: '/algorithm/recursion-backtracking/08.08',
    //     },
    //     {
    //       text: '16.11. 跳水板',
    //       link: '/algorithm/recursion-backtracking/16.11',
    //     },
    //     {
    //       text: '17. 电话号码的字母组合',
    //       link: '/algorithm/recursion-backtracking/17',
    //     },
    //     {
    //       text: '22. 括号生成',
    //       link: '/algorithm/recursion-backtracking/22',
    //     },
    //     {
    //       text: '37. 解数独',
    //       link: '/algorithm/recursion-backtracking/37',
    //     },
    //     {
    //       text: '39. 组合总和',
    //       link: '/algorithm/recursion-backtracking/39',
    //     },
    //     {
    //       text: '40. 组合总和 II',
    //       link: '/algorithm/recursion-backtracking/40',
    //     },
    //     {
    //       text: '46. 全排列',
    //       link: '/algorithm/recursion-backtracking/46',
    //     },
    //     {
    //       text: '47. 全排列 II',
    //       link: '/algorithm/recursion-backtracking/47',
    //     },
    //     {
    //       text: '51. N 皇后',
    //       link: '/algorithm/recursion-backtracking/51',
    //     },
    //     {
    //       text: '54. 螺旋矩阵',
    //       link: '/algorithm/recursion-backtracking/54',
    //     },
    //     {
    //       text: '59. 螺旋矩阵 II',
    //       link: '/algorithm/recursion-backtracking/59',
    //     },
    //     {
    //       text: '73. 矩阵置零',
    //       link: '/algorithm/recursion-backtracking/73',
    //     },
    //     { text: '77. 组合', link: '/algorithm/recursion-backtracking/77' },
    //     { text: '78. 子集', link: '/algorithm/recursion-backtracking/78' },
    //     {
    //       text: '79. 单词搜索',
    //       link: '/algorithm/recursion-backtracking/79',
    //     },
    //     {
    //       text: '90. 子集 II',
    //       link: '/algorithm/recursion-backtracking/90',
    //     },
    //     {
    //       text: '93. 复原IP地址',
    //       link: '/algorithm/recursion-backtracking/93',
    //     },
    //     {
    //       text: '131. 分割回文串',
    //       link: '/algorithm/recursion-backtracking/131',
    //     },
    //     {
    //       text: '212. 单词搜索',
    //       link: '/algorithm/recursion-backtracking/212',
    //     },
    //     {
    //       text: '216. 组合总和 III',
    //       link: '/algorithm/recursion-backtracking/216',
    //     },
    //     {
    //       text: '401. 二进制手表',
    //       link: '/algorithm/recursion-backtracking/401',
    //     },
    //     {
    //       text: '784. 字母大小写全排列',
    //       link: '/algorithm/recursion-backtracking/784',
    //     },
    //     {
    //       text: '980. 不同路径 III',
    //       link: '/algorithm/recursion-backtracking/980',
    //     },
    //     {
    //       text: '1219. 黄金矿工',
    //       link: '/algorithm/recursion-backtracking/1219',
    //     },
    //     {
    //       text: '1291. 顺次数',
    //       link: '/algorithm/recursion-backtracking/1291',
    //     },
    //   ],
    // },
    // {
    //   text: 'Tree 二叉树',
    //   collapsed: false,
    //   items: [
    //     { text: '100. 相同的树', link: '/algorithm/binary-tree/100.相同的树' },
    //     {
    //       text: '101. 对称二叉树',
    //       link: '/algorithm/binary-tree/101.对称二叉树',
    //     },
    //     {
    //       text: '102. 二叉树的层序遍历',
    //       link: '/algorithm/binary-tree/102.二叉树的层序遍历',
    //     },
    //     {
    //       text: '104. 二叉树的最大深度',
    //       link: '/algorithm/binary-tree/104.二叉树的最大深度',
    //     },
    //     {
    //       text: '108. 将有序数组转换为二叉搜索树',
    //       link: '/algorithm/binary-tree/108.将有序数组转换为二叉搜索树',
    //     },
    //     {
    //       text: '110. 平衡二叉树',
    //       link: '/algorithm/binary-tree/110.平衡二叉树',
    //     },
    //     {
    //       text: '111. 二叉树的最小深度',
    //       link: '/algorithm/binary-tree/111.二叉树的最小深度',
    //     },
    //     { text: '112. 路径总和', link: '/algorithm/binary-tree/112.路径总和' },
    //     {
    //       text: '113. 路径总和 II',
    //       link: '/algorithm/binary-tree/113.路径总和 II',
    //     },
    //     {
    //       text: '124. 二叉树中的最大路径和',
    //       link: '/algorithm/binary-tree/124.二叉树中的最大路径和',
    //     },
    //     {
    //       text: '129. 求根到叶子节点数字之和',
    //       link: '/algorithm/binary-tree/129.求根到叶子节点数字之和',
    //     },
    //     {
    //       text: '144. 二叉树的前序遍历',
    //       link: '/algorithm/binary-tree/144.二叉树的前序遍历',
    //     },
    //     {
    //       text: '199. 二叉树的右视图',
    //       link: '/algorithm/binary-tree/199.二叉树的右视图',
    //     },
    //     {
    //       text: '236. 二叉树的最近公共祖先',
    //       link: '/algorithm/binary-tree/236.二叉树的最近公共祖先',
    //     },
    //     {
    //       text: '257. 二叉树的所有路径',
    //       link: '/algorithm/binary-tree/257.二叉树的所有路径',
    //     },
    //     {
    //       text: '404. 左叶子之和',
    //       link: '/algorithm/binary-tree/404.左叶子之和',
    //     },
    //     {
    //       text: '437. 路径总和 III',
    //       link: '/algorithm/binary-tree/437.路径总和 III',
    //     },
    //     {
    //       text: '450. 删除二叉搜索树中的节点',
    //       link: '/algorithm/binary-tree/450.删除二叉搜索树中的节点',
    //     },
    //     {
    //       text: '501. 二叉搜索树中的众数',
    //       link: '/algorithm/binary-tree/501.二叉搜索树中的众数',
    //     },
    //     {
    //       text: '543. 二叉树的直径',
    //       link: '/algorithm/binary-tree/543.二叉树的直径',
    //     },
    //   ],
    // },
    // {
    //   text: 'Dynamic Programming 动态规划',
    //   collapsed: false,
    //   items: [
    //     { text: '62. 不同路径', link: '/algorithm/dp/62.不同路径' },
    //     { text: '63. 不同路径 II', link: '/algorithm/dp/63.不同路径 II' },
    //     { text: '70. 爬楼梯', link: '/algorithm/dp/70.爬楼梯' },
    //     {
    //       text: '121. 买卖股票的最佳时机',
    //       link: '/algorithm/dp/121.买卖股票的最佳时机',
    //     },
    //     {
    //       text: '122. 买卖股票的最佳时机 II',
    //       link: '/algorithm/dp/122.买卖股票的最佳时机 II',
    //     },
    //     { text: '198. 打家劫舍', link: '/algorithm/dp/198.打家劫舍' },
    //     { text: '213. 打家劫舍 II', link: '/algorithm/dp/213.打家劫舍 II' },
    //     { text: '221. 最大正方形', link: '/algorithm/dp/221.最大正方形' },
    //     { text: '322. 零钱兑换', link: '/algorithm/dp/322.零钱兑换' },
    //   ],
    // },
    // {
    //   text: 'Two Pointers 双指针',
    //   collapsed: false,
    //   items: [
    //     {
    //       text: '11. 盛最多水的容器',
    //       link: '/algorithm/double-pointer/11.盛最多水的容器',
    //     },
    //     { text: '15. 三数之和', link: '/algorithm/double-pointer/15.三数之和' },
    //     {
    //       text: '16. 最接近的三数之和',
    //       link: '/algorithm/double-pointer/16.最接近的三数之和',
    //     },
    //     { text: '42. 接雨水', link: '/algorithm/double-pointer/42.接雨水' },
    //     { text: '75. 颜色分类', link: '/algorithm/double-pointer/75.颜色分类' },
    //     {
    //       text: '209. 长度最小的子数组',
    //       link: '/algorithm/double-pointer/209.长度最小的子数组',
    //     },
    //     {
    //       text: '344. 反转字符串',
    //       link: '/algorithm/double-pointer/344.反转字符串',
    //     },
    //     {
    //       text: '763. 划分字母区间',
    //       link: '/algorithm/double-pointer/763.划分字母区间',
    //     },
    //     {
    //       text: '925. 长按键入',
    //       link: '/algorithm/double-pointer/925.长按键入',
    //     },
    //   ],
    // },
  ]
}
