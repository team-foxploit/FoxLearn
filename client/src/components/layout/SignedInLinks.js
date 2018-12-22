import React from 'react';
import { NavLink } from 'react-router-dom';

const SignedInLinks = () => {
    return(
        <ul className="right">
            <li><NavLink to='/'>Discover</NavLink></li>
            <li><NavLink to='/'>Log out</NavLink></li>
            <li><NavLink to='/' className='btn btn-floating green lighten-1'>GJ</NavLink></li>
        </ul>
    );
}

export default SignedInLinks;