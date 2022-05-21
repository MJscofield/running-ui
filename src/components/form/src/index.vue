<template>
  <el-form
    :validate-on-rule-change="false"
    v-bind="$attrs"
    :model="model"
    :rules="rules"
  >
    <el-form-item
      v-for="(item, index) in options"
      :key="index"
      :label="item.label"
      :prop="item.prop"
    >
      <component
        :is="`el-${item.type}`"
        v-bind="$attrs"
        v-model="model[item.prop]"
      ></component>
    </el-form-item>
  </el-form>
</template>

<script lang="ts" setup>
import { PropType, ref, onMounted } from "vue";
import { FormOptions } from "./types";
import cloneDeep from "lodash/cloneDeep";
let props = defineProps({
  options: {
    type: Array as PropType<FormOptions[]>,
    required: true,
  },
});
let model = ref<any>({});
let rules = ref<any>({});
onMounted(() => {
  let m: any = {};
  let r: any = {};
  props.options.map((item: FormOptions) => {
    m[item.prop!] = item.value;
    r[item.prop!] = item.rules;
    model.value = cloneDeep(m);
    rules.value = cloneDeep(r);
  });
});
</script>
<style scoped lang="scss"></style>
