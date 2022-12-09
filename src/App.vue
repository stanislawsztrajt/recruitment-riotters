<script lang="ts">
  import axios from 'axios'
  import coinMarketCapServices from './utils/services/coinmarketcap-services'
  import { Icrypto } from './utils/types/crypto'
  import CryptoList from './features/cryptos/crypto-list.vue'


  export default {
    components: {CryptoList},
    data() {
      return {
        cryptos: [] as Icrypto[],
        error: null
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
<template>
  <div class="text-red-500">
    <crypto-list :cryptos="cryptos" />
    {{ error }}
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
