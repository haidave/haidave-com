import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About',
  description: 'Frontend Developer at STRV.',
}

export default function AboutPage() {
  return (
    <section>
      <h1 className="font-bold">About me</h1>
      <p>Heyo, I&apos;m Dave - Frontend Developer at STRV.</p>
    </section>
  )
}
