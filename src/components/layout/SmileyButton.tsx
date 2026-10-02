'use client'

import { useEffect, useState, type MouseEvent } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion } from 'motion/react'
import { useLenis } from 'lenis/react'
import { Smiley, type SmileyVariant } from '../icons'

const VARIANTS: SmileyVariant[] = ['happy', 'tongue', 'wink', 'xEyes']
const COLORS = [
  'var(--color-coral)',
  'var(--color-pink)',
  'var(--color-lime)',
  'var(--color-sun)',
  'var(--color-teal)',
]

export function SmileyButton() {
  const [step, setStep] = useState(0)
  const pathname = usePathname()
  const lenis = useLenis()

  useEffect(() => {
    const id = setInterval(() => setStep((s) => s + 1), 2600)
    return () => clearInterval(id)
  }, [])

  function handleClick(e: MouseEvent<HTMLAnchorElement>) {
    setStep((s) => s + 1)
    if (pathname !== '/' || !lenis) return
    e.preventDefault()
    lenis.scrollTo(0)
    history.replaceState(null, '', '/')
  }

  return (
    <Link
      href='/'
      onClick={handleClick}
      aria-label='Back to top'
      className='grid h-11 w-11 shrink-0 place-items-center rounded-full bg-background transition-transform hover:scale-110 active:scale-95'
    >
      <motion.span
        className='block h-7 w-7'
        whileHover={{
          rotate: [0, -14, 14, -14, 14, 0],
          transition: { duration: 0.5, ease: 'easeInOut' },
        }}
      >
        <motion.span
          key={step}
          className='block h-7 w-7'
          initial={{ scale: 0.6, rotate: -12, opacity: 0 }}
          animate={{ scale: 1, rotate: 0, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 420, damping: 14 }}
        >
          <Smiley
            variant={VARIANTS[step % VARIANTS.length]}
            fillColor={COLORS[step % COLORS.length]}
            className='h-7 w-7'
          />
        </motion.span>
      </motion.span>
    </Link>
  )
}
