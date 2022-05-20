<template>
  <m-chooseTime @changeTime="changeTime"></m-chooseTime>
</template>

<script lang="ts" setup>
let changeTime = (val: any) => {
  console.log(val);
};
</script>
<style scoped lang="scss"></style>
