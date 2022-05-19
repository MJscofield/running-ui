<template>
  <el-button :title="title" @click="handleClick" type="primary">
    <slot></slot>
  </el-button>
  <div class="m-choose-icon-dialog-body-height">
    <el-dialog :title="title" v-model="visible">
      <div class="container">
        <template v-for="item in Object.keys(Icon)" :key="item">
          <div class="icon-item" @click="copyIcon(item)">
            <component :is="`el-icon${toLine(item)}`" class="icon"></component>
            <div class="icon-name">
              {{ item }}
            </div>
          </div>
        </template>
      </div>
    </el-dialog>
  </div>
</template>

<script lang="ts" setup>
import { watch, ref } from "vue";
import * as Icon from "@element-plus/icons-vue";
import { toLine } from "src/utils/index";
import { useCopy } from "src/hooks/useCopy";

let props = defineProps<{
  title: string;
  dialogVisible: boolean;
}>();
let emits = defineEmits(["update:dialogVisible"]);
// 这里要拷贝一份dialogVisible，不是很懂
let visible = ref<boolean>(props.dialogVisible);
let handleClick = () => {
  // 将父组件的数据取反
  emits("update:dialogVisible", !props.dialogVisible);
};

const copyIcon = (item: string) => {
  useCopy(`<el-icon${toLine(item)} />`);
  visible.value = !visible.value;
  emits("update:dialogVisible", !props.dialogVisible);
};

// 这一步watch非常关键, 因为关闭模态框的时候, 其实dialogVisible其实已经变为false, 但是handleClick不会再触发, 所以需要watch一下
watch(
  () => props.dialogVisible,
  (val) => {
    visible.value = val;
  }
);
// 因为关掉模态框后变化的是el-dialog里面的visible值, 所以第一次watch监听不到关掉dialog时visible的变化, 所以第二次直接把关掉时的false发送给父组件
watch(
  () => visible.value,
  (val) => {
    emits("update:dialogVisible", val);
  }
);
</script>
<style scoped lang="scss">
.container {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  padding: 0;
}
.icon-item {
  width: 100px;
  height: 100px;
  border: 1px solid #eee;
  margin: 0 -1px -1px 0; // 用负的外边距出去重合的边框
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  cursor: pointer;
}
.icon-item:hover {
  background: rgb(242, 246, 252);
  color: rgb(48, 49, 51);
}
.icon {
  font-size: 32px;
  padding: 20px 0;
}
.icon-name {
  font-size: 12px;
}
</style>
