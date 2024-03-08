'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion, useMotionValueEvent, useScroll } from 'framer-motion'

import { cn } from '~/lib/utils'

const Header = () => {
  const [isHidden, setIsHidden] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { scrollY, scrollYProgress } = useScroll()

  useMotionValueEvent(scrollY, 'change', (latest) => {
    const previous = scrollY.getPrevious()

    if (latest > previous && latest > 150) {
      setIsHidden(true)
    } else {
      setIsHidden(false)
    }

    // show header when scroll to the bottom
    if (scrollYProgress.get() > 0.99) {
      setIsHidden(false)
    }
  })

  const handleOpenMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <motion.header
      variants={{
        visible: { y: 0 },
        hidden: { y: '-100%' },
      }}
      animate={isHidden ? 'hidden' : 'visible'}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
      className="fixed inset-x-0 top-0 z-50 mx-auto flex w-full max-w-[120rem] items-center justify-between px-6 py-4 mix-blend-difference sm:px-12 sm:py-6"
    >
      {/* logo */}
      <Link href="/">
        <span className="text-xl font-medium uppercase">Dave Nguyen</span>
      </Link>

      <div>
        <button className="hidden rounded-lg border px-4 py-1 text-sm uppercase sm:block">AVAILABLE FOR WORK</button>
        <button onClick={handleOpenMenu} className="-mr-3 grid h-12 w-12 place-content-center gap-1.5 sm:hidden">
          <div
            className={cn(
              'h-0.5 w-6 bg-white transition-transform duration-300 ease-in-out',
              isMenuOpen ? 'translate-y-2 rotate-45' : 'rotate-0'
            )}
          />
          <div
            className={cn(
              'h-0.5 w-6 bg-white transition-opacity duration-300 ease-in-out',
              isMenuOpen ? 'opacity-0' : 'opacity-1'
            )}
          />
          <div
            className={cn(
              'h-0.5 w-6 bg-white transition-transform duration-300 ease-in-out',
              isMenuOpen ? '-translate-y-2 -rotate-45' : 'rotate-0'
            )}
          />
        </button>
      </div>
    </motion.header>
  )
}

export { Header }
