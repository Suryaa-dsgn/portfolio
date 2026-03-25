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

      // Promote each card to its own GPU compositing layer
      cards.forEach((card) => {
        card.style.willChange = "transform"
      })

      cards.forEach((card, i) => {
        const targetScale = 1 - (cards.length - i - 1) * 0.035

        // Single ScrollTrigger per card — pin + scale in one pass
        ScrollTrigger.create({
          trigger: card,
          start: "top top+=88px",
          endTrigger: sectionRef.current!,
          end: "bottom bottom",
          pin: true,
          pinSpacing: false,
          anticipatePin: 1,           // prevents the layout jump when pinning kicks in
          scrub: 1.5,                 // smooth lag (seconds) eliminates per-frame jank
          onUpdate: (self) => {
            // Scale the card smoothly as scroll progresses
            gsap.set(card, {
              scale: 1 - (1 - targetScale) * self.progress,
            })
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
      className="w-full bg-bg border-t border-border mt-16 md:mt-32"
    >
      {/* Section header */}
      <div className="px-6 pt-12 md:pt-24 pb-10 md:pb-20">
        {/* Chapter meta */}
        <div className="flex items-center justify-center gap-6 mb-12">
          <span className="font-mono text-xs text-text-muted tracking-[0.25em] uppercase">/ SELECTED WORK</span>
          <span className="font-mono text-xs text-text-muted">2023 – 2026</span>
        </div>

        {/* Editorial heading */}
        <h2
          className="font-display leading-none text-center"
          style={{ fontSize: "clamp(48px, 10vw, 160px)" }}
        >
          <span className="text-white">SELECTED </span>
          <span className="text-stroke-outline">
            WORK
          </span>
        </h2>
      </div>

      {/* Stacking cards */}
      <div className="flex flex-col gap-0 px-4">
        {projects.map((project, i) => (
          <ProjectCard key={project.id} {...project} screens={project.screens} href={project.href} index={i} />
        ))}
      </div>

      {/* Spacer so last card can unpin cleanly */}
      <div className="h-[30vh]" aria-hidden="true" />
    </section>
  )
}
