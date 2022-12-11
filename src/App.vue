<template>
  <main class="min-h-screen bg-white rounded-3xl" style="padding: 49px 68px">
    <header class="flex justify-between">
      <search-input />
      <div class="flex gap-4">
        <header-button :icon="'M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0M3.124 7.5A8.969 8.969 0 015.292 3m13.416 0a8.969 8.969 0 012.168 4.5'" :isNotification="true" />
        <header-button :icon="'M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'" />
      </div>
    </header>
    <section class="w-full mt-8 flex flex-col lg:flex-row gap-8">
      <middle-box>
        <current-balance />
      </middle-box>
      <middle-box>
        <Summary />
      </middle-box>
    </section>
    <main-box>
      <Tabs :tabs="tabs" />
      <crypto-list class=" mt-8" :cryptos="cryptos" />
      <h3 class="text-4xl font-semibold mt-8 text-red-900">
        {{ error }}
      </h3>
    </main-box>
  </main>
</template>
<script lang="ts">
import coinMarketCapServices from './utils/services/coinmarketcap-services'
import { Icrypto } from './utils/types/crypto'
import { tabs } from './utils/constants/tabs'


import CryptoList from './features/cryptos/crypto-list.vue'
import SearchInput from './features/ui/search-input.vue'
import HeaderButton from './features/ui/header-button.vue'
import MainBox from './features/ui/main-box.vue'
import MiddleBox from './features/ui/middle-box.vue'
import CurrentBalance from './features/cryptos/current-balance.vue'
import Summary from './features/cryptos/summary.vue'
import Tabs from './features/ui/tabs.vue'


export default {
  components: {
  CryptoList,
  SearchInput,
  HeaderButton,
  MiddleBox,
  MainBox,
  CurrentBalance,
  Summary,
  Tabs
},
  data() {
    return {
      cryptos: [] as Icrypto[],
      error: null,
      tabs
    }
  },

  methods: {

  },
  async created() {
    const { message, data } = await coinMarketCapServices.getCryptos()

    if (message) {
      return this.error = message
    }

    this.cryptos = data
  }
}
</script>
