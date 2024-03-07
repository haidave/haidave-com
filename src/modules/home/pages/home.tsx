import Image from 'next/image'

import { CurvedLine } from '~/modules/design-system/components/curved-line'

import { HomeProjects } from '../components/home-projects'

const HOBBIES = [
  'Bouldering',
  'Street photography',
  'Productivity',
  'Anime',
  'Football',
  'Biohacking',
  'Calisthenics',
  'Self-Development',
  'Minimalism',
  'Badminton',
  'All black',
  'Stoicism',
]

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
    <div className="px-12 py-6">
      {/* HERO section */}
      <div className="relative grid h-[100svh] min-h-[45rem]">
        <div className="flex gap-8">
          <div className="mt-64 flex w-max flex-col items-end">
            <h1 className="text-9xl font-medium uppercase leading-[0.8]">
              <span className="block">Frontend</span>
              <span className="ml-32">Engineer</span>
            </h1>
            <p className="mr-2 mt-2 max-w-xs justify-self-end text-right text-sm uppercase tracking-wide">
              Obsessed with building pixel-perfect and polished interfaces that are also accessible and intuitive.
            </p>
          </div>

          <div className="relative mt-20 max-h-[60rem] w-full">
            <Image src="/hero-me.png" priority fill alt="Me" className="object-contain object-top" />
          </div>
        </div>
      </div>

      {/* About me */}
      <section className="mt-32">
        <CurvedLine className="mb-20" />
        <div className="flex justify-between">
          <h2 className="text-4xl uppercase">About me</h2>
          <div className="w-3/4 text-right text-2xl tracking-tight">
            <p className="">Heyo! I&apos;m Dave — a Frontend Engineer based in Prague.</p>
            <p className="">Currently working at STRV and building next-level applications.</p>
            <p>I take pride in my attention to detail and endeavor for user satisfaction.</p>
            <p className="">When I&apos;m not coding, I enjoy living life and capturing moments with my camera.</p>
          </div>
        </div>
        <div className="mt-20 flex h-max w-full flex-wrap-reverse justify-center rounded-[2.5rem] border pt-20">
          {HOBBIES.map((hobby) => (
            <div key={hobby} className="grid aspect-square h-40 w-40 place-items-center rounded-full border p-6">
              <span className="text-center uppercase">{hobby}</span>
            </div>
          ))}
        </div>
      </section>

      {/* How I work */}
      <section className="mt-32">
        <CurvedLine className="mb-20" />
        <div className="grid gap-20">
          <div className="flex justify-between">
            <h2 className="text-4xl uppercase">Tech Stack</h2>
            <div className="flex w-3/4 flex-wrap items-start justify-end gap-x-2 gap-y-3">
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
      <section className="mt-32">
        <HomeProjects />
      </section>

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
