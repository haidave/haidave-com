import { type Metadata } from 'next'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'

import { Dock } from '~/modules/design-system/components/dock'
import { inter } from '~/modules/design-system/theme/fonts'

import '~/styles/globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://leerob.io'),
  title: {
    default: 'Dave Nguyen',
    template: '%s | Dave Nguyen',
  },
  description: 'Frontend Engineer at STRV.',
}

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <body className="bg-primary text-primary">
        <main>{children}</main>
        <Dock />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}

export { RootLayout }
