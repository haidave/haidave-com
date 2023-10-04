'use client'

import { useEffect, useRef, useState } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import { motion, useAnimationControls, useSpring, useTransform, type MotionValue } from 'framer-motion'

import { cn } from '~/lib/utils'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '~/modules/design-system/components/tooltip'

type DockItemProps = {
  href: string
  icon: NonNullable<React.ReactNode>
  tooltip: string
  shortcut: string
  mouseX: MotionValue
}

const DockItem: React.FC<DockItemProps> = ({ href, icon, tooltip, shortcut, mouseX }) => {
  const router = useRouter()
  const pathname = usePathname()
  const isActive = pathname === href || pathname.startsWith(`${href}/`)
  const [isTooltipOpen, setIsTooltipOpen] = useState(false)

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
      <TooltipProvider delayDuration={200}>
        <Tooltip defaultOpen={false}>
          <TooltipTrigger asChild>
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
                'relative grid aspect-square w-10 place-items-center rounded-full bg-secondary',
                'hover:bg-tertiary focus-visible:shadow-focus focus-visible:outline-0'
              )}
              onMouseEnter={() => setIsTooltipOpen(true)}
              onMouseLeave={() => setIsTooltipOpen(false)}
            >
              <div
                aria-hidden="true"
                className="absolute -top-px -z-10 h-full w-full rounded-full bg-linear-gradient-subtle"
              />
              {/* Hotfix to cover the linear gradient div which glitches on click*/}
              <div aria-hidden="true" className="absolute top-0 -z-10 h-full w-full rounded-full bg-tertiary" />
              <div className={cn('grid h-1/2 w-1/2 place-items-center', isActive ? 'text-secondary' : 'text-tertiary')}>
                {icon}
              </div>
            </motion.button>
          </TooltipTrigger>
          {isTooltipOpen ? (
            <TooltipContent>
              <div className="flex items-center gap-2 text-secondary">
                {tooltip}
                <span className="grid h-5 w-5 place-items-center rounded-md bg-tertiary font-bold">{shortcut}</span>
              </div>
            </TooltipContent>
          ) : null}
        </Tooltip>
      </TooltipProvider>
      {isActive ? <div className="absolute -bottom-2 left-1/2 h-1 w-1 rounded-full bg-[#a0a0a0]" /> : null}
    </motion.li>
  )
}

export { DockItem }
