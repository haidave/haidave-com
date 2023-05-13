import Link from 'next/link'

import { ROUTES } from '~/config/routes'

export default function NoteLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex gap-4">
      <Link href={ROUTES.notes}>Back</Link>
      {children}
    </div>
  )
}
