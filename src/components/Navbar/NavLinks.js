import React from 'react';
import { Link } from 'react-router-dom';
import Aux from '../../hoc/Auxiliary';
import propTypes from 'prop-types';

const NavLinks = (props) => {
    return (
        <Aux>
            <li><Link className={props.style.signLinks} to='/signup'>Sign Up</Link></li>
            <li><Link className={props.style.signLinks} to='/signin'>Log In</Link></li>
            <li><Link className={props.style.signLinks} to='/about'>About</Link></li>
            <li><Link className={props.style.signLinks} to='/contact'>Contact</Link></li>
        </Aux>
    )
}

NavLinks.propTypes = {
    syle: propTypes.object
}

export default NavLinks;
