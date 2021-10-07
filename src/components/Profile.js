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
    <div>
      <h1>Profile</h1>
      <div>
        <form onSubmit={handleSubmit}>
          <label>Username</label>
          <p>{formData.username}</p>
          <label>First Name</label>
          <input
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
          ></input>
          <label>Last Name</label>
          <input
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
          ></input>
          <label>Email</label>
          <input
            name="email"
            value={formData.email}
            onChange={handleChange}
          ></input>
          <label>Password: </label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          ></input>

          {error.length ? <span>{error}</span> : null}

          {saved ? <span>Updated successfully!</span> : null}

          <button onClick={handleSubmit}>Save Changes</button>
        </form>
      </div>
    </div>
  );
}

export default Profile;
