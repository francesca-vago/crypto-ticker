import React, { Component } from 'react';
import { Button } from 'reactstrap';

class SaveButton extends Component {

  handleClick = (event) => {
    let body = this.props.prices;
    body.timestamp = Date.now();

    fetch('http://localhost:8080/prices/', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body)
    })
  }

  render() {

    return (
      <div>
        <Button
           outline
           color="primary"
           size="lg"
           onClick={this.handleClick}
           >Save Prices</Button>
      </div>
    )
  }
}

export default SaveButton
