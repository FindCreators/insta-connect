import Image from "next/image"
import type { InstagramMediaItem } from "@/lib/instagram-api"
import { Card, CardContent } from "@/components/ui/card"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import { ExternalLink, Film, Images } from "lucide-react"

interface MediaGridProps {
  items: InstagramMediaItem[]
}

export function MediaGrid({ items }: MediaGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {items.map((item) => (
        <Card key={item.id} className="overflow-hidden group">
          <a href={item.permalink} target="_blank" rel="noopener noreferrer">
            <CardContent className="p-0 relative">
              <AspectRatio ratio={1}>
                <Image
                  src={item.thumbnail_url || item.media_url}
                  alt={item.caption || "Instagram post"}
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                />
              </AspectRatio>

              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                <ExternalLink className="text-white opacity-0 group-hover:opacity-100 transition-opacity h-6 w-6" />
              </div>

              {item.media_type === "CAROUSEL_ALBUM" && (
                <div className="absolute top-2 right-2">
                  <Images className="h-5 w-5 text-white drop-shadow-md" />
                </div>
              )}

              {item.media_type === "VIDEO" && (
                <div className="absolute top-2 right-2">
                  <Film className="h-5 w-5 text-white drop-shadow-md" />
                </div>
              )}
            </CardContent>
          </a>
        </Card>
      ))}
    </div>
  )
}

