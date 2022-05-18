<template>
  <div class="container">
    <el-select clearable placeholder="请选择省份" v-model="province">
      <template
        v-for="(item, index) in areas"
        :key="item.code"
        :label="item.name"
      >
        <el-option :value="item.name">{{ item.name }}</el-option>
      </template>
    </el-select>
    <el-select
      clearable
      v-model="city"
      :disabled="!province"
      placeholder="请选择城市"
    >
      <template
        v-model="province"
        v-for="(item, index) in selectCity"
        :key="index"
      >
        <el-option :value="item.name">{{ item.name }}</el-option>
      </template>
    </el-select>
    <el-select
      clearable
      v-model="area"
      :disabled="!city || !province"
      placeholder="请选择区(县)"
    >
      <template v-model="area" v-for="(item, index) in selectArea" :key="index">
        <el-option :value="item.name">{{ item.name }}</el-option>
      </template>
    </el-select>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed, watch } from "vue";
import allArea from "../lib/pca-code.json";
// 选中的省份
let province = ref<string>("");
// 选中的城市
let city = ref<string>("");
// 选中的区(县)
let area = ref<string>("");
// 拷贝所有地区
let areas = ref(allArea);

// let cities = computed(() => {
//   let result: any = [];
//   if (province) {
//     console.log(province);
//     for (let item of areas.value) {
//       if (item.name == province.value) {
//         result = item.children;
//         break;
//       }
//     }
//     return result;
//   }
//   return result[0] ? result[0].children : [];
// });

// 下拉框所有城市
let selectCity = computed(() => {
  if (!province.value) return [];
  else {
    let selectCity = areas.value.find((item) => item.name == province.value);
    return selectCity ? selectCity.children : [];
  }
});
// 下拉框所有区域
let selectArea = computed(() => {
  if (!city.value) return [];
  else {
    let selectArea = selectCity.value.find((item) => item.name == city.value);
    return selectArea ? selectArea.children : [];
  }
});
// 监听省份改变, 清空城市选中
watch(
  () => province.value,
  () => {
    city.value = "";
  }
);
// 清空区域选中
watch(
  () => city.value,
  () => {
    area.value = "";
  }
);
</script>
<style scoped></style>
