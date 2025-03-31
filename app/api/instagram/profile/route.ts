import { type NextRequest, NextResponse } from "next/server";
import { getUserProfile } from "@/lib/instagram-api";

export async function POST(request: NextRequest) {
  // Get the access token and user ID from request body

  try {
    const data = await request.json();
    const { accessToken, userId } = data;
    const profile = await getUserProfile(accessToken, userId);

    return NextResponse.json(profile);
  } catch (error: any) {
    console.error("Error fetching profile:", error);
    return NextResponse.json(
      { error: "Failed to fetch profile", message: error.message },
      { status: 500 }
    );
  }
}
