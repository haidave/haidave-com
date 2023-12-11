import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { GeistMono } from 'geist/font/mono'
import { GeistSans } from 'geist/font/sans'

import { Dock } from '~/modules/design-system/components/dock'

import '~/styles/globals.css'

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
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
