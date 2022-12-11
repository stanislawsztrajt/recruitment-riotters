<template>
  <div class="h-full">
    <div class="flex justify-between items-center">
      <h2 class="h-6 font-medium text-xl">Summary</h2>
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
    <div class="mt-6 h-3/4">
      <line-chart :data="data" :options="options" />
    </div>
  </div>
</template>

<script lang="ts">
import { ChartData, ScatterDataPoint } from "chart.js";

import LineChart from "../charts/line-chart.vue";

export const summaryChartData: ChartData<
  "line",
  (number | ScatterDataPoint | null)[],
  unknown
> = {
  labels: ["1 May", "8 May", "15 May", "21 May", "28 May"],
  datasets: [
    {
      label: "This month",
      backgroundColor: "#7445FB",
      borderColor: "#7445FB",
      lineTension: 0.5,
      pointRadius: 0,
      data: [0, 10000, 20000, 16000, 25000],
    },
    {
      label: "Last month",
      backgroundColor: "#858585",
      borderDash: [5, 5],
      lineTension: 0.5,
      pointRadius: 0,
      data: [0, 15000, 12000, 5000, 8500],
    },
  ],
};

export const summaryChartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: true,
      position: "bottom",
      align: "start",
    },
  },
  scales: {
    x: {
      grid: {
        display: false
      }
    },
  }
};

export default {
  components: {
    LineChart,
  },
  data() {
    return {
      data: summaryChartData,
      options: summaryChartOptions,
    };
  },
};
</script>

<style></style>
