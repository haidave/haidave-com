import type { Metadata } from 'next'

import ToolsList from '~/modules/about/components/tools-list'
import { Section } from '~/modules/layout/components/section'

export const metadata: Metadata = {
  title: 'Tools',
  description: 'What I use on my daily basis.',
}

export default function ToolsPage() {
  return (
    <Section.Root>
      <Section.Title>Tools</Section.Title>
      <Section.Description>What I use on my daily basis.</Section.Description>
      <ToolsList />
    </Section.Root>
  )
}
