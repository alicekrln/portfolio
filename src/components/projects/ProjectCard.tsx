import { toneBg, toneText, type Project } from '@/lib/data'
import { Link } from '@tanstack/react-router'
import { ArrowUpRight } from 'lucide-react'

export function ProjectCard({
  project,
  index,
}: {
  project: Project
  index: number
}) {
  return (
    <Link
      to='/projects/$slug'
      params={{ slug: project.slug }}
      className={`group relative block overflow-hidden rounded-3xl bg-card p-6 hairline transition-all duration-500 hover:-translate-y-1 soft-ring sm:p-8 `}
    >
      <div
        className={`absolute -right-16 -top-16 h-56 w-56 rounded-full ${toneBg[project.tone]} opacity-80 blur-2xl transition-all duration-700 group-hover:scale-125 group-hover:opacity-100`}
      />
      <div className='relative'>
        <div className='flex items-start justify-between gap-4'>
          <div className='min-w-0'>
            <div
              className={`font-mono text-xs uppercase tracking-[0.2em] ${toneText[project.tone]}`}
            >
              0{index + 1} - {project.tag}
            </div>
            <h3 className='mt-3 font-display text-4xl font-light leading-tight tracking-tight sm:text-5xl'>
              {project.title}
            </h3>
          </div>
          <div className='grid h-11 w-11 shrink-0 place-items-center rounded-full bg-foreground text-background transition-transform group-hover:rotate-45'>
            <ArrowUpRight className='h-5 w-5' />
          </div>
        </div>
        <p className='mt-5 max-w-md text-sm leading-relaxed text-muted-foreground sm:text-base'>
          {project.desc}
        </p>
        <div className='mt-6 aspect-video overflow-hidden rounded-2xl hairline'>
          <img
            src={project.cover}
            alt={`${project.title} preview`}
            className='h-full w-full object-cover transition-transform duration-700 group-hover:scale-105'
          />
        </div>
        <div className='mt-6 flex flex-wrap gap-1.5'>
          {project.stack.map((s) => (
            <span
              key={s}
              className='rounded-full bg-background/60 px-3 py-1 font-mono text-[11px] text-muted-foreground hairline'
            >
              {s}
            </span>
          ))}
        </div>
      </div>
    </Link>
  )
}
