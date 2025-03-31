"use client";
import { InstagramProfile } from "@/components/instagram-profile";
import React from "react";

function Dashboard() {
  const instagramInfo: {
    accessToken: string;
    instagramAccountId: string;
    facebookPageId: string;
    expiry: number;
    tokenType: string;
  } = JSON.parse(localStorage.getItem("instagramInfo") || "{}");

  return (
    <InstagramProfile
      accessToken={instagramInfo.accessToken}
      userId={instagramInfo.instagramAccountId}
    />
  );
}

export default Dashboard;
