<template>
  <el-dialog v-model="dialogVisible" v-bind="$attrs">
    <template #default>表单</template>
    <template #footer>
      <slot name="footer"></slot>
    </template>
  </el-dialog>
</template>

<script lang="ts" setup>
import { ref, watch } from "vue";
let props = defineProps({
  dialogVisible: {
    type: Boolean,
    default: false,
  },
});
let emits = defineEmits(["close"]);
watch(
  () => props.dialogVisible,
  (val) => {
    if (!val) emits("close", val);
  }
);
</script>
<style scoped lang="scss"></style>
