'use client'

import { useCanvasStore } from "@/store/use-pixel-store"

const PALETTE = [
  '#000000', '#FFFFFF', '#FF0000', '#FF6B00',
  '#FFD700', '#00C851', '#007BFF', '#6F42C1',
  '#FF69B4', '#00CED1', '#8B4513', '#808080',
]

export default function ColorPicker() {
  const activeColor = useCanvasStore((s) => s.activeColor)
  const setActiveColor = useCanvasStore((s) => s.setActiveColor)

  return (
    <div className="flex flex-col gap-2">
      <p className="text-sm text-muted-foreground">Color</p>

      {/* Preset palette swatches */}
      <div className="flex flex-wrap gap-1">
        {PALETTE.map((color) => (
          <button
            key={color}
            onClick={() => setActiveColor(color)}
            className="w-7 h-7 rounded border-2 transition-transform hover:scale-110"
            style={{
              backgroundColor: color,
              // Ring around the active color
              borderColor: activeColor === color ? '#000' : 'transparent',
            }}
            title={color}
          />
        ))}
      </div>

      {/* Native color input for custom colors */}
      <div className="flex items-center gap-2">
        <input
          type="color"
          value={activeColor}
          onChange={(e) => setActiveColor(e.target.value)}
          className="w-7 h-7 cursor-pointer rounded border border-border"
        />
        <span className="text-xs font-mono text-muted-foreground">
          {activeColor}
        </span>
      </div>
    </div>
  )
}