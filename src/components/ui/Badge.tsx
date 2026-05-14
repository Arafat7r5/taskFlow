import { clsx } from 'clsx'

interface BadgeProps {
  label: string
  color: string      // hex, e.g. "#ef4444"
  size?: 'sm' | 'md'
}

// Convert hex to rgb for the bg opacity trick
function hexToRgb(hex: string) {
  const clean = hex.replace('#', '')
  const r = parseInt(clean.substring(0, 2), 16)
  const g = parseInt(clean.substring(2, 4), 16)
  const b = parseInt(clean.substring(4, 6), 16)
  return `${r}, ${g}, ${b}`
}

export function Badge({ label, color, size = 'md' }: BadgeProps) {
  const rgb = hexToRgb(color)

  return (
    <span
      className={clsx(
        'inline-flex items-center font-medium rounded-full',
        size === 'sm' ? 'px-2 py-0.5 text-xs' : 'px-2.5 py-1 text-sm'
      )}
      style={{
        backgroundColor: `rgba(${rgb}, 0.15)`,
        color,
      }}
    >
      {label}
    </span>
  )
}