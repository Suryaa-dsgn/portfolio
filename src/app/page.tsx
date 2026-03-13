import { Navbar } from "@/components/nav/Navbar"
import { Hero } from "@/components/sections/Hero"
import { MarqueeBand } from "@/components/sections/MarqueeBand"
import { About } from "@/components/sections/About"
import { Skills } from "@/components/sections/Skills"
import { Projects } from "@/components/sections/Projects"
import { Experience } from "@/components/sections/Experience"
import { Tools } from "@/components/sections/Tools"
import { Testimonials } from "@/components/sections/Testimonials"
import { Footer } from "@/components/sections/Footer"
import { CursorDot } from "@/components/ui/CursorDot"
import { ScrollProgress } from "@/components/ui/ScrollProgress"

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <CursorDot />
      <ScrollProgress />
      <Navbar />
      <Hero />
      <MarqueeBand />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Tools />
      <Testimonials />
      <Footer />
    </main>
  )
}
