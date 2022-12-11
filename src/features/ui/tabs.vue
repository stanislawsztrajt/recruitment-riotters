<template>
  <div class="flex gap-6 border-b">
    <div
      v-for="tab in tabs"
      :key="tab"
      class="font-medium text-base cursor-pointer"
      :style="`${
        tab.toLowerCase() === 'summary' ? 'color: #0A041C' : 'color: #9896A1'
      }`"
    >
      {{ tab }}
      <div
        v-if="tab.toLowerCase() === 'summary'"
        class="h-1 mt-3"
        style="background: #7445fb"
      ></div>
    </div>
  </div>
</template>

<script lang="ts">
import { PropType } from "vue";

export default {
  name: "tabs",
  props: {
    tabs: Array as PropType<string[]>,
  },
};
</script>

<style></style>
