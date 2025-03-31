import { type NextRequest, NextResponse } from "next/server";
import { getAccessToken } from "@/lib/instagram-api";

export async function POST(request: NextRequest) {
  try {
    const { code } = await request.json();

    if (!code) {
      return NextResponse.json({ error: "Authorization code is required" });
    }

    const token = await getAccessToken(code);

    return NextResponse.json(token);
  } catch (error) {
    console.error("Error exchanging access token:", error);
    return NextResponse.json(
      { error: "Failed to exchange access token" },
      { status: 500 }
    );
  }
}
