import type { Metadata } from 'next'
import Link from 'next/link'
import { allNotes } from 'contentlayer/generated'
import { compareDesc, format, parseISO } from 'date-fns'
import { ArrowRightIcon } from 'lucide-react'

import { cn } from '~/lib/utils'
import { Section } from '~/modules/layout/components/section'

export const metadata: Metadata = {
  title: 'Notes',
  description: 'Brain dumps, explorations, and how-to guides.',
}

export default function NotesPage() {
  const notes = allNotes.sort((a, b) => compareDesc(new Date(a.publishedAt), new Date(b.publishedAt)))

  return (
    <Section.Root>
      <Section.Title>Notes</Section.Title>
      <div className="mt-6 grid gap-1">
        {notes.map((note) => (
          <article key={note._id} className="group">
            <Link
              href={note.slug}
              className={cn(
                '-mx-4 grid gap-2 rounded-xl p-4',
                'hover:bg-tertiary focus-visible:shadow-focus focus-visible:outline-0'
              )}
            >
              <div className="flex items-center justify-between">
                <div className="mr-8 grid gap-1">
                  <h2 className="font-bold">{note.title}</h2>
                  <p className="text-sm text-secondary">{note.description}</p>
                  <span className="text-xs text-tertiary">{format(parseISO(note.publishedAt), 'LLL d, yyyy')}</span>
                </div>
                <span className="hidden group-hover:block">
                  <ArrowRightIcon size={18} />
                </span>
              </div>
            </Link>
          </article>
        ))}
      </div>
    </Section.Root>
  )
}
