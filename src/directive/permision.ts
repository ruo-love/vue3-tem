import { useAuthStore } from "@/store"

export const permision = {
  mounted(el, binding, vnode, prevVnode) {
    const authStore = useAuthStore()
    if (!(authStore?.userInfo?.roles || []).includes(binding.value)) {
      el.parentNode.removeChild(el)
    }
  }
}
