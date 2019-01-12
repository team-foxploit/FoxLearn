import React from "react";
// import { Link } from 'react-router-dom';
import { NavLink } from "react-router-dom";
import "./Dashboard.css";
import "../layout/Dashboard.css";

const SideNavBar = () => {
  return (
    <nav id="sidebar">
      <div className="sidebar-header">
        <h3>FoxLearn</h3>
      </div>
      <ul className="list-unstyled components">
        <li>
          <NavLink to="/mycourses" data-toggle="collapse" aria-expanded="false">
            My Courses
          </NavLink>
          <ul className="collapse list-unstyled" id="pageSubmenu">
            <li>
              <NavLink to="#">Course 1</NavLink>
            </li>
            <li>
              <NavLink to="#">Course 2</NavLink>
            </li>
            <li>
              <NavLink to="#">Course 3</NavLink>
            </li>
          </ul>
        </li>
        <li>
          <NavLink to="/myProgress">My Progress</NavLink>
        </li>
        <li>
          <NavLink to="/recent">Recent</NavLink>
          <NavLink to="/leaderboard">Overall Leaderboard</NavLink>
        </li>
      </ul>
      <ul className="list-unstyled CTAs">
        <li>
          <NavLink to="/" className="logout">
            Logout
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default SideNavBar;
