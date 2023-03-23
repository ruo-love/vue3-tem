<template>
  <n-space vertical>
    <n-layout has-sider>
      <n-layout-sider
        bordered
        collapse-mode="width"
        :collapsed-width="64"
        :width="240"
        :collapsed="collapsed"
        show-trigger
        @collapse="collapsed = true"
        @expand="collapsed = false"
      >
      <Menu mode="vertical" :collapsed="collapsed"/>
      </n-layout-sider>
    </n-layout>
  </n-space>
</template>

<script lang="ts" setup>
import Menu from '@/components/Menu/index.vue'
const collapsed = ref(false)
</script>
