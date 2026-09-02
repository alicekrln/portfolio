import { create } from 'zustand'

type IntroStore = {
  nameRevealed: boolean
  setNameRevealed: () => void
}

export const useIntroStore = create<IntroStore>((set) => ({
  nameRevealed: false,
  setNameRevealed: () => set({ nameRevealed: true }),
}))
