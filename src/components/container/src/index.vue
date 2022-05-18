<template>
  <el-container>
    <el-aside width="auto">
      <nav-side :collapse="isCollapse" />
    </el-aside>
    <el-container>
      <el-header>
        <nav-header v-model:collapse="isCollapse" />
      </el-header>

      <el-main>
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import NavHeader from "./navHeader/index.vue";
import NavSide from "./navSide/index.vue";
let isCollapse = ref(false);
</script>
<style scoped>
.el-header {
  padding: 0;
  display: flex;
  align-items: center;
  margin: 1px;
  border-bottom: 1px solid #eee;
}
</style>
