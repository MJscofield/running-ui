import { defineComponent, PropType, useAttrs } from "vue";
import { MenuItem } from "./types";
import { toLine } from "src/utils";
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
  },
  setup(props, ctx) {
    // let attrs = useAttrs();
    // 封装一个无限渲染层级的方法
    // 函数会返回一段jsx代码
    let renderMenu = (data: MenuItem[]) => {
      return data.map((item) => {
        item.i = `el-icon${toLine(item.icon)}`;
        // 插槽实际上是对象, key为插槽名字, fn为函数代码
        // 处理subMenu的插槽
        let slots = {
          title: () => {
            return (
              <>
                <item.i />
                <span>{item.name}</span>
              </>
            );
          },
        };
        // 如果有子菜单, 就递归渲染子菜单
        if (item.children && item.children.length) {
          return (
            <el-sub-menu index={item.index} v-slots={slots}>
              {renderMenu(item.children)}
            </el-sub-menu>
          );
        } else {
          return (
            <el-menu-item index={item.index}>
              <item.i />
              <span>{item.name}</span>
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
        >
          {renderMenu(props.data)}
        </el-menu>
      );
    };
  },
});
