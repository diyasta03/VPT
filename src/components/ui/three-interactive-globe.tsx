"use client"

import React, { useEffect, useRef, useCallback, useState } from "react"
import createGlobe from "cobe"
import { Play, Pause, RotateCcw } from "lucide-react"

export interface FlightArc {
  id: string
  from: [number, number]
  to: [number, number]
  label?: string
}

export interface CatalogMarker {
  id: string
  location: [number, number]
  title: string
  subtitle: string
  iconType: "hq" | "card" | "license" | "dot"
  categoryId: 
    | "expatriate-services" 
    | "indonesia-visas" 
    | "overseas-visa-passport" 
    | "corporate-legalities" 
    | "civil-stay-services" 
    | "executive-priority-services" 
    | "additional-services"
}

export interface GlobeFlightsProps {
  onSelectCategory?: (categoryId: string) => void
  className?: string
  speed?: number
  dark?: number
  baseColor?: [number, number, number]
  markerColor?: [number, number, number]
  glowColor?: [number, number, number]
  arcColor?: [number, number, number]
}

// Pusat Muara: Jakarta, Indonesia
const JAKARTA_COORD: [number, number] = [-6.2088, 106.8456]

// Sudut Kalibrasi Presisi: Indonesia tepat di depan layar
const INITIAL_PHI = 2.50
const INITIAL_THETA = 0.12

// 8 Koridor Global memusat ke Jakarta, Indonesia
export const defaultArcs: FlightArc[] = [
  { id: "flight-jfk-jkt", from: [40.64, -73.78], to: JAKARTA_COORD },
  { id: "flight-lhr-jkt", from: [51.47, -0.46], to: JAKARTA_COORD },
  { id: "flight-dxb-jkt", from: [25.25, 55.36], to: JAKARTA_COORD },
  { id: "flight-nrt-jkt", from: [35.55, 139.78], to: JAKARTA_COORD },
  { id: "flight-sfo-jkt", from: [37.62, -122.38], to: JAKARTA_COORD },
  { id: "flight-sin-jkt", from: [1.36, 103.99], to: JAKARTA_COORD },
  { id: "flight-syd-jkt", from: [-33.95, 151.18], to: JAKARTA_COORD },
  { id: "flight-cdg-jkt", from: [20.12, 2.35], to: JAKARTA_COORD },
]

// Data Marker Resmi Sinkron dengan ID ServiceCatalogModal
export const catalogMarkers: CatalogMarker[] = [
  
  {
    id: "cat-investor-kitas",
    location: [1.36, 103.99],
    title: "Investor ITAS",
    subtitle: "E28 / C313 Visa (1-2 Thn)",
    iconType: "card",
    categoryId: "expatriate-services",
  },
  {
    id: "cat-pt-pma",
    location: [35.55, 139.78],
    title: "Pendirian PT PMA",
    subtitle: "Foreign Direct Investment",
    iconType: "card",
    categoryId: "corporate-legalities",
  },
  {
    id: "cat-oss-rba",
    location: [-33.95, 151.18],
    title: "OSS-RBA License",
    subtitle: "NIB & Sertifikat Standar",
    iconType: "license",
    categoryId: "corporate-legalities",
  },
  {
    id: "cat-golden-visa",
    location: [25.25, 55.36],
    title: "Golden Visa Desk",
    subtitle: "Special Residency Permits",
    iconType: "license",
    categoryId: "indonesia-visas",
  },
  {
    id: "cat-working-itas",
    location: [51.47, -0.46],
    title: "Working Visa & ITAS",
    subtitle: "E23 Visa & RPTKA Kemenaker",
    iconType: "dot",
    categoryId: "expatriate-services",
  },
  {
    id: "cat-multiple-entry",
    location: [37.62, -122.38],
    title: "D-Series Multiple Entry",
    subtitle: "D2 Bisnis & D12 Pra-Investasi",
    iconType: "dot",
    categoryId: "indonesia-visas",
  },
  {
    id: "cat-overseas-visa",
    location: [20.12, 2.35],
    title: "Visa Luar Negeri & Paspor",
    subtitle: "Schengen, UK, US & Paspor WNI",
    iconType: "dot",
    categoryId: "overseas-visa-passport",
  },
  {
    id: "cat-single-entry",
    location: [40.64, -73.78],
    title: "C-Series Single Entry",
    subtitle: "C2 Bisnis & C12 Pra-Investasi",
    iconType: "dot",
    categoryId: "indonesia-visas",
  },
]

