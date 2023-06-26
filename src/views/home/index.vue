<template>
  <h1 @click="login">home</h1>
</template>

<script setup>
import { getList } from "@/servers/getList"

const login = async () => {
  getList()
}
</script>
<style lang="scss" scoped></style>
