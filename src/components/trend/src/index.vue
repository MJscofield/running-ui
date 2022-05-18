<template>
  <div class="trend">
    <div class="text">
      <slot v-if="slots.default"></slot>
      <div v-else>
        {{ text }}
      </div>
    </div>
    <div class="icon">
      <div v-if="type == 'up'">
        <el-icon-arrow-up
          :style="{ color: !reserveColor ? upIconColor : downIconColor }"
        ></el-icon-arrow-up>
      </div>
      <div v-else>
        <el-icon-arrow-down
          :style="{ color: !reserveColor ? downIconColor : upIconColor }"
        ></el-icon-arrow-down>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useSlots } from "vue";
let slots = useSlots();
// 能够拿到所有插槽的内容
// 通过slots.default来获取默认插槽是否存在, 如果用户使用了插槽就优先显示插槽内容
// 否则就显示text传入的内容
console.log(slots);
let props = defineProps({
  // 上升还是下降
  type: {
    type: String,
    default: "up",
  },
  text: {
    type: String,
    default: "文字",
  },
  upIconColor: {
    type: String,
    default: "red",
  },
  downIconColor: {
    type: String,
    default: "green",
  },
  // 控制默认颜色反转
  reserveColor: {
    type: Boolean,
    default: false,
  },
});
</script>

<style scoped lang="scss">
.trend {
  display: flex;
  align-items: center;
  .text {
    font-size: 12px;
    margin-right: 3px;
  }
  .icon {
    svg {
      font-size: 1rem;
    }
  }
}
</style>
