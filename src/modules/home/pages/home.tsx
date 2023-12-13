import { Link } from '~/modules/design-system/components/link'
import { PageTransitionContainer } from '~/modules/design-system/components/page-transition-container'
import ScrambleText from '~/modules/design-system/components/scramble-text'
import { Section } from '~/modules/design-system/components/section'

import { HomePageContent } from '../components/home-content'

const HomePage = () => {
  return (
    <PageTransitionContainer>
      <Section.Root>
        <Section.Title>Heyo, welcome!</Section.Title>
        <Section.Description>
          I&apos;m <ScrambleText originalText="Dave" animatedText="Hai" /> &mdash; a Frontend Engineer at{' '}
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
    </PageTransitionContainer>
  )
}

export { HomePage }
