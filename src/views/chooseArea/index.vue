<template>
  <m-choose-area @change="changeArea"></m-choose-area>
</template>

<script lang="ts" setup>
import mChooseArea from "src/components/chooseArea/src/index.vue";

let changeArea = (Data: any) => {
  console.log(Data);
};
</script>
<style scoped></style>
