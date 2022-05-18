export const toLine = (value: string) => {
  return value.replace(/([A-Z])/g, "-$1").toLocaleLowerCase();
  // 把驼峰转成横杆连接再转成小写
};
