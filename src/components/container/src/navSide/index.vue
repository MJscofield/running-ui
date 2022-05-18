<template>
  <el-menu
    default-active="2"
    class="el-menu-vertical-demo"
    :collapse="collapse"
  >
    <el-menu-item index="2">
      <el-icon-menu></el-icon-menu>
      <span>首页</span>
    </el-menu-item>
    <el-menu-item index="2">
      <el-icon-menu></el-icon-menu>
      <span>图标选择器</span>
    </el-menu-item>
    <el-menu-item index="2">
      <el-icon-menu></el-icon-menu>
      <span>Navigator Two</span>
    </el-menu-item>
  </el-menu>
</template>

<script lang="ts" setup>
let props = defineProps<{
  collapse: boolean;
}>();
</script>
<style scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>
