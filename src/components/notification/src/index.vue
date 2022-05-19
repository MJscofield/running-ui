<template>
  <div class="notification">
    <el-badge :value="value" :max="max" :is-dot="isDot">
      <component :is="`el-icon${toLine(icon)}`" />
    </el-badge>
  </div>
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
