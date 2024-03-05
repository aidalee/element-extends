import { RouteRecordRaw } from 'vue-router'

const generalRoutes: Array<RouteRecordRaw> = [
  {
    path: 'button',
    component: () => import('@/examples/button/doc.md')
  }
]

export default generalRoutes
