import { useScrollReveal } from '@/hooks/useScrollReveal'

export default function Footer() {
  const ref = useScrollReveal<HTMLDivElement>({
    selector: '.reveal',
    y: 20,
    duration: 0.6,
    start: 'top 100%',
  })

  return (
    <footer className='relative overflow-hidden border-t-5 border-stack-txt bg-hero-bg'>
      <div
        ref={ref}
        className='mx-auto flex flex-wrap items-center justify-between gap-3 px-4 py-8 sm:px-8'
      >
        <div className='reveal font-display font-bold text-xs uppercase tracking-wider text-stack-txt'>
          © 2026 Alice Karlén
        </div>
        <div className='reveal font-display font-bold text-xs uppercase tracking-wider text-stack-txt'>
          No cookies, no trackers.
        </div>
      </div>
    </footer>
  )
}
