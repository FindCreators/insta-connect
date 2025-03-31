"use client";
import React, { useEffect, useState } from "react";
import axios, { AxiosResponse } from "axios";
import { useRouter } from "next/navigation";
import { Loader2 } from "lucide-react";

function InstagramCallBack() {
  const dots = true;
  const message = "Please wait while we authenticate your account";
  const [count, setCount] = useState(0);

  const { push } = useRouter();

  useEffect(() => {
    if (!dots) return;

    const interval = setInterval(() => {
      setCount((prev) => (prev + 1) % 4);
    }, 500);

    return () => clearInterval(interval);
  }, [dots]);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get("code");

    if (code) {
      (async () => {
        const token: AxiosResponse<{
          access_token: string;
          user_id: string;
          permissions: string[];
          longLivedAccessToken: string;
        }> = await axios.post("/api/instagram/auth", { code });
        const {
          access_token: accessToken,
          user_id: userId,
          permissions,
          longLivedAccessToken,
        } = token.data;

        const allInfo = {
          accessToken: longLivedAccessToken,
          instagramAccountId: userId,
          permissions,
          oldAccessToken: accessToken,
        };

        localStorage.setItem("instagramInfo", JSON.stringify(allInfo));

        if (allInfo) {
          push("/dashboard");
        }
      })();
    }
  }, []);

  return (
    <div className="size-screen flex flex-col items-center justify-center p-4 space-y-4">
      <Loader2
        className="h-8 w-8 text-primary animate-spin"
        aria-hidden="true"
      />
      <p className="text-base font-medium text-center">
        {message}
        {dots && ".".repeat(count)}
        {dots && <span className="sr-only">Loading</span>}
      </p>
    </div>
  );
}

export default InstagramCallBack;
