// src/context/AuthContext.js
import React, { createContext, useContext, useState, useEffect } from "react";
import {
  getAuthToken,
  setAuthToken,
  removeAuthToken,
} from "../services/authService";

const AuthContext = createContext(null);

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if user is logged in on component mount
    const checkAuthStatus = async () => {
      try {
        const token = getAuthToken();

        if (!token) {
          setIsLoading(false);
          return;
        }

        // Here you would typically validate the token with your backend
        // For this example, we'll just assume the token is valid if it exists

        // In a real app, you would fetch the user profile from your backend
        const userData = JSON.parse(localStorage.getItem("user")) || {
          id: "123", // Mock user ID
          name: "User",
          instagramConnected: false,
        };

        setUser(userData);
        setIsAuthenticated(true);
      } catch (error) {
        console.error("Auth check failed:", error);
        logout();
      } finally {
        setIsLoading(false);
      }
    };

    checkAuthStatus();
  }, []);

  const login = (userData, token) => {
    setAuthToken(token);
    localStorage.setItem("user", JSON.stringify(userData));
    setUser(userData);
    setIsAuthenticated(true);
  };

  const logout = () => {
    removeAuthToken();
    localStorage.removeItem("user");
    setUser(null);
    setIsAuthenticated(false);
  };

  const updateUser = (updates) => {
    if (!user) return;

    const updatedUser = { ...user, ...updates };
    localStorage.setItem("user", JSON.stringify(updatedUser));
    setUser(updatedUser);
  };

  const value = {
    user,
    isAuthenticated,
    isLoading,
    login,
    logout,
    updateUser,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
