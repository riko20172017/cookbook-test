import React from "react";
import { NavLink } from "react-router-dom";

export default function header() {
  return (
    <div>
      <nav className="navbar navbar-dark bg-primary navbar-expand-md navbar-expand-lg">
        <a className="navbar-brand">Recieps</a>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item">
              <NavLink activeClassName="active" to="/" exact >
                <span class="nav-link">Home</span>
              </NavLink>
            </li>
            <li class="nav-item">
              <NavLink activeClassName="active" to="recipes">
                <span class="nav-link">Recieps</span>
              </NavLink>
            </li>
          </ul>
          <form class="form-inline my-2 my-lg-0">
            <input
              class="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">
              Search
            </button>
          </form>
        </div>
      </nav>
    </div>
  );
}
