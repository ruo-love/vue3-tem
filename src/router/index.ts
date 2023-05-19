import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router"
import NProgress from "nprogress"
import { useAuthStore } from "@/store"
import routerList from "./mergeRouter"
import { useNavStore } from "@/store/modules/app"

NProgress.configure({
  easing: "ease", // 动画方式
  speed: 500, // 递增进度条的速度
  showSpinner: true, // 是否显示加载ico
  trickleSpeed: 600, // 自动递增间隔
  minimum: 0.3, // 更改启动时使用的最小百分比
  parent: "body" //指定进度条的父容器
})
export const routes: RouteRecordRaw[] = [
  {
    path: "/",
    component: () => import("@/views/layout/index.vue"),
    redirect: "/home",
    children: [
      // ...routerList,
      {
        path: "/home",
        name: "首页",
        component: () => import("@/views/home/index.vue"),
        children: []
      },
      {
        path: "/about",
        name: "关于",
        component: () => import("@/views/about/index.vue")
      }
    ]
  },

  {
    path: "/:pathMatch(.*)",
    redirect: "/404"
  },
  {
    path: "/404",
    component: () => import(/* webpackChunkName: "about" */ "@/views/404/index.vue")
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  const navStore = useNavStore()
  const auth = useAuthStore()
  if (!NProgress.isStarted()) {
    NProgress.start()
  }
  if (auth.token) {
    if (to.path == "/login") {
      next({ path: "/home" })
    } else {
      next()
    }
    navStore.routerChange(to)
    // routerChange
  } else {
    if (to.path == "/login") {
      next()
    } else {
      next({ path: "/login" })
    }
  }
})
router.afterEach((to, from) => {
  NProgress.done()
})
export default router
