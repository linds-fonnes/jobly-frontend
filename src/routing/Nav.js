import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import UserContext from "../UserContext";

function NavBar({ logout }) {
  const { currentUser } = useContext(UserContext);

  function loggedInUserNav() {
    return (
      <nav className="NavBar">
        <NavLink exact to="/">
          Jobly
        </NavLink>
        <NavLink exact to="/companies">
          Companies
        </NavLink>
        <NavLink exact to="/jobs">
          Jobs
        </NavLink>
        <NavLink exact to="/profile">
          Profile
        </NavLink>
        <NavLink exact to="/" onClick={logout}>
          Log Out
        </NavLink>
      </nav>
    );
  }

  function loggedOutUserNav() {
    return (
      <nav>
        <NavLink exact to="/">
          Jobly
        </NavLink>
        <NavLink exact to="/login">
          Login
        </NavLink>
        <NavLink exact to="/signup">
          Sign Up
        </NavLink>
      </nav>
    );
  }

  return <div>{currentUser ? loggedInUserNav() : loggedOutUserNav()}</div>;
}

export default NavBar;
