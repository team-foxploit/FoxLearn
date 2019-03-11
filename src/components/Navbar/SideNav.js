import React from 'react';
import NavLinks from './NavLinks';
import propTypes from 'prop-types';

const SideNav = (props) => {
    return (
        <ul className="sidenav" id="mobile-demo">
            <NavLinks style={props.style}/>
        </ul>
    )
}

SideNav.propTypes ={
    style: propTypes.object
}

export default SideNav;
