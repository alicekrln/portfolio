import type { StaticImageData } from 'next/image'

import matchmatchCover from '@/assets/projects/matchmatch/cover.jpg'
import matchmatchGrid from '@/assets/projects/matchmatch/grid.jpg'
import matchmatchRepo from '@/assets/projects/matchmatch/github.jpg'
import vollyCover from '@/assets/projects/volly/cover.jpg'
import vollyFigma from '@/assets/projects/volly/figma.jpg'
import vollyCall from '@/assets/projects/volly/videocall.jpg'
import bajenbankenCover from '@/assets/projects/bajenbanken/cover.png'
import {
  CodeIcon,
  GlobeIcon,
  LayersIcon,
  PaletteIcon,
  PenToolIcon,
  ServerIcon,
  WrenchIcon,
  type Icon,
} from '@/components/icons'

export type Tone =
  | 'coral'
  | 'teal'
  | 'teal-soft'
  | 'violet'
  | 'pink'
  | 'pink-soft'
  | 'lime'
  | 'lime-soft'
  | 'sun'
  | 'carib'
  | 'orange'

export const toneBg: Record<Tone, string> = {
  coral: 'bg-coral',
  teal: 'bg-teal',
  'teal-soft': 'bg-teal-soft',
  violet: 'bg-violet',
  pink: 'bg-pink',
  'pink-soft': 'bg-pink-soft',
  lime: 'bg-lime',
  'lime-soft': 'bg-lime-soft',
  sun: 'bg-sun',
  carib: 'bg-carib',
  orange: 'bg-orange',
}

export const NAV = [
  { label: 'About', hash: 'about' },
  { label: 'Projects', hash: 'projects' },
  { label: 'Stack', hash: 'stack' },
  { label: 'Contact', hash: 'contact' },
]

export type Skill = {
  icon: Icon
  name: string
  items: string[]
  tone: Tone
}

export const SKILLS: Skill[] = [
  {
    icon: CodeIcon,
    name: 'Languages',
    items: ['HTML5', 'CSS3', 'JavaScript', 'TypeScript'],
    tone: 'coral',
  },
  {
    icon: LayersIcon,
    name: 'Frontend',
    items: ['React', 'Next.js', 'TanStack', 'Zustand', 'Motion', 'GSAP', 'Zod'],
    tone: 'pink',
  },
  {
    icon: PaletteIcon,
    name: 'Styling & UI',
    items: [
      'Tailwind CSS',
      'shadcn/ui',
      'Radix UI',
      'Responsive design',
      'Accessibility (WCAG)',
      'Semantic HTML',
    ],
    tone: 'sun',
  },
  {
    icon: GlobeIcon,
    name: 'Web Fundamentals',
    items: ['REST APIs', 'DOM', 'Virtual DOM'],
    tone: 'violet',
  },
  {
    icon: ServerIcon,
    name: 'Backend & DevOps',
    items: [
      'Node.js',
      'Express',
      'MySQL',
      'MAMP',
      'Docker',
      'Docker Compose',
      'GitHub Actions (CI/CD)',
      'AWS EC2',
    ],
    tone: 'teal',
  },
  {
    icon: WrenchIcon,
    name: 'Development Tools',
    items: ['Git', 'GitHub', 'GitLab', 'npm', 'Vite', 'Vercel', 'Vitest', 'Playwright'],
    tone: 'carib',
  },
  {
    icon: PenToolIcon,
    name: 'Design & Workflow',
    items: ['Figma', 'Wireframing', 'Prototyping', 'UI/UX Design'],
    tone: 'lime',
  },
]

export const MARQUEE = [
  'React',
  'Next.js',
  'TypeScript',
  'Tailwind',
  'Motion',
  'GSAP',
  'Vite',
  'RadixUI',
  'TanStack',
  'Zustand',
  'Figma',
  'npm',
  'shadcn',
  'Zod',
  'Vercel',
  'Node.js',
  'Express',
  'MySQL',
  'Docker',
  'AWS',
]

