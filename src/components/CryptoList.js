import React, { Component } from 'react';
import CryptoTicker from './CryptoTicker.js';


class CryptoList extends Component {
  constructor() {
    super();

    const CoinGecko = require('coingecko-api');
    this.apiClient = new CoinGecko();

    this.state = {
      tickers: [],
      lastPrices: []
    }
  }

  async getTickers() {
    let resp = await this.apiClient.simple.price({
      ids: ['bitcoin', 'ethereum', 'litecoin', 'xrphd'],
      vs_currencies: ['usd'],
    });

    this.setState({
      tickers: resp.data
    });
    console.log(resp.data);
  }

  componentDidMount() {
    this.getTickers();
    this.interval = setInterval(() => this.getTickers(), 60000)
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
