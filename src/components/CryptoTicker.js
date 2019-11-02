import React, { Component } from 'react';

class CryptoTicker extends Component {
  constructor() {
    super();

    this.color = 'yellow'
  }

  changeColor(props) {
    // change to green if lastPrice < price
    if (this.props.lastPrice < this.props.price) {
      this.color = 'green'
    }
    // else if lastPrice > price to red
    else if (this.props.lastPrice > this.props.price) {
      this.color = 'red'
    }
    else {
      this.color = 'yellow'
    }
  }

  render(props) {
    this.changeColor()

    return (
      <div>
        <h1 style={{color: this.color}}>{this.props.name} - {this.props.price}</h1>
      </div>
    )
  }
}

export default CryptoTicker;
