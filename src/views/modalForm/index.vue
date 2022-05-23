<template>
  <div>
    <el-button type="primary" @click="open"> 弹出模态框 </el-button>
    <m-modal-form
      title="tips"
      :options="options"
      v-model:dialogVisible="visible"
      @close="updateVisible"
    >
      <template #footer="{ form }">
        <el-button @click="cancel(form)">取消</el-button>
        <el-button type="primary" @click="confirm(form)">确认</el-button>
      </template>
    </m-modal-form>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { ElMessage } from "element-plus";
let visible = ref<boolean>(false);
import { FormOptions, FormInstance } from "src/components/form/src/types";

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
      statusIcon: true,
    },
  },
  {
    type: "select",
    label: "职位",
    value: "",
    placeholder: "请选择职位",
    prop: "role",
    attrs: {
      style: {
        width: "100%",
      },
    },
    rules: [
      {
        required: true,
        message: "职位不能为空",
        trigger: "change",
      },
    ],
    children: [
      {
        type: "option",
        value: "1",
        label: "管理员",
      },
      {
        type: "option",
        value: "2",
        label: "经理",
      },
      {
        type: "option",
        value: "3",
        label: "主管",
      },
    ],
  },
  {
    type: "checkbox-group",
    value: [],
    prop: "like",
    label: "爱好",
    rules: [
      {
        required: true,
        message: "请选择爱好",
        trigger: "change",
      },
    ],
    children: [
      {
        type: "checkbox",
        label: "足球",
        value: "1",
      },
      {
        type: "checkbox",
        label: "篮球",
        value: "2",
      },
    ],
  },
  {
    type: "radio-group",
    value: "",
    prop: "gender",
    label: "性别",
    rules: [
      {
        required: true,
        message: "请选择性别",
        trigger: "change",
      },
    ],
    children: [
      {
        type: "radio",
        label: "男",
        value: "male",
      },
      {
        type: "radio",
        label: "女",
        value: "female",
      },
      {
        type: "radio",
        label: "保密",
        value: "secret",
      },
    ],
  },
  {
    type: "upload",
    label: "上传",
    prop: "pic",
    uploadAttrs: {
      action: "https://jsonplaceholder.typicode.com/posts/",
    },
  },
  {
    type: "editor",
    value: "",
    prop: "desc",
    label: "描述",

    rules: [
      {
        required: true,
        message: "请输入描述",
        trigger: "blur",
      },
    ],
  },
];
let open = () => {
  visible.value = true;
};
let updateVisible = () => {
  visible.value = false;
};
let cancel = (form: any) => {
  form.resetFields();
};
let confirm = (form: any) => {
  let validate = form.validate();
  let modal = form.getFormData();
  validate((valid: any) => {
    if (valid) {
      ElMessage.success("提交成功");
      console.log(modal);
    } else {
      ElMessage.error("提交失败");
    }
  });
};
</script>
<style scoped lang="scss"></style>
