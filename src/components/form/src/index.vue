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
          v-if="item.type !== 'upload' && item.type !== 'editor'"
          :is="`el-${item.type}`"
          v-bind="item.$attrs"
          v-model="model[item.prop]"
        />
        <el-upload v-if="item.type === 'upload'" v-bind="item.uploadAttrs">
          <slot />
          <slot name="tip" />
        </el-upload>
        <div id="editor" v-if="item.type === 'editor'"></div>
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
      <!-- form表单实例, model表单数据 -->
    </el-form-item>
  </el-form>
</template>

<script lang="ts" setup>
import { PropType, ref, onMounted, watch, nextTick } from "vue";
import { FormOptions, FormInstance } from "./types";
import cloneDeep from "lodash/cloneDeep";
import E from "wangEditor";
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
      if (item.type === "editor") {
        nextTick(() => {
          if (document.getElementById("editor")) {
            const editor = new E("#editor");
            editor.create();
            editor.config.placeholder = item.placeholder!;
            editor.txt.html(item.value);
            editor.config.onchange = (newHtml: string) => {
              model.value[item.prop!] = newHtml;
              console.log(model.value);
            };
          }
        });
      }
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
