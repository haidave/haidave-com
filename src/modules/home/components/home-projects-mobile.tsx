'use client'

import useEmblaCarousel from 'embla-carousel-react'

import { CurvedLine } from '~/modules/design-system/components/curved-line'

const PROJECTS = [
  {
    name: 'everbase',
    description: 'note-taking, personal management',
    stack: 'next 14, server actions, drizzle orm, supabase, tiptap',
  },
  {
    name: 'linear clone',
    description: 'polished landing page with micro animations',
    stack: 'next 14, tailwind, framer motion',
  },
  {
    name: 'photo gallery',
    description: 'infinite scroll, cosmos a like, my photos from x100vi!',
    stack: 'next 14, framer motion',
  },
]

const HomeProjectsMobile = () => {
  const [emblaRef] = useEmblaCarousel()

  return (
    <section className="mt-20 md:mt-32 md:hidden">
      <CurvedLine className="mb-16 md:mb-20" />
      <div className="grid">
        <h2 className="text-3xl uppercase md:text-4xl">Selected Work</h2>
        <div ref={emblaRef} className="-mx-6 mt-8 overflow-hidden px-6">
          <ul className="flex gap-4">
            {PROJECTS.map((project, index) => (
              <li key={index} className="min-w-0 max-w-[75%] shrink-0 grow-0 basis-full rounded-[2.5rem] border p-8">
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                <p>{project.stack}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export { HomeProjectsMobile }
