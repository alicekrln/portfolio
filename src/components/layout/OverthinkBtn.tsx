"use client"

import { useLayoutEffect, useRef, useState } from "react"
import { AnimatePresence, motion } from 'motion/react'
import { cn } from '@/lib/utils'

const QUIPS = [
  'Hmm… more padding?',
  'Should it be rounder?',
  'What if it was pink?',
  "Perfect! Or maybe...",
]
const TIGHT_PADDING = '0.02em 0.16em'
const NORMAL_PADDING = '0.1em 0.45em'
const STEP_STYLES = [
  {
    className:
      'text-sun underline decoration-dashed decoration-[0.06em] underline-offset-[0.14em] hover:decoration-solid',
    padding: '0',
  },
  {
    className: 'rounded-[0.4em] bg-sun text-ink shadow-[0_0.12em_0_var(--color-ink)]',
    padding: TIGHT_PADDING,
  },
  {
    className: 'rounded-[0.4em] bg-sun text-ink shadow-[0_0.12em_0_var(--color-ink)]',
    padding: NORMAL_PADDING,
  },
  {
    className: 'rounded-[1em] bg-sun text-ink shadow-[0_0.12em_0_var(--color-ink)]',
    padding: NORMAL_PADDING,
  },
  {
    className: 'rounded-[1em] bg-babypink text-ink shadow-[0_0.12em_0_var(--color-ink)]',
    padding: NORMAL_PADDING,
  },
]

const SCREEN_MARGIN = 12

function useKeepOnScreen<T extends HTMLElement>() {
  const ref = useRef<T>(null)

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

  return ref
}
function Hint() {
  const ref = useKeepOnScreen<HTMLSpanElement>()

  return (
    <motion.span
      ref={ref}
      style={{ x: '-50%' }}
      initial={{ opacity: 0, y: -6 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 6 }}
      transition={{ duration: 0.25 }}
      className='absolute top-0 left-0 block w-max'
    >
      <span className='block -rotate-3 font-mono text-[max(0.75rem,0.2em)] font-medium uppercase tracking-[0.15em] text-sun motion-safe:animate-wiggle-slow'>
        click me ↑
      </span>
    </motion.span>
  )
}

function Bubble({ text }: { text: string }) {
  const ref = useKeepOnScreen<HTMLSpanElement>()

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
  const step = presses % STEP_STYLES.length
  const quip = step === 0 ? null : QUIPS[step - 1]
  const style = STEP_STYLES[step]

  return (
    <span className='relative inline-block'>
      <motion.button
        type='button'
        onClick={() => setPresses((n) => n + 1)}
        whileHover={{ rotate: -4, scale: 1.05 }}
        whileTap={{ scale: 0.9, y: 6 }}
        transition={{ type: 'spring', stiffness: 500, damping: 15 }}
        style={{ padding: style.padding }}
        className={cn(
          'cursor-pointer leading-[1.1] outline-offset-4 transition-[padding,border-radius,background-color,color,box-shadow,text-decoration-color] duration-300 ease-out focus-visible:outline-3 focus-visible:outline-snow motion-reduce:transition-none',
          style.className,
        )}
      >
        button
        <span className='sr-only'> (press it)</span>
      </motion.button>

      <span
        aria-hidden='true'
        className='pointer-events-none absolute top-full left-2/3 mt-2 w-0'
      >
        <AnimatePresence>{step === 0 && <Hint key='hint' />}</AnimatePresence>
      </span>

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
