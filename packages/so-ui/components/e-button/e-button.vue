<template>
  <el-button>ddddddd</el-button>
</template>

<script lang="ts">
import { ElButton } from 'element-plus'
import 'element-plus/es/components/button/style/css'
import { defineComponent, watch, ref, nextTick, computed, toRefs } from 'vue'
import type { Ref } from 'vue'
// import { props } from './props'

export default defineComponent({
  name: 'EButton',
  components: { ElButton },
  // props,
  emits: ['click'],
  setup(props, ctx) {
    return {}
  }
})
</script>

<style lang="scss">
@import './e-button.scss';
</style>
