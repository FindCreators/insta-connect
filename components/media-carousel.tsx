"use client"

import { useState } from "react"
import Image from "next/image"
import type { InstagramMediaItem } from "@/lib/instagram-api"
import { Card, CardContent } from "@/components/ui/card"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import { Button } from "@/components/ui/button"
import { ExternalLink, ChevronLeft, ChevronRight } from "lucide-react"

interface MediaCarouselProps {
  items: InstagramMediaItem[]
}

export function MediaCarousel({ items }: MediaCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? items.length - 1 : prevIndex - 1))
  }

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === items.length - 1 ? 0 : prevIndex + 1))
  }

  if (items.length === 0) {
    return null
  }

  const currentItem = items[currentIndex]

  return (
    <div className="space-y-4">
      <Card className="overflow-hidden relative group max-w-2xl mx-auto">
        <CardContent className="p-0">
          <AspectRatio ratio={9 / 16}>
            {currentItem.media_type === "VIDEO" ? (
              <video
                src={currentItem.media_url}
                controls
                className="w-full h-full object-cover"
                poster={currentItem.thumbnail_url}
              />
            ) : (
              <Image
                src={currentItem.media_url || "/placeholder.svg"}
                alt={currentItem.caption || "Instagram post"}
                fill
                className="object-cover"
              />
            )}
          </AspectRatio>

          <a
            href={currentItem.permalink}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute top-2 right-2 bg-black/50 text-white p-2 rounded-full opacity-50 hover:opacity-100 transition-opacity"
          >
            <ExternalLink className="h-4 w-4" />
          </a>

          {items.length > 1 && (
            <>
              <Button
                variant="ghost"
                size="icon"
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white opacity-50 hover:opacity-100 transition-opacity"
                onClick={handlePrevious}
                aria-label="Previous reel"
              >
                <ChevronLeft className="h-6 w-6" />
              </Button>

              <Button
                variant="ghost"
                size="icon"
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white opacity-50 hover:opacity-100 transition-opacity"
                onClick={handleNext}
                aria-label="Next reel"
              >
                <ChevronRight className="h-6 w-6" />
              </Button>
            </>
          )}
        </CardContent>
      </Card>

      {currentItem.caption && (
        <div className="max-w-2xl mx-auto px-4">
          <p className="text-sm">{currentItem.caption}</p>
          <p className="text-xs text-muted-foreground mt-1">
            Posted on {new Date(currentItem.timestamp).toLocaleDateString()}
          </p>
        </div>
      )}

      {items.length > 1 && (
        <div className="flex justify-center gap-1 mt-4">
          {items.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full ${index === currentIndex ? "bg-primary" : "bg-muted"}`}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Go to reel ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  )
}

