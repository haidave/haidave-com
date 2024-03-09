import Image from 'next/image'

const Hero = () => {
  return (
    <div className="relative grid h-[100svh] items-center justify-center md:min-h-[45rem] md:items-stretch md:justify-normal">
      <div className="grid md:grid-cols-2 md:gap-8">
        {/* copy */}
        <div className="flex w-max flex-col md:mt-64 md:items-end">
          <h1 className="grid text-9xl font-medium uppercase leading-[0.9] md:leading-[0.8]">
            <span className="block">Frontend</span>
            <span className="justify-self-end md:ml-32 md:justify-self-auto">Engineer</span>
          </h1>
          <p className="mt-2 max-w-xs justify-self-end text-right text-sm uppercase tracking-wide md:pr-2">
            Obsessed with building pixel-perfect and polished interfaces that are also accessible and intuitive.
          </p>
        </div>

        {/* image */}
        <div className="relative -z-10 hidden max-h-[60rem] w-full md:mt-20 md:block">
          <Image src="/hero-me.png" priority fill alt="Me" className="object-contain object-top" />
        </div>
      </div>
    </div>
  )
}

export { Hero }
