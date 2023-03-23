import { RouteRecordRaw } from "vue-router"

const routers: Array<RouteRecordRaw> = [
  {
    path: "/user",
    name: "User",
    meta: {
      title: "用户模块"
    },
    children: [
      {
        path: "/user/list",
        name: "UserList",
        component: () => import("@/views/user/list/index.vue"),
        meta: {
          title: "用户列表",
          role: ["user"],
          keepLive: true
        }
      }
    ]
  }
]
export default routers