export function GlobeFlights({
  onSelectCategory,
  className = "",
  speed = 0.0018,
  dark = 0.04,
 baseColor = [0.96, 0.96, 0.99],
  markerColor = [0.06, 0.65, 0.92], // Cyan terang (#0EA5E9) - titik menyala jelas di kanvas
  glowColor = [0.93, 0.94, 0.97],
  arcColor = [0.12, 0.31, 0.47],
}: GlobeFlightsProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const pointerInteracting = useRef<{ x: number; y: number } | null>(null)
  const dragOffset = useRef({ phi: 0, theta: 0 })
  const phiOffsetRef = useRef(0)
  const thetaOffsetRef = useRef(0)
  const isPausedRef = useRef(false)

  const [isSpinning, setIsSpinning] = useState(true)

  // Pointer Down: Catat koordinat awal drag dan jeda auto-spin sementara
  const handlePointerDown = useCallback((e: React.PointerEvent) => {
    pointerInteracting.current = { x: e.clientX, y: e.clientY }
    if (canvasRef.current) canvasRef.current.style.cursor = "grabbing"
  }, [])

  // Pointer Up: Simpan offset dan kembalikan status kursor
  const handlePointerUp = useCallback(() => {
    if (pointerInteracting.current !== null) {
      phiOffsetRef.current += dragOffset.current.phi
      thetaOffsetRef.current += dragOffset.current.theta
      dragOffset.current = { phi: 0, theta: 0 }
    }
    pointerInteracting.current = null
    if (canvasRef.current) canvasRef.current.style.cursor = "grab"
  }, [])

  // Pointer Move: Pengaturan sensitivitas kecepatan drag tangan yang presisi & berbobot
  useEffect(() => {
    const handlePointerMove = (e: PointerEvent) => {
      if (pointerInteracting.current !== null) {
        const deltaX = e.clientX - pointerInteracting.current.x
        const deltaY = e.clientY - pointerInteracting.current.y

        // Sensitivitas drag: 500 horizontal, 1400 vertikal (mencegah globe berputar terlalu liar)
        dragOffset.current = {
          phi: deltaX / 500,
          theta: deltaY / 1400,
        }
      }
    }
    window.addEventListener("pointermove", handlePointerMove, { passive: true })
    window.addEventListener("pointerup", handlePointerUp, { passive: true })
    return () => {
      window.removeEventListener("pointermove", handlePointerMove)
      window.removeEventListener("pointerup", handlePointerUp)
    }
  }, [handlePointerUp])

  useEffect(() => {
    if (!canvasRef.current) return
    const canvas = canvasRef.current
    let globe: ReturnType<typeof createGlobe> | null = null
    let animationId: number
    let phi = INITIAL_PHI

    function init() {
      const width = canvas.offsetWidth
      if (width === 0) return

      if (globe) {
        globe.destroy()
        globe = null
      }

      globe = createGlobe(canvas, {
        devicePixelRatio: Math.min(window.devicePixelRatio || 1, 2),
        width: width * 2,
        height: width * 2,
        phi: INITIAL_PHI,
        theta: INITIAL_THETA,
        dark,
        diffuse: 1.45,
        mapSamples: 20000,
        mapBrightness: 9,
        baseColor,
        markerColor,
        glowColor,
        markerElevation: 0.025,
        markers: catalogMarkers.map((m) => ({
          location: m.location,
          size: m.id === "hub-jkt" ? 0.055 : 0.028,
          id: m.id,
        })),
        arcs: defaultArcs.map((a) => ({
          from: a.from,
          to: a.to,
          id: a.id,
        })),
        arcColor,
        arcWidth: 0.65,
        arcHeight: 0.16,
        opacity: 0.85,
      })

      function animate() {
        // Auto-spin hanya berjalan saat tidak di-pause dan user sedang tidak melakukan drag aktif
        if (!isPausedRef.current && pointerInteracting.current === null) {
          phi += speed
        }

        const currentPhi = phi + phiOffsetRef.current + dragOffset.current.phi
        // Batasi kemiringan theta (vertikal) antara -0.4 hingga 0.4 agar globe tidak terbalik
        const targetTheta = INITIAL_THETA + thetaOffsetRef.current + dragOffset.current.theta
        const clampedTheta = Math.max(-0.4, Math.min(0.4, targetTheta))

        globe!.update({
          phi: currentPhi,
          theta: clampedTheta,
        })
        animationId = requestAnimationFrame(animate)
      }

      animate()
      canvas.style.opacity = "1"
    }

    if (canvas.offsetWidth > 0) {
      init()
    } else {
      const ro = new ResizeObserver((entries) => {
        if (entries[0]?.contentRect.width > 0) {
          ro.disconnect()
          init()
        }
      })
      ro.observe(canvas)
    }

    return () => {
      if (animationId) cancelAnimationFrame(animationId)
      if (globe) globe.destroy()
    }
  }, [speed, dark, baseColor, markerColor, glowColor, arcColor])

  // Tombol kontrol putaran bumi
  const toggleSpin = () => {
    isPausedRef.current = !isPausedRef.current
    setIsSpinning(!isPausedRef.current)
  }

  // Tombol reset posisi bumi kembali langsung menghadap Indonesia
  const resetView = () => {
    phiOffsetRef.current = 0
    thetaOffsetRef.current = 0
    dragOffset.current = { phi: 0, theta: 0 }
  }

  return (
    <div className={`relative w-full aspect-square select-none ${className}`}>
      <canvas
        ref={canvasRef}
        onPointerDown={handlePointerDown}
        style={{
          width: "100%",
          height: "100%",
          cursor: "grab",
          opacity: 0,
          transition: "opacity 1s ease",
          borderRadius: "50%",
          touchAction: "none",
        }}
      />

      {/* Floating Control Buttons: Pause/Spin & Reset View */}
      <div className="absolute top-2 right-2 z-30 flex items-center gap-1.5 pointer-events-auto">
        <button
          type="button"
          onClick={toggleSpin}
          className="flex items-center gap-1 px-2.5 py-1 text-[11px] font-semibold rounded-lg bg-white/95 backdrop-blur-md border border-slate-200/80 text-slate-700 hover:bg-white hover:text-slate-900 shadow-xs transition-all cursor-pointer"
        >
          {isSpinning ? (
            <>
              <Pause className="w-3 h-3 text-amber-600" />
              <span>Pause</span>
            </>
          ) : (
            <>
              <Play className="w-3 h-3 text-emerald-600" />
              <span>Spin</span>
            </>
          )}
        </button>
        <button
          type="button"
          onClick={resetView}
          title="Reset Camera View to Indonesia"
          className="p-1.5 rounded-lg bg-white/95 backdrop-blur-md border border-slate-200/80 text-slate-700 hover:bg-white hover:text-slate-900 shadow-xs transition-all cursor-pointer"
        >
          <RotateCcw className="w-3 h-3" />
        </button>
      </div>

      {/* Kartu-kartu yang menempel dinamis dan BISA DIKLIK menuju ServiceCatalogModal */}
      {catalogMarkers.map((m) => {
        const isJakarta = m.id === "hub-jkt"

        return (
          <div
            key={m.id}
            onClick={(e) => {
              e.stopPropagation()
              onSelectCategory?.(m.categoryId)
            }}
            style={{
              position: "absolute",
              ["positionAnchor" as string]: `--cobe-${m.id}`,
              bottom: "anchor(top)",
              left: "anchor(center)",
              translate: isJakarta ? "-50% -14px" : "-50% -10px",
              pointerEvents: "auto",
              opacity: `var(--cobe-visible-${m.id}, 0)`,
              transition: "opacity 0.25s ease-out, transform 0.2s ease-out",
            }}
            className={`whitespace-nowrap cursor-pointer hover:scale-105 active:scale-95 ${
              isJakarta ? "z-30" : "z-20"
            }`}
          >
            {/* Tampilan Khusus Pusat Indonesia (HQ) */}
            {isJakarta ? (
              <div className="group flex items-center gap-2.5 px-3.5 py-2 bg-slate-900 text-white rounded-2xl border border-amber-400/90 shadow-[0_8px_25px_rgba(217,119,6,0.3)] ring-2 ring-amber-400/30 hover:border-amber-300 transition-all">
                <div className="flex items-center justify-center w-7 h-7 rounded-xl bg-amber-500/20 text-amber-300 border border-amber-400/40 shrink-0">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                    <path d="M3 21h18M4 18h16M6 18v-7M10 18v-7M14 18v-7M18 18v-7M12 3L2 9h20L12 3z" />
                  </svg>
                </div>
                <div className="flex flex-col text-left leading-tight">
                  <span className="text-[11.5px] font-bold tracking-tight text-white flex items-center gap-1.5">
                    {m.title}
                    <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                  </span>
                  <span className="text-[9.5px] font-medium text-amber-200/80 mt-0.5">{m.subtitle}</span>
                </div>
              </div>
            ) : m.iconType === "dot" ? (
              /* Kota pendukung (Format Pill Sederhana) */
              <div className="group flex items-center gap-2 px-3 py-1.5 bg-white/95 backdrop-blur-md rounded-xl border border-slate-200/80 shadow-[0_4px_16px_rgba(15,23,42,0.1)] hover:border-sky-400 transition-all">
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500 shrink-0 shadow-[0_0_8px_rgba(245,158,11,0.6)] group-hover:scale-125 transition-transform" />
                <div className="flex flex-col text-left leading-tight">
                  <span className="text-[11px] font-bold text-slate-800 leading-tight group-hover:text-sky-600 transition-colors">
                    {m.title}
                  </span>
                  <span className="text-[9px] text-slate-400 font-medium mt-0.5">{m.subtitle}</span>
                </div>
              </div>
            ) : (
              /* Kartu Layanan Putih Utama (Investor ITAS, PT PMA, OSS-RBA, Golden Visa) */
              <div className="group flex items-center gap-2.5 px-3.5 py-2 bg-white/95 backdrop-blur-md rounded-2xl border border-slate-200/80 shadow-[0_8px_24px_-4px_rgba(15,23,42,0.12)] hover:border-amber-400 hover:shadow-lg transition-all">
                {m.iconType === "card" && (
                  <div className="flex items-center justify-center w-7 h-7 rounded-xl bg-sky-50 text-sky-600 shrink-0 border border-sky-100/70 group-hover:bg-sky-100 transition-colors">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                      <rect x="2" y="5" width="20" height="14" rx="2" />
                      <line x1="2" y1="10" x2="22" y2="10" />
                    </svg>
                  </div>
                )}

                {m.iconType === "license" && (
                  <div className="flex items-center justify-center w-7 h-7 rounded-xl bg-cyan-50 text-cyan-600 shrink-0 border border-cyan-100/70 group-hover:bg-cyan-100 transition-colors">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                      <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
                      <polyline points="14 2 14 8 20 8" />
                      <path d="M9 15l2 2 4-4" />
                    </svg>
                  </div>
                )}

                <div className="flex flex-col text-left leading-tight">
                  <span className="text-[11.5px] font-bold text-slate-900 tracking-tight group-hover:text-amber-600 transition-colors">
                    {m.title}
                  </span>
                  <span className="text-[9.5px] font-medium text-slate-400 mt-0.5">{m.subtitle}</span>
                </div>
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}