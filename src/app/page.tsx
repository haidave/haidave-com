import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className="grid min-h-screen place-items-center">
      <h1 className={`${inter.className}`}>haidave</h1>
    </main>
  )
}
