import { CONTACT_EMAIL, GITHUB_URL, LINKEDIN_URL } from '@/lib/data'
import { EmailIcon, GithubIcon, LinkedinIcon } from '../icons'
import { Flower1, Flower2, Flower3 } from '../shapes'
import { Reveal } from '../ui/Reveal'

const LINKS = [
  { href: `mailto:${CONTACT_EMAIL}`, label: 'Email', icon: EmailIcon, hover: 'hover:text-pink' },
  { href: LINKEDIN_URL, label: 'LinkedIn', icon: LinkedinIcon, hover: 'hover:text-teal', external: true },
  { href: GITHUB_URL, label: 'GitHub', icon: GithubIcon, hover: 'hover:text-coral', external: true },
]

const wiggle = 'motion-safe:animate-wiggle-slow'
const spinSlow = 'motion-safe:animate-spin-slow'
const float = 'motion-safe:animate-float'

export function Contact() {
  return (
    <section
      id='contact'
      className='section-block border-t-5 border-orange bg-cream px-4 py-24 text-ink sm:px-8'
    >
      <Flower2
        tone='carib'
        className={`pointer-events-none absolute -right-4 -top-2 h-72 w-72 rotate-12 sm:right-7 sm:h-96 sm:w-96 ${wiggle}`}
      />
      <Flower3
        tone='carib'
        className={`pointer-events-none absolute -bottom-8 -left-4 h-52 w-52 -rotate-8 sm:-bottom-12 sm:-left-1 sm:h-80 sm:w-80 ${wiggle}`}
      />
      <Flower1
        tone='carib'
        className={`pointer-events-none absolute -bottom-12 -right-6 h-40 w-40 sm:-bottom-14 sm:right-2 sm:h-64 sm:w-64 ${float}`}
      />
      <Flower1
        tone='carib'
        className={`pointer-events-none absolute -left-4 -top-4 h-36 w-36 sm:h-72 sm:w-72 ${spinSlow}`}
      />
      <Flower2
        tone='carib'
        className={`pointer-events-none absolute -bottom-26 left-2/5 hidden md:block md:h-52 md:w-52 lg:left-1/2 lg:h-64 lg:w-64 ${spinSlow}`}
      />

      <Reveal className='relative mx-auto w-full max-w-6xl'>
        <h2 className='sr-only'>Contact</h2>
        <ul className='mt-12 flex flex-wrap justify-center gap-6 sm:gap-10'>
          {LINKS.map(({ href, label, icon: Icon, hover, external }) => (
            <li key={label}>
              <a
                href={href}
                target={external ? '_blank' : undefined}
                rel={external ? 'noopener noreferrer' : undefined}
                className={`flex items-center gap-2 text-lg font-medium transition-colors ${hover}`}
              >
                <Icon /> {label}
              </a>
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  )
}
