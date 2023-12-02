import { Link } from '~/modules/design-system/components/link'
import { Section } from '~/modules/design-system/components/section'

import { HomePageContent } from '../components/home-content'

const HomePage = () => {
  return (
    <Section.Root>
      <Section.Title>Heyo, welcome!</Section.Title>
      <Section.Description>
        I&apos;m Dave &mdash; a Frontend Engineer at{' '}
        <Link
          href="https://www.strv.com/"
          isExternal
          className='relative after:absolute after:right-[-5px] after:content-["."]'
        >
          STRV
        </Link>
      </Section.Description>

      <HomePageContent />
    </Section.Root>
  )
}

export { HomePage }
