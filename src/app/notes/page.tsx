import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Notes',
  description: 'Brain dumps, explorations, and how-to guides.',
}

export default function NotesPage() {
  return (
    <section>
      <h1 className="font-bold">Notes</h1>
      <p>Brain dumps, explorations, and how-to guides.</p>
    </section>
  )
}
