<template>
  <m-table
    :data="tableData"
    :options="options"
    border
    :element-loading-svg="svg"
    element-loading-text="缓冲中...."
    element-loading-background="rgba(122, 122, 122, 0.8)"
    element-loading-svg-view-box="-10, -10, 50, 50"
  >
    <template #date="{ scope }">
      <el-icon-timer></el-icon-timer>
      {{ scope.row.date }}
    </template>
    <template #name="{ scope }">
      <el-tag>
        {{ scope.row.name }}
      </el-tag>
    </template>
    <template #action="slotProps">
      <!-- 这里也可以直接用{scope}将传过来的属性结构出来 -->
      <el-button
        size="small"
        type="primary"
        @click="handleEdit(slotProps.scope)"
        >编辑</el-button
      >
      <el-button
        size="small"
        type="danger"
        @click="handleDelete(slotProps.scope)"
        >删除</el-button
      >
    </template>
  </m-table>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { TableOptions } from "src/components/table/src/types";
interface TableData {
  date: string;
  name: string;
  address: string;
}
let options: TableOptions[] = [
  { label: "日期", prop: "date", width: "200", align: "center", slot: "date" },
  { label: "名字", prop: "name", width: "100", align: "center", slot: "name" },
  { label: "地址", prop: "address", width: "300", align: "center" },
  { label: "操作", action: true, align: "center" },
];
let tableData = ref<TableData[]>([]);
// 让数据延时出现, 以便看到loading
setTimeout(() => {
  tableData.value = [
    {
      date: "2016-05-03",
      name: "Tom",
      address: "No. 189, Grove St, Los Angeles",
    },
    {
      date: "2016-05-02",
      name: "Tom",
      address: "No. 189, Grove St, Los Angeles",
    },
    {
      date: "2016-05-04",
      name: "Tom",
      address: "No. 189, Grove St, Los Angeles",
    },
    {
      date: "2016-05-01",
      name: "Tom",
      address: "No. 189, Grove St, Los Angeles",
    },
  ];
}, 1500);
let handleEdit = (scope: any) => {
  console.log(scope);
};
let handleDelete = (scope: any) => {
  console.log(scope);
};
// 缓冲svg图标
const svg = `
        <path class="path" d="
          M 30 15
          L 28 17
          M 25.61 25.61
          A 15 15, 0, 0, 1, 15 30
          A 15 15, 0, 1, 1, 27.99 7.5
          L 15 15
        " style="stroke-width: 4px; fill: rgba(0, 0, 0, 0)"/>
      `;
</script>
<style scoped lang="scss">
svg {
  width: 1.3em;
  height: 1.3em;
}
</style>
