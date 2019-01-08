import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class SignedInLinks extends Component {

    constructor(props){
        super(props);
        console.log(this.props);        
    }

    render(){
        return(
            <ul className="right">
                <li><NavLink to='/'>Discover</NavLink></li>
                <li><NavLink to='/'>Log out</NavLink></li>
                <li><NavLink to='/' className='btn btn-floating green lighten-1'>{this.props.id}</NavLink></li>
            </ul>
        );
    }
}

export default SignedInLinks;