import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'

import { aeonik, ibmPlexMono } from '~/modules/design-system/theme/fonts'

import '~/styles/globals.css'
import { ThemeProvider } from '~/lib/theme-provider'

import { Frame } from '../frame'
import { Navigation } from '../navigation'

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en" className={`${aeonik.variable} ${ibmPlexMono.variable}`} suppressHydrationWarning>
      <body className="bg-primary text-primary">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <Frame />
          <main>{children}</main>
          <Navigation />
        </ThemeProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}

export { RootLayout }
