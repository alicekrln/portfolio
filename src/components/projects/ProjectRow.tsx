'use client'

import { useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { gsap, useGSAP } from '@/lib/gsap'
import { toneBg, type Project } from '@/lib/data'
import { cn } from '@/lib/utils'
import { ArrowUpRightIcon } from '../icons'
import { StatusBadge } from '../ui/StatusBadge'

export function ProjectRow({
  project,
  reversed,
}: {
  project: Project
  reversed: boolean
}) {
  const rowRef = useRef<HTMLElement>(null)
  const imageWrapRef = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      gsap.fromTo(
        '.reveal',
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.08,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: rowRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        },
      )

      gsap.fromTo(
        'img',
        { scale: 1.18, y: -24 },
        {
          scale: 1.02,
          y: 18,
          ease: 'none',
          scrollTrigger: {
            trigger: imageWrapRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 0.6,
          },
        },
      )
    },
    { scope: rowRef },
  )

  return (
    <article
      ref={rowRef}
      className={cn('section-block px-4 py-20 text-ink sm:px-8', toneBg[project.tone])}
    >
      <div
        className={cn(
          'mx-auto flex w-full max-w-7xl flex-col items-center gap-10 lg:gap-16',
          reversed ? 'lg:flex-row-reverse' : 'lg:flex-row',
        )}
      >
        <div
          ref={imageWrapRef}
          className='reveal hairline w-full overflow-hidden rounded-3xl lg:w-1/2'
        >
          <Image
            src={project.cover}
            alt={`${project.title} preview`}
            placeholder='blur'
            sizes='(min-width: 1024px) 50vw, 100vw'
            className='h-full w-full object-cover'
          />
        </div>

        <div className='reveal w-full lg:w-1/2'>
          {project.status && <StatusBadge className='mb-5'>{project.status}</StatusBadge>}
          <div className='flex flex-col gap-3 font-mono text-xs uppercase tracking-[0.2em] opacity-70'>
            {project.tag}
            <span className='h-px w-30 bg-current' />
          </div>
          <h3 className='mt-4 font-display text-5xl font-bold leading-tight tracking-tight sm:text-7xl'>
            {project.title}
          </h3>
          <p className='mt-6 max-w-md text-base leading-relaxed opacity-80 sm:text-lg'>
            {project.desc}
          </p>
          <ul className='mt-6 flex flex-wrap gap-1.5'>
            {project.stack.map((s) => (
              <li
                key={s}
                className='hairline rounded-full bg-background/60 px-3 py-1 font-mono text-[11px]'
              >
                {s}
              </li>
            ))}
          </ul>
          <Link
            href={`/projects/${project.slug}`}
            className='group mt-8 inline-flex items-center gap-2 rounded-full bg-ink px-5 py-3 text-sm text-background transition-transform hover:-translate-y-0.5'
          >
            View project
            <ArrowUpRightIcon className='h-4 w-4 transition-transform group-hover:rotate-45' />
          </Link>
        </div>
      </div>
    </article>
  )
}
