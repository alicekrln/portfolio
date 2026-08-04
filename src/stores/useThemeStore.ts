import { create } from 'zustand'

export type Theme = 'light' | 'dark' | 'wild'

type ThemeStore = {
  theme: Theme
  setTheme: (theme: Theme) => void
  cycleTheme: () => void
  hydrate: () => void
}

const THEMES: Theme[] = ['light', 'dark', 'wild']
const STORAGE_KEY = 'theme'

function applyTheme(theme: Theme) {
  if (typeof document === 'undefined') return
  const root = document.documentElement
  root.classList.remove('dark', 'wild')
  if (theme === 'dark') root.classList.add('dark')
  if (theme === 'wild') root.classList.add('wild')
}

function initialTheme(): Theme {
  if (typeof window === 'undefined') return 'light'
  const stored = window.localStorage.getItem(STORAGE_KEY) as Theme | null
  if (stored && THEMES.includes(stored)) return stored
  return window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light'
}

export const useThemeStore = create<ThemeStore>((set, get) => ({
  theme: 'light',
  setTheme: (theme) => {
    applyTheme(theme)
    if (typeof window !== 'undefined')
      window.localStorage.setItem(STORAGE_KEY, theme)
    set({ theme })
  },
  cycleTheme: () => {
    const idx = THEMES.indexOf(get().theme)
    const next = THEMES[(idx + 1) % THEMES.length]
    get().setTheme(next)
  },
  hydrate: () => {
    const t = initialTheme()
    applyTheme(t)
    set({ theme: t })
  },
}))
