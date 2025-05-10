---
layout: home

title: AN的小站
titleTemplate: 分享生活、分享知识

hero:
  name: AN的小站
  text: "Blog迁移中..."
  tagline: |
  image:
    src: /it.svg
    alt: ChoDocs
  actions:
    - theme: brand
      text: 开始阅读
      link: /guide
features:
  - icon: 📓
    title: 前端基础
    details: 前端基础知识
    link: /frontend/
    linkText: 开始学习
  - icon: 🏗️
    title: 框架
    details: 框架 相关知识
    link: /framework/
    linkText: 开始学习
  - icon: 🎆
    title: AI
    details: AI 相关知识
    link: /ai/
    linkText: 开始学习
  - icon: 🚚
    title: 数据结构与算法
    details: 数据结构与算法
    link: /basic/algorithm/
    linkText: 开始查阅
  - icon: 🌎️
    title: 计算机网络
    details: 计算机网络
    link: /basic/network/
    linkText: 开始查阅
  - icon: ✨️
    title: 分享
    details: 持续输出分享，分享知识。
    link: /share/
    linkText: 细听分说
  - icon: 📖
    title: 看过的书籍/专栏
    details: 记录自己的输入
    link: /input/
    linkText: 随便瞅瞅
  - icon: 🌱
    title: 时光岁月
    details: 记录时光。
    link: /personal/
    linkText: 记录当下
  - icon: 📃
    title: 归档
    details: 归档一些老文章
    link: /archive/
    linkText: 开始查阅
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
    avatar: 'https://www.github.com/An0510.png',
    name: 'An nan',
    title: '大道至简 知易行难',
    desc: 'Developer',
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
      个人介绍
    </template>
  </VPTeamPageTitle>
  <div style="display: flex; justify-content: center;">
    <VPTeamMembers :members="members" />
  </div>
</VPTeamPage>

<HomeContributors/>