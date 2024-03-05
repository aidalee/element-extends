<script lang="ts" setup>
defineOptions({
  name: 'TopBar'
})

const navLinks = {
  '/': '指南',
  '/develop': '开发',
  '/module': '组件'
}
</script>

<template>
  <div class="top-bar">
    <router-link class="logo" to="/">
      <span>UI Coms</span>
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
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
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
