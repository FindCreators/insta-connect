import { type NextRequest, NextResponse } from "next/server";
import { getUserMedia } from "@/lib/instagram-api";

export async function POST(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const limit = searchParams.get("limit")
    ? Number.parseInt(searchParams.get("limit")!)
    : 10;

  try {
    const data = await request.json();
    const { accessToken, userId } = data;
    const media = await getUserMedia(accessToken, userId, limit);

    console.log({ media });

    return NextResponse.json(media);
  } catch (error) {
    console.error("Error fetching media:", error);
    return NextResponse.json(
      { error: "Failed to fetch media" },
      { status: 500 }
    );
  }
}
