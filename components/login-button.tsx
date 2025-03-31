"use client";

import { Button } from "@/components/ui/button";
import { Instagram } from "lucide-react";

export function LoginButton() {
  const handleLogin = () => {
    const appId = process.env.NEXT_PUBLIC_INSTAGRAM_APP_ID || "";
    const redirectUri = process.env.NEXT_PUBLIC_INSTAGRAM_REDIRECT_URI || "";

    // // Updated scopes - using the correct Instagram Basic Display API scopes
    // const scopes = "pages_show_list"; // instagram_basic,instagram_manage_insights,
    // const authUrl = `https://www.instagram.com/v22.0/dialog/oauth?client_id=${appId}&redirect_uri=${encodeURIComponent(
    //   redirectUri
    // )}&scope=${scopes}&response_type=code`;

    const responseType = "code";
    const scopes =
      "instagram_business_basic,instagram_business_manage_messages,instagram_business_manage_comments,instagram_business_content_publish,instagram_business_manage_insights";
    const authUrl = `https://www.instagram.com/oauth/authorize?enable_fb_login=0&force_authentication=1&client_id=${appId}&redirect_uri=${redirectUri}&response_type=${responseType}&scope=${scopes}`;

    window.location.href = authUrl;
  };

  return (
    <Button onClick={handleLogin} className="flex items-center gap-2">
      <Instagram className="h-4 w-4" />
      Login with Instagram
    </Button>
  );
}
