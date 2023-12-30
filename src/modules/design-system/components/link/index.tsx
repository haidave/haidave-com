'use client'

import NextLink from 'next/link'
import { motion } from 'framer-motion'

import { useCursorContext } from '~/lib/cursor-context-provider'
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
  const { setCanHover } = useCursorContext()

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
      {isExternal ? (
        <>
          <ExternalLinkIcon variants={iconVariants} className="hidden sm:block" />
          <ExternalLinkIcon className="block sm:hidden" />
        </>
      ) : null}
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
