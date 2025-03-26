import axios from 'axios';
import React, { createContext, useContext, useState, useEffect } from 'react';
import {jwtDecode} from 'jwt-decode'; // Correct import

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem("token") || null);


  // Function to validate token
  const isTokenValid = (token) => {
    try {
      const decoded = jwtDecode(token);
      return decoded.exp > Date.now() / 1000; // Check expiration
    } catch (err) {
      console.error("Token decoding error:", err);
      return false;
    }
  };

  // Function to login
  const login = async (email, password, roll) => {
    try {
      const response = await axios.post("http://localhost:4001/api/users/login", {
        email,
        password,
        roll,
      });

      if (response.status === 200) {
        const { token, user } = response.data;
        setToken(token);
        localStorage.setItem("token", token);
        setUser(user);
        return user;
      }
    } catch (err) {
      console.error("Error during login:", err);
      throw new Error(err.response?.data?.message || "Login failed");
    }
  };

  // Function to logout
  const logout = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem("token");
  };

  // Fetch user from token on mount
  useEffect(() => {
    if (token && isTokenValid(token)) {
      try {
        const decoded = jwtDecode(token);
        setUser(decoded);
      } catch (error) {
        console.error("Failed to decode token:", error);
        logout();
      }
    } else {
      logout();
    }
  }, [token]);

  
  return (
    <AuthContext.Provider value={{ user, token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom Hook for Auth Context
export const useAuth = () => useContext(AuthContext);
