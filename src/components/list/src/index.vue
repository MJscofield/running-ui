<template>
  <div class="list-tabs__item">
    <el-tabs>
      <template v-for="(item, index) in list" :key="index">
        <el-tab-pane :label="item.title">
          <el-scrollbar height="290px">
            <div
              class="container"
              v-for="(item1, indey) in item.content"
              :key="indey"
              @click="clickItem(item1, indey)"
            >
              <div class="avatar" v-if="item1.avatar">
                <el-avatar size="small" :src="item1.avatar" />
              </div>
              <div class="content">
                <div class="title">
                  <div>{{ item1.title }}</div>
                  <el-tag v-if="item1.tag" :type="item1.tagType">{{
                    item1.tag
                  }}</el-tag>
                </div>
                <div class="desc" v-if="item1.desc">{{ item1.desc }}</div>
                <div class="time" v-if="item1.time">{{ item1.time }}</div>
              </div>
            </div>
          </el-scrollbar>
          <!-- <div class="action">
            <template v-for="(item2,indez)in actions" :key="indez">
              <div class="a-icon">
                <component :is="`el-icon${toLine(item2.icon)}`" />
              </div>
              <div class="a-text"></div>
            </template>
          </div> -->
          <div class="action">
            <template v-for="(action, indez) in action" :key="indez">
              <div class="a-item" @click="clickAction(action, indez)">
                <div class="a-icon">
                  <component :is="`el-icon${toLine(action.icon)}`" />
                </div>
                <div class="a-text">{{ action.text }}</div>
              </div>
            </template>
          </div>
        </el-tab-pane>
      </template>
    </el-tabs>
  </div>
</template>

<script lang="ts" setup>
import { PropType } from "vue";
import { ListOptions, ActionOptions } from "src/components/list/src/types";
import { toLine } from "src/utils";
import { emit } from "process";
import { tabsEmits } from "element-plus";

let props = defineProps({
  list: {
    type: Array as PropType<ListOptions[]>,
    required: true,
  },
  action: {
    type: Array as PropType<ActionOptions[]>,
    required: true,
  },
});
let emits = defineEmits(["clickItem", "clickAction"]);

let clickItem = (item1: ListOptions, indey: number) => {
  emits("clickItem", item1, indey);
};
let clickAction = (action: ActionOptions, indez: number) => {
  emits("clickAction", action, indez);
};
</script>
<style scoped lang="scss">
.container {
  display: flex;
  align-items: center;
  padding: 12px 16px;
  cursor: pointer;
  &:hover {
    background-color: #f5f5f5;
  }
  .avatar {
    flex: 1;
  }
  .content {
    flex: 3;
    .title {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .time,
    .desc {
      color: #999;
      font-size: 12px;
      margin-top: 4px;
    }
  }
}
.action {
  display: flex;
  align-content: center;

  height: 40px;
  border-top: 2px solid #e4e7ed;
  .a-item {
    cursor: pointer;
    padding-top: 15px;
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: center;
    &:hover {
      color: #409eff;
    }
  }
}
</style>
