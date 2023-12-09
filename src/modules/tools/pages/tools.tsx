import type { Metadata } from 'next'

import { PageTransitionContainer } from '~/modules/design-system/components/page-transition-container'
import { Section } from '~/modules/design-system/components/section'
import ToolsList from '~/modules/tools/components/tools-list'

export const metadata: Metadata = {
  title: 'Tools',
  description: 'My trusted tools for crafting.',
}

const ToolsPage = () => {
  return (
    <PageTransitionContainer>
      <Section.Root>
        <Section.Title>Tools</Section.Title>
        <Section.Description>My trusted tools for crafting.</Section.Description>
        <ToolsList />
      </Section.Root>
    </PageTransitionContainer>
  )
}

export { ToolsPage }
