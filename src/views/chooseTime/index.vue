<template>
  <m-choose-time @changeTime="changeTime"></m-choose-time>
</template>

<script lang="ts" setup>
let changeTime = (val: any) => {
  console.log(val);
};
</script>
<style scoped lang="scss"></style>
