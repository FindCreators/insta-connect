// src/pages/CallbackPage.js
import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { exchangeCodeForToken } from "../services/instagramService";
import "../styles/CallbackPage.css";

const CallbackPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { updateUser } = useAuth();
  const [status, setStatus] = useState("Processing your request...");
  const [error, setError] = useState(null);

  useEffect(() => {
    const handleInstagramCallback = async () => {
      try {
        // Get the authorization code from URL parameters
        const urlParams = new URLSearchParams(location.search);
        const code = urlParams.get("code");

        if (!code) {
          throw new Error("No authorization code received from Instagram");
        }

        setStatus("Connecting to your Instagram account...");

        // Exchange the code for a token using your backend API
        const redirectUri =
          process.env.REACT_APP_INSTAGRAM_REDIRECT_URI ||
          `${window.location.origin}/auth/instagram/callback`;

        const response = await exchangeCodeForToken(code, redirectUri);

        if (!response.longLivedToken) {
          throw new Error("Failed to get access token");
        }

        // Update user state with Instagram connection
        updateUser({
          instagramConnected: true,
          instagramToken: response.longLivedToken,
        });

        setStatus("Successfully connected!");

        // Redirect to dashboard after successful connection
        setTimeout(() => {
          navigate("/dashboard");
        }, 1500);
      } catch (err) {
        console.error("Instagram connection error:", err);
        setError(err.message || "Failed to connect to Instagram");

        // Redirect back to connect page after error
        setTimeout(() => {
          navigate("/");
        }, 3000);
      }
    };

    handleInstagramCallback();
  }, [location, navigate, updateUser]);

  return (
    <div className="callback-container">
      <div className="callback-card">
        {error ? (
          <>
            <div className="error-icon">❌</div>
            <h2>Connection Failed</h2>
            <p className="error-message">{error}</p>
            <p>Redirecting you back...</p>
          </>
        ) : (
          <>
            <div className="loading-spinner"></div>
            <h2>{status}</h2>
          </>
        )}
      </div>
    </div>
  );
};

export default CallbackPage;
