import React, { Component } from "react";
import Sidebar from "./Sidebar";
import "./styles.css";
import Footer from "../footer/footer";
import Wall from "./Wall";

class Dashboard extends Component {
  state = {};
  render() {
    return (
      <div className="dash background blue-grey">
        <Sidebar />
        <Wall />
        <Footer />
      </div>
    );
  }
}

export default Dashboard;
