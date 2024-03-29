import Link from 'next/link'
import { allNotes } from 'contentlayer/generated'
import { compareDesc, format, parseISO } from 'date-fns'
import { ArrowRightIcon } from 'lucide-react'

import { cn } from '~/lib/utils'
import { PageTransitionContainer } from '~/modules/design-system/components/page-transition-container'
import { Section } from '~/modules/design-system/components/section'

const NotesPage = () => {
  const notes = allNotes.sort((a, b) => compareDesc(new Date(a.publishedAt), new Date(b.publishedAt)))

  return (
    <PageTransitionContainer>
      <Section.Root>
        <Section.Title>Notes</Section.Title>
        <Section.Description>Brain dumps, explorations and how-to guides.</Section.Description>
        <div className="mt-2 grid gap-1">
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
                  <div className="mr-8 grid gap-1 pr-8">
                    <h2 className="font-bold">{note.title}</h2>
                    <p className="line-clamp-2 text-sm text-secondary">{note.description}</p>
                    <span className="text-xs text-tertiary">{format(parseISO(note.publishedAt), 'LLL d, yyyy')}</span>
                  </div>
                  <span className="shrink-0 md:opacity-0 md:group-hover:opacity-100">
                    <ArrowRightIcon size={18} />
                  </span>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </Section.Root>
    </PageTransitionContainer>
  )
}

export { NotesPage }
