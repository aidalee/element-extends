<!--
 * @Author: please
 * @Date: 2024-03-01 10:25:21
 * @LastEditors: please
 * @LastEditTime: 2024-03-01 10:34:55
 * @Description: 请填写简介
-->
<template>
  <component :is="`h${level}`">
    <slot></slot>
  </component>
</template>

<script setup lang="ts">
defineProps({
  level: {
    type: Number,
    required: true,
    default: 1
  }
})

defineOptions({ name: 'DocTitle' })
</script>
