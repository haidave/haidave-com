import { HomeAbout } from '../components/home-about'
import { HomeConnect } from '../components/home-connect'
import { HomeHero } from '../components/home-hero'
import { HomeProjectsDesktop } from '../components/home-projects-desktop'
import { HomeProjectsMobile } from '../components/home-projects-mobile'
import { HomeStack } from '../components/home-stack'

const HomePage = () => {
  return (
    <div className="px-6 sm:px-12">
      <HomeHero />
      <HomeAbout />
      <HomeStack />
      <HomeProjectsMobile />
      <HomeProjectsDesktop />
      <HomeConnect />
    </div>
  )
}

export { HomePage }
