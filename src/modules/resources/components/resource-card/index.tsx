'use client'

import { type MouseEvent } from 'react'
import Link from 'next/link'
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion'
import { ExternalLinkIcon } from 'lucide-react'

import { cn } from '~/lib/utils'

import { type Resource } from '../../utils/types'

type ResourceCardProps = {
  resource: Resource
}

const ResourceCard = ({ resource }: ResourceCardProps) => {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const handleMouseMove = ({ currentTarget, clientX, clientY }: MouseEvent) => {
    const { left, top } = currentTarget.getBoundingClientRect()

    mouseX.set(clientX - left)
    mouseY.set(clientY - top)
  }

  return (
    <Link
      href={resource.url}
      target="_blank"
      className={cn(
        'group relative flex h-full select-none flex-col justify-between rounded-xl border',
        'transition-colors duration-300 ease-in-out',
        'focus-visible:shadow-focus focus-visible:outline-0'
      )}
      onMouseMove={handleMouseMove}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px -z-10 rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`radial-gradient(250px circle at ${mouseX}px ${mouseY}px, #232323, transparent 80%)`,
        }}
        aria-hidden
      />

      <div className="px-4 pb-4 pt-3">
        <p>{resource.name}</p>
        <p className="line-clamp-2 text-sm text-secondary sm:text-xs">{resource.description}</p>
      </div>

      <div className="mt-auto flex items-center justify-between px-4 pb-4 pt-2">
        <div className="grid h-6 place-items-center rounded-full bg-secondary px-3 text-xs text-tertiary">
          {resource.subcategory}
        </div>
        <ExternalLinkIcon size={18} className="text-tertiary transition-colors duration-300 ease-in-out" />
      </div>
    </Link>
  )
}

export { ResourceCard }
