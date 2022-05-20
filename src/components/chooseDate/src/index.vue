<template>
  <div class="date">
    <div class="startDate">
      <el-date-picker
        v-model="startDate"
        type="date"
        :placeholder="startPlaceholder"
        :disabled-date="startDisabledDate"
        v-bind="$attrs.startOptions"
      />
    </div>
    <div class="endDate">
      <el-date-picker
        v-model="endDate"
        type="date"
        :placeholder="endPlaceholder"
        :disabled="endDateDisabled"
        :disabled-date="endDisabledDate"
        v-bind="$attrs.endOptions"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, watch } from "vue";

let props = defineProps({
  startPlaceholder: {
    type: String,
    default: "请选择开始日期",
  },
  endPlaceholder: {
    type: String,
    default: "请选择结束日期",
  },
  // 是否禁用今天之前的日期
  todayDisabled: {
    type: Boolean,
    default: false,
  },
});
let startDate = ref<Date | null>(null);
let endDate = ref<Date | null>(null);
let endDateDisabled = ref<boolean>(true);
let emits = defineEmits(["changeDate"]);
// 判断日期是否不可选中
let startDisabledDate = (time: Date) => {
  // console.log(time);
  // Date.now() 方法返回自 1970 年 1 月 1 日 00:00:00 (UTC) 到当前时间的毫秒数。
  // getTime() 方法返回 Date 对象的时间戳，也就是该日期距离 UTC 时间的毫秒数。()
  if (props.todayDisabled) return time.getTime() < Date.now() - 86400000;
};
let endDisabledDate = (time: Date) => {
  if (startDate.value)
    return time.getTime() < startDate.value.getTime() + 86400000;
};
watch(
  () => startDate.value,
  (val) => {
    if (startDate.value) {
      endDateDisabled.value = false;
    } else {
      endDate.value = null;
    }
    if (startDate.value && endDate.value) {
      emits("changeDate", {
        startDate: startDate.value,
        endDate: endDate.value,
      });
    }
  }
);
watch(
  () => endDate.value,
  () => {
    if (endDate.value) {
      emits("changeDate", {
        startDate: startDate.value,
        endDate: endDate.value,
      });
    }
  }
);
</script>
<style scoped lang="scss">
.date {
  display: flex;
  .startDate {
    margin-right: 5px;
  }
}
</style>
