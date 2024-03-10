'use client'

import NextLink from 'next/link'
import { motion } from 'framer-motion'

import { useCursorContext } from '~/lib/cursor-context-provider'
import { cn } from '~/lib/utils'

type LinkProps = {
  href: string
  isExternal?: boolean
  children: React.ReactNode
  className?: string
}

const MotionLink = motion(NextLink)

export const Link = ({ href, isExternal, children, className }: LinkProps) => {
  const target = isExternal ? '_blank' : undefined
  const rel = isExternal ? 'noopener noreferrer' : undefined
  const { setCanHover } = useCursorContext()

  return (
    <MotionLink
      href={href}
      target={target}
      rel={rel}
      className={cn(
        'group relative inline-flex items-center',
        'focus-visible:shadow-focus focus-visible:outline-0',
        className
      )}
      whileHover="show"
      initial="hide"
      onMouseEnter={() => setCanHover(true)}
      onMouseLeave={() => setCanHover(false)}
    >
      {children}
    </MotionLink>
  )
}
