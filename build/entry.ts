/*
 * @Author: please
 * @Date: 2024-02-29 16:47:13
 * @LastEditors: please
 * @LastEditTime: 2024-03-01 18:20:24
 * @Description: 请填写简介
 */
// 入口文件
// 1. 引入已实现的组件批量导出去
import type { App } from 'vue'
import ButtonPlugin from '../packages/so-ui/components/button'
import Button from '../packages/so-ui/components/button'
const version = require('../package.json').version

// 2. 导出这些组件
export { Button }

const installs = [ButtonPlugin]

// 3.导出一个vue插件
export default {
  version,
  install(app: App) {
    installs.forEach(p => app.use(p))
  }
}
