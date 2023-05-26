<template>
  <div class="relative h-16 z-10">
    <header class="fixed w-full flex items-center h-16 l dark:bg-dark_bgc bg-light_bgc left-0 top-0 px-16 lg_pc:px-44">
      <Logo />
      <ul class="flex-1 flex h-full items-center pl-8 font-light text-sm my-0 text-light_text">
        <li class="flex flex-1 items-center h-full mr-8">
          <span v-for="nav in 7" :key="nav" class="w-14 h-full flex justify-center items-center">首页{{ nav }}</span>
        </li>
        <ul class="flex flex-1 items-center justify-end ml-8">
          <li class="ml-4">
            <a-input-search
              v-model:value="searchValue"
              placeholder="input search loading with enterButton"
              loading
              enter-button
            />
          </li>
          <li class="ml-4">
            <a-switch>
              <template #checkedChildren>x</template>
              <template #unCheckedChildren>2</template>
            </a-switch>
          </li>
          <li class="ml-4">
            <FullscreenExitOutlined class="text-2xl" />
          </li>
          <li class="ml-4">
            <GithubOutlined class="text-2xl" />
          </li>
          <li class="ml-4">
            <a-avatar>USER</a-avatar>
          </li>
        </ul>
      </ul>
    </header>
  </div>
</template>
<script setup lang="ts">
import { FullscreenExitOutlined, GithubOutlined } from "@ant-design/icons-vue"
const searchValue = ref<string>("")
</script>
<style lang="scss" scoped></style>
