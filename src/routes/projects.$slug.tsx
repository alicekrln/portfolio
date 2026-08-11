import { FigmaIcon, GithubIcon } from '@/components/icons'
import { PROJECTS, toneBg, toneText } from '@/lib/data'
import { createFileRoute, Link, notFound } from '@tanstack/react-router'
import { ArrowLeft, ExternalLink } from 'lucide-react'

export const Route = createFileRoute('/projects/$slug')({
  loader: ({ params }) => {
    const project = PROJECTS.find((p) => p.slug === params.slug)
    if (!project) throw notFound()
    return project
  },
  component: ProjectDetail,
})

const linkIcon = { repo: GithubIcon, live: ExternalLink, figma: FigmaIcon }

function ProjectDetail() {
  const project = Route.useLoaderData()

  return (
    <article className='mx-auto max-w-4xl px-4 py-24 sm:px-8 sm:py-32'>
      <Link
        to='/'
        hash='projects'
        className='inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground hover:text-foreground'
      >
        <ArrowLeft className='h-3.5 w-3.5' /> Back to projects
      </Link>
      <header className='mt-8'>
        <div
          className={`font-mono text-xs uppercase tracking-[0.2em] ${toneText[project.tone]}`}
        >
          {project.tag} · {project.year}
        </div>
        <h1 className='mt-3 font-display text-5xl font-light leading-tight tracking-tight sm:text-6xl'>
          {project.title}
        </h1>
        <p className='mt-2 text-sm text-muted-foreground'>{project.role}</p>

        <div className='mt-6 flex flex-wrap gap-3'>
          {project.links.map((link) => {
            const Icon = linkIcon[link.type]
            return (
              <a
                key={link.href}
                href={link.href}
                target='_blank'
                rel='noreferrer'
                className='inline-flex items-center gap-2 rounded-full bg-foreground px-4 py-2 text-sm text-background transition-transform hover:-translate-y-0.5'
              >
                <Icon className='h-4 w-4' /> {link.label}
              </a>
            )
          })}
        </div>
      </header>

      <p className='mt-10 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg whitespace-pre-line'>
        {project.overview}
      </p>

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

      <div className={`mt-16 h-px w-full ${toneBg[project.tone]} opacity-30`} />

      <div className='mt-16 space-y-10'>
        {project.media.map((m, i) => {
          if (m.type === 'video') {
            return (
              <video
                key={i}
                src={m.src}
                poster={m.poster}
                controls
                playsInline
                className='w-full rounded-3xl hairline'
              />
            )
          }
          if (m.type === 'figma-embed') {
            return (
              <iframe
                key={i}
                title={m.title}
                src={m.embedUrl}
                allowFullScreen
                className='aspect-video w-full rounded-3xl hairline'
              />
            )
          }
          return (
            <img
              key={i}
              src={m.src}
              alt={m.alt}
              className='w-full rounded-3xl hairline'
            />
          )
        })}
      </div>
    </article>
  )
}
