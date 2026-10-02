'use client'

import { useRef } from 'react'
import { gsap, useGSAP } from '@/lib/gsap'
import { MARQUEE } from '@/lib/data'
import { AsteriskIcon } from '../icons'

const TONES = [
  'text-coral',
  'text-pink',
  'text-teal',
  'text-lime',
  'text-sun',
  'text-violet',
  'text-carib',
]

export function Marquee() {
  const trackRef = useRef<HTMLDivElement>(null)

  useGSAP(
    (_, contextSafe) => {
      const el = trackRef.current!
      const tween = gsap.to(el, {
        xPercent: -50,
        duration: 34,
        ease: 'none',
        repeat: -1,
      })
      const pause = contextSafe!(() => tween.pause())
      const play = contextSafe!(() => tween.play())
      el.addEventListener('mouseenter', pause)
      el.addEventListener('mouseleave', play)
      return () => {
        el.removeEventListener('mouseenter', pause)
        el.removeEventListener('mouseleave', play)
      }
    },
    { scope: trackRef },
  )

  return (
    <section aria-label='Tools I work with' className='overflow-hidden bg-ink py-4 sm:py-6'>
      <div
        ref={trackRef}
        className='flex w-max items-center gap-12 whitespace-nowrap will-change-transform'
      >
        {[...MARQUEE, ...MARQUEE].map((item, i) => (
          <span
            key={i}
            aria-hidden={i >= MARQUEE.length}
            className='flex items-center gap-10'
          >
            <span
              className={`font-display text-2xl font-bold uppercase tracking-tight sm:text-3xl ${TONES[i % TONES.length]}`}
            >
              {item}
            </span>
            <AsteriskIcon
              className={`h-6 w-6 ${TONES[(i + 1) % TONES.length]}`}
              strokeWidth={2.5}
            />
          </span>
        ))}
      </div>
    </section>
  )
}
