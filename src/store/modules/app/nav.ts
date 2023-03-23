import { localStg } from "@/utils"
import { defineStore } from "pinia"
import { getTagView } from "./helpers"
import router from "@/router"
interface NavState {
  tagView: App.GlobalTabRoute[]
}
export const useNavStore = defineStore("nav-store", {
  state: (): NavState => {
    return {
      tagView: getTagView()
    }
  },
  actions: {
    routerChange(to: App.GlobalTabRoute) {
      console.log("router", router)
      if (to?.meta && to.meta.keepLive) {
        if (this.tagView.map(e => e.name).includes(to.name)) {
          return false
        } else {
          this.tagView.push(to)
          localStg.set("multiTabRoutes", this.tagView)
        }
      }
    },
    deleteTagView(to: App.GlobalTabRoute) {
      if (to.name) {
        const i = this.tagView.findIndex(e => e.name == to.name)
        this.tagView.splice(i, 1)
        localStg.set("multiTabRoutes", this.tagView)
      }
    }
  }
})
