import React from "react";
import "./App.css";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark bg-dark"
      style={{ position: "fixed", top: "0em" }}
    >
      <Link to="/home" className="navbar-brand">
        AntennaPod Report
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse">
        <ul className="navbar-nav">
          <Link to="/home" className="nav-link">
            <li className="prueba-nav">Home</li>
            <span className="sr-only">(current)</span>
          </Link>
          <Link to="/issues" className="nav-link">
            <li className="prueba-nav">Issues</li>
            <span className="sr-only">(current)</span>
          </Link>
          <Link to="/ec" className="nav-link">
            <li className="prueba-nav">Eventual connectivity</li>
            <span className="sr-only">(current)</span>
          </Link>
          <Link to="/home" className="nav-link">
            <li className="prueba-nav">Performance</li>
            <span className="sr-only">(current)</span>
          </Link>
          <Link to="/design" className="nav-link">
            <li className="prueba-nav">Design</li>
            <span className="sr-only">(current)</span>
          </Link>
          <Link to="/usability" className="nav-link">
            <li className="prueba-nav">Usability</li>
            <span className="sr-only">(current)</span>
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
