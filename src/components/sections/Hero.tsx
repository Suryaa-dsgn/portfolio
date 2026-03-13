"use client"
import { motion } from "framer-motion"
import { OrangeStar } from "@/components/ui/OrangeStar"
import { LiveClock } from "@/components/ui/LiveClock"
import { staggerContainer, wordReveal, fadeIn } from "@/lib/motion"
import { DottedSurface } from "@/components/ui/dotted-surface"

export function Hero() {
  return (
    <section
      id="hero"
      className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden bg-bg"
    >
      {/* ── Dotted Surface Background Animation ── */}
      <DottedSurface className="absolute inset-0 pointer-events-none z-0" />

      {/* ── Radial vignette over grid ── */}
      <div
        aria-hidden="true"
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 100%, transparent 0%, #0A0A0A 72%)",
        }}
      />

      {/* ── Top-left clock ── */}
      <div className="absolute top-6 left-6 z-10 pt-16">
        <LiveClock />
      </div>

      {/* ── Top-right availability ── */}
      <div className="absolute top-6 right-6 z-10 pt-16 flex items-center gap-2">
        <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
        <span className="font-mono text-[10px] text-text-muted tracking-widest uppercase">
          Available Worldwide
        </span>
      </div>

      {/* ── Center Content ── */}
      <motion.div
        className="relative z-10 flex flex-col items-center text-center px-4"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        {/* Monogram avatar */}
        <motion.div variants={fadeIn} className="mb-6">
          <div className="w-11 h-11 rounded-full border border-white/20 flex items-center justify-center bg-surface/50">
            <span className="font-display text-base text-accent leading-none">S</span>
          </div>
        </motion.div>

        {/* Massive hero name */}
        <div className="relative flex items-center">
          <motion.h1
            variants={wordReveal}
            className="font-display leading-none text-white select-none"
            style={{
              fontSize: "clamp(64px, 18vw, 260px)",
              letterSpacing: "-0.02em",
            }}
          >
            SURYAA
          </motion.h1>

          {/* Orange 4-point star — right of name on desktop */}
          <motion.div
            variants={fadeIn}
            className="absolute -right-14 top-4 hidden md:block"
          >
            <OrangeStar size={52} />
          </motion.div>
        </div>

        {/* Tagline */}
        <motion.p
          variants={fadeIn}
          className="font-mono text-[10px] text-text-muted tracking-[0.3em] uppercase mt-5"
        >
          Product Design · AI Systems · Design Engineering
        </motion.p>
      </motion.div>

      {/* ── Bottom-right forte label ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-10 right-6 z-10 text-right hidden md:block"
      >
        <p className="font-mono text-[9px] text-text-muted tracking-widest uppercase leading-relaxed">
          MY FORTE LIES IN PRODUCT DESIGN,
          <br />
          AI SYSTEMS, B2B SAAS
        </p>
      </motion.div>

      {/* ── Scroll indicator ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.6 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <span className="font-mono text-[9px] text-text-muted tracking-widest uppercase">
          SCROLL
        </span>
        <motion.div
          className="w-[1px] h-8 bg-accent origin-top"
          animate={{ scaleY: [0, 1, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </section>
  )
}
