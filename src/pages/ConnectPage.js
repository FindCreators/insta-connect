// src/pages/ConnectPage.js
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import InstagramButton from "../components/InstagramButton";

const ConnectPage = () => {
  const { user, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // If user is already connected to Instagram, redirect to dashboard
    if (isAuthenticated && user?.instagramConnected) {
      navigate("/dashboard");
    }
  }, [isAuthenticated, user, navigate]);

  return (
    <div className="connect-container">
      <div className="connect-card">
        <h1>Connect Your Instagram</h1>
        <p>
          Connect your Instagram profile to unlock all features and insights.
          We'll analyze your content to provide personalized recommendations.
        </p>

        <InstagramButton isLoading={isLoading} setIsLoading={setIsLoading} />

        <div className="privacy-note">
          <p>
            We only access the data you permit. Your information is securely
            stored and never shared with third parties.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ConnectPage;
