import React from "react";
import "./style.css";

function Footer () {
    return (
      <footer className="pink">
      <div className="container">
        <ul className="list-unstyled list-inline text-center">
          <li className="waves-effect waves-light">
            <a
              className="btn-floating btn-fb mx-1"
              href="https://github.com/sopeethong1"
            >
              <i className="fab fa-github"> </i>
            </a>
          </li>
          <li className="waves-effect waves-light">
            <a
              className="btn-floating btn-li mx-1"
              href="https://www.linkedin.com/in/sopee-t-4a942363"
            >
              <i className="fab fa-linkedin-in"> </i>
            </a>
          </li>
          <li className="waves-effect waves-light">
            <a
              className="btn-floating btn-fb mx-1"
              href="mailto:tsopee@gmail.com"
              >
              <i className="fas fa-at"> </i>
              </a>
              </li>
              <li className="list-inline-item">
            <a
              className="btn-floating btn-fb mx-1"
             href="tel:+1.913.303.1681"
          >
              <i className="fas fa-phone"></i>
              </a>
              </li>
        </ul>
      </div>

    </footer>
  );
}
  export default Footer;