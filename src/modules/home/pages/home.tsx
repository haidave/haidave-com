import Image from 'next/image'

import { CurvedLine } from '~/modules/design-system/components/curved-line'

import { HomeAbout } from '../components/home-about'
import { HomeHero } from '../components/home-hero'
import { HomeProjects } from '../components/home-projects'

const STACK = [
  'React',
  'Next.js',
  'Vercel',
  'React Native',
  'Expo',
  'TypeScript',
  'Turborepo',
  'Supabase',
  'React Query',
  'Zustand',
  'Storybook',
  'Framer Motion',
  'Tailwind CSS',
  'styled-components',
]

const HomePage = () => {
  return (
    <div className="p-6 sm:px-12">
      <HomeHero />
      <HomeAbout />
      {/* How I work */}
      <section className="mt-32">
        <CurvedLine className="mb-20" />
        <div className="grid gap-20">
          <div className="flex justify-between">
            <h2 className="text-4xl uppercase">Tech Stack</h2>
            <div className="flex w-3/4 max-w-[60rem] flex-wrap items-start justify-end gap-x-2 gap-y-3">
              {STACK.map((stack) => (
                <div key={stack} className="rounded-[2.5rem] border px-4 py-1">
                  <span className="uppercase">{stack}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="mt-32">{/* <HomeProjects /> */}</section>

      {/* Let's connect section */}
      <div className="grid h-[100svh] items-end">
        <div className="relative grid h-[80%] w-full place-items-center rounded-[2.5rem] border">
          <div className="text-center">
            <p className="text-xl uppercase">Got a project in mind?</p>
            <p className="mt-5 text-9xl font-medium uppercase ">Let&apos;s connect</p>
            <button className="mt-10 aspect-square rounded-full border-2 p-5">
              <span className="text-sm uppercase">Drop a</span>
              <span className="block text-sm uppercase">message</span>
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-6">
        <div className="flex justify-between">
          <p className="text-sm uppercase">&copy;2024 All rights reserved</p>
          <div className="flex gap-12 text-sm uppercase">
            <span>Twitter</span>
            <span>Linkedin</span>
            <span>CV</span>
          </div>
        </div>
      </footer>
    </div>
  )
}

export { HomePage }
