'use client'

import { motion } from 'framer-motion'

import { cn } from '~/lib/utils'

type ExternalLinkIconProps = {
  variants?: {
    hide: { pathLength: number }
    show: { pathLength: number }
  }
  className?: string
}

const ExternalLinkIcon = ({ variants, className }: ExternalLinkIconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn('-mt-0.5', className)}
    >
      <path d="M13 5H19V11" />
      <motion.path d="M19 5L5 19" variants={variants} transition={{ duration: 0.5 }} />
    </svg>
  )
}

export { ExternalLinkIcon }
