import { useAuthStore } from "@/store"
import { RouteRecordRaw } from "vue-router"

const routers: Array<RouteRecordRaw> = [
  {
    path: "/order",
    name: "Order",
    meta: {
      title: "订单模块"
    },
    children: [
      {
        path: "/order/list",
        name: "OrderList",
        component: () => import("@/views/order/list/index.vue"),
        meta: {
          title: "订单列表",
          role: ["user"],
          keepLive: true
        }
      }
    ]
  }
]
export default routers
