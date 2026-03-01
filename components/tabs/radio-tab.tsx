"use client"

import { useCallback, useState } from "react"
import { Radio, MapPin } from "lucide-react"
import { cn } from "@/lib/utils"
import { radioStations, type RadioStation } from "@/lib/radio-stations"
import { RadioPlayer } from "@/components/radio-player"

export function RadioTab() {
  const [currentStation, setCurrentStation] = useState<RadioStation | null>(
    null
  )
  const [isPlaying, setIsPlaying] = useState(false)
  const [isShuffled, setIsShuffled] = useState(true)

  const handleSelectStation = useCallback(
    (station: RadioStation) => {
      if (currentStation?.id === station.id) {
        setIsPlaying((prev) => !prev)
      } else {
        setCurrentStation(station)
        setIsPlaying(true)
      }
    },
    [currentStation?.id]
  )

  const handleNext = useCallback(() => {
    if (!currentStation) {
      setCurrentStation(radioStations[0])
      setIsPlaying(true)
      return
    }
    if (isShuffled) {
      const randomIndex = Math.floor(Math.random() * radioStations.length)
      setCurrentStation(radioStations[randomIndex])
    } else {
      const currentIndex = radioStations.findIndex(
        (s) => s.id === currentStation.id
      )
      const nextIndex = (currentIndex + 1) % radioStations.length
      setCurrentStation(radioStations[nextIndex])
    }
    setIsPlaying(true)
  }, [currentStation, isShuffled])

  const handlePrevious = useCallback(() => {
    if (!currentStation) {
      setCurrentStation(radioStations[radioStations.length - 1])
      setIsPlaying(true)
      return
    }
    if (isShuffled) {
      const randomIndex = Math.floor(Math.random() * radioStations.length)
      setCurrentStation(radioStations[randomIndex])
    } else {
      const currentIndex = radioStations.findIndex(
        (s) => s.id === currentStation.id
      )
      const prevIndex =
        (currentIndex - 1 + radioStations.length) % radioStations.length
      setCurrentStation(radioStations[prevIndex])
    }
    setIsPlaying(true)
  }, [currentStation, isShuffled])

  const countries = Array.from(
    new Set(radioStations.map((s) => s.author))
  ).sort()

  return (
    <div className="flex h-full flex-col">
      {/* Header */}
      <div className="px-4 pt-6 pb-3">
        <h2 className="text-2xl font-bold tracking-tight text-foreground">
          Radio
        </h2>
        <p className="mt-1 text-sm text-muted-foreground">
          Radio Bouquet - South African & Namibian Flavoured
        </p>
      </div>

      {/* Player */}
      <div className="px-4 pb-4">
        <RadioPlayer
          station={currentStation}
          isPlaying={isPlaying}
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
          onNext={handleNext}
          onPrevious={handlePrevious}
          onShuffle={() => setIsShuffled((prev) => !prev)}
          isShuffled={isShuffled}
        />
      </div>

      {/* Station list */}
      <div className="flex-1 overflow-y-auto px-4 pb-4">
        <div className="space-y-4">
          {countries.map((country) => {
            const countryStations = radioStations.filter(
              (s) => s.author === country
            )
            return (
              <div key={country}>
                <div className="mb-2 flex items-center gap-1.5">
                  <MapPin className="h-3 w-3 text-muted-foreground" />
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    {country} ({countryStations.length})
                  </h3>
                </div>
                <div className="grid gap-2">
                  {countryStations.map((station) => {
                    const isCurrent = currentStation?.id === station.id
                    const isActive = isCurrent && isPlaying
                    return (
                      <button
                        key={station.id}
                        onClick={() => handleSelectStation(station)}
                        className={cn(
                          "flex items-center gap-3 rounded-xl border p-3 text-left transition-all",
                          isCurrent
                            ? "border-primary/40 bg-primary/10"
                            : "border-border bg-card hover:border-primary/20 hover:bg-surface-hover"
                        )}
                      >
                        <div
                          className={cn(
                            "flex h-9 w-9 shrink-0 items-center justify-center rounded-lg",
                            isCurrent
                              ? "bg-primary text-primary-foreground"
                              : "bg-secondary text-muted-foreground"
                          )}
                        >
                          <Radio className="h-4 w-4" />
                        </div>
                        <div className="min-w-0 flex-1">
                          <span
                            className={cn(
                              "block truncate text-sm font-semibold",
                              isCurrent
                                ? "text-primary"
                                : "text-foreground"
                            )}
                          >
                            {station.title}
                          </span>
                        </div>
                        {isActive && (
                          <div className="flex items-center gap-0.5">
                            {[0, 1, 2].map((i) => (
                              <div
                                key={i}
                                className="w-0.5 rounded-full bg-primary"
                                style={{
                                  animation: `eq-bar 0.${6 + i * 2}s ease-in-out infinite`,
                                  animationDelay: `${i * 0.15}s`,
                                  height: "4px",
                                }}
                              />
                            ))}
                          </div>
                        )}
                        {station.live && !isActive && (
                          <span className="text-[10px] text-muted-foreground">
                            LIVE
                          </span>
                        )}
                      </button>
                    )
                  })}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
