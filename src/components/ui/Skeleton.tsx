import { clsx } from 'clsx'

interface SkeletonProps {
  width?: string
  height?: string
  className?: string
  rounded?: boolean
  lines?: number
}

export function Skeleton({
  width,
  height = 'h-4',
  className,
  rounded = true,
  lines,
}: SkeletonProps) {
  if (lines && lines > 1) {
    return (
      <div className="flex flex-col gap-2">
        {Array.from({ length: lines }).map((_, i) => (
          <div
            key={i}
            style={{ width: i === lines - 1 ? '60%' : width }}
            className={clsx(
              'bg-gray-200 animate-pulse',
              height,
              rounded && 'rounded',
              className
            )}
          />
        ))}
      </div>
    )
  }

  return (
    <div
      style={{ width }}
      className={clsx(
        'bg-gray-200 animate-pulse',
        height,
        rounded && 'rounded',
        className
      )}
    />
  )
}

export function SkeletonCard() {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-4 flex flex-col gap-3">
      {/* Title */}
      <Skeleton height="h-5" width="60%" />
      {/* Description lines */}
      <Skeleton height="h-3" lines={2} />
      {/* Footer */}
      <div className="flex items-center justify-between pt-1">
        <Skeleton height="h-6" width="w-6" className="rounded-full" />
        <Skeleton height="h-4" width="50px" />
      </div>
    </div>
  )
}

export function SkeletonTaskCard() {
  return (
    <div className="bg-white rounded-lg border border-gray-200 p-3 flex flex-col gap-2">
      {/* Title */}
      <Skeleton height="h-4" width="75%" />
      {/* Meta row */}
      <div className="flex items-center gap-2">
        <Skeleton height="h-5" width="40px" rounded />
        <Skeleton height="h-5" width="55px" rounded />
      </div>
      {/* Avatar + due date */}
      <div className="flex items-center justify-between pt-1">
        <Skeleton height="h-6" width="24px" className="rounded-full" />
        <Skeleton height="h-3" width="60px" />
      </div>
    </div>
  )
}