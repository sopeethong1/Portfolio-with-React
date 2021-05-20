import React from "react";
import "./style.css";

const NavBar = () => {
  return (
   
    <nav className="navbar">
          <ul>
              <li>
                  <a href="/"> Home</a>
              </li>
              <li>
                  <a href="/#aboutme"> About Me</a>
              </li>
              <li>
                  <a href="/#projects"> Projects</a>
              </li>
              <li>
                  <a href="/#contactme"> Contact Me</a>
              </li>
              <li>
                  <a href="/#resume">Resume</a>
              </li>
           
          </ul>
      </nav>
  );
};

export default NavBar;
