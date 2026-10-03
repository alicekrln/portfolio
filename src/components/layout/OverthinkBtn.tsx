"use client"

import { useLayoutEffect, useRef, useState } from "react"
import { AnimatePresence, motion } from 'motion/react'
import { cn } from '@/lib/utils'

const QUIPS = [
  'Hmm… 2px more padding?',
  'Should it be rounder?',
  'What if it was pink?',
  "Okay, it's perfect now. Probably.",
]
const BUTTON_COLORS = ['bg-sun', 'bg-violet', 'bg-lime', 'bg-coral', 'bg-pink']

const SCREEN_MARGIN = 12

function Bubble({ text }: { text: string }) {
  const ref = useRef<HTMLSpanElement>(null)

  useLayoutEffect(() => {
    const el = ref.current
    if (!el) return
    const center = el.parentElement!.getBoundingClientRect().left
    const half = el.offsetWidth / 2
    const left = center - half
    const right = center + half
    const maxRight = document.documentElement.clientWidth - SCREEN_MARGIN
    let shift = 0
    if (left < SCREEN_MARGIN) shift = SCREEN_MARGIN - left
    else if (right > maxRight) shift = maxRight - right
    el.style.marginLeft = `${shift}px`
  }, [])

  return (
    <motion.span
      ref={ref}
      style={{ x: '-50%' }}
      initial={{ opacity: 0, y: 12, scale: 0.8, rotate: -6 }}
      animate={{ opacity: 1, y: 0, scale: 1, rotate: -2 }}
      exit={{ opacity: 0, y: -8, scale: 0.9 }}
      transition={{ type: 'spring', stiffness: 400, damping: 20 }}
      className='absolute bottom-0 left-0 block w-max max-w-[calc(100vw-1.5rem)] rounded-2xl bg-snow px-4 py-2 text-center font-sans text-base font-semibold tracking-normal text-ink shadow-lg'
    >
      {text}
    </motion.span>
  )
}

export default function OverthinkBtn() {
  const [presses, setPresses] = useState(0)
  const step = presses % (QUIPS.length + 1)
  const quip = step === 0 ? null : QUIPS[step - 1]

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
          BUTTON_COLORS[step],
        )}
      >
        button
        <span className='sr-only'> (press it)</span>
      </motion.button>

      <span
        aria-hidden='true'
        className='pointer-events-none absolute bottom-full left-1/2 mb-4 w-0'
      >
        <AnimatePresence>
          {quip && <Bubble key={presses} text={quip} />}
        </AnimatePresence>
      </span>
      <span className='sr-only' aria-live='polite'>
        {quip}
      </span>
    </span>
  )
}
