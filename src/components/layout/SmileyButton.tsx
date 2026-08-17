import { useEffect, useRef, useState, type MouseEvent } from 'react'
import { Smiley, type SmileyVariant } from '../icons'
import { useRouter } from '@tanstack/react-router'
import gsap from 'gsap'

const VARIANTS: SmileyVariant[] = ['happy', 'tongue', 'wink', 'xEyes']
const COLORS = [
  'var(--coral)',
  'var(--pink)',
  'var(--lime)',
  'var(--sun)',
  'var(--teal)',
]

export function SmileyButton() {
  const [step, setStep] = useState(0)
  const faceRef = useRef<HTMLSpanElement>(null)
  const router = useRouter()

  useEffect(() => {
    const id = setInterval(() => setStep((s) => s + 1), 2600)
    return () => clearInterval(id)
  }, [])

  useEffect(() => {
    if (!faceRef.current) return
    gsap.fromTo(
      faceRef.current,
      { scale: 0.6, rotate: -12, opacity: 0 },
      {
        scale: 1,
        rotate: 0,
        opacity: 1,
        duration: 0.45,
        ease: 'back.out(2.2)',
      },
    )
  }, [step])

  function handleClick(e: MouseEvent<HTMLAnchorElement>) {
    e.preventDefault()
    router.navigate({ to: '/', hash: '', replace: true })
    window.scrollTo({ top: 0, behavior: 'smooth' })
    setStep((s) => s + 1)
  }

  function handleHover() {
    if (!faceRef.current) return
    gsap.fromTo(
      faceRef.current,
      { rotate: -14 },
      {
        rotate: 14,
        duration: 0.12,
        repeat: 3,
        yoyo: true,
        ease: 'power1.inOut',
        overwrite: true,
        onComplete: () => gsap.set(faceRef.current, { rotate: 0 }),
      },
    )
  }
  return (
    <a
      href='/'
      onClick={handleClick}
      onMouseEnter={handleHover}
      aria-label='Scroll to top'
      className='grid h-11 w-11 shrink-0 place-items-center rounded-full bg-background transition-transform hover:scale-110 active:scale-95'
    >
      <span ref={faceRef} className='block h-7 w-7'>
        <Smiley
          variant={VARIANTS[step % VARIANTS.length]}
          fillColor={COLORS[step % COLORS.length]}
          className='h-7 w-7'
        />
      </span>
    </a>
  )
}
