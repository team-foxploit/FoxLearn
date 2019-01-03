import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navabr from "./components/layout/Navbar";
import SignLanding from "./components/auth/SignLanding";
import "./App.css";
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";
import Dashboard from "./components/dashboard/Dashboard";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navabr className="header" />
          <Switch>
            {/* <Route path="/" component={Dashboard} /> */}
            <Route path="/home" component={SignLanding} />
            <Route path="/signin" component={SignIn} />
            <Route path="/signup" component={SignUp} />
            <Route path="/dashboard" component={Dashboard} />
          </Switch>
          <header className="">
            <div />
            {/* <Users /> */}
          </header>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
