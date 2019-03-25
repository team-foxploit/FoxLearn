import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import Aux from '../../hoc/Auxiliary';
import { Link } from 'react-router-dom';
import axios from "axios";
import style from './SignIn.module.css';
// import MainInNavabr from "../layout/MainNavbar";
// import Footer from "../footer/footer";
// import "../layout/styles.css";

class SignIn extends Component {
  state = {
    username: "",
    password: "",
    isAuthenticated: null,
    allUsers: "",
    error: null
  };

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    }, () => {
      console.log(this.state);
    });
  };

  componentDidMount(){
    axios.get('http://localhost:5000/api/users/all')
    .then((response) => {
      console.log(response.data);
      let users = [];
      response.data.users.forEach(user => {
        users.push(user.userName);
        users.push(user.email);
      });
      this.setState({
        allUsers: users
      }, () => {
        console.log(this.state);
      });
    })
    .catch((error) => {
      console.log(error);
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log("ccc");    
    // this.state.allUsers.map( (user) => {
    //   if(user.username === this.state.username){
    //     if(user.password === this.state.password){
    //       this.setState({
    //         isAuthenticated: "YES"
    //       });
    //       return console.log("password and username detect"); 
    //     }else{
    //       this.setState({
    //         isAuthenticated: "NO"
    //       });
    //       return console.log("wrong password detect"); 
    //     }
    //   }
    //   return 1;
    // });
    if(this.state.allUsers.includes(this.state.username)){
      // Username found
      console.log("found");
      this.setState({
        error: null
      });
      axios.post('http://localhost:5000/api/login', {
        email: this.state.username,
        username: this.state.username,
        password: this.state.password
      })
      .then((response) => {
        console.log(response);
        if(response.status === 200){
          // TODO : get the token
          // Then => Redirect 
        }else if(response.status === 401){
          // Auth failed
        }
      })
      .catch((error) => {
        console.log(error);
        this.setState({
          error: "WRONG_PASSWORD"
        });
      });
    }else{
      // Username not found
      console.log("not found");
      this.setState({
        error: "WRONG_USERNAME"
      });
    }
  };

  render() {    
    return (
      <div className="blue bg-img-landing">
        <div className="row" id="showcase">
          <div className="col s12 m6" id="block-2">
            <div className="container">
              <div className="card z-depth-0">
                <div className="card-stacked" id="login-card">
                  <div className="card-content">
                    <p>Log In to your FoxLearn Account!</p>
                  </div>
                  <div className="card-action">
                    <form onSubmit={this.handleSubmit} className="white">
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
                        {(this.state.error === "WRONG_PASSWORD" ) ?
                          <Aux>
                            <div className="red-text center text-darken-1">
                              Wrong Password!
                            </div>
                            <Link to="/auth" className={style.link}>Forgot Password?</Link>
                          </Aux>
                        : null}
                        {(this.state.error === "WRONG_USERNAME") ? 
                        <Aux>
                          <div className="red-text center text-darken-1">No username found!</div>
                          <div className="blue-text center text-darken-1">Not registered?</div>
                          <div className="center-align">
                            <Link to="/signup" className="btn center waves-effect waves-light btn"><i className="material-icons left">group_add</i>Sign up</Link>
                          </div>
                        </Aux>
                        : null}
                      </div>
                      <div className="center-align">
                        <input
                          className="btn center"
                          type="submit"
                          value="Log In"
                          onChange={this.handleChange}
                        />
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
