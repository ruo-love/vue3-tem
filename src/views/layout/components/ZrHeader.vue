<template>
  <div class="relative h-12">
    <header class="fixed w-full flex items-center h-12 l dark:bg-dark_bgc bg-light_bgc left-0 top-0 px-16">
      <Logo />
      <ul class="flex-1 flex items-center pl-8 font-light text-xs my-0">
        <li class="flex flex-1 justify-between mr-8">
          <a v-for="nav in 7" :key="nav">首页{{ nav }}</a>
        </li>
        <ul class="flex flex-1 items-center justify-between ml-8">
          <li>
            <a-input-search
              v-model:value="searchValue"
              placeholder="input search loading with enterButton"
              loading
              enter-button
            />
          </li>
          <li>
             <!-- <a-switch>
      <template #checkedChildren><check-outlined /></template>
      <template #unCheckedChildren><close-outlined /></template>
    </a-switch> -->
          </li>
          <li>
            <FullscreenExitOutlined class="text-2xl"/>
          </li>
          <li>
            <GithubOutlined class="text-2xl"/>
          </li>
          <li>
             <a-avatar>USER</a-avatar>
          </li>
        </ul>
      </ul>
    </header>
  </div>
</template>
<script setup lang="ts">
import {FullscreenExitOutlined,GithubOutlined} from '@ant-design/icons-vue'
const searchValue = ref<string>('')
</script>
<style lang="scss" scoped></style>
