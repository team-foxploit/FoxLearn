import React, { Component } from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Sidebar from "./Sidebar";
import "./styles.css";
import "./Sidebar.css";
import "../quizzes/styles.css";
import Footer from "../footer/footer";
import Wall from "./Wall";
import SignedInNavabr from "../layout/SignedInNavabr";
import Subjects from "../quizzes/Subjects"; //temp routes
import Quiz from "../quizzes/Quiz"; //temp routes
import Result from "../quizzes/Result";

class Dashboard extends Component {
    componentWillMount(){
        console.log(this.state);
    }
  componentDidMount() {
      sessionStorage.setItem(this.props.location.state.props.Std_ID, JSON.stringify(this.props.location.state.props));
    console.log(this.props.location.state.props);
    console.log(this.props.location.state.comb);
  }

  render() {
    return (
      <div className="dash background" id="dashboardBackground">
        <SignedInNavabr details={this.props.location.state.comb} />
        <Sidebar details={this.props.location.state.props} />
        <Router>
          <Switch>
            <Route path="/dashboard" component={Wall} />
            <Route path="/subjects/:difficulty" component={Subjects} />
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
