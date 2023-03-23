<template>
  <div style="padding: 10px">
    <div class="header-control-warp">
      <n-space
        :justify="themeStore.layout.mode == EnumThemeLayoutMode.horizontal ? 'space-between' : 'end'"
        align="center"
      >
        <Menu v-if="themeStore.layout.mode == EnumThemeLayoutMode.horizontal"></Menu>

        <n-space>
          <n-avatar
            round
            :style="{
              color: '#cde3e8',
              backgroundColor: themeStore.primaryThemeColor
            }"
          >
            M
          </n-avatar>
          <n-icon size="30" :color="themeStore.primaryThemeColor">
            <Apps></Apps>
          </n-icon>
        </n-space>
      </n-space>
    </div>
    <breadcrumb></breadcrumb>
    <TagView />
  </div>
</template>

<script lang="ts" setup>
import { useThemeStore } from "@/store"
import { EnumThemeLayoutMode } from "@/enum"
import { Apps, ChevronForward } from "@vicons/ionicons5"
import { Component } from "vue"
import { NIcon } from "naive-ui"
function renderIcon(icon: Component) {
  return () => h(NIcon, null, { default: () => h(icon) })
}
const themeStore = useThemeStore()
</script>
