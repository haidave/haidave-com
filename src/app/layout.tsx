import './globals.css'

export const metadata = {
  title: 'haidave.com',
  description: 'Personal website',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
