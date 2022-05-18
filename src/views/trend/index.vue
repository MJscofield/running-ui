<template>
  <div class="flex">
    <div>
      <m-trend type="up" text="上升" reserveColor></m-trend>
    </div>
    <div>
      <m-trend type="down" text="下降" downIconColor="blue"></m-trend>
    </div>
  </div>
</template>

<script lang="ts" setup></script>
<style scoped lang="scss">
.flex {
  display: flex;
  div {
    margin-right: 5px;
  }
}
</style>
