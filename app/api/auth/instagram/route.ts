import { type NextRequest, NextResponse } from "next/server"
import { setSession } from "@/lib/auth"

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const code = searchParams.get("code")

  if (!code) {
    return NextResponse.redirect(new URL("/", request.url))
  }

  try {
    // Exchange code for access token
    const tokenResponse = await fetch("https://api.instagram.com/oauth/access_token", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        client_id: process.env.INSTAGRAM_APP_ID!,
        client_secret: process.env.INSTAGRAM_APP_SECRET!,
        grant_type: "authorization_code",
        redirect_uri: process.env.INSTAGRAM_REDIRECT_URI!,
        code,
      }),
    })

    if (!tokenResponse.ok) {
      throw new Error("Failed to exchange code for token")
    }

    const tokenData = await tokenResponse.json()

    // Get long-lived access token
    const longLivedTokenResponse = await fetch(
      `https://graph.instagram.com/access_token?grant_type=ig_exchange_token&client_secret=${process.env.INSTAGRAM_APP_SECRET}&access_token=${tokenData.access_token}`,
    )

    if (!longLivedTokenResponse.ok) {
      throw new Error("Failed to get long-lived token")
    }

    const longLivedTokenData = await longLivedTokenResponse.json()

    // Set session
    await setSession({
      accessToken: longLivedTokenData.access_token,
      userId: tokenData.user_id,
    })

    return NextResponse.redirect(new URL("/", request.url))
  } catch (error) {
    console.error("Authentication error:", error)
    return NextResponse.redirect(new URL("/?error=auth_failed", request.url))
  }
}

