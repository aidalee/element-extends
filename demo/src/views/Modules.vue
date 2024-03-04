<!--
 * @Author: please
 * @Date: 2024-02-29 17:55:03
 * @LastEditors: please
 * @LastEditTime: 2024-03-04 15:51:22
 * @Description: 请填写简介
-->
<script setup lang="ts">
import { ref, computed, provide } from 'vue'
import { useRoute } from 'vue-router'
import type { NavBar } from '@/utils/types'

const route = useRoute()
const navs = computed(() => (route.meta.navs as NavBar[]) || [])
const hasNavBar = ref(navs.value.length > 0)
console.log(navs, 'navs')
provide('hasNavBar', hasNavBar)
</script>

<template>
  <!-- If there is no NavBar, the content is centered horizontally -->
  <div class="module" :class="{ center: !hasNavBar }">
    <nav-bar :data="navs" />
    <router-view />
  </div>
</template>

<style scoped>
.module {
  position: relative;
  display: flex;
  padding-top: var(--top-bar-height);
}

.center {
  justify-content: center;
}
</style>
