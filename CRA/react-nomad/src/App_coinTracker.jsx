import { useState, useEffect } from "react";
import React from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, [])


  const ExchangeCoin = ({ }) => {

    const [coin, setCoin] = useState({});
    const [money, setMoney] = useState(0);

    const handleSelect = (e) => {
      const dataset1 = e.target.options[e.target.selectedIndex].dataset
      setMoney(0);
      setCoin(dataset1);
    }

    const onMoneyChnage = (e) => {
      setMoney(e.target.value);
    }

    const MoneyInput = () => {
      return (
        <>
          <h4 >Exchange {coin.coinsymbol} :{
            money !== 0 ? Math.round((money / coin.coinvalue) * 10000) / 10000 : 0
          }</h4>
        </>
      )
    }

    return (
      <div> <select onChange={handleSelect} >
        <option>select Coin</option>
        {coins.map(coin => (
          <option
            key={coin.id}
            value={coin.quotes.USD.price}
            data-coinid={coin.id}
            data-coinsymbol={coin.symbol}
            data-coinvalue={coin.quotes.USD.price}
          >
            {coin.name} ({coin.symbol}): ${coin.quotes.USD.price} USD
          </option>
        ))}
      </select>
        <hr />
        <div>
          <span>USD Amount </span><input type="number" value={money} onChange={onMoneyChnage} />
          {coin.coinsymbol === undefined ? <h4>select Coin</h4> : <MoneyInput />}
        </div>
      </div>
    )
  }

  return (
    <div>
      <h1>The Coins! {loading ? "" : `(${coins.length})`}</h1>
      {loading ? <strong>Loding....</strong> : <ExchangeCoin />}
    </div>
  )

}

export default App;
