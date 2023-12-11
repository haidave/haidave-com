import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'about',
  description: 'Get to know me better.',
}

export { AboutPage as default } from '~/modules/about/pages/about'
