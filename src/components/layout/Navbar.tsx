'use client'

import { useRef, type MouseEvent } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useLenis } from 'lenis/react'
import { gsap, SplitText, useGSAP } from '@/lib/gsap'
import { NAV } from '@/lib/data'
import { cn } from '@/lib/utils'
import { useIntroStore } from '@/stores/useIntroStore'
import { SmileyButton } from './SmileyButton'

export default function Navbar() {
  const navRef = useRef<HTMLElement>(null)
  const charsRef = useRef<Element[]>([])
  const phase = useIntroStore((s) => s.phase)
  const pathname = usePathname()
  const lenis = useLenis()

  useGSAP(
    (_, contextSafe) => {
      const links = gsap.utils.toArray<HTMLAnchorElement>('a', navRef.current)
      const splits = links.map((el) => new SplitText(el, { type: 'chars' }))
      charsRef.current = splits.flatMap((s) => s.chars)
      gsap.set(charsRef.current, { opacity: 0, y: -16, display: 'inline-block' })
      gsap.set(navRef.current, { visibility: 'visible' })

      const cleanups = links.map((link, i) => {
        const chars = splits[i].chars
        const hover = (active: boolean) => {
          if (useIntroStore.getState().phase !== 'done') return
          gsap.to(chars, {
            y: active ? -6 : 0,
            color: active ? 'var(--color-orange)' : 'inherit',
            stagger: 0.02,
            duration: 0.3,
            ease: 'power2.out',
            overwrite: true,
          })
        }
        const onEnter = contextSafe!(() => hover(true))
        const onLeave = contextSafe!(() => hover(false))
        link.addEventListener('mouseenter', onEnter)
        link.addEventListener('mouseleave', onLeave)
        return () => {
          link.removeEventListener('mouseenter', onEnter)
          link.removeEventListener('mouseleave', onLeave)
        }
      })

      return () => cleanups.forEach((fn) => fn())
    },
    { scope: navRef },
  )

  useGSAP(() => {
    if (phase !== 'nav') return
    gsap.to(charsRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.45,
      ease: 'back.out(2)',
      stagger: 0.012,
      onComplete: () => useIntroStore.getState().setPhase('done'),
    })
  }, [phase])

  function handleClick(e: MouseEvent<HTMLAnchorElement>, hash: string) {
    if (pathname !== '/' || !lenis) return
    e.preventDefault()
    lenis.scrollTo(`#${hash}`)
    history.replaceState(null, '', `#${hash}`)
  }

  const introLocked = phase !== 'done'

  return (
    <header className='fixed inset-x-0 top-0 z-40 flex w-full items-center justify-between overflow-hidden px-2 py-2 sm:px-5'>
      <SmileyButton />
      <nav
        ref={navRef}
        aria-label='Main'
        aria-hidden={introLocked}
        className={cn(
          'invisible flex items-center gap-0 sm:gap-0.5',
          introLocked && 'pointer-events-none',
        )}
      >
        {NAV.map((n) => (
          <Link
            key={n.hash}
            href={`/#${n.hash}`}
            scroll={false}
            onClick={(e) => handleClick(e, n.hash)}
            tabIndex={introLocked ? -1 : 0}
            className='shrink-0 px-2.5 py-2 font-display text-[12px] font-bold uppercase tracking-wider text-ink/80 sm:px-3 sm:text-xs sm:tracking-widest'
          >
            {n.label}
          </Link>
        ))}
      </nav>
    </header>
  )
}
