"use client"

import { GlobeFlights } from "../../components/ui/component"

export default function GlobeFlightsDemo() {
  return (
    <div className="flex items-center justify-center w-full min-h-screen bg-white p-8 overflow-hidden">
      <div className="w-full max-w-lg">
        <GlobeFlights />
      </div>
    </div>
  )
}
