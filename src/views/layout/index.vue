<template>
  <GloabalLayout></GloabalLayout>

  <SettingButton></SettingButton>
</template>

<script setup lang="ts">
import GloabalLayout from "./components/GloabalLayout.vue"
import SettingButton from "./components/SettingButton.vue"
</script>

<style lang="scss" scoped>
.ant-layout {
  height: 100%;
}
</style>
