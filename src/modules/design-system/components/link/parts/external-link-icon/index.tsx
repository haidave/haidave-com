'use client'

import { motion } from 'framer-motion'

type ExternalLinkIconProps = {
  variants: {
    hide: { pathLength: number }
    show: { pathLength: number }
  }
}

const ExternalLinkIcon = ({ variants }: ExternalLinkIconProps) => {
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
      className="-mt-0.5"
    >
      <path d="M13 5H19V11" />
      <motion.path d="M19 5L5 19" variants={variants} transition={{ duration: 0.5 }} />
    </svg>
  )
}

export { ExternalLinkIcon }
