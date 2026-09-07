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
  const linksRef = useRef<HTMLElement>(null)
  const linkRefs = useRef<Array<HTMLAnchorElement | null>>([])
  const allCharsRef = useRef<Element[]>([])
  const phase = useIntroStore((s) => s.phase)
  const setPhase = useIntroStore((s) => s.setPhase)

  useLayoutEffect(() => {
    if (!navRef.current) return

    const cleanupFns: Array<() => void> = []

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

        const onEnter = () => {
          if (useIntroStore.getState().phase !== 'done') return
          gsap.to(chars, {
            y: -6,
            color: 'var(--stack-txt)',
            stagger: 0.02,
            duration: 0.3,
            ease: 'power2.out',
            overwrite: true,
          })
        }
        const onLeave = () => {
          if (useIntroStore.getState().phase !== 'done') return
          gsap.to(chars, {
            y: 0,
            color: 'inherit',
            stagger: 0.02,
            duration: 0.3,
            ease: 'power2.out',
            overwrite: true,
          })
        }

        el.addEventListener('mouseenter', onEnter)
        el.addEventListener('mouseleave', onLeave)

        cleanupFns.push(() => {
          el.removeEventListener('mouseenter', onEnter)
          el.removeEventListener('mouseleave', onLeave)
        })
      })
    }, navRef)

    return () => {
      cleanupFns.forEach((fn) => fn())
      ctx.revert()
    }
  }, [])

  useLayoutEffect(() => {
    if (phase !== 'nav' || allCharsRef.current.length === 0) return
    gsap.to(allCharsRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.7,
      ease: 'power3.out',
      stagger: 0.0,
      onComplete: () => setPhase('done'),
    })
  }, [phase, setPhase])

  const introLocked = phase !== 'done'

  return (
    <header className='fixed inset-x-0 top-0 z-40 flex w-full overflow-hidden'>
      <div
        ref={navRef}
        className='flex w-full py-2 px-2 items-center justify-between sm:px-5'
      >
        <SmileyButton />
        <nav
          ref={linksRef}
          aria-hidden={introLocked}
          className={`flex items-center justify-center gap-0 sm:gap-0.5 ${
            introLocked ? 'pointer-events-none' : ''
          }`}
        >
          {NAV.map((n, i) => (
            <Link
              key={n.hash}
              ref={(el) => {
                linkRefs.current[i] = el
              }}
              to='/'
              hash={n.hash}
              tabIndex={introLocked ? -1 : 0}
              className='shrink-0 px-2.5 py-2 font-display text-[12px] font-bold uppercase tracking-wider text-ink/80 sm:px-3 sm:text-xs sm:tracking-widest'
            >
              {n.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}
