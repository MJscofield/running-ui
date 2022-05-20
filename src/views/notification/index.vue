<template>
  <div class="notification">
    <m-notification value="新闹钟" icon="AlarmClock" placement="right">
      <m-list
        :list="list"
        :action="actions"
        @clickItem="clickItem"
        @clickAction="clickAction"
      >
      </m-list>
    </m-notification>
    <m-notification :value="12">
      <m-list
        :list="list"
        :action="actions"
        @clickItem="clickItem"
        @clickAction="clickAction"
      >
      </m-list>
    </m-notification>
    <m-notification :value="100" :max="99">
      <m-list
        :list="list"
        :action="actions"
        @clickItem="clickItem"
        @clickAction="clickAction"
      >
      </m-list>
    </m-notification>
    <m-notification :value="12" :is-dot="true" placement="left">
      <m-list
        :list="list"
        :action="actions"
        @clickItem="clickItem"
        @clickAction="clickAction"
      >
      </m-list>
    </m-notification>
  </div>
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
<style scoped lang="scss">
.notification {
  display: flex;
  justify-content: space-between;
}
</style>
