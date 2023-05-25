import type { Metadata } from 'next'

import { Section } from '~/modules/layout/components/section'
import ToolsList from '~/modules/tools/components/tools-list'

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
