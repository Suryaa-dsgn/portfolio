"use client"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"

interface ProjectCardProps {
  name: string
  category: string
  year: string
  tags: string[]
  description: string
  image?: string
  screens?: string[]
  href?: string
  index: number
}

function ImagePanel({
  screens,
  image,
  name,
}: {
  screens?: string[]
  image?: string
  name: string
}) {
  const imgs = screens && screens.length > 0 ? screens : image ? [image] : []
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    if (imgs.length <= 1) return
    const id = setInterval(() => {
      setCurrent((c) => (c + 1) % imgs.length)
    }, 5000)
    return () => clearInterval(id)
  }, [imgs.length])

  if (imgs.length === 0) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <span className="font-mono text-xs text-text-muted tracking-wider">
          {name} — mockup coming soon
        </span>
      </div>
    )
  }

  // Single image — ken-burns slow vertical pan
  if (imgs.length === 1) {
    return (
      <div
        className="relative w-full h-full rounded-xl overflow-hidden border border-white/[0.06]"
        style={{ boxShadow: "0 8px 40px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.04)" }}
      >
        <motion.div
          className="absolute inset-0 w-full"
          style={{ height: "130%" }}
          animate={{ y: ["0%", "-18%"] }}
          transition={{
            duration: 12,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        >
          <Image
            src={imgs[0]}
            alt={`${name} mockup`}
            fill
            className="object-cover object-top"
            sizes="(max-width: 768px) 100vw, 56vw"
            quality={90}
          />
        </motion.div>
      </div>
    )
  }

  // Multiple images — cross-fade carousel inside the frame
  return (
    <div
      className="relative w-full h-full rounded-xl overflow-hidden border border-white/[0.06]"
      style={{ boxShadow: "0 8px 40px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.04)" }}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <motion.div
            className="absolute inset-0 w-full"
            style={{ height: "130%" }}
            animate={{ y: ["0%", "-18%"] }}
            transition={{
              duration: 12,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          >
            <Image
              src={imgs[current]}
              alt={`${name} screen ${current + 1}`}
              fill
              className="object-cover object-top"
              sizes="(max-width: 768px) 100vw, 56vw"
              quality={90}
            />
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

export function ProjectCard({
  name,
  category,
  year,
  tags,
  description,
  image,
  screens,
  href,
  index,
}: ProjectCardProps) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="project-card w-full bg-surface rounded-2xl border border-border overflow-hidden flex flex-col md:flex-row min-h-[480px] cursor-pointer"
      style={{ zIndex: index + 1, transformOrigin: "top center", display: "flex" }}
      whileHover={{ borderColor: "rgba(255,107,0,0.4)" }}
      transition={{ duration: 0.2 }}
    >
      {/* ── LEFT: Info Panel ── */}
      <div className="flex flex-col justify-between md:w-[44%] flex-shrink-0 pl-12 pr-8 py-12 md:pl-14">
        {/* Top block */}
        <div>
          <div className="flex items-center gap-2 mb-5">
            <span className="font-mono text-[9px] text-accent tracking-widest uppercase">
              {category}
            </span>
            <span className="w-[3px] h-[3px] rounded-full bg-border/60 flex-shrink-0" />
            <span className="font-mono text-[9px] text-text-muted tracking-widest">
              {year}
            </span>
          </div>
          <h3
            className="font-display text-white leading-none"
            style={{ fontSize: "clamp(26px, 3.5vw, 52px)" }}
          >
            {name}
          </h3>
        </div>

        {/* Middle block */}
        <div className="my-8">
          <div className="border-t border-border/40 mb-8" />
          <p className="font-sans text-sm text-text-muted leading-relaxed max-w-sm">
            {description}
          </p>
        </div>

        {/* Bottom block */}
        <div className="flex flex-col gap-4">
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-1 font-mono text-[9px] tracking-wider border border-border rounded text-text-muted uppercase"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="flex items-center justify-between pt-2">
            <span className="font-mono text-[10px] text-text-muted tracking-widest">{year}</span>
            <motion.div
              className="w-9 h-9 border border-border rounded-full flex items-center justify-center cursor-pointer"
              whileHover={{ borderColor: "#FF6B00", rotate: 45 }}
              transition={{ duration: 0.2 }}
              aria-label={`View ${name} project`}
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden="true"
              >
                <path d="M7 17L17 7M7 7h10v10" />
              </svg>
            </motion.div>
          </div>
        </div>
      </div>

      {/* ── RIGHT: Image Panel ── */}
      {/* Darker bg + padding = image frame floats with breathing room, no gradient hacks */}
      <div
        className="flex-1 flex items-center border-t border-border/30 md:border-t-0 md:border-l md:border-border/30 p-6 md:p-8"
        style={{ backgroundColor: "#0A0A0A", minHeight: "240px" }}
      >
        <ImagePanel screens={screens} image={image} name={name} />
      </div>
    </motion.a>
  )
}
