import type { Metadata } from 'next'
import Link from 'next/link'
import { allNotes } from 'contentlayer/generated'

export const metadata: Metadata = {
  title: 'Notes',
  description: 'Brain dumps, explorations, and how-to guides.',
}

export default function NotesPage() {
  return (
    <section>
      <h1 className="font-bold">Notes</h1>
      <p>Brain dumps, explorations, and how-to guides.</p>
      <div className="mt-5 grid gap-4">
        {allNotes.map((note) => (
          <article key={note._id} className="border">
            <Link href={note.slug}>
              <h2 className="font-bold">{note.title}</h2>
              <p>{note.description}</p>
              <code>{note.publishedAt}</code>
            </Link>
          </article>
        ))}
      </div>
    </section>
  )
}
