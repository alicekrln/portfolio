export function SectionHeading({
  label,
  title,
  className = '',
}: {
  label: string
  title: string
  className?: string
}) {
  return (
    <div
      className={`mb-14 gap-4 ${className}`}
    >
      <div className='flex flex-col items-baseline gap-3 font-mono text-xs uppercase tracking-[0.35em] opacity-60'>
        <span>{label}</span>
        <span className='h-px w-30 bg-current' />
        <h2 className='font-display text-6xl font-bold leading-[0.9] tracking-tight sm:text-8xl'>
          {title}
        </h2>
      </div>
    </div>
  )
}
