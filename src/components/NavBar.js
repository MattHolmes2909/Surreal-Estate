import React from "react";
import "../styles/NavBar.css";
import { Link } from "react-router-dom";
import logo from "../logo.png";

const NavBar = () => {
  return (
    <div className="NavBar" data-testid="NavBar">
      <img src={logo} className="logo" alt="Logo" />
      <ul className="navbar-links">
        <li className="navbar-links-item">
          <Link to="/">View Properties</Link>
        </li>
        <li className="navbar-links-item">
          <Link to="add-property">Add a Property</Link>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
