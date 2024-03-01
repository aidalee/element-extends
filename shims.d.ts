/*
 * @Author: please
 * @Date: 2024-02-29 14:48:56
 * @LastEditors: please
 * @LastEditTime: 2024-02-29 14:48:58
 * @Description: 请填写简介
 */
declare module '*.vue' {
  import type { ComponentOptions } from 'vue'
  const Component: ComponentOptions
  export default Component
}

declare module '*.md' {
  import type { ComponentOptions } from 'vue'
  const Component: ComponentOptions
  export default Component
}

interface ImportMetaEnv {
  readonly VITE_API_TIMEOUT: number
  readonly VITE_MOCKUP: boolean
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
