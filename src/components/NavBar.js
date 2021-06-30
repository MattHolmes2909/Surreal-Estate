import React from "react";
import "../styles/NavBar.css";
import logo from "../logo.png";
import { Link } from "react-router-dom";

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
    )
}

export default NavBar;
