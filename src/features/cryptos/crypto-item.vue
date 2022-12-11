<template>
  <div
    class="bg-white h-20 w-full rounded-lg p-5 flex justify-between items-center"
    style="border: 1px solid #ebebf3"
  >
    <div class="flex items-center w-36">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bitcoin.svg/1200px-Bitcoin.svg.png"
        style="borded: 1px solid #ebebf3"
        class="w-12 h-12 rounded-full p-2 border"
        alt="?"
      />
      <div class="ml-4">
        <div class="crypto-item-text-secondary">
          {{ crypto?.symbol }}
        </div>
        <div class="crypto-item-text-primary">
          {{ crypto?.name }}
        </div>
      </div>
    </div>
    <div class="flex flex-col w-32">
      <div class="crypto-item-text-secondary">Price</div>
      <div class="crypto-item-text-primary">
        ${{ crypto?.quote.USD.price.toFixed(2) }}
      </div>
    </div>

    <div v-if="crypto" class="flex flex-col justify-center w-24">
      <div class="crypto-item-text-secondary">Change</div>
      <div
        v-if="crypto.quote.USD.percent_change_24h > 0"
        class="change-element"
        style="color: #2dc78f"
      >
        <div class="change-text">
          {{ changedCryptoValue }}
        </div>
        <div class="change-up">
          <svg
            class="w-3"
            style="padding: 2px"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
            />
          </svg>
        </div>
      </div>
      <div v-else class="change-element" style="color: #ea4d4d">
        <div class="change-text">
          {{ changedCryptoValue }}
        </div>
        <svg
          class="change-down"
          style="padding: 2px"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25"
          />
        </svg>
      </div>
    </div>

    <div class="h-8 w-36">
      <line-chart :data="data" :options="options" />
    </div>
    <div>
      <button class="button-secondary">Sell</button>
      <button class="button-primary ml-2">Buy</button>
    </div>
  </div>
</template>

<script lang="ts">
import { ChartData, ChartOptions, ScatterDataPoint } from "chart.js";
import { PropType } from "vue";
import { Icrypto } from "../../utils/types/crypto";
import LineChart from "../charts/line-chart.vue";

export const cryptoItemChartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: false,
    tooltips: {
      enabled: false,
    },
    title: {
      display: false,
    },
  },
  scales: {
    x: {
      grid: {
        display: false,
      },
      display: false,
      ticks: {
        display: false,
        drawBorder: false
      },
    },
    y: {
      grid: {
        display: false,
      },
      display: false,
      ticks: {
        display: false,
      },
    },
  },
} as unknown as ChartOptions;

export default {
  components: {
    LineChart,
  },
  props: {
    crypto: Object as PropType<Icrypto>,
  },
  data() {
    return {
      options: cryptoItemChartOptions,
      data: {
        labels: ['', '', '', ''],
        datasets: [
          {
            borderColor: this.crypto!.quote.USD.percent_change_24h > this.crypto!.quote.USD.percent_change_90d ? '#2DC78F' : '#EA4D4D',
            lineTension: 0.5,
            pointRadius: 0,
            data: [
              this.crypto?.quote.USD.percent_change_90d,
              this.crypto?.quote.USD.percent_change_60d,
              this.crypto?.quote.USD.percent_change_30d,
              this.crypto?.quote.USD.percent_change_7d,
              this.crypto?.quote.USD.percent_change_24h,
            ],
          },
        ],
      } as ChartData<"line", (number | ScatterDataPoint | null)[], unknown>,

      changedCryptoValue: 0,
    };
  },
  created() {
    if (this.crypto?.quote.USD.percent_change_24h > 0) {
      this.changedCryptoValue = `+ ${this.crypto?.quote.USD.percent_change_24h}%`;
    } else {
      const withoutMinus = String(
        this.crypto?.quote.USD.percent_change_24h
      ).substring(1, this.crypto?.quote.USD.percent_change_24h.length);
      this.changedCryptoValue = `- ${withoutMinus}%`;
    }
  },
};
</script>

<style>
.crypto-item-text-primary {
  color: #0a041c;
  @apply text-sm font-semibold;
}

.crypto-item-text-secondary {
  color: #9896a1;
  @apply font-normal text-sm;
}

.change-element {
  @apply font-semibold text-sm flex flex-row w-48;
}

.change-text {
  font-weight: 600;
  font-size: 14px;
  line-height: 14px;
}

.change-up {
  width: 14px;
  height: 14px;
  margin-left: 7px;
  background: rgba(45, 199, 143, 0.2);
  border: 1px solid #2dc78f;
  box-sizing: border-box;
  @apply rounded-full;
}

.change-down {
  width: 14px;
  height: 14px;
  margin-left: 7px;
  background: rgba(234, 77, 77, 0.2);
  border: 1px solid #ea4d4d;
  box-sizing: border-box;
  @apply rounded-full;
}
</style>
