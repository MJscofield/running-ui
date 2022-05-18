<template>
  <m-choose-icon title="选择图标" v-model:dialogVisible="dialogVisible"
    >选择图标</m-choose-icon
  >
</template>

<script lang="ts" setup>
import { ref } from "vue";
// import mChooseIcon from "src/components/chooseIcon/src/index.vue";
let dialogVisible = ref(false);
</script>
<style scoped></style>
