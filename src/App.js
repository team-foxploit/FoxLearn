import React, { Component } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import SignLanding from "./components/auth/SignLanding";
import "./App.css";
import Home from "./components/layout/Home";
import SignUp from "./components/auth/SignUp";
import Dashboard from "./components/dashboard/Dashboard";
import History from "./components/dashboard/History"; //temp routes
import CreateQuiz from "./components/quizzes/CreateQuiz"; //temp routes
import HisTeach from "./components/dashboard/History_teacher"; //temp routes
import DashTeach from "./components/dashboard/dashboard_teacher"; //temp routes

const ProtectedRoute = ({ component: Component, ...rest }) => (
    <Route  {...rest} render = {
            (props) => {
                const loggedInStatus = sessionStorage.getItem('isLoggedIn');
                if (loggedInStatus === 'true') {
                    return (
                        <Component {...props} />
                    )
                }else{
                    return (
                        <Redirect to='/signin'/>
                    )
                }
            }
        }
    />
)

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/signin" component={SignLanding} />
          <Route path="/signup" component={SignUp} />
          <ProtectedRoute path="/dashboard" component={Dashboard} />
          <ProtectedRoute path="/his" component={History} />
          <ProtectedRoute path="/createquiz" component={CreateQuiz} />
          <ProtectedRoute path="/histeach" component={HisTeach} />
          <ProtectedRoute path="/dashteach" component={DashTeach} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
