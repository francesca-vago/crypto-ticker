import React, { Component } from 'react';
import { Button } from 'reactstrap';

class SaveButton extends Component {

  handleClick = (event) => {
    console.log(JSON.stringify(this.props));
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
