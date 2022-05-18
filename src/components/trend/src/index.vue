<template>
  <div class="trend">
    <div class="text">{{ text }}</div>
    <div class="icon">
      <div v-if="type == 'up'">
        <el-icon-arrow-up :style="{ color: upIconColor }"></el-icon-arrow-up>
      </div>
      <div v-else>
        <el-icon-arrow-down
          :style="{ color: downIconColor }"
        ></el-icon-arrow-down>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
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
