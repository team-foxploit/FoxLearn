import React, { Component } from "react";
import { Link } from "react-router-dom";
import SignedInLinks from "./SignedInLinks";

class Navbar extends Component {
    constructor(props){
        super(props);
        this.state = {
            username:this.props.username
        }
        console.log(this.props);
        
    }
    render() {
        return (
          <div className="wrapper">
            <nav className="nav-wrapper blue lighten-2 hoverable">
              <Link to="/" className="brand-logo">
                FoxLearn
              </Link>
              <div className="hide-on-med-and-down">
                <SignedInLinks className="right" />
              </div>
            </nav>
          </div>
        );
    }
};

export default Navbar;
