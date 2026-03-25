"use client"
import { useRef, useState, useCallback, useEffect } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { OrangeStar } from "@/components/ui/OrangeStar"
import { staggerContainer, scaleIn, fadeUp } from "@/lib/motion"

/* ══════════════════════════════════════════════════════════
   CONTACT MODAL
══════════════════════════════════════════════════════════ */
type FormStatus = "idle" | "loading" | "success" | "error"

function ContactModal({ onClose }: { onClose: () => void }) {
  const [name, setName]       = useState("")
  const [email, setEmail]     = useState("")
  const [message, setMessage] = useState("")
  const [status, setStatus]   = useState<FormStatus>("idle")
  const [errorMsg, setErrorMsg] = useState("")
  const overlayRef            = useRef<HTMLDivElement>(null)
  const firstInputRef         = useRef<HTMLInputElement>(null)

  /* lock body scroll while open */
  useEffect(() => {
    document.body.style.overflow = "hidden"
    firstInputRef.current?.focus()
    return () => { document.body.style.overflow = "" }
  }, [])

  /* Escape key closes */
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") onClose() }
    window.addEventListener("keydown", handler)
    return () => window.removeEventListener("keydown", handler)
  }, [onClose])

  /* overlay background click closes */
  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === overlayRef.current) onClose()
  }

  /* form submission */
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("loading")
    setErrorMsg("")

    try {
      const res = await fetch("https://formspree.io/f/xnjoaeww", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ name, email, message }),
      })

      if (res.ok) {
        setStatus("success")
      } else {
        const data = await res.json().catch(() => ({}))
        setErrorMsg(
          (data?.errors?.[0]?.message as string) ||
          "Something went wrong. Please try again."
        )
        setStatus("error")
      }
    } catch {
      setErrorMsg("Network error — please check your connection.")
      setStatus("error")
    }
  }

  const isLoading = status === "loading"

  return (
    /* ── overlay ── */
    <motion.div
      ref={overlayRef}
      key="modal-overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.28 }}
      onClick={handleOverlayClick}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 1000,
        background: "rgba(0,0,0,0.82)",
        backdropFilter: "blur(6px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "24px",
      }}
    >
      {/* ── panel ── */}
      <motion.div
        key="modal-panel"
        initial={{ opacity: 0, y: 48, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 32, scale: 0.97 }}
        transition={{ duration: 0.38, ease: [0.16, 1, 0.3, 1] }}
        role="dialog"
        aria-modal="true"
        aria-label="Contact form"
        style={{
          position: "relative",
          background: "#111111",
          border: "1px solid #222222",
          width: "100%",
          maxWidth: 580,
          padding: "clamp(32px, 5vw, 56px)",
          boxShadow: "0 32px 80px rgba(0,0,0,0.7), 0 0 0 1px rgba(255,107,0,0.08)",
        }}
      >
        {/* ── close ── */}
        <button
          onClick={onClose}
          aria-label="Close contact form"
          style={{
            position: "absolute",
            top: 20,
            right: 20,
            background: "transparent",
            border: "1px solid #333",
            color: "#888",
            width: 36,
            height: 36,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            fontSize: 18,
            lineHeight: 1,
            transition: "color 0.2s, border-color 0.2s",
          }}
          onMouseEnter={e => {
            ;(e.currentTarget as HTMLButtonElement).style.color = "#FF6B00"
            ;(e.currentTarget as HTMLButtonElement).style.borderColor = "#FF6B00"
          }}
          onMouseLeave={e => {
            ;(e.currentTarget as HTMLButtonElement).style.color = "#888"
            ;(e.currentTarget as HTMLButtonElement).style.borderColor = "#333"
          }}
        >
          ✕
        </button>

        {/* ── success state ── */}
        {status === "success" ? (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            style={{ textAlign: "center", padding: "32px 0" }}
          >
            <div style={{ fontSize: 48, marginBottom: 16 }}>✦</div>
            <h2
              style={{
                fontFamily: "var(--font-bebas), sans-serif",
                fontSize: "clamp(36px, 6vw, 56px)",
                color: "#FFFFFF",
                letterSpacing: "0.04em",
                marginBottom: 16,
                lineHeight: 1,
              }}
            >
              MESSAGE SENT!
            </h2>
            <p
              style={{
                fontFamily: "var(--font-inter), sans-serif",
                color: "#888",
                fontSize: 14,
                lineHeight: 1.6,
              }}
            >
              Thanks for reaching out, {name.split(" ")[0] || "friend"}.
              <br />I'll get back to you as soon as possible.
            </p>
            <button
              onClick={onClose}
              style={{
                marginTop: 32,
                background: "#FF6B00",
                color: "#000",
                border: "none",
                padding: "12px 36px",
                fontFamily: "var(--font-bebas), sans-serif",
                fontSize: 16,
                letterSpacing: "0.14em",
                cursor: "pointer",
                transition: "opacity 0.2s",
              }}
              onMouseEnter={e => ((e.currentTarget as HTMLButtonElement).style.opacity = "0.85")}
              onMouseLeave={e => ((e.currentTarget as HTMLButtonElement).style.opacity = "1")}
            >
              CLOSE
            </button>
          </motion.div>
        ) : (
          /* ── form ── */
          <form onSubmit={handleSubmit} noValidate>
            {/* heading */}
            <div style={{ marginBottom: 36 }}>
              <p
                style={{
                  fontFamily: "var(--font-geist-mono), monospace",
                  fontSize: 10,
                  letterSpacing: "0.2em",
                  color: "#FF6B00",
                  textTransform: "uppercase",
                  marginBottom: 10,
                }}
              >
                · Get In Touch ·
              </p>
              <h2
                style={{
                  fontFamily: "var(--font-bebas), sans-serif",
                  fontSize: "clamp(36px, 6vw, 52px)",
                  color: "#FFFFFF",
                  letterSpacing: "0.04em",
                  lineHeight: 1,
                }}
              >
                LET'S WORK
                <br />
                <span style={{ color: "#FF6B00" }}>TOGETHER</span>
              </h2>
            </div>

            {/* fields */}
            <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              {/* Name */}
              <label style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                <span
                  style={{
                    fontFamily: "var(--font-geist-mono), monospace",
                    fontSize: 10,
                    letterSpacing: "0.18em",
                    color: "#888",
                    textTransform: "uppercase",
                  }}
                >
                  Name *
                </span>
                <input
                  ref={firstInputRef}
                  type="text"
                  required
                  value={name}
                  onChange={e => setName(e.target.value)}
                  placeholder="Your name"
                  disabled={isLoading}
                  style={inputStyle}
                  onFocus={e => ((e.currentTarget as HTMLInputElement).style.borderColor = "#FF6B00")}
                  onBlur={e => ((e.currentTarget as HTMLInputElement).style.borderColor = "#2a2a2a")}
                />
              </label>

              {/* Email */}
              <label style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                <span
                  style={{
                    fontFamily: "var(--font-geist-mono), monospace",
                    fontSize: 10,
                    letterSpacing: "0.18em",
                    color: "#888",
                    textTransform: "uppercase",
                  }}
                >
                  Email *
                </span>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  disabled={isLoading}
                  style={inputStyle}
                  onFocus={e => ((e.currentTarget as HTMLInputElement).style.borderColor = "#FF6B00")}
                  onBlur={e => ((e.currentTarget as HTMLInputElement).style.borderColor = "#2a2a2a")}
                />
              </label>

              {/* Message */}
              <label style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                <span
                  style={{
                    fontFamily: "var(--font-geist-mono), monospace",
                    fontSize: 10,
                    letterSpacing: "0.18em",
                    color: "#888",
                    textTransform: "uppercase",
                  }}
                >
                  Message *
                </span>
                <textarea
                  required
                  value={message}
                  onChange={e => setMessage(e.target.value)}
                  placeholder="Tell me about your project…"
                  rows={5}
                  disabled={isLoading}
                  style={{ ...inputStyle, resize: "vertical", minHeight: 120 }}
                  onFocus={e => ((e.currentTarget as HTMLTextAreaElement).style.borderColor = "#FF6B00")}
                  onBlur={e => ((e.currentTarget as HTMLTextAreaElement).style.borderColor = "#2a2a2a")}
                />
              </label>
            </div>

            {/* inline error */}
            <AnimatePresence>
              {status === "error" && errorMsg && (
                <motion.p
                  key="err"
                  initial={{ opacity: 0, y: -6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  style={{
                    marginTop: 14,
                    fontFamily: "var(--font-geist-mono), monospace",
                    fontSize: 11,
                    color: "#ff4444",
                    letterSpacing: "0.04em",
                  }}
                >
                  ⚠ {errorMsg}
                </motion.p>
              )}
            </AnimatePresence>

            {/* submit */}
            <motion.button
              type="submit"
              disabled={isLoading}
              whileHover={isLoading ? {} : { y: -2, boxShadow: "0 8px 32px rgba(255,107,0,0.45)" }}
              whileTap={isLoading ? {} : { scale: 0.97 }}
              style={{
                marginTop: 28,
                width: "100%",
                background: "#FF6B00",
                color: isLoading ? "transparent" : "#000",
                border: "none",
                padding: "16px 0",
                fontFamily: "var(--font-bebas), sans-serif",
                fontSize: 18,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                cursor: isLoading ? "not-allowed" : "pointer",
                position: "relative",
                overflow: "hidden",
                opacity: isLoading ? 0.9 : 1,
                transition: "opacity 0.2s",
              }}
            >
              {isLoading ? (
                <span
                  style={{
                    position: "absolute",
                    inset: 0,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 6,
                  }}
                >
                  {[0, 1, 2].map(i => (
                    <span
                      key={i}
                      style={{
                        width: 7,
                        height: 7,
                        borderRadius: "50%",
                        background: "#000",
                        display: "inline-block",
                        animation: `dot-bounce 0.7s ${i * 0.15}s infinite ease-in-out both`,
                      }}
                    />
                  ))}
                </span>
              ) : (
                "SEND MESSAGE →"
              )}
            </motion.button>
          </form>
        )}
      </motion.div>

      {/* keyframes */}
      <style>{`
        @keyframes dot-bounce {
          0%, 80%, 100% { transform: scale(0.6); opacity: 0.4; }
          40%            { transform: scale(1.1); opacity: 1;   }
        }
      `}</style>
    </motion.div>
  )
}

