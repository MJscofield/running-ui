<template>
  <el-progress :percentage="p"></el-progress>
</template>

<script lang="ts" setup>
import { onMounted, ref } from "vue";

let props = defineProps({
  // 进度大小
  percentage: {
    type: Number,
    default: 0,
  },
  // 是否显示动画
  isAnimation: {
    type: Boolean,
    default: false,
  },
  // 动画的时间, 单位毫秒
  time: {
    type: Number,
    default: 1000,
  },
});
let p = ref(0);
onMounted(() => {
  if (props.isAnimation) {
    let t = Math.ceil(props.time / props.percentage);
    let timer = setInterval(() => {
      p.value += 1;
      if (p.value > props.percentage) {
        p.value = props.percentage;
        clearInterval(timer);
      }
      console.log(p.value, t, props.time);
    }, t);
  }
});
</script>
<style scoped lang="scss"></style>
