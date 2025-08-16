import React from "react";
import PropTypes from "prop-types";
import {NavLink} from "react-router-dom";
export default function Navbar(props) {
 
  return (
    <nav
      className={`navbar navbar-expand-lg bg-${props.mode} navbar-${props.mode}`}
    >
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">
          {props.title ? props.title : "Navbar"}
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/about">About</NavLink>
            </li>
          </ul>
          {/* <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-primary" type="submit">
                Search
              </button>
            </form> */}
          <div className="form-check form-switch">
            <input
              className="form-check-input"
              onChange={props.toggleMode}
              type="checkbox"
              role="switch"
              id="switchCheckDefault"
            />
            <label className={`form-check-label text-${props.textmode}`} htmlFor="switchCheckDefault">
              <span className={`navbar-text text-${props.textmode}`}>
                {props.mode === 'light' ? 'Light Mode' : 'Dark Mode'}
              </span>
            </label>
          </div>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  title: PropTypes.string,
};

Navbar.defaultProps = {
  title: "Default Title",
};
