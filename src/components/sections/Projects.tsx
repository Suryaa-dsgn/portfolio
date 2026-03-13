"use client"
import { useRef } from "react"
import { useGSAP } from "@gsap/react"
import { gsap, ScrollTrigger } from "@/lib/gsap"
import { SectionLabel } from "@/components/ui/SectionLabel"
import { ProjectCard } from "@/components/sections/ProjectCard"
import { projects } from "@/lib/projects"

export function Projects() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      const cards = gsap.utils.toArray<HTMLElement>(".project-card")

      cards.forEach((card, i) => {
        // Pin each card to the top as it arrives
        ScrollTrigger.create({
          trigger: card,
          start: "top top+=88px",
          endTrigger: sectionRef.current!,
          end: "bottom bottom",
          pin: true,
          pinSpacing: false,
        })

        // Scale down card as subsequent cards stack on top
        gsap.to(card, {
          scale: 1 - (cards.length - i - 1) * 0.035,
          scrollTrigger: {
            trigger: card,
            start: "top top+=88px",
            endTrigger: sectionRef.current!,
            end: "bottom bottom",
            scrub: true,
          },
        })
      })

      // Recalculate all trigger positions against the actual rendered layout
      ScrollTrigger.refresh()
    },
    { scope: sectionRef }
  )

  return (
    <section
      ref={sectionRef}
      id="work"
      className="w-full bg-bg border-t border-border mt-32"
    >
      {/* Section header */}
      <div className="px-6 pt-24 pb-20">
        {/* Chapter meta */}
        <div className="flex items-center justify-center gap-6 mb-12">
          <SectionLabel>SELECTED WORK</SectionLabel>
          <span className="font-mono text-xs text-text-muted">2022 – 2025</span>
        </div>

        {/* Editorial heading */}
        <h2
          className="font-display leading-none text-center"
          style={{ fontSize: "clamp(48px, 10vw, 160px)" }}
        >
          <span className="text-white">SELECTED </span>
          <span
            style={{
              color: "transparent",
              WebkitTextStroke: "2px rgba(255,255,255,0.85)",
            }}
          >
            WORK
          </span>
        </h2>
      </div>

      {/* Stacking cards */}
      <div className="flex flex-col gap-0 px-4">
        {projects.map((project, i) => (
          <ProjectCard key={project.id} {...project} index={i} />
        ))}
      </div>

      {/* Spacer so last card can unpin cleanly */}
      <div className="h-screen" aria-hidden="true" />
    </section>
  )
}
