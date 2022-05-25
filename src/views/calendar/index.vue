<template>
  <m-calendar
    displayEventEnd
    :events="events"
    @dateClick="dateClick"
    @eventClick="eventClick"
    :eventContent="eventContent"
  ></m-calendar>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { EventItem } from "src/components/calendar/src/types";
import { EventClickArg, EventContentArg } from "@fullcalendar/core";
import { DateClickArg } from "@fullcalendar/interaction";

let events = ref<EventItem[]>([
  {
    title: "编程",
    start: "2022-05-11 10:00:00",

    end: "2022-05-11 12:00:00",
    editable: true,
  },
  {
    title: "读书",
    start: "2022-05-21 08:00:00",
    end: "2022-05-21 16:00:00",
    editable: true,
  },
  // {
  //   title: "游泳",
  //   start: "2022-05-22 08:00",
  //   end: "2022-05-22 09:00",
  //   editable: true,
  // },
  {
    title: "旅游",
    start: "2022-05-07 16:00:00",
    end: "2022-05-08 19:00:00",
    editable: true,
  },
  {
    title: "学习",
    start: "2022-05-17 16:00:00",
    end: "2022-05-18 19:00:00",
    editable: true,
  },
]);
let dateClick = (info: DateClickArg) => {
  let event = {
    start: `${info.dateStr} 12:00:00`,
    end: `${info.dateStr} 13:00:00`,
    title: "编程",
  };
  events.value.push(event);
};
let eventContent = (arg: EventContentArg) => {
  let el = document.createElement("div");
  let timeTextArr = arg.timeText.split(" - ");
  console.log(timeTextArr);
  let start = timeTextArr[0].replace("时", "");
  let end = timeTextArr[1].replace("时", "");
  console.log(start, end);
  el.innerHTML = `
        <img src="src/assets/logo.png" style="width:20px;height:20px;">
         <div>开始时间: ${start}:00</div>
         <div>结束时间: ${end}:00</div>
         <div>标题: ${arg.event._def.title}</div>
        `;
  return {
    domNodes: [el],
  };
};
</script>
<style scoped lang="scss"></style>
