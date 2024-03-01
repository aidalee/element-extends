/*
 * @Author: please
 * @Date: 2024-03-01 15:33:37
 * @LastEditors: please
 * @LastEditTime: 2024-03-01 15:35:36
 * @Description: 请填写简介
 */
import type { App } from 'vue'
import EButton from './e-button.vue'

EButton.install = function (app: App) {
  app.component(EButton.name as string, EButton)
}

export const _EButtonComponent = EButton

export default EButton
