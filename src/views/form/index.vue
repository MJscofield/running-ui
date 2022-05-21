<template>
  <m-form :options="options" labelWidth="120px"></m-form>
</template>

<script lang="ts" setup>
import { FormOptions } from "src/components/form/src/types";

let options: FormOptions[] = [
  {
    type: "input",
    value: "",
    label: "用户名",

    prop: "username",
    rules: [
      {
        required: true,
        message: "请输入用户名",
        trigger: "blur",
      },
      {
        min: 5,
        max: 10,
        message: "用户名在5-10个字符之间",
        trigger: "blur",
      },
    ],
  },
  {
    type: "input",
    value: "",
    label: "密码",

    prop: "password",
    rules: [
      {
        required: true,
        message: "请输入密码",
        trigger: "blur",
      },
      {
        min: 6,
        max: 16,
        message: "密码在6-16个字符之间",
        trigger: "blur",
      },
    ],
    attrs: {
      showPassword: true,
      clearable: true,
    },
  },
];
</script>
<style scoped lang="scss"></style>
