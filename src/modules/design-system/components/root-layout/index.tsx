import { headers } from 'next/headers'
import { Analytics } from '@vercel/analytics/react'

import { Dock } from '~/modules/design-system/components/dock'
import { inter } from '~/modules/design-system/theme/fonts'

import '~/styles/globals.css'

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
        <main>{children}</main>
        <Dock isMobile={isMobile} />
        <Analytics />
      </body>
    </html>
  )
}

export { RootLayout }
