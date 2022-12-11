<template>
  <button
    class="h-12 w-12 flex justify-center items-center rounded-lg hover:opacity-80 duration-100"
    style="background: #f7f7f9"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="h-6 w-6 secondary-text-color"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        :d="icon"
      />
    </svg>
    <div>
      <div
        v-if="isNotification"
        class="w-4 h-4 absolute -mt-7 rounded-full border-white border-2"
        style="background: #ea4d4d"
      ></div>
    </div>
  </button>
</template>

<script>
export default {
  name: "header-button",
  props: {
    icon: String,
    isNotification: Boolean,
  },
};
</script>
