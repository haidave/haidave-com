import type { Metadata } from 'next'

import { Section } from '~/modules/design-system/components/section'
import ResourcesList from '~/modules/resources/components/resources-list'

export const metadata: Metadata = {
  title: 'Resources',
  description: 'A selection of websites, tools and people to inspire, learn, and create.',
}

const ResourcesPage = () => {
  return (
    <section className="relative mx-auto max-w-[1200px] px-6 pb-32 pt-24">
      <Section.Title>Resources</Section.Title>
      <Section.Description>A selection of websites, tools and people to inspire, learn and create.</Section.Description>

      <ResourcesList />
    </section>
  )
}

export { ResourcesPage }
