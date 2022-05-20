<template>
  <el-popover :placement="placement" :width="300" trigger="click">
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
  // 控制弹出框的位置, 默认在底部
  placement: {
    type: String,
    default: "bottom",
  },
});
</script>
<style scoped lang="scss">
.notification {
  cursor: pointer;
}
</style>
