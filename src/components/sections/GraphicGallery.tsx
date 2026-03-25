"use client"
import Image from "next/image"
import { CircularGallery, GalleryItem } from "@/components/ui/circular-gallery"

const galleryData: GalleryItem[] = [
  { common: "Visual 01", binomial: "", photo: { url: "/images/graphic_1.png", text: "Graphic work 1", by: "Suryaa" } },
  { common: "Visual 02", binomial: "", photo: { url: "/images/graphic_2.png", text: "Graphic work 2", by: "Suryaa" } },
  { common: "Visual 03", binomial: "", photo: { url: "/images/graphic_3.png", text: "Graphic work 3", by: "Suryaa" } },
  { common: "Visual 04", binomial: "", photo: { url: "/images/graphic_4.png", text: "Graphic work 4", by: "Suryaa" } },
  { common: "Visual 05", binomial: "", photo: { url: "/images/graphic_5.png", text: "Graphic work 5", by: "Suryaa" } },
  { common: "Visual 06", binomial: "", photo: { url: "/images/graphic_6.png", text: "Graphic work 6", by: "Suryaa" } },
  { common: "Visual 07", binomial: "", photo: { url: "/images/graphic_7.png", text: "Graphic work 7", by: "Suryaa" } },
  { common: "Visual 08", binomial: "", photo: { url: "/images/graphic_8.png", text: "Graphic work 8", by: "Suryaa" } },
]

export function GraphicGallery() {
  return (
    <section id="graphic-gallery" className="w-full bg-bg border-t border-border">

      {/* ── Header ── */}
      <div className="px-6 pt-12 md:pt-24 pb-10 md:pb-16">
        <div className="flex items-center justify-center gap-6 mb-12">
          <span className="font-mono text-xs text-text-muted tracking-[0.25em] uppercase">
            / Graphic Design
          </span>
        </div>
        <h2
          className="font-display leading-none text-center"
          style={{ fontSize: "clamp(48px, 10vw, 160px)" }}
        >
          <span className="text-white">VISUAL </span>
          <span className="text-stroke-outline">CRAFT</span>
        </h2>
      </div>

      {/* ── Desktop: 3D Circular Gallery ── */}
      <div className="hidden md:block" style={{ height: 560 }}>
        <CircularGallery items={galleryData} radius={520} autoRotateSpeed={0.025} />
      </div>

      {/* ── Mobile: auto-scrolling marquee carousel ── */}
      <div className="md:hidden overflow-hidden pb-12">
        {/* Duplicate cards for seamless infinite loop */}
        <div
          className="flex gap-4"
          style={{
            width: "max-content",
            animation: "marquee 22s linear infinite",
          }}
        >
          {[...galleryData, ...galleryData].map((item, i) => (
            <div key={`${item.photo.url}-${i}`} style={{ width: 200, flexShrink: 0 }}>
              <div
                style={{
                  position: "relative",
                  width: 200,
                  height: 266,
                  borderRadius: 8,
                  overflow: "hidden",
                }}
              >
                <Image
                  src={item.photo.url}
                  alt={item.common}
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="200px"
                  loading="lazy"
                />
              </div>
              <p className="font-mono text-[10px] text-text-muted mt-2 tracking-widest uppercase">
                {item.common}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* ── Bottom spacer ── */}
      <div className="pb-12 md:pb-24" />

    </section>
  )
}
