import type { Metadata } from 'next'
import Link from 'next/link'
import { allNotes } from 'contentlayer/generated'

import { Section } from '~/modules/layout/components/section'

export const metadata: Metadata = {
  title: 'Notes',
  description: 'Brain dumps, explorations, and how-to guides.',
}

export default function NotesPage() {
  return (
    <Section.Root>
      <Section.Title>Notes</Section.Title>
      <div className="mt-5 grid gap-4">
        {allNotes.map((note) => (
          <Link href={note.slug} key={note._id} className="border">
            <article>
              <h2 className="font-bold">{note.title}</h2>
              <p>{note.description}</p>
              <span>{note.publishedAt}</span>
            </article>
          </Link>
        ))}
      </div>
    </Section.Root>
  )
}
