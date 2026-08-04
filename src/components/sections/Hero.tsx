import { Asterisk, Sparkles, Star } from 'lucide-react'
import Weather from '../Weather'
import { motion } from 'motion/react'
import Typewriter from 'typewriter-effect'

export function Hero() {
  return (
    <section id='top' className='relative pt-16 pb-24 sm:pt-24 sm:pb-32'>
      <div className='grid gap-14 lg:grid-cols-[1.45fr_1fr] lg:items-center'>
        <div>
          <div className='mb-8 inline-flex items-center gap-2 rounded-full bg-card px-3 py-1.5 text-xs font-medium hairline'>
            <span className='relative flex h-2 w-2'>
              <span className='absolute inline-flex h-full w-full animate-ping rounded-full bg-tangerine opacity-70' />
              <span className='relative inline-flex h-2 w-2 rounded-full bg-tangerine' />
            </span>
            <span className='text-muted-foreground'>
              Available for Internship: Nov 26 - Apr 27
            </span>
          </div>
          <h1 className='font-display text-[clamp(3rem,9.5vw,7.5rem)] font-light leading-[0.95] tracking-[-0.02em]'>
            I build
            <span className='relative mx-3 inline-block italic text-tangerine'>
              playful
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
            <span className='italic'>precise</span>
            <Star
              className='mx-2 inline-block h-[0.55em] w-[0.55em] fill-magenta animate-spin-slow'
              strokeWidth={0}
            />
            <span className='text-outline'>interfaces</span>
            <br />
            <span className='text-muted-foreground'>for the modern </span>
            <span className='italic'>web.</span>
          </h1>
          <p className='mt-10 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg'>
            I'm Alice, a Frontend Development student in Stockholm who enjoys
            combining thoughtful design, accessibility and modern web
            technologies to create interfaces people actually enjoy using.
          </p>
          <div className='mt-10 flex flex-wrap items-center gap-3'>
            <a
              href='projects'
              className='rounded-full bg-foreground px-6 py-3.5 text-sm font-medium text-background transition-transform hover:-translate-y-0.5'
            >
              See selected work
            </a>
            <a
              href='contact'
              className='rounded-full bg-card px-6 py-3.5 text-sm font-medium hairline transition-colors hover:bg-secondary'
            >
              Get in touch
            </a>
          </div>
        </div>
        <HeroCollage />
      </div>
    </section>
  )
}

function HeroCollage() {
  return (
    <div className='relative mx-auto aspect-square w-full max-w-md'>
      <div className='absolute right-4 top-4 h-3/4 w-3/4 animate-blob bg-magenta opacity-90 grain' />
      <div className='absolute left-0 top-16 h-40 w-40 animate-float rounded-full bg-teal opacity-90 grain' />
      <div className='absolute -left-2 bottom-14 w-56 -rotate-6 rounded-2xl bg-mustard p-5 soft-ring'>
        <div className='mt-2 font-mono text-xs italic leading-tight text-foreground'>
          <Typewriter
            options={{
              strings: ["const [skills, setSkills] = useState('Learning')"],
              autoStart:true,
              loop:true,
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
      <div className='absolute bottom-4 right-2 inline-flex rotate-6 items-center gap-1.5 rounded-full bg-foreground px-3 py-1.5 text-xs font-medium text-background'>
        <Sparkles className='h-3.5 w-3.5 text-tangerine' /> Built with care
      </div>
      <div className='absolute left-24 top-2 h-8 w-8 rounded-full bg-lilac' />
      <Asterisk
        className='absolute -bottom-4 left-8 h-8 w-8 text-tangerine animate-spin-slow'
        strokeWidth={2}
      />
    </div>
  )
}
