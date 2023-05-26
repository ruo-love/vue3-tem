<template>
  <div class="content flex-1 mx-4">
    <a-card style="width: 100%" :tab-list="tabList" :active-tab-key="key" @tabChange="onTabChange">
      <template #title>
        <Logo />
      </template>
      <template #customTab="item">
        <span v-if="item.key === 'tab1'">
          <home-outlined />
          {{ item.key }}
        </span>
      </template>
      <template #extra>
        <a href="#"><undo-outlined /></a>
      </template>
      <ArticleCard v-for="item in 20" />
    </a-card>
  </div>
</template>
<script lang="ts" setup>
import { HomeOutlined, UndoOutlined } from "@ant-design/icons-vue"
const tabList = ref([
  {
    key: "tab1",
    tab: "tab1"
  },
  {
    key: "tab2",
    tab: "tab2"
  }
])
const contentList = ref({
  tab1: "content1",
  tab2: "content2"
})
const key = ref("tab1")

const onTabChange = (value: string) => {
  key.value = value
}
</script>

<style lang="scss" scoped></style>
