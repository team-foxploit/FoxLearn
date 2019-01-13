import React, { Component } from "react";
import "../layout/styles.css";
import axios from "axios";
import Footer from "../footer/footer";

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
      users: null,
      // errors: "",
      formErrors: {
        first_name: "",
        last_name: "",
        username: "",
        email: "",
        password: "",
        confirm_password: ""
      },
      formValidity: {
        first_name: false,
        last_name: false,
        email: false,
        username: false,
        password: false,
        confirm_password: false
      }
    };
    this.handleChange = this.handleChange.bind(this);
  }

  async componentDidMount() {
    const results = await axios
      .post("/api/users", {
        type: "usernames"
      })
      .then(function(response) {
        return response.data;
      })
      .catch(function(error) {
        console.log(error);
      });
    console.log({ results });
    this.setState(
      {
        users: results
      },
      () => {
        for (let i = 0; i < this.state.users.length; i++) {
          console.log(this.state.users[i].Username);
        }
      }
    );
  }

  studentSelected = () => {
    this.setState(
      {
        type: "student"
      },
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

  // triggered everytime value changes in our textboxes
  handleChange(event) {
    const { name, value } = event.target;
    this.setState(
      {
        [name]: value
      },
      function() {
        this.validateField(name, value);
        console.log(name, value);
      }
    );
  }

  validateField(name, value) {
    const fieldValidationErrors = this.state.formErrors;
    const validity = this.state.formValidity;
    const isEmail = name === "email";
    const isUsername = name === "username";
    const isPassword = name === "password";
    const isCnfrmPass = name === "confirm_password";

    const emailTest = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    validity[name] = value.length > 0;
    fieldValidationErrors[name] = validity[name]
      ? ""
      : `This field is required and cannot be empty`;

    if (validity[name]) {
      if (isEmail) {
        validity[name] = emailTest.test(value);
        fieldValidationErrors[name] = validity[name]
          ? ""
          : `${name} should be a valid email address`;
      }
      if (isPassword) {
        validity[name] = value.length >= 6;
        fieldValidationErrors[name] = validity[name]
          ? ""
          : `${name} should be 6 characters or more`;
        if (this.state.confirm_password.length > 0) {
          validity["confirm_password"] = this.state.confirm_password === value;
          fieldValidationErrors["confirm_password"] = validity[
            "confirm_password"
          ]
            ? "Password matches."
            : `Password doesn't match!`;
        }
      }
      if (isCnfrmPass) {
        validity[name] = value === this.state.password;
        fieldValidationErrors[name] = validity[name]
          ? "Password matches."
          : `Password doesn't match!`;
      }
      if (isUsername) {
        for (let i = 0; i < this.state.users.length; i++) {
          if (this.state.username === this.state.users[i].Username) {
            fieldValidationErrors[name] = `'${
              this.state.username
            }' username already exists. Try another one!`;
          }
        }
      }
    }

    this.setState(
      {
        formErrors: fieldValidationErrors,
        formValidity: validity
      },
      () => this.canSubmit()
    );
  }

  canSubmit() {
    this.setState({
      canSubmit:
        this.state.formValidity.first_name &&
        this.state.formValidity.last_name &&
        this.state.formValidity.email &&
        this.state.formValidity.username &&
        this.state.formValidity.password &&
        this.state.formValidity.username &&
        this.state.formValidity.confirm_password
    });
  }

  errorClass(error) {
    return error.length === 0 ? "" : "is-invalid";
  }

  // triggered on submit
  handleSubmit = event => {
    event.preventDefault();
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

        <div className="row">
          <div className="col s12 m4 offset-m4">
            <form
              onSubmit={this.handleSubmit}
              className="teal-text text-accent-1"
              id="block-2"
              noValidate
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
                    className={`validate white-text ${this.errorClass(
                      this.state.formErrors.first_name
                    )}`}
                    onChange={this.handleChange}
                  />
                  <label
                    htmlFor="first_name"
                    className="teal-text text-accent-2"
                  >
                    First Name
                  </label>
                  <div className="invalid-feedback">
                    <span className="pink-text text-accent-2">
                      {this.state.formErrors.first_name}
                    </span>
                  </div>
                </div>

                <div className="input-field  col s12">
                  <i className="material-icons prefix">account_circle</i>
                  <input
                    id="last_name"
                    name="last_name"
                    type="text"
                    className={`validate white-text ${this.errorClass(
                      this.state.formErrors.last_name
                    )}`}
                    onChange={this.handleChange}
                  />
                  <label
                    htmlFor="last_name"
                    className="teal-text text-accent-2"
                  >
                    Last Name
                  </label>
                  <div className="invalid-feedback">
                    <span className="pink-text text-accent-2">
                      {this.state.formErrors.last_name}
                    </span>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="input-field col s12">
                  <i className="material-icons prefix">account_circle</i>
                  <input
                    id="username"
                    name="username"
                    type="text"
                    className={`validate white-text ${this.errorClass(
                      this.state.formErrors.username
                    )}`}
                    onChange={this.handleChange}
                  />
                  <label htmlFor="username" className="teal-text text-accent-2">
                    Username
                  </label>
                  <div className="invalid-feedback">
                    <span className="pink-text text-accent-2">
                      {this.state.formErrors.username}
                    </span>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="input-field col s12">
                  <i className="material-icons prefix">email</i>
                  <input
                    id="email"
                    name="email"
                    type="text"
                    className={`validate white-text ${this.errorClass(
                      this.state.formErrors.email
                    )}`}
                    onChange={this.handleChange}
                    value={this.state.email}
                  />
                  <label htmlFor="email" className="teal-text text-accent-2">
                    Email
                  </label>
                  <div className="invalid-feedback">
                    <span className="pink-text text-accent-2">
                      {this.state.formErrors.email}
                    </span>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="input-field col s12">
                  <i className="material-icons prefix">lock</i>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    className={`validate white-text ${this.errorClass(
                      this.state.formErrors.password
                    )}`}
                    value={this.state.password}
                    onChange={this.handleChange}
                  />
                  <label htmlFor="password" className="teal-text text-accent-2">
                    Password
                  </label>
                  <div className="invalid-feedback">
                    <span className="pink-text text-accent-2">
                      {this.state.formErrors.password}
                    </span>
                  </div>
                </div>
              </div>
              <div className="input-field col s12">
                <i className="material-icons prefix">check_box</i>
                <input
                  id="confirm_password"
                  name="confirm_password"
                  type="password"
                  className={`validate white-text ${this.errorClass(
                    this.state.formErrors.confirm_password
                  )}`}
                  onChange={this.handleChange}
                />
                <label
                  htmlFor="confirm_password"
                  className="teal-text text-accent-2"
                >
                  Confirm Your Password
                </label>
                <div className="invalid-feedback">
                  <span className="lime-text text-accent-4">
                    {this.state.formErrors.confirm_password}
                  </span>
                </div>
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
                  <button
                    className="waves-effect waves-light btn deep-teal darken-3"
                    disabled={!this.state.canSubmit}
                  >
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
