<template>
  <div id="calendar"></div>
</template>

<script lang="ts" setup>
import "@fullcalendar/core/vdom";
import { Calendar, EventClickArg } from "@fullcalendar/core";
import daygrid from "@fullcalendar/daygrid";
import interaction, { DateClickArg } from "@fullcalendar/interaction";
import { onMounted, PropType, ref, watch } from "vue";
import { EventItem } from "./types";

let props = defineProps({
  // 语言
  locale: {
    type: String,
    default: "zh-cn",
  },
  // 视图模式
  initialView: {
    type: String,
    default: "dayGridMonth",
  },
  // 按钮文字
  buttonText: {
    type: Object,
    default: () => {
      return {
        today: "今天",
        month: "月",
        week: "周",
        day: "日",
        prevYear: "上一年",
        nextYear: "下一年",
        prev: "上一月",
        next: "下一月",
      };
    },
  },
  // 头部工具栏
  headerToolbar: {
    type: Object,
    default: () => {
      return {
        start: "title",
        center: "",
        end: "prev today next",
      };
    },
  },

  // 底部工具栏
  footerToolbar: {
    type: Object,
    default: () => {},
  },

  // 事件源
  events: {
    type: Array as PropType<EventItem[]>,
    default: () => [],
  },
});

// 日历实例
let calendar = ref<Calendar>();

let emits = defineEmits(["eventClick", "dateClick"]);
// 渲染日历的方法
let renderCalendar = () => {
  let el = document.getElementById("calendar");
  console.log(el);
  if (el) {
    calendar.value = new Calendar(el, {
      plugins: [daygrid, interaction],
      locale: props.locale,
      initialView: props.initialView,
      buttonText: props.buttonText,
      headerToolbar: props.headerToolbar,
      footerToolbar: props.footerToolbar,
      eventSources: [
        {
          events(e, callback) {
            if (props.events.length) {
              callback(props.events);
            } else {
              callback([]);
            }
          },
        },
      ],
      dateClick(info: DateClickArg) {
        emits("dateClick", info);
      },
      eventClick(info: EventClickArg) {
        emits("eventClick", info);
      },
    });
    calendar.value.render();
  }
};

// 渲染日历
onMounted(() => {
  renderCalendar();
});

// 监听父组件的变化
watch(
  () => props.events,
  () => {
    renderCalendar();
    console.log(props.events);
  },
  { deep: true }
);
</script>
<style scoped lang="scss"></style>
