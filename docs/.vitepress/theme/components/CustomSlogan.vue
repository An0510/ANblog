<script setup>
import DefaultTheme from 'vitepress/theme'
import { onBeforeUnmount, onMounted, ref } from 'vue'

const { Layout } = DefaultTheme

// 打字机效果的文本数组
const texts = [
  '为了逃避真正的思考，人们是不惜采取任何手段的',
  '我们不仅不知道某些事情，甚至可能不知道我们不知道这些事情',
  '写代码是热爱，写到世界充满爱',
  '不要把解决问题的某个手段当成问题本身去解决',
  '追寻价值，而不是估值',
]
const typingText = ref('')
const currentTextIndex = ref(getRandomIndex())
const isDeleting = ref(false)
const isHovering = ref(false)
let timer = null

// 根据当前时间戳生成随机索引
function getRandomIndex() {
  const timestamp = new Date().getTime()
  return Math.floor(timestamp % texts.length)
}

// 鼠标悬浮处理
function handleMouseEnter() {
  isHovering.value = true
  // 清除定时器
  if (timer) {
    clearTimeout(timer)
    timer = null
  }
}

function handleMouseLeave() {
  isHovering.value = false
  // 重新开始打字机效果
  timer = setTimeout(typeEffect, 300)
}

// 打字机效果的实现
function typeEffect() {
  // 如果正在悬浮，不执行打字机效果
  if (isHovering.value)
    return

  // 当前要显示的完整文本
  const fullText = texts[currentTextIndex.value]

  // 当前显示的文本长度
  const currentLength = typingText.value.length

  // 如果正在删除文本
  if (isDeleting.value) {
    // 删除一个字符
    typingText.value = fullText.substring(0, currentLength - 1)

    // 如果已经删除完毕，随机切换到下一个文本并开始打字
    if (typingText.value === '') {
      isDeleting.value = false
      // 生成与当前不同的随机索引
      let newIndex
      do
        newIndex = Math.floor(Math.random() * texts.length)
      while (newIndex === currentTextIndex.value && texts.length > 1)

      currentTextIndex.value = newIndex
      timer = setTimeout(typeEffect, 500) // 删除完后停顿一下
    }
    else {
      // 继续删除
      timer = setTimeout(typeEffect, 50)
    }
  }
  // 如果正在打字
  else {
    // 添加一个字符
    typingText.value = fullText.substring(0, currentLength + 1)

    // 如果已经打字完毕，停顿一下然后开始删除
    if (typingText.value === fullText) {
      timer = setTimeout(() => {
        isDeleting.value = true
        typeEffect()
      }, 3000) // 打字完后停顿3秒
    }
    else {
      // 继续打字
      timer = setTimeout(typeEffect, 150)
    }
  }
}

onMounted(() => {
  // 启动打字机效果
  timer = setTimeout(typeEffect, 500)
})

onBeforeUnmount(() => {
  // 清除定时器，防止内存泄漏
  if (timer)
    clearTimeout(timer)
})
</script>

<template>
  <Layout>
    <template #home-hero-after>
      <div class="custom-nav-component">
        <div
          class="typing-text"
          :title="texts[currentTextIndex]"
          @mouseenter="handleMouseEnter"
          @mouseleave="handleMouseLeave"
        >
          {{ typingText }}<span class="cursor" />
        </div>
      </div>
    </template>
  </Layout>
</template>

<style>
.custom-nav-component {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 8px;
}

.typing-text {
  color: var(--vp-c-text-code);
  font-weight: 500;
  font-size: 14px;
  font-family: var(--vp-font-family-base);
  padding: 0 8px;
  position: relative;
  min-width: 80px; /* 防止文本变化导致宽度变化 */
  transition: color 0.5s;
  cursor: pointer;
}

.cursor {
  display: inline-block;
  width: 2px;
  height: 1em;
  background-color: var(--vp-c-brand);
  margin-left: 2px;
  animation: cursor-blink 1s infinite;
  vertical-align: middle;
  transition: background-color 0.5s;
}

@keyframes cursor-blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}
</style>
