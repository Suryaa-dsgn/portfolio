"use client"
import { useRef } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { SectionLabel } from "@/components/ui/SectionLabel"
import { fadeUp, staggerContainer } from "@/lib/motion"
import { useGSAP } from "@gsap/react"
import { gsap, ScrollTrigger } from "@/lib/gsap"

const stats = [
  { value: "3+", label: "Years Experience" },
  { value: "10+", label: "Projects Shipped" },
  { value: "NIT", label: "Rourkela, B.Tech" },
]

export function About() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLDivElement>(null)
  const img1Ref = useRef<HTMLDivElement>(null)
  const img2Ref = useRef<HTMLDivElement>(null)
  const img3Ref = useRef<HTMLDivElement>(null)
  const img4Ref = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      if (!sectionRef.current || !textRef.current) return

      const mm = gsap.matchMedia()

      mm.add("(min-width: 768px)", () => {
        // Pin the bio text block while the full section scrolls
        ScrollTrigger.create({
          trigger: sectionRef.current,
          start: "top top",
          end: "+=380%",
          pin: textRef.current,
          pinSpacing: true,
        })

        // ── First pair ──

        // Image 1 — enters from left
        if (img1Ref.current) {
          gsap.fromTo(
            img1Ref.current,
            { x: "-130%", opacity: 0, rotation: -6 },
            {
              x: "-8%",
              opacity: 1,
              rotation: -3,
              scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 70%",
                end: "25% 50%",
                scrub: 1.5,
              },
            }
          )
          gsap.fromTo(
            img1Ref.current,
            { x: "-8%", opacity: 1 },
            {
              x: "-130%",
              opacity: 0,
              scrollTrigger: {
                trigger: sectionRef.current,
                start: "48% 50%",
                end: "62% 50%",
                scrub: 1.5,
              },
            }
          )
        }

        // Image 2 — enters from right
        if (img2Ref.current) {
          gsap.fromTo(
            img2Ref.current,
            { x: "130%", opacity: 0, rotation: 6 },
            {
              x: "8%",
              opacity: 1,
              rotation: 3,
              scrollTrigger: {
                trigger: sectionRef.current,
                start: "10% 70%",
                end: "35% 50%",
                scrub: 1.5,
              },
            }
          )
          gsap.fromTo(
            img2Ref.current,
            { x: "8%", opacity: 1 },
            {
              x: "130%",
              opacity: 0,
              scrollTrigger: {
                trigger: sectionRef.current,
                start: "52% 50%",
                end: "66% 50%",
                scrub: 1.5,
              },
            }
          )
        }

        // ── Second pair ──

        if (img3Ref.current) {
          gsap.fromTo(
            img3Ref.current,
            { x: "130%", opacity: 0, rotation: 6 },
            {
              x: "8%",
              opacity: 1,
              rotation: 3,
              scrollTrigger: {
                trigger: sectionRef.current,
                start: "60% 70%",
                end: "78% 50%",
                scrub: 1.5,
              },
            }
          )
        }

        if (img4Ref.current) {
          gsap.fromTo(
            img4Ref.current,
            { x: "-130%", opacity: 0, rotation: -6 },
            {
              x: "-8%",
              opacity: 1,
              rotation: -3,
              scrollTrigger: {
                trigger: sectionRef.current,
                start: "68% 70%",
                end: "86% 50%",
                scrub: 1.5,
              },
            }
          )
        }

        // Inner cleanup — runs when viewport drops below 768px
        return () => {
          ScrollTrigger.getAll().forEach(t => t.kill())
        }
      })

      // Outer cleanup — runs when component unmounts
      return () => mm.revert()
    },
    { scope: sectionRef }
  )

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative w-full bg-bg min-h-screen"
    >
      {/* desktop needs the full scroll height for GSAP pin */}
      <style>{`
        @media (min-width: 768px) {
          #about { min-height: 480vh; }
        }
      `}</style>

      {/* ── Sticky centered bio text ── */}
      <div
        ref={textRef}
        className="relative z-10 flex flex-col items-center justify-center py-20 md:py-0 md:min-h-screen text-center px-6"
      >
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="max-w-3xl flex flex-col gap-10 w-full"
        >
          <motion.div variants={fadeUp}>
            <SectionLabel>WHO I AM</SectionLabel>
          </motion.div>

          <motion.p
            variants={fadeUp}
            className="font-display leading-[1.05] text-white"
            style={{ fontSize: "clamp(36px, 7vw, 80px)" }}
          >
            Hi, I&apos;m Suryaa.
            <br />
            I design products
            <br />
            people actually
            <br />
            want to use.
          </motion.p>

          <motion.p
            variants={fadeUp}
            className="font-sans text-base text-text-muted max-w-lg mx-auto leading-relaxed"
          >
            From healthcare dashboards to AI workflow tools, I work across the
            full stack of design: research, systems, and code. Currently open
            to full-time product design roles.
          </motion.p>

          {/* Stat pills — wrap on mobile, single row on desktop */}
          <motion.div
            variants={staggerContainer}
            className="flex flex-wrap justify-center gap-3 px-4 md:px-0 md:gap-4"
          >
            {stats.map((stat) => (
              <motion.div
                key={stat.label}
                variants={fadeUp}
                className="flex items-center gap-2 md:gap-3"
                style={{
                  padding: "10px 20px",
                  borderRadius: "14px",
                  border: "1px solid rgba(255,107,0,0.4)",
                  flexShrink: 0,
                }}
              >
                <span className="font-display text-xl text-accent">{stat.value}</span>
                <span className="font-mono text-[10px] text-text-muted tracking-wider uppercase">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </motion.div>

          {/* ── Mobile-only infinite carousel ── */}
          <motion.div
            variants={fadeUp}
            className="md:hidden mt-2"
            style={{ overflow: "hidden", marginLeft: "-24px", marginRight: "-24px" }}
          >
            {/* keyframes scoped here */}
            <style>{`
              @keyframes about-marquee {
                0%   { transform: translateX(0); }
                100% { transform: translateX(-50%); }
              }
              .about-marquee-track {
                display: flex;
                width: max-content;
                animation: about-marquee 12s linear infinite;
              }
              .about-marquee-track:hover {
                animation-play-state: paused;
              }
            `}</style>

            <div className="about-marquee-track">
              {/* render the 4 images twice for a seamless infinite loop */}
              {[...Array(2)].flatMap((_, pass) =>
                [
                  { src: "/about-1.jpg", label: "Design Process" },
                  { src: "/about-2.jpg", label: "Workshop / Research" },
                  { src: "/about-3.jpg", label: "Creative Work" },
                  { src: "/about-4.jpg", label: "Collaboration" },
                ].map((img) => (
                  <div
                    key={`${pass}-${img.src}`}
                    className="relative flex-shrink-0 rounded-xl overflow-hidden border border-white/10 mx-2"
                    style={{ width: "72vw", aspectRatio: "16/10" }}
                  >
                    <Image
                      src={img.src}
                      alt={img.label}
                      fill
                      sizes="72vw"
                      className="object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/70 to-transparent">
                      <span className="font-mono text-[9px] text-white/80 tracking-widest uppercase">
                        {img.label}
                      </span>
                    </div>
                  </div>
                ))
              )}
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* ── Floating image 1 — left side (desktop only) ── */}
      <div
        ref={img1Ref}
        className="absolute top-[30%] left-0 w-[44vw] z-20 pointer-events-none hidden md:block"
        style={{ transform: "translateX(-130%)" }}
      >
        <div className="rounded-2xl overflow-hidden border border-white/10 shadow-lift relative bg-surface-2" style={{ aspectRatio: "1728/1117" }}>
          <Image src="/about-1.jpg" alt="Design Process" fill sizes="44vw" className="object-cover" />
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent">
            <span className="font-mono text-[10px] text-white/70 tracking-wider">Design Process</span>
          </div>
        </div>
      </div>

      {/* ── Floating image 2 — right side (desktop only) ── */}
      <div
        ref={img2Ref}
        className="absolute top-[42%] right-0 w-[40vw] z-20 pointer-events-none hidden md:block"
        style={{ transform: "translateX(130%)" }}
      >
        <div className="rounded-2xl overflow-hidden border border-white/10 shadow-lift relative bg-surface" style={{ aspectRatio: "1728/1117" }}>
          <Image src="/about-2.jpg" alt="Workshop / Research" fill sizes="40vw" className="object-cover" />
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent">
            <span className="font-mono text-[10px] text-white/70 tracking-wider">Workshop / Research</span>
          </div>
        </div>
      </div>

      {/* ── Floating image 3 — right side, second pass (desktop only) ── */}
      <div
        ref={img3Ref}
        className="absolute top-[68%] right-0 w-[44vw] z-20 pointer-events-none hidden md:block"
        style={{ transform: "translateX(130%)" }}
      >
        <div className="rounded-2xl overflow-hidden border border-white/10 shadow-lift relative bg-surface-2" style={{ aspectRatio: "1728/1117" }}>
          <Image src="/about-3.jpg" alt="Creative Work" fill sizes="35vw" className="object-cover" />
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent">
            <span className="font-mono text-[10px] text-white/70 tracking-wider">Creative Work</span>
          </div>
        </div>
      </div>

      {/* ── Floating image 4 — left side, second pass (desktop only) ── */}
      <div
        ref={img4Ref}
        className="absolute top-[76%] left-0 w-[40vw] z-20 pointer-events-none hidden md:block"
        style={{ transform: "translateX(-130%)" }}
      >
        <div className="rounded-2xl overflow-hidden border border-white/10 shadow-lift relative bg-surface" style={{ aspectRatio: "1728/1117" }}>
          <Image src="/about-4.jpg" alt="Collaboration" fill sizes="30vw" className="object-cover" />
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent">
            <span className="font-mono text-[10px] text-white/70 tracking-wider">Collaboration</span>
          </div>
        </div>
      </div>
    </section>
  )
}
