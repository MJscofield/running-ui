<template>
  <div class="time-select">
    <div class="startTime">
      <el-time-select
        v-model="startTime"
        :start="minStartTime"
        :end="maxStartTime"
        :placeholder="startTimePlaceholder"
        :step="step"
      ></el-time-select>
    </div>
    <div class="endTime">
      <el-time-select
        v-model="endTime"
        :end="maxEndTime"
        :start="minEndTime"
        :min-time="startTime"
        :placeholder="endTimePlaceholder"
        :disabled="disabled"
        :step="step"
      ></el-time-select>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, watch } from "vue";
let props = defineProps({
  startTime: {
    type: String,
    default: "",
  },
  // 开始时间的最小值
  minStartTime: {
    type: String,
    default: "08:00",
  },
  // 开始时间的最大值
  maxStartTime: {
    type: String,
    default: "21:00",
  },
  startTimePlaceholder: {
    type: String,
    default: "请选择开始时间",
  },
  endTime: {
    type: String,
    default: "",
  },
  // 开始时间的最小值
  minEndTime: {
    type: String,
    default: "09:00",
  },
  // 开始时间的最大值
  maxEndTime: {
    type: String,
    default: "23:00",
  },
  endTimePlaceholder: {
    type: String,
    default: "请选择结束时间",
  },
  step: {
    type: String,
    default: "00:30",
  },
  // 默认开始时间没选. 结束时间不能选
});
let startTime = ref<string>("");
let endTime = ref<string>("");
let disabled = ref<boolean>(false);
let emits = defineEmits(["changeTime"]);
watch(
  () => startTime.value,
  (val) => {
    if (!startTime.value) {
      endTime.value = "";
      disabled.value = true;
    } else {
      disabled.value = false;
    }
    if (endTime.value)
      emits("changeTime", {
        startTime: startTime.value,
        endTime: endTime.value,
      });
  }
);
watch(
  () => endTime.value,
  (val) => {
    if (val)
      emits("changeTime", {
        startTime: startTime.value,
        endTime: endTime.value,
      });
  }
);
</script>
<style scoped lang="scss">
.time-select {
  display: flex;
  .startTime {
    margin-right: 5px;
  }
}
</style>
