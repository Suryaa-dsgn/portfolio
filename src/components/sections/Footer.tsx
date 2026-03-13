"use client"
import { motion } from "framer-motion"
import { OrangeStar } from "@/components/ui/OrangeStar"
import { staggerContainer, scaleIn, fadeUp } from "@/lib/motion"

export function Footer() {
  return (
    <footer
      id="contact"
      className="w-full bg-bg border-t border-border py-32 px-6"
    >
      {/* ── CTA Block ── */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="flex flex-col items-center text-center max-w-4xl mx-auto mb-32"
      >
        {/* Star */}
        <motion.div variants={scaleIn} className="mb-8">
          <OrangeStar size={44} />
        </motion.div>

        {/* Headline */}
        <motion.h2
          variants={fadeUp}
          className="font-display text-white leading-[0.9] mb-12"
          style={{ fontSize: "clamp(48px, 10vw, 120px)" }}
        >
          LOOKING FOR A
          <br />
          PRODUCT DESIGNER?
        </motion.h2>

        {/* CTA Button */}
        <motion.a
          variants={fadeUp}
          href="mailto:suryakantadesign@gmail.com"
          className="inline-block"
          aria-label="Send email to Suryaa"
        >
          <motion.div
            className="bg-accent text-black font-display tracking-widest uppercase cursor-pointer px-12 py-5"
            style={{ fontSize: "clamp(18px, 2vw, 26px)" }}
            whileHover={{
              scale: 1.03,
              boxShadow: "0 0 50px rgba(255,107,0,0.55)",
            }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.2 }}
          >
            GET IN TOUCH →
          </motion.div>
        </motion.a>
      </motion.div>

      {/* ── Bottom row ── */}
      <div className="flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto border-t border-border pt-8 gap-4">
        <p className="font-mono text-[10px] text-text-muted tracking-wider uppercase">
          © 2025 Suryakanta Jena. Built with Next.js
        </p>

        <div className="flex items-center gap-6">
          <a
            href="https://linkedin.com/in/suryakantajena"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn profile"
            className="font-mono text-[10px] text-text-muted tracking-widest uppercase hover:text-accent transition-colors duration-200"
          >
            LinkedIn ↗
          </a>
          <a
            href="https://github.com/suryakantajena"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub profile"
            className="font-mono text-[10px] text-text-muted tracking-widest uppercase hover:text-accent transition-colors duration-200"
          >
            GitHub ↗
          </a>
        </div>

        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="font-mono text-[10px] text-text-muted tracking-widest uppercase hover:text-accent transition-colors duration-200 cursor-pointer"
          aria-label="Back to top"
        >
          ↑ BACK TO TOP
        </button>
      </div>
    </footer>
  )
}
