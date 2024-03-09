import { CurvedLine } from '~/modules/design-system/components/curved-line'

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

const HomeAbout = () => {
  return (
    <section>
      <CurvedLine className="mb-16 md:mb-20" />
      <div className="flex flex-col gap-8 md:flex-row md:justify-between">
        {/* TODO make 4xl responsive */}
        <h2 className="text-3xl uppercase md:text-4xl">About me</h2>
        <div className="grid gap-4 text-xl tracking-tight md:w-3/4 md:gap-0 md:text-right md:text-2xl">
          <p className="leading-normal md:leading-[1.7]">Heyo! I&apos;m Dave — a Frontend Engineer based in Prague.</p>
          <p className="leading-normal md:leading-[1.7]">
            Currently working at STRV and building next-level applications.
          </p>
          <p className="leading-normal md:leading-[1.7]">
            I take pride in my attention to detail and endeavor for user satisfaction.
          </p>
          <p className="leading-normal md:leading-[1.7]">
            When I&apos;m not coding, I enjoy living life and capturing moments with my camera.
          </p>
        </div>
      </div>
      <div className="mt-10 flex h-max w-full flex-wrap-reverse justify-center rounded-[2.5rem] border pt-10 md:mt-20 md:pt-20">
        {HOBBIES.map((hobby) => (
          <div
            key={hobby}
            className="grid aspect-square h-24 w-24 place-items-center rounded-full border md:h-40 md:w-40"
          >
            <span className="text-center text-xs uppercase md:text-base">{hobby}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

export { HomeAbout }
