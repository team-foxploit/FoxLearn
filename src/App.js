import React, { Component } from "react";
import style from "./App.module.css";
import Layout from './components/Layout/Layout';
import Home from './components/Home/Home';
// import Dashboard from './containers/Dashboard/Dashboard';
import 'materialize-css';

// import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
// import SignLanding from "./components/auth/SignLanding";
// import Home from "./components/layout/Home";
// import SignUp from "./components/auth/SignUp";
// import HandleDashboard from "./components/dashboard/HandleDashboard";
// import Ranking from "./components/dashboard/Ranking";


class App extends Component {
  render() {
    return (
        <div className={style.App}>
            <Layout>
                <Home />
            </Layout>
        </div>
    );
  }
}

export default App;
