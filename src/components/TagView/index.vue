<template>
  <n-space style="margin-bottom: 10px">
    <n-tag
      style="cursor: pointer"
      v-for="tagItem in navStore.tagView"
      :bordered="false"
      size="small"
      closable
      @click="router.push(tagItem.path)"
      :type="isCurrent(tagItem.name) ? 'primary' : undefined"
      :on-close="e => navStore.deleteTagView(tagItem)"
    >
      {{ tagItem.meta.title }}
    </n-tag>
  </n-space>
</template>
<script setup lang="ts">
import { useNavStore } from "@/store"
const navStore = useNavStore()
const route = useRoute()
const router = useRouter()
const isCurrent = computed((name: string) => name => route.name == name)
</script>
<style lang="scss"></style>
