<template>
  <n-breadcrumb>
    <n-breadcrumb-item v-for="bread in breadCrumb"> <n-icon /> {{ bread.name }}</n-breadcrumb-item>
  </n-breadcrumb>
</template>
<script setup lang="ts">
const route = useRoute()
const breadCrumb = computed(() => route.matched.filter(e => e.name).map(e => ({ name: e.name, path: e.path })))
</script>
<style lang="scss" scoped></style>
