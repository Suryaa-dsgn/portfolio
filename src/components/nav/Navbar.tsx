"use client"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { LiveClock } from "@/components/ui/LiveClock"

const navLinks = [
  { label: "WORK", href: "#work" },
  { label: "ABOUT", href: "#about" },
  { label: "EXPERIENCE", href: "#experience" },
  { label: "CONTACT", href: "#contact" },
]

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-5">
        {/* Logo / Monogram — click to scroll back to top */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="font-display text-2xl text-white tracking-widest hover:text-accent transition-colors duration-200 cursor-pointer"
          aria-label="Scroll to top"
        >
          SK
        </button>

        {/* Nav Links — desktop */}
        <ul className="hidden md:flex items-center gap-8" role="list">
          {navLinks.map((link) => (
            <li key={link.label}>
              <NavLink href={link.href}>{link.label}</NavLink>
            </li>
          ))}
        </ul>

        {/* Right side */}
        <div className="flex items-center gap-3">
          <LiveClock />
          <div
            className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse"
            aria-label="Available for work"
          />
          {/* Hamburger — mobile only */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-1 ml-2"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            <span
              className={`block w-5 h-[1.5px] bg-white transition-transform duration-200 origin-center ${mobileOpen ? "rotate-45 translate-y-[5px]" : ""}`}
            />
            <span
              className={`block w-5 h-[1.5px] bg-white transition-opacity duration-200 ${mobileOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`block w-5 h-[1.5px] bg-white transition-transform duration-200 origin-center ${mobileOpen ? "-rotate-45 -translate-y-[5px]" : ""}`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-bg/95 backdrop-blur-sm flex flex-col items-center justify-center gap-8 md:hidden"
          >
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="font-display text-5xl text-white hover:text-accent transition-colors duration-200 tracking-widest"
              >
                {link.label}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="relative font-mono text-[11px] tracking-widest text-white/70 hover:text-white transition-colors duration-200 group"
    >
      {children}
      <motion.span
        className="absolute -bottom-0.5 left-0 h-[1px] w-full bg-accent origin-left"
        initial={{ scaleX: 0 }}
        whileHover={{ scaleX: 1 }}
        transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
      />
    </Link>
  )
}
