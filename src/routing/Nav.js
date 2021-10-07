import React, { useContext } from "react";
import { NavLink, Link } from "react-router-dom";
import UserContext from "../UserContext";
import "../components/styles/Nav.css";

function NavBar({ logout }) {
  const { currentUser } = useContext(UserContext);

  function loggedInUserNav() {
    return (
      <nav className="NavBar navbar navbar-expand-lg">
        <NavLink className="navbar-brand" exact to="/">
          Jobly
        </NavLink>
        <ul className="NavBar-links navbar-nav">
          <li className="nav-item">
            <NavLink className="nav-link" exact to="/companies">
              Companies
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" exact to="/jobs">
              Jobs
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" exact to="/profile">
              Profile
            </NavLink>
          </li>
          <li className="nav-item">
            <Link className="nav-link" exact to="/" onClick={logout}>
              Log Out
            </Link>
          </li>
        </ul>
      </nav>
    );
  }

  function loggedOutUserNav() {
    return (
      <nav className="NavBar navbar navbar-expand-lg">
        <NavLink className="navbar-brand NavBar-brand" exact to="/">
          Jobly
        </NavLink>
        <ul className="NavBar-links navbar-nav">
          <li className="nav-item">
            <NavLink className="nav-link" exact to="/login">
              Login
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" exact to="/signup">
              Sign Up
            </NavLink>
          </li>
        </ul>
      </nav>
    );
  }

  return <div>{currentUser ? loggedInUserNav() : loggedOutUserNav()}</div>;
}

export default NavBar;
