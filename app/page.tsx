"use client"

import { useState } from "react"
import { TabNavigation, type TabId } from "@/components/tab-navigation"
import { HomeTab } from "@/components/tabs/home-tab"
import { RadioTab } from "@/components/tabs/radio-tab"
import { VideoTab } from "@/components/tabs/video-tab"
import { SocialTab } from "@/components/tabs/social-tab"
import { GamesTab } from "@/components/tabs/games-tab"

export default function Page() {
  const [activeTab, setActiveTab] = useState<TabId>("home")


  return (
    <div className="flex min-h-dvh flex-col bg-background">
      {/* Tab content area - scrollable, above the tab bar */}
      <main className="flex-1 overflow-y-auto pb-20">
        <div
          role="tabpanel"
          id="tabpanel-home"
          className={activeTab === "home" ? "block" : "hidden"}
          aria-hidden={activeTab !== "home"}
        >
          <HomeTab onNavigate={setActiveTab} />
        </div>
        <div
          role="tabpanel"
          id="tabpanel-radio"
          className={activeTab === "radio" ? "block" : "hidden"}
          aria-hidden={activeTab !== "radio"}
        >
          <RadioTab />
        </div>
        <div
          role="tabpanel"
          id="tabpanel-video"
          className={activeTab === "video" ? "block" : "hidden"}
          aria-hidden={activeTab !== "video"}
        >
          <VideoTab />
        </div>
        <div
          role="tabpanel"
          id="tabpanel-social"
          className={activeTab === "social" ? "block" : "hidden"}
          aria-hidden={activeTab !== "social"}
        >
          <SocialTab />
        </div>
        <div
          role="tabpanel"
          id="tabpanel-games"
          className={activeTab === "games" ? "block" : "hidden"}
          aria-hidden={activeTab !== "games"}
        >
          <GamesTab />
        </div>
      </main>

      {/* Bottom tab navigation */}
      <TabNavigation activeTab={activeTab} onTabChange={setActiveTab} />
    </div>
  )
}
