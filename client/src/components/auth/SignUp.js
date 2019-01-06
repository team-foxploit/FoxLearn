import React, { Component } from "react";
import "./styles.css";
import Footer from "../footer/footer";

class SignUp extends Component {
  state = {
    username: "",
    password: ""
  };

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
  };

  render() {
    return (
      <div className="bg-img">
        <div className="row">
          <div id="block-1">
            <h2 className="teal-text text-accent-3">Sign Up</h2>
            <br />
            <h6 className="teal-text text-accent-1">
              Your account is your portal to all things FoxLearn: <br />
              your classroom, quizes, progress and more!
            </h6>
            <br />
          </div>
        </div>
        <div className="container">
          <form
            onSubmit={this.handleSubmit}
            className="alignCenter teal-text text-accent-1"
            id="block-2"
          >
            <h4 className="teal-text text-accent-1">
              Get statrted with FoxLearn
            </h4>
            <div className="row">
              <div className="input-field col s12">
                <i className="material-icons prefix">account_circle</i>
                <input
                  id="first_name"
                  type="text"
                  className="validate white-text"
                />
                <label htmlFor="first_name" className="teal-text text-accent-2">
                  First Name
                </label>
              </div>
              <div className="input-field  col s12">
                <i className="material-icons prefix">account_circle</i>
                <input
                  id="last_name"
                  type="text"
                  className="validate white-text"
                />
                <label htmlFor="last_name" className="teal-text text-accent-2">
                  Last Name
                </label>
              </div>
            </div>

            <div className="row">
              <div className="input-field col s12">
                <i className="material-icons prefix">email</i>
                <input
                  id="email"
                  type="email"
                  className="validate white-text"
                />
                <label htmlFor="email" className="teal-text text-accent-2">
                  Email
                </label>
              </div>
            </div>

            <div className="row">
              <div className="input-field col s12">
                <i className="material-icons prefix">lock</i>
                <input
                  id="password"
                  type="password"
                  className="validate white-text"
                />
                <label htmlFor="password" className="teal-text text-accent-2">
                  Password
                </label>
              </div>
              <div className="input-field col s12">
                <i className="material-icons prefix">check_box</i>
                <input
                  id="confirm_password"
                  type="password"
                  className="validate white-text"
                />
                <label
                  htmlFor="confirm_password"
                  className="teal-text text-accent-2"
                >
                  Confirm Your Password
                </label>
              </div>
            </div>

            <div className="row">
              <div className="input-field col s12">
                <p>
                  <h5 className="teal-text text-accent-2">
                    <span>I am a</span>
                  </h5>
                </p>
                <p className="col s6">
                  <label className="teal-text text-accent-2">
                    <input
                      className="with-gap"
                      name="user-type"
                      type="radio"
                      checked
                    />
                    <span>Student</span>
                  </label>
                </p>
                <p className="col s6">
                  <label className="teal-text text-accent-2">
                    <input className="with-gap" name="user-type" type="radio" />
                    <span>Teacher</span>
                  </label>
                </p>
              </div>
            </div>
            <div className="row">
              <div className="input-field white-text">
                <button className="waves-effect waves-light btn deep-teal darken-3">
                  Sign Me Up
                </button>
              </div>
            </div>
          </form>
        </div>
        <Footer />
      </div>
    );
  }
}

export default SignUp;
