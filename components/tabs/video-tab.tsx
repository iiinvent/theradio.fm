"use client"

import { Play, Music, Headphones, Tv, ExternalLink } from "lucide-react"

const videoSources = [
  {
    title: "YouTube Music",
    description: "Stream official music videos, live performances, and more",
    icon: Play,
    url: "https://music.youtube.com",
    color: "bg-red-500/15 text-red-400",
  },
  {
    title: "Spotify",
    description: "Discover new music, podcasts, and curated playlists",
    icon: Music,
    url: "https://open.spotify.com",
    color: "bg-green-500/15 text-green-400",
  },
  {
    title: "Apple Music",
    description: "Over 100 million songs, curated playlists, and Spatial Audio",
    icon: Headphones,
    url: "https://music.apple.com",
    color: "bg-pink-500/15 text-pink-400",
  },
  {
    title: "TubeFlix",
    description: "Ad-free video streaming for music and entertainment",
    icon: Tv,
    url: "https://tubeflix.net",
    color: "bg-blue-500/15 text-blue-400",
  },
]

const categories = [
  { name: "Music Videos", emoji: "Music" },
  { name: "Live Concerts", emoji: "Live" },
  { name: "Podcasts", emoji: "Podcast" },
  { name: "DJ Sets", emoji: "DJ" },
]

export function VideoTab() {
  return (
    <div className="space-y-6 px-4 py-6">
      {/* Header */}
      <div>
        <h2 className="text-2xl font-bold tracking-tight text-foreground">
          Video
        </h2>
        <p className="mt-1 text-sm text-muted-foreground">
          Discover music videos, concerts, and more
        </p>
      </div>

      {/* Categories */}
      <div className="flex gap-2 overflow-x-auto pb-2">
        {categories.map((cat) => (
          <div
            key={cat.name}
            className="flex shrink-0 items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm text-card-foreground"
          >
            <span className="text-xs font-semibold uppercase tracking-wider text-primary">
              {cat.emoji}
            </span>
            <span>{cat.name}</span>
          </div>
        ))}
      </div>

      {/* Featured */}
      <div className="overflow-hidden rounded-xl border border-border bg-gradient-to-br from-primary/10 via-card to-card p-6">
        <div className="space-y-2">
          <span className="inline-block rounded-full bg-primary/20 px-3 py-1 text-xs font-semibold text-primary">
            Featured
          </span>
          <h3 className="text-xl font-bold text-foreground">
            SA Music Scene
          </h3>
          <p className="text-sm text-muted-foreground">
            Explore the vibrant South African music scene from Amapiano to
            Gqom, Afro-house to Maskandi. Your soundtrack to the rainbow nation.
          </p>
        </div>
      </div>

      {/* Streaming services */}
      <div className="space-y-3">
        <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
          Streaming Services
        </h3>
        <div className="grid gap-3">
          {videoSources.map((source) => {
            const Icon = source.icon
            return (
              <a
                key={source.title}
                href={source.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 rounded-xl border border-border bg-card p-4 transition-all hover:border-primary/30 hover:bg-surface-hover"
              >
                <div
                  className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${source.color}`}
                >
                  <Icon className="h-6 w-6" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2">
                    <h4 className="font-semibold text-foreground">
                      {source.title}
                    </h4>
                    <ExternalLink className="h-3 w-3 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
                  </div>
                  <p className="mt-0.5 text-xs text-muted-foreground">
                    {source.description}
                  </p>
                </div>
              </a>
            )
          })}
        </div>
      </div>
    </div>
  )
}
