"use client"
import { useEffect } from "react"
import { motion, useMotionValue, useSpring } from "framer-motion"

export function CursorDot() {
  const x = useMotionValue(-100)
  const y = useMotionValue(-100)

  const springX = useSpring(x, { stiffness: 250, damping: 28 })
  const springY = useSpring(y, { stiffness: 250, damping: 28 })

  useEffect(() => {
    const move = (e: MouseEvent) => {
      x.set(e.clientX - 8)
      y.set(e.clientY - 8)
    }
    window.addEventListener("mousemove", move)
    return () => window.removeEventListener("mousemove", move)
  }, [x, y])

  return (
    <motion.div
      className="fixed top-0 left-0 w-4 h-4 rounded-full bg-accent pointer-events-none z-[9999] hidden md:block mix-blend-difference"
      style={{ x: springX, y: springY }}
      aria-hidden="true"
    />
  )
}
