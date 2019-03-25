import React from "react";
import lifecycle from 'react-pure-lifecycle';
import M from 'materialize-css';
import "materialize-css/dist/css/materialize.min.css";
import style from './Navbar.module.css';
import { Link } from 'react-router-dom';
import Logo from '../Logo/Logo';
import SideNav from './SideNav';
import NavLinks from './NavLinks';
// import { Link, NavLink } from "react-router-dom";
// import SignedOutLinks from "./SignedOutLinks";

const methods = {
  componentDidMount(props) {
    const options = {
        edge: 'left',
        draggable: true
    }
    M.Sidenav.init(document.querySelectorAll('.sidenav'), options);
  }
};


const Navbar = () => {
  return (
    <div className="wrapper">
      {/*<nav className="nav-wrapper orange lighten-2 hoverable">
        <Link href="/" className="brand-logo left">
          <Logo />
        </Link>
        <Link href="#" data-target="mobile-demo" className="sidenav-trigger" onClick={handleSidebar}><i className="material-icons">menu</i></Link>
        <div className="hide-on-med-and-down">
          {/* <SignedInLinks className="right" />
          <div className={style.align}>
              <ul className="right">
                <NavLinks style={style}/>
              </ul>
          </div>
        </div>
    </nav>*/}
        <nav>
           <div className="nav-wrapper blue lighten-2 hoverable">
             <Link to="/" className="left"><Logo /></Link>
             <Link to="/" className="brand-logo">FoxLearn</Link>
             <Link to="/" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></Link>
             <ul className="right hide-on-med-and-down">
               <NavLinks style={style}/>
             </ul>
           </div>
         </nav>
      <SideNav style={style}/>
    </div>
  );
};

// fonts
// font-family: 'PT Sans', sans-serif;
// font-family: 'Sniglet', cursive;
// font-family: 'Srisakdi', cursive;
// font-family: 'Patrick Hand', cursive;

export default lifecycle(methods)(Navbar);
