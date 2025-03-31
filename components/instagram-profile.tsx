"use client";

import { useEffect, useState } from "react";
import type {
  InstagramUserProfile,
  InstagramMediaItem,
} from "@/lib/instagram-api";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { LogOut, ExternalLink, Grid, Film } from "lucide-react";
import { MediaGrid } from "@/components/media-grid";
import { MediaCarousel } from "@/components/media-carousel";

interface InstagramProfileProps {
  accessToken: string;
  userId: string;
}

export function InstagramProfile({
  accessToken,
  userId,
}: InstagramProfileProps) {
  const [profile, setProfile] = useState<InstagramUserProfile | null>(null);
  const [media, setMedia] = useState<InstagramMediaItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);

        // Fetch profile
        const profileRes = await fetch("/api/instagram/profile", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ accessToken, userId }),
        });
        console.log({
          profileRes,
        });
        if (!profileRes.ok) throw new Error("Failed to fetch profile");
        const profileData = await profileRes.json();

        // Fetch media
        const mediaRes = await fetch("/api/instagram/media?limit=24", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ accessToken, userId }),
        });
        if (!mediaRes.ok) throw new Error("Failed to fetch media");
        const mediaData = await mediaRes.json();

        setProfile(profileData);
        setMedia(mediaData);
      } catch (err) {
        console.error("Error fetching Instagram data:", err);
        setError("Failed to load Instagram data. Please try again later.");
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  if (loading) {
    return <ProfileSkeleton />;
  }

  if (error) {
    return (
      <Card className="max-w-3xl mx-auto">
        <CardContent className="p-6">
          <div className="text-center">
            <p className="text-red-500 mb-4">{error}</p>
            <Button asChild>
              <a href="/api/auth/logout">Logout and Try Again</a>
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  }

  if (!profile) {
    return null;
  }

  const reels = media.filter((item) => item.media_type === "VIDEO");
  const posts = media.filter((item) => item.media_type !== "VIDEO");

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <Card>
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
            <Avatar className="h-24 w-24 md:h-32 md:w-32">
              <AvatarImage
                src={profile.profile_picture_url}
                alt={profile.username}
              />
              <AvatarFallback>
                {profile.username?.substring(0, 2).toUpperCase()}
              </AvatarFallback>
            </Avatar>

            <div className="flex-1 text-center md:text-left">
              <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
                <h2 className="text-2xl font-bold">{profile.username}</h2>
                <div className="flex justify-center md:justify-start gap-2">
                  <Button variant="outline" size="sm" asChild>
                    <a
                      href={`https://instagram.com/${profile.username}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1"
                    >
                      <ExternalLink className="h-3 w-3" />
                      View on Instagram
                    </a>
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    asChild
                    className="text-red-500 hover:text-red-600"
                  >
                    <a
                      href="/api/auth/logout"
                      className="flex items-center gap-1"
                    >
                      <LogOut className="h-3 w-3" />
                      Logout
                    </a>
                  </Button>
                </div>
              </div>

              {profile.name && (
                <p className="text-lg font-medium mt-2">{profile.name}</p>
              )}

              <div className="flex justify-center md:justify-start gap-6 my-4">
                <div className="text-center">
                  <p className="font-bold">{profile.media_count}</p>
                  <p className="text-sm text-muted-foreground">Posts</p>
                </div>
                {profile.followers_count !== undefined && (
                  <div className="text-center">
                    <p className="font-bold">{profile.followers_count}</p>
                    <p className="text-sm text-muted-foreground">Followers</p>
                  </div>
                )}
                {profile.follows_count !== undefined && (
                  <div className="text-center">
                    <p className="font-bold">{profile.follows_count}</p>
                    <p className="text-sm text-muted-foreground">Following</p>
                  </div>
                )}
              </div>

              {profile.biography && <p className="mt-2">{profile.biography}</p>}
              {profile.website && (
                <a
                  href={
                    profile.website.startsWith("http")
                      ? profile.website
                      : `https://${profile.website}`
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline mt-1 block"
                >
                  {profile.website}
                </a>
              )}
            </div>
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="posts">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="posts" className="flex items-center gap-2">
            <Grid className="h-4 w-4" />
            Posts ({posts.length})
          </TabsTrigger>
          <TabsTrigger value="reels" className="flex items-center gap-2">
            <Film className="h-4 w-4" />
            Reels ({reels.length})
          </TabsTrigger>
        </TabsList>
        <TabsContent value="posts" className="mt-6">
          {posts.length > 0 ? (
            <MediaGrid items={posts} />
          ) : (
            <p className="text-center py-10 text-muted-foreground">
              No posts found
            </p>
          )}
        </TabsContent>
        <TabsContent value="reels" className="mt-6">
          {reels.length > 0 ? (
            <MediaCarousel items={reels} />
          ) : (
            <p className="text-center py-10 text-muted-foreground">
              No reels found
            </p>
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
}

function ProfileSkeleton() {
  return (
    <Card className="max-w-4xl mx-auto">
      <CardContent className="p-6">
        <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
          <Skeleton className="h-24 w-24 md:h-32 md:w-32 rounded-full" />
          <div className="flex-1 w-full space-y-4">
            <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
              <Skeleton className="h-8 w-40" />
              <div className="flex justify-center md:justify-start gap-2">
                <Skeleton className="h-8 w-32" />
                <Skeleton className="h-8 w-24" />
              </div>
            </div>
            <div className="flex justify-center md:justify-start gap-6 my-4">
              <Skeleton className="h-12 w-16" />
              <Skeleton className="h-12 w-16" />
              <Skeleton className="h-12 w-16" />
            </div>
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-3/4" />
            <Skeleton className="h-4 w-1/2" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
