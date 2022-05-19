// 列表每一项
export interface ListItem {
  // 头像
  avatar?: string;
  // 标题
  title?: string;
  // 描述
  desc?: string;
  // 时间
  time?: string;
  // tag
  tag?: string;
  // 标签类型
  tagType?: "" | "primary" | "success" | "warning" | "danger" | "info";
}
export interface ListOptions {
  title: string;
  content: ListItem[];
}
export interface ActionOptions {
  title: string;
  icon?: string;
}
