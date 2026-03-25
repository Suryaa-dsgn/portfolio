"use client"
import Image from "next/image"
import { motion } from "framer-motion"
import { SectionLabel } from "@/components/ui/SectionLabel"
import { staggerContainer, fadeUp } from "@/lib/motion"

// ── Brand SVG Icons ────────────────────────────────────────────────────────

// Real Figma brand icon (from official asset — no background rect)
function FigmaIcon() {
  return (
    <svg width="36" height="45" viewBox="0 0 1024 1280" fill="none">
      <path d="M312 840C312 784.772 356.772 740 412 740H512V840C512 895.228 467.228 940 412 940C356.772 940 312 895.228 312 840Z" fill="#24CB71"/>
      <path d="M512 340V540H612C667.228 540 712 495.228 712 440C712 384.772 667.228 340 612 340H512Z" fill="#FF7237"/>
      <path d="M611.167 740C666.395 740 711.167 695.228 711.167 640C711.167 584.772 666.395 540 611.167 540C555.939 540 511.167 584.772 511.167 640C511.167 695.228 555.939 740 611.167 740Z" fill="#00B6FF"/>
      <path d="M312 440C312 495.228 356.772 540 412 540H512V340H412C356.772 340 312 384.772 312 440Z" fill="#FF3737"/>
      <path d="M312 640C312 695.228 356.772 740 412 740H512V540H412C356.772 540 312 584.772 312 640Z" fill="#874FFF"/>
    </svg>
  )
}

function FramerIcon({ color }: { color: string }) {
  return (
    <svg width="36" height="36" viewBox="0 0 14 21" fill="none">
      <path d="M0 0h14v7H7L0 0Z" fill={color}/>
      <path d="M0 7h7l7 7H0V7Z" fill={color} opacity="0.7"/>
      <path d="M0 14h7v7L0 14Z" fill={color} opacity="0.5"/>
    </svg>
  )
}

function VSCodeIcon() {
  return (
    <svg width="36" height="36" viewBox="0 0 100 100" fill="none">
      <path d="M74.8 5.3 38.3 37.5 15.7 21.2 5 27.7v44.6l10.7 6.5 22.8-16.4 36.3 32.2L95 88V12L74.8 5.3ZM15 60.7V39.3l14 10.7L15 60.7ZM75 72.3 47.5 50 75 27.7v44.6Z" fill="#007ACC"/>
    </svg>
  )
}

// Real Cursor brand cube (official SVG, white fill for dark bg)
function CursorIcon() {
  return (
    <svg width="36" height="41" viewBox="0 0 466.73 532.09" fill="none">
      <path
        d="M457.43,125.94L244.42,2.96c-6.84-3.95-15.28-3.95-22.12,0L9.3,125.94c-5.75,3.32-9.3,9.46-9.3,16.11v247.99c0,6.65,3.55,12.79,9.3,16.11l213.01,122.98c6.84,3.95,15.28,3.95,22.12,0l213.01-122.98c5.75-3.32,9.3-9.46,9.3-16.11v-247.99c0-6.65-3.55-12.79-9.3-16.11h-.01ZM444.05,151.99l-205.63,356.16c-1.39,2.4-5.06,1.42-5.06-1.36v-233.21c0-4.66-2.49-8.97-6.53-11.31L24.87,145.67c-2.4-1.39-1.42-5.06,1.36-5.06h411.26c5.84,0,9.49,6.33,6.57,11.39h-.01Z"
        fill="white"
      />
    </svg>
  )
}

function ClaudeIcon() {
  return (
    <Image src="/images/claude-color.webp" alt="Claude" width={36} height={36} />
  )
}

function NextjsIcon({ color }: { color: string }) {
  return (
    <svg width="36" height="36" viewBox="0 0 180 180" fill="none">
      <circle cx="90" cy="90" r="90" fill="#000"/>
      <path d="M149 113.6 76.4 15H60v150h16V44.5l66.4 91.2c2.1 2.9 6.6 1.4 6.6-2.1Z" fill={color}/>
      <path d="M120 15h16v75l-16-22V15Z" fill={color}/>
    </svg>
  )
}

