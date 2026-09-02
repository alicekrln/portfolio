import { Star } from 'lucide-react'
import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { BlobPath } from '../shapes'

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null)
  const blobRef = useRef<SVGSVGElement>(null)
  const introRef = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    if (!sectionRef.current) return
    const ctx = gsap.context(() => {
      gsap.from(introRef.current, {
        opacity: 0,
        y: 40,
        duration: 1,
        ease: 'power3.out',
        delay: 0.1,
      })

      gsap.set(blobRef.current, { transformOrigin: 'bottom right' })
      gsap.to(blobRef.current, {
        scale: 24,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 0.5,
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      id='top'
      className='section-block relative bg-hero-bg px-4 pt-24 pb-24 text-ink sm:px-8 sm:pt-28 sm:pb-32'
    >
      <BlobPath
        fillColor='about'
        ref={blobRef}
        className='pointer-events-none absolute -bottom-15 -right-10 h-24 w-24'
      />

      <div
        ref={introRef}
        className='relative grid gap-14 lg:grid-cols-[1.45fr_1fr] lg:items-center'
      >
        <div className='text-hero-txt'>
          <h1 className='font-display text-[clamp(2.75rem,9vw,7rem)] font-bold leading-[0.95] tracking-[-0.02em]'>
            I'm
            <span className='relative mx-4 inline-block text-about-bg'>
              Alice
              <svg
                viewBox='0 0 200 14'
                className='absolute -bottom-1 left-0 h-2.5 w-full text-contact-txt'
                preserveAspectRatio='none'
              >
                <path
                  d='M2 8 Q 50 0 100 8 T 198 8'
                  stroke='currentColor'
                  strokeWidth='14'
                  fill='none'
                  strokeLinecap='round'
                />
              </svg>
            </span>
            <span className='opacity-60'>,</span>
            <br />a <span className='italic'>frontend dev</span>
            <Star
              className='mx-2 inline-block h-[0.55em] w-[0.55em] fill-sun animate-spin-slow'
              strokeWidth={0}
            />
            <span className='text-outline'>still in beta.</span>
          </h1>
          <p className='mt-6 max-w-md font-mono text-sm text-justify [text-align-last:justify] leading-relaxed opacity-80 sm:text-base'>
            Stockholm-based · Chas Academy '25-'27 · Open to a six-month
            internship (Nov '26-Apr '27)
          </p>
        </div>
      </div>
    </section>
  )
}
