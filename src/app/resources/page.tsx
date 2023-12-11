import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'resources',
  description: 'A selection of websites, tools and people to inspire, learn, and create.',
}

export { ResourcesPage as default } from '~/modules/resources/pages/resources'
