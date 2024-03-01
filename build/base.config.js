/*
 * @Author: please
 * @Date: 2024-02-29 16:47:13
 * @LastEditors: please
 * @LastEditTime: 2024-02-29 16:47:19
 * @Description: 请填写简介
 */
import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import Markdown from 'vite-plugin-md'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    Vue({
      include: [/\.vue$/, /\.md$/]
    }),
    vueJsx(),
    Markdown()
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, '../examples'),
      '~': resolve(__dirname, '../packages')
    }
  }
})
