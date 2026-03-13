"use client"
import { motion } from "framer-motion"
import { SectionLabel } from "@/components/ui/SectionLabel"
import { hexGrid } from "@/lib/tools"
import { staggerContainer, scaleIn } from "@/lib/motion"

const COLS = 7

export function Tools() {
  return (
    <section
      id="tools"
      className="w-full bg-bg py-32 px-6 border-t border-border my-14"
    >
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <SectionLabel>TOOLS & TECH</SectionLabel>
          <h2
            className="font-display text-white"
            style={{ fontSize: "clamp(40px, 8vw, 96px)" }}
          >
            WHAT I BUILD WITH
          </h2>
        </div>

        {/* Hex Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="flex flex-wrap justify-center"
          style={{ gap: "4px", maxWidth: "760px", margin: "0 auto" }}
        >
          {hexGrid.map((cell, i) => {
            const col = i % COLS
            const isOffsetRow = Math.floor(i / COLS) % 2 === 1
            const marginTop = isOffsetRow && col === 0 ? "57px" : "0px"

            return (
              <motion.div
                key={i}
                variants={cell.active ? scaleIn : undefined}
                className="relative flex-shrink-0"
                style={{ width: "100px", height: "115px", marginTop }}
              >
                <motion.div
                  className="w-full h-full flex flex-col items-center justify-center"
                  style={{
                    clipPath:
                      "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                    background: cell.active
                      ? "linear-gradient(135deg, #1a0800, #2d1200)"
                      : "#0d0d0d",
                    border: cell.active
                      ? "1px solid rgba(255,107,0,0.3)"
                      : "1px solid rgba(255,255,255,0.03)",
                    boxShadow: cell.active
                      ? "inset 0 0 20px rgba(255,107,0,0.15), 0 0 12px rgba(255,107,0,0.08)"
                      : "none",
                  }}
                  whileHover={
                    cell.active
                      ? {
                          scale: 1.09,
                          boxShadow:
                            "inset 0 0 32px rgba(255,107,0,0.35), 0 0 32px rgba(255,107,0,0.3)",
                        }
                      : {}
                  }
                  transition={{ duration: 0.2 }}
                >
                  {cell.active && (
                    <span className="font-mono text-[9px] text-accent text-center tracking-wider px-3 leading-tight">
                      {cell.name}
                    </span>
                  )}
                </motion.div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
