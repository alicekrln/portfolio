import { Link } from '@tanstack/react-router'
import { NAV } from '../../lib/data'
import { SmileyButton } from './SmileyButton'
import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'

export default function NavBar() {
  const navRef = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    if (!navRef.current) return

    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.nav-reveal',
        {
          opacity: 0,
          y: -30,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          stagger: 0.08,
        }
      )
    }, navRef)

    return () => ctx.revert()
  }, [])

  return (
    <header className='fixed inset-x-0 top-0 z-40 flex justify-center px-2 pt-3 sm:pt-4'>
      <div
        ref={navRef}
        className='flex w-full max-w-3xl items-center gap-1 rounded-full bg-foreground/95 px-2 py-2 text-background backdrop-blur-xl border-2 border-violet sm:gap-2 sm:px-3'
      >
        <SmileyButton />
        <nav className='flex flex-1 items-center justify-center gap-0.5 overflow-x-auto overflow-y-hidden sm:gap-1 md:absolute md:left-1/2 md:z-0 md:flex md:-translate-x-1/2'>
          {NAV.map((n) => (
            <Link
              key={n.hash}
              to='/'
              hash={n.hash}
              className='nav-reveal shrink-0 rounded-full px-2.5 py-2 font-display text-[11px] font-bold uppercase tracking-wider transition-colors hover:bg-background/15 sm:px-4 sm:text-sm sm:tracking-[0.1em]'
            >
              {n.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}
