<script setup lang="ts">
import type { NavBar } from '@/utils/types'
import { computed, ref } from 'vue'
defineOptions({ name: 'NavBar' })

const props = defineProps({
  data: {
    type: Array<NavBar>,
    required: true
  }
})

const isCollapsed = ref(true)
const navbarClass = computed(() => {
  return {
    'nav-bar': true,
    'nav-bar-show': !isCollapsed.value
  }
})
console.log(props.data, 'data..')
</script>

<template>
  <div :class="navbarClass">
    <div class="nav-bar-toggle" @click="isCollapsed = !isCollapsed">
      <!-- <IconCollapseOutline v-if="!isCollapsed" />
      <IconExpandOutline v-else /> -->
    </div>
    <el-scrollbar>
      <div v-for="navBar of data" :key="navBar.title" class="nav-bar-item">
        <div class="nav-bar-title">
          <el-text>{{ navBar.title }}</el-text>
        </div>
        <router-link
          v-for="item in navBar.list"
          :key="item.src"
          :to="item.src"
          class="nav-bar-list"
        >
          {{ item.name }}
        </router-link>
      </div>
    </el-scrollbar>
  </div>
</template>

<style lang="scss" scoped>
.nav-bar {
  position: sticky;
  top: var(--top-bar-height);
  z-index: 1;

  min-width: var(--nav-bar-width);
  height: calc(100vh - var(--top-bar-height));
  border-right: 1px solid #eee;
  box-sizing: border-box;

  /* stylelint-disable-next-line selector-class-pattern */
  ::v-deep(.so-scrollbar__wrap) {
    padding-bottom: 64px;
  }

  .el-scrollbar {
    padding: 0 16px;
  }

  .router-link-active {
    font-weight: bold;
    color: rgba(43, 90, 237, 1);
    background-color: rgba(43, 90, 237, 0.08);
    border-radius: 5px;
  }
}

.nav-bar-title {
  overflow: hidden;
  // margin-top: @space-xl;
  // padding-left: @space-ss;
  height: 40px;
  line-height: 40px;
  // color: @font-color-l;
}

.nav-bar-list {
  display: block;
  // margin-bottom: @space-ss;
  padding: 0 20px;
  height: 40px;
  line-height: 40px;
  color: rgba(30, 32, 37, 0.7);
  // color: @font-color-m;
  // transition: background-color @animatb;

  &:hover {
    // background-color: @pcolor-1;
  }

  &:last-child {
    margin-bottom: unset;
  }
}

.nav-bar-toggle {
  position: absolute;
  top: 80px;
  left: calc(var(--nav-bar-width) - 1px);

  display: none;
  padding: 6px 12px;
  background: rgba(255 255 255 / 10%);
  /* stylelint-disable-next-line property-no-vendor-prefix */
  -webkit-backdrop-filter: blur(5px);
  backdrop-filter: blur(5px);
}
</style>
