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
    <div>
      <h1>Log In</h1>
      <div>
        <form onSubmit={handleSubmit}>
          <label htmlFor="username">Username</label>
          <input
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          ></input>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          ></input>
          {error.length ? <span>{error}</span> : null}
          <button onSubmit={handleSubmit}>Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
