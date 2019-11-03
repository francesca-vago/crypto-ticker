import React, { Component } from 'react';

class CryptoTicker extends Component {
  constructor() {
    super();

    this.color = ''
  }

  changeColor(props) {
    // change to green if lastPrice < price
    if (this.props.lastPrice < this.props.price && this.props.lastPrice !== 0) {
      this.color = '#94aa2a'
    }
    // else if lastPrice > price to red
    else if (this.props.lastPrice > this.props.price) {
      this.color = '#cf455c'
    }
    else if (this.props.lastPrice === this.props.price) {
      this.color = '#ffdd67'
    }
  }

  render(props) {
    this.changeColor()

    return (
      <tr style={{backgroundColor: this.color}} className="ticker">
        <td>{this.props.name}</td>
        <td>${this.props.price}</td>
      </tr>
    )
  }
}

export default CryptoTicker;
