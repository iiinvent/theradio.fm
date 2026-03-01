"use client"

import { ExternalLink, Heart, MessageCircle, Share2 } from "lucide-react"

const socialLinks = [
  {
    platform: "X (Twitter)",
    handle: "@theradiofm",
    url: "https://x.com/theradiofm",
    description: "Follow us for live updates and music discussions",
    color: "bg-foreground/10 text-foreground",
  },
  {
    platform: "GitHub",
    handle: "iiinvent",
    url: "https://github.com/iiinvent",
    description: "Check out our open source projects",
    color: "bg-foreground/10 text-foreground",
  },
]

const feedItems = [
  {
    title: "SA Music Awards 2026",
    description:
      "The biggest night in South African music returns. Who will take home the crown?",
    tag: "Trending",
    time: "Live",
  },
  {
    title: "New Amapiano Releases",
    description:
      "Fresh beats dropping this week from top SA producers. Tune into MetroFM for the latest.",
    tag: "Music",
    time: "Today",
  },
  {
    title: "Community Spotlight",
    description:
      "Meet the DJs and radio hosts shaping the sound of South African radio.",
    tag: "Community",
    time: "This week",
  },
  {
    title: "Radio Bouquet Update",
    description:
      "We've added new stations to our lineup. Check out the latest additions to Music Love.",
    tag: "News",
    time: "Recent",
  },
]

export function SocialTab() {
  return (
    <div className="space-y-6 px-4 py-6">
      {/* Header */}
      <div>
        <h2 className="text-2xl font-bold tracking-tight text-foreground">
          Social
        </h2>
        <p className="mt-1 text-sm text-muted-foreground">
          Connect with the Music Love community
        </p>
      </div>

      {/* Social links */}
      <div className="grid grid-cols-2 gap-3">
        {socialLinks.map((link) => (
          <a
            key={link.platform}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col gap-2 rounded-xl border border-border bg-card p-4 transition-all hover:border-primary/30 hover:bg-surface-hover"
          >
            <div className="flex items-center justify-between">
              <span className="text-sm font-semibold text-foreground">
                {link.platform}
              </span>
              <ExternalLink className="h-3 w-3 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
            </div>
            <span className="text-xs text-primary">{link.handle}</span>
            <span className="text-xs text-muted-foreground">
              {link.description}
            </span>
          </a>
        ))}
      </div>

      {/* Feed */}
      <div className="space-y-3">
        <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
          Feed
        </h3>
        <div className="space-y-3">
          {feedItems.map((item) => (
            <div
              key={item.title}
              className="rounded-xl border border-border bg-card p-4"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="min-w-0 flex-1 space-y-1.5">
                  <div className="flex items-center gap-2">
                    <span className="inline-block rounded-full bg-primary/15 px-2 py-0.5 text-[10px] font-semibold text-primary">
                      {item.tag}
                    </span>
                    <span className="text-[10px] text-muted-foreground">
                      {item.time}
                    </span>
                  </div>
                  <h4 className="font-semibold text-foreground">
                    {item.title}
                  </h4>
                  <p className="text-xs leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </div>
              <div className="mt-3 flex items-center gap-4 border-t border-border pt-3">
                <button className="flex items-center gap-1.5 text-xs text-muted-foreground transition-colors hover:text-primary">
                  <Heart className="h-3.5 w-3.5" />
                  Like
                </button>
                <button className="flex items-center gap-1.5 text-xs text-muted-foreground transition-colors hover:text-primary">
                  <MessageCircle className="h-3.5 w-3.5" />
                  Comment
                </button>
                <button className="flex items-center gap-1.5 text-xs text-muted-foreground transition-colors hover:text-primary">
                  <Share2 className="h-3.5 w-3.5" />
                  Share
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
