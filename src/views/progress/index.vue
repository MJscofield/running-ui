<template>
  <m-progress :percentage="80" :time="1000" :isAnimation="true"></m-progress>
  <m-progress
    :percentage="90"
    :duration="5"
    :isAnimation="true"
    color="orange"
    :stroke-width="20"
  >
  </m-progress>
  <m-progress
    :percentage="80"
    :time="2000"
    :isAnimation="true"
    type="circle"
  ></m-progress>
  <m-progress
    :percentage="80"
    :time="2000"
    :isAnimation="true"
    type="circle"
    status="success"
  ></m-progress>
</template>

<script lang="ts" setup></script>
<style scoped lang="scss">
.el-progress {
  margin: 10px;
}
</style>
