<template>
  <div>
    <div class="flex justify-between items-center">
      <h2 class="h-6 font-medium text-xl">Current Balance</h2>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        style="color: #9896a1"
        class="w-8 cursor-pointer"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
        />
      </svg>
    </div>
    <div class="mt-10">
      <h1 class="font-medium text-6xl">
        <span style="color: #9896a1">$</span
        ><span style="color: #0a041c">21 432.23</span>
      </h1>
    </div>
    <div class="flex items-center mt-4">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-5 h-5 text-white rounded-full p-1"
        style="background: #2dc78f"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
        />
      </svg>
      <span class="font-medium text-lg ml-2" style="color: #2dc78f">
        12% vs last month
      </span>
    </div>
    <div class="flex gap-2" style="margin-top: 72px">
      <button class="button-primary">Quick Invest</button>

      <button class="button-secondary">Show Report</button>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
