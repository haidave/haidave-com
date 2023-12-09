import type { Metadata } from 'next'

import { PageTransitionContainer } from '~/modules/design-system/components/page-transition-container'
import { Section } from '~/modules/design-system/components/section'
import ResourcesList from '~/modules/resources/components/resources-list'

export const metadata: Metadata = {
  title: 'Resources',
  description: 'A selection of websites, tools and people to inspire, learn, and create.',
}

const ResourcesPage = () => {
  return (
    <PageTransitionContainer>
      <Section.Root>
        <Section.Title>Resources</Section.Title>
        <Section.Description>
          A selection of websites, tools and people to inspire, learn and create.
        </Section.Description>

        <ResourcesList />
      </Section.Root>
    </PageTransitionContainer>
  )
}

export { ResourcesPage }
