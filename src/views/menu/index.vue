<template>
  <div class="menu" style="width: 300px">
    <m-menu :data="data" defaultActive="3" uniqueOpened="true"></m-menu>
  </div>
</template>

<script lang="ts" setup>
let data = [
  {
    name: "导航1",
    index: "1",
    icon: "Menu",
  },
  {
    name: "导航2",
    index: "2",
    icon: "Menu",
  },
  {
    name: "导航3",
    index: "3",
    icon: "Menu",
    children: [
      {
        name: "导航3-1",
        index: "3-1",
        icon: "Menu",
      },
      {
        name: "导航3-2",
        index: "3-2",
        icon: "Menu",
      },
    ],
  },
  {
    name: "导航4",
    index: "4",
    icon: "Menu",
    children: [
      {
        name: "导航4-1",
        index: "4-1",
        icon: "Menu",
      },
      {
        name: "导航4-2",
        index: "4-2",
        icon: "Menu",
      },
    ],
  },
];
</script>
<style scoped lang="scss"></style>
