import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import Aux from '../../hoc/Auxiliary';
import { Link } from 'react-router-dom';
// import axios from "axios";
// import MainInNavabr from "../layout/MainNavbar";
// import Footer from "../footer/footer";
// import "../layout/styles.css";

class SignIn extends Component {
  state = {
    username: "",
    password: "",
    type: "getConfirmation",
    table: "Student",
    isAuthenticated: null,
    userDetails: ""
  };

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  studentSelected = () => {
    this.setState(state => ({
      table: "Student"
    }));
  };

  teacherSelected = () => {
    this.setState(state => ({
      table: "Teacher"
    }));
  };

  componentDidMount(){
    const Users = [
      {
        username: "nimal",
        password: "123nimal"
      },
      {
        username: "dasun",
        password: "dasun"
      }
    ];
    this.setState({
      userDetails: Users
    }, () => {
      console.log(this.state);
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.state.userDetails.map( (user) => {
      if(user.username === this.state.username){
        if(user.password === this.state.password){
          this.setState({
            isAuthenticated: "YES"
          });
          return console.log("password and username detect"); 
        }else{
          this.setState({
            isAuthenticated: "NO"
          });
          return console.log("wrong password detect"); 
        }
      }
      return 1;
    });
    // console.log(this.state);
  };

  render() {
    // TODO : auth done condition
    if (this.state.auth === "ok") {
      return (
        <Redirect to="/dashboard" />
      );
    } else {
      console.log("authentication problem");
    }
    // if (this.state.auth === "wrongpwd") return <Redirect to="/signup" />;
    return (
      <div className="blue bg-img-landing">
        <div className="row" id="showcase">
          <div className="col s12 m6 offset-m6" id="block-2">
            <div className="container">
              <div className="card z-depth-0">
                <div className="card-stacked" id="login-card">
                  <div className="card-content">
                    <p>Log In to your FoxLearn Account!</p>
                  </div>
                  <div className="card-action">
                    <form onSubmit={this.handleSubmit} className="white">
                      <div className="input-field">
                        <div id="type">
                          <div className="row center-align">
                            <div className="col s6 m6 ">
                              <label>
                                <input
                                  className="with-gap"
                                  name="type"
                                  type="radio"
                                  defaultChecked
                                  onClick={this.studentSelected}
                                />
                                <span>Student</span>
                              </label>
                            </div>
                            <div className="col s6 m6">
                              <label>
                                <input
                                  className="with-gap"
                                  name="type"
                                  type="radio"
                                  onClick={this.teacherSelected}
                                />
                                <span>Teacher</span>
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="input-field center-align">
                        <i className="material-icons prefix">account_circle</i>
                        <input
                          id="username"
                          type="text"
                          className="validate"
                          onChange={this.handleChange}
                        />
                        <label htmlFor="username" className="">
                          Username
                        </label>
                      </div>
                      <div className="input-field center-align">
                        <i className="material-icons prefix">lock</i>
                        <input
                          id="password"
                          type="password"
                          className="validate"
                          onChange={this.handleChange}
                        />
                        <label htmlFor="password" className="">
                          Password
                        </label>
                        {(this.state.isAuthenticated === "NO" ) ? <Aux><div className="red-text center text-darken-1">Wrong Password</div><Link to="/auth" className="center">
                        Forgot Password?
                      </Link></Aux> : null}
                      </div>
                      <div className="center-align">
                        <input
                          className="btn center"
                          type="submit"
                          value="Log In"
                          onChange={this.handleChange}
                        />
                        <br />
                        <br />
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SignIn;
