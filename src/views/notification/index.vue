<template>
  <m-notification :value="12"></m-notification>
  <br />
  <br />
  <m-notification :value="100" :max="99"></m-notification>
  <br />
  <br />

  <m-notification :value="12" :is-dot="true"></m-notification>
  <br />
  <br />

  <m-notification value="新闹钟" icon="AlarmClock">
    <m-list></m-list>
  </m-notification>
</template>

<script lang="ts" setup></script>
<style scoped lang="scss"></style>
