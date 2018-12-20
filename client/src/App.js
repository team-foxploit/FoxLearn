import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Users from './components/users/Users'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <div>
            <p>Started boilerplate</p>
          </div>
          <Users />
        </header>
        <div>
          <p>Started boilerplate</p>
        </div>
      </div>
    );
  }
}

export default App;