function ReactIcon({ color }: { color: string }) {
  return (
    <svg width="40" height="36" viewBox="0 0 100 100" fill="none">
      <ellipse cx="50" cy="50" rx="45" ry="18" stroke={color} strokeWidth="5" fill="none"/>
      <ellipse cx="50" cy="50" rx="45" ry="18" stroke={color} strokeWidth="5" fill="none" transform="rotate(60 50 50)"/>
      <ellipse cx="50" cy="50" rx="45" ry="18" stroke={color} strokeWidth="5" fill="none" transform="rotate(120 50 50)"/>
      <circle cx="50" cy="50" r="7" fill={color}/>
    </svg>
  )
}

function TailwindIcon({ color }: { color: string }) {
  return (
    <svg width="44" height="28" viewBox="0 0 54 33" fill="none">
      <path
        d="M27 0C19.8 0 15.3 3.6 13.5 10.8c2.7-3.6 5.85-4.95 9.45-4.05 2.054.514 3.522 2.004 5.147 3.653C30.744 12.672 33.514 15.6 40.5 15.6c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.514-3.522-2.004-5.147-3.653C36.756 2.928 33.986 0 27 0ZM13.5 15.6C6.3 15.6 1.8 19.2 0 26.4c2.7-3.6 5.85-4.95 9.45-4.05 2.054.514 3.522 2.004 5.147 3.653C17.244 28.272 20.014 31.2 27 31.2c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.514-3.522-2.004-5.147-3.653C23.256 18.528 20.486 15.6 13.5 15.6Z"
        fill={color}
      />
    </svg>
  )
}

function GitHubIcon({ color }: { color: string }) {
  return (
    <svg width="36" height="36" viewBox="0 0 98 96" fill="none">
      <path
        d="M49 0C22 0 0 22 0 49c0 21.6 14 40 33.4 46.5 2.4.4 3.3-1 3.3-2.3v-8c-13.6 3-16.5-6.6-16.5-6.6-2.2-5.7-5.4-7.2-5.4-7.2-4.4-3 .3-3 .3-3 4.9.3 7.5 5 7.5 5 4.4 7.5 11.4 5.3 14.2 4.1.4-3.2 1.7-5.4 3.1-6.6-10.8-1.2-22.2-5.4-22.2-24.2 0-5.3 1.9-9.7 5-13.1-.5-1.2-2.2-6.2.5-12.9 0 0 4.1-1.3 13.4 5A46.7 46.7 0 0 1 49 22.7c4.1 0 8.3.6 12.2 1.6 9.3-6.3 13.4-5 13.4-5 2.7 6.7 1 11.7.5 12.9 3.1 3.4 5 7.8 5 13.1 0 18.8-11.4 23-22.3 24.2 1.7 1.5 3.3 4.5 3.3 9v13.4c0 1.3.9 2.8 3.3 2.3C84 89 98 70.6 98 49 98 22 76 0 49 0Z"
        fill={color}
      />
    </svg>
  )
}

