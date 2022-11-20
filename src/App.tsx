import axios from 'axios';
import React from 'react';

import { Header } from './components/Header';
import { Main } from './components/Main';


import Loading from './components/ui/Loading/Loading';


export type CurrencyArray = {
  r030?: number,
  txt: string,
  rate: number,
  cc: string,
  exchangedate?: string
}

function App() {
  const [loading, setLoading] = React.useState(false)
  const [currencyArray, setCurrencyArray] = React.useState<CurrencyArray[]>([])

  const fetchCurrency = async () => {
    setLoading(true)
    const res = await axios.get<CurrencyArray[]>(`https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json`)
    const items = res.data.filter(cur => cur.cc === 'EUR' || cur.cc === 'USD').concat({ r030: 970, txt: 'Гривня', rate: 1.0000, cc: 'UAH', exchangedate: '21.11.2022' })
    setCurrencyArray(items)
    setLoading(false)
  }

  React.useEffect(() => {
    fetchCurrency()
  }, [])

  if (loading) {
    return <Loading />
  }

  return (
    <div className="App">
      <Header currencyArray={currencyArray} />
      <Main currencyArray={currencyArray} />
    </div >
  );
}

export default App;
