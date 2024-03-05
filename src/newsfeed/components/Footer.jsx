import React from "react";
import { Link } from "react-router-dom";
import { StyledFooter } from "../styles/Footer";

function Footer() {
  return (
    <StyledFooter>
      <Link to="/">
        <h5>NEWSFEED</h5>
      </Link>
      <div className="signout flex-column">
        <span>
          {" "}
          Made with &#9829; by{" "}
          <a href="https://dhera.dev/" target="_blank" rel="noreferrer">
            Chidera Okeke
          </a>
        </span>
      </div>
    </StyledFooter>
  );
}

export default Footer;
