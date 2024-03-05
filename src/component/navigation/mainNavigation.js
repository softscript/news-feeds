import React from "react";
import { NavLink } from "react-router-dom";

import "./mainNavigation.css";

const MainNavigation = () => {
  return (
    <>
      <header className="main-navigation">
        <div className="main-navbigation__logo">
          <h1>Logo</h1>
        </div>
        <nav className="main-navigation__item">
          <ul>
            <li>
              <NavLink to="/home">Home</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default MainNavigation;
