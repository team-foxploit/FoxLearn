import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navabr from './components/layout/Navbar'
// import Dashboard from './components/layout/Dashboard';
// import logo from './logo.svg';

import './App.css';
// import Users from './components/users/Users'
import SignIn from './components/auth/SignIn';

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
            {/* <Route path="/" component={Dashboard} /> */}
            <Route path="/signin" component={ SignIn } />
          </Switch>
            {/* <Dashboard /> */}
          <header className="">
            <div>
            </div>
            {/* <Users /> */}
          </header>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
