<template>
  <m-table :data="tableData" :options="options" border></m-table>
</template>

<script lang="ts" setup>
import { TableOptions } from "src/components/table/src/types";
let options: TableOptions[] = [
  { label: "日期", prop: "date", width: "200", align: "center" },
  { label: "名字", prop: "name", width: "100", align: "center" },
  { label: "地址", prop: "address", width: "300", align: "center" },
];
let tableData: any = [
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
</script>
<style scoped lang="scss"></style>
