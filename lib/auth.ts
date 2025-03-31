import { cookies } from "next/headers"

export interface Session {
  accessToken: string
  userId: string
}

export async function getSession(): Promise<Session | null> {
  const cookieStore = cookies()
  const accessToken = cookieStore.get("instagram_access_token")?.value
  const userId = cookieStore.get("instagram_user_id")?.value

  if (!accessToken || !userId) {
    return null
  }

  return {
    accessToken,
    userId,
  }
}

export async function setSession(session: Session): Promise<void> {
  const cookieStore = cookies()

  cookieStore.set("instagram_access_token", session.accessToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    maxAge: 60 * 60 * 24 * 30, // 30 days
    path: "/",
  })

  cookieStore.set("instagram_user_id", session.userId, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    maxAge: 60 * 60 * 24 * 30, // 30 days
    path: "/",
  })
}

export async function clearSession(): Promise<void> {
  const cookieStore = cookies()

  cookieStore.delete("instagram_access_token")
  cookieStore.delete("instagram_user_id")
}

