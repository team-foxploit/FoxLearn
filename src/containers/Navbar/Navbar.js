import React, { Component } from 'react';
import SideNav from '../../components/Navbar/SideNav';
import Logo from '../../components/Logo/Logo';
import M from 'materialize-css';
import NavLinks from '../../components/Navbar/NavLinks';
import style from '../../components/Navbar/Navbar.module.css';
class  Navbar extends Component {

    componentDidMount(){
        const options = {
            edge: 'left',
            draggable: true
        }
        M.Sidenav.init(document.querySelectorAll('.sidenav'), options);
    }

    render () {
        return (
            <div>
                <nav>
                   <div className="nav-wrapper blue lighten-2 hoverable">
                     <a href="#!" className="left"><Logo /></a>
                     <a href="#!" className="brand-logo">FoxLearn</a>
                     <a href="#!" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                     <ul className="right hide-on-med-and-down">
                       <li><a href="sass.html">Sass</a></li>
                       <li><a href="badges.html">Components</a></li>
                       <li><a href="collapsible.html">Javascript</a></li>
                       <li><a href="mobile.html">Mobile</a></li>
                     </ul>
                   </div>
                </nav>
                <SideNav style={style}/>
            </div>
        )
    }
}

export default Navbar;
