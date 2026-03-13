export function OrangeStar({ size = 32 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M16 0L17.96 14.04L32 16L17.96 17.96L16 32L14.04 17.96L0 16L14.04 14.04L16 0Z"
        fill="#FF6B00"
      />
    </svg>
  )
}
