<template>
  <el-config-provider :locale="zhCn">
    <router-view></router-view>
  </el-config-provider>
</template>
<script setup lang="ts">
import { ElConfigProvider } from "element-plus";
import zhCn from "element-plus/lib/locale/lang/zh-cn";
import "element-plus/theme-chalk/dark/css-vars.css";
</script>
<style lang="scss">
@import "src/styles/base.scss";
@import "src/styles/ui.scss";
// .el-popper {
//   padding: 0 !important;
// }
body {
  background-color: #eff1f4;
}
</style>
