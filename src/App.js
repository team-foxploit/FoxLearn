import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
// import Home from './components/layout/Home';
// import Navbar from "./components/layout/MainNavbar";
import SignLanding from "./components/auth/SignLanding";
import "./App.css";
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";
import Dashboard from "./components/dashboard/Dashboard";
import Subjects from "./components/quizzes/Subjects"; //temp routes
import Quiz from "./components/quizzes/Quiz"; //temp routes

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          {/* <Navabr className="header" /> */}
          <Switch>
            {/* <Route path="/" component={Home} /> */}
            {/* <Route path="/home" component={SignLanding} /> */}
            {/* <Route path="/test" component={SignIn} /> */}
            {/* <Route path="/" component={Dashboard} /> */}
            <Route path="/home" component={SignLanding} />
            <Route path="/signin" component={SignIn} />
            <Route path="/signup" component={SignUp} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/subjects" component={Subjects} />
            <Route path="/quiz" component={Quiz} />
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
