<template>
  <el-table
    v-loading="isLoading"
    :data="tableData"
    v-bind="$attrs"
    :element-loading-text="elementLoadingText"
    :element-loading-svg="elementLoadingSvg"
    :element-loading-background="elementLoadingBackground"
    :element-loading-svg-view-box="elementLoadingSvgViewBox"
    @row-click="rowClick"
  >
    <template v-for="(item, index) in tableOptions" :key="index">
      <el-table-column
        :prop="item.prop"
        :label="item.label"
        :width="item.width"
        :align="item.align"
      >
        <template #default="scope">
          <template v-if="scope.row.rowEdit">
            <el-input v-model="scope.row[item.prop]" />
          </template>
          <template v-else>
            <template v-if="scope.$index + scope.column.id === currentEdit">
              <div class="editArea" @click.stop="clickEditCell">
                <div class="editInput">
                  <el-input
                    size="small"
                    v-model="scope.row[item.prop]"
                  ></el-input>
                </div>

                <div class="icon">
                  <el-icon-check
                    class="check"
                    @click.stop="confirm(scope)"
                  ></el-icon-check>
                  <el-icon-close
                    class="close"
                    @click.stop="cancel(scope)"
                  ></el-icon-close>
                </div>
              </div>
            </template>

            <template v-else>
              <slot v-if="item.slot" :name="item.slot" :scope="scope"></slot>
              <span v-else>{{ scope.row[item.prop] }}</span>
              <!-- <component
            :is="`el-icon${toLine(item.icon)}`"
            v-if="item.icon"
          ></component> -->

              <slot name="editCell" v-if="$slots.editCell"></slot>
              <component
                v-else
                :is="`el-icon${toLine(editIcon)}`"
                @click.stop="clickEdit(scope)"
                class="edit"
              ></component>
            </template>
          </template>
        </template>
      </el-table-column>
    </template>
    <el-table-column
      :label="actionOptions.label"
      :width="actionOptions.width"
      :align="actionOptions.align"
    >
      <template #default="scope">
        <slot name="editRow" v-if="scope.row.rowEdit"></slot>
        <slot name="action" :scope="scope" v-else></slot>
      </template>
    </el-table-column>
  </el-table>
  <div
    style="
       {
        display: flex;
      }
    "
  >
    <el-pagination
      v-if="isPagination"
      v-model:currentPage="currentPage"
      v-model:page-size="pageSize"
      :page-sizes="pageSizes"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :style="{ justifyContent: paginationPositionJustify, margin: '0 10px' }"
    />
  </div>
</template>

<script lang="ts" setup>
import { PropType, computed, ref, onMounted, watch } from "vue";
import { toLine } from "src/utils/index";
import { TableOptions } from "./types";
import cloneDeep from "lodash/cloneDeep";
let props = defineProps({
  options: {
    type: Array as PropType<TableOptions[]>,
    required: true,
  },
  data: {
    type: Array as PropType<any[]>,
    required: true,
  },
  elementLoadingText: {
    type: String,
    default: "",
  },
  elementLoadingSvg: {
    type: String,
    default: "",
  },
  elementLoadingBackground: {
    type: String,
    default: "",
  },
  elementLoadingSvgViewBox: {
    type: String,
    default: "",
  },
  // 可编辑单元格的图标
  editIcon: {
    type: String,
    default: "Edit",
  },
  // 是否可以编辑行
  isEditRow: {
    type: Boolean,
    default: false,
  },
  editRowIndex: {
    type: String,
    default: "",
  },
  // 是否显示分页器
  isPagination: {
    type: Boolean,
    default: false,
  },
  // 当前是第几页数据
  currentPage: {
    type: Number,
    default: 1,
  },
  // 每页显示的数据条数
  pageSize: {
    type: Number,
    default: 10,
  },
  // 每页数据的选项
  pageSizes: {
    type: Array as PropType<number[]>,
    default: () => [10, 20, 30, 40, 50],
  },
  // 数据总数
  total: {
    type: Number,
    default: 0,
  },
  // 分页器显示位置
  paginationPosition: {
    type: String as PropType<"left" | "right" | "center">,
    default: "right",
  },
});

// emits
let emits = defineEmits([
  "confirm",
  "cancel",
  "update:editRowIndex",
  "sizeChange",
  "currentChange",
]);
// 过滤不含操作的配置
let tableOptions = computed(() => {
  return props.options.filter((item) => !item.action);
});
// 找出操作项的配置
let actionOptions = computed(() => {
  return props.options.find((item) => item.action);
});

// 判断数据是否在加载中
let isLoading = computed(() => !props.data || !props.data.length);

// 当前点击的单元格
let currentEdit = ref<string>("");

// 拷贝当前表格的数据
let tableData = ref<any[]>(cloneDeep(props.data));

// 监听父组件传过来的数据
watch(
  () => props.data,
  (val: any) => {
    tableData.value = cloneDeep(val);
    tableData.value.map((item) => {
      item.rowEdit = false;
    });
  },
  { deep: true }
);
// 监听父组件传递过来的标识
watch(
  () => props.editRowIndex,
  (val) => {
    if (val) cloneEditRowIndex.value = val;
  }
);

// 拷贝按钮标识
let cloneEditRowIndex = ref<any>(cloneDeep(props.editRowIndex));

onMounted(() => {
  tableData.value.map((item) => {
    item.rowEdit = false;
  });
});

// 点击编辑单元格
let clickEditCell = () => {
  currentEdit.value = "";
};
// 点击
let clickEdit = (scope: any) => {
  currentEdit.value = scope.$index + scope.column.id;
};

// 确认编辑
let confirm = (scope: any) => {
  emits("confirm", scope);
};

// 取消编辑
let cancel = (scope: any) => {
  emits("cancel", scope);
};

// 操作项被点击
let rowClick = (row: any, column: any) => {
  console.log(row);
  if (column.label === actionOptions.value!.label) {
    if (props.isEditRow && cloneEditRowIndex.value === props.editRowIndex) {
      row.rowEdit = !row.rowEdit;
      tableData.value.map((item) => {
        if (item !== row) {
          item.rowEdit = false;
        }
      });
      // 重置按钮的标识
      if (!row.rowEdit) {
        emits("update:editRowIndex", "");
      }
      console.log("row.rowEdit", row.rowEdit);
      console.log("editRowIndex", props.editRowIndex);
    }
  }
};

// 当前页被改变
let handleCurrentChange = (val: number) => {
  emits("currentChange", val);
};
// 每页显示条数被改变
let handleSizeChange = (val: number) => {
  emits("sizeChange", val);
};

// 分页器位置
let paginationPositionJustify = computed(() => {
  if (props.paginationPosition === "left") {
    return "flex-start";
  } else if (props.paginationPosition === "right") {
    return "flex-end";
  } else {
    return "center";
  }
});
</script>
<style scoped lang="scss">
.edit {
  width: 1.2rem;
  height: 1.2rem;
  cursor: pointer;
}
.icon {
  display: flex;
  // width: 1.3rem;
  // height: 1.3rem;
}
.editArea {
  display: flex;
  .editInput {
    flex: 3;
  }
  .icon {
    flex: 1;

    // justify-content: space-between;
    // align-items: center;
    cursor: pointer;
    svg {
      width: 1.1rem;
      height: 1.1rem;
      margin-left: 15px;
    }
    .check {
      color: green;
    }
    .close {
      color: red;
    }
  }
}
svg {
  position: relative;
  top: 4px;
}
</style>
