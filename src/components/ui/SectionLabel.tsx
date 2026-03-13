export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-mono text-xs text-text-muted tracking-[0.25em] uppercase mb-4">
      / {children}
    </p>
  )
}
