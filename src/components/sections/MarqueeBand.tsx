"use client"
import { motion } from "framer-motion"
import { useState } from "react"

const marqueeItems = [
  "PRODUCT DESIGN",
  "UX RESEARCH",
  "DESIGN SYSTEMS",
  "AI WORKFLOWS",
  "INFORMATION ARCHITECTURE",
  "VIBE CODE",
  "PROTOTYPING",
  "PRODUCT STRATEGY",
  "FIGMA",
  "FRAMER",
  "DESIGN ENGINEERING",
  "STORYTELLING",
]

export function MarqueeBand() {
  const [paused, setPaused] = useState(false)

  return (
    <div className="w-full">
      {/* ── Info Row ── */}
      <div className="border-t border-b border-border">
        <div className="grid grid-cols-3 py-6 w-full items-center">
          {/* Location */}
          <div className="flex flex-col items-center justify-center gap-2">
            <svg
              width="16"
              height="16"
              fill="none"
              stroke="#FF6B00"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
              <circle cx="12" cy="9" r="2.5" />
            </svg>
            <div className="text-center">
              <p className="font-mono text-[10px] font-bold tracking-widest uppercase text-white">
                Based in Bhubaneswar,
              </p>
              <p className="font-mono text-[10px] text-text-muted tracking-widest uppercase">
                Odisha, India
              </p>
            </div>
          </div>

          {/* Availability */}
          <div className="flex flex-col items-center justify-center gap-2 border-l border-r border-border">
            <svg
              width="16"
              height="16"
              fill="none"
              stroke="#FF6B00"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M2 12h4M18 12h4M12 2v4M12 18v4" />
            </svg>
            <div className="text-center">
              <p className="font-mono text-[10px] font-bold tracking-widest uppercase text-white">
                Available All Around
              </p>
              <p className="font-mono text-[10px] text-text-muted tracking-widest uppercase">
                Worldwide
              </p>
            </div>
          </div>

          {/* Role */}
          <div className="flex flex-col items-center justify-center gap-2">
            <svg
              width="16"
              height="16"
              fill="none"
              stroke="#FF6B00"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z" />
            </svg>
            <div className="text-center">
              <p className="font-mono text-[10px] font-bold tracking-widest uppercase text-white">
                Product Designer
              </p>
              <p className="font-mono text-[10px] text-text-muted tracking-widest uppercase">
                3+ Yrs of Experience
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ── Orange Marquee Band ── */}
      <div
        className="bg-accent py-4 overflow-hidden cursor-default"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <motion.div
          className="flex whitespace-nowrap"
          animate={paused ? { x: 0 } : { x: ["0%", "-50%"] }}
          transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
        >
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span
              key={i}
              className="font-display text-black text-2xl tracking-widest uppercase px-8 flex-shrink-0"
            >
              {item}
              <span className="opacity-40 ml-8">///</span>
            </span>
          ))}
        </motion.div>
      </div>
    </div>
  )
}
