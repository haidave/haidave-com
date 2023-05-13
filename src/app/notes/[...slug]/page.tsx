import { type Metadata } from 'next'
import { notFound } from 'next/navigation'
import { allNotes } from 'contentlayer/generated'

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
    <article className="prose dark:prose-invert py-6">
      <h1 className="mb-2">{note.title}</h1>
      {note.description && <p className="mt-0 text-xl text-slate-700 dark:text-slate-200">{note.description}</p>}
    </article>
  )
}
