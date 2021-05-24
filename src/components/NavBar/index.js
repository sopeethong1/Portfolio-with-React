import React from "react";
import "./style.css";

const NavBar = () => {
  return (
   
    <nav className="navbar">
          <ul>

              <li>
                  <a href="/#about"> About</a>
              </li>
              <li>
                  <a href="/#projects"> Projects</a>
              </li>
              <li>
                  <a href="/#contact"> Contact</a>
              </li>
              <li>
                  <a href="/#resume">Resume</a>
              </li>
           
          </ul>
      </nav>
  );
};

export default NavBar;
