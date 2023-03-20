import {
  createRouter,
  createWebHistory,
  createWebHashHistory,
  RouteRecordRaw
} from 'vue-router';


import { App } from 'vue';

// // import.meta.globEager() 直接引入所有的模块 Vite 独有的功能
// const modules = import.meta.glob('./modules/**/*.ts', { eager: true });
// const routeModuleList: AppRouteModule[] = [];

// // 加入到路由集合中
// Object.keys(modules).forEach((key) => {
//   const mod = (modules[key] as any).default || {};
//   const modList = Array.isArray(mod) ? [...mod] : [mod];
//   routeModuleList.push(...modList);
// });

// export const asyncRoutes = [...routeModuleList];

// 根路由
const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/main',
  },
  {
    path: '/main',
    name: 'Main',
    redirect: '/home',
    component: () => import('@/views/Main.vue'),
    meta: {

    },
    children: [
      {
        path: '/home',
        name: 'Home',
        component: () => import('@/views/home/home.vue'),
        meta: {
          title: '首页'
        },
      },
    ]
  },

]


// app router
// 创建一个可以被 Vue 应用程序使用的路由实例
export const router = createRouter({
  // 创建一个 hash 历史记录。
  // history: createWebHashHistory(import.meta.env.VITE_PUBLIC_PATH),
  history: createWebHistory(import.meta.env.VITE_PUBLIC_PATH),
  // 应该添加到路由的初始路由列表。
  // routes: basicRoutes as unknown as RouteRecordRaw[],
  routes,
  // 是否应该禁止尾部斜杠。默认为假
  strict: true,
  scrollBehavior: () => ({ left: 0, top: 0 })
});



// config router
// 配置路由器
export function setupRouter(app: App<Element>) {
  app.use(router);
}
