<script setup lang="ts">
</script>

<template>
  <div class="panel mt-[48px]" />
</template>

<style scoped>
.panel {
  padding: 0 24px;
  margin-top: 24px;
}

@media (min-width: 640px) {
  .panel {
    padding: 0 48px;
    margin-top: 32px;
  }
}

@media (min-width: 960px) {
  .panel {
    padding: 0 64px;
    margin-top: 48px;
  }
}

.heart {
  color: red;
  animation: iconAnimate 1.33s ease-in-out infinite
}

@-moz-keyframes iconAnimate {

  0%,
  100% {
    transform: scale(1)
  }

  10%,
  30% {
    transform: scale(.9)
  }

  20%,
  40%,
  60%,
  80% {
    transform: scale(1.1)
  }

  50%,
  70% {
    transform: scale(1.1)
  }
}

@-webkit-keyframes iconAnimate {

  0%,
  100% {
    transform: scale(1)
  }

  10%,
  30% {
    transform: scale(.9)
  }

  20%,
  40%,
  60%,
  80% {
    transform: scale(1.1)
  }

  50%,
  70% {
    transform: scale(1.1)
  }
}

@-o-keyframes iconAnimate {

  0%,
  100% {
    transform: scale(1)
  }

  10%,
  30% {
    transform: scale(.9)
  }

  20%,
  40%,
  60%,
  80% {
    transform: scale(1.1)
  }

  50%,
  70% {
    transform: scale(1.1)
  }
}

@keyframes iconAnimate {

  0%,
  100% {
    transform: scale(1)
  }

  10%,
  30% {
    transform: scale(.9)
  }

  20%,
  40%,
  60%,
  80% {
    transform: scale(1.1)
  }

  50%,
  70% {
    transform: scale(1.1)
  }
}
</style>
