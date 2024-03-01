/*
 * @Author: please
 * @Date: 2024-02-29 17:55:03
 * @LastEditors: please
 * @LastEditTime: 2024-02-29 18:58:39
 * @Description: 请填写简介
 */
import { RouteRecordRaw } from 'vue-router'

const generalRoutes: Array<RouteRecordRaw> = [
  // {
  //   path: 'color',
  //   component: () => import('@/examples/color/doc.md'),
  // },
  {
    path: 'button',
    component: () => import('@/examples/button/doc.md')
  }
]

export default generalRoutes
