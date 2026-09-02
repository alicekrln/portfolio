import { useScrollReveal } from '@/hooks/useScrollReveal'
import { EmailIcon, GithubIcon, LinkedinIcon } from '../icons'
import { SectionHeading } from '../ui/SectionHeading'
import { Flower1, Flower2, Flower3 } from '../shapes'

const LINKS = [
  {
    href: 'mailto:alice.karlen@hotmail.com',
    label: 'Email',
    icon: EmailIcon,
    hover: 'hover:text-pink',
  },
  {
    href: 'https://www.linkedin.com/in/alicekarlen/',
    label: 'LinkedIn',
    icon: LinkedinIcon,
    hover: 'hover:text-teal',
    external: true,
  },
  {
    href: 'https://github.com/alicekrln',
    label: 'Github',
    icon: GithubIcon,
    hover: 'hover:text-coral',
    external: true,
  },
]

export function Contact() {
  const ref = useScrollReveal<HTMLDivElement>({ selector: '.reveal' })

  return (
    <section
      id='contact'
      className='section-block relative overflow-hidden bg-contact-bg px-4 py-24 text-background sm:px-8'
    >
      <Flower2
        fillColor='violet'
        className='absolute -right-8 -top-2 h-72 w-72 animate-float rotate-12 sm:h-96 sm:w-96 opacity-40'
      />
      <Flower3
        fillColor='pink'
        className='pointer-events-none absolute -bottom-8 -left-4 h-44 w-44 animate-float -rotate-6 sm:h-80 sm:w-80 opacity-40'
      />
      <Flower1
        fillColor='lime'
        className='pointer-events-none absolute -bottom-14 right-2 h-36 w-36 animate-spin-slow sm:h-64 sm:w-64 opacity-40'
      />
      <Flower1
        fillColor='coral'
        className='absolute -left-4 -top-4 h-36 w-36 animate-spin-slow sm:h-72 sm:w-72 opacity-40'
      />
      <Flower2
        fillColor='sun'
        className='pointer-events-none absolute -bottom-26 left-4/10 lg:left-5/10 h-0 w-0 animate-wiggle md:h-52 md:w-52 lg:h-64 lg:w-64 opacity-40'
      />

      <div ref={ref} className='relative mx-auto w-full max-w-6xl text-contact-txt'>
        <SectionHeading
          label='Contact'
          title="Let's talk"
          className='reveal'
        />
        <p className='reveal max-w-md text-base leading-relaxed sm:text-lg'>
          Internship-hunting and always up for a chat about frontend, design, or
          both.
        </p>
        <div className='reveal mt-12 flex flex-wrap gap-6 sm:gap-10'>
          {LINKS.map(({ href, label, icon: Icon, hover, external }) => (
            <a
              key={label}
              href={href}
              target={external ? '_blank' : undefined}
              rel={external ? 'noopener noreferrer' : undefined}
              aria-label={label}
              className={`flex items-center gap-2 text-lg font-medium transition-colors ${hover}`}
            >
              <Icon /> {label}
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
