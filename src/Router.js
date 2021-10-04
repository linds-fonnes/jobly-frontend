import React from "react";

import { Route, Switch, Redirect, BrowserRouter } from "react-router-dom";
import NavBar from "./Nav";
import Home from "./components/Home";
import Companies from "./components/companies/CompanyList";
import Company from "./components/companies/CompanyDetail";
import Jobs from "./components/jobs/JobsList";
import Job from "./components/jobs/JobCard";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Profile from "./components/Profile";

function Routes() {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path="/profile">
          <Profile />
        </Route>
        <Route exact path="/signup">
          <Signup />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/jobs/:job">
          <Job />
        </Route>
        <Route exact path="/jobs">
          <Jobs />
        </Route>
        <Route exact path="/companies/:handle">
          <Company />
        </Route>
        <Route exact path="/companies">
          <Companies />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
