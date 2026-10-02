'use client'

import { Fragment, useRef, useState, type MouseEvent } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { useLenis } from 'lenis/react'
import { gsap, useGSAP } from '@/lib/gsap'
import { cn } from '@/lib/utils'
import { ArrowRightIcon, ArrowUpRightIcon } from '../icons'

const QUIPS = [
  'Hmm… 2px more padding?',
  'Should it be rounder?',
  'What if it was pink?',
  "Okay, it's perfect now. Probably.",
  '',
]
const BUTTON_COLORS = ['bg-sun', 'bg-violet', 'bg-lime', 'bg-coral', 'bg-pink']

function words(text: string) {
  const parts = text.split(' ')
  return parts.map((word, i) => (
    <Fragment key={i}>
      <span className='word inline-block'>{word}</span>
      {i < parts.length - 1 && ' '}
    </Fragment>
  ))
}

function OverthinkButton() {
  const [presses, setPresses] = useState(0)
  const quip = presses > 0 ? QUIPS[(presses - 1) % QUIPS.length] : ''

  return (
    <span className='relative inline-block'>
      <motion.button
        type='button'
        onClick={() => setPresses((n) => n + 1)}
        whileHover={{ rotate: -4, scale: 1.05 }}
        whileTap={{ scale: 0.9, y: 6 }}
        transition={{ type: 'spring', stiffness: 500, damping: 15 }}
        className={cn(
          'cursor-pointer rounded-full px-[0.4em] pb-[0.06em] leading-[1.1] text-ink shadow-[0_0.12em_0_var(--color-ink)] outline-offset-4 focus-visible:outline-3 focus-visible:outline-snow',
          BUTTON_COLORS[presses % BUTTON_COLORS.length],
        )}
      >
        button
        <span className='sr-only'> (press it)</span>
      </motion.button>

      <span aria-hidden='true' className='pointer-events-none absolute bottom-full left-1/2 mb-4 -translate-x-1/2'>
        <AnimatePresence mode='popLayout'>
          {quip && (
            <motion.span
              key={presses}
              initial={{ opacity: 0, y: 12, scale: 0.8, rotate: -6 }}
              animate={{ opacity: 1, y: 0, scale: 1, rotate: -2 }}
              exit={{ opacity: 0, y: -8, scale: 0.9 }}
              transition={{ type: 'spring', stiffness: 400, damping: 20 }}
              className='block whitespace-nowrap rounded-2xl bg-snow px-4 py-2 font-sans text-base font-semibold tracking-normal text-ink shadow-lg'
            >
              {quip}
            </motion.span>
          )}
        </AnimatePresence>
      </span>
      <span className='sr-only' aria-live='polite'>
        {quip}
      </span>
    </span>
  )
}

export function About() {
  const sectionRef = useRef<HTMLElement>(null)
  const statementRef = useRef<HTMLParagraphElement>(null)
  const lenis = useLenis()

  useGSAP(
    () => {
      const mm = gsap.matchMedia()

      mm.add('(prefers-reduced-motion: no-preference)', () => {
        gsap.fromTo(
          '.word',
          { opacity: 0.18 },
          {
            opacity: 1,
            stagger: 0.1,
            ease: 'none',
            scrollTrigger: {
              trigger: statementRef.current,
              start: 'top 80%',
              end: 'bottom 45%',
              scrub: true,
            },
          },
        )

        gsap.from('.fact', {
          scale: 0,
          rotate: (i) => (i % 2 ? 30 : -30),
          duration: 0.6,
          ease: 'back.out(2.5)',
          stagger: 0.1,
          scrollTrigger: {
            trigger: '.facts',
            start: 'top 90%',
            toggleActions: 'play none none reverse',
          },
        })
      })
    },
    { scope: sectionRef },
  )

  function goToContact(e: MouseEvent<HTMLAnchorElement>) {
    if (!lenis) return
    e.preventDefault()
    lenis.scrollTo('#contact')
    history.replaceState(null, '', '#contact')
  }

  return (
    <section
      ref={sectionRef}
      id='about'
      className='section-block bg-carib px-4 py-24 text-snow sm:px-8 sm:py-32'
    >
      <div className='mx-auto w-full max-w-7xl'>
          <div className='flex flex-col mb-4 items-baseline gap-3 font-mono text-xs uppercase tracking-[0.35em]'>
            <span>About</span>
            <span className='h-px w-30 bg-current' />
          </div>

        <div className='flex flex-col gap-14 lg:flex-row lg:items-stretch lg:justify-between lg:gap-16'>
          <div className='lg:basis-3/5'>
            <p
              ref={statementRef}
              className='font-display text-[clamp(2.4rem,5vw,4.75rem)] font-bold leading-[1.05] tracking-tight'
            >
              {words(
                'Frontend dev student from Stockholm, probably overthinking a',
              )}{' '}
              <OverthinkButton /> {words('somewhere.')}
            </p>

            <p className='mt-12 max-w-xl text-lg leading-relaxed text-snow/90 sm:text-xl'>
              Second year at Chas Academy, focused on clean, accessible,
              user-centered interfaces. Currently on the hunt for an internship 
              where I can learn from a real team, on real products, with real users.
            </p>
          </div>

          <div className='flex lg:basis-2/5 lg:items-center lg:justify-center'>
            <ul className='facts flex flex-wrap items-center gap-4 sm:gap-5 lg:justify-center'>
              <li className='fact -rotate-3'>
                <span className='inline-block rounded-2xl bg-coral px-5 py-3 font-display text-lg font-bold text-ink shadow-[0_6px_0_var(--color-ink)] sm:text-xl'>
                  Based in Stockholm
                </span>
              </li>
              <li className='fact rotate-2'>
                <span className='inline-block rounded-2xl bg-sun px-5 py-3 font-display text-lg font-bold text-ink shadow-[0_6px_0_var(--color-ink)] sm:text-xl'>
                  Chas Academy · 2025-27
                </span>
              </li>
              <li className='fact -rotate-2'>
                <a
                  href='#contact'
                  onClick={goToContact}
                  className={cn(
                    'group inline-flex items-center gap-3 rounded-2xl bg-lime px-5 py-3 font-display text-lg font-bold text-ink shadow-[0_6px_0_var(--color-ink)] transition-transform sm:text-xl',
                    'hover:-translate-y-1 focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-snow',
                  )}
                >
                  <span aria-hidden='true' className='relative flex h-3 w-3'>
                    <span className='absolute inset-0 rounded-full bg-ink motion-safe:animate-ping' />
                    <span className='relative h-3 w-3 rounded-full bg-ink' />
                  </span>
                  Open for internship · Nov '26 - Apr '27
                  <span
                    aria-hidden='true'
                    className='transition-transform group-hover:translate-x-1'
                  >
                    <ArrowRightIcon className='h-4 w-4 stroke-3 transition-transform group-hover:rotate-90' />
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
