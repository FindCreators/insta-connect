// src/pages/Dashboard.js
import React, { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import {
  fetchInstagramProfile,
  fetchInstagramMedia,
} from "../services/instagramService";
import "../styles/Dashboard.css";

const Dashboard = () => {
  const { user } = useAuth();
  const [profile, setProfile] = useState(null);
  const [media, setMedia] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchInstagramData = async () => {
      try {
        setIsLoading(true);

        // Fetch Instagram profile data
        const profileData = await fetchInstagramProfile();
        setProfile(profileData);

        // Fetch Instagram media data
        const mediaData = await fetchInstagramMedia();
        setMedia(mediaData);
      } catch (err) {
        console.error("Error fetching Instagram data:", err);
        setError(err.message || "Failed to load Instagram data");
      } finally {
        setIsLoading(false);
      }
    };

    if (user?.instagramConnected) {
      fetchInstagramData();
    } else {
      setIsLoading(false);
    }
  }, [user]);

  if (isLoading) {
    return (
      <div className="dashboard-loading">
        <div className="loading-spinner"></div>
        <p>Loading your Instagram data...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="dashboard-error">
        <h2>Error Loading Data</h2>
        <p>{error}</p>
        <button onClick={() => window.location.reload()}>Try Again</button>
      </div>
    );
  }

  if (!user?.instagramConnected) {
    return (
      <div className="dashboard-not-connected">
        <h2>Instagram Not Connected</h2>
        <p>Please connect your Instagram account to view your data.</p>
        <button onClick={() => (window.location.href = "/")}>
          Connect Instagram
        </button>
      </div>
    );
  }

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h1>Instagram Dashboard</h1>
        <div className="profile-summary">
          {profile?.profile_picture && (
            <img
              src={profile.profile_picture}
              alt="Profile"
              className="profile-picture"
            />
          )}
          <div className="profile-info">
            <h2>{profile?.username || "Instagram User"}</h2>
            <div className="profile-stats">
              <div className="stat">
                <span className="stat-value">{profile?.media_count || 0}</span>
                <span className="stat-label">Posts</span>
              </div>
              <div className="stat">
                <span className="stat-value">
                  {profile?.followers_count || 0}
                </span>
                <span className="stat-label">Followers</span>
              </div>
              <div className="stat">
                <span className="stat-value">
                  {profile?.following_count || 0}
                </span>
                <span className="stat-label">Following</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <section className="media-gallery">
        <h2>Recent Posts</h2>
        {media.length === 0 ? (
          <p className="no-media">No media to display.</p>
        ) : (
          <div className="media-grid">
            {media.map((item) => (
              <div key={item.id} className="media-item">
                <img
                  src={item.media_url || item.thumbnail_url}
                  alt={item.caption || "Instagram post"}
                  className="media-image"
                />
                <div className="media-overlay">
                  <div className="media-stats">
                    <span>❤️ {item.like_count || 0}</span>
                    <span>💬 {item.comments_count || 0}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
};

export default Dashboard;
