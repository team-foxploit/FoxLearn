import React, { Component } from "react";
import "./Sidebar.css";
import userImg from "../images/download.png";

class Sidebar extends Component {
  render() {
    return (
      <div className="wrapper">
        <ul id="slide-out" className="sidenav sidenav-fixed">
          <li>
            <div className="user-view blue-grey darken-3">
              <a href="#userwithID">
                <img className="circle" src={userImg} alt="" />
              </a>
              <a href="#name">
                <span className="white-text name">John Doe</span>
              </a>
              <a href="#email">
                <span className="white-text email">jdandturk@gmail.com</span>
              </a>
            </div>
          </li>
          <div className="blue-grey darken-3">
            <li>
              <a href="#!">
                <i className="material-icons cyan-text">home</i>
                <span className="white-text">Home</span>
              </a>
            </li>
            <li>
              <a href="#!">
                <i className="material-icons cyan-text">school</i>
                <span className="white-text">My Courses</span>
              </a>
            </li>
            <li>
              <a href="#!">
                <i className="material-icons cyan-text">star_rate</i>
                <span className="white-text">My Ranking</span>
              </a>
            </li>
            <li>
              <a href="#!">
                <i className="material-icons cyan-text">schedule</i>
                <span className="white-text">My History</span>
              </a>
            </li>
            <li>
              <a href="#!">
                <i className="material-icons cyan-text">timeline</i>
                <span className="white-text">Leaderboard</span>
              </a>
            </li>
            <li>
              <div className="divider" />
            </li>
            <li>
              <a href="foxlearn@foxploit.com" className="subheader center">
                <span className="white-text">@FoxLearn</span>
              </a>
            </li>
            <li>
              <div className="waves-effect waves-light btn btn-medium cyan">
                <i className="material-icons left">logout</i>Logout
              </div>
            </li>
          </div>
        </ul>
      </div>
    );
  }
}

export default Sidebar;
