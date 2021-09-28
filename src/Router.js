import React from "react";
import { Route, Switch, Redirect, BrowserRouter } from "react-router-dom";
import NavBar from "./Nav";
import Home from "./routes/Home";
import Companies from "./routes/Companies";
import Company from "./routes/Company";
import Jobs from "./routes/Jobs";
import Job from "./routes/Job";
import Login from "./routes/Login";
import Signup from "./routes/Signup";
import Profile from "./routes/Profile";

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
        <Route exact path="companies/:company">
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
