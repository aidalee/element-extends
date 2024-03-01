import { getCurrentInstance } from 'vue'
// import { extend } from '../utils'
export const extend = Object.assign
// expose public api
export function useExpose<T = Record<string, any>>(apis: T) {
  const instance = getCurrentInstance()
  if (instance) {
    extend(instance.proxy, apis)
  }
}
