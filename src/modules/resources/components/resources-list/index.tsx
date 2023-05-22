'use client'

import { useState } from 'react'
import Link from 'next/link'

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
              'h-6 rounded-full border border-[#232323] px-3 text-xs font-medium text-white',
              selectedCategory === category || (category === 'All' && !selectedCategory)
                ? 'bg-tertiary'
                : 'hover:bg-secondary'
            )}
          >
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
            className={cn('-mx-4 flex items-center gap-4 rounded-xl px-4', 'hover:bg-tertiary')}
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
