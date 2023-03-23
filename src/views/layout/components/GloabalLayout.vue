<template>
  <div class="layout-container h-full" style="position: relative">
    <n-layout position="absolute" has-sider>
      <n-layout-sider
        v-if="store.layout.mode == EnumThemeLayoutMode.vertical"
        :native-scrollbar="false"
        bordered
        content-style="padding: 24px;"
      >
        <global-layout-asider></global-layout-asider>
      </n-layout-sider>
      <n-layout>
        <n-layout-header style="height: 110px" bordered>
          <GlobalLayoutHeader></GlobalLayoutHeader>
        </n-layout-header>
        <n-layout-content
          content-style="padding:8px;"
          :native-scrollbar="false"
          position="absolute"
          style="top: 110px; bottom: 0"
          bordered
        >
          <gloabal-layout-content></gloabal-layout-content>
        </n-layout-content>
      </n-layout>
    </n-layout>
  </div>
</template>
<script setup lang="ts">
import { EnumThemeLayoutMode } from "@/enum"
import { useThemeStore } from "@/store"
import GloabalLayoutContent from "./GloabalLayoutContent.vue"
import GlobalLayoutHeader from "./GlobalLayoutHeader.vue"
import GlobalLayoutAsider from "./GlobalLayoutAsider.vue"

const store = useThemeStore()
</script>
<style lang="scss" scoped></style>
