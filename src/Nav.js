import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav className="NavBar">
      <NavLink exact to="/">
        Jobly
      </NavLink>
      <NavLink exact to="/companies">
        Companies
      </NavLink>
      <NavLink exact to="/companies/apple">
        Apple
      </NavLink>
      <NavLink exact to="/jobs">
        Jobs
      </NavLink>
      <NavLink exact to="/login">
        Login
      </NavLink>
      <NavLink exact to="/signup">
        Signup
      </NavLink>
      <NavLink exact to="/profile">
        Profile
      </NavLink>
    </nav>
  );
}

export default NavBar;
