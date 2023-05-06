'use client'

import { useEffect, useRef } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import { type MotionValue, motion, useTransform, useSpring, useAnimationControls } from 'framer-motion'

import { cn } from '~/lib/utils'

type DockItemProps = {
  href: string
  shortcut: string
  mouseX: MotionValue
}

const DockItem: React.FC<DockItemProps> = ({ href, shortcut, mouseX }) => {
  const router = useRouter()
  const pathname = usePathname()
  const isActive = pathname === href

  const ref = useRef<HTMLButtonElement>(null)
  const controls = useAnimationControls()

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === shortcut) {
        router.push(href)
        void controls.start(() => ({ translateY: [0, -30, 0] }))
      }
    }

    window.addEventListener('keypress', handleKeyPress)
  }, [router, href, shortcut, controls])

  const distance = useTransform(mouseX, (val) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 }

    return val - bounds.x - bounds.width / 2
  })
  const widthSync = useTransform(distance, [-100, 0, 100], [40, 80, 40])
  const width = useSpring(widthSync, { damping: 12, mass: 0.1, stiffness: 120 })

  return (
    <motion.li
      className="relative"
      onClick={() => {
        router.push(href)
        void controls.start(() => ({ translateY: [0, -30, 0] }))
      }}
    >
      <motion.button
        ref={ref}
        style={{ width }}
        animate={controls}
        transition={{
          default: {
            duration: 0.2,
          },
          translateY: {
            duration: 0.4,
            ease: 'easeInOut',
            times: [0, 0.5, 1],
          },
        }}
        whileTap={{ scale: isActive ? 1 : 0.8 }}
        className={cn(
          'grid aspect-square w-10 place-items-center rounded-full bg-tertiary',
          'hover:bg-secondary',
          isActive ? 'font-bold' : ''
        )}
      >
        {shortcut}
      </motion.button>
      {isActive ? <div className="absolute -bottom-2 left-1/2 h-1 w-1 rounded-full bg-[#7e7e7e]" /> : null}
    </motion.li>
  )
}

export { DockItem }
