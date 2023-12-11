import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'notes',
  description: 'Brain dumps, explorations and how-to guides.',
}

export { NotesPage as default } from '~/modules/notes/pages/notes'
