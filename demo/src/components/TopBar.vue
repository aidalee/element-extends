<!--
 * @Author: please
 * @Date: 2024-02-29 17:55:03
 * @LastEditors: please
 * @LastEditTime: 2024-03-04 16:45:08
 * @Description: 请填写简介
-->
<script lang="ts" setup>
defineOptions({
  name: 'TopBar'
})

const navLinks = {
  '/develop': '指南',
  '/module': '组件'
}
const isDev = import.meta.env.DEV
</script>

<template>
  <div class="top-bar">
    <router-link class="logo" to="/">
      <span>Element extends</span>
    </router-link>
    <div class="nav-links">
      <router-link
        v-for="(link, path) in navLinks"
        :key="path"
        :to="path"
        class="nav-item"
      >
        {{ link }}
      </router-link>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.top-bar {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;

  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  height: var(--top-bar-height);
  background: #fff;
  border-bottom: 1px solid #eee;

  a {
    display: flex;
    align-items: center;
    color: inherit;
  }

  .router-link-active {
    font-weight: 600;
    // color: @pcolor;
  }
}

.logo {
  display: flex;
  justify-content: center;
  cursor: pointer;

  img {
    width: 36px;
    height: 28px;
  }

  .name {
    margin: 2px 10px 0;
    width: auto;
    height: 18px;
    // color: @font-color-l !important;
  }
}
.nav-links {
  display: flex;
}
.nav-item {
  padding: 5px 8px;
  border-radius: 4px;
  text-decoration: none;
  // color: @font-color-l;
  cursor: pointer;

  .nav-item:hover {
    font-weight: 500;
  }
}
</style>
