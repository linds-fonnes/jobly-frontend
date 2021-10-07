import React from "react";

import { Route, Switch, Redirect } from "react-router-dom";
import NavBar from "./Nav";
import Home from "../components/Home";
import Companies from "../components/companies/CompanyList";
import Company from "../components/companies/CompanyDetail";
import Jobs from "../components/jobs/JobsList";
import Job from "../components/jobs/JobCard";
import Login from "../components/Login";
import Signup from "../components/Signup";
import Profile from "../components/Profile";
import PrivateRoute from "./PrivateRoute";

function Routes({ logout, login, signup }) {
  return (
    <div>
      <NavBar logout={logout} />
      <Switch>
        <Route exact path="/signup">
          <Signup signup={signup} />
        </Route>
        <Route exact path="/login">
          <Login login={login} />
        </Route>
        <PrivateRoute exact path="/jobs/:job">
          <Job />
        </PrivateRoute>
        <PrivateRoute exact path="/jobs">
          <Jobs />
        </PrivateRoute>
        <PrivateRoute exact path="/companies/:handle">
          <Company />
        </PrivateRoute>
        <PrivateRoute exact path="/companies">
          <Companies />
        </PrivateRoute>
        <PrivateRoute exact path="/profile">
          <Profile />
        </PrivateRoute>
        <Route exact path="/">
          <Home />
        </Route>
        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default Routes;
