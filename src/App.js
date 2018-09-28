import React, { Component } from 'react';
import CounterApp from './components/CounterApp';
import AsyncApp from './components/AsyncApp';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <CounterApp />
        <AsyncApp />
      </div>
    );
  }
}

export default App;
