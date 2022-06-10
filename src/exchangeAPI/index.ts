import axios from "axios";

const BASE_URL = "https://openexchangerates.org/api/";
const APP_ID = "7cab740aca504e8abc7fd3997b75a9ce";

export const getLatestExchangeRates = async () => {
  try {
    const exchangeRates = await axios(`${BASE_URL}latest.json?app_id=${APP_ID}`);
    return exchangeRates.data.rates;
  } catch (error) {
    console.log(error);
  }
};