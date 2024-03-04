/*
 * @Author: please
 * @Date: 2024-02-29 17:55:03
 * @LastEditors: please
 * @LastEditTime: 2024-03-04 15:24:59
 * @Description: 请填写简介
 */
import { RouteRecordRaw } from 'vue-router'

const developRoutes: RouteRecordRaw = {
  path: '/develop',
  name: 'develop',
  redirect: '/develop/getting-started',
  component: () => import('@/views/develop/getting-started.md'),
  children: [
    {
      path: 'getting-started',
      component: () => import('@/views/develop/getting-started.md')
    }
  ]
}

export default developRoutes
