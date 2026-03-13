"use client"
import { useState } from "react"
import { motion } from "framer-motion"
import { SectionLabel } from "@/components/ui/SectionLabel"
import { OrangeStar } from "@/components/ui/OrangeStar"

const testimonials = [
  {
    quote:
      "Suryaa redesigned our entire onboarding flow. Partner activation jumped 25% in two weeks. A rare combination of design craft and product thinking.",
    name: "— Team @ LesGo",
    role: "Product Team",
  },
  {
    quote:
      "What stands out is how Suryaa bridges design and engineering. He ships things that actually work, not just look great in Figma.",
    name: "— Engineering Lead",
    role: "DxDgtl",
  },
  {
    quote:
      "His work on AI workflow interfaces was genuinely novel. He was thinking about agent UX before it became an industry topic.",
    name: "— Collaborator",
    role: "Design Review",
  },
  {
    quote:
      "Built our design system from scratch while we were still figuring out the product. Benchmarks, components, documentation — all of it.",
    name: "— Product Founder",
    role: "Early-stage Startup",
  },
  {
    quote:
      "Suryaa brings research discipline to creative work. He doesn't just make things look good — he makes them make sense.",
    name: "— Design Peer",
    role: "NIT Rourkela",
  },
]

function TestimonialCard({
  quote,
  name,
  role,
}: (typeof testimonials)[0]) {
  return (
    <div className="flex-shrink-0 w-[400px] bg-surface border border-border rounded-2xl p-10">
      <div className="mb-8">
        <OrangeStar size={22} />
      </div>
      <p className="font-sans text-base text-text-muted italic leading-[1.8] mb-10">
        &ldquo;{quote}&rdquo;
      </p>
      <div className="pt-6 pb-2 border-t border-border">
        <p className="font-sans text-sm font-semibold text-white mb-1">{name}</p>
        <p className="font-mono text-[10px] text-text-muted tracking-wider uppercase">
          {role}
        </p>
      </div>
    </div>
  )
}

export function Testimonials() {
  const [paused, setPaused] = useState(false)

  return (
    <section
      id="testimonials"
      className="w-full bg-bg py-32 border-t border-border overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 mt-3 mb-12">
        <SectionLabel>KIND WORDS</SectionLabel>
        <h2
          className="font-display text-white"
          style={{ fontSize: "clamp(40px, 8vw, 96px)" }}
        >
          TESTIMONIALS
        </h2>
      </div>

      {/* Scrolling band */}
      <div
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        className="relative mt-3 mb-3"
      >
        <motion.div
          className="flex gap-8 w-max px-6"
          animate={paused ? {} : { x: ["0%", "-50%"] }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
        >
          {[...testimonials, ...testimonials].map((t, i) => (
            <TestimonialCard key={i} {...t} />
          ))}
        </motion.div>

        {/* Edge fade masks */}
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-bg to-transparent pointer-events-none z-10" />
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-bg to-transparent pointer-events-none z-10" />
      </div>
    </section>
  )
}
