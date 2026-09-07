import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SplitText } from 'gsap/SplitText'
import { BlobPath } from '../shapes'
import { useIntroStore } from '@/stores/useIntroStore'

gsap.registerPlugin(ScrollTrigger, SplitText)

function rollOut(target: Element, duration = 0.25) {
  return gsap
    .timeline()
    .to(target, { xPercent: -100, duration, ease: 'power2.in' })
    .set(target, { xPercent: 100, duration: 0.25 })
    .to(target, { xPercent: 0, duration, ease: 'power2.out' })
}

function buildNameWave(chars: Element[]) {
  const tl = gsap.timeline()
  const exitDuration = 0.35
  const enterDuration = 0.50
  const stagger = 0.045
  const pause = 0.2

  chars.forEach((char, i) => {
    tl.to(
      char,
      { xPercent: -100, duration: exitDuration, ease: 'power4.in' },
      i * stagger,
    )
  })

  const allHiddenAt = (chars.length -1) * stagger + exitDuration

  tl.set(chars, { xPercent: 100 }, allHiddenAt)

  const reentryStart = allHiddenAt + pause

  ;[...chars].forEach((char, i) => {
    tl.to(
      char,
      { xPercent: 0, duration: enterDuration, ease: 'power4.out' },
      reentryStart + i * stagger,
    )
  })

  return tl
}

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null)
  const blobRef = useRef<SVGSVGElement>(null)
  const nameRef = useRef<HTMLHeadingElement>(null)
  const taglineRef = useRef<HTMLParagraphElement>(null)
  const phase = useIntroStore((s) => s.phase)

  useLayoutEffect(() => {
    if (!sectionRef.current || !nameRef.current || !taglineRef.current) return
    if (!blobRef.current) return

    const hoverCleanups: Array<() => void> = []

    const ctx = gsap.context(() => {
      const nameSplit = new SplitText(nameRef.current, {
        type: 'chars',
        mask: 'chars',
        charsClass: 'name-char',
      })
      const taglineSplit = new SplitText(taglineRef.current, {
        type: 'words',
        mask: 'words',
      })

      gsap.set(nameSplit.chars, { display: 'inline-block', yPercent: 100 })
      gsap.set(nameSplit.masks, { paddingTop: '0.15em', marginTop: '-0.15em' })
      gsap.set(taglineSplit.words, { display: 'inline-block', yPercent: -100 })

      const pinTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: '+=250%',
          scrub: 0.5,
          pin: true,
          invalidateOnRefresh: true,
        },
      })

      const intro = gsap.timeline({
        delay: 0.15,
        onComplete: () => {
          useIntroStore.getState().setPhase('nav')

          gsap.set(taglineSplit.masks, { overflow: 'visible' })

          const mid = Math.ceil(taglineSplit.words.length / 2)
          const left = taglineSplit.words.slice(0, mid)
          const right = taglineSplit.words.slice(mid)

          gsap.set(blobRef.current, { transformOrigin: 'bottom right' })

          pinTimeline
            .to(
              left,
              { xPercent: -250, opacity: 0, stagger: 0.02, ease: 'power2.in' },
              0,
            )
            .to(
              right,
              { xPercent: 250, opacity: 0, stagger: 0.02, ease: 'power2.in' },
              0,
            )
            .to(blobRef.current, { scale: 18, ease: 'none' }, 0.5)
        },
      })

      intro.to(nameSplit.chars, {
        yPercent: 0,
        duration: 0.9,
        ease: 'power4.out',
        stagger: 0,
      })

      intro.add(buildNameWave(nameSplit.chars), '-=0.5')

      intro.to(
        taglineSplit.words,
        {
          yPercent: 0,
          duration: 0.7,
          ease: 'power4.out',
          stagger: 0,
        },
        '-=0.15',
      )

      nameSplit.chars.forEach((char) => {
        const onEnter = () => rollOut(char, 0.27)
        char.addEventListener('mouseenter', onEnter)
        hoverCleanups.push(() =>
          char.removeEventListener('mouseenter', onEnter),
        )
      })
    }, sectionRef)

    return () => {
      hoverCleanups.forEach((fn) => fn())
      ctx.revert()
    }
  }, [])

  const introLocked = phase !== 'done'

  return (
    <section
      ref={sectionRef}
      id='top'
      className='section-block relative flex flex-col items-center justify-center overflow-hidden bg-hero-bg px-4 text-center text-ink'
    >
      <BlobPath
        fillColor='about'
        ref={blobRef}
        className='pointer-events-none absolute -bottom-20 -right-10 h-24 w-48'
      />

      <h1
        ref={nameRef}
        className={`font-passion font-extrabold text-[clamp(3rem,12vw,9rem)] uppercase leading-[0.9] text-stack-txt ${introLocked ? 'pointer-events-none' : ''}`}
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
