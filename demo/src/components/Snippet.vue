<script setup lang="ts">
import { ref, getCurrentInstance } from 'vue'
import { useClipboard } from '@vueuse/core'
import { getHighlighter } from 'shikiji'
import { CopyDocument, View } from '@element-plus/icons-vue'
defineOptions({ name: 'SoSnippet' })

const { copy } = useClipboard()
const proxy: any = getCurrentInstance()?.proxy
const props = defineProps({
  title: {
    type: String,
    default: '标题'
  },
  code: {
    type: String,
    default: ''
  }
})

const { title, code } = props
const normalizeTitle = title.replace(/\s+/g, '-')
const originCode = decodeURIComponent(code)
const showCode = ref(false)
const html = ref('')

const shiki = getHighlighter({
  themes: ['vitesse-light', 'vitesse-dark'],
  langs: ['vue']
})

shiki.then(highlighter => {
  html.value = highlighter.codeToHtml(originCode, {
    lang: 'vue',
    themes: {
      dark: 'vitesse-dark',
      light: 'vitesse-light'
    }
  })
})

function onCopy() {
  copy(originCode)
  proxy.$message({
    message: '复制成功',
    type: 'success',
    duration: 1000
  })
}
</script>

<!-- eslint-disable vue/no-v-html -->
<template>
  <doc-title :id="normalizeTitle" :level="3">{{ title }}</doc-title>
  <slot name="desc"></slot>
  <div class="demo-block">
    <slot name="demo"></slot>
  </div>
  <el-space class="flex-end" :size="8">
    <div class="icon" @click="onCopy">
      <el-icon><CopyDocument /></el-icon>
    </div>
    <div
      class="icon"
      :class="{ active: showCode }"
      @click="showCode = !showCode"
    >
      <el-icon><View /></el-icon>
    </div>
  </el-space>

  <div v-show="showCode" v-html="html"></div>
</template>

<style scoped lang="scss">
.so-title {
  &:hover::after {
    opacity: 1;
  }

  &::after {
    content: '#';
    margin-left: 12px;
    opacity: 0;
    vertical-align: bottom;
    transition: opacity 0.2s;
  }
}

.demo-block {
  margin: 12px 0 8px;
  padding: 20px;
  border: 1px solid #eee;
  border-radius: 10px;
}

.flex-end {
  display: flex;
  justify-content: flex-end;

  .icon {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 28px;
    height: 28px;
    border-radius: 10;
    color: #1e2025;
    background-color: #f8f8f8;
    cursor: pointer;

    &:hover {
    }
  }

  .active {
  }
}
</style>
