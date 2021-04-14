import React, {useState , useEffect} from 'react';
import axios from 'axios';
import './App.scss';
import Coin from './Coin';

// https://api.coingecko.com/api/v3/coins/markets?vs_currency=aud&order=market_cap_desc&per_page=100&page=1&sparkline=false
// api promises get and then for coin currency
function App() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=aud&order=market_cap_desc&per_page=100&page=1&sparkline=false')
  // promise
    .then(res => {
      setCoins(res.data);
      console.log(res.data);
    })
    // error catch in console
    .catch(error => console.log(error));
  }, [])  ;

  const handleChange = e => {
    setSearch(e.target.value)
  };

  const filteredCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="coin-app">
      <div className="coin-search">
    <h1>Cryptocurrency Analyser</h1>
    
    <form>
      <input type="text" placeholder="search currency" className="coin-input" onChange={handleChange}></input>
    </form>
      </div>
      {filteredCoins.map(coin => {
        return <Coin key={coin.id}
                name={coin.name}
                image={coin.image}
                symbol={coin.symbol}
                price={coin.current_price}
                volume={coin.total_volume}
                priceChange={coin.price_change_percentage_24h}
                marketcap={coin.market_cap}
          />;
      })}
      <div className="footer">
      <a href="https://github.com/Vipuldeep/cryptocurrency_api" className="link" target="_blank" rel="noreferrer">@vipuldeep</a>
    </div>
    </div>
  );
}

export default App;
