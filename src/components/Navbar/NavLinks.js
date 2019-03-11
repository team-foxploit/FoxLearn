import React from 'react';
import Aux from '../../hoc/Auxiliary';
import propTypes from 'prop-types';

const NavLinks = (props) => {
    return (
        <Aux>
            <li><a className={props.style.signLinks} href='/signup'>Sign Up</a></li>
            <li><a className={props.style.signLinks} href='/signin'>Log In</a></li>
            <li><a className={props.style.signLinks} href='/about'>About</a></li>
            <li><a className={props.style.signLinks} href='/contact'>Contact</a></li>
        </Aux>
    )
}

NavLinks.propTypes = {
    syle: propTypes.object
}

export default NavLinks;
