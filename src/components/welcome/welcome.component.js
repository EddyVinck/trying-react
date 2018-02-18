import React, { Component } from 'react';

class Welcome extends Component {
  render () {
    return (
      <h2>{this.props.name}'s first React App!</h2>
    );
  }
}

export default Welcome;
