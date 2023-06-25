<template>
  <a-card class="w-full" style="padding: 0 8px">
    <ul>
      <li
        v-for="(nav, i) in data"
        :key="i"
        :class="i == 2 ? 'text-text_active bg-bgc_shallow_active' : 'text-text_gray'"
        class="flex justify-between items-center h-12 py-4 px-4 rounded-sm"
      >
        <slot name="left_icon"><bars-outlined /></slot>
        <span class="text-base"
          ><slot name="title" :data="nav">{{ nav.title }}</slot></span
        >
        <slot name="right_icon"><right-outlined /></slot>
      </li>
    </ul>
  </a-card>
</template>
<script lang="ts" setup>
import { BarsOutlined, RightOutlined } from "@ant-design/icons-vue"
type NavCardData = {
  title: string
  path: string
}
interface NavCardProps {
  data: Array<NavCardData>
}

const { data } = withDefaults(defineProps<NavCardProps>(), {
  data: () => [{ title: "title", path: "paths" }]
})
</script>
<style lang="scss">
.ant-card-body {
  padding: 10px !important;
}
</style>
