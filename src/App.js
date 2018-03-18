import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Searchbar from './Components/Searchbar/Searchbar';

const API_KEY = 'AIzaSyDgLXWOnihs40bAqMvT2NmETGHHiHC4DrM';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Searchbar />
      </div>
    );
  }
}

export default App;
