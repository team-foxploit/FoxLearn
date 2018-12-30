import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import image1 from '../images/learn-photo.jpeg';
// import image2 from '../images/learn-photo-2.jpeg';

class SignLanding extends Component {
    state = {
        username: '',
        password: '',
        type: '',
        auth: 'fail'
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id] : e.target.value
        });
    }
    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
        axios.get(`/api/users`)
            .then(res => {
                const users = res.data;
                users.forEach(element => {
                    console.log(element);
                    if( (this.state.username === element.FName) || (this.state.username === element.Email) ){
                        this.setState({auth:'ok'});
                        console.log('okayyyy');
                    }
                });
                //this.setState({ users });
                //console.log(this.state);
            }
        );

    }

    render() {
        if (this.state.auth === 'ok') return <Redirect to='/dashboard' />  
        return (
            <div>
                <h3>Sign In to FoxLearn</h3><br/>
                <div className="container">
                    <div className="row">
                        <div className="col s12 m6">
                            <img src={image1} className="responsive-img" alt=""/>
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
                                                        <input htmlFor="type" className="with-gap" name="type" type="radio" value="student" defaultChecked onChange={this.handleChange} />
                                                        <span>Student</span>
                                                    </label>
                                                    <label>
                                                        <input htmlFor="type" className="with-gap s3 offset-s1" name="type" type="radio" value="teacher" onChange={this.handleChange} />
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
