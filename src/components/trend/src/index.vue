<template>
  <div class="trend">
    <div class="text" :style="{ color: textColor }">
      <slot v-if="slots.default"></slot>
      <div v-else>
        {{ text }}
      </div>
    </div>
    <div class="icon">
      <!-- 
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
      -->
      <!-- 使用动态组件来自定义图标 -->
      <div v-if="type == 'up'">
        <component
          :is="`el-icon${toLine(upIcon)}`"
          :style="{ color: !reserveColor ? upIconColor : downIconColor }"
        ></component>
      </div>
      <div v-else>
        <component
          :is="`el-icon${toLine(downIcon)}`"
          :style="{ color: !reserveColor ? downIconColor : upIconColor }"
        ></component>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useSlots } from "vue";
import { toLine } from "src/utils";
let slots = useSlots();
// 能够拿到所有插槽的内容
// 通过slots.default来获取默认插槽是否存在, 如果用户使用了插槽就优先显示插槽内容
// 否则就显示text传入的内容
let props = defineProps({
  // 上升还是下降
  type: {
    type: String,
    default: "up",
  },
  // 文本内容
  text: {
    type: String,
    default: "文字",
  },
  // 上升图标颜色
  upIconColor: {
    type: String,
    default: "red",
  },
  // 下降图标颜色
  downIconColor: {
    type: String,
    default: "green",
  },
  // 控制默认颜色反转
  reserveColor: {
    type: Boolean,
    default: false,
  },
  // 文本颜色
  textColor: {
    type: String,
    default: "",
  },
  // 自定义上升图标
  upIcon: {
    type: String,
    default: "ArrowUp",
  },
  // 自定义下降图标
  downIcon: {
    type: String,
    default: "ArrowDown",
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
      width: 1.3rem;
      height: 1.3rem;
    }
  }
}
</style>