/* ══════════════════════════════════════════════════════════
   SCREEN SLOT
══════════════════════════════════════════════════════════ */
function ScreenSlot({ src }: { src: string }) {
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        aspectRatio: "16 / 10",
        marginBottom: 12,
        borderRadius: 8,
        overflow: "hidden",
        flexShrink: 0,
      }}
    >
      <Image
        src={src}
        alt=""
        fill
        style={{ objectFit: "cover" }}
        sizes="(max-width: 768px) 180px, calc(50vw - 80px)"
        loading="lazy"
      />
    </div>
  )
}

/* shared input / textarea style */
const inputStyle: React.CSSProperties = {
  background: "#0f0f0f",
  border: "1px solid #2a2a2a",
  color: "#fff",
  padding: "12px 16px",
  fontFamily: "var(--font-inter), sans-serif",
  fontSize: 14,
  outline: "none",
  width: "100%",
  transition: "border-color 0.2s",
}

/* ══════════════════════════════════════════════════════════
   GET IN TOUCH BUTTON  (opens modal, keeps ripple)
══════════════════════════════════════════════════════════ */
interface Ripple { id: number; x: number; y: number }

function GetInTouchButton({ onOpen }: { onOpen: () => void }) {
  const btnRef                = useRef<HTMLButtonElement>(null)
  const [ripples, setRipples] = useState<Ripple[]>([])

  const handleClick = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
    const rect = btnRef.current!.getBoundingClientRect()
    const ripple: Ripple = {
      id: Date.now(),
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    }
    setRipples(prev => [...prev, ripple])
    setTimeout(() => setRipples(prev => prev.filter(r => r.id !== ripple.id)), 700)
    onOpen()
  }, [onOpen])

  return (
    <>
      <motion.button
        ref={btnRef}
        variants={fadeUp}
        aria-label="Open contact form"
        onClick={handleClick}
        style={{ background: "none", border: "none", padding: 0, cursor: "pointer" }}
        whileHover={{
          y: -3,
          scale: 1.02,
          boxShadow: "0 8px 40px rgba(255,107,0,0.55)",
          transition: { duration: 0.22 },
        }}
        whileTap={{ scale: 0.97 }}
      >
        <div
          className="relative overflow-hidden bg-accent text-black font-display tracking-widest uppercase"
          style={{
            fontSize: "clamp(18px, 2vw, 26px)",
            minWidth: 280,
            textAlign: "center",
            padding: "20px 48px",
          }}
        >
          {/* ripples */}
          {ripples.map(r => (
            <span
              key={r.id}
              style={{
                position: "absolute",
                left: r.x,
                top: r.y,
                width: 10,
                height: 10,
                borderRadius: "50%",
                background: "rgba(255,255,255,0.45)",
                transform: "translate(-50%,-50%) scale(0)",
                animation: "ripple-grow 0.7s ease-out forwards",
                pointerEvents: "none",
              }}
            />
          ))}
          GET IN TOUCH →
        </div>
      </motion.button>

      <style>{`
        @keyframes ripple-grow {
          to { transform: translate(-50%,-50%) scale(40); opacity: 0; }
        }
      `}</style>
    </>
  )
}

