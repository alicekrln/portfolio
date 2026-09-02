import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SplitText } from 'gsap/SplitText'
import { BlobPath } from '../shapes'
import { useIntroStore } from '@/stores/useIntroStore'

gsap.registerPlugin(ScrollTrigger, SplitText)

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null)
  const blobRef = useRef<SVGSVGElement>(null)
  const nameRef = useRef<HTMLHeadingElement>(null)
  const taglineRef = useRef<HTMLParagraphElement>(null)
  const setNameRevealed = useIntroStore((s) => s.setNameRevealed)

  useLayoutEffect(() => {
    if (!sectionRef.current || !nameRef.current || !taglineRef.current) return
    if (!blobRef.current) return

    document.documentElement.style.overflow = 'hidden'

    const ctx = gsap.context(() => {
      const nameSplit = new SplitText(nameRef.current, { type: 'chars' })
      const taglineSplit = new SplitText(taglineRef.current, { type: 'words' })

      gsap.set(nameSplit.chars, { display: 'inline-block' })
      gsap.set(taglineSplit.words, { display: 'inline-block' })

      const intro = gsap.timeline({
        delay: 0.2,

        onComplete: () => {
          document.documentElement.style.overflow = ''

          setNameRevealed()

          const mid = Math.ceil(taglineSplit.words.length / 2)
          const left = taglineSplit.words.slice(0, mid)
          const right = taglineSplit.words.slice(mid)

          gsap.set(blobRef.current, { transformOrigin: 'bottom right' })

          gsap
            .timeline({
              scrollTrigger: {
                trigger: sectionRef.current,
                start: 'top top',
                end: '+=150%',
                scrub: 0.5,
                pin: true,
                invalidateOnRefresh: true,
              },
            })
            .to(
              left,
              { xPercent: -220, opacity: 0, stagger: 0.02, ease: 'power2.in' },
              0,
            )
            .to(
              right,
              { xPercent: 220, opacity: 0, stagger: 0.02, ease: 'power2.in' },
              0,
            )
            .to(blobRef.current, { scale: 20, ease: 'none' }, 0.4)

          ScrollTrigger.refresh()
        },
      })

      intro
        .from(nameSplit.chars, {
          yPercent: 130,
          rotate: 8,
          opacity: 0,
          duration: 1,
          ease: 'power4.out',
          stagger: 0.045,
        })
        .from(
          taglineSplit.words,
          {
            y: 20,
            opacity: 0,
            duration: 0.6,
            ease: 'power3.out',
            stagger: 0.05,
          },
          '-=0.35',
        )

      nameSplit.chars.forEach((char) => {
        char.addEventListener('mouseenter', () => {
          gsap
            .timeline({ defaults: {
              ease: 'elastic.out(1, 0.4)',
            },
          })
            .to(char, {
              y: -16,
              scale: 1.25,
              color: 'var(--magenta)',
              duration: 0.35,
            })
            .to(
              char,
              {
                y: 0, 
                scale: 1, 
                color: 'inherit', 
                duration: 0.4,
              },
              '+=0.05',
            )
        })
      })
    }, sectionRef)

    return () => {
      document.documentElement.style.overflow = ''
      ctx.revert()
    }
  }, [setNameRevealed])

  return (
    <section
      ref={sectionRef}
      id='top'
      className='section-block relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-hero-bg px-4 text-center text-ink'
    >
      <BlobPath
        fillColor='about'
        ref={blobRef}
        className='pointer-events-none absolute -bottom-15 -right-10 h-24 w-24'
      />

      <h1
        ref={nameRef}
        className='font-display text-[clamp(3rem,12vw,9rem)] font-bold uppercase leading-[0.9] tracking-[-0.02em] text-stack-txt'
      >
        Alice Karlén
      </h1>
      <p
        ref={taglineRef}
        className='mt-6 font-display font-bold text-sm uppercase tracking-[0.3em] opacity-70 sm:text-base'
      >
        Frontend developer in beta
      </p>
    </section>
  )
}
