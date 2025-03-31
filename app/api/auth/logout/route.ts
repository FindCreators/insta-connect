import { NextResponse } from "next/server"
import { clearSession } from "@/lib/auth"

export async function GET() {
  await clearSession()
  return NextResponse.redirect(new URL("/", process.env.INSTAGRAM_REDIRECT_URI!))
}

