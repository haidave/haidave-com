import './globals.css'

import { inter } from '~/modules/design-system/theme/fonts'

export const metadata = {
  title: 'haidave.com',
  description: 'Personal website',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <body>{children}</body>
    </html>
  )
}
