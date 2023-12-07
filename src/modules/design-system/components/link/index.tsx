'use client'

import NextLink from 'next/link'
import { motion } from 'framer-motion'
import { useAppContext } from '~/context/app-context-provider'

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
  const { isMobile } = useAppContext()
  const target = isExternal ? '_blank' : undefined
  const rel = isExternal ? 'noopener noreferrer' : undefined

  const iconVariants = {
    hide: { pathLength: isMobile ? 1 : 0.7 },
    show: { pathLength: 1 },
  }

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
    >
      {children}
      {isExternal ? <ExternalLinkIcon variants={iconVariants} /> : null}
      <>
        <span className={cn('absolute -bottom-px left-1/2 h-[1.5px] w-full -translate-x-1/2 bg-[#7e7e7e]')} />
        <span
          className={cn(
            'absolute -bottom-px left-1/2 h-[1.5px] w-0 -translate-x-1/2 bg-[#ededed]',
            'origin-center transition-all duration-500 ease-in-out',
            'group-hover:w-full'
          )}
        />
      </>
    </MotionLink>
  )
}
