import React from 'react';
import { Link } from 'react-router-dom';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';

const Navbar = () => {
    return(
        <div className="wrapper">
            <nav className="nav-wrapper blue lighten-2 hoverable">
                <Link to='/' className="brand-logo center">FoxLearn</Link>
                <div className="container left hide-on-med-and-down">
                    <SignedInLinks />
                    <SignedOutLinks />
                </div>    
            </nav>
        </div>
    );
}

export default Navbar;