import { type Metadata } from 'next'
import { notFound } from 'next/navigation'
import { allNotes } from 'contentlayer/generated'
import { format, parseISO } from 'date-fns'

interface NoteProps {
  params: {
    slug: string[]
  }
}

// eslint-disable-next-line @typescript-eslint/require-await
async function getNoteFromParams(params: NoteProps['params']) {
  const slug = params?.slug?.join('/')
  const note = allNotes.find((note) => note.slugAsParams === slug)

  if (!note) {
    null
  }

  return note
}

export async function generateMetadata({ params }: NoteProps): Promise<Metadata> {
  const note = await getNoteFromParams(params)

  if (!note) {
    return {}
  }

  return {
    title: note.title,
    description: note.description,
  }
}

export function generateStaticParams(): NoteProps['params'][] {
  return allNotes.map((note) => ({
    slug: note.slugAsParams.split('/'),
  }))
}

export default async function NotePage({ params }: NoteProps) {
  const note = await getNoteFromParams(params)

  if (!note) {
    notFound()
  }

  return (
    <article>
      <div className="grid gap-2">
        <h1 className="font-bold">{note.title}</h1>
        <span className="text-xs text-secondary">{format(parseISO(note.publishedAt), 'LLL d, yyyy')}</span>
      </div>
      <div className="mt-8">{note.description}</div>
    </article>
  )
}
