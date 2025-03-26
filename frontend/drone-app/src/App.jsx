import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from "./component/Home.jsx";
import Product from "./component/Product.jsx";
import Admin from "./component/Admin.jsx";
import LandingPage from "./component/Landing.jsx";
import User from "./component/userDashbord.jsx";
import Register from "./component/register.jsx";
import Login from "./component/login.jsx";
import Logout from "./component/Logout.jsx";

const AUTO_LOGOUT_TIME = 10 * 60 * 1000; // 10 minutes

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const userLoggedIn = localStorage.getItem("isAuthenticated") === "true";
    setIsAuthenticated(userLoggedIn);
    setIsLoading(false);

    if (userLoggedIn) {
      startInactivityTimer();
    }
  }, []);

  const handleLogin = () => {
    localStorage.setItem("isAuthenticated", "true");
    setIsAuthenticated(true);
    startInactivityTimer();
  };

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    setIsAuthenticated(false);
    stopInactivityTimer();
  };

  // Auto logout mechanism
  let logoutTimer;

  const startInactivityTimer = () => {
    stopInactivityTimer(); // Reset timer
    logoutTimer = setTimeout(() => {
      handleLogout();
      alert("You have been logged out due to inactivity.");
    }, AUTO_LOGOUT_TIME);
  };

  const stopInactivityTimer = () => {
    if (logoutTimer) clearTimeout(logoutTimer);
  };

  // Reset inactivity timer on user actions
  useEffect(() => {
    const resetTimer = () => startInactivityTimer();
    
    window.addEventListener("mousemove", resetTimer);
    window.addEventListener("keydown", resetTimer);
    
    return () => {
      window.removeEventListener("mousemove", resetTimer);
      window.removeEventListener("keydown", resetTimer);
    };
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={isAuthenticated ? <Navigate to="/home" /> : <LandingPage />} />
        <Route path="/register" element={isAuthenticated ? <Navigate to="/home" /> : <Register />} />
        <Route path="/login" element={isAuthenticated ? <Navigate to="/home" /> : <Login onLogin={handleLogin} />} />
        <Route path="/logout" element={<Logout onLogout={handleLogout} />} />

        {isAuthenticated ? (
          <>
            <Route path="/home" element={<Home />} />
            <Route path="/products" element={<Product />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/user" element={<User />} />
          </>
        ) : (
          <Route path="*" element={<Navigate to="/" />} />
        )}
      </Routes>
    </Router>
  );
}

export default App;
