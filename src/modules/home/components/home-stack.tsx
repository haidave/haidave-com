import { CurvedLine } from '~/modules/design-system/components/curved-line'

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

const HomeStack = () => {
  return (
    <section className="mt-20 md:mt-32">
      <CurvedLine className="mb-16 md:mb-20" />
      <div className="flex flex-col justify-between gap-8 md:flex-row">
        <h2 className="text-3xl uppercase md:text-4xl">Tech Stack</h2>
        <div className="flex max-w-[60rem] flex-wrap items-start gap-x-2 gap-y-3 md:w-3/4 md:justify-end">
          {STACK.map((stack) => (
            <div key={stack} className="rounded-[2.5rem] border px-4 py-1">
              <span className="uppercase">{stack}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export { HomeStack }
