<template>
  <div class="header">
    <span @click="toggle" style="font-size: 26px; cursor: pointer">
      <el-icon-expand v-if="collapse" />
      <el-icon-fold v-else />
    </span>
  </div>
</template>

<script lang="ts" setup>
let props = defineProps<{
  collapse: boolean;
}>();
const emits = defineEmits(["update:collapse"]);
const toggle = () => {
  emits("update:collapse", !props.collapse);
};
</script>
<style scoped>
.header {
  padding: 0 20px;
}
</style>
