---
layout: home

title: AN的小站
titleTemplate: 分享生活、分享知识

hero:
  name: AN的小站
  text: "分享生活 分享技术"
  tagline: |
  image:
    src: /it.svg
    alt: ChoDocs
  actions:
    - theme: brand
      text: 开始阅读
      link: /guide
features:
  - icon: 📋
    title: 面试专栏
    details: 海量前端面试问题解答，一站式阅读体验。
    link: /interview/
    linkText: 开始刷题
  - icon: 💬
    title: 编程学习
    details: 同步 B 站视频，文档用于巩固知识。
    link: /program/npm-package/
    linkText: 编程学习
  - icon: 📓
    title: 前端算法
    details: 不再畏惧面试算法，提供刷题路线。
    link: /algorithm/guide/
    linkText: 开始刷题
  - icon: 🚚
    title: 备忘录
    details: 将日常工作中遇到的问题做一份备忘录，方便查阅。
    link: /memo/git-command/
    linkText: 开始查阅
  - icon: 🔧
    title: 编程工具
    details: 归纳一些编程相关工具与网站，提高效率。
    link: /tool/
    linkText: 提高效率
  - icon: 🌱
    title: 时光岁月
    details: 记录时光。
    link: /green/ch
    linkText: 记录当下
---

<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers
} from 'vitepress/theme';
import { icons } from './socialIcons';

const members = [
  {
    avatar: 'https://www.github.com/Chocolate1999.png',
    name: 'An nan',
    title: '流水不争先, 争的是滔滔不绝',
    desc: 'FE Developer<br/>Creator @ <a href="https://github.com/chodocs/chodocs" target="_blank">ChoDocs</a>',
    links: [
      { icon: 'github', link: 'https://github.com/An0510' }
    ]
  },
]
</script>

<DataPanel/>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>
      核心成员介绍
    </template>
  </VPTeamPageTitle>
  <VPTeamMembers
    :members="members"
  />
</VPTeamPage>

<HomeContributors/>
