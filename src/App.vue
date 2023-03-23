<template>
  <n-config-provider
    :theme="theme.naiveTheme"
    :theme-overrides="theme.naiveThemeOverrides"
    :locale="zhCN"
    :date-locale="dateZhCN"
    ><n-watermark
      content="ZR admin template"
      cross
      fullscreen
      :font-size="16"
      :line-height="16"
      :width="384"
      :height="384"
      :x-offset="12"
      :y-offset="60"
      :rotate="-15"
    />

    <router-view />
  </n-config-provider>
</template>

<script setup lang="ts">
import { dateZhCN, zhCN } from "naive-ui"
import { useThemeStore, useAuthStore } from "@/store"
const theme = useThemeStore()
console.log(import.meta.env)

</script>

<style scoped>
#app,
.n-config-provider {
  height: 100%;
}
</style>
