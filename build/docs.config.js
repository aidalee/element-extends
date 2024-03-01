/*
 * @Author: please
 * @Date: 2024-02-29 16:47:13
 * @LastEditors: please
 * @LastEditTime: 2024-02-29 17:01:33
 * @Description: 请填写简介
 */
import baseConfig from './base.config'
import { defineConfig } from 'vite'
import externalGlobals from 'rollup-plugin-external-globals'
import { resolve } from 'path'

export default defineConfig({
  ...baseConfig,
  base: '/so-ui',
  build: {
    outDir: resolve(__dirname, '../examples/dist'),
    chunkSizeWarningLimit: 1500,
    rollupOptions: {
      external: ['highlight.js'],
      plugins: [
        externalGlobals({
          'highlight.js': 'hljs'
        })
      ],
      input: resolve(__dirname, '../examples/index.html'),
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return id
              .toString()
              .split('node_modules/')[1]
              .split('/')[0]
              .toString()
          }
        }
      }
    }
  }
})
