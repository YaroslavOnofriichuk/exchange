import {useState} from 'react';

interface Prop {
  currency: {[name: string]: number};
};

export const Converter = ({currency}: Prop) => {
  const [firstValue, setFirstValue] = useState<number>(1);
  const [firstCurrency, setFirstCurrency] = useState<string>("USD");
  const [secondValue, setSecondValue] = useState<number>(1);
  const [secondCurrency, setSecondCurrency] = useState<string>("UAH");

  const firstFormChange = (e : React.FormEvent<HTMLFormElement>) => {
    const form = e.currentTarget
    const formElements = form.elements as typeof form.elements & {
      firstValue: HTMLInputElement,
      firstCurrency: HTMLInputElement
    };
    const coefficient = Number(currency[secondCurrency.toLowerCase()]) / Number(currency[firstCurrency.toLowerCase()])
    setSecondValue(Number((Number(formElements.firstValue.value) * coefficient).toFixed(2)));
  };

  const secondFormChange = (e : React.FormEvent<HTMLFormElement>) => {
    const form = e.currentTarget
    const formElements = form.elements as typeof form.elements & {
      secondValue: HTMLInputElement,
      secondCurrency: HTMLInputElement
    };
    const coefficient = Number(currency[firstCurrency.toLowerCase()]) / Number(currency[secondCurrency.toLowerCase()])
    setFirstValue(Number((Number(formElements.secondValue.value) * coefficient).toFixed(2)));
  };

  return (
    <>
      <form onChange={firstFormChange}>
        <input 
          type="number" 
          name="firstValue" 
          min={1}
          value={firstValue}
          onChange={(e) => setFirstValue(Number(e.currentTarget.value))}
        >
        </input>
        <select 
          name="firstCurrency"
          onChange={(e) => setFirstCurrency(e.currentTarget.value)}
        >
          <option value="USD" defaultChecked>USD</option>
          <option value="EUR">EUR</option>
          <option value="UAH">UAH</option>
        </select>
      </form>
      <p>=</p>
      <form onChange={secondFormChange}>
        <input 
          type="number" 
          name="secondValue" 
          min={1}
          value={secondValue}
          onChange={(e) => {
            setSecondValue(Number(e.currentTarget.value));
          }}
        >
        </input>
        <select 
          name="secondCurrency" 
          onChange={(e) => setSecondCurrency(e.currentTarget.value)}
        >
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          <option value="UAH" defaultChecked>UAH</option>
        </select>
      </form>
    </>
  );
};