<template>
  <div class="flex flex-col gap-2">
    <div class="mt-4 text-3xl" v-if="cryptos?.length === 0">Loading...</div>
    <crypto-item
      v-else
      :key="crypto.id"
      :crypto="crypto"
      v-for="crypto in cryptos"
    />
  </div>
</template>

<script lang="ts">
import { Icrypto } from "../../utils/types/crypto";
import { PropType } from "vue";
import cryptoItem from "./crypto-item.vue";

export default {
  components: { cryptoItem },
  props: {
    cryptos: Array as PropType<Icrypto[]>,
  },
  created() {},
};
</script>

<style></style>
