'use client'

import { type PropsWithChildren } from 'react'
import { motion } from 'framer-motion'

const PageTransitionContainer = ({ children }: PropsWithChildren) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  )
}

export { PageTransitionContainer }
