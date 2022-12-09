<template>
  <div class="text-red-500">
    <img :src="icon" alt="">
    {{ crypto?.symbol }}
    {{ crypto?.name }}
    {{ crypto?.quote.USD.percent_change_7d }}
    {{ crypto?.quote.USD.price }}
  </div>
</template>

<script lang="ts">
import { onMounted, PropType } from 'vue';
import { Icrypto } from '../../utils/types/crypto';
import coinmarketcapServices from '../../utils/services/coinmarketcap-services';
import { blobToDataURL } from '../../utils/helpers/inedex';


export default {
  props: {
    crypto:  Object as PropType<Icrypto>
  },
  data() {
    return {
      icon: ''
    }
  },
  async created () {
    const { data, message } = await coinmarketcapServices.getCryptoIconBySymbol(this.crypto.symbol)
    if (message) {
      return
    }

    const iconUrl = await blobToDataURL(new Blob([data as any]), (res) => console.log(res))
    console.log(iconUrl)
    const image = new Image()
    image.src = iconUrl as unknown as string
    console.log(image)
    this.icon = data
  }
}
</script>

<style>

</style>