function NotionIcon({ color }: { color: string }) {
  return (
    <svg width="36" height="36" viewBox="0 0 100 100" fill="none">
      <path
        d="M21 17.5c3.2 2.6 4.4 2.4 10.4 2l56.2-3.3c1.2 0 .2-1.2-.4-1.4L78 8.8c-2-.6-4.6-1.4-9.6-1l-54 4c-2 .2-2.4 1.2-1.6 2l8.2 3.7Zm4 15.4v59.4c0 3.2 1.6 4.4 5.2 4.2l61.6-3.6c3.6-.2 4-.2 4-3.4V30.2c0-3.2-1.2-4.8-3.8-4.6l-63 3.6c-2.8.2-4 1.6-4 3.7Zm58.4 2.2c.4 1.8 0 3.6-1.8 3.8l-3-.4V89c-2.6 1.4-5 2.2-7 2.2-3.2 0-4-1-6.4-4.2L45.8 59.6V86l6 1.4s0 3.6-5 3.6l-13.8.8c-.4-.8 0-2.8 1.4-3.2l3.6-1V40l-5-.4c-.4-1.8.6-4.4 3.4-4.6l14.8-1 22 33.2v-29.4l-5-1.8c-.4-2.2 1-3.8 2.8-4l15.4-1Z"
        fill={color}
      />
    </svg>
  )
}

function PythonIcon() {
  return (
    <svg width="36" height="36" viewBox="0 0 110 110" fill="none">
      <path d="M54.3 0C26.8 0 28.4 12 28.4 12l.03 12.4h26.4v3.7H17.6S0 26 0 54c0 28 15.5 27 15.5 27h9.3v-13s-.5-15.5 15.2-15.5H65s14.7.2 14.7-14.2V14.2C79.7 0 54.3 0 54.3 0ZM39.6 8.2c2.6 0 4.8 2.1 4.8 4.8 0 2.6-2.1 4.8-4.8 4.8-2.6 0-4.8-2.1-4.8-4.8 0-2.7 2.2-4.8 4.8-4.8Z" fill="#3776AB"/>
      <path d="M55.7 110c27.5 0 25.9-12 25.9-12l-.03-12.4H55.2v-3.7h37.2S110 84 110 56c0-28-15.5-27-15.5-27h-9.3v13s.5 15.5-15.2 15.5H45.2S30.5 57.3 30.5 71.8v23.6C30.3 110 55.7 110 55.7 110ZM70.4 101.8c-2.6 0-4.8-2.1-4.8-4.8 0-2.6 2.1-4.8 4.8-4.8 2.6 0 4.8 2.1 4.8 4.8 0 2.7-2.2 4.8-4.8 4.8Z" fill="#FFDC52"/>
    </svg>
  )
}

