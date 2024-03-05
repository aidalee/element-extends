import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import navs from '@/router/config/components.json'

import generalRoutes from './modules/general'

const compModelRoute: RouteRecordRaw = {
  path: '/module',
  name: 'module',
  redirect: '/module/button',
  component: () => import('@/views/Modules.vue'),
  children: [...generalRoutes],
  meta: {
    navs
  }
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'getting-started',
      component: () => import('@/views/develop/getting-started.md')
    },
    {
      path: '/develop',
      name: 'develop',
      component: () => import('@/views/develop/develop.md')
    },
    compModelRoute,
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: () => import('@/views/NotFound.vue')
    }
  ]
})

router.afterEach(() => {
  window.scrollTo({ top: 0, behavior: 'instant' })
})

export default router
