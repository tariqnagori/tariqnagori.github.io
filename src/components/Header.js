import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png"; // Adjust the path as necessary

function Header() {
  return (
    <header>
      <div className="logo">
        <img src={logo} alt="Happyman Housing Logo" />
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/services">Services</Link>
          </li>
          <li>
            <Link to="/process">Process</Link>
          </li>
          <li>
            <Link to="/additional-info">Additional Information</Link>
          </li>
          <li>
            <Link to="/join-us">Join Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
