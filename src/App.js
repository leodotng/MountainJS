import React, { Component } from 'react';
import logo from './mountainjslogo.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo}  alt="logo" />
          
          <a
            className="App-link"
            href="https://www.meetup.com/mountainjs"
            target="_blank"
            rel="noopener noreferrer"
          >
            Mountain.js
          </a>
          <p>JavaScript Study Retreats in the Mountains</p>
        </header>
      </div>
    );
  }
}

export default App;
