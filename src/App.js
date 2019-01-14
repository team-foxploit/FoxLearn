import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
// import Home from './components/layout/Home';
// import Navbar from "./components/layout/MainNavbar";
import SignLanding from "./components/auth/SignLanding";
import "./App.css";
import Home from "./components/layout/Home";
import SignUp from "./components/auth/SignUp";
import Dashboard from "./components/dashboard/Dashboard";
import Subjects from "./components/quizzes/Subjects"; //temp routes
import Quiz from "./components/quizzes/Quiz"; //temp routes
import History from "./components/dashboard/History";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/signin" component={SignLanding} />
            <Route path="/signup" component={SignUp} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/subjects" component={Subjects} />
            <Route path="/quiz" component={Quiz} />
            <Route path="/his" component={History} />
          </Switch>
          <header className="">
            <div />
          </header>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
