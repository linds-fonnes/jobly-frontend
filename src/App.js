import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import Routes from "./routing/Router";
import jwt from "jsonwebtoken";
import JoblyApi from "./api";
import Loading from "./components/Loader";
import useLocalStorage from "./customHooks/useLocalStorage";
import UserContext from "./UserContext";

export const TOKEN_STORAGE_ID = "jobly-token";

function App() {
  const [userInfo, setUserInfo] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [token, setToken] = useLocalStorage(TOKEN_STORAGE_ID);
  const [applicationIds, setApplicationIds] = useState(new Set([]));

  useEffect(() => {
    async function getCurrentUser() {
      if (token) {
        try {
          let { username } = jwt.decode(token);
          JoblyApi.token = token;
          let currentUser = await JoblyApi.getCurrentUser(username);
          setCurrentUser(currentUser);
          setApplicationIds(new Set(currentUser.applications));
        } catch (e) {
          console.error("Error:", e);
          setCurrentUser(null);
        }
      }
      setUserInfo(true);
    }
    setUserInfo(false);
    getCurrentUser();
  }, [token]);

  function logout() {
    setCurrentUser(null);
    setToken(null);
  }

  async function signup(data) {
    try {
      let token = await JoblyApi.signup(data);
      setToken(token);
      return { success: true };
    } catch (e) {
      console.error("Error :", e);
      return { success: false, e };
    }
  }

  async function login(data) {
    try {
      let token = await JoblyApi.login(data);
      setToken(token);
      return { success: true };
    } catch (e) {
      console.error("Error: ", e);
      return { success: false, e };
    }
  }

  function appliedToJob(id) {
    return applicationIds.has(id);
  }

  function applyToJob(id) {
    if (appliedToJob(id)) return;
    JoblyApi.applyToJob(currentUser.username, id);
    setApplicationIds(new Set([...applicationIds, id]));
  }

  if (!userInfo) return <Loading />;

  return (
    <BrowserRouter>
      <UserContext.Provider
        value={{ currentUser, setCurrentUser, appliedToJob, applyToJob }}
      >
        <div className="App">
          <Routes logout={logout} login={login} signup={signup} />
        </div>
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
