<template>
  <div class="flex mt-6">
    <div class="w-1/6 hidden md_pc:block">
      <NavCard class="top-16" style="position: sticky" :data="asideNav"> </NavCard>
    </div>
    <router-view></router-view>
    <div class="right w-1/4 sticky top-24 hidden min_pc:block bg-light_bgc">
      <UserInfoCard />
      <div :style="{ width: '300px', borderRadius: '4px' }">
        <a-calendar v-model:value="value" :fullscreen="false" @panelChange="onPanelChange" />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
const asideNav = ref([
  { title: "关注", path: "paths" },
  { title: "综合", path: "paths" },
  { title: "前端", path: "paths" },
  { title: "后段", path: "paths" },
  { title: "Flutter", path: "paths" }
])
</script>
<style lang="scss" scoped></style>
