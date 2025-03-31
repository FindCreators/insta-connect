// import { InstagramProfile } from "@/components/instagram-profile";
import { LoginButton } from "@/components/login-button";

export default async function Home() {
  return (
    <main className="container mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-8 text-center">
        Instagram Profile Viewer
      </h1>

      <div className="flex flex-col items-center justify-center space-y-4 p-8 border rounded-lg max-w-md mx-auto">
        <h2 className="text-xl font-semibold">Connect with Instagram</h2>
        <p className="text-muted-foreground text-center mb-4">
          Login with your Instagram account to view your profile data, posts,
          and reels.
        </p>
        <LoginButton />
      </div>
    </main>
  );
}
