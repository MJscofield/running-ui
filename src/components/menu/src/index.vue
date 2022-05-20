<template>
  <!-- 这里最重要的是这个v-bind,可以将父组件传过来的值统统自动绑定, 不用通过props接收 -->
  <el-menu
    class="el-menu-vertical-demo"
    :default-active="defaultActive"
    :unique-opened="uniqueOpened"
    :router="router"
    v-bind="$attrs"
  >
    <el-scrollbar>
      <template v-for="(item, i) in data" :key="i">
        <el-menu-item
          v-if="!item.children || !item.children.length"
          :index="item[index]"
        >
          <component :is="`el-icon${toLine(item[icon])}`" v-if="item[icon]" />
          <span>{{ item[name] }}</span>
        </el-menu-item>
        <el-sub-menu
          v-if="item.children && item.children.length"
          :index="item[index]"
        >
          <template #title>
            <component :is="`el-icon${toLine(item[icon])}`" v-if="item[icon]" />
            <span>{{ item[name] }}</span>
          </template>
          <el-menu-item
            v-for="(item1, indey) in item.children"
            :key="indey"
            :index="item1[index]"
          >
            <component
              :is="`el-icon${toLine(item1[icon])}`"
              v-if="item1[icon]"
            />
            <span>{{ item1[name] }}</span>
          </el-menu-item>
        </el-sub-menu>
      </template>
    </el-scrollbar>
  </el-menu>
</template>

<script lang="ts" setup>
import { PropType } from "vue";
import { MenuItem } from "./types";
import { toLine } from "src/utils";
let props = defineProps({
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
});
</script>
<style scoped lang="scss">
svg {
  margin: 0 2px;
}

.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
}

.el-menu--collapse {
  width: 80px;
  span {
    display: none;
  }
  .el-menu-item {
    justify-content: center;
  }
}
</style>
