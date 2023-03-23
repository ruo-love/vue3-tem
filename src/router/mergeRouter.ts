import { RouteRecordRaw } from "vue-router"
const files = import.meta.glob<true, string, any>("./*", { eager: true })

const routerList: Array<RouteRecordRaw> = []
for (const key in files) {
  if (key != "./index.ts" && Object.hasOwnProperty.call(files, key)) {
    if (files[key].default) {
      routerList.push(...files[key].default)
    }
  }
}

export default routerList
