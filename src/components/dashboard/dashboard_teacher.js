import React, { Component } from "react";
import Sidebar from "./Sidebar";
import "./styles.css";
import Footer from "../footer/footer";
import WallTeacher from "./Wall_teacher";

class Dashboard extends Component {
  state = {};
  render() {
    return (
      <div className="dash background brown darken-1">
        <Sidebar />
        <WallTeacher />
        <Footer />
      </div>
    );
  }
}

export default Dashboard;
