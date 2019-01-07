import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import MainInNavabr from "../layout/MainNavbar";
// import image1 from '../images/learn-photo.jpeg';
// import image2 from '../images/learn-photo-2.jpeg';

class SignLanding extends Component {
    
    state = {
        username: '',
        password: '',
        type: 'student',
        auth: 'fail'
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id] : e.target.value
        });
    }

    studentSelected = () => {
        this.setState(state => ({
            type: 'student'
        }));
    }

    teacherSelected = () => {
        this.setState(state => ({
            type: 'teacher'
        }));
    }

    handleSubmit = (e) => {
        e.preventDefault();
          axios.post(`/api/users/signauth`, {
            type : this.state.type,
            username : this.state.username,
            password : this.state.password
          })
          .then(res => {
              if (res.data.length === 1) {
                  console.log("Auth ok");
                  this.setState(state => ({
                      auth: 'ok'
                  }));
              }
            console.log(res.data.length);
          });
    }

    render() {
        if (this.state.auth === 'ok') {
            console.log(this.state);
            return <Redirect to={{
                pathname: '/dashboard',
                state: { props:this.state }
            }} />
            
        }
        if (this.state.auth === 'wrongpwd') 
            return <Redirect to='/signup' />
        return (
            <div>
                <MainInNavabr /> 
                <h3>Sign In to FoxLearn</h3><br/>
                <div className="container">
                    <div className="row">
                        <div className="col s12 m6">
                            {/* <img src={image1} className="responsive-img" alt=""/> */}
                        </div>
                        <div className="col s12 m6">
                            <div className="card z-depth-0">
                                <div className="card-stacked">
                                    <div className="card-content">
                                        <p>Sign in to your account where you can learn or teach and more...</p>
                                    </div>
                                    <div className="card-action">
                                        <form onSubmit={this.handleSubmit} className="white">
                                            <div className="input-field">
                                                <p id="type">
                                                    <label>
                                                        <input className="with-gap" name="type" type="radio" defaultChecked onClick = {this.studentSelected} />
                                                        <span>Student</span>
                                                    </label>
                                                    <label>
                                                        <input className="with-gap s3 offset-s1" name="type" type="radio" onClick = {this.teacherSelected} />
                                                        <span>Teacher</span>
                                                    </label>
                                                </p>
                                            </div>
                                            <div className="input-field">
                                                <input id="username" type="text" className="validate" onChange={this.handleChange} />
                                                <label htmlFor="username" className="">Username</label>
                                            </div>
                                            <div className="input-field">
                                                <input id="password" type="password" className="validate" onChange={this.handleChange} />
                                                <label htmlFor="password" className="">Password</label>
                                            </div>
                                            <div>
                                                <input className="btn center" type="submit" value="Log In" onChange={this.handleChange} /><br/><br/>
                                            </div>
                                            <a href="#!" className="left">Forgot Password?</a>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default SignLanding
