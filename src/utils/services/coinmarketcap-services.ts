import axios from "axios"
import { RespnseCryptoIcon, ResponseCoinMarketCap } from "../types/crypto"

const COINMARKETCAP_URL = 'https://pro-api.coinmarketcap.com'
const VITE_COINMARKETCAP_API_KEY = '719c5433-61c3-4079-9268-e4de4457d490'

class CoinMarketCapServices {
  async getCryptos (): Promise<ResponseCoinMarketCap> {
    try {
      const response = await axios.get(
        `${COINMARKETCAP_URL}/v1/cryptocurrency/listings/latest`, 
        {
          headers: {
            'Accepts': 'application/json',
            'Access-Control-Allow-Origin' : '*',
            'X-CMC_PRO_API_KEY': VITE_COINMARKETCAP_API_KEY,
          }
        })

      return { data: response.data.data, message: null }
    } catch(err) {
      console.error(err);
      return { message: 'Something went wrong with coinmarketcap API', data: { data: [] }}
    }
  }

  async getCryptoIconBySymbol (symbol: string): Promise<RespnseCryptoIcon> {
    try {
      const response = await axios.get(`https://coinicons-api.vercel.app/api/icon/${symbol}`)
      if (symbol.toLowerCase() === 'btc')
      
      console.log(response)
      return { data: response.data, message: null }
    } catch (err) {
      console.error(err);
      return { data: null, message: 'Somethingn went wrong with crypto icon API' }
    }


  }
}


export default new CoinMarketCapServices()
