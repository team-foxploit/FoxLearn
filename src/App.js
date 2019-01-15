import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import SignLanding from "./components/auth/SignLanding";
import "./App.css";
import Home from "./components/layout/Home";
import SignUp from "./components/auth/SignUp";
import Dashboard from "./components/dashboard/Dashboard";
import History from "./components/dashboard/History"; //temp routes
import CreateQuiz from "./components/quizzes/CreateQuiz"; //temp routes
import HisTeach from "./components/dashboard/History_teacher"; //temp routes
import DashTeach from "./components/dashboard/Dashboard_teacher"; //temp routes

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/signin" component={SignLanding} />
          <Route path="/signup" component={SignUp} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/his" component={History} />
          <Route path="/createquiz" component={CreateQuiz} />
          <Route path="/histeach" component={HisTeach} />
          <Route path="/dashteach" component={DashTeach} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
