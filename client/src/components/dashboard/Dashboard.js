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
    console.log(this.props.location.state.props);
    this.setState(state =>({
      username:this.props.location.state.props.username
    })); 
  }

  state = {};
  render() {
    return (
      <div className="dash background blue-grey">
        <SignedInNavabr props={this.state.username}/>
        <Sidebar />
        <Wall />
        <Footer />
      </div>
    );
  }
}

export default Dashboard;
