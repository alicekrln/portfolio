import { cn } from '@/lib/utils'

export function StatusBadge({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-2 rounded-full bg-ink px-3 py-1 font-mono text-[11px] uppercase tracking-[0.15em] text-background',
        className,
      )}
    >
      <span aria-hidden='true' className='relative flex h-2 w-2'>
        <span className='absolute inset-0 rounded-full bg-sun motion-safe:animate-ping' />
        <span className='relative h-2 w-2 rounded-full bg-sun' />
      </span>
      {children}
    </span>
  )
}
