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
  - icon: 📓
    title: 前端基础
    details: 前端基础知识
    link: /program/
    linkText: 开始学习
  - icon: 📓
    title: AI
    details: AI 相关知识
    link: /ai/
    linkText: 开始学习
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
  <VPTeamMembers
    :members="members"
  />
</VPTeamPage>

<HomeContributors/>
