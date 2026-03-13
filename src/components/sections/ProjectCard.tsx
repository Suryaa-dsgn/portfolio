"use client"
import { motion } from "framer-motion"

interface ProjectCardProps {
  name: string
  category: string
  year: string
  tags: string[]
  description: string
  index: number
}

export function ProjectCard({
  name,
  category,
  year,
  tags,
  description,
  index,
}: ProjectCardProps) {
  return (
    <motion.div
      className="project-card w-full bg-surface rounded-2xl border border-border overflow-hidden"
      style={{ zIndex: index + 1, transformOrigin: "top center" }}
      whileHover={{ borderColor: "rgba(255,107,0,0.6)" }}
      transition={{ duration: 0.2 }}
    >
      <div className="p-10 md:p-16 flex flex-col min-h-[80vh]">
        {/* Top row */}
        <div className="flex items-start justify-between mb-12">
          <div>
            <p className="font-mono text-[10px] text-accent tracking-widest uppercase mb-3 mx-2 mt-[10px]">
              {category}
            </p>
            <h3
              className="font-display text-white leading-none mx-2"
              style={{ fontSize: "clamp(32px, 7vw, 80px)" }}
            >
              {name}
            </h3>
          </div>
          <div className="flex flex-col items-end gap-3 flex-shrink-0">
            <span className="font-mono text-sm text-text-muted">{year}</span>
            <motion.div
              className="w-10 h-10 border border-border rounded-full flex items-center justify-center cursor-pointer"
              whileHover={{ borderColor: "#FF6B00", rotate: 45 }}
              transition={{ duration: 0.2 }}
              aria-label={`View ${name} project`}
            >
              <svg
                width="16"
                height="16"
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

        {/* Mockup image area */}
        <motion.div
          className="flex-1 rounded-xl overflow-hidden bg-surface-2 border border-border mb-12 relative min-h-[280px] flex items-center justify-center"
          whileHover={{ scale: 1.01 }}
          transition={{ duration: 0.3 }}
        >
          <span className="font-mono text-xs text-text-muted tracking-wider">
            {name} — mockup coming soon
          </span>
        </motion.div>

        {/* Bottom row */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <p className="font-sans text-sm text-text-muted max-w-lg leading-relaxed mx-4">
            {description}
          </p>
          <div className="flex flex-wrap gap-2 md:justify-end flex-shrink-0 md:max-w-[220px]">
            {tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-1 font-mono text-[9px] tracking-wider border border-border rounded text-text-muted uppercase"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  )
}
