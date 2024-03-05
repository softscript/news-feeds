import React from "react";
import { Link } from "react-router-dom";
import { StyledHeader, StyledNav } from "../styles/Header";

function Header() {
  return (
    <StyledHeader>
      <Link to="/">
        <h1>NEWSFEED</h1>
      </Link>
      <StyledNav>
        <Link to="/general">General</Link>

        <Link to="/business">Business</Link>

        <Link to="/entertainment">Entertainment</Link>

        <Link to="/science">Science</Link>

        <Link to="/technology">Technology</Link>

        <Link to="/sports">Sports</Link>
      </StyledNav>
    </StyledHeader>
  );
}

export default Header;
