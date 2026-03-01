"use client"

import { useCallback, useEffect, useRef, useState } from "react"
import Image from "next/image"
import {
  Play,
  Pause,
  SkipBack,
  SkipForward,
  Shuffle,
  Volume2,
  VolumeX,
  Radio,
} from "lucide-react"
import { cn } from "@/lib/utils"
import { radioStations, type RadioStation } from "@/lib/radio-stations"

interface RadioPlayerProps {
  station: RadioStation | null
  isPlaying: boolean
  onPlay: () => void
  onPause: () => void
  onNext: () => void
  onPrevious: () => void
  onShuffle: () => void
  isShuffled: boolean
}

export function RadioPlayer({
  station,
  isPlaying,
  onPlay,
  onPause,
  onNext,
  onPrevious,
  onShuffle,
  isShuffled,
}: RadioPlayerProps) {
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const [volume, setVolume] = useState(80)
  const [isMuted, setIsMuted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [hasError, setHasError] = useState(false)

  // Create/manage audio element
  useEffect(() => {
    if (!audioRef.current) {
      audioRef.current = new Audio()
      audioRef.current.preload = "none"
    }
    const audio = audioRef.current

    const handleCanPlay = () => setIsLoading(false)
    const handleWaiting = () => setIsLoading(true)
    const handleError = () => {
      setIsLoading(false)
      setHasError(true)
    }
    const handlePlaying = () => {
      setIsLoading(false)
      setHasError(false)
    }

    audio.addEventListener("canplay", handleCanPlay)
    audio.addEventListener("waiting", handleWaiting)
    audio.addEventListener("error", handleError)
    audio.addEventListener("playing", handlePlaying)

    return () => {
      audio.removeEventListener("canplay", handleCanPlay)
      audio.removeEventListener("waiting", handleWaiting)
      audio.removeEventListener("error", handleError)
      audio.removeEventListener("playing", handlePlaying)
    }
  }, [])

  // Handle station changes
  useEffect(() => {
    const audio = audioRef.current
    if (!audio || !station) return

    audio.src = station.media
    setHasError(false)
    if (isPlaying) {
      setIsLoading(true)
      audio.play().catch(() => setHasError(true))
    }
  }, [station?.id]) // eslint-disable-line react-hooks/exhaustive-deps

  // Handle play/pause
  useEffect(() => {
    const audio = audioRef.current
    if (!audio || !station) return

    if (isPlaying) {
      setIsLoading(true)
      audio.play().catch(() => setHasError(true))
    } else {
      audio.pause()
      setIsLoading(false)
    }
  }, [isPlaying]) // eslint-disable-line react-hooks/exhaustive-deps

  // Handle volume
  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return
    audio.volume = isMuted ? 0 : volume / 100
  }, [volume, isMuted])

  const handleVolumeChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const newVolume = parseInt(e.target.value)
      setVolume(newVolume)
      setIsMuted(newVolume === 0)
    },
    []
  )

  const toggleMute = useCallback(() => {
    setIsMuted((prev) => !prev)
  }, [])

  if (!station) {
    return (
      <div className="flex items-center justify-center rounded-2xl border border-border bg-player-bg p-6">
        <div className="flex flex-col items-center gap-2 text-muted-foreground">
          <Radio className="h-8 w-8" />
          <p className="text-sm">Select a station to start listening</p>
        </div>
      </div>
    )
  }

  return (
    <div className={cn("rounded-2xl border border-border bg-player-bg p-4", isPlaying && "station-playing")}>
      <div className="flex items-center gap-4">
        {/* Album art / Logo */}
        <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-xl border border-border">
          <Image
            src="/images/radio-logo.png"
            alt={station.title}
            fill
            className="object-cover"
          />
          {isPlaying && !hasError && (
            <div className="absolute inset-0 flex items-end justify-center gap-0.5 bg-background/40 pb-1.5">
              {[0, 1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="w-1 rounded-full bg-primary"
                  style={{
                    animation: `eq-bar 0.${6 + i * 2}s ease-in-out infinite`,
                    animationDelay: `${i * 0.1}s`,
                    height: "4px",
                  }}
                />
              ))}
            </div>
          )}
        </div>

        {/* Station info */}
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-2">
            <h3 className="truncate text-sm font-bold text-foreground">
              {station.title}
            </h3>
            {station.live && (
              <span className="flex shrink-0 items-center gap-1 rounded-full bg-primary/15 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-primary">
                <span className="live-dot h-1.5 w-1.5 rounded-full bg-primary" />
                Live
              </span>
            )}
          </div>
          <p className="mt-0.5 truncate text-xs text-muted-foreground">
            {station.author}
          </p>
          {isLoading && (
            <p className="mt-0.5 text-[10px] text-muted-foreground">
              Connecting...
            </p>
          )}
          {hasError && (
            <p className="mt-0.5 text-[10px] text-red-400">
              Stream unavailable
            </p>
          )}
        </div>
      </div>

      {/* Controls */}
      <div className="mt-4 flex items-center justify-center gap-3">
        <button
          onClick={onShuffle}
          className={cn(
            "rounded-full p-2 transition-all",
            isShuffled
              ? "text-primary"
              : "text-muted-foreground hover:text-foreground"
          )}
          aria-label="Shuffle"
        >
          <Shuffle className="h-4 w-4" />
        </button>
        <button
          onClick={onPrevious}
          className="rounded-full p-2 text-foreground transition-all hover:bg-secondary"
          aria-label="Previous station"
        >
          <SkipBack className="h-5 w-5" fill="currentColor" />
        </button>
        <button
          onClick={isPlaying ? onPause : onPlay}
          className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/20"
          aria-label={isPlaying ? "Pause" : "Play"}
        >
          {isPlaying ? (
            <Pause className="h-5 w-5" fill="currentColor" />
          ) : (
            <Play className="h-5 w-5 translate-x-0.5" fill="currentColor" />
          )}
        </button>
        <button
          onClick={onNext}
          className="rounded-full p-2 text-foreground transition-all hover:bg-secondary"
          aria-label="Next station"
        >
          <SkipForward className="h-5 w-5" fill="currentColor" />
        </button>
        <button
          onClick={toggleMute}
          className="rounded-full p-2 text-muted-foreground transition-all hover:text-foreground"
          aria-label={isMuted ? "Unmute" : "Mute"}
        >
          {isMuted || volume === 0 ? (
            <VolumeX className="h-4 w-4" />
          ) : (
            <Volume2 className="h-4 w-4" />
          )}
        </button>
      </div>

      {/* Volume slider */}
      <div className="mt-3 flex items-center gap-3 px-2">
        <VolumeX className="h-3 w-3 shrink-0 text-muted-foreground" />
        <input
          type="range"
          min="0"
          max="100"
          value={isMuted ? 0 : volume}
          onChange={handleVolumeChange}
          className="h-1 w-full cursor-pointer appearance-none rounded-full bg-secondary accent-primary [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-primary"
          aria-label="Volume"
        />
        <Volume2 className="h-3 w-3 shrink-0 text-muted-foreground" />
      </div>
    </div>
  )
}
