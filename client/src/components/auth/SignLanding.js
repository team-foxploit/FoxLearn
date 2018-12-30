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
        console.log(this.state);
        axios.get(`/api/users`)
            .then(res => {
                const users = res.data;
                users.forEach(element => {
                    // console.log(element);
                    if( (this.state.username === element.Username) || (this.state.username === element.Email) ){
                        // this.setState({auth:'wrongpwd'});
                        console.log(this.state);
                        console.log('okayyyy');
                        axios.post(`api/users/pwd`, { type : this.state.type, username: this.state.username } )
                        .then( res => {
                            console.log(res.data);
                            console.log('if statement');
                            this.setState({auth:'ok'});
                        });
                    }else{
                        // TODO : show tooltip error msgs
                        console.log('username invalid');
                    }
                });
            }
        );

    }

    render() {
        if (this.state.auth === 'ok') 
            return <Redirect to='/dashboard' />
        if (this.state.auth === 'wrongpwd') 
            return <Redirect to='/signup' />
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
                                                        <input className="with-gap" name="type" type="radio" defaultValue onClick = {this.studentSelected} />
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
