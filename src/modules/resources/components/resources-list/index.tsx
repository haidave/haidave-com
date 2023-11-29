'use client'

import { useMemo } from 'react'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { AnimatePresence, motion } from 'framer-motion'

import { ROUTES } from '~/config/routes'
import { cn } from '~/lib/utils'

import { CATEGORIES, RESOURCES } from '../../utils/const'
import { ResourceCard } from '../resource-card'

export default function ResourcesList() {
  const searchParams = useSearchParams()

  const updateSearchParams = (category: string) => {
    const params = new URLSearchParams(searchParams.toString())

    if (category === 'All') {
      params.delete('category')
    } else {
      params.set('category', category)
    }

    return `${ROUTES.resources}?${params.toString()}`
  }

  const filteredResources = useMemo(
    () =>
      RESOURCES.filter((resource) => {
        const selectedCategory = searchParams.getAll('category')[0]
        return selectedCategory && selectedCategory !== 'All' ? selectedCategory === resource.category : true
      }).sort((a, b) => a.name.localeCompare(b.name)),
    [searchParams]
  )

  return (
    <div className="mt-6 grid gap-6">
      <div className="-ml-4 flex flex-wrap gap-2 px-4">
        {CATEGORIES.map((category) => {
          const isSelectedCategory =
            searchParams.getAll('category').includes(category) ||
            (!searchParams.getAll('category')[0] && category === 'All')

          return (
            <Link
              key={category}
              href={updateSearchParams(category)}
              className={cn(
                'relative grid h-8 place-items-center rounded-full border px-4 text-sm font-medium text-white transition',
                'focus-visible:shadow-focus focus-visible:outline-0',
                isSelectedCategory ? '' : 'hover:bg-tertiary'
              )}
              style={{
                WebkitTapHighlightColor: 'transparent',
              }}
            >
              {isSelectedCategory && (
                <motion.span
                  layoutId="bubble"
                  className="absolute inset-0 z-10 bg-[#ededed] mix-blend-difference"
                  style={{ borderRadius: 9999 }}
                  transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                />
              )}
              {category}
            </Link>
          )
        })}
      </div>

      <div className="flex-1">
        <ul className="grid grid-cols-1 gap-3 min-[450px]:grid-cols-2 sm:grid-cols-3">
          <AnimatePresence initial={false}>
            {filteredResources.map((resource) => (
              <motion.li
                layout
                key={resource.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1, transition: { delay: 0.2 } }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ opacity: { duration: 0.2 } }}
              >
                <ResourceCard resource={resource} />
              </motion.li>
            ))}
          </AnimatePresence>
        </ul>
      </div>
    </div>
  )
}
