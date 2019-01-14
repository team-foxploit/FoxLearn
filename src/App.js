import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import SignLanding from "./components/auth/SignLanding";
import "./App.css";
import Home from "./components/layout/Home";
import SignUp from "./components/auth/SignUp";
import Dashboard from "./components/dashboard/Dashboard";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/signin" component={SignLanding} />
            <Route path="/signup" component={SignUp} />
            <Route path="/dashboard" component={Dashboard} />
          </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
