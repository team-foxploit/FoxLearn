import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Navabr from './components/layout/Navbar'

// import logo from './logo.svg';

import './App.css';
import Users from './components/users/Users'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navabr />
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
      </BrowserRouter>
    );
  }
}

export default App;
