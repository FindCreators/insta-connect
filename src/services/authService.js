// src/services/authService.js

/**
 * Get the authentication token from local storage
 * @returns {string|null} The authentication token or null
 */
export const getAuthToken = () => {
  return localStorage.getItem("auth_token");
};

/**
 * Set the authentication token in local storage
 * @param {string} token - The authentication token
 */
export const setAuthToken = (token) => {
  localStorage.setItem("auth_token", token);
};

/**
 * Remove the authentication token from local storage
 */
export const removeAuthToken = () => {
  localStorage.removeItem("auth_token");
};

/**
 * Check if the token is expired
 * @param {string} token - The JWT token to check
 * @returns {boolean} Whether the token is expired
 */
export const isTokenExpired = (token) => {
  try {
    const payload = JSON.parse(atob(token.split(".")[1]));
    const exp = payload.exp * 1000; // Convert to milliseconds
    return Date.now() >= exp;
  } catch (e) {
    return true; // If we can't decode the token, assume it's expired
  }
};

/**
 * Mock login function - in a real app, this would call your API
 * @param {Object} credentials - User login credentials
 * @returns {Promise<Object>} The login response with user data and token
 */
export const login = async (credentials) => {
  // This is a mock implementation. In a real app, you would call your backend API.
  return new Promise((resolve) => {
    setTimeout(() => {
      // Mock successful login
      resolve({
        user: {
          id: "123",
          name: "User",
          email: credentials.email,
          instagramConnected: false,
        },
        token: "mock_jwt_token",
      });
    }, 1000);
  });
};
