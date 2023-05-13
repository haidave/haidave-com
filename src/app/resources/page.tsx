import type { Metadata } from 'next'

import { Section } from '~/modules/layout/components/section'

export const metadata: Metadata = {
  title: 'Resources',
  description: 'A selection of websites, tools, engineers and designers to inspire, learn, and create.',
}

export default function ResourcesPage() {
  return (
    <Section.Root>
      <Section.Title>Resources</Section.Title>
      <Section.Description>
        A selection of websites, tools, engineers and designers to inspire, learn, and create.
      </Section.Description>
    </Section.Root>
  )
}
