"use client"
import { useRef } from "react"
import { motion } from "framer-motion"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "@/lib/gsap"
import { fadeUp, staggerContainer } from "@/lib/motion"

const experiences = [
  {
    company: "DxDgtl",
    companyFull: "DxDgtl",
    role: "Design Engineering Consultant – Intern",
    period: "Aug 2025 – Present",
    description:
      "Led end-to-end UX optimization for multi-stakeholder healthcare workflows across web and mobile, improving operational efficiency by 30%. Drove cross-functional alignment between product, engineering, and AI teams to ship scalable design systems, accelerating feature delivery by 40%.",
    tags: ["Healthcare", "Design Systems", "AI", "Figma"],
    current: true,
  },
  {
    company: "LesGo",
    companyFull: "LesGo",
    role: "Product Design Intern",
    period: "Sep 2024 – Nov 2024",
    description:
      "Designed and refined onboarding flows for 50+ restaurant partners and 1,000+ customers, improving partner activation by 25% and boosting customer sign-ups by 20%. Created responsive multi-role interfaces in Figma and developed a scalable design system.",
    tags: ["SaaS", "Onboarding", "Figma", "Design Systems"],
    current: false,
  },
]

export function Experience() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const labelRef = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      ScrollTrigger.create({
        trigger: sectionRef.current!,
        start: "top top+=88px",
        end: "bottom bottom",
        pin: labelRef.current!,
        pinSpacing: false,
      })
    },
    { scope: sectionRef }
  )

  return (
    <section
      ref={sectionRef}
      id="experience"
      className="w-full bg-bg border-t border-border"
    >
      <div className="max-w-7xl mx-auto px-6 flex gap-16 py-16 md:py-32">

        {/* ── LEFT — Sticky vertical label ── */}
        <div
          ref={labelRef}
          className="hidden md:flex flex-shrink-0 w-20 items-start pt-2"
        >
          <h2
            className="font-display text-7xl text-white leading-none"
            style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
          >
            EXPERIENCE
          </h2>
        </div>

        {/* ── RIGHT — Scrolling job list ── */}
        <div className="flex-1 flex flex-col">
          {/* Mobile heading */}
          <h2 className="font-display text-5xl text-white mt-3 mb-16 md:hidden">
            EXPERIENCE
          </h2>

          {experiences.map((exp) => (
            <motion.div
              key={exp.company}
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="pb-12 mb-12 md:pb-24 md:mb-24 border-b border-border last:border-0 last:mb-0 last:pb-0"
            >
              {/* Company header */}
              <motion.div
                variants={fadeUp}
                className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-8"
              >
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 rounded-lg bg-surface-2 border border-border flex items-center justify-center flex-shrink-0">
                      <span className="font-display text-xs text-accent leading-none">
                        {exp.company[0]}
                      </span>
                    </div>
                    <span className="font-sans text-lg font-semibold text-white">
                      {exp.companyFull}
                    </span>
                    {exp.current && (
                      <span className="px-2 py-0.5 bg-accent/10 border border-accent/30 rounded font-mono text-[9px] text-accent tracking-widest uppercase">
                        Current
                      </span>
                    )}
                  </div>
                  <p className="font-mono text-xs text-text-muted tracking-wider ml-11">
                    {exp.role}
                  </p>
                </div>
                <span className="font-mono text-xs text-text-muted flex-shrink-0 ml-11 sm:ml-0">
                  {exp.period}
                </span>
              </motion.div>

              {/* Description */}
              <motion.p
                variants={fadeUp}
                className="font-sans text-sm text-text-muted leading-relaxed mb-8"
              >
                {exp.description}
              </motion.p>

              {/* Tags */}
              <motion.div variants={fadeUp} className="flex flex-wrap gap-2">
                {exp.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 font-mono text-[9px] border border-border rounded text-text-muted uppercase tracking-wider"
                  >
                    {tag}
                  </span>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
