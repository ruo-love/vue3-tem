<template>
  <div class="login-bg-container">
    <div class="top-warp">
      <corner-top :start-color="lightColor" :end-color="darkColor" />
    </div>
    <div class="bottom-warp">
      <corner-bottom :start-color="darkColor" :end-color="lightColor" />
    </div>
  </div>
</template>
<script setup lang="ts">
import { getColorPalette } from "@/utils"
import CornerBottom from "./components/CornerBottom.vue"
import CornerTop from "./components/CornerTop.vue"
interface Props {
  themeColor: string
}

const props = defineProps<Props>()
const lightColor = computed(() => getColorPalette(props.themeColor, 3))
const darkColor = computed(() => getColorPalette(props.themeColor, 6))
</script>
<style lang="scss" scoped>
.login-bg-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: -999;
  .top-warp {
    position: absolute;
    top: -900px;
    right: -200px;
  }
  .bottom-warp {
    position: absolute;
    bottom: -300px;
    left: -200px;
  }
}
</style>