// Real GSAP brand wordmark (official SVG)
function GSAPIcon() {
  return (
    <svg width="72" height="27" viewBox="0 0 623 231" fill="none">
      <path d="M181.426 107.888C181.426 107.888 181.426 107.951 181.426 107.989L173.234 143.914C172.792 145.946 170.785 147.436 168.463 147.436H158.579C157.847 147.436 157.19 147.928 156.988 148.635C147.862 179.927 135.504 201.437 119.183 214.35C105.297 225.345 88.1806 230.47 65.3205 230.47C44.7703 230.47 30.9229 223.792 19.171 210.614C3.64473 193.194 -2.78035 164.679 1.10752 130.319C8.12588 65.8159 41.2233 0.732005 104.982 0.732005C124.371 0.555284 139.594 6.60168 150.185 18.6692C161.381 31.431 167.074 50.6558 167.099 75.8133C167.061 78.0981 165.181 79.941 162.921 79.941H116.216C114.563 79.941 113.086 78.4389 113.111 76.7853C112.732 59.3909 107.62 50.9082 97.4711 50.9082C79.5718 50.9082 69.0064 75.4725 63.4018 89.0927C55.5756 108.115 51.5993 128.767 52.3819 149.342C52.748 158.923 54.2754 172.392 63.2756 177.971C71.2533 182.919 82.6392 179.637 89.5313 174.159C96.4234 168.68 101.965 159.201 104.3 150.554C104.628 149.355 104.654 148.421 104.338 148.004C104.01 147.575 103.101 147.474 102.407 147.474H90.4149C89.1273 147.474 87.8524 146.881 87.0824 145.921C86.4387 145.113 86.1862 144.116 86.4134 143.132L94.6183 107.143C95.0223 105.301 96.6759 103.912 98.7082 103.66V103.571H177.412C177.602 103.571 177.791 103.571 177.968 103.609C180.013 103.874 181.452 105.793 181.414 107.888H181.426Z" fill="#88CE02"/>
      <path d="M316.946 66.5987C316.908 68.8456 315.027 70.6885 312.768 70.6885H269.749C266.934 70.6885 264.573 68.3785 264.573 65.5636C264.573 52.8775 260.231 46.7049 251.345 46.7049C242.458 46.7049 236.727 52.2211 236.563 61.8525C236.374 72.5946 242.382 82.3521 259.499 99.128C282.031 120.486 291.056 139.408 290.627 164.414C289.92 204.858 262.705 231 221.302 231C200.158 231 184.001 225.282 173.259 214.01C162.353 202.56 157.354 185.759 158.402 164.073C158.452 161.826 160.32 159.996 162.58 159.996H207.076C208.288 159.996 209.487 160.589 210.295 161.599C210.989 162.47 211.279 163.543 211.103 164.553C210.61 172.379 211.961 178.223 215.003 181.455C216.96 183.55 219.674 184.611 223.069 184.611C231.287 184.611 236.109 178.741 236.285 168.516C236.437 159.68 233.672 151.93 218.601 136.265C199.136 117.04 181.678 97.1841 182.221 65.9549C182.537 47.8536 189.656 31.2923 202.267 19.3257C215.596 6.67754 233.837 0 255.005 0C276.212 0.151475 292.281 6.26098 302.77 18.1644C312.705 29.4493 317.489 45.7456 316.959 66.5987H316.946Z" fill="#88CE02"/>
      <path d="M450.295 223.388L450.572 8.30601C450.61 6.0465 448.805 4.20355 446.546 4.20355H379.96C377.725 4.20355 376.741 6.14749 376.097 7.43503L279.696 222.076V222.114C279.696 222.114 279.67 222.151 279.658 222.164C278.585 224.802 280.617 227.63 283.445 227.63H329.985C332.497 227.63 334.164 226.86 334.984 225.257L344.224 202.813C345.36 199.821 345.575 199.544 348.806 199.544H393.277C396.369 199.544 396.433 199.607 396.382 202.662L395.385 223.527C395.347 225.787 397.152 227.63 399.412 227.63H446.432C447.631 227.63 448.755 227.125 449.499 226.229C450.168 225.433 450.446 224.424 450.295 223.388ZM367.917 151.577C367.488 151.577 367.147 151.564 366.87 151.539C366.175 151.476 365.708 150.807 365.885 150.125C365.973 149.809 366.1 149.393 366.289 148.875L399.639 65.5006C399.929 64.6801 400.295 63.8722 400.674 63.0896C401.217 61.9662 401.873 61.8904 402.075 62.7236C402.252 63.4178 398.25 148.332 398.25 148.332C397.935 151.513 397.796 151.64 394.691 151.905L367.955 151.589H367.892L367.917 151.577Z" fill="#88CE02"/>
      <path d="M545.143 4.2035H509.799C507.931 4.2035 505.835 5.20071 505.343 7.4476C505.343 7.4476 456.151 223.25 456.151 223.275C455.937 224.272 456.164 225.257 456.82 226.077C457.59 227.036 458.865 227.63 460.153 227.63H504.333C506.706 227.63 508.335 226.456 508.776 224.411C508.776 224.411 514.128 200.023 514.141 199.948C514.52 198.042 513.863 196.565 512.172 195.668C511.377 195.252 510.581 194.835 509.799 194.419L502.137 190.392L494.512 186.378C493.528 185.86 492.543 185.343 491.571 184.825C491.079 184.573 490.776 184.068 490.789 183.513C490.801 182.692 491.483 182.023 492.303 182.023L516.514 182.137C523.76 182.174 531.005 181.657 538.125 180.332C588.263 170.978 621.562 130.395 622.522 75.1824C623.342 28.0609 597.314 4.17825 545.181 4.17825L545.143 4.2035ZM533.113 132.642H532.167C530.046 132.642 529.667 132.402 529.604 132.326C529.566 132.276 543.565 70.171 543.578 70.0827C543.931 68.2902 543.919 67.2551 542.82 66.6492C541.419 65.8666 520.983 54.973 520.983 54.973C520.49 54.7079 520.2 54.203 520.213 53.6476C520.225 52.8397 520.894 52.1707 521.715 52.1707H554.03C564.09 52.4863 569.695 61.5748 569.43 77.101C568.963 103.988 556.314 131.695 533.113 132.642Z" fill="#88CE02"/>
    </svg>
  )
}

