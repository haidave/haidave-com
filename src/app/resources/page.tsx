import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Resources',
  description: 'A selection of websites, tools, engineers and designers to inspire, learn, and create.',
}

export default function ResourcesPage() {
  return (
    <section>
      <h1 className="font-bold">Resources</h1>
      <p>A selection of websites, tools, engineers and designers to inspire, learn, and create.</p>
    </section>
  )
}
