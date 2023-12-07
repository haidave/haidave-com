import { headers } from 'next/headers'
import { Analytics } from '@vercel/analytics/react'

import { Dock } from '~/modules/design-system/components/dock'
import { inter } from '~/modules/design-system/theme/fonts'

import '~/styles/globals.css'
import { AppContextProvider } from '~/context/app-context-provider'

export const metadata = {
  title: 'haidave.com',
  description: 'Personal website',
}

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  const headersList = headers()
  const userAgent = headersList.get('user-agent')
  const isMobile = Boolean(userAgent?.match(/Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i))

  return (
    <html lang="en" className={`${inter.variable}`}>
      <body className="bg-primary text-primary">
        <AppContextProvider initialState={{ isMobile }}>
          <main>{children}</main>
          <Dock />
        </AppContextProvider>
        <Analytics />
      </body>
    </html>
  )
}

export { RootLayout }
