import React, { Component } from "react";
import "./styles.css";
import axios from "axios";
import Footer from "../footer/footer";

class SignUp extends Component {
  state = {
      first_name:'',
      last_name:'',
      email:'',
      username: '',
      password: '',
      confirm_password:'',
      type: 'student',
      formErrors: {email: '', username:'', password: ''},
      formValidity: {email: false, username: false, password: false},
      canSubmit: false,
      users:''
  }

  componentDidMount(){
    axios.post('/api/users', { type:'usernames' } )
    .then(function (response) {
      console.log(response.data);
      this.setState(
        state => ({
          users:response.data
        })
      );
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });

    // console.log(response);
  }

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
    console.log(this.state);    
  };

  studentSelected = () => {
    this.setState(state => ({
        type: 'student'
    }));
    console.log(this.state);    
  }
  
  teacherSelected = () => {
    this.setState(state => ({
      type: 'teacher'
    }));
    console.log(this.state);
  }
  
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
                  name="first_name"
                  type="text"
                  className="validate white-text"
                  onChange={this.handleChange}
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
                  onChange={this.handleChange}
                />
                <label htmlFor="last_name" className="teal-text text-accent-2">
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
                <span className="helper-text" data-error="true">Enter username</span>
              </div>
            </div>

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
                <span className="helper-text" data-error="true">Enter email address</span>
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
                />
                <label htmlFor="password" className="teal-text text-accent-2">
                  Password
                </label>
              </div>
              <div className="input-field col s12">
                <i className="material-icons prefix">check_box</i>
                <input
                  id="confirm_password"
                  name="confirm_password"
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
<<<<<<< HEAD
                    <input
                      id="teacher_type"
                      name="user-type"
                      className="with-gap"
                      value="teacher"
                      type="radio"
                      onClick={this.teacherSelected}
                    />
=======
                    <input className="with-gap" name="user-type" type="radio" />
>>>>>>> CJay
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
<<<<<<< HEAD
=======
        <Footer />
>>>>>>> CJay
      </div>
    );
  }
}

export default SignUp;
