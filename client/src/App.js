import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navabr from './components/layout/Navbar'
import Dashboard from './components/layout/Dashboard';
// import logo from './logo.svg';

import './App.css';
import Users from './components/users/Users'

class App extends Component {
  // componentWillMount() {
  //   window.test();
  // }
  
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navabr />
          <Switch>
            <Route path="/" component={Dashboard} />
          </Switch>
            {/* <Dashboard /> */}
          <header className="">
            {/* <img src={logo} className="App-logo" alt="logo" /> */}
            <div>
            </div>
            <Users />
          </header>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
