'use client'
// ↑ This line is what makes it a Client Component.
// Without this, useRef / useEffect / click handlers don't work.

import { useRef, useEffect, useCallback } from 'react'
import { useCanvasStore, COLS, ROWS } from '@/store/use-pixel-store'

// CELL_SIZE = how many screen pixels each "art pixel" takes up
// 8px per cell × 6 cols = 48px wide canvas (tiny for now, scales up later)
const CELL_SIZE = 8

export default function CanvasBoard() {
  // canvasRef is our handle to the actual <canvas> DOM element
  const canvasRef = useRef<HTMLCanvasElement>(null)

  const pixels = useCanvasStore((s) => s.pixels)
  const activeColor = useCanvasStore((s) => s.activeColor)
  const paintPixel = useCanvasStore((s) => s.paintPixel)

  // drawGrid runs every time 'pixels' changes in the store.
  // It loops through every pixel and fills a rectangle on the canvas.
  const drawGrid = useCallback(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    pixels.forEach((color, index) => {
      // Convert flat index back to row/col coordinates
      const col = index % COLS
      const row = Math.floor(index / COLS)

      // Fill the pixel cell with its color
      ctx.fillStyle = color
      ctx.fillRect(
        col * CELL_SIZE,  // x position on canvas
        row * CELL_SIZE,  // y position on canvas
        CELL_SIZE,        // width
        CELL_SIZE         // height
      )

      // Draw a subtle 1px border around each cell so grid is visible
      ctx.strokeStyle = 'rgba(0,0,0,0.08)'
      ctx.lineWidth = 0.5
      ctx.strokeRect(col * CELL_SIZE, row * CELL_SIZE, CELL_SIZE, CELL_SIZE)
    })
  }, [pixels])

  // Redraw every time pixels change
  useEffect(() => {
    drawGrid()
  }, [drawGrid])

  // When user clicks the canvas, figure out WHICH cell they clicked
  // by dividing the click position by CELL_SIZE
  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLCanvasElement>) => {
      const canvas = canvasRef.current
      if (!canvas) return

      const rect = canvas.getBoundingClientRect()
      // Mouse position relative to the canvas element
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top

      // Scale for device pixel ratio (important for sharp rendering on retina screens)
      const scaleX = canvas.width / rect.width
      const scaleY = canvas.height / rect.height

      const col = Math.floor((x * scaleX) / CELL_SIZE)
      const row = Math.floor((y * scaleY) / CELL_SIZE)

      // Guard: ignore clicks outside the grid
      if (col < 0 || col >= COLS || row < 0 || row >= ROWS) return

      const index = row * COLS + col
      paintPixel(index, activeColor)
    },
    [activeColor, paintPixel]
  )

  return (
    <canvas
      ref={canvasRef}
      width={COLS * CELL_SIZE}
      height={ROWS * CELL_SIZE}
      onClick={handleClick}
      // image-rendering: pixelated = no blur when CSS scales it up
      style={{ imageRendering: 'pixelated', cursor: 'crosshair' }}
      className="border border-border rounded"
    />
  )
}