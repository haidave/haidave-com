import { HomeAbout } from '../components/home-about'
import { HomeHero } from '../components/home-hero'
import { HomeProjectsDesktop } from '../components/home-projects-desktop'
import { HomeProjectsMobile } from '../components/home-projects-mobile'
import { HomeStack } from '../components/home-stack'

const HomePage = () => {
  return (
    <div className="p-6 sm:px-12">
      <HomeHero />
      <HomeAbout />
      <HomeStack />
      <HomeProjectsMobile />
      <HomeProjectsDesktop />

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
