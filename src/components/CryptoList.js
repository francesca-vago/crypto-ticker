import React, { Component } from 'react';
import CryptoTicker from './CryptoTicker.js';


class CryptoList extends Component {
  constructor() {
    super();

    const CoinGecko = require('coingecko-api');
    this.api_client = new CoinGecko();

    this.state = {
      tickers: []
    }
  }

  componentDidMount() {
    let getTickers = async() => {
      let resp = await this.api_client.simple.price({
        ids: ['bitcoin', 'ethereum', 'litecoin', 'xrphd'],
        vs_currencies: ['usd'],
      });
      return resp.data
    }
    getTickers().then(
      (response) => {
        this.setState({
          tickers: response
        });
    });
  }

  render() {
    const domTickers = Object.keys(this.state.tickers).map((currency) => {
        return (
          <CryptoTicker
            key= {currency}
            name= {currency}
            price= {this.state.tickers[currency].usd}
          />
        )
    });

    return (
      <div>
        {domTickers}
      </div>
    )
  }
}

export default CryptoList;
