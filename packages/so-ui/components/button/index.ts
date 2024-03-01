/*
 * @Author: please
 * @Date: 2024-02-29 13:44:18
 * @LastEditors: please
 * @LastEditTime: 2024-03-01 17:10:56
 * @Description: 请填写简介
 */
import type { App } from 'vue'
import Button from './button'

// Button.install = function (app: App) {
//   app.component(Button.name, Button)
// }

// export const _ButtonComponent = Button

// export default Button

// 具名导出
export { Button }

// 导出插件
export default {
  install(app: App) {
    app.component(Button.name, Button)
  }
}
