import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function Signup({ signup }) {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    firstName: "",
    lastName: "",
    email: "",
  });
  const history = useHistory();
  const [error, setError] = useState([]);

  async function handleSubmit(evt) {
    evt.preventDefault();
    let result = await signup(formData);
    if (result.success) {
      history.push("/companies");
    } else {
      setError(result.e);
    }
  }

  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData((data) => ({
      ...data,
      [name]: value,
    }));
  }
  return (
    <div className="container col-md-5 mt-4">
      <h1 className="mb-3">Sign Up</h1>
      <div className="card">
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="form-group mt-1">
              <label htmlFor="username">Username</label>
              <input
                className="form-control"
                id="username"
                name="username"
                value={formData.username}
                onChange={handleChange}
                required
              ></input>
            </div>
            <div className="form-group mt-1">
              <label htmlFor="password">Password</label>
              <input
                className="form-control"
                id="password"
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
              ></input>
            </div>
            <div className="form-group mt-1">
              <label htmlFor="firstName">First Name</label>
              <input
                className="form-control"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
              ></input>
            </div>
            <div className="form-group mt-1">
              <label htmlFor="lastName">Last Name</label>
              <input
                className="form-control"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
              ></input>
            </div>
            <div className="form-group mt-1">
              <label htmlFor="email">Email</label>
              <input
                className="form-control"
                id="email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              ></input>
            </div>
            {error.length ? (
              <p className="form-text mt-4 text-danger">{error}</p>
            ) : null}

            <button
              className="btn btn-info mt-2 float-end"
              type="submit"
              onSubmit={handleSubmit}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
