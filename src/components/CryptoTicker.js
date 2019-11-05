import React, { Component } from 'react';
import { Card, CardBody, CardTitle, CardSubtitle } from 'reactstrap';
import wave from '../Waveform.png'

class CryptoTicker extends Component {
    constructor() {
        super();

        this.color = '';
    }

    changeColor(props) {
        // change to green if lastPrice < price
        if (this.props.lastPrice < this.props.price && this.props.lastPrice !== 0) {
            this.color = '#7CDEB6';
        }
        // else if lastPrice > price to red
        else if (this.props.lastPrice > this.props.price) {
            this.color = '#EC739D';
        }
        // default yellow
        else {
            this.color = '#ffdd67';
        }
    }

    render() {
        this.changeColor();

        return (
          <div>
              <Card>
                  <CardBody className="ticker d-flex align-items-center justify-content-center">
                    <div>
                      <CardTitle>{this.props.name.toUpperCase()}</CardTitle>
                      <CardSubtitle className="price" style={{ color: this.color }}>${this.props.price}</CardSubtitle>
                      <img src={wave} alt="" className="cardImage"/>
                    </div>
                  </CardBody>
              </Card>
          </div>
        );

    }
}

export default CryptoTicker;
