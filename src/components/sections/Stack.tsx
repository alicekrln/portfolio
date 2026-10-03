'use client'

import { useRef } from 'react'
import { gsap, ScrollTrigger, SplitText, useGSAP } from '@/lib/gsap'
import { SKILLS, toneBg, type Tone } from '@/lib/data'
import { cn } from '@/lib/utils'
import { Reveal } from '../ui/Reveal'
import { SectionHeading } from '../ui/SectionHeading'

const hoverText: Partial<Record<Tone, string>> = {
  carib: 'hover:text-snow data-active:text-snow',
  violet: 'hover:text-snow data-active:text-snow',
}

export function Stack() {
  const listRef = useRef<HTMLOListElement>(null)

  useGSAP(
    () => {
      const mm = gsap.matchMedia()

      mm.add('(hover: none)', () => {
        const rows = gsap.utils.toArray<HTMLElement>('.skill-row')
        rows.forEach((row) => {
          ScrollTrigger.create({
            trigger: row,
            start: 'top 55%',
            end: 'bottom 55%',
            onToggle: (self) => row.toggleAttribute('data-active', self.isActive),
          })
        })
        return () => rows.forEach((row) => row.removeAttribute('data-active'))
      })

      mm.add('(prefers-reduced-motion: no-preference)', () => {
        gsap.utils.toArray<HTMLElement>('.skill-row').forEach((row, i) => {
          const title = row.querySelector('h3')!
          const split = new SplitText(title, { type: 'words,chars', mask: 'chars' })

          gsap.fromTo(
            title,
            { xPercent: i % 2 ? 12 : -12 },
            {
              xPercent: 0,
              ease: 'none',
              scrollTrigger: { trigger: row, start: 'top bottom', end: 'top 45%', scrub: 0.6 },
            },
          )

          gsap
            .timeline({
              scrollTrigger: {
                trigger: row,
                start: 'top 85%',
                toggleActions: 'play none none reverse',
              },
            })
            .from(split.chars, { yPercent: 110, duration: 0.6, ease: 'power4.out', stagger: 0.015 })
            .from(
              row.querySelectorAll('.skill-tag'),
              { scale: 0.6, autoAlpha: 0, duration: 0.4, ease: 'back.out(2.5)', stagger: 0.04 },
              '-=0.35',
            )
        })
      })
    },
    { scope: listRef },
  )

  return (
    <section id='stack' className='bg-cream px-4 py-24 text-ink sm:px-8 sm:py-32'>
      <div className='mx-auto w-full max-w-7xl'>
        <Reveal selector='.reveal' className='text-orange'>
          <SectionHeading label='Skills' title='Still leveling up' className='reveal mb-14' />
        </Reveal>

        <ol ref={listRef} className='border-t-2 border-ink'>
          {SKILLS.map((skill, i) => (
            <li
              key={skill.name}
              className={cn(
                'skill-row group relative overflow-hidden border-b-2 border-ink transition-colors duration-300',
                hoverText[skill.tone],
              )}
            >
              <span
                aria-hidden='true'
                className={cn(
                  'absolute inset-0 origin-bottom scale-y-0 transition-transform duration-500 ease-[cubic-bezier(0.7,0,0.2,1)] group-hover:scale-y-100 group-data-active:scale-y-100 motion-reduce:transition-none',
                  toneBg[skill.tone],
                )}
              />

              <div className='relative grid items-center gap-x-8 gap-y-5 py-8 sm:py-10 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)]'>
                <div className='flex items-start gap-4 sm:gap-6'>
                  <span className='mt-1.5 flex flex-col items-center gap-2 font-mono text-xs tracking-widest sm:mt-3 sm:text-sm'>
                    <span className='opacity-60'>{String(i + 1).padStart(2, '0')}</span>
                    <skill.icon className='h-5 w-5 sm:h-6 sm:w-6' strokeWidth={1.75} />
                  </span>
                  <h3 className='font-display text-[clamp(2rem,4.6vw,4.5rem)] font-bold uppercase leading-[0.9] tracking-tight'>
                    {skill.name}
                  </h3>
                </div>

                <ul aria-label={`${skill.name} tools`} className='flex flex-wrap gap-2 sm:gap-2.5 lg:justify-end'>
                  {skill.items.map((item) => (
                    <li
                      key={item}
                      className='skill-tag rounded-full border-2 border-current px-3.5 py-1.5 text-sm font-medium sm:text-base'
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
