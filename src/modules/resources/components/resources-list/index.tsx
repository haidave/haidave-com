'use client'

import { useMemo } from 'react'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { AnimatePresence } from 'framer-motion'

import { ROUTES } from '~/config/routes'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '~/modules/design-system/components/accordion'
import { Checkbox } from '~/modules/design-system/components/checkbox'

import { CATEGORIES, RESOURCES, SUBCATEGORIES } from '../../utils/const'
import { ResourceCard } from '../resource-card'

const categoryPriority = {
  Websites: 1,
  Libraries: 2,
  Tools: 3,
  People: 4,
}

export default function ResourcesList() {
  const searchParams = useSearchParams()

  const updateSearchParams = (category: string, subcategory: string) => {
    const params = new URLSearchParams(searchParams.toString())
    const categories = params.getAll('category')
    const subcategories = params.getAll('subcategory')

    const newSubcategories = subcategories.includes(subcategory)
      ? subcategories.filter((item) => item !== subcategory)
      : subcategories.concat(subcategory)

    const newCategories = newSubcategories.some(
      (subcat) => RESOURCES.find((resource) => resource.subcategory === subcat)?.category === category
    )
      ? categories
      : categories.filter((item) => item !== category)

    params.delete('category')
    newCategories.forEach((category) => params.append('category', category))

    params.delete('subcategory')
    newSubcategories.forEach((subcategory) => params.append('subcategory', subcategory))

    return `${ROUTES.resources}?${params.toString()}`
  }

  const filteredResources = useMemo(
    () =>
      RESOURCES.filter((resource) => {
        const selectedCategory = searchParams.getAll('category')
        const selectedSubcategories = searchParams.getAll('subcategory')

        if (selectedCategory.length > 0 && !selectedCategory.includes(resource.category)) return false
        if (selectedSubcategories.length > 0 && !selectedSubcategories.includes(resource.subcategory)) return false
        return true
      }),
    [searchParams]
  )

  const sortedResources = useMemo(() => {
    return filteredResources.sort((a, b) => {
      // Sort by category priority
      if (
        categoryPriority[a.category as keyof typeof categoryPriority] <
        categoryPriority[b.category as keyof typeof categoryPriority]
      )
        return -1
      if (
        categoryPriority[a.category as keyof typeof categoryPriority] >
        categoryPriority[b.category as keyof typeof categoryPriority]
      )
        return 1

      // If category priority is the same, sort by subcategory
      if (a.subcategory < b.subcategory) return -1
      if (a.subcategory > b.subcategory) return 1

      // If subcategory is the same, sort by name
      if (a.name < b.name) return -1
      if (a.name > b.name) return 1

      return 0 // If all are the same, return 0
    })
  }, [filteredResources])

  return (
    <div className="relative mt-12 flex gap-14">
      <div className="h-max w-56 shrink-0">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-bold">Filter</h2>
          {/* show only if there is at least on subcategory selected */}
          {searchParams.getAll('subcategory').length > 0 && (
            <Link href={ROUTES.resources} className="text-sm text-secondary">
              Clear
            </Link>
          )}
        </div>
        <div className="mt-4">
          {CATEGORIES.map((category) => {
            const selectedSubcategoriesCount = searchParams
              .getAll('subcategory')
              .filter(
                (subcategory) =>
                  RESOURCES.find((resource) => resource.subcategory === subcategory)?.category === category
              ).length

            return (
              <Accordion key={category} type="single" collapsible defaultValue={category}>
                <AccordionItem value={category}>
                  <AccordionTrigger className="flex">
                    <span>{category}</span>
                    {selectedSubcategoriesCount > 0 && (
                      <div className="ml-auto grid h-6 shrink-0 place-items-center rounded-full bg-secondary px-3 text-xs tabular-nums text-tertiary">
                        {selectedSubcategoriesCount}
                      </div>
                    )}
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="flex flex-col gap-2">
                      {SUBCATEGORIES[category as keyof typeof SUBCATEGORIES].map((subcategory: string) => (
                        <Link
                          href={updateSearchParams(category, subcategory)}
                          key={subcategory}
                          className="flex cursor-pointer items-center gap-2 rounded-md bg-primary p-2 hover:bg-secondary focus-visible:shadow-focus focus-visible:outline-0"
                        >
                          <Checkbox
                            checked={searchParams.getAll('subcategory').includes(subcategory)}
                            onChange={() => updateSearchParams(category, subcategory)}
                          />
                          <span>{subcategory}</span>
                        </Link>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            )
          })}
        </div>
      </div>

      <div className="flex-1">
        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence initial={false}>
            {sortedResources.map((resource) => (
              <ResourceCard key={resource.name} resource={resource} />
            ))}
          </AnimatePresence>
        </ul>
      </div>
    </div>
  )
}
