<template>
  <el-dialog v-model="dialogVisible" v-bind="$attrs">
    <template #default>
      <m-form labelWidth="120px" ref="form" :options="options"></m-form>
    </template>
    <template #footer>
      <slot name="footer" :form="form"></slot>
    </template>
  </el-dialog>
</template>

<script lang="ts" setup>
import { ref, watch, PropType } from "vue";
import { FormOptions, FormInstance } from "src/components/form/src/types";
let props = defineProps({
  dialogVisible: {
    type: Boolean,
    default: false,
  },
  options: {
    type: Array as PropType<FormOptions[]>,
    required: true,
  },
});
let form = ref<FormInstance | null>(null);

let emits = defineEmits(["close"]);
watch(
  () => props.dialogVisible,
  (val) => {
    if (!val) emits("close", val);
  }
);
</script>
<style scoped lang="scss"></style>
