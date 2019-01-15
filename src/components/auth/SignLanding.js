import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";
// import MainInNavabr from "../layout/MainNavbar";
import Footer from "../footer/footer";
import "../layout/styles.css";

class SignLanding extends Component {
  state = {
    username: "",
    password: "",
    type: "getConfirmation",
    table: "Student",
    auth: "fail",
    userDetails: ""
  };

  handleChange = e => {
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

  handleSubmit = e => {
    e.preventDefault();
    axios
      .post(`https://foxlearn-api.herokuapp.com/api/users/auth`, {
        type: this.state.type,
        table: this.state.table,
        username: this.state.username,
        password: this.state.password
      })
      .then(res => {
        if (res.data.length === 1) {
          console.log("Auth ok");
          sessionStorage.setItem('isLoggedIn','true');
          console.log(this.state);
          this.setState(state => ({
            auth: "ok",
            userDetails: res.data[0]
          }));
        }
        console.log(res.data[0]);
        const type = res.data[0].table;
        sessionStorage.setItem(this.state.table, JSON.stringify(res.data[0]));
      });
    console.log(this.state);
  };

  render() {
    if (this.state.auth === "ok") {
      let comb =
        this.state.userDetails.First_Name[0] +
        this.state.userDetails.Last_Name[0];
      return (
        <Redirect
          to={{
            pathname: "/dashboard",
            state: { props: this.state.userDetails, comb: comb }
          }}
        />
      );
    } else {
      console.log("authentication problem");
    }
    if (this.state.auth === "wrongpwd") return <Redirect to="/signup" />;
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
                      <a href="#!" className="left">
                        Forgot Password?
                      </a>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    );
  }
}

export default SignLanding;
