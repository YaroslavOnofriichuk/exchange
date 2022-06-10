import {useState, useEffect} from 'react';
import {getLatestExchangeRates} from "../exchangeAPI";
import {Header} from "./Header";
import {Converter} from "./Converter";

export const App = () => {
  const [currency, setCurrency] = useState({
    uah: 0,
    usd: 0,
    eur: 0,
  });

  useEffect(() => {
    const getRates = async() => {
      const rates = await getLatestExchangeRates();
      setCurrency({
        uah: rates.UAH,
        usd: rates.USD,
        eur: rates.EUR, 
      });
    };
    getRates();
  }, [])
  

  return (
    <div>
      <Header currency={currency}/>
      <Converter currency={currency}/>
    </div>
  );
};
