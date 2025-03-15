// src/services/instagramService.js
import axios from "axios";
import { getAuthToken } from "./authService";

const API_BASE_URL =
  "https://findcreators-backend-141065095049.us-central1.run.app";

/**
 * Exchange Instagram authorization code for a long-lived token
 * @param {string} code - The authorization code from Instagram
 * @param {string} redirectUrl - The redirect URL used in the authorization request
 * @returns {Promise<Object>} The response containing the long-lived token
 */
export const exchangeCodeForToken = async (code, redirectUrl) => {
  try {
    const token = getAuthToken();

    const response = await axios.post(
      `${API_BASE_URL}/api/instagram-auth`,
      { code, redirectUrl },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return response.data;
  } catch (error) {
    console.error("Error exchanging code for token:", error);
    throw new Error(
      error.response?.data?.error ||
        "Failed to connect Instagram account. Please try again."
    );
  }
};

/**
 * Fetch user's Instagram profile information
 * @returns {Promise<Object>} The user's Instagram profile data
 */
export const fetchInstagramProfile = async () => {
  try {
    const token = getAuthToken();

    const response = await axios.get(`${API_BASE_URL}/instagram/profile`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data;
  } catch (error) {
    console.error("Error fetching Instagram profile:", error);
    throw new Error(
      error.response?.data?.error || "Failed to fetch Instagram profile data."
    );
  }
};

/**
 * Fetch user's Instagram media
 * @returns {Promise<Array>} The user's Instagram media items
 */
export const fetchInstagramMedia = async () => {
  try {
    const token = getAuthToken();

    const response = await axios.get(`${API_BASE_URL}/instagram/media`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data;
  } catch (error) {
    console.error("Error fetching Instagram media:", error);
    throw new Error(
      error.response?.data?.error || "Failed to fetch Instagram media data."
    );
  }
};
