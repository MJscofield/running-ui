<template>
  <el-table
    v-loading="isLoading"
    :data="data"
    v-bind="$attrs"
    :element-loading-text="elementLoadingText"
    :element-loading-svg="elementLoadingSvg"
    :element-loading-background="elementLoadingBackground"
    :element-loading-svg-view-box="elementLoadingSvgViewBox"
  >
    <template v-for="(item, index) in tableOptions" :key="index">
      <el-table-column
        v-if="!item.slot"
        :prop="item.prop"
        :label="item.label"
        :width="item.width"
        :align="item.align"
      ></el-table-column>
      <el-table-column
        v-else
        :prop="item.prop"
        :label="item.label"
        :width="item.width"
        :align="item.align"
      >
        <template #default="scope">
          <slot :name="item.slot" :scope="scope"></slot>
        </template>
      </el-table-column>
    </template>
    <el-table-column
      :label="actionOptions.label"
      :width="actionOptions.width"
      :align="actionOptions.align"
    >
      <template #default="scope">
        <slot name="action" :scope="scope"></slot>
      </template>
    </el-table-column>
  </el-table>
</template>

<script lang="ts" setup>
import { PropType, computed, ref } from "vue";
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
  elementLoadingText: {
    type: String,
    default: "",
  },
  elementLoadingSvg: {
    type: String,
    default: "",
  },
  elementLoadingBackground: {
    type: String,
    default: "",
  },
  elementLoadingSvgViewBox: {
    type: String,
    default: "",
  },
});

// 过滤不含操作的配置
let tableOptions = computed(() => {
  return props.options.filter((item) => !item.action);
});
// 找出操作项的配置
let actionOptions = computed(() => {
  return props.options.find((item) => item.action);
});

// 判断数据是否在加载中
let isLoading = computed(() => !props.data || !props.data.length);
</script>
<style scoped lang="scss"></style>
