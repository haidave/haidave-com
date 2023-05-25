'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

import { cn } from '~/lib/utils'

import { resources, resourcesCategories } from '../../data'

export default function ResourcesList() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  const filteredResources = selectedCategory
    ? resources.filter((resource) => resource.category === selectedCategory)
    : resources

  return (
    <div className="mt-6 grid gap-5">
      <div className="flex gap-2">
        {resourcesCategories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category === 'All' ? null : category)}
            className={cn(
              'relative h-6 rounded-full border border-[#232323] px-3 text-xs font-medium text-white transition',
              'focus-visible:shadow-focus focus-visible:outline-0',
              selectedCategory === category || (category === 'All' && !selectedCategory) ? '' : 'hover:bg-secondary'
            )}
            style={{
              WebkitTapHighlightColor: 'transparent',
            }}
          >
            {selectedCategory === category || (category === 'All' && !selectedCategory) ? (
              <motion.span
                layoutId="bubble"
                className="absolute inset-0 z-10 bg-[#ededed] mix-blend-difference"
                style={{ borderRadius: 9999 }}
                transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
              />
            ) : null}
            {category}
          </button>
        ))}
      </div>

      <div>
        {filteredResources.map((resource, index) => (
          <Link
            key={resource.id}
            href={resource.url}
            target="_blank"
            className={cn(
              '-mx-4 mt-[-0.0625rem] flex items-center gap-4 rounded-xl px-4',
              'hover:bg-tertiary focus-visible:shadow-focus focus-visible:outline-0'
            )}
          >
            <div className="h-6 w-6 bg-black" />
            <div
              className={cn(
                'flex w-full items-center justify-between py-4',
                index !== 0 ? 'border-t border-[#232323]' : ''
              )}
            >
              <div>
                <p>{resource.name}</p>
                <p className="text-sm text-secondary">{resource.description}</p>
              </div>
              <div className="grid h-6 place-items-center rounded-full bg-secondary px-3 text-xs text-tertiary">
                {resource.category}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
