'use client'

import { useRef } from 'react'
import { gsap, SplitText, useGSAP } from '@/lib/gsap'
import { cn } from '@/lib/utils'
import { useIntroStore } from '@/stores/useIntroStore'
import { BlobPath } from '../shapes'

const CURTAIN = ['bg-coral', 'bg-carib', 'bg-lime', 'bg-sun', 'bg-pink']
const FLASH = ['coral', 'pink', 'lime', 'sun', 'violet', 'teal', 'carib']

function rollOut(target: Element, duration = 0.27) {
  return gsap
    .timeline()
    .to(target, { xPercent: -100, duration, ease: 'power2.in' })
    .set(target, { xPercent: 100 })
    .to(target, { xPercent: 0, duration, ease: 'power2.out' })
}

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null)
  const curtainRef = useRef<HTMLDivElement>(null)
  const blobRef = useRef<SVGSVGElement>(null)
  const nameRef = useRef<HTMLHeadingElement>(null)
  const taglineRef = useRef<HTMLParagraphElement>(null)
  const phase = useIntroStore((s) => s.phase)

  useGSAP(
    (_, contextSafe) => {
      const { phase: current, setPhase } = useIntroStore.getState()
      const skipIntro =
        current !== 'name' ||
        window.matchMedia('(prefers-reduced-motion: reduce)').matches

      const nameSplit = new SplitText(nameRef.current, {
        type: 'words,chars',
        mask: 'chars',
      })
      const taglineSplit = new SplitText(taglineRef.current, {
        type: 'words',
        mask: 'words',
      })
      const chars = nameSplit.chars
      const charMasks = nameSplit.masks
      const clipLetters = () =>
        gsap.set(charMasks, { overflowX: 'clip', overflowY: 'visible' })
      const panels = gsap.utils.toArray<HTMLElement>(
        curtainRef.current!.children,
      )

      gsap.set(blobRef.current, { transformOrigin: 'bottom right' })
      gsap.set([nameRef.current, taglineRef.current], { visibility: 'visible' })

      const scrollOut = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: '+=250%',
          scrub: 0.5,
          pin: true,
        },
      })

      const blobPath = blobRef.current!.querySelector('path')!
      let flooded = false
      const covers = (x: number, y: number) => {
        const ctm = blobPath.getScreenCTM()
        if (!ctm) return false
        return blobPath.isPointInFill(new DOMPoint(x, y).matrixTransform(ctm.inverse()))
      }
      const setFlooded = (value: boolean) => {
        if (value === flooded) return
        flooded = value
        const color = value ? 'var(--color-carib)' : ''
        document.documentElement.style.backgroundColor = color
        document.body.style.backgroundColor = color
      }
      scrollOut.eventCallback('onUpdate', () => {
        setFlooded(covers(1, 1) && covers(1, window.innerHeight - 1))
      })

      const buildScrollOut = () => {
        gsap.set(taglineSplit.masks, { overflow: 'visible' })
        const mid = Math.ceil(taglineSplit.words.length / 2)
        scrollOut
          .to(taglineSplit.words.slice(0, mid), { xPercent: -250, opacity: 0, stagger: 0.02, ease: 'power2.in' }, 0)
          .to(taglineSplit.words.slice(mid), { xPercent: 250, opacity: 0, stagger: 0.02, ease: 'power2.in' }, 0)
          .to(blobRef.current, { scale: 18, ease: 'none' }, 0.5)
      }

      if (skipIntro) {
        gsap.set(curtainRef.current, { display: 'none' })
        clipLetters()
        buildScrollOut()
        if (current === 'name') setPhase('nav')
      } else {
        gsap.set(charMasks, { overflow: 'visible' })
        gsap.set(chars, {
          yPercent: -140,
          scale: 0.3,
          opacity: 0,
          rotate: () => gsap.utils.random(-50, 50),
          color: (i) => `var(--color-${FLASH[i % FLASH.length]})`,
        })
        gsap.set(taglineSplit.words, { yPercent: 100 })

        gsap
          .timeline({ defaults: { ease: 'power4.inOut' } })
          .to(panels, { yPercent: -100, duration: 0.7, stagger: { each: 0.07, from: 'end' } })
          .set(curtainRef.current, { display: 'none' })
          .to(
            chars,
            {
              yPercent: 0,
              scale: 1,
              opacity: 1,
              rotate: 0,
              duration: 0.6,
              ease: 'back.out(2.2)',
              stagger: { each: 0.035, from: 'random' },
            },
            0.35,
          )
          .to(chars, { duration: 0, clearProps: 'color', stagger: { each: 0.035, from: 'random' } }, 0.75)
          .to(taglineSplit.words, { yPercent: 0, duration: 0.5, ease: 'power3.out', stagger: 0.03 }, 1.0)
          .call(() => {
            clipLetters()
            buildScrollOut()
            setPhase('nav')
          }, [], 1.25)
      }

      const cleanups = chars.map((char, i) => {
        const mask = charMasks[i]
        const onEnter = contextSafe!(() => {
          if (!gsap.isTweening(char)) rollOut(char)
        })
        mask.addEventListener('mouseenter', onEnter)
        return () => mask.removeEventListener('mouseenter', onEnter)
      })
      return () => {
        cleanups.forEach((fn) => fn())
        setFlooded(false)
      }
    },
    { scope: sectionRef },
  )

  return (
    <>
      <section
        ref={sectionRef}
        id='top'
        className='section-block min-h-lvh items-center px-4 text-center text-ink'
      >
        <BlobPath
          tone='carib'
          ref={blobRef}
          className='pointer-events-none absolute -bottom-28 -right-10 h-24 w-48'
        />

        <h1
          ref={nameRef}
          className={cn(
            'invisible font-passion text-[clamp(3rem,12vw,9rem)] font-black uppercase leading-[0.9] text-orange',
            phase === 'name' && 'pointer-events-none',
          )}
        >
          Alice Karlén
        </h1>
        <p
          ref={taglineRef}
          className='invisible mt-6 font-display text-sm font-bold uppercase tracking-[0.3em] opacity-70 sm:text-base'
        >
          Frontend developer in beta
        </p>
      </section>

      <div
        ref={curtainRef}
        aria-hidden='true'
        className='pointer-events-none absolute inset-x-0 top-0 z-30 h-lvh overflow-hidden'
      >
        {CURTAIN.map((bg) => (
          <div key={bg} className={cn('absolute inset-0', bg)} />
        ))}
      </div>
    </>
  )
}
