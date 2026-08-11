import { Link } from '@tanstack/react-router'
import { ThemeToggle } from '@/components/ui/theme-toggle'
import { NAV } from '../../lib/data'
import { Smiley } from '../icons'

export default function NavBar() {
  return (
    <header className='sticky top-0 z-40 border-b border-border/60 bg-background/70 backdrop-blur-xl'>
      <div className='relative mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-8 sm:py-4'>
        <Link to='/' className='z-10 flex min-w-0 items-center gap-2.5'>
          <Smiley fillColor='var(--primary)' className='h-10' />
          <span className='truncate font-display text-2xl font-light tracking-tight'>
            Alice <span className='italic text-tangerine'>Karlén</span>
          </span>
        </Link>

        <nav className='hidden items-center gap-1 md:absolute md:left-1/2 md:z-0 md:flex md:-translate-x-1/2'>
          {NAV.map((n) => (
            <Link
              key={n.hash}
              to='/'
              hash={n.hash}
              className='rounded-full px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground'
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className='z-10 flex shrink-0 items-center gap-2'>
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}
