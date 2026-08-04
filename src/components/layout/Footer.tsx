export default function Footer() {
  return (
    <footer className='border-t border-border/60'>
      <div className='mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-4 py-8 sm:px-8'>
        <div className='font-mono text-xs uppercase tracking-wider text-muted-foreground'>
          {' '}
          © 2026 Alice Karlén{' '}
        </div>
        <div className='font-mono text-xs uppercase tracking-wider text-muted-foreground'>
          {' '}
          No cookies, no trackers. Just HTML, CSS & vibes
        </div>
      </div>
    </footer>
  )
}
