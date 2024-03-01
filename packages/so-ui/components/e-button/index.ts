import type { App } from 'vue'
import EButton from './e-button.vue'

EButton.install = function (app: App) {
  app.component(EButton.name as string, EButton)
}

export const _EButtonComponent = EButton

export default EButton
