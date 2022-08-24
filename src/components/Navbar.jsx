import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export class Navbar extends Component {
  render() {
    return (
      <div className="navbar-container">
        <div className="nav-links">
          <Link to="/">
            <span className="nav-item">Home</span>
          </Link>
          <Link to="/catalog">
            <span className="nav-item">Catalog</span>
          </Link>
        </div>
        <div className="logo">
          <span>REFLIX</span>
        </div>
      </div>
    );
  }
}

export default Navbar;
