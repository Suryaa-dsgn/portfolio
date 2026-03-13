// Register GSAP plugins once — import gsap and ScrollTrigger from here, never directly from 'gsap'
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

export { gsap, ScrollTrigger }
