import React, {useState , useEffect} from 'react';
import axios from 'axios';
import './App.css';

// https://api.coingecko.com/api/v3/coins/markets?vs_currency=aud&order=market_cap_desc&per_page=100&page=1&sparkline=false
// api promises get and then for coin currency
function App() {
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=aud&order=market_cap_desc&per_page=100&page=1&sparkline=false')
  // promise
    .then(res => {
      setCoins(res.data);
      console.log(res.data);
    })
    // error catch in console
    .catch(error => console.log(error));
  })

  return (
    <div className="coin-app">
      <div className="coin-search">
    <h1>Search for coin currency</h1>
    <form>
      <input type="text" placeholder="search currency" className="coin-input"></input>
    </form>
      </div>
    </div>
  );
}

export default App;
