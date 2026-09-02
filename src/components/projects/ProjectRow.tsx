import { Link } from '@tanstack/react-router'
import { ArrowUpRight } from 'lucide-react'
import { toneBg, type Project } from '@/lib/data'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'

export function ProjectRow({
  project,
  index,
}: {
  project: Project
  index: number
}) {
  const reversed = index % 2 === 1
  const ref = useScrollReveal<HTMLDivElement>({ selector: '.reveal' })
  const imageWrapRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!imageWrapRef.current) return
    const img = imageWrapRef.current.querySelector('img')
    if (!img) return
    const ctx = gsap.context(() => {
      gsap.fromTo(
        img,
        { scale: 1.50 },
        {
          scale: 1,
          ease: 'power3.in',
          scrollTrigger: {
            trigger: imageWrapRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1,
          },
        },
      )
    })
    return () => ctx.revert()
  }, [])

  return (
    <div
      ref={ref}
      className={`section-block ${toneBg[project.tone]} px-4 py-20 text-ink sm:px-8`}
    >
      <div
        className={`mx-auto flex w-full max-w-7xl flex-col items-center gap-10 lg:gap-16 ${reversed ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}
      >
        <div
          ref={imageWrapRef}
          className='reveal w-full overflow-hidden rounded-3xl hairline lg:w-1/2'
        >
          <img
            src={project.cover}
            alt={`${project.title} preview`}
            className='h-full w-full object-cover'
          />
        </div>

        <div className='reveal w-full lg:w-1/2'>
          <div className='flex flex-col gap-3 font-mono text-xs uppercase tracking-[0.2em] opacity-70'>
            {project.tag}
          <div className='h-px w-30 bg-current' />
          </div>
          <h3 className='mt-4 font-display text-5xl font-bold leading-tight tracking-tight sm:text-7xl'>
            {project.title}
          </h3>
          <p className='mt-6 max-w-md text-base text-justify leading-relaxed opacity-80 sm:text-lg'>
            {project.desc}
          </p>
          <div className='mt-6 flex flex-wrap gap-1.5'>
            {project.stack.map((s) => (
              <span
                key={s}
                className='rounded-full bg-background/60 px-3 py-1 font-mono text-[11px] hairline'
              >
                {s}
              </span>
            ))}
          </div>
          <Link
            to='/projects/$slug'
            params={{ slug: project.slug }}
            className='group mt-8 inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-3 text-sm text-background transition-transform hover:-translate-y-0.5'
          >
            View project
            <ArrowUpRight className='h-4 w-4 transition-transform group-hover:rotate-45' />
          </Link>
        </div>
      </div>
    </div>
  )
}
