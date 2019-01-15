import React, { Component } from "react";
import { Link } from 'react-router-dom';
import "./Sidebar.css";
import userImg from "../images/download.png";

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      username: "",
      email: ""
    };
  }

  componentDidMount() {
    this.setState(state => ({
      name: this.props.details.First_Name + " " + this.props.details.Last_Name,
      username: this.props.details.Username,
      email: this.props.details.Email
    }));
    console.log(this.state);
    console.log(this.props.details);
  }

  render() {
    return (
      <div className="wrapper">
        <ul id="slide-out" className="sidenav sidenav-fixed blue-grey darken-3">
          <li>
            <div className="user-view">
              <Link to='/userdetails'>
                <img className="circle" src={userImg} alt="" />
              </Link>
              <Link to='/userdetails'>
                <span className="white-text name">{this.state.name}</span>
              </Link>
              <Link to='/userdetails'>
                <span className="white-text email">{this.state.email}</span>
              </Link>
            </div>
          </li>
          <div className="blue-grey darken-2">
            <li>
              <Link to='/dashboard'>
                <i className="material-icons cyan-text">home</i>
                <span className="white-text">Home</span>
              </Link>
            </li>
            <li>
              <Link to='/mycourses'>
                <i className="material-icons cyan-text">school</i>
                <span className="white-text">My Courses</span>
              </Link>
            </li>
            <li>
              <Link to='/myranking'>
                <i className="material-icons cyan-text">star_rate</i>
                <span className="white-text">My Ranking</span>
              </Link>
            </li>
            <li>
              <Link to='/myhistory'>
                <i className="material-icons cyan-text">schedule</i>
                <span className="white-text">My History</span>
              </Link>
            </li>
            <li>
              <Link to='/leaderboard'>
                <i className="material-icons cyan-text">timeline</i>
                <span className="white-text">Leaderboard</span>
              </Link>
            </li>
            <li>
              <div className="divider" />
            </li>
            <li>
              <Link to="foxlearn@foxploit.com" className="subheader center">
                <span className="white-text">@FoxLearn</span>
              </Link>
            </li>
            <li>
              <div className="centText">
                <div className="waves-effect waves-light btn btn-medium cyan">
                  <i className="material-icons left">logout</i>Logout
                </div>
              </div>
            </li>
          </div>
        </ul>
      </div>
    );
  }
}

export default Sidebar;
