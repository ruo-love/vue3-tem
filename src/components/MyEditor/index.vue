<template>
  <div>
    <Toolbar style="border-bottom: 1px solid #ccc" :editor="editorRef" />
    <Editor
      style="height: 500px; overflow-y: hidden"
      v-model="modelValue"
      mode="simple"
      @onCreated="handleCreated"
      @onChange="handleChange"
      @onDestroyed="handleDestroyed"
      @onFocus="handleFocus"
      @onBlur="handleBlur"
    />
  </div>
</template>
<script setup lang="ts">
import "@wangeditor/editor/dist/css/style.css" // 引入 css
import { Editor, Toolbar } from "@wangeditor/editor-for-vue"
import { IDomEditor } from "@wangeditor/editor"

// 编辑器实例，必须用 shallowRef
const modelValue = ref()
const editorRef = shallowRef()
const handleChange = (editor: IDomEditor) => {
  console.log("change", editor)
}

const handleDestroyed = (editor: IDomEditor) => {
  console.log("destroyed", editor)
}
const handleFocus = (editor: IDomEditor) => {
  console.log("focus", editor)
}
const handleBlur = (editor: IDomEditor) => {
  console.log("blur", editor)
}
defineExpose({ editor: editorRef })
// 组件销毁时，也及时销毁编辑器
onBeforeUnmount(() => {
  const editor = editorRef.value
  if (editor == null) return
  editor.destroy()
})

const handleCreated = editor => {
  editorRef.value = editor // 记录 editor 实例，重要！
}
</script>
<style lang="scss" scoped></style>
