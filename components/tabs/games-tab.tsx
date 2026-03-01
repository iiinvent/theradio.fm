"use client"

import {
  Gamepad2,
  Puzzle,
  Brain,
  Zap,
  Target,
  Dice1,
  ExternalLink,
} from "lucide-react"

const gameCategories = [
  {
    title: "Action Games",
    description: "Fast-paced and adrenaline-pumping",
    icon: Zap,
    color: "from-red-500/20 to-orange-500/10",
    iconColor: "text-red-400",
  },
  {
    title: "Puzzle Games",
    description: "Test your logic and problem-solving",
    icon: Puzzle,
    color: "from-blue-500/20 to-cyan-500/10",
    iconColor: "text-blue-400",
  },
  {
    title: "Brain Teasers",
    description: "Challenge your mind with tricky games",
    icon: Brain,
    color: "from-purple-500/20 to-pink-500/10",
    iconColor: "text-purple-400",
  },
  {
    title: "Arcade",
    description: "Classic arcade fun for everyone",
    icon: Target,
    color: "from-green-500/20 to-emerald-500/10",
    iconColor: "text-green-400",
  },
  {
    title: "Casual",
    description: "Relaxing games for when you unwind",
    icon: Dice1,
    color: "from-yellow-500/20 to-amber-500/10",
    iconColor: "text-yellow-400",
  },
  {
    title: "Multiplayer",
    description: "Play with friends and compete online",
    icon: Gamepad2,
    color: "from-primary/20 to-rose-500/10",
    iconColor: "text-primary",
  },
]

export function GamesTab() {
  return (
    <div className="space-y-6 px-4 py-6">
      {/* Header */}
      <div>
        <h2 className="text-2xl font-bold tracking-tight text-foreground">
          Games
        </h2>
        <p className="mt-1 text-sm text-muted-foreground">
          Ad-free gaming while you listen
        </p>
      </div>

      {/* Featured banner */}
      <a
        href="https://gamesnacks.com"
        target="_blank"
        rel="noopener noreferrer"
        className="group block overflow-hidden rounded-xl border border-border bg-gradient-to-br from-primary/15 via-card to-card p-6 transition-all hover:border-primary/30"
      >
        <div className="flex items-center justify-between">
          <div className="space-y-2">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/20 px-3 py-1 text-xs font-semibold text-primary">
              <Gamepad2 className="h-3 w-3" />
              GameSnacks
            </span>
            <h3 className="text-xl font-bold text-foreground">
              Play Instantly
            </h3>
            <p className="text-sm text-muted-foreground">
              Hundreds of free, fast-loading games. No downloads, no ads.
            </p>
          </div>
          <ExternalLink className="h-5 w-5 text-muted-foreground transition-all group-hover:translate-x-0.5 group-hover:text-primary" />
        </div>
      </a>

      {/* Game categories */}
      <div className="space-y-3">
        <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
          Categories
        </h3>
        <div className="grid grid-cols-2 gap-3">
          {gameCategories.map((category) => {
            const Icon = category.icon
            return (
              <a
                key={category.title}
                href="https://gamesnacks.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col gap-3 rounded-xl border border-border bg-card p-4 transition-all hover:border-primary/30 hover:bg-surface-hover"
              >
                <div
                  className={`flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br ${category.color}`}
                >
                  <Icon className={`h-5 w-5 ${category.iconColor}`} />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-foreground">
                    {category.title}
                  </h4>
                  <p className="mt-0.5 text-[11px] text-muted-foreground">
                    {category.description}
                  </p>
                </div>
              </a>
            )
          })}
        </div>
      </div>

      {/* Tip */}
      <div className="rounded-xl border border-border bg-card p-4">
        <p className="text-center text-xs text-muted-foreground">
          Tip: Keep your radio playing while you game. Music Love lets you
          multitask seamlessly.
        </p>
      </div>
    </div>
  )
}
