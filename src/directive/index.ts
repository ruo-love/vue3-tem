import type { App } from "vue"
export default function (app: App) {
  app.directive("directive_name", function (el, binding, vnode, oldVnode) {})
}
