/*
 * @Author: please
 * @Date: 2024-02-29 17:55:03
 * @LastEditors: please
 * @LastEditTime: 2024-03-01 11:24:29
 * @Description: 请填写简介
 */
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Snippet from './components/Snippet.vue'
import DocTitle from './components/DocTitle.vue'

// import ColorCard from './components/ColorCard.vue'
// import DocPage from './components/DocPage.vue'

// 加载项目全局样式
import '@/style/main.scss'

// Yike Design UI
// import Icon from '@yike-design/ui/src/components/svg-icon'
// import { YkTitle, YkMessage, YkNotification } from '@yike-design/ui/src'
// import { vLoading } from '@yike-design/ui/src/components/spinner/src/directive'
// import '@yike-design/ui/src/components/styles/index.scss'
// import '@yike-design/ui/src/components/notification/style'
// import '@yike-design/ui/src/components/message/style'
import '@soterea-f2e/so-ui/components/styles/mixins/_animation.scss'
import '@soterea-f2e/so-ui/components/styles/mixins/_color.scss'
import '@soterea-f2e/so-ui/components/styles/mixins/_font.scss'
import '@soterea-f2e/so-ui/components/styles/mixins/_corner.scss'
import '@soterea-f2e/so-ui/components/styles/mixins/_variables.scss'
import TopBar from './components/TopBar.vue'
import SoUI from '@soterea-f2e/so-ui'
import '@soterea-f2e/so-ui/es/style.css'
const app = createApp(App)

app
  // .component(YkTitle.name, YkTitle)
  .component(Snippet.name, Snippet)
  .component(DocTitle.name, DocTitle)
  // .component(ColorCard.name, ColorCard)
  // .use(Icon)
  .component(TopBar.name, TopBar)
  .use(router)
  .use(SoUI)
  .mount('#app')

// app.directive('loading', vLoading)

// app.config.globalProperties.$notification = YkNotification
// app.config.globalProperties.$message = YkMessage
