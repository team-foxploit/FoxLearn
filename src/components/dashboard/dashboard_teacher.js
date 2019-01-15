import React, { Component } from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Sidebar from "./Sidebar";
import "./styles.css";
import Footer from "../footer/footer";
import Wall from "./Wall_teacher";
import SignedInNavabr from "../layout/SignedInNavabr";
import CreateQuiz from "../quizzes/CreateQuiz";
import HisTeach from "../dashboard/History_teacher";

class Dashboard_teacher extends Component {

  render() {
    console.log(sessionStorage.getItem(1));
    const userDetails = JSON.parse(sessionStorage.getItem('Teacher'));
    console.log(userDetails);
    return (
      <div className="dash background" id="teach_dashBack">
        <SignedInNavabr details={userDetails.First_Name[0]+userDetails.Last_Name[0]} />
        <Sidebar details={JSON.parse(sessionStorage.getItem('Teacher'))}/>
        <Router>
          <Switch>
            <Route path="/dashboard" component={Wall} />
            <Route path="/dashboard/createquiz" component={CreateQuiz} />
            <Route path="/dashboard/histeach" component={HisTeach} />
            {/*<Route path="/dashboard/result" component={Result} />*/}
          </Switch>
        </Router>
        <Footer />
      </div>
    );
  }
}

export default Dashboard_teacher;
