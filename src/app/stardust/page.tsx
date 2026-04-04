import { Metadata } from 'next'

import CanvasBoard from './components/pixel-canvas'
import ColorPicker from './components/color-picker'

export const metadata: Metadata = {
  title: 'Stardust - astryss*',
  description: 'A collaborative pixel art canvas. Paint together, in real time.',
}

export default function CanvasPage() {
  return (
    <main className="main-container pt-12 md:pt-20 pb-20">
      <div>
        <h1 className="text-2xl text-text-900 font-semibold">Astryss Stardust</h1>
        <p className="text-sm text-text-600 mt-1">
          Click any pixel to paint it.
        </p>
      </div>

      <div className="flex flex-col items-center gap-6 mt-4">
        <CanvasBoard />

        <aside className="w-full max-w-md flex flex-col gap-4 bg-background border border-border rounded-xl p-4">
          <ColorPicker />
        </aside>
      </div>
    </main>
  )
}