import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'tools',
  description: 'My trusted tools for crafting.',
}

export { ToolsPage as default } from '~/modules/tools/pages/tools'
