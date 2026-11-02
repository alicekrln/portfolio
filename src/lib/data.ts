import type { StaticImageData } from 'next/image'
import matchmatchCover from '@/assets/projects/matchmatch/cover.jpg'
import matchmatchGrid from '@/assets/projects/matchmatch/grid.jpg'
import matchmatchRepo from '@/assets/projects/matchmatch/github.jpg'
import vollyCover from '@/assets/projects/volly/cover.jpg'
import vollyFigma from '@/assets/projects/volly/figma.jpg'
import vollyCall from '@/assets/projects/volly/videocall.jpg'
import bajenbankenCover from '@/assets/projects/bajenbanken/cover.png'
import karappenCover from '@/assets/projects/karappen/cover.jpg'
import karappenApp from '@/assets/projects/karappen/loggedin.jpg'
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
  | 'accent'
  | 'babyblue'
  | 'babypink'

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
  accent: 'bg-accent',
  babyblue: 'bg-babyblue',
  babypink: 'bg-babypink',
}

export const NAV = [
  { label: 'About', hash: 'about' },
  { label: 'Projects', hash: 'projects' },
  { label: 'Skills', hash: 'skills' },
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
    items: [
      'React',
      'React Native',
      'Next.js',
      'TanStack',
      'Zustand',
      'Motion',
      'GSAP',
      'Zod',
    ],
    tone: 'pink',
  },
  {
    icon: PaletteIcon,
    name: 'Styling & UI',
    items: [
      'Tailwind CSS',
      'Component Architecture',
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
    items: ['Node.js', 'Express', 'MySQL', 'Docker', 'AWS EC2'],
    tone: 'teal',
  },
  {
    icon: WrenchIcon,
    name: 'Development Tools',
    items: ['GitHub', 'npm', 'Vite', 'Vitest', 'Playwright'],
    tone: 'carib',
  },
  {
    icon: PenToolIcon,
    name: 'Design & Workflow',
    items: ['Figma', 'Affinity', 'Prototyping', 'UX Design'],
    tone: 'lime',
  },
]

export const MARQUEE = [
  'React',
  'Next.js',
  'TypeScript',
  'React Native',
  'Tailwind',
  'Motion',
  'GSAP',
  'Vite',
  'TanStack',
  'Zustand',
  'Figma',
  'Node.js',
  'Express',
  'MySQL',
  'Docker',
]

export const CONTACT_EMAIL = 'im@alicekarlen.com'
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
    slug: 'karappen',
    title: 'Kårappen',
    tag: 'Student union app',
    desc: 'A mobile app for a student union, where members find events and sign up, and the union creates and manages them. Built in two weeks as a team of two.',
    stack: [
      'React Native',
      'Expo',
      'Expo Router',
      'TypeScript',
      'Node.js',
      'Express',
      'PostgreSQL',
      'JWT',
      'bcrypt',
      'Docker',
      'GitHub Actions',
      'AWS EC2',
      'nginx',
    ],
    tone: 'babypink',
    tagTone: 'pink-soft',
    year: '2026',
    role: 'Full-stack developer (team of two)',
    overview:
      "Kårappen is the student union's member app. Members browse upcoming events, sign up or cancel, see their own registrations and edit their profile. Admins can also create, edit and delete events, and see attendee information.\n\nI built authentication: registration and login with bcrypt and JWT, the login and register screens, and storing the token in SecureStore on the phone. I also built the roles and permission middleware that separates members from admins, plus a seed script for the admin account. Then I built the profile, from the API with validation and tests to the profile screen with edit mode and profile picture upload.\n\nThe backend is covered by 62 tests that run against a real PostgreSQL database in GitHub Actions. They check that members can't touch admin routes or other people's data, and that invalid input is rejected. The API is only deployed to AWS EC2 when every test passes, and runs behind nginx with HTTPS from Let's Encryt.",
    cover: karappenCover,
    links: [
      {
        label: 'View repo',
        href: 'https://github.com/alicekrln/karappen',
        type: 'repo',
      },
    ],
    architecture: [
      'Expo app',
      'Express API',
      'PostgreSQL',
      'Docker Compose',
      'nginx + HTTPS',
      'AWS EC2',
    ],
    media: [
      {
        type: 'image',
        src: karappenCover,
        alt: 'Kårappen login and home page',
      },
      { type: 'image', src: karappenApp, alt: 'Kårappen logged in' },
    ],
  },
  {
    slug: 'bajenbanken',
    title: 'Bajenbanken',
    tag: 'Full-stack mock bank',
    desc: 'A satirical bank for Hammarby fans, and the project where I learned what happens behind the UI: databases, APIs, authentication, testing and deployment.',
    stack: [
      'Next.js',
      'TypeScript',
      'Tailwind CSS',
      'Express',
      'MySQL',
      'JWT',
      'bcrypt',
      'Docker',
      'GitHub Actions',
      'AWS EC2',
      'Vitest',
      'Playwright',
    ],
    tone: 'babyblue',
    tagTone: 'lime-soft',
    year: '2026',
    role: 'Full-stack developer (learning project)',
    overview:
      'Bajenbanken is a playful mock bank in green and white. You open an account, log in, deposit money with a note, and follow your transaction history. Your balance is also shown as how many beers it buys. The frontend is a Next.js app, but the project exists so I could learn the parts I had never touched before.\n\nAn Express API stores users, accounts and transactions in a MySQL database. I started out running MySQL locally with MAMP, then moved the whole stack into Docker containers with Docker Compose. Passwords are hashed with bcrypt, and logging in returns a short-lived JWT (15 minutes) that is sent as a Bearer token and only kept in memory, never in localStorage.\n\nEvery pull request and push to main runs a GitHub Actions pipeline: lint, build, Vitest unit tests and Playwright end-to-end tests that check the whole login flow, including that missing or tampered tokens are rejected. Only when everything passes is the new version deployed to an AWS EC2 instance over SSH.',
    cover: bajenbankenCover,
    links: [
      { label: 'Live demo', href: 'http://51.21.196.203:3000/', type: 'live' },
      {
        label: 'View repo',
        href: 'https://github.com/alicekrln/bajenbanken-cicd',
        type: 'repo',
      },
    ],
    architecture: [
      'Next.js frontend',
      'Express API',
      'MySQL database',
      'Docker Compose',
      'GitHub Actions',
      'AWS EC2',
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
    tone: 'babypink',
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
      {
        type: 'image',
        src: matchmatchGrid,
        alt: 'matchmatch game board in Grid Mode',
      },
      {
        type: 'image',
        src: matchmatchRepo,
        alt: 'matchmatch GitHub repository',
      },
    ],
  },
  {
    slug: 'volly',
    title: 'Volly',
    tag: 'Volunteer platform',
    desc: 'A platform connecting people seeking support with volunteers through accessible and community-driven interactions.',
    stack: ['Figma', 'React', 'TypeScript', 'Vite', 'Tailwind CSS'],
    tone: 'babyblue',
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
      {
        type: 'image',
        src: vollyFigma,
        alt: 'Volly component library in Figma',
      },
      { type: 'image', src: vollyCall, alt: 'Volly video call prototype' },
    ],
  },
]

export function getProject(slug: string) {
  return PROJECTS.find((p) => p.slug === slug)
}
