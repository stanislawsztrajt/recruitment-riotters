import axios from "axios";
import { DefaultResponse, Icrypto, ResponseCoinMarketCap } from "../types/crypto";

const COINMARKETCAP_URL = "https://pro-api.coinmarketcap.com";

class CoinMarketCapServices {
  async getCryptos(): Promise<DefaultResponse<Icrypto[]>> {
    try {
      const response: ResponseCoinMarketCap = await axios.get(
        `${COINMARKETCAP_URL}/v1/cryptocurrency/listings/latest`,
        {
          headers: {
            Accepts: "application/json",
            // should be handled by some backend, because of CORS and security of API KEY
            "X-CMC_PRO_API_KEY": import.meta.env.VITE_COINMARKETCAP_API_KEY,
          },
        }
      );

      return {
        data: response.data.data
          .splice(0, 10)
          .filter(
            (crypto) => crypto.symbol !== "BUSD"
          ),
        message: null,
      };
    } catch (err) {
      console.error(err);
      return {
        message:
          "Install to get response (cors error) https://chrome.google.com/webstore/detail/allow-cors-access-control/lhobafahddgcelffkeicbaginigeejlf",
        data: [],
      };
    }
  }
}

export default new CoinMarketCapServices();
