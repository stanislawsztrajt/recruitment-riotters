export interface Icrypto {
  id: number
  symbol: string
  name: string
  quote: {
    USD: {
      price: number
      percent_change_7d: number
    }
  }
}

export interface ResponseCoinMarketCap {
  data: {
    data: Icrypto[]
  },
  message: string | null
  error?: any
}

export interface RespnseCryptoIcon {
  data: string | null
  message: string | null
}