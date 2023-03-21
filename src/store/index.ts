import { App } from 'vue'
import { defineStore, createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
const store = createPinia()


// config pinia
// 配置状态管理库
export function setupStore(app: App<Element>) {

  store.use(piniaPluginPersistedstate)
  app.use(store)
}

export { store };