import { SKILLS, toneBg } from '../../lib/data'
import { SectionHeading } from '../ui/SectionHeading'
import { useLayoutEffect, useMemo, useRef } from 'react'
import gsap from 'gsap'
import { useScrollReveal } from '@/hooks/useScrollReveal'

type Chip = {
  id: string
  label: string
  tone: (typeof SKILLS)[number]['tone']
  icon: (typeof SKILLS)[number]['icon']
}

export function Stack() {
  const headingRef = useScrollReveal<HTMLDivElement>()
  const containerRef = useRef<HTMLDivElement>(null)

  const chips = useMemo<Chip[]>(
    () =>
      SKILLS.flatMap((s) =>
        s.note.split(',').map((item, i) => ({
          id: `${s.name}-${i}`,
          label: item.trim(),
          tone: s.tone,
          icon: s.icon,
        })),
      ),
    [],
  )

  const scatter = useMemo(
    () =>
      chips.map((_, i) => {
        const seed = i * 137.5
        return {
          rotate: (seed % 36) - 18,
          fromX: ((seed * 1.7) % 160) - 80,
          fromY: ((seed * 2.3) % 160) - 80,
          floatDelay: (i % 6) * 0.3,
        }
      }),
    [chips],
  )

  useLayoutEffect(() => {
    if (!containerRef.current) return
    const ctx = gsap.context(() => {
      const items = gsap.utils.toArray<HTMLElement>('.chip')

      gsap.fromTo(
        items,
        (i: number) => ({
          opacity: 0,
          scale: 0.3,
          rotate: scatter[i].rotate * 2,
          x: scatter[i].fromX,
          y: scatter[i].fromY,
        }),
        {
          opacity: 1,
          scale: 1,
          rotate: (i: number) => scatter[i].rotate,
          x: 0,
          y: 0,
          duration: 0.7,
          ease: 'back.out(1.6)',
          stagger: { each: 0.025, from: 'random' },
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 75%',
            toggleActions: 'play none none reverse',
          },
        },
      )

      items.forEach((el, i) => {
        gsap.to(el, {
          y: '+=8',
          duration: 2.4 + (i % 5) * 0.3,
          delay: 1.5 + scatter[i].floatDelay,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
        })
      })
    }, containerRef)

    return () => ctx.revert()
  }, [scatter])

  return (
    <section
      id='stack'
      className='section-block bg-teal px-4 py-24 text-ink sm:px-8'
    >
      <div className='mx-auto w-full max-w-6xl'>
        <div ref={headingRef} >
          <SectionHeading label='Skills' title='Still leveling up' className='reveal' />
        </div>
        <div
          ref={containerRef}
          className='flex flex-wrap justify-center gap-3 sm:gap-4'
        >
          {chips.map((chip, i) => (
            <div
              key={chip.id}
              onMouseEnter={(e) =>
                gsap.to(e.currentTarget, {
                  rotate: 0,
                  scale: 1.5,
                  duration: 0.35,
                  ease: 'back.inOut(2)',
                })
              }
              onMouseLeave={(e) =>
                gsap.to(e.currentTarget, {
                  rotate: scatter[i].rotate,
                  scale: 1,
                  duration: 0.35,
                  ease: 'power2.out',
                })
              }
              className={`chip flex cursor-default items-center gap-2 rounded-full ${toneBg[chip.tone]} px-4 py-2.5 text-sm font-medium text-ink sm:px-5 sm:py-3 sm:text-base`}
            >
              <chip.icon className='h-4 w-4 opacity-70' strokeWidth={1.75} />
              {chip.label}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
