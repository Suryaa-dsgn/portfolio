"use client"
import { useState, useEffect } from "react"

export function LiveClock() {
  const [time, setTime] = useState("")

  useEffect(() => {
    const tick = () =>
      setTime(
        new Date().toLocaleTimeString("en-US", {
          hour12: false,
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        })
      )
    tick()
    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [])

  return (
    <span className="font-mono text-xs text-text-muted tabular-nums">
      {time}
    </span>
  )
}
