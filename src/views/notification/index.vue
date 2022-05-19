<template>
  <m-notification value="新闹钟" icon="AlarmClock">
    <m-list
      :list="list"
      :action="actions"
      @clickItem="clickItem"
      @clickAction="clickAction"
    ></m-list>
  </m-notification>
  <br />
  <br />
  <m-notification :value="12"></m-notification>
  <br />
  <br />
  <m-notification :value="100" :max="99"></m-notification>
  <br />
  <br />

  <m-notification :value="12" :is-dot="true"></m-notification>
</template>

<script lang="ts" setup>
import { list, actions } from "src/components/notification/src/data";
let clickItem = (val: any) => {
  console.log(val);
};
let clickAction = (val: any) => {
  console.log(val);
};
</script>
<style scoped lang="scss"></style>
