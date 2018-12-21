import React from 'react';
import { Link } from 'react-router-dom';
import SignedInLinks from './SignedInLinks';

const Navbar = () => {
    return(
        <div className="wrapper">
            <nav className="nav-wrapper grey hoverable">
                <div className="container">
                <Link to='/' className="brand-logo left">FoxLearn</Link>
                <SignedInLinks />
            </div>        
        </nav>
    </div>

    );
}

export default Navbar;