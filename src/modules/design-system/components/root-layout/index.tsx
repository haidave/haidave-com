import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'

import { ibmPlexMono, ppTelegraf } from '~/modules/design-system/theme/fonts'

import '~/styles/globals.css'
import { CursorContextProvider } from '~/lib/cursor-context-provider'
import { ThemeProvider } from '~/lib/theme-provider'

import { Cursor } from '../cursor'
import { Header } from '../header'
import { SmoothScroll } from '../smooth-scroll'

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en" className={`${ppTelegraf.variable} ${ibmPlexMono.variable}`} suppressHydrationWarning>
      <body className="bg-primary text-primary">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <CursorContextProvider>
            <Header />
            <SmoothScroll>
              <main className="mx-auto max-w-[120rem]">{children}</main>
            </SmoothScroll>
            <Cursor />
          </CursorContextProvider>
        </ThemeProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}

export { RootLayout }
