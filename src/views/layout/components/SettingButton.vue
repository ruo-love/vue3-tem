<template>
  <div class="setting-warp">
    <n-icon @click="activate('right')" class="global-setting-btn" size="40" :color="themeStore.primaryThemeColor">
      <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 20 20">
        <g fill="none">
          <path
            d="M9 2a4 4 0 1 0 0 8a4 4 0 0 0 0-8zm-4.991 9A2.001 2.001 0 0 0 2 13c0 1.691.833 2.966 2.135 3.797C5.417 17.614 7.145 18 9 18c.41 0 .816-.019 1.21-.057A5.477 5.477 0 0 1 9 14.5c0-1.33.472-2.55 1.257-3.5H4.01zm6.626 2.92a2 2 0 0 0 1.43-2.478l-.155-.557c.254-.195.529-.362.821-.497l.338.358a2 2 0 0 0 2.91.001l.324-.344c.298.14.578.315.835.518l-.126.423a2 2 0 0 0 1.456 2.519l.349.082a4.7 4.7 0 0 1 .01 1.017l-.46.117a2 2 0 0 0-1.431 2.479l.156.556c-.254.195-.53.363-.822.498l-.338-.358a2 2 0 0 0-2.909-.002l-.325.344a4.32 4.32 0 0 1-.835-.518l.127-.422a2 2 0 0 0-1.456-2.52l-.35-.082a4.713 4.713 0 0 1-.01-1.016l.461-.118zm4.865.58a1 1 0 1 0-2 0a1 1 0 0 0 2 0z"
            fill="currentColor"
          ></path>
        </g>
      </svg>
    </n-icon>
  </div>
  <n-drawer v-model:show="active" :width="300" :placement="placement">
    <n-drawer-content title="全局配置">
      <n-radio-group @change="themeChange('layout', $event)" v-model:value="settingData.layout" name="radiogroup">
        <n-space>
          <n-radio v-for="layoutItem in layoutSettings" :key="layoutItem" :value="layoutItem">
            {{ layoutItem }}
          </n-radio>
        </n-space>
      </n-radio-group>
      <n-color-picker
        v-model:value="settingData.themePrimary"
        :on-update:value="$event => themeChange('themePrimary', $event)"
        :swatches="['#FFFFFF', '#18A058', '#2080F0', '#F0A020', 'rgba(208, 48, 80, 1)']"
      />
      <n-button @click="logout">退出登录</n-button>
    </n-drawer-content>
  </n-drawer>
</template>
<script setup lang="ts">
import { EnumThemeLayoutMode } from "@/enum"
import { useAuthStore, useThemeStore } from "@/store"
import { DrawerPlacement } from "naive-ui"
const userStore = useAuthStore()
const themeStore = useThemeStore()
const active = ref(false)
const router = useRouter()
const placement = ref<DrawerPlacement>("right")
const activate = (place: DrawerPlacement) => {
  active.value = true
  placement.value = place
}
const layoutSettings = [EnumThemeLayoutMode.horizontal, EnumThemeLayoutMode.vertical]
const settingData = reactive({
  layout: themeStore.layout.mode,
  themePrimary: themeStore.primaryThemeColor
})

const themeChange = (type: string, $event: Event) => {
  switch (type) {
    case "layout":
      themeStore.setLayoutMode(settingData.layout)
      break
    case "themePrimary":
      settingData.themePrimary = $event
      themeStore.setThemeColor($event)
      break
  }
}
function logout() {
  userStore.logout()

  router.push("/login")
}
</script>
<style lang="scss" scoped>
// .setting-warp {
//   width: 100px;
//   height: 100px;
//   background-color: red;
// }
.global-setting-btn {
  padding: 10px;
  position: fixed;
  bottom: 100px;
  right: 70px;
  cursor: pointer;
  border-radius: 69px;
  background: linear-gradient(145deg, #e6e6e6, #ffffff);
  box-shadow: 9px 9px 18px #919191, -9px -9px 18px #ffffff;
}
</style>
