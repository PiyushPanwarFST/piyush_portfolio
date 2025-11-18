'use client'

import { useEffect, useState } from 'react'

export default function CursorEffect() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <>
      {/* Cursor follower - only on desktop */}
      <div
        className="hidden md:block fixed pointer-events-none z-50 mix-blend-difference"
        style={{
          left: mousePosition.x - 8,
          top: mousePosition.y - 8,
          transition: 'transform 0.15s ease-out',
        }}
      >
        <div className="w-4 h-4 rounded-full bg-white dark:bg-white"></div>
      </div>

      {/* Gradient blob that follows cursor */}
      <div
        className="hidden md:block fixed pointer-events-none z-0 opacity-20 dark:opacity-10"
        style={{
          left: mousePosition.x - 150,
          top: mousePosition.y - 150,
          transition: 'all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        }}
      >
        <div className="w-72 h-72 rounded-full bg-gradient-to-r from-primary to-secondary blur-3xl"></div>
      </div>
    </>
  )
}

