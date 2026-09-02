import { FigmaIcon, GithubIcon } from '@/components/icons'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import { PROJECTS, toneBg, type Project } from '@/lib/data'
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
  const overviewRef = useScrollReveal<HTMLDivElement>({ selector: '.reveal' })
  const mediaRef = useScrollReveal<HTMLDivElement>({
    selector: '.reveal',
    y: 80,
    stagger: 0.1,
  })

  return (
    <article>
      <header
        className={`section-block ${toneBg[project.tone]} px-4 py-24 text-ink sm:px-8`}
      >
        <div className='mx-auto w-full max-w-4xl'>
          <Link
            to='/'
            hash='projects'
            className='inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] opacity-70 transition-opacity hover:opacity-100'
          >
            <ArrowLeft className='h-3.5 w-3.5' /> Back to projects
          </Link>

          <div className='mt-10 font-mono text-xs uppercase tracking-[0.2em] opacity-70'>
            {project.tag} · {project.year}
          </div>
          <h1 className='mt-3 font-display text-6xl font-bold leading-[0.95] tracking-tight sm:text-8xl'>
            {project.title}
          </h1>
          <p className='mt-4 text-sm opacity-70'>{project.role}</p>

          <div className='mt-8 flex flex-wrap gap-3'>
            {project.links.map((link) => {
              const Icon = linkIcon[link.type]
              return (
                <a
                  key={link.href}
                  href={link.href}
                  target='_blank'
                  rel='noreferrer'
                  className='inline-flex items-center gap-2 rounded-full bg-background px-4 py-2 text-sm text-foreground transition-transform hover:-translate-y-0.5'
                >
                  <Icon className='h-4 w-4' /> {link.label}
                </a>
              )
            })}
          </div>
        </div>
      </header>

      <section className='bg-background px-4 py-20 text-foreground sm:px-8'>
        <div ref={overviewRef} className='mx-auto w-full max-w-3xl'>
          <p className='reveal whitespace-pre-line text-base text-justify leading-relaxed sm:text-lg'>
            {project.overview}
          </p>
          <div className='reveal mt-8 flex flex-wrap gap-2 justify-center'>
            {project.stack.map((s) => (
              <span
                key={s}
                className={`rounded-full bg-${project.tagTone} px-3 py-1 font-mono text-[11px] text-foreground hairline`}
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section ref={mediaRef} className='bg-background px-4 pb-24 sm:px-8'>
        <div className='mx-auto w-full max-w-5xl space-y-10'>
          {project.media.map((m, i) => (
            <div key={i} className='reveal'>
              <ProjectMediaItem media={m} />
            </div>
          ))}
        </div>
      </section>
    </article>
  )
}

function ProjectMediaItem({ media }: { media: Project['media'][number] }) {
  if (media.type === 'video') {
    return (
      <video
        src={media.src}
        poster={media.poster}
        controls
        playsInline
        className='w-full rounded-3xl hairline'
      />
    )
  }
  if (media.type === 'figma-embed') {
    return (
      <iframe
        title={media.title}
        src={media.embedUrl}
        allowFullScreen
        className='aspect-video w-full rounded-3xl hairline'
      />
    )
  }
  return (
    <img
      src={media.src}
      alt={media.alt}
      className='w-full rounded-3xl hairline'
    />
  )
}
