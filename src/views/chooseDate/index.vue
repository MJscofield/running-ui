<template>
  <div>
    <m-choose-date @changeDate="changeDate"></m-choose-date>
  </div>
</template>

<script lang="ts" setup>
let changeDate = (val: any) => {
  console.log(val);
};
</script>
<style scoped lang="scss"></style>
