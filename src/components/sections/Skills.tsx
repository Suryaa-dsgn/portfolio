"use client"
import { useRef } from "react"
import { SectionLabel } from "@/components/ui/SectionLabel"
import { useGSAP } from "@gsap/react"
import { gsap, ScrollTrigger } from "@/lib/gsap"

const skills = [
  "USER RESEARCH",
  "PRODUCT DESIGN",
  "PRODUCT STRATEGY",
  "INFORMATION ARCHITECTURE",
  "DESIGN SYSTEMS",
  "PROTOTYPING",
  "AI WORKFLOWS",
  "DESIGN ENGINEERING",
  "VIBE CODE",
  "STORYTELLING",
]

export function Skills() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      const lines = gsap.utils.toArray<HTMLElement>(".skill-line")
      const bars = gsap.utils.toArray<HTMLElement>(".skill-bar")

      lines.forEach((line, i) => {
        gsap.fromTo(
          line,
          { color: "rgba(255,255,255,0.12)" },
          {
            color: "rgba(255,255,255,1)",
            duration: 0.3,
            scrollTrigger: {
              trigger: line,
              start: "top 68%",
              end: "top 45%",
              toggleActions: "play none none reverse",
            },
          }
        )

        if (bars[i]) {
          gsap.fromTo(
            bars[i],
            { scaleY: 0, opacity: 0 },
            {
              scaleY: 1,
              opacity: 1,
              duration: 0.25,
              scrollTrigger: {
                trigger: line,
                start: "top 68%",
                end: "top 45%",
                toggleActions: "play none none reverse",
              },
            }
          )
        }
      })
    },
    { scope: sectionRef }
  )

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="w-full bg-bg pt-16 md:pt-32 pb-24 md:pb-48 px-6 border-t border-border mt-8"
    >
      <div className="w-full text-center mb-16">
        <SectionLabel>CAPABILITIES</SectionLabel>
        <p className="font-mono text-xs text-text-muted tracking-widest">
          / There&apos;s a lot I can do, here&apos;s a few
        </p>
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col gap-1">
          {skills.map((skill, i) => (
            <div
              key={skill}
              className="skill-line flex items-center gap-4 border-t border-border py-5 cursor-default group"
              style={{ color: "rgba(255,255,255,0.12)" }}
            >
              {/* Orange indicator bar */}
              <div
                className="skill-bar w-1 bg-accent rounded-full flex-shrink-0 origin-top"
                style={{
                  height: "clamp(32px, 4vw, 56px)",
                  transform: "scaleY(0)",
                  opacity: 0,
                }}
              />

              {/* Skill name */}
              <span
                className="font-display leading-none select-none flex-1"
                style={{ fontSize: "clamp(36px, 8vw, 96px)" }}
              >
                {skill}
              </span>

              {/* Index number — right side, desktop only */}
              <span className="font-mono text-xs text-text-muted opacity-0 group-hover:opacity-100 transition-opacity hidden md:block flex-shrink-0">
                0{i + 1}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
