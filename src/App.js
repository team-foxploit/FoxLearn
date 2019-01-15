import React, { Component } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import SignLanding from "./components/auth/SignLanding";
import "./App.css";
import Home from "./components/layout/Home";
import SignUp from "./components/auth/SignUp";
import Dashboard from "./components/dashboard/Dashboard";
import History from "./components/dashboard/History";
import HandleDashboard from "./components/dashboard/HandleDashboard";
import DashTeach from "./components/dashboard/dashboard_teacher"; //temp routes
import Ranking from "./components/dashboard/Ranking";

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
          <ProtectedRoute path="/dashboard" component={HandleDashboard} />
          <ProtectedRoute path="/myhistory" component={History} />
          <ProtectedRoute path="/myranking" component={Ranking} />
          {/*// <ProtectedRoute path="/createquiz" component={CreateQuiz} />
      // <ProtectedRoute path="/histeach" component={HisTeach} />*/}
          <Route path="/dashteach" component={DashTeach} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
