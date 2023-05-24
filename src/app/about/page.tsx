import type { Metadata } from 'next'

import { Section } from '~/modules/layout/components/section'

export const metadata: Metadata = {
  title: 'About',
  description: 'Frontend Developer at STRV.',
}

export default function AboutPage() {
  return (
    <Section.Root>
      <Section.Title>About</Section.Title>
      <Section.Description>
        Frontend Developer interested in TODO, currently working at{' '}
        <a
          href="https://www.strv.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline decoration-[#7e7e7e] underline-offset-2"
        >
          STRV
        </a>
        .
      </Section.Description>
    </Section.Root>
  )
}
