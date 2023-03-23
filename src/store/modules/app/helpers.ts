import { localStg } from "@/utils"
import { RouteLocationNormalized } from "vue-router"

export const getTagView = (): App.GlobalTabRoute[] => {
  return localStg.get("multiTabRoutes") || []
}
