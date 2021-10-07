import React, { useState, useContext } from "react";
import JoblyApi from "../api";
import UserContext from "../UserContext";

function Profile() {
  const { currentUser, setCurrentUser } = useContext(UserContext);
  const [formData, setFormData] = useState({
    firstName: currentUser.firstName,
    lastName: currentUser.lastName,
    email: currentUser.email,
    username: currentUser.username,
    password: "",
  });
  const [error, setError] = useState([]);
  const [saved, setSaved] = useState(false);

  async function handleSubmit(evt) {
    evt.preventDefault();

    let userData = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      password: formData.password,
    };

    let updatedUser;
    let username = formData.username;
    try {
      updatedUser = await JoblyApi.updateProfile(username, userData);
    } catch (e) {
      setError(e);
      return;
    }

    setFormData((data) => ({
      ...data,
      password: "",
    }));
    setError([]);
    setSaved(true);
    setCurrentUser(updatedUser);
  }

  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData((data) => ({
      ...data,
      [name]: value,
    }));
    setError([]);
  }

  return (
    <div className="col-md-6 offset-md-3">
      <h1 className="mt-2">Profile</h1>
      <div className="card">
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="form-group mt-1">
              <label>Username</label>
              <input
                className="form-control"
                placeholder={formData.username}
                disabled
              ></input>
            </div>
            <div className="form-group mt-1">
              <label>First Name</label>
              <input
                className="form-control"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
              ></input>
            </div>
            <div className="form-group mt-1">
              <label>Last Name</label>
              <input
                className="form-control"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
              ></input>
            </div>
            <div className="form-group mt-1">
              <label>Email</label>
              <input
                className="form-control"
                name="email"
                value={formData.email}
                onChange={handleChange}
              ></input>
            </div>
            <div className="form-group mt-1">
              <label>Password: </label>
              <input
                className="form-control"
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
              ></input>
            </div>
            {error.length ? (
              <p className="form-text mt-4 text-danger">{error}</p>
            ) : null}

            {saved ? (
              <p className="form-text mt-4 text-success">
                Updated successfully!
              </p>
            ) : null}

            <button
              className="btn btn-info mt-2 float-end"
              onClick={handleSubmit}
            >
              Save Changes
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Profile;
