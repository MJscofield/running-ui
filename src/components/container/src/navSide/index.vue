<template>
  <m-menu
    :data="data"
    router
    :default-active="$route.path"
    :collapse="collapse"
  ></m-menu>
</template>

<script lang="ts" setup>
let props = defineProps<{
  collapse: boolean;
}>();
let data = [
  {
    name: "首页",
    icon: "House",
    index: "/",
  },
  {
    name: "图标选择器",
    icon: "CoffeeCup",
    index: "/chooseIcon",
  },
  {
    name: "省市区选择",
    icon: "MapLocation",
    index: "/chooseArea",
  },
  {
    name: "趋势标记",
    icon: "Sort",
    index: "/trend",
  },
  {
    name: "时间选择",
    icon: "AlarmClock",
    index: "/chooseTime",
  },
  {
    name: "日期选择",
    icon: "Calendar",
    index: "/chooseDate",
  },
  {
    name: "通知菜单",
    icon: "Bell",
    index: "/notification",
  },
  {
    name: "导航菜单",
    icon: "Menu",
    index: "/menu",
  },

  {
    name: "进度条",
    icon: "DArrowRight",
    index: "/progress",
  },
  {
    name: "日历",
    icon: "Calendar",
    index: "/calendar",
  },

  {
    name: "表单",
    icon: "Document",
    index: "/form",
  },
  {
    name: "弹出框表单",
    icon: "Document",
    index: "/modalForm",
  },
  {
    name: "表格",
    icon: "Tickets",
    index: "/table",
  },
];
</script>
<style scoped></style>
