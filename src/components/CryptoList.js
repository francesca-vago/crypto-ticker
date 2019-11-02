import React, { Component } from 'react';
import CryptoTicker from './CryptoTicker.js';
import SaveButton from './Button.js'


class CryptoList extends Component {
  constructor() {
    super();

    const CoinGecko = require('coingecko-api');
    this.apiClient = new CoinGecko();

    this.state = {
      tickers: {}
    }

    this.firstTime = true;
  }

  async getTickers() {
    let resp = await this.apiClient.simple.price({
      ids: ['bitcoin', 'ethereum', 'litecoin', 'xrphd'],
      vs_currencies: ['usd'],
    });

    if (this.firstTime) {
      this.firstTime = false;
    } else {
      for (let currency in resp.data) {
        resp.data[currency].lastPrice = this.state.tickers[currency].usd;
      }
    }

    this.setState({
      tickers: resp.data
    });
  }

  componentDidMount() {
    this.getTickers();
    this.interval = setInterval(() => this.getTickers(), 10000)
  }

  render() {
    const domTickers = Object.keys(this.state.tickers).map((currency) => {
      return (
        <CryptoTicker
          key= {currency}
          name= {currency}
          price= {this.state.tickers[currency].usd}
          lastPrice= {this.state.tickers[currency].lastPrice}
        />
      )
    });

    return (
      <div>
        {domTickers}
        <SaveButton
          prices= {this.state.tickers}
         />
      </div>
    )
  }
}

export default CryptoList;
