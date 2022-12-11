export interface Icrypto {
  id: number
  symbol: string
  name: string
  quote: {
    USD: {
      price: number
      percent_change_24h: number
      percent_change_7d: number
      percent_change_30d: number
      percent_change_60d: number
      percent_change_90d: number
    }
  }
}

export interface ResponseCoinMarketCap {
  data: {
    data: Icrypto[]
  },
  error?: any
}

export interface DefaultResponse<T> {
  data: T
  message: string | null
  error?: any
}