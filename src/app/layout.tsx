import './globals.css'

import { ppAgrandir, iaWriterQuattro } from '~/modules/design-system/theme/fonts'

export const metadata = {
  title: 'haidave.com',
  description: 'Personal website',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${ppAgrandir.variable} ${iaWriterQuattro.variable}`}>
      <body>{children}</body>
    </html>
  )
}