export const CONTACT_EMAIL = 'alice.karlen@hotmail.com'
export const GITHUB_URL = 'https://github.com/alicekrln'
export const LINKEDIN_URL = 'https://www.linkedin.com/in/alicekarlen/'

export type ProjectLink = {
  label: string
  href: string
  type: 'repo' | 'live' | 'figma'
}

export type ProjectMedia =
  | { type: 'image'; src: StaticImageData; alt: string }
  | { type: 'video'; src: string; poster?: string; title: string }
  | { type: 'figma-embed'; embedUrl: string; title: string }

export type Project = {
  slug: string
  title: string
  status?: string
  tag: string
  desc: string
  stack: string[]
  tone: Tone
  tagTone: Tone
  year: string
  role: string
  overview: string
  cover: StaticImageData
  links: ProjectLink[]
  architecture?: string[]
  nextUp?: string[]
  media: ProjectMedia[]
}

export const PROJECTS: Project[] = [
  {
    slug: 'bajenbanken',
    title: 'Bajenbanken',
    status: 'In development',
    tag: 'Full-stack mock bank',
    desc: 'A satirical bank for Hammarby fans, and my playground for learning what happens behind the UI: databases, APIs, Docker and deployment.',
    stack: [
      'Next.js',
      'TypeScript',
      'Tailwind CSS',
      'Express',
      'MySQL',
      'Docker',
      'GitHub Actions',
      'AWS EC2',
      'Vitest',
      'Playwright',
    ],
    tone: 'lime',
    tagTone: 'lime-soft',
    year: '2026',
    role: 'Full-stack developer (learning project)',
    overview:
      'Bajenbanken is a playful mock bank in green and white, where you can open an account, log in and check your balance. The frontend is a Next.js app, but the project exists so I can learn the parts I had never touched before.\n\nAn Express API handles users, sessions and accounts, and stores everything in a MySQL database. I started out running MySQL locally with MAMP, then moved the whole stack into Docker containers with Docker Compose. Every push to main runs a GitHub Actions pipeline that lints and builds the frontend, installs the backend, and then deploys the new version to an AWS EC2 instance over SSH.',
    cover: bajenbankenCover,
    links: [
      { label: 'Live demo', href: 'http://51.21.196.203:3000/', type: 'live' },
      { label: 'View repo', href: 'https://github.com/alicekrln/bajenbanken-cicd', type: 'repo' },
    ],
    architecture: [
      'Next.js frontend',
      'Express API',
      'MySQL database',
      'Docker Compose',
      'AWS EC2',
    ],
    nextUp: [
      'Unit tests with Vitest',
      'End-to-end tests with Playwright',
      'Running the tests in the CI pipeline before every deploy',
    ],
    media: [
      { type: 'image', src: bajenbankenCover, alt: 'Bajenbanken start page' },
    ],
  },
  {
    slug: 'matchmatch',
    title: 'matchmatch',
    tag: 'Browser game',
    desc: 'A category puzzle game powered by the Wikipedia API where players discover hidden connections between words.',
    stack: [
      'React',
      'TypeScript',
      'TanStack Query',
      'Zustand',
      'Vite',
      'Tailwind CSS',
      'Figma',
      'shadcn/ui',
    ],
    tone: 'pink',
    tagTone: 'pink-soft',
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
      { type: 'image', src: matchmatchGrid, alt: 'matchmatch game board in Grid Mode' },
      { type: 'image', src: matchmatchRepo, alt: 'matchmatch GitHub repository' },
    ],
  },
  {
    slug: 'volly',
    title: 'Volly',
    tag: 'Volunteer platform',
    desc: 'A platform connecting people seeking support with volunteers through accessible and community-driven interactions.',
    stack: ['Figma', 'React', 'TypeScript', 'Vite', 'Tailwind CSS'],
    tone: 'lime',
    tagTone: 'lime-soft',
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
        title: 'Volly interactive Figma prototype',
      },
      { type: 'image', src: vollyFigma, alt: 'Volly component library in Figma' },
      { type: 'image', src: vollyCall, alt: 'Volly video call prototype' },
    ],
  },
]

export function getProject(slug: string) {
  return PROJECTS.find((p) => p.slug === slug)
}
