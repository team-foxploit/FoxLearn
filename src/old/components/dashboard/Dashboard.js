import React, { Component } from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Sidebar from "./Sidebar";
import "./styles.css";
import "./Sidebar.css";
import "../quizzes/styles.css";
import Footer from "../footer/footer";
import Wall from "./Wall";
import History from './History';
import SignedInNavabr from "../layout/SignedInNavabr";
import Subjects from "../quizzes/Subjects"; //temp routes
import Quiz from "../quizzes/Quiz"; //temp routes
import Result from "../quizzes/Result";

class Dashboard extends Component {

  render() {
      console.log(sessionStorage.getItem(1));
      const userDetails = JSON.parse(sessionStorage.getItem('Student'));
      console.log(userDetails);
    return (
      <div className="dash background" id="dashboardBackground">
        <SignedInNavabr details={userDetails.First_Name[0]+userDetails.Last_Name[0]} />
        <Sidebar details={userDetails} />
        <Router>
          <Switch>
            <Route path="/dashboard" component={Wall} />
            <Route path="/subjects/:difficulty" component={Subjects} />
            <Route path="/myhistory" component={History} />
            <Route path="/quiz/:sub_id" component={Quiz} />
            <Route path="/dashboard/result" component={Result} />
          </Switch>
        </Router>
        <Footer />
      </div>
    );
  }
}

export default Dashboard;
