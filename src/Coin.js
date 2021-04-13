// rfce command for react structure

import React from 'react'

const Coin = ({ name, image, symbol, price, volume, priceChange, marketcap }) => {
    return (
        <div className="coin-container">
            <div className="coin-row">
            <div className="coin">
                {/* target image, volume, price etc */}
                <img src={image} alt='crypto' className="coin-image"/>
                <h1 className="coin-name">{name}</h1>
                <p className="coin-symbol">{symbol}</p>
            </div>
            <div className="coin-data">
                <p className="coin-price">${price}</p>
             {/* gives comma's to the values */}
                <p className="coin-volume">${volume.toLocaleString()}</p>
                {priceChange < 0 ? (
                    <p className="coin-percent red">{priceChange.toFixed(2)}%</p>
                ) : (<p className="coin-percent green">{priceChange.toFixed(2)}%</p>)
            }
                <p className="coin-marketcap">
                    Market Cap: ${marketcap.toLocaleString()} 
                </p>
            </div>
            </div>
        </div>
    );
};

export default Coin
