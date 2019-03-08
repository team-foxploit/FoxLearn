import React from "react";
import { Link } from "react-router-dom";
import SignedOutLinks from "./SignedOutLinks";

const MainNavbar = () => {
  return (
    <div className="wrapper">
      <nav className="nav-wrapper blue lighten-2 hoverable">
        <Link to="/" className="brand-logo">
          FoxLearn
        </Link>
        <div className="hide-on-med-and-down">
          {/* <SignedInLinks className="right" /> */}
          <SignedOutLinks className="left-align" />
        </div>
      </nav>
    </div>
  );
};

export default MainNavbar;
