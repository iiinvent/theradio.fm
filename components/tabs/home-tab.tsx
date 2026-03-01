"use client"

import Image from "next/image"
import Link from "next/link"
import { Radio, Shield } from "lucide-react"
import type { TabId } from "@/components/tab-navigation"

interface HomeTabProps {
  onNavigate: (tab: TabId) => void
}

export function HomeTab({ onNavigate }: HomeTabProps) {
  return (
    <div className="flex min-h-full flex-col items-center justify-center px-6 py-12">
      <div className="w-full max-w-md space-y-8 text-center">
        {/* Logo */}
        <div className="relative mx-auto h-40 w-40 overflow-hidden rounded-full border-2 border-primary/30 shadow-lg shadow-primary/10">
          <Image
            src="/images/logo.jpg"
            alt="Music Love logo"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Title */}
        <div className="space-y-3">
          <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground">
            Music Love
          </h1>
          <p className="font-mono text-sm font-light text-muted-foreground">
            theradio.fm
          </p>
        </div>

        {/* Description */}
        <div className="space-y-4 font-mono text-sm leading-relaxed text-muted-foreground">
          <p className="italic">
            based on an old-fashioned lover&apos;s mixtape
          </p>
          <p>
            a tug of war between the actual radio playing on air and us
            <br />
            a battle of the bands
            <br />
            with twitter as the official record or log
          </p>
          <p>
            social media then acting as the final catalyst settling the score
            <br />
            come try our musiclove and see for yourself
          </p>
          <p>
            let us help you de-stress and
            <br />
            fall right back into love with
            <br />
            our music as the guiding soundtrack
          </p>
        </div>

        {/* Quick actions */}
        <div className="flex flex-col items-center gap-3 pt-4">
          <button
            onClick={() => onNavigate("radio")}
            className="flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/20"
          >
            <Radio className="h-4 w-4" />
            Start Listening
          </button>
          <Link
            href="/privacy"
            className="flex items-center gap-1.5 text-xs text-muted-foreground transition-colors hover:text-foreground"
          >
            <Shield className="h-3 w-3" />
            Privacy Policy
          </Link>
        </div>
      </div>
    </div>
  )
}
