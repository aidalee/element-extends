/*
 * @Author: please
 * @Date: 2024-02-29 14:47:03
 * @LastEditors: please
 * @LastEditTime: 2024-02-29 15:48:52
 * @Description: 请填写简介
 */
/// <reference types="vitest" />
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  test: {
    // jest like test apis
    globals: true,
    // 模拟dom环境
    environment: 'happy-dom',
    // 支持tsx
    transformMode: {
      web: [/.[tj]sx$/]
    },
    coverage: {
      provider: 'istanbul', // or 'c8'
      reporter: ['text', 'json', 'html']
    }
  },
  esbuild: {
    jsxFactory: 'h',
    jsxFragment: 'Fragment',
    jsxInject: "import { h } from 'vue';"
  }
})