/* ══════════════════════════════════════════════════════════
   FOOTER
══════════════════════════════════════════════════════════ */
export function Footer() {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <>
      <footer
        id="contact"
        className="w-full bg-bg border-t border-border px-6"
      >
        {/* ── CTA Block ── */}
        <div className="relative overflow-hidden mb-32">

          {/* ── Dual vertical scroll columns (background) ── */}
          <div
            aria-hidden="true"
            style={{
              position: "absolute",
              inset: 0,
              display: "flex",
              justifyContent: "center",
              alignItems: "flex-start",
              gap: 20,
              maskImage: "linear-gradient(to bottom, transparent 0%, black 18%, black 82%, transparent 100%)",
              WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 18%, black 82%, transparent 100%)",
              overflow: "hidden",
              opacity: 0.13,
              pointerEvents: "none",
              zIndex: 0,
            }}
          >
            {/* Column A — scrolls UP — footer_1 to footer_5 */}
            <div className="scroll-col-up" style={{ flexShrink: 0 }}>
              {[...Array(2)].flatMap((_, pass) =>
                [1, 2, 3, 4, 5].map(n => <ScreenSlot key={`a-${pass}-${n}`} src={`/footer_${n}.png`} />)
              )}
            </div>

            {/* Column B — scrolls DOWN — footer_6 to footer_10 */}
            <div className="scroll-col-down" style={{ flexShrink: 0 }}>
              {[...Array(2)].flatMap((_, pass) =>
                [1, 2, 3, 4, 5].map(n => <ScreenSlot key={`b-${pass}-${n}`} src={`/footer_${n + 5}.png`} />)
              )}
            </div>
          </div>

          {/* ── Foreground: star, headline, CTA (z-10) ── */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto py-16 md:py-32"
          >
            <motion.div variants={scaleIn} className="mb-8">
              <motion.span
                animate={{ rotate: 360 }}
                transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
                style={{ display: "block" }}
              >
                <OrangeStar size={44} />
              </motion.span>
            </motion.div>

            <motion.h2
              variants={fadeUp}
              className="font-display text-white leading-[0.9] mb-12"
              style={{ fontSize: "clamp(48px, 10vw, 120px)" }}
            >
              LOOKING FOR A
              <br />
              PRODUCT DESIGNER?
            </motion.h2>

            <GetInTouchButton onOpen={() => setModalOpen(true)} />
          </motion.div>
        </div>

        {/* ── Bottom row ── */}
        <div className="flex flex-col md:flex-row items-center max-w-7xl mx-auto border-t border-border pt-8 pb-10 gap-4">
          {/* Left — copyright */}
          <p className="font-mono text-[10px] text-text-muted tracking-wider uppercase md:flex-1">
            © 2026 Suryakanta Jena. Built with Next.js
          </p>

          {/* Centre — links, truly centred */}
          <div className="flex items-center gap-6">
            <a
              href="https://www.linkedin.com/in/suryakanta-jena-191155264/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn profile"
              className="font-mono text-[10px] text-text-muted tracking-widest uppercase hover:text-accent transition-colors duration-200"
            >
              LinkedIn ↗
            </a>
            <a
              href="https://github.com/Suryaa-dsgn"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub profile"
              className="font-mono text-[10px] text-text-muted tracking-widest uppercase hover:text-accent transition-colors duration-200"
            >
              GitHub ↗
            </a>
            <a
              href="https://www.figma.com/design/CbQWYlHzSkuReUGIVvvP6P/SuryaKanta-Jena_Design-works?node-id=0-1&t=SzOc558e6DdJp4oP-1"
              target="_blank"
              rel="noreferrer"
              aria-label="Figma UI works"
              className="font-mono text-[10px] text-text-muted tracking-widest uppercase hover:text-accent transition-colors duration-200"
            >
              Figma UIs ↗
            </a>
          </div>

          {/* Right — back to top */}
          <div className="md:flex-1 md:flex md:justify-end">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="font-mono text-[10px] text-text-muted tracking-widest uppercase hover:text-accent transition-colors duration-200 cursor-pointer"
              aria-label="Back to top"
            >
              ↑ BACK TO TOP
            </button>
          </div>
        </div>
      </footer>

      {/* ── Modal portal ── */}
      <AnimatePresence>
        {modalOpen && <ContactModal onClose={() => setModalOpen(false)} />}
      </AnimatePresence>
    </>
  )
}
