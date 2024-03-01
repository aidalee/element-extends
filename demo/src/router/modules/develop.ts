/*
 * @Author: please
 * @Date: 2024-02-29 17:55:03
 * @LastEditors: please
 * @LastEditTime: 2024-02-29 18:41:00
 * @Description: 请填写简介
 */
import { RouteRecordRaw } from 'vue-router'
import navs from '@/router/config/develops.json'

const developRoutes: RouteRecordRaw = {
  path: '/develop',
  name: 'develop',
  redirect: '/develop/yike-dev',
  component: () => import('@/views/Modules.vue'),
  children: [
    {
      path: 'yike-dev',
      component: () => import('@/views/develop/yike-dev.md')
    },
    {
      path: 'dark',
      component: () => import('@/views/develop/dark-model.md')
    },
    {
      path: 'theme',
      component: () => import('@/views/develop/theme.md')
    },
    {
      path: 'getting-started',
      component: () => import('@/views/develop/getting-started.md')
    }
  ],
  meta: {
    navs
  }
}

export default developRoutes
