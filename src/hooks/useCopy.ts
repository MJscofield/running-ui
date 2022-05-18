import { ElMessage } from "element-plus";

export const useCopy = (text: string) => {
  // 创建输入框
  let input = document.createElement("input");
  // 给输入框赋值
  input.value = text;
  // 将输入框添加到body中去
  document.body.appendChild(input);
  // 选中输入框内容
  input.select();
  // 复制内容
  document.execCommand("copy");
  // 删除输入框
  document.body.removeChild(input);
  ElMessage.success("复制成功!");
};
