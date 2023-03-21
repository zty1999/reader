
import { defineStore } from 'pinia'
import { store } from "@/store";
// 你可以对 `defineStore()` 的返回值进行任意命名，但最好使用 store 的名字，同时以 `use` 开头且以 `Store` 结尾。(比如 `useUserStore`，`useCartStore`，`useProductStore`)
// 第一个参数是你的应用中 Store 的唯一 ID，Pinia 将用它来连接 store 和 devtools。
// 第二个参数可接受两类值：Setup 函数或 Option 对象
export const useAppStore = defineStore('app', {
  // 其他配置...
  // 开启持久化存储
  persist: true,
  state: () => ({
    device: 'pc',
  }),
  actions: {
  
  },
})

export function useAppStoreHook() {
  return useAppStore(store);
}
