import React from "react";
import { NavLink } from "react-router-dom";

export default function header() {
  return (
    <div>
      <nav className="navbar navbar-dark bg-primary navbar-expand-md navbar-expand-lg">
        <div className="container">
          <a className="navbar-brand">Recieps Site</a>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <NavLink activeClassName="active" to="/" exact>
                  <span className="nav-link">Home</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink activeClassName="active" to="recipes">
                  <span className="nav-link">Recieps</span>
                </NavLink>
              </li>
            </ul>
            <form className="form-inline my-2 my-lg-0">
              <input
                className="form-control mr-sm-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button
                className="btn btn-outline-success my-2 my-sm-0"
                type="submit"
              >
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}
