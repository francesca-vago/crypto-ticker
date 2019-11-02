import React, { Component } from 'react';

class CryptoTicker extends Component {
  render(props) {
    return (
      <div>
        <h1>{this.props.name} - {this.props.price}</h1>
      </div>
    )
  }
}

export default CryptoTicker;
