import React, { useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../UserContext";
import "./styles/Home.css";

function Home() {
  const { currentUser } = useContext(UserContext);

  return (
    <div className="Home">
      <div className="container text-center">
        <h1 className="font-weight-bold">Jobly</h1>
        <p className="lead mt-4">All the jobs in one, convenient place.</p>
        {currentUser ? (
          <h2>Welcome Back, {currentUser.firstName} </h2>
        ) : (
          <div>
            <Link
              to="/login"
              className="Home-button btn btn-info font-weight-bold"
            >
              Log In
            </Link>
            <Link
              to="/signup"
              className="Home-button btn btn-info font-weight-bold"
            >
              Sign Up
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;
