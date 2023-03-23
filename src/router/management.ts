import { RouteRecordRaw } from "vue-router"
const routers: Array<RouteRecordRaw> = [
  {
    path: "/permission",
    name: "Permission",
    meta: {
      title: "权限模块"
    },
    children: [
      {
        path: "/permission/control",
        name: "Permission",
        component: () => import("@/views/permission/control/index.vue"),
        meta: {
          title: "权限控制",
          role: ["user"],
          keepLive: true
        }
      }
    ]
  }
]
export default routers
