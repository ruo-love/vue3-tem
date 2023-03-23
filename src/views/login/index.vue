<template>
  <div class="login-container">
    <ToggleDarkModel />
    <n-card :bordered="false" size="large" class="login-form-container">
      <header style="display: flex; justify-content: space-around; align-items: center; padding: 14px 8px">
        <SvgIcon name="logo" className="logo text-theme" />
        <n-gradient-text type="primary" class="text-theme" :size="28">Zr-Admin</n-gradient-text>
      </header>
      <main>
        <transition name="fade-slide" mode="out-in" appear>
          <PwdLoginForm />
        </transition>
      </main>
    </n-card>
    <LoginBg :theme-color="themeStore.primaryThemeColor" />
  </div>
</template>
<script lang="ts" setup>
import { useThemeStore } from "@/store"

import LoginBg from "./components/LoginBg/index.vue"
import PwdLoginForm from "./components/PwdLoginForm/index.vue"
const themeStore = useThemeStore()
</script>
<style lang="scss" scoped>
.login-container {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.login-form-container {
  width: 400px;
}
.logo {
  width: 64px;
  height: 64px;
}
</style>
