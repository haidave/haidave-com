'use client'

import { useEffect, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react'

import { cn } from '~/lib/utils'
import { ResourceCard } from '~/modules/resources/components/resource-card'

const homePageResources = [
  {
    name: 'Lusion',
    description: `Probably the best website I've ever seen.`,
    url: 'https://lusion.co/',
    category: 'Websites',
    subcategory: 'Immersive',
  },
  {
    name: 'Vaul',
    description: 'Mobile-friendly drawer component for React.',
    url: 'https://vaul.emilkowal.ski/',
    category: 'Libraries',
    subcategory: 'User Interface',
  },
  {
    name: 'Learn Next.js',
    description: 'Learn foundations of Next.js with latest features.',
    url: 'https://nextjs.org/learn',
    category: 'Websites',
    subcategory: 'Learning',
  },
  {
    name: 'AuthKit',
    description: 'Clean & polished landing page with great animations.',
    url: 'https://www.authkit.com/',
    category: 'Websites',
    subcategory: 'Polished',
  },
  {
    name: 'Pedro Duarte',
    description: 'DX Engineer at Raycast. Radix UI & Stitches. New website.',
    url: 'https://ped.ro/',
    category: 'People',
    subcategory: 'Developers',
  },
  {
    name: 'Tremor',
    description: 'Build dashboards & charts fast with Tailwind CSS.',
    url: 'https://www.tremor.so/',
    category: 'Libraries',
    subcategory: 'User Interface',
  },
]

const HomeLatestResources = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel()
  const [canScrollPrev, setCanScrollPrev] = useState(false)
  const [canScrollNext, setCanScrollNext] = useState(true)

  useEffect(() => {
    if (!emblaApi) return
    // update the button state when these events occur
    const onSelect = () => {
      setCanScrollPrev(emblaApi.canScrollPrev())
      setCanScrollNext(emblaApi.canScrollNext())
    }

    onSelect() // initial button state update

    emblaApi.on('select', onSelect)
    emblaApi.on('init', onSelect)
    emblaApi.on('resize', onSelect)

    // unmount event listeners
    return () => {
      emblaApi.off('select', onSelect)
      emblaApi.off('init', onSelect)
      emblaApi.off('resize', onSelect)
    }
  }, [emblaApi])

  return (
    <div className="relative mt-6 overflow-hidden lg:overflow-visible">
      <div ref={emblaRef} className="overflow-hidden">
        <ul className="flex gap-3">
          {homePageResources.map((resource) => (
            <li key={resource.name} className="min-w-0 max-w-[75%] shrink-0 grow-0 basis-full sm:max-w-[28%]">
              <ResourceCard resource={resource} />
            </li>
          ))}
        </ul>
      </div>

      {canScrollPrev ? (
        <button
          onClick={() => {
            emblaApi?.scrollPrev()
          }}
          className={cn(
            'group absolute -left-10 top-1/2 hidden -translate-y-1/2 lg:block',
            'focus-visible:shadow-focus focus-visible:outline-0'
          )}
        >
          <ChevronLeftIcon
            className={cn('text-tertiary group-hover:text-primary', 'transition-colors duration-300 ease-in-out')}
          />
        </button>
      ) : null}

      {canScrollNext ? (
        <button
          onClick={() => {
            emblaApi?.scrollNext()
          }}
          className={cn(
            'group absolute -right-10 top-1/2 hidden -translate-y-1/2 lg:block',
            'focus-visible:shadow-focus focus-visible:outline-0'
          )}
        >
          <ChevronRightIcon
            className={cn('text-tertiary group-hover:text-primary', 'transition-colors duration-300 ease-in-out')}
          />
        </button>
      ) : null}

      {canScrollPrev ? (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-[#161616] to-transparent"
        />
      ) : null}

      {canScrollNext ? (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-0 top-0 h-full w-20 bg-gradient-to-r from-transparent to-[#161616]"
        />
      ) : null}
    </div>
  )
}

export { HomeLatestResources }
