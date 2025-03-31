import axios, { AxiosResponse } from "axios";

export interface InstagramUserProfile {
  id: string;
  username: string;
  account_type: string;
  media_count: number;
  profile_picture_url?: string;
  biography?: string;
  name?: string;
  website?: string;
  followers_count?: number;
  follows_count?: number;
}

export interface InstagramMediaItem {
  id: string;
  caption?: string;
  media_type: string;
  media_url: string;
  permalink: string;
  thumbnail_url?: string;
  timestamp: string;
  username: string;
  children?: {
    data: Array<{
      id: string;
      media_type: string;
      media_url: string;
    }>;
  };
}

export async function getUserProfile(
  accessToken: string,
  userId: string
): Promise<InstagramUserProfile> {
  const fields =
    "id,username,media_count,profile_picture_url,biography,name,website,followers_count,follows_count";
  const url = `https://graph.instagram.com/me?fields=${fields}&access_token=${accessToken}`;

  const response = await fetch(url);
  console.log({
    response,
  });
  if (!response.ok) {
    const error = await response.json();
    throw new Error(`Failed to fetch user profile`);
  }

  return response.json();
}

export async function getUserMedia(
  accessToken: string,
  userId: string,
  limit = 10
): Promise<InstagramMediaItem[]> {
  const fields =
    "id,caption,media_type,media_url,permalink,thumbnail_url,timestamp,username,children{id,media_type,media_url}";
  const url = `https://graph.instagram.com/me/media?fields=${fields}&limit=${limit}&access_token=${accessToken}`;

  const response = await fetch(url);

  console.log({
    response,
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(`Failed to fetch user media: ${error.error.message}`);
  }

  const data = await response.json();
  return data.data;
}

export async function getAccessToken(code: string) {
  console.log("Auth Code:", code);

  const clientId = process.env.INSTAGRAM_APP_ID!;
  const clientSecret = process.env.INSTAGRAM_APP_SECRET!;
  const redirectUri = process.env.INSTAGRAM_REDIRECT_URI!;

  const params = new URLSearchParams({
    client_id: clientId,
    client_secret: clientSecret,
    grant_type: "authorization_code",
    redirect_uri: redirectUri,
    code,
  });

  console.log("Sending request to Instagram with params:", params.toString());

  const response: AxiosResponse<{
    access_token: string;
    user_id: string;
    permissions: string[];
  }> = await axios.post(
    "https://api.instagram.com/oauth/access_token",
    params.toString(),
    {
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
    }
  );

  // Get long-lived access token
  const longLivedTokenResponse = await fetch(
    `https://graph.instagram.com/access_token?grant_type=ig_exchange_token&client_secret=${clientSecret}&access_token=${response.data.access_token}`
  );

  if (!longLivedTokenResponse.ok) {
    console.error("longLivedTokenResponse", longLivedTokenResponse);
    throw new Error("Failed to get long-lived token");
  }

  const longLivedTokenData = await longLivedTokenResponse.json();

  if (!response.data) {
    // const error = await response.json();
    throw new Error(`Failed to fetch access token`);
  }

  return {
    ...response.data,
    longLivedAccessToken: longLivedTokenData.access_token,
  };
}
