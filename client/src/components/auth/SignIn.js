import React, { Component } from 'react';
import image from '../images/learn-photo-2.jpeg'

class SignIn extends Component {
    state = {
        username: '',
        password: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id] : e.target.value
        });
    }
    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
    }

    render() {
        return (
        <div className="container">
            <h3 > Sign in</h3>
            <br/>
            <div className="card card-panel pink lighten-3">
                <div className="card-image waves-effect waves-block waves-light ">
                    <img className="activator responsive-img" src={image} alt=""/> <br/>
                </div>
                    <div className="activator grey-text text-lighten-3 waves-effect waves-light btn-small deep-purple darken-3">Sign In</div>
                <div className="card-content activator">
                    <i className="material-icons right">more_vert</i>
                    <h5 className="center">Sign in to your Student / Teacher Account</h5>
                </div>
                <div className="card-reveal">
                    <span className="card-title grey-text text-darken-4">FoxLearn<i className="material-icons right">close</i></span>
                    <h5>Sign in to your account where you can learn/manage queistionaire and more...</h5><br/>
                    <form onSubmit={this.handleSubmit} className="white">
                        <div className="row">
                            <div className="col m4 s12">
                                <div className="row">
                                    <div className="input-field">
                                        <i className="material-icons prefix">account_circle</i>
                                        <input id="username" type="text" className="validate" onChange={this.handleChange} />
                                        <label htmlFor="username">User Name</label>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="input-field">
                                    <i className="small material-icons prefix">visibility</i>
                                        <input id="password" type="password" className="validate" onChange={this.handleChange} />
                                        <label htmlFor="password">Password</label>
                                    </div>
                                </div>
                                <div className="input-field">
                                    <button className="waves-effect waves-light btn-small  deep-purple darken-3">Login</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        )
    }
}

export default SignIn;
