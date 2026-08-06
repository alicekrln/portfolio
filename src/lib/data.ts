import { Code2, Globe, Layers3, Palette, PenTool, Wrench, type LucideIcon } from "lucide-react"

export type Tone = 'tangerine' | 'magenta' | 'teal' | 'mustard' | 'lilac'

export const NAV = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Stack', href: '#stack' },
  { label: 'Contact', href: '#contact' },
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
    tone: 'tangerine',
  },
  {
    icon: Layers3,
    name: 'Frontend',
    note: 'React, TanStack, Zustand, Motion, GSAP',
    tone: 'magenta',
  },
  {
    icon: Palette,
    name: 'Styling & UI',
    note: 'Tailwind CSS, Responsive Design, Accessibility (WCAG), Semantic HTML',
    tone: 'mustard',
  },
  {
    icon: Globe,
    name: 'Web Fundamentals',
    note: 'REST APIs, HTTP, Fetch API, Async/Await, DOM, Virtual DOM, JSON',
    tone: 'lilac',
  },
  {
    icon: Wrench,
    name: 'Development Tools',
    note: 'Git, GitHub, GitLab, npm, Node.js, Vite, VS Code',
    tone: 'teal',
  },
  {
    icon: PenTool,
    name: 'Design & Workflow',
    note: 'Figma, Affinity, Wireframing, Prototyping, UI/UX Design',
    tone: 'tangerine',
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
]

export const toneBg: Record<Tone, string> = {
  tangerine: 'bg-tangerine',
  magenta: 'bg-magenta',
  teal: 'bg-teal',
  mustard: 'bg-mustard',
  lilac: 'bg-lilac',
}

export const toneText: Record<Tone, string> = {
  tangerine: 'text-tangerine',
  magenta: 'text-magenta',
  teal: 'text-teal',
  mustard: 'text-mustard',
  lilac: 'text-lilac',
}

export type Project = {
 slug: string
 title: string
 tag: string
 desc: string
 stack: string[]
 tone: Tone
 year: string
 role: string
 overview: string 
}

export const PROJECTS: Project[] = [
  {
    slug: 'volly',
    title: 'Volly',
    tag: 'Volunteer platform',
    desc: 'A platform connecting people seeking support with volunteers through accessible and community-driven interactions.',
    stack: ['Figma', 'React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Vite', 'Docker'],
    tone: 'teal',
    year: '2026',
    role: 'UX Designer & Frontend Developer',
    overview:
      'Developed in a cross-functional team. The platform focuses on accessibility, intuitive user flows, and community-driven interactions through posts, messaging and video chat. My primary responsibility was designing the user experience in Figma, including wireframes, user flows, and interactive prototypes, while also contributing to the frontend implementation during the final stages of development.',
  },
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
    tone: 'magenta',
    year: '2026',
    role: 'Frontend Developer',
    overview:
      'MatchMatch is a browser game where players sort words into hidden categories without knowing the categories in advance. Data is dynamically fetched from the Wikipedia API using TanStack Query, while Zustand manages the game state. Features include a hint system, dynamic gameplay, score tracking, and a customizable interface with editable category cards, personalized colors, and Grid Mode for different screen layouts.',
  },
]