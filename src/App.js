import React, { Component } from 'react'; 
import logo from './logo.svg';
import './App.css';

import Welcome from './components/welcome/welcome.component';
import Time from './components/time/time.component';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Welcome name="Eddy"></Welcome>
        <Time></Time>
      </div>
    );
  }
}


export default App;
