<template>
  <el-table :data="data" v-bind="$attrs">
    <template v-for="(item, index) in options" :key="index">
      <el-table-column
        :prop="item.prop"
        :label="item.label"
        :width="item.width"
        :align="item.align"
      ></el-table-column>
    </template>
  </el-table>
</template>

<script lang="ts" setup>
import { PropType } from "vue";
import { TableOptions } from "./types";
let props = defineProps({
  options: {
    type: Array as PropType<TableOptions[]>,
    required: true,
  },
  data: {
    type: Array as PropType<any[]>,
    required: true,
  },
});
</script>
<style scoped lang="scss"></style>
