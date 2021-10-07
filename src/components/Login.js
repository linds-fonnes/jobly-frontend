import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function Login({ login }) {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const history = useHistory();
  const [error, setError] = useState([]);

  async function handleSubmit(evt) {
    evt.preventDefault();
    let result = await login(formData);
    if (result.success) {
      history.push("/companies");
    } else {
      console.log(result);
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
    <div className="Login container col-md-5 mt-4">
      <h1 className="mb-3">Log In</h1>
      <div className="card">
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="form-group mt-1">
              <label htmlFor="username">Username</label>
              <input
                className="form-control"
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
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
              ></input>
            </div>
            {error.length ? (
              <p className="form-text mt-4 text-danger">{error}</p>
            ) : null}
            <button
              className="btn btn-info mt-2 float-end"
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

export default Login;
