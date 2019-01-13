import React, { Component } from "react";
import Sidebar from "./Sidebar";
import "./styles.css";
import Footer from "../footer/footer";
import Wall from "./Wall";
import SignedInNavabr from "../layout/SignedInNavabr";

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
        <Wall />
        <Footer />
      </div>
    );
  }
}

export default Dashboard;
