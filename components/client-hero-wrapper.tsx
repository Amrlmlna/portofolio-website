"use client"

import dynamic from "next/dynamic"
import { Suspense } from "react"

// Dynamically import the Hero component to avoid SSR issues with Spline
const Hero = dynamic(() => import("@/components/hero"), {
  ssr: false,
  loading: () => (
    <div className="h-screen bg-background flex items-center justify-center">
      <div className="animate-pulse text-primary text-xl">Loading 3D Experience...</div>
    </div>
  ),
})

export default function ClientHeroWrapper() {
  return (
    <Suspense fallback={<div className="h-screen bg-background"></div>}>
      <Hero />
    </Suspense>
  )
}
