import React from "react";
import "./style.css";

const Header = () => {
  return (
   
    <nav className="navbar">

<img
            style={{ height: "285px" }}
            src="https://github.com/sopeethong1/Portfolio-with-React/blob/fca1df34599d9d8766a23ca88c38a601fdc23073/src/assets/headshot.png"
            class="float-left pr-4 pb-3 img-fluid"
            alt="SopeeHeadshot"
          />
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

export default Header;
