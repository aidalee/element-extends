/*
 * @Author: please
 * @Date: 2024-02-29 17:55:03
 * @LastEditors: please
 * @LastEditTime: 2024-03-04 16:36:56
 * @Description: 请填写简介
 */
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Snippet from './components/Snippet.vue'
import DocTitle from './components/DocTitle.vue'

// 加载项目全局样式
import '@/style/main.scss'

import '@soterea-f2e/so-ui/components/styles/mixins/_animation.scss'
import '@soterea-f2e/so-ui/components/styles/mixins/_color.scss'
import '@soterea-f2e/so-ui/components/styles/mixins/_font.scss'
import '@soterea-f2e/so-ui/components/styles/mixins/_corner.scss'
import '@soterea-f2e/so-ui/components/styles/mixins/_variables.scss'
import TopBar from './components/TopBar.vue'
import NavBar from './components/NavBar.vue'
import SoUI from '@soterea-f2e/so-ui'
import '@soterea-f2e/so-ui/es/style.css'
import 'element-plus/dist/index.css'
import { ElScrollbar, ElSpace, ElIcon, ElText } from 'element-plus'
const app = createApp(App)

app
  .component(Snippet.name, Snippet)
  .component(DocTitle.name, DocTitle)
  .component(TopBar.name, TopBar)
  .component(NavBar.name, NavBar)
  .use(router)
  .use(ElScrollbar)
  .use(ElSpace)
  .use(ElIcon)
  .use(ElText)
  .use(SoUI)
  .mount('#app')
