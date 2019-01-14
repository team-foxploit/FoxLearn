import React, { Component } from "react";
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Sidebar from "./Sidebar";
import "./styles.css";
import Footer from "../footer/footer";
import Wall from "./Wall";
import SignedInNavabr from "../layout/SignedInNavabr";
import Subjects from "../quizzes/Subjects"; //temp routes
import Quiz from "../quizzes/Quiz"; //temp routes

class Dashboard extends Component {

  componentDidMount(){
    console.log(this.props.location.state.props);
    console.log(this.props.location.state.comb);
  }

  render() {
    return (
      <div className="dash background blue-grey">
        <SignedInNavabr details = {this.props.location.state.comb}/>
        <Sidebar details = {this.props.location.state.props}  />
        <Router>
            <Switch>
                <Route path="/dashboard" component={Wall}/>
                <Route path="/subjects/:difficulty" component={Subjects} />
                <Route path="/quiz/:q_id" component={Quiz} />
            </Switch>
        </Router>
        <Footer />
      </div>
    );
  }
}

export default Dashboard;
