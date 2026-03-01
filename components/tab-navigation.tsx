"use client"

import { Home, Radio, Play, Users, Gamepad2 } from "lucide-react"
import { cn } from "@/lib/utils"

const tabs = [
  { id: "home", label: "Home", icon: Home },
  { id: "radio", label: "Radio", icon: Radio },
  { id: "video", label: "Video", icon: Play },
  { id: "social", label: "Social", icon: Users },
  { id: "games", label: "Games", icon: Gamepad2 },
] as const

export type TabId = (typeof tabs)[number]["id"]

interface TabNavigationProps {
  activeTab: TabId
  onTabChange: (tab: TabId) => void
}

export function TabNavigation({ activeTab, onTabChange }: TabNavigationProps) {
  return (
    <nav
      className="fixed bottom-0 left-0 right-0 z-50 border-t border-border/40 bg-background/80 backdrop-blur-xl"
      role="tablist"
      aria-label="Main navigation"
    >
      <div className="mx-auto flex max-w-lg items-center justify-around px-2 py-1">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id
          const Icon = tab.icon
          return (
            <button
              key={tab.id}
              role="tab"
              aria-selected={isActive}
              aria-controls={`tabpanel-${tab.id}`}
              onClick={() => onTabChange(tab.id)}
              className={cn(
                "flex flex-1 flex-col items-center gap-0.5 rounded-xl px-2 py-2 transition-all duration-200",
                isActive
                  ? "text-primary"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              <div
                className={cn(
                  "flex items-center justify-center rounded-full p-1.5 transition-all duration-200",
                  isActive && "bg-primary/15"
                )}
              >
                <Icon
                  className={cn(
                    "h-5 w-5 transition-all duration-200",
                    isActive && "scale-110"
                  )}
                  strokeWidth={isActive ? 2.5 : 2}
                />
              </div>
              <span
                className={cn(
                  "text-[10px] font-medium transition-all duration-200",
                  isActive && "font-semibold"
                )}
              >
                {tab.label}
              </span>
            </button>
          )
        })}
      </div>
      {/* Safe area for devices with home indicator */}
      <div className="h-[env(safe-area-inset-bottom)]" />
    </nav>
  )
}
