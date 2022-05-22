<template>
  <div>
    <el-button type="primary" @click="open"> 弹出模态框 </el-button>
    <m-modal-form
      title="tips
    "
      v-model:dialogVisible="visible"
      @close="updateVisible"
    >
      <template #footer>
        <el-button @click="visible = false">取消</el-button>
        <el-button type="primary" @click="visible = false">确认</el-button>
      </template>
    </m-modal-form>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
let visible = ref<boolean>(false);
let open = () => {
  visible.value = true;
};
let updateVisible = () => {
  visible.value = false;
};
</script>
<style scoped lang="scss"></style>
