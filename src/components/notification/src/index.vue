<template>
  <el-popover placement="top-start" :width="200" trigger="hover">
    <template #default>
      <slot></slot>
    </template>
    <template #reference>
      <el-badge
        :value="value"
        :max="max"
        :is-dot="isDot"
        style="cursor: pointer"
      >
        <component :is="`el-icon${toLine(icon)}`" />
      </el-badge>
    </template>
  </el-popover>
</template>

<script lang="ts" setup>
import { toLine } from "src/utils/index";
let props = defineProps({
  icon: {
    type: String,
    default: "Bell",
  },
  value: {
    type: [Number, String],
    default: "",
  },
  max: {
    type: Number,
  },
  isDot: {
    type: Boolean,
    default: false,
  },
});
</script>
<style scoped lang="scss">
.notification {
  cursor: pointer;
}
</style>
