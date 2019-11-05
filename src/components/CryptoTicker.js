import React, { Component } from 'react';
import { Card, CardBody, CardTitle, CardSubtitle, CardText } from 'reactstrap';
import wave from '../Waveform.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleUp, faAngleDoubleDown, faEquals } from '@fortawesome/free-solid-svg-icons';

class CryptoTicker extends Component {
    constructor() {
        super();

        this.color = '';
        this.icon = '';
        this.percentage = 0;
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

        return (
          <div>
              <Card>
                  <CardBody className="ticker d-flex align-items-center justify-content-center">
                    <div>
                      <CardTitle>{this.props.name.toUpperCase()}</CardTitle>
                      <CardSubtitle className="price">${this.props.price}</CardSubtitle>
                      <CardText style={{ color: this.color }}> {this.icon} {this.percentageRound}% </CardText>
                      <img src={wave} alt="" className="cardImage"/>
                    </div>
                  </CardBody>
              </Card>
          </div>
        );

    }
}

export default CryptoTicker;
