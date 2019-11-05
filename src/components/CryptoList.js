import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Form, FormGroup, Label, Input } from 'reactstrap';
import CryptoTicker from './CryptoTicker.js';
import SaveButton from './Button.js';
import Header from './Header.js';
import Sidebar from './SideBar.js'

class CryptoList extends Component {
    constructor() {
        super();

        const CoinGecko = require('coingecko-api');
        this.apiClient = new CoinGecko();

        this.state = {
            tickers: {},
        }

        this.currencies = ['Bitcoin', 'Bitcoin-Cash', 'Ethereum', 'Litecoin' ]
        this.allCurrencies = [
            'Bitcoin',
            'Bitcoin-Cash',
            'Cardano',
            'Dash',
            'EOS',
            'Ethereum',
            'Litecoin',
            'NEO',
            'ZCash',
            'XRPHD',
            'Monero'
        ]
    }

    async getTickers() {
        if (this.currencies.length === 0) {
            this.setState({
                tickers: []
            });
            return;
        }
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
                    key={currency}
                    name={currency}
                    price={this.state.tickers[currency].usd}
                    lastPrice={this.state.tickers[currency].lastPrice}
                />
            )
        });

        const checkboxes = this.allCurrencies.map((currency) => {
            return (
                <FormGroup check key={currency}>
                    <Label check>
                      <div className="checkbox">
                          <Input
                                type="radio"
                                onChange={this.handleChange}
                                value={currency}
                                defaultChecked={this.currencies.includes(currency) ? true : false}
                          /> {currency}
                      </div>
                    </Label>
                </FormGroup>
            )
        });

        return (
                <Container className="m-0">
                    <Row>
                      <Col sm="3" className="sideBar">
                        <Sidebar />
                      </Col>
                      <Col sm="9" className="mainContainer">
                        <div className="d-flex justify-content-between">
                            <div>
                                <div className="d-flex align-items-center justify-content-between">
                                  <Header />
                                  <SaveButton prices={this.state.tickers} />
                                </div>
                                <div className="cardsContainer">
                                    {domTickers}
                                </div>
                            </div>
                            <div className="formContainer">
                                <h3 className="formTitle">Customize your dashboard</h3>
                                <Form>
                                    {checkboxes}
                                </Form>
                            </div>
                        </div>
                      </Col>
                    </Row>
                </Container>

        )
    }
}

export default CryptoList;
