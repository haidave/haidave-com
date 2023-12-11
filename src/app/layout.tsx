import { type Metadata } from 'next'

export const metadata: Metadata = {
  metadataBase: new URL('https://haidave.com'),
  title: {
    default: 'haidave',
    template: '%s | haidave',
  },
  description: 'Frontend Engineer at STRV.',
}

export { RootLayout as default } from '~/modules/design-system/components/root-layout'
