import { Link } from '@tanstack/react-router'
import { NAV } from '../../lib/data'
import { SmileyButton } from './SmileyButton'
import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { SplitText } from 'gsap/SplitText'
import { useIntroStore } from '@/stores/useIntroStore'

gsap.registerPlugin(SplitText)

export default function NavBar() {
  const navRef = useRef<HTMLDivElement>(null)
  const linkRefs = useRef<Array<HTMLAnchorElement | null>>([])
  const allCharsRef = useRef<Element[]>([])
  const nameRevealed = useIntroStore((s) => s.nameRevealed)

  useLayoutEffect(() => {
    if (!navRef.current) return

    const ctx = gsap.context(() => {
      const links = linkRefs.current.filter(
        (el): el is HTMLAnchorElement => !!el,
      )
      const splits = links.map((el) => new SplitText(el, { type: 'chars' }))
      const allChars = splits.flatMap((s) => s.chars)
      allCharsRef.current = allChars
      gsap.set(allChars, { opacity: 0, y: -16, display: 'inline-block' })

      links.forEach((el, i) => {
        const chars = splits[i].chars
        el.addEventListener('mouseenter', () =>
          gsap.to(chars, {
            y: -6,
            color: 'var(--tangerine)',
            stagger: 0.02,
            duration: 0.3,
            ease: 'power2.out',
            overwrite: true,
          }),
        )
        el.addEventListener('mouseleave', () =>
          gsap.to(chars, {
            y: 0,
            color: 'inherit',
            stagger: 0.02,
            duration: 0.3,
            ease: 'power2.out',
            overwrite: true,
          }),
        )
      })
    }, navRef)
    return () => ctx.revert()
  }, [])

  useLayoutEffect(() => {
    if (!nameRevealed || allCharsRef.current.length === 0) return
    gsap.to(allCharsRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.7,
      ease: 'power3.out',
      stagger: 0.025,
    })
  }, [nameRevealed])

  return (
    <header className='fixed inset-x-0 top-0 z-40 flex w-full overflow-hidden'>
      <div
        ref={navRef}
        className='flex w-full py-2 px-2 items-center justify-between text-foreground sm:px-5'
      >
        <SmileyButton />
        <nav className='flex items-center justify-center gap-0 sm:gap-0.5 '>
          {NAV.map((n, i) => (
            <Link
              key={n.hash}
              ref={(el) => {
                linkRefs.current[i] = el
              }}
              to='/'
              hash={n.hash}
              className='shrink-0 px-2.5 py-2 font-display text-[11px] font-bold uppercase tracking-wider sm:px-3 sm:text-xs sm:tracking-widest'
            >
              {n.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>


  )
}
