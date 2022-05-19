<template>
  <div></div>
</template>

<script lang="ts" setup>
import { PropType } from "vue";
import { ListOptions, ActionOptions } from "src/components/list/src/types";
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
</script>
<style scoped lang="scss"></style>
