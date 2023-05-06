import { inter } from '~/modules/design-system/theme/fonts'
import { Dock } from '~/modules/layout/components/dock'

import '~/styles/globals.css'

export const metadata = {
  title: 'haidave.com',
  description: 'Personal website',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <body className="bg-primary text-primary">
        <Dock />
        <main>{children}</main>
      </body>
    </html>
  )
}
