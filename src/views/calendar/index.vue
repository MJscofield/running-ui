<template>
  <m-calendar
    :events="events"
    @dateClick="dateClick"
    @eventClick="eventClick"
  ></m-calendar>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { EventItem } from "src/components/calendar/src/types";
import { EventClickArg } from "@fullcalendar/core";
import { DateClickArg } from "@fullcalendar/interaction";

let events = ref<EventItem[]>([
  {
    title: "编程",
    start: "2022-05-05",
    end: "2022-05-07",
    editable: true,
  },
  {
    title: "读书",
    start: "2022-05-21",
    end: "2022-05-22",
    editable: true,
  },
  {
    title: "游泳",
    start: "2022-05-22 08:00",
    end: "2022-05-22 09:00",
    editable: true,
  },
  {
    title: "旅游",
    start: "2022-05-04",
    end: "2022-05-07",
    editable: true,
  },
]);
let dateClick = (info: DateClickArg) => {
  console.log(info);
  events.value.push({
    title: "新增事件",
    start: info.dateStr + " 08:00",
    end: info.dateStr + " 09:00",
  });
};
let eventClick = (info: EventClickArg) => {
  console.log(info);
};
</script>
<style scoped lang="scss"></style>
