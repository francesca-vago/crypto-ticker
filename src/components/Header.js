import React from 'react';
import cryptocurrency from '../cryptocurrency.png';

const Header = () => {
    return (
        <div className="mainHeader">
          <span><img src={cryptocurrency} alt="" className="logo"/></span>
          <div>
            <h1>Crypto Ticker</h1>
            <h3>Overview</h3>
          </div>
        </div>
    )
}

export default Header;
