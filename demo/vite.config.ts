/*
 * @Author: please
 * @Date: 2024-02-29 17:55:27
 * @LastEditors: please
 * @LastEditTime: 2024-03-01 09:41:49
 * @Description: 请填写简介
 */
import { defineConfig } from 'vite'
import createVuePlugin from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
// import vitePluginMarkdown from './plugins/vite-plugin-md'
import Components from 'unplugin-vue-components/vite'
// import Resolver from './plugins/resolver'
import vitePluginMarkdown from './plugins/vite-plugin-md.ts'
import { join } from 'path'

export default defineConfig({
  resolve: {
    alias: {
      '@': join(process.cwd(), './src'),
      '@soterea-f2e/so-ui': join(process.cwd(), '../packages/so-ui')
    }
  },
  plugins: [
    vitePluginMarkdown(),
    createVuePlugin({
      include: [/\.(vue|md)$/], // 配置可编译 .vue 与 .md 文件

      script: {
        defineModel: true
      }
    }),
    vueJsx()
    // Components({
    //   dirs: [
    //     './src/components',
    //     './src/views',
    //     '@soterea-f2e/so-ui/components'
    //   ],
    //   resolvers: [Resolver]
    // })
  ],
  css: {
    // css预处理器
    preprocessorOptions: {
      scss: {
        charset: false
        // additionalData:
        //   '@import (reference) "@yike-design/ui/src/components/styles/index.scss";'
      }
    }
  },
  build: {
    rollupOptions: {
      external: ['env.d.ts']
    }
  },
  base: '/'
})
