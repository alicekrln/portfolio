import { Link } from '@tanstack/react-router'
import { ArrowUpRight } from 'lucide-react'
import { toneBg, type Project } from '@/lib/data'
import { useScrollReveal } from '@/hooks/useScrollReveal'

export function ProjectRow({
  project,
  index,
}: {
  project: Project
  index: number
}) {
  const reversed = index % 2 === 1
  const ref = useScrollReveal<HTMLDivElement>({ selector: '.reveal' })

  return (
    <div
      ref={ref}
      className={`section-block ${toneBg[project.tone]} px-4 py-20 text-tone-ink sm:px-8`}
    >
      <div
        className={`mx-auto flex w-full max-w-7xl flex-col items-center gap-10 lg:gap-16 ${reversed ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}
      >
        <div className='reveal w-full lg:w-1/2'>
          <div className='overflow-hidden rounded-3xl hairline'>
            <img
              src={project.cover}
              alt={`${project.title} preview`}
              className='h-full w-full object-cover'
            />
          </div>
        </div>

        <div className='reveal w-full lg:w-1/2'>
          <div className='font-mono text-xs uppercase tracking-[0.2em] opacity-70'>
            0{index + 1} - {project.tag}
          </div>
          <h3 className='mt-4 font-display text-5xl font-light leading-tight tracking-tight sm:text-7xl'>
            {project.title}
          </h3>
          <p className='mt-6 max-w-md text-base leading-relaxed opacity-80 sm:text-lg'>
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
