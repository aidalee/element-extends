<!--
 * @Author: please
 * @Date: 2024-02-29 17:55:03
 * @LastEditors: please
 * @LastEditTime: 2024-03-04 16:02:50
 * @Description: 请填写简介
-->
<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()
const goPage = (path: string) => router.push({ path })
</script>

<template>
  <div class="main">
    <!-- Logo -->
    <div class="logo-box">
      <p class="slogan">业务组件库封装</p>
    </div>

    <!-- start -->
    <div class="start-btns">
      <so-button type="primary" @click="goPage('develop')">开始使用</so-button>
    </div>
  </div>

  <!-- <div class="footer"></div> -->
</template>

<style lang="scss" scoped>
.main {
  // padding: 128px 40px 0;
  width: 100%;
  height: 100vh;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.logo-box {
  padding: 42px 0;
  font-size: 32px;
  text-align: center;

  .bg-logo {
    position: absolute;
    top: 0;
    left: 50%;
    z-index: -1;
    width: 380px;
    height: 220px;
    // color: $bg-color-m;
    transform: translateX(-50%);
    // transition: color $animats;
  }

  .logo {
    display: flex;
    justify-content: center;
    gap: 72px;
    padding: 32px 0;
    transition: all 0.2s;
  }

  .slogan {
    font-size: 16px;
    font-weight: 500;
  }
}

.start-btns {
  // display: flex;
  // justify-content: center;
  // align-items: center;
  margin-top: 32px;
  width: 200px;
}

.footer {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 220px;
}
</style>
