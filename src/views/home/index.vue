<template>
  <a-card
    style="width: 100%"
    title="Card title"
    :tab-list="tabList"
    :active-tab-key="key"
    class="h-screen"
    @tabChange="key => onTabChange(key, 'key')"
  >
    <template #customTab="item">
      <span v-if="item.key === 'tab1'">
        <home-outlined />
        {{ item.key }}
      </span>
    </template>
    <template #extra>
      <a href="#">More</a>
    </template>
    {{ contentList[key] }}
  </a-card>
  <NavCard class="w-1/4 h-32"/>
</template>
<script lang="ts">
import { HomeOutlined } from "@ant-design/icons-vue"
import { defineComponent, ref } from "vue"
export default defineComponent({
  components: {
    HomeOutlined
  },
  setup() {
    const tabList = [
      {
        key: "tab1",
        tab: "tab1"
      },
      {
        key: "tab2",
        tab: "tab2"
      }
    ]
    const contentList = {
      tab1: "content1",
      tab2: "content2"
    }
    const tabListNoTitle = [
      {
        key: "article",
        tab: "article"
      },
      {
        key: "app",
        tab: "app"
      },
      {
        key: "project",
        tab: "project"
      }
    ]
    const key = ref("tab1")
    const noTitleKey = ref("app")

    const onTabChange = (value: string, type: string) => {
      console.log(value, type)
      if (type === "key") {
        key.value = value
      } else if (type === "noTitleKey") {
        noTitleKey.value = value
      }
    }

    return {
      tabList,
      contentList,
      tabListNoTitle,
      key,
      noTitleKey,
      onTabChange
    }
  }
})
</script>

<style lang="scss" scoped></style>
