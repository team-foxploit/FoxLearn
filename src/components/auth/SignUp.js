import React, { Component } from "react";
import "./styles.css";
import axios from "axios";
import Footer from "../footer/footer";

const emailRegex = RegExp(
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);

class SignUp extends Component {
  constructor() {
    super();
    this.state = {
      first_name: "",
      last_name: "",
      email: "",
      username: "",
      password: "",
      confirm_password: "",
      type: "student",
      canSubmit: false,
      users: "",
      formErrors: {
        username:"",
        email: "",
        password: ""
      }
    };
  }

  async componentDidMount() {
    const results = await axios
      .post("/api/users", {
        type: "usernames"
      })
      .then(function (response) {
        return response.data;
      })
      .catch(function (error) {
        console.log(error);
      });
    console.log({ results });
    this.setState(state => ({
      users: results
    }));
    console.log(this.state);
  }

  handleChange = e => {

    e.preventDefault();
    const { name, value } = e.target;
    let formErrors = { ...this.state.formErrors };

    switch (name) {
      case "first_name":
        formErrors.username =
          value.length < 3 ? "minimum 3 characaters required" : "";
        break;
      case "email":
        formErrors.email = emailRegex.test(value)
          ? ""
          : "invalid email address";
        break;
      case "password":
        formErrors.password =
          value.length < 6 ? "minimum 6 characaters required" : "";
        break;
      default:
        break;
    }

    this.setState({ formErrors, [name]: value }, () => console.log(this.state));


    // this.setState(
    //   {
    //     [e.target.id]: e.target.value
    //   },
    //   () => {
    //     console.log(this.state);
    //   }
    // );
  };

  studentSelected = () => {
    this.setState(
      state => ({
        type: "student"
      }),
      () => {
        console.log(this.state);
      }
    );
  };

  teacherSelected = () => {
    this.setState(
      state => ({
        type: "teacher"
      }),
      () => {
        console.log(this.state);
      }
    );
  };

  // ######################
  validate = () => {
    let isError = false;
    let errors = {
      usernameError: "",
      emailError: "",
      passwordError: ""
    };
    for (let i = 0; i < this.state.users.length; i++) {
      if (this.state.username === this.state.users[i].Username) {
        errors.usernameError = "This username is taken, use another one.";
        isError = true;
        console.log("usrname");
      } else if (this.state.email === this.state.users[i].Email) {
        errors.emailError = "This email address is taken, use another one.";
        isError = true;
        console.log("eml");
      }
    }

    if (this.state.username.length < 5) {
      isError = true;
      errors.usernameError = "Username needs to be atleast 5 characters long";
      console.log("usrln");
    }

    if (this.state.password !== this.state.confirm_password) {
      isError = true;
      errors.passwordError = "Password mismatch!";
      console.log("pwd");
    }

    if (
      this.state.email.indexOf("@") === -1 ||
      this.state.email.indexOf(".") === -1
    ) {
      isError = true;
      errors.emailError = "Email address is not valid";
      console.log("emlntvl");
    }
    this.setState(
      state => ({
        errors: errors
      }),
      () => {
        console.log(errors);
        console.log(this.state);
      }
    );
    return isError;
  };
  // ######################

  handleSubmit = e => {
    e.preventDefault();
    // this.validate();
    if (this.validate()) {
      // cannot submit
      // set helper error texts
      console.log("cant");
      console.log(this.state);
    } else {
      // can submit
      // Go to sign in
      console.log("can");
      console.log(this.state);
    }
    console.log(this.state);
  };

  render() {
    const { formErrors } = this.state.formErrors;
    console.log(formErrors);
    // console.log(this.state.errors);    
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

        <div className="row">
          <div className="col s12 m4 offset-m4">
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
                    name="first_name"
                    type="text"
                    className="validate white-text"
                    onChange={this.handleChange}
                  />
                  <label
                    htmlFor="first_name"
                    className="teal-text text-accent-2"
                  >
                    First Name
                  </label>
                </div>
                <div className="input-field  col s12">
                  <i className="material-icons prefix">account_circle</i>
                  <input
                    id="last_name"
                    name="last_name"
                    type="text"
                    className="validate white-text"
                    onChange={this.handleChange}
                  />
                  <label
                    htmlFor="last_name"
                    className="teal-text text-accent-2"
                  >
                    Last Name
                  </label>
                </div>
              </div>

              <div className="row">
                <div className="input-field col s12">
                  <i className="material-icons prefix">account_circle</i>
                  <input
                    id="username"
                    name="username"
                    type="text"
                    className="validate white-text"
                    onChange={this.handleChange}
                  />
                  <label htmlFor="username" className="teal-text text-accent-2">
                    Username
                  </label>
                  {this.state.formErrors.username.length > 0 && (
                    <p>{this.state.formErrors.username}</p>
                  )}
                  {/* <span
                    className="helper-text"
                    data-error={this.state.errors.usernameError}
                  >
                    Username should be unique
                  </span> */}
                </div>
              </div>

              {/* <div className="row">
                <div className="input-field col s12">
                  <i className="material-icons prefix">account_circle</i>
                  <input
                    id="username"
                    name="username"
                    type="text"
                    className="validate white-text"
                    onChange={this.handleChange}
                  />
                  <label htmlFor="username" className="teal-text text-accent-2">
                    Username
                  </label>
                  <span className="helper-text" data-error="true">
                    Enter username
                  </span>
                </div>
              </div> */}
              <div className="row">
                <div className="input-field col s12">
                  <i className="material-icons prefix">email</i>
                  <input
                    id="email"
                    name="email"
                    type="text"
                    className="validate white-text"
                    onChange={this.handleChange}
                  />
                  <label htmlFor="email" className="teal-text text-accent-2">
                    Email
                  </label>
                  {/* {formErrors.length > 0 && (
                    <span className="errorMessage">{formErrors.email}</span>
                  )} */}
                </div>
              </div>

              <div className="row">
                <div className="input-field col s12">
                  <i className="material-icons prefix">lock</i>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    className="validate white-text"
                    onChange={this.handleChange}
                  />
                  <label htmlFor="password" className="teal-text text-accent-2">
                    Password
                  </label>
                  {/* <span className="helper-text" data-error={this.state.errors.passwordError} /> */}
                </div>
              </div>
              <div className="input-field col s12">
                <i className="material-icons prefix">check_box</i>
                <input
                  id="confirm_password"
                  name="confirm_password"
                  type="password"
                  className="validate white-text"
                  onChange={this.handleChange}
                />
                <label
                  htmlFor="confirm_password"
                  className="teal-text text-accent-2"
                >
                  Confirm Your Password
                </label>
                {/* {formErrors.firstName.password > 0 && (
                <span className="errorMessage">{formErrors.password}</span>
              )} */}
              </div>

              <div className="row">
                <div className="input-field col s12">
                  <h4 className="teal-text text-accent-2">
                    <span>I am a</span>
                  </h4>
                  <p className="col s6">
                    <label className="teal-text text-accent-2">
                      <input
                        id="student_type"
                        name="user-type"
                        className="with-gap"
                        value="student"
                        type="radio"
                        defaultChecked
                        onClick={this.studentSelected}
                      />
                      <span>Student</span>
                    </label>
                  </p>
                  <p className="col s6">
                    <label className="teal-text text-accent-2">
                      <input
                        id="teacher_type"
                        name="user-type"
                        className="with-gap"
                        value="teacher"
                        type="radio"
                        onClick={this.teacherSelected}
                      />
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
        </div>
        <Footer />
      </div>
    );
  }
}

export default SignUp;
