import { defineComponent, PropType, useAttrs } from "vue";
import { MenuItem } from "./types";
import * as Icons from "@element-plus/icons-vue";
import "./styles/index.scss";
export default defineComponent({
  props: {
    data: {
      type: Array as PropType<MenuItem[]>,
      required: true,
    },
    defaultActive: {
      type: String,
      default: "1",
    },
    uniqueOpened: {
      type: Boolean,
      default: true,
    },
    router: {
      type: Boolean,
      default: false,
    },
    // 用户指定传进来的属性
    name: {
      type: String,
      default: "name",
    },
    index: {
      type: String,
      default: "index",
    },
    icon: {
      type: String,
      default: "icon",
    },
  },
  setup(props, ctx) {
    // let attrs = useAttrs();
    // 封装一个无限渲染层级的方法
    // 函数会返回一段jsx代码
    let renderMenu = (data: any[]) => {
      return data.map((item) => {
        item.i = (Icons as any)[item[props.icon!]];
        // 插槽实际上是对象, key为插槽名字, fn为函数代码
        // 处理subMenu的插槽
        let slots = {
          title: () => {
            return (
              <>
                <item.i />
                <span>{item[props.name]}</span>
              </>
            );
          },
        };
        // 如果有子菜单, 就递归渲染子菜单
        if (item.children && item.children.length) {
          return (
            <el-sub-menu index={item[props.index]} v-slots={slots}>
              {renderMenu(item.children)}
            </el-sub-menu>
          );
        } else {
          return (
            <el-menu-item index={item[props.index]}>
              <item.i />
              <span>{item[props.name]}</span>
            </el-menu-item>
          );
        }
        // 正常的菜单项
      });
    };
    // console.log(attrs);

    return () => {
      return (
        <el-menu
          default-active={props.defaultActive}
          router={props.router}
          unique-opened={props.uniqueOpened}
          class="el-menu-vertical-demo"
        >
          {renderMenu(props.data)}
        </el-menu>
      );
    };
  },
});
