import matchmatchCover from '@/components/projects/matchmatch/cover.jpg'
import matchmatchGrid from '@/components/projects/matchmatch/grid.jpg'
import matchmatchRepo from '@/components/projects/matchmatch/github.jpg'
import vollyCover from '@/components/projects/volly/cover.jpg'
import vollyFigma from '@/components/projects/volly/figma.jpg'
import vollyCall from '@/components/projects/volly/videocall.jpg'
import {
  Code2,
  Globe,
  Layers3,
  Palette,
  PenTool,
  Wrench,
  type LucideIcon,
} from 'lucide-react'


export type Tone =
  'coral' | 'teal' | 'violet' | 'pink' | 'lime' | 'sun' | 'carib' | 'softPink' | 'softLime' | 'ink' | 'about'

export const NAV = [
  { label: 'About', hash: 'about' },
  { label: 'Projects', hash: 'projects' },
  { label: 'Stack', hash: 'stack' },
  { label: 'Contact', hash: 'contact' },
]

export type Skill = {
  icon: LucideIcon
  name: string
  note: string
  tone: Tone
}

export const SKILLS: Skill[] = [
  {
    icon: Code2,
    name: 'Languages',
    note: 'HTML5, CSS3, JavaScript, TypeScript',
    tone: 'coral',
  },
  {
    icon: Layers3,
    name: 'Frontend',
    note: 'React, TanStack, Zustand, Motion, GSAP, Node.js, Vite, Next.js',
    tone: 'pink',
  },
  {
    icon: Palette,
    name: 'Styling & UI',
    note: 'Tailwind CSS, Responsive Design, Accessibility (WCAG), Semantic HTML',
    tone: 'sun',
  },
  {
    icon: Globe,
    name: 'Web Fundamentals',
    note: 'REST APIs, HTTP, Fetch API, Async/Await, DOM, Virtual DOM, JSON',
    tone: 'violet',
  },
  {
    icon: Wrench,
    name: 'Development Tools',
    note: 'Git, GitHub, GitLab, npm, Zod, Vercel',
    tone: 'carib',
  },
  {
    icon: PenTool,
    name: 'Design & Workflow',
    note: 'Figma, Affinity, Wireframing, Prototyping, UI/UX Design',
    tone: 'lime',
  },
]

export const MARQUEE = [
  'React',
  'TypeScript',
  'Tailwind',
  'Motion',
  'GSAP',
  'Vite',
  'Radix',
  'Next.js',
  'TanStack',
  'Node',
  'Zustand',
  'Figma',
  'Affinity',
  'npm',
  'shadcn',
  'Zod',
  'Vercel',
]

export const toneBg: Record<Tone, string> = {
  coral: 'bg-coral',
  teal: 'bg-teal',
  violet: 'bg-violet',
  pink: 'bg-pink',
  lime: 'bg-lime',
  sun: 'bg-sun',
  carib: 'bg-carib',
  softPink: 'bg-softPink',
  softLime: 'bg-softLime',
  ink: 'bg-ink',
  about: 'bg-about-bg'
}

export const toneText: Record<Tone, string> = {
  coral: 'text-coral',
  teal: 'text-teal',
  violet: 'text-violet',
  pink: 'text-pink',
  lime: 'text-lime',
  sun: 'text-sun',
  carib: 'text-carib',
  softPink: 'text-softPink',
  softLime: 'text-softLime',
  ink: 'text-ink',
  about: 'text-about-bg'
}

export const toneColor: Record<Tone, string> = {
  coral: 'var(--color-coral)',
  teal: 'var(--color-teal)',
  violet: 'var(--color-violet)',
  pink: 'var(--color-pink)',
  lime: 'var(--color-lime)',
  sun: 'var(--color-sun)',
  carib: 'var(--color-carib)',
  softPink: 'var(--color-softPink)',
  softLime: 'var(--color-softLime)',
  ink: 'var(--color-ink)',
  about: 'var(--color-about-bg)',
}

export type ProjectLink = {
  label: string
  href: string
  type: 'repo' | 'live' | 'figma'
}

export type ProjectMedia =
  | { type: 'image'; src: string; alt: string }
  | { type: 'video'; src: string; poster?: string }
  | { type: 'figma-embed'; embedUrl: string; title: string }

export type Project = {
  slug: string
  title: string
  tag: string
  desc: string
  stack: string[]
  tone: Tone
  tagTone: Tone
  year: string
  role: string
  overview: string
  cover: string
  links: ProjectLink[]
  media: ProjectMedia[]
}

export const PROJECTS: Project[] = [
  {
    slug: 'matchmatch',
    title: 'matchmatch',
    tag: 'Browser game',
    desc: 'A category puzzle game powered by the Wikipedia API where players discover hidden connections between words.',
    stack: [
      'React',
      'TypeScript',
      'Tanstack Query',
      'Zustand',
      'Vite',
      'Tailwind CSS',
      'Figma',
      'shadcn/ui',
    ],
    tone: 'pink',
    tagTone: 'softPink',
    year: '2026',
    role: 'Frontend Developer',
    overview:
      'matchmatch is a browser game where players sort words into hidden categories without knowing the categories in advance. Data is dynamically fetched from the Wikipedia API using TanStack Query, while Zustand manages the game state. Features include a hint system, dynamic gameplay, score tracking, and a customizable interface with editable category cards, personalized colors, and Grid Mode for different game board layouts.',
    cover: matchmatchCover,
    links: [
      {
        label: 'Play the game',
        href: 'https://eijnewe.github.io/match-match/',
        type: 'live',
      },
      {
        label: 'View repo',
        href: 'https://github.com/alicekrln/match-match',
        type: 'repo',
      },
    ],
    media: [
      {
        type: 'image',
        src: matchmatchGrid,
        alt: 'Game layout',
      },
      {
        type: 'image',
        src: matchmatchRepo,
        alt: 'Github repo',
      },
    ],
  },
  {
    slug: 'volly',
    title: 'Volly',
    tag: 'Volunteer platform',
    desc: 'A platform connecting people seeking support with volunteers through accessible and community-driven interactions.',
    stack: ['Figma', 'React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Docker'],
    tone: 'lime',
    tagTone: 'softLime',
    year: '2026',
    role: 'UX Designer & Frontend Developer',
    overview:
      'Developed in a cross-functional team. The platform focuses on accessibility, intuitive user flows, and community-driven interactions through posts, messaging and video chat. My primary responsibility was designing the user experience in Figma, including wireframes, user flows, and interactive prototypes, while also contributing to the frontend implementation during the final stages of development.\n\nDemo login: dl@volly.se pw: demo123',
    cover: vollyCover,
    links: [
      {
        label: 'Staged site',
        href: 'https://volly-staging.cc.k3s.chas-lab.dev/',
        type: 'live',
      },
      {
        label: 'Figma wireframes',
        href: 'https://www.figma.com/design/UVVS19GS7fFJaawM5VLkZp/Volly---Chas-Challange--Copy-?node-id=0-1&t=hmAoYD1PAVT7PN3I-1',
        type: 'figma',
      },
    ],
    media: [
      {
        type: 'figma-embed',
        embedUrl:
          'https://embed.figma.com/proto/UVVS19GS7fFJaawM5VLkZp/Zero-Bugs-Hero--Copy-?node-id=389-943&p=f&scaling=scale-down-width&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=389%3A943&embed-host=share&footer=false',
        title: '',
      },
      {
        type: 'image',
        src: vollyFigma,
        alt: 'Figma components',
      },
      {
        type: 'image',
        src: vollyCall,
        alt: 'Videocall prototype',
      },
    ],
  },
]
