import type { Metadata } from 'next'

import { Section } from '~/modules/layout/components/section'

export const metadata: Metadata = {
  title: 'About',
  description: 'Frontend Developer at STRV.',
}

export default function AboutPage() {
  return (
    <Section.Root>
      <Section.Title>About me</Section.Title>
      <Section.Description>Heyo, I&apos;m Dave - Frontend Developer at STRV.</Section.Description>
    </Section.Root>
  )
}
