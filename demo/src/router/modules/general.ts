/*
 * @Author: please
 * @Date: 2024-02-29 17:55:03
 * @LastEditors: please
 * @LastEditTime: 2024-03-04 14:51:15
 * @Description: 请填写简介
 */
import { RouteRecordRaw } from 'vue-router'

const generalRoutes: Array<RouteRecordRaw> = [
  {
    path: 'button',
    component: () => import('@/examples/button/doc.md')
  }
]

export default generalRoutes
