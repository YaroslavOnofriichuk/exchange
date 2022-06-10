interface Prop {
  currency: {[name: string]: number};
};

export const Header = ({currency}: Prop) => {
  return (
    <>
      <p>1 USD = {(currency.uah / currency.usd).toFixed(2)} UAH</p>
      <p>1 EUR = {(currency.uah / currency.eur).toFixed(2)} UAH</p>
    </>
  );
};