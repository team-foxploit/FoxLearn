import React from "react";
import { Link } from "react-router-dom";
import SignedInLinks from "./SignedInLinks";
import SignedOutLinks from "./SignedOutLinks";
import "./Dashboard.css";

const Navbar = () => {
  return (
    <div className="wrapper" id="navTop">
      <nav className="nav-wrapper blue lighten-2 hoverable">
        <Link to="/" className="brand-logo">
          FoxLearn
        </Link>
        <div className="hide-on-med-and-down">
          <SignedInLinks className="right" />
          <SignedOutLinks className="left" />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
