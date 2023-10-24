import type { Metadata } from 'next'

import { Section } from '~/modules/design-system/components/section'
import ResourcesList from '~/modules/resources/components/resources-list'

export const metadata: Metadata = {
  title: 'Resources',
  description: 'A selection of people and websites to inspire, learn, and create.',
}

const ResourcesPage = () => {
  return (
    <Section.Root>
      <Section.Title>Resources</Section.Title>
      <Section.Description>A selection of people and websites to inspire, learn, and create.</Section.Description>

      <ResourcesList />
    </Section.Root>
  )
}

export { ResourcesPage }