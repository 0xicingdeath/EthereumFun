import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css'; 
import * as Web3 from 'web3'; 
import * as BigNumber from 'bignumber.js'; 

class App extends Component { 
  async componentDidMount() {  
     const provider = new Web3.providers.HttpProvider('http://localhost:8545'); 	
  } 
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
