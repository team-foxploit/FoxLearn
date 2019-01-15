import React, { Component } from "react";
// import Sidebar from "./Sidebar";
import "./styles.css";
import Footer from "../footer/footer";
import WallTeacher from "./Wall_teacher";

class Dashboard_teacher extends Component {
  state = {};
  render() {
    return (
      <div className="dash background" id="teach_dashBack">
        {/* <Sidebar /> */}
        <WallTeacher />
        <Footer />
      </div>
    );
  }
}

export default Dashboard_teacher;
