import React, { Component } from 'react';

class CryptoTicker extends Component {
  constructor() {
    super();

    this.color = ''
  }

  changeColor(props) {
    // change to green if lastPrice < price
    if (this.props.lastPrice < this.props.price && this.props.lastPrice !== 0) {
      this.color = 'green'
    }
    // else if lastPrice > price to red
    else if (this.props.lastPrice > this.props.price) {
      this.color = 'red'
    }
    else if (this.props.lastPrice === this.props.price) {
      this.color = 'yellow'
    }
  }

  render(props) {
    this.changeColor()

    return (
      <div>
        <h1 style={{color: this.color}}>{this.props.name} - ${this.props.price}</h1>
      </div>
    )
  }
}

export default CryptoTicker;
