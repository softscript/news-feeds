import React from "react";
import { NavLink } from "react-router-dom";
// import AuthContext from "../../context/authContext";

import "./subNavigation.css";

const SubNavigation = (props) => {
  return (
    <header className="sub-navigation">
      <nav className="sub-navigation__item">
        <ul>
          <li>
            <NavLink to="/events">Events</NavLink>
          </li>
          <li>
            <NavLink to="/events">Events</NavLink>
          </li>
          <li>
            <NavLink to="/events">Events</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default SubNavigation;
