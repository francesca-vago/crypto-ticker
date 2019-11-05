import React, { Component } from 'react';
import { Card, CardBody, CardTitle, CardSubtitle, CardText } from 'reactstrap';
import wave from '../Waveform.png';
import wave2 from '../Waveform-upside.png';
import bitcoin from '../bitcoin.png';
import bitcoincash from '../bitcoin-cash.png';
import ethereum from '../ethereum.jpg';
import litecoin from '../litecoin.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleUp, faAngleDoubleDown, faEquals } from '@fortawesome/free-solid-svg-icons';

class CryptoTicker extends Component {
    constructor() {
        super();

        this.color = '';
        this.icon = '';
        this.percentage = 0;
        this.logo = '';
        this.cardImage = '';
    }

    changeColor(props) {
        // change to green if lastPrice < price
        if (this.props.lastPrice < this.props.price && this.props.lastPrice !== 0) {
            this.color = '#7CDEB6';
            this.icon = <FontAwesomeIcon icon={ faAngleDoubleUp } />;
            this.percentage = [(this.props.price - this.props.lastPrice) / this.props.lastPrice] * 100.0;
            this.percentageRound = this.percentage.toFixed(2);
        }
        // else if lastPrice > price to red
        else if (this.props.lastPrice > this.props.price) {
            this.color = '#EC739D';
            this.icon = <FontAwesomeIcon icon={ faAngleDoubleDown } />;
            this.percentage = [(this.props.price - this.props.lastPrice) / this.props.lastPrice] * 100.0;
            this.percentageRound = this.percentage.toFixed(2);
        }
        // default yellow
        else {
            this.color = '#ffdd67';
            this.icon = <FontAwesomeIcon icon={ faEquals } />;
            this.percentageRound = 0;
        }
        console.log(this.percentageRound);
    }

    render() {
        this.changeColor();

        if (this.props.name === 'bitcoin') {
          this.logo = <img src={bitcoin} alt="" className="cardLogo"/>
          this.cardImage = <img src={wave} alt="" className="cardImage" />
        }

        else if (this.props.name === 'bitcoin-cash') {
          this.logo = <img src={bitcoincash} alt="" className="bitcoinCashLogo"/>
          this.cardImage = <img src={wave} alt="" className="cardImage" />
        }

        else if (this.props.name === 'ethereum') {
          this.logo = <img src={ethereum} alt="" className="cardLogo"/>
          this.cardImage = <img src={wave2} alt="" className="cardImage" />
        }

        else if (this.props.name === 'litecoin') {
          this.logo = <img src={litecoin} alt="" className="cardLogo"/>
          this.cardImage = <img src={wave2} alt="" className="cardImage" />
        }

        return (
          <div>
              <Card>
                  <CardBody className="ticker d-flex align-items-center justify-content-center">
                    <div className={ (this.props.name === 'bitcoin-cash') ? 'cardBitcoinCash' : 'cardContent'}>
                      {this.logo}
                      <CardTitle>{this.props.name.toUpperCase()}</CardTitle>
                      <CardSubtitle className="price">${this.props.price}</CardSubtitle>
                      <CardText style={{ color: this.color }}> {this.icon} {this.percentageRound}% </CardText>
                    </div>
                    {this.cardImage}
                    <div className="colorFill"></div>
                  </CardBody>
              </Card>
          </div>
        );

    }
}

export default CryptoTicker;
