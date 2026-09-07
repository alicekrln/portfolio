import { create } from 'zustand'

export type IntroPhase = 'name' | 'nav' | 'done'

type IntroStore = {
  phase: IntroPhase
  setPhase: (phase: IntroPhase) => void
}

export const useIntroStore = create<IntroStore>((set) => ({
  phase: 'name',
  setPhase: (phase) => set({ phase }),
}))
