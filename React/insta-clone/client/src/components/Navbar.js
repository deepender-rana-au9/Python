import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="main">
      <nav>
        <div className="nav-wrapper">
          <Link to="/" className="brand-logo left">
            Instagram
          </Link>
          <ul id="nav-mobile" className="right">
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/signup">SignUp</Link>
            </li>
            <li>
              <Link to="/profile">Profile</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
