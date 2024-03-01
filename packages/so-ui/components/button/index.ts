import type { App } from 'vue'
import Button from './button'

Button.install = function (app: App) {
  app.component(Button.name as string, Button)
}

export const _FabComponent = Button

export default Button
