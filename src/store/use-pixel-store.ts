import { create } from "zustand";

export const COLS = 156
export const ROWS = 90
export const TOTAL = COLS * ROWS  

interface CanvasStore {
  pixels: string[]
  activeColor: string
  paintPixel: (index: number, color: string) => void
  setActiveColor: (color: string) => void
}

export const useCanvasStore = create<CanvasStore>((set) => ({
  pixels: Array(TOTAL).fill('#FFFFFF'),
  activeColor: '#FF0000',

  paintPixel: (index, color) =>
    set((state) => {
      // We never mutate the array directly — we make a copy
      const next = [...state.pixels]
      next[index] = color
      return { pixels: next }
    }),

  setActiveColor: (color) => set({ activeColor: color }),
}));