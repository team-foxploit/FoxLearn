import React from 'react';
import Aux from '../../hoc/Auxiliary';

const NavLinks = (props) => {
    return (
        <Aux>
            <li><a className={props.style.signLinks} href='/signup'>Sign Up</a></li>
            <li><a className={props.style.signLinks} href='/signin'>Log In</a></li>
            <li><a className={props.style.signLinks} href='/signup'>About</a></li>
            <li><a className={props.style.signLinks} href='/signup'>Contact</a></li>
        </Aux>
    )
}

export default NavLinks;
