import React, { Component } from 'react';
// import image from '../images/learn-photo-2.jpeg'

class SignUp extends Component {
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
        )
    }
}

export default SignUp;
