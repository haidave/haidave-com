'use client'

import NextLink from 'next/link'
import { motion } from 'framer-motion'

import { cn } from '~/lib/utils'

import { ExternalLinkIcon } from './parts/external-link-icon'

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

  const iconVariants = {
    hide: { pathLength: 0.7 },
    show: { pathLength: 1 },
  }

  return (
    <MotionLink
      href={href}
      target={target}
      rel={rel}
      className={cn(
        'relative inline-flex items-center gap-px border-b-[1.5px] border-[#7e7e7e] pb-[1px]',
        'transition-colors duration-500 ease-in-out',
        'hover:border-[#ededed] focus-visible:shadow-focus focus-visible:outline-0',
        className
      )}
      whileHover="show"
      initial="hide"
    >
      {children}
      {isExternal ? <ExternalLinkIcon variants={iconVariants} /> : null}
    </MotionLink>
  )
}
