import React, { Component } from 'react';

class Time extends Component {
  render () {
    return (
      <p>It is {new Date().toLocaleTimeString()}</p>
    );
  }
}

export default Time;
