<template>
  <!-- 视频背景 -->
  <video autoplay muted loop id="video-bg">
    <source
      src="@/assets/paper-planes.mp4"
      type="video/mp4">
  </video>
  <HeadLogo />
  <Router-view></Router-view>
</template>

<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HeadLogo from './components/HomePageComponents/HeadLogo.vue'
// import MainComponent from './components/HomePageComponents/MainComponent.vue'

</script>
<style scoped>
video {
  width: 100%;
  height: 100%;
  object-fit: fill;
}
#video-bg {
  width: 100%;
  height: 100%;
  background-color: rgb(141, 130, 130);
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  filter: brightness(0.5);
}
</style>
