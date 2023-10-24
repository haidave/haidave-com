import { Dock } from '~/modules/design-system/components/dock'
import { inter } from '~/modules/design-system/theme/fonts'

import '~/styles/globals.css'

export const metadata = {
  title: 'haidave.com',
  description: 'Personal website',
}

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <body className="bg-primary text-primary">
        <main>{children}</main>
        <Dock />
      </body>
    </html>
  )
}

export { RootLayout }