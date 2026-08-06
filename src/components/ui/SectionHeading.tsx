export function SectionHeading({
  eyebrow,
  title,
}: {
  eyebrow: string
  title: string
}) {
  return (
    <div className='mb-12 flex flex-wrap items-end justify-between gap-4'>
      <div className='min-w-0'>
        <span className='mb-4 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground'>
          <span className='h-px w-8 bg-current' />
          {eyebrow}
        </span>
        <h2 className='font-display text-5xl font-light leading-[0.95] tracking-tight sm:text-7xl'>
          {title}
        </h2>
      </div>
    </div>
  )
}
