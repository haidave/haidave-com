'use client'

import { useEffect, useState } from 'react'
import { motion, useMotionValue } from 'framer-motion'

import { useCursorContext } from '~/lib/cursor-context-provider'
import { cn } from '~/lib/utils'

const CURSOR_SIZE = 20

const Cursor = () => {
  const { canHover } = useCursorContext()
  const [isMouseDown, setIsMouseDown] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  const mouse = {
    x: useMotionValue(-10),
    y: useMotionValue(-10),
  }

  const handleMouseMove = (event: MouseEvent) => {
    const { clientX, clientY } = event
    mouse.x.set(clientX - CURSOR_SIZE / 2)
    mouse.y.set(clientY - CURSOR_SIZE / 2)
  }

  useEffect(() => {
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0
    if (!isTouchDevice) {
      setIsVisible(true)
    }
  }, [])

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  })

  useEffect(() => {
    const handleMouseDown = () => {
      setIsMouseDown(true)
    }
    const handleMouseUp = () => {
      setIsMouseDown(false)
    }

    window.addEventListener('mousedown', handleMouseDown)
    window.addEventListener('mouseup', handleMouseUp)

    return () => {
      window.removeEventListener('mousedown', handleMouseDown)
      window.removeEventListener('mouseup', handleMouseUp)
    }
  })

  return isVisible ? (
    <motion.div
      className={cn(
        'pointer-events-none fixed left-0 top-0 z-50 flex h-5 w-5 items-center justify-center mix-blend-difference'
      )}
      style={{
        translateY: mouse.y,
        translateX: mouse.x,
      }}
    >
      {/* top */}
      <div
        className={cn(
          'absolute left-1/2 top-0 h-1.5 w-0.5 -translate-x-1/2 bg-black transition duration-300 dark:bg-white',
          canHover ? 'h-2.5 -translate-y-3.5' : '',
          isMouseDown ? 'translate-y-1' : ''
        )}
      />

      {/* right */}
      <div
        className={cn(
          'absolute right-0 top-1/2 h-0.5 w-1.5 -translate-y-1/2 bg-black transition duration-300 dark:bg-white',
          canHover ? 'w-2.5 translate-x-3.5' : '',
          isMouseDown ? '-translate-x-1' : ''
        )}
      />

      {/* bottom */}
      <div
        className={cn(
          'absolute bottom-0 left-1/2 h-1.5 w-0.5 -translate-x-1/2 bg-black transition duration-300 dark:bg-white',
          canHover ? 'h-2.5 translate-y-3.5' : '',
          isMouseDown ? '-translate-y-1' : ''
        )}
      />

      {/* left */}
      <div
        className={cn(
          'absolute left-0 top-1/2 h-0.5 w-1.5 -translate-y-1/2 bg-black transition duration-300 dark:bg-white',
          canHover ? 'w-2.5 -translate-x-3.5' : '',
          isMouseDown ? 'translate-x-1' : ''
        )}
      />
    </motion.div>
  ) : null
}

export { Cursor }
