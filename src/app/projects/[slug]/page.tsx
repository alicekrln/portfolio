import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  ExternalLinkIcon,
  FigmaIcon,
  GithubIcon,
} from '@/components/icons'
import { Reveal } from '@/components/ui/Reveal'
import { StatusBadge } from '@/components/ui/StatusBadge'
import { getProject, PROJECTS, toneBg, type ProjectMedia } from '@/lib/data'
import { cn } from '@/lib/utils'

const linkIcon = { repo: GithubIcon, live: ExternalLinkIcon, figma: FigmaIcon }

export const dynamicParams = false

export function generateStaticParams() {
  return PROJECTS.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({
  params,
}: PageProps<'/projects/[slug]'>): Promise<Metadata> {
  const project = getProject((await params).slug)
  if (!project) return {}
  return { title: project.title, description: project.desc }
}

export default async function ProjectPage({
  params,
}: PageProps<'/projects/[slug]'>) {
  const project = getProject((await params).slug)
  if (!project) notFound()

  return (
    <article>
      <header className={cn('px-4 pb-24 pt-32 text-ink sm:px-8', toneBg[project.tone])}>
        <div className='mx-auto w-full max-w-4xl'>
          <Link
            href='/#projects'
            scroll={false}
            className='inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] opacity-70 transition-opacity hover:opacity-100'
          >
            <ArrowLeftIcon className='h-3.5 w-3.5' /> Back to projects
          </Link>
          <div>
          {project.status && (
            <StatusBadge className='mt-4'>{project.status}</StatusBadge>
          )}
          </div>
          <p
            className={cn(
              'font-mono text-xs uppercase tracking-[0.2em] opacity-70',
              project.status ? 'mt-5' : 'mt-10',
            )}
            >
            {project.tag} · {project.year}
          </p>
          <h1 className='mt-3 font-display text-6xl font-bold leading-[0.95] tracking-tight sm:text-8xl'>
            {project.title}
          </h1>
          <p className='mt-4 text-sm opacity-70'>{project.role}</p>

          <ul className='mt-8 flex flex-wrap gap-3'>
            {project.links.map((link) => {
              const Icon = linkIcon[link.type]
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='inline-flex items-center gap-2 rounded-full bg-background px-4 py-2 text-sm text-ink transition-transform hover:-translate-y-0.5'
                  >
                    <Icon className='h-4 w-4' /> {link.label}
                  </a>
                </li>
              )
            })}
          </ul>
        </div>
      </header>

      <section className='bg-background px-4 py-20 text-ink sm:px-8'>
        <Reveal selector='.reveal' className='mx-auto w-full max-w-3xl'>
          <p className='reveal whitespace-pre-line text-base leading-relaxed sm:text-lg'>
            {project.overview}
          </p>
          <ul className='reveal mt-8 flex flex-wrap justify-center gap-2'>
            {project.stack.map((s) => (
              <li
                key={s}
                className={cn(
                  'hairline rounded-full px-3 py-1 font-mono text-[11px]',
                  toneBg[project.tagTone],
                )}
              >
                {s}
              </li>
            ))}
          </ul>

          {project.architecture && (
            <div className='reveal mt-16'>
              <h2 className='font-mono text-xs uppercase tracking-[0.2em] opacity-70'>
                How it fits together
              </h2>
              <ol className='mt-4 flex flex-wrap items-center gap-2'>
                {project.architecture.map((step, i) => (
                  <li key={step} className='flex items-center gap-2'>
                    {i > 0 && <ArrowRightIcon className='h-4 w-4 opacity-50' />}
                    <span className='rounded-full border-2 border-ink px-3.5 py-1.5 text-sm font-medium'>
                      {step}
                    </span>
                  </li>
                ))}
              </ol>
            </div>
          )}

          {project.nextUp && (
            <div className={cn('reveal mt-12 rounded-3xl p-6 sm:p-8', toneBg[project.tagTone])}>
              <h2 className='font-display text-2xl font-bold'>Working on next</h2>
              <ul className='mt-4 space-y-2'>
                {project.nextUp.map((item) => (
                  <li key={item} className='flex gap-3 text-base sm:text-lg'>
                    <span aria-hidden='true'>→</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </Reveal>
      </section>

      <section aria-label='Screenshots' className='bg-background px-4 pb-24 sm:px-8'>
        <Reveal
          selector='.reveal'
          y={80}
          stagger={0.1}
          className='mx-auto w-full max-w-5xl space-y-10'
        >
          {project.media.map((media, i) => (
            <div key={i} className='reveal'>
              <MediaItem media={media} />
            </div>
          ))}
        </Reveal>
      </section>
    </article>
  )
}

function MediaItem({ media }: { media: ProjectMedia }) {
  switch (media.type) {
    case 'video':
      return (
        <video
          src={media.src}
          poster={media.poster}
          title={media.title}
          controls
          playsInline
          className='hairline w-full rounded-3xl'
        />
      )
    case 'figma-embed':
      return (
        <iframe
          title={media.title}
          src={media.embedUrl}
          loading='lazy'
          allowFullScreen
          data-lenis-prevent
          className='hairline aspect-video w-full rounded-3xl'
        />
      )
    case 'image':
      return (
        <Image
          src={media.src}
          alt={media.alt}
          placeholder='blur'
          sizes='(min-width: 1024px) 64rem, 100vw'
          className='hairline h-auto w-full rounded-3xl'
        />
      )
  }
}
