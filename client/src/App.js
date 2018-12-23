import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navabr from './components/layout/Navbar';
import SignLanding from './components/auth/SignLanding';
// import Dashboard from './components/layout/Dashboard';
// import logo from './logo.svg';

import './App.css';
// import Users from './components/users/Users'
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';

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
            <Route path="/home" component={ SignLanding } />
            <Route path="/signin" component={ SignIn } />
            <Route path="/signup" component={SignUp} />
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
