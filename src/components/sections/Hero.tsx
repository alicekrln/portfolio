import { Asterisk, Star } from 'lucide-react'
import Weather from '../weather/Weather'
import { motion } from 'motion/react'
import Typewriter from 'typewriter-effect'

export function Hero() {
  return (
    <section
    id='top'
      className='relative mx-auto max-w-7xl px-4 pt-16 pb-24 sm:px-8 sm:pt-24 sm:pb-32'
    >
      <div className='grid gap-14 lg:grid-cols-[1.45fr_1fr] lg:items-center'>
        <div>
          <h1 className='font-display text-[clamp(3rem,9.5vw,7.5rem)] font-light leading-[0.95] tracking-[-0.02em]'>
            I'm
            <span className='relative mx-3 inline-block italic text-tangerine'>
              Alice
              <svg
                viewBox='0 0 200 14'
                className='absolute -bottom-1 left-0 h-2.5 w-full text-magenta'
                preserveAspectRatio='none'
              >
                <path
                  d='M2 8 Q 50 0 100 8 T 198 8'
                  stroke='currentColor'
                  strokeWidth='3'
                  fill='none'
                  strokeLinecap='round'
                />
              </svg>
            </span>
            <span className='text-muted-foreground'>,</span>
            <br />
            <span className='italic'>a frontend dev</span>
            <Star
              className='mx-2 inline-block h-[0.55em] w-[0.55em] fill-magenta animate-spin-slow'
              strokeWidth={0}
            />
            <span className='text-outline'>student</span>
            <br />
            <span className='text-muted-foreground'>from </span>
            <span className='italic'>Stockholm.</span>
          </h1>
        </div>
        <HeroCollage />
      </div>
    </section>
  )
}

function HeroCollage() {
  return (
    <div className='relative mx-auto aspect-square w-full max-w-md'>
      <div className='absolute right-4 top-4 h-3/4 w-3/4 animate-blob bg-magenta opacity-90' />
      <div className='absolute left-0 top-16 h-40 w-40 animate-float rounded-full bg-teal opacity-90' />
      <div className='absolute -left-2 bottom-14 w-64 -rotate-6 rounded-2xl bg-mustard p-5 soft-ring'>
        <div className='font-mono text-xs leading-tight text-foreground'>
          <Typewriter
            options={{
              strings: [
                `const alice = {\n  role: 'frontend dev',\n  status: 'open to internships'\n}`
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
      </div>
      <div className='absolute right-0 top-0 grid h-28 w-28'>
        <motion.button
          whileHover={{
            scale: 1.3,
            transition: { duration: 0.5 },
          }}
          transition={{ duration: 0.5 }}
        >
          <div className='absolute right-8 top-8 grid h-28 w-28 place-items-center rounded-full bg-background hairline '>
            <div className='text-center font-mono text-[9px] uppercase tracking-[0.2em] text-muted-foreground leading-tight'>
              <Weather />
            </div>
          </div>
        </motion.button>
      </div>
      <div className='absolute left-24 top-2 h-8 w-8 rounded-full bg-lilac' />
      <Asterisk
        className='absolute -bottom-4 left-8 h-8 w-8 text-tangerine animate-spin-slow'
        strokeWidth={2}
      />
    </div>
  )
}
