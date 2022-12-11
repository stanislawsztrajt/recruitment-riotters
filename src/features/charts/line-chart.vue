<template>
  <Line :data="data" :options="options" />
</template>

<script lang="ts">
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ChartData,
  ScatterDataPoint,
  ChartOptions,
} from "chart.js";
import { PropType } from "vue";
import { Line } from "vue-chartjs";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default {
  name: "App",
  components: {
    Line,
  },
  props: {
    data: {
      type: Object as PropType<
        ChartData<"line", (number | ScatterDataPoint | null)[], unknown>
      >,
      default: {
        labels: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
        ],
        datasets: [
          {
            label: "Data One",
            backgroundColor: "#f87979",
            data: [40, 39, 10, 40, 39, 80, 40],
            lineTension: 0.5,
            pointRadius: 0,
          },
        ],
      },
    },
    options: {
      type: Object as PropType<ChartOptions>,
      default: {
        responsive: true,
        maintainAspectRatio: false,
      },
    },
  },
};
</script>
