import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Form, FormGroup, Label, Input } from 'reactstrap';
import CryptoTicker from './CryptoTicker.js';
import SaveButton from './Button.js';
import Header from './Header.js';


class CryptoList extends Component {
  constructor() {
    super();

    const CoinGecko = require('coingecko-api');
    this.apiClient = new CoinGecko();

    this.state = {
      tickers: {},
    }

    this.currencies= ['Bitcoin']
    this.allCurrencies = ['Bitcoin','Bitcoin-Cash','Cardano','Dash','EOS','Ethereum','Litecoin','NEO','ZCash','XRPHD','Monero']
  }

  async getTickers() {
    let resp = await this.apiClient.simple.price({
      ids: this.currencies,
      vs_currencies: ['usd'],
    });

    for (let currency in resp.data) {
      resp.data[currency].lastPrice = this.state.tickers[currency] ? this.state.tickers[currency].usd : 0;
    }

    this.setState({
      tickers: resp.data
    });
  }

  componentDidMount() {
    this.getTickers(this.options);
    this.interval = setInterval(() => this.getTickers(), 60 * 1000)
  }

  handleChange = (event) => {
    if (event.target.checked) {
      this.currencies.push(event.target.value)
    }
    else {
      this.currencies = this.currencies.filter((currency) => currency !== event.target.value);
    }
    this.getTickers();
  }

  render() {
    const domTickers = Object.keys(this.state.tickers).map((currency) => {
      return (
        <CryptoTicker
          key= {currency.id}
          name= {currency}
          price= {this.state.tickers[currency].usd}
          lastPrice= {this.state.tickers[currency].lastPrice}
        />
      )
    });

    const checkboxes = this.allCurrencies.map((currency) => {
      return (
        <FormGroup check>
          <Label check>
            <Input type="checkbox" onChange={this.handleChange} value={currency}/> {currency}
          </Label>
        </FormGroup>
      )
    });

    return (
      <div className="appContainer">
        <Header />
        <Container>
          <Row>
            <Col className="container">
              <Form className="formContainer">
                {checkboxes}
              </Form>
            </Col>
            <Col className="container">
              <div>
                {domTickers}
                <SaveButton
                  prices= {this.state.tickers}
                 />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default CryptoList;