// Real Miro brand logo (official SVG — yellow square + M wordmark)
function MiroIcon() {
  return (
    <svg width="44" height="38" viewBox="246.9 120.6 749.2 649.7" fill="none">
      <path d="m490.2 120.6h191.5c40.4 0 73.2 32.8 73.2 73.2v191.5c0 40.4-32.8 73.2-73.2 73.2h-191.5c-40.4 0-73.2-32.8-73.2-73.2v-191.5c0-40.4 32.8-73.2 73.2-73.2z" fill="#ffd02f"/>
      <path d="m651.8 162.8h-37.1l30.9 54.3-68-54.3h-37.1l34 66.4-71.1-66.4h-37.1l37.1 84.5-37.1 169h37.1l71.1-181.1-34 181.1h37.1l68-193.1-30.9 193.1h37.1l68-211.3z" fill="#050038"/>
      <path clipRule="evenodd" d="m611.7 770.2-41.5-9.9v-167.1l41.5-7.9zm290.3-39.4c-30.1.1-54.5-24.2-54.7-54.3v-.3c0-29.6 24.3-53.9 54.6-53.9s54.6 24.3 54.6 53.9c.1 30.1-24.3 54.5-54.3 54.6zm94.1-54.6c0 52-42.1 94.1-94.1 94.1s-94.1-42.1-94.1-94.1c0-51.3 42.2-93.4 94.2-93.4s94 42.1 94 93.4zm-533.9 84.2 40.8 8.5v-112.5c0-54-42.1-73-71.1-73-19.1 0-34.9 4.6-48.7 18.4-14.5-13.8-31.6-19.1-45.4-19.1-20.4 0-37.5 8.5-49.4 23v-19.1l-41.5 7.9v165.8l41.5 8.5v-113.7c0-18.4 13.2-30.9 33.5-30.9 19.1 0 32.9 12.5 32.9 30.9v105.3l40.8 8.5v-113.8c0-18.4 13.8-30.9 33.6-30.9 19.1 0 32.9 12.5 32.9 30.9zm314.7-177.6-24.4 3.3c-45.4 10.5-75 25-75 75v99.3l41.5 7.9v-101.3c0-23 13.2-33.6 33.6-37.5l24.4-3.9zm-204.7-68.5c-9.9 10.1-9.9 26.1 0 36.2 10.1 10.4 26.8 10.5 37.1.4l.4-.4c9.9-10 9.9-26.2 0-36.2-10.6-9.9-27-9.9-37.5 0z" fill="#050038" fillRule="evenodd"/>
    </svg>
  )
}

function PostmanIcon() {
  return (
    <Image src="/images/postman.webp" alt="Postman" width={36} height={36} />
  )
}

function SQLIcon({ color }: { color: string }) {
  return (
    <svg width="36" height="36" viewBox="0 0 48 48" fill="none">
      <ellipse cx="24" cy="12" rx="18" ry="7" stroke={color} strokeWidth="3" fill="none"/>
      <path d="M6 12v12c0 3.87 8.06 7 18 7s18-3.13 18-7V12" stroke={color} strokeWidth="3" fill="none"/>
      <path d="M6 24v12c0 3.87 8.06 7 18 7s18-3.13 18-7V24" stroke={color} strokeWidth="3" fill="none"/>
    </svg>
  )
}

