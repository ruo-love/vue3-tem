<template>
  <n-menu
    v-model:value="activeKey"
    :collapsed="collapsed"
    :collapsed-width="64"
    :collapsed-icon-size="22"
    :options="menuOptions"
    :mode="mode"
  />
</template>
<script setup lang="ts">
import { h, ref, Component } from "vue"
import { NIcon } from "naive-ui"
import type { MenuOption } from "naive-ui"
import { BookOutline as BookIcon, PersonOutline as PersonIcon, WineOutline as WineIcon } from "@vicons/ionicons5"
import roterLists from "@/router/mergeRouter"
import { RouteRecordRaw, RouterLink } from "vue-router"
const route = useRoute()

interface Props {
  mode: "vertical" | "horizontal"
  collapsed: boolean
}
const { mode } = withDefaults(defineProps<Props>(), {
  mode: "horizontal",
  collapsed: false
})
const menuOptions: MenuOption[] = filterMenu(roterLists)
const activeKey = computed(()=>route.path)

function renderIcon(icon: Component) {
  return () => h(NIcon, null, { default: () => h(icon) })
}
function filterMenu(routers: RouteRecordRaw[]): MenuOption[] {
  return routers.map(e => {
    const menuItem: MenuOption = {
      label: () =>
        h(
          RouterLink,
          {
            to:e.component? e.path:''
          },
          {
            default: () => e?.meta?.title
          }
        ),
      key: e.path,
      icon: renderIcon(BookIcon)
    }
    if (e.children) {
      menuItem.children = filterMenu(e.children)
    }
    return menuItem
  })
}
</script>
<style lang="scss" scoped></style>
