<template>
  <el-form
    ref="form"
    :validate-on-rule-change="false"
    v-if="model"
    v-bind="$attrs"
    :model="model"
    :rules="rules"
  >
    <template v-for="(item, index) in options" :key="index">
      <el-form-item
        v-if="!item.children || !item.children.length"
        :label="item.label"
        :prop="item.prop"
      >
        <component
          v-if="item.type !== 'upload'"
          :is="`el-${item.type}`"
          v-bind="item.$attrs"
          v-model="model[item.prop]"
        />
        <el-upload v-else v-bind="item.uploadAttrs">
          <slot />
          <slot name="tip" />
        </el-upload>
      </el-form-item>
      <el-form-item
        v-if="item.children && item.children.length"
        :label="item.label"
        :prop="item.prop"
      >
        <component
          :is="`el-${item.type}`"
          v-bind="item.$attrs"
          v-model="model[item.prop]"
        >
          <component
            v-for="(child, indey) in item.children"
            :key="indey"
            :is="`el-${child.type}`"
            :label="child.label"
            :value="child.value"
          ></component>
        </component>
      </el-form-item>
    </template>
    <el-form-item>
      <slot name="action" :form="form" :model="model"></slot>
    </el-form-item>
  </el-form>
</template>

<script lang="ts" setup>
import { PropType, ref, onMounted, watch } from "vue";
import { FormOptions, FormInstance } from "./types";
import cloneDeep from "lodash/cloneDeep";
let props = defineProps({
  options: {
    type: Array as PropType<FormOptions[]>,
    required: true,
  },
});
let model = ref<any>(null);
let rules = ref<any>(null);
let form = ref<FormInstance | null>(null);
let initForm = () => {
  if (props.options && props.options.length) {
    let m: any = {};
    let r: any = {};
    props.options.map((item: FormOptions) => {
      m[item.prop!] = item.value;
      r[item.prop!] = item.rules;
      model.value = cloneDeep(m);
      rules.value = cloneDeep(r);
    });
  }
};
onMounted(() => {
  initForm();
});

// 监听父组件传递过来的options
watch(
  () => props.options,
  () => {
    initForm();
  },
  { deep: true }
);
</script>
<style scoped lang="scss"></style>
