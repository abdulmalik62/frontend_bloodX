// src/App.tsx
import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './Homepage';
import LoginPage from './LoginPage';
import { UserManager, WebStorageStateStore } from "oidc-client";
import authConfig from './authConfig';

const App: React.FC = () => {
  const userManager = new UserManager({
    userStore: new WebStorageStateStore({ store: window.localStorage }),
    ...authConfig,
  });

  const authorize = () => {
    userManager.signinRedirect({ state: "a2123a67ff11413fa19217a9ea0fbad5" });
  };

  const clearAuth = () => {
    userManager.signoutRedirect();
  };

  const [authenticated, setAuthenticated] = useState<boolean | null>(null);

  useEffect(() => {
    userManager.getUser().then((user) => {
      if (user) {
        setAuthenticated(true);
      } else {
        setAuthenticated(false);
      }
    });
  }, [userManager]);

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={<LoginPage auth={authenticated} handleLogin={authorize} />}
          />
          <Route path="/home" element={<HomePage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
