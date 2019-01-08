import React, { Component } from "react";
import Sidebar from "./Sidebar";
import "./styles.css";
import Footer from "../footer/footer";
import Wall from "./Wall";
import SignedInNavabr from "../layout/SignedInNavabr";

class Dashboard extends Component {

  state = {
    username:''
  }
  componentDidMount(){
    console.log(this.state);
    this.setState(state =>({
      username:this.props.location.state.props.username
    }));
    console.log(this.props.location.state.props);
    console.log(this.props.location.state.comb);
  }

  state = {};
  render() {
    return (
      <div className="dash background blue-grey">
        <SignedInNavabr details = {this.props.location.state.comb}/>
        <Sidebar />
        <Wall />
        <Footer />
      </div>
    );
  }
}

export default Dashboard;
