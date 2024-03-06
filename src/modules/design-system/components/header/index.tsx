'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion, useMotionValueEvent, useScroll } from 'framer-motion'

const Header = () => {
  const [isHidden, setIsHidden] = useState(false)
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

  return (
    <motion.header
      variants={{
        visible: { y: 0 },
        hidden: { y: '-100%' },
      }}
      animate={isHidden ? 'hidden' : 'visible'}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
      className="fixed inset-x-0 top-0 z-10 mx-auto flex w-full max-w-[120rem] items-center justify-between px-12 py-6 mix-blend-difference"
    >
      {/* logo */}
      <Link href="/">
        <span className="text-xl font-medium uppercase">Dave Nguyen</span>
      </Link>

      <button className="rounded-lg border px-4 py-1 text-sm uppercase">AVAILABLE FOR WORK</button>
    </motion.header>
  )
}

export { Header }