// ── Icon resolver ──────────────────────────────────────────────────────────
function ToolIcon({ name, color }: { name: string; color: string }) {
  switch (name) {
    case "Figma":    return <FigmaIcon />
    case "Framer":   return <FramerIcon color={color} />
    case "VS Code":  return <VSCodeIcon />
    case "Cursor":   return <CursorIcon />
    case "Claude":   return <ClaudeIcon />
    case "Next.js":  return <NextjsIcon color={color} />
    case "React":    return <ReactIcon color={color} />
    case "Tailwind": return <TailwindIcon color={color} />
    case "GitHub":   return <GitHubIcon color={color} />
    case "Notion":   return <NotionIcon color={color} />
    case "Python":   return <PythonIcon />
    case "GSAP":     return <GSAPIcon />
    case "Miro":     return <MiroIcon />
    case "Postman":  return <PostmanIcon />
    case "SQL":      return <SQLIcon color={color} />
    default:         return (
      <span className="font-mono text-sm font-bold" style={{ color }}>{name}</span>
    )
  }
}

// ── Tool data (no n8n) ─────────────────────────────────────────────────────
const tools = [
  { name: "Figma",    category: "UI Design",          color: "#F24E1E" },
  { name: "Framer",   category: "Prototyping",         color: "#0099FF" },
  { name: "VS Code",  category: "Coding",              color: "#007ACC" },
  { name: "Cursor",   category: "AI Development",      color: "#FFFFFF" },
  { name: "Claude",   category: "AI Workflows",        color: "#FF6B00" },
  { name: "Next.js",  category: "Frontend Framework",  color: "#FFFFFF" },
  { name: "React",    category: "UI Library",          color: "#61DAFB" },
  { name: "Tailwind", category: "Styling",             color: "#38BDF8" },
  { name: "GitHub",   category: "Version Control",     color: "#FFFFFF" },
  { name: "Notion",   category: "Documentation",       color: "#FFFFFF" },
  { name: "Python",   category: "Scripting",           color: "#3776AB" },
  { name: "GSAP",     category: "Animation",           color: "#88CE02" },
  { name: "Miro",     category: "Collaboration",       color: "#FFD02F" },
  { name: "Postman",  category: "API Testing",         color: "#FF6C37" },
  { name: "SQL",      category: "Database",            color: "#336791" },
]

// ── Section ────────────────────────────────────────────────────────────────
export function Tools() {
  return (
    <section
      id="tools"
      className="w-full bg-bg py-16 md:py-32 px-6 border-t border-border"
    >
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <SectionLabel>TOOLS & TECH</SectionLabel>
          <h2
            className="font-display leading-none mt-4"
            style={{ fontSize: "clamp(40px, 8vw, 96px)" }}
          >
            <span className="text-white">WHAT I </span>
            <span className="text-stroke-outline">
              BUILD WITH
            </span>
          </h2>
        </div>

        {/* Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4"
        >
          {tools.map((tool, i) => (
            <motion.div
              key={`${tool.name}-${i}`}
              variants={fadeUp}
              whileHover={{
                y: -4,
                borderColor: "rgba(255,107,0,0.4)",
                transition: { duration: 0.18 },
              }}
              className="bg-surface border border-border rounded-2xl flex flex-col items-center justify-center gap-3 cursor-default"
              style={{ padding: "28px 20px" }}
            >
              {/* Logo */}
              <div className="flex items-center justify-center" style={{ height: "44px" }}>
                <ToolIcon name={tool.name} color={tool.color} />
              </div>

              {/* Name */}
              <p className="font-sans text-white text-sm font-medium text-center leading-tight">
                {tool.name}
              </p>

              {/* Category */}
              <p className="font-mono text-[10px] text-text-muted tracking-wider text-center uppercase">
                {tool.category}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